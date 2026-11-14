"""Export a Blender ship to .glb so it looks the same in GDevelop as in Blender.

Run inside Blender (Scripting tab, or via the Blender MCP):
    exec(open(r"F:/HighSeas/tools/blender_export_ship.py").read())

Why this exists: the ship materials texture the wood with world-position box
projection (Geometry > Position > Mapping > Image Texture [Box]) and recolour it
with Hue/Saturation/Value. glTF can't carry those nodes, so a plain export loses
the look. This script reproduces them in a form glTF understands:
  * the box projection becomes a real UV map (same axis choice, same flips,
    same Mapping scale, so every pixel lands where Blender puts it);
  * the Hue/Saturation/Value step is applied to a copy of the texture;
  * the texture keeps "Closest" (pixel-art) filtering.
It also writes <model>.firepoints.json: the muzzle of every cannon (or every empty named
FirePoint* if you add some), which tools/phase3_3d.py loads so shots leave the gun tips.
Your .blend is not changed: work happens on temporary copies that are deleted.
"""
import colorsys
import os

import bmesh
import bpy
import numpy as np
from mathutils import Vector

OUT = r"F:/HighSeas/assets/models/ships/sloop.glb"
SKIP = set()   # object names to leave out


def srgb_to_lin(c):
    return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)


def lin_to_srgb(c):
    c = np.clip(c, 0, 1)
    return np.where(c <= 0.0031308, c * 12.92, 1.055 * c ** (1 / 2.4) - 0.055)


def node(mat, kind):
    return [n for n in mat.node_tree.nodes if n.type == kind]


def recolour(img, hsv_node, name):
    """Copy of img with Blender's Hue/Saturation/Value node applied (in linear space)."""
    w, h = img.size
    px = np.array(img.pixels[:], dtype=np.float32).reshape(-1, 4)
    lin = srgb_to_lin(px[:, :3]) if img.colorspace_settings.name == "sRGB" else px[:, :3]
    hue, sat, val = (hsv_node.inputs[k].default_value for k in ("Hue", "Saturation", "Value"))
    outc = np.empty_like(lin)
    for i, (r, g, b) in enumerate(lin):
        hh, ss, vv = colorsys.rgb_to_hsv(r, g, b)
        hh = (hh + hue + 0.5) % 1.0
        ss = min(max(ss * sat, 0.0), 1.0)
        vv = vv * val
        outc[i] = colorsys.hsv_to_rgb(hh, ss, vv)
    new = bpy.data.images.get(name) or bpy.data.images.new(name, w, h, alpha=True)
    new.scale(w, h)
    # settings first: changing them on a generated image regenerates (blanks) its pixels
    new.colorspace_settings.name = "sRGB"
    new.file_format = "PNG"
    out = np.concatenate([lin_to_srgb(outc), px[:, 3:4]], axis=1)
    new.pixels[:] = out.ravel().tolist()
    new.pack()
    return new


def box_uv(co, n_obj, scale):
    """Blender's Box projection (blend 0) for one point: pick the axis the object-space
    normal points along most, with the same mirroring Blender uses."""
    x, y, z = co[0] * scale, co[1] * scale, co[2] * scale
    ax = max(range(3), key=lambda k: abs(n_obj[k]))
    if ax == 0:
        return (1 - y if n_obj[0] < 0 else y, z)
    if ax == 1:
        return (1 - x if n_obj[1] > 0 else x, z)
    return (1 - y if n_obj[2] > 0 else y, x)


def mapping_scale(nd):
    return nd.inputs["Scale"].default_value[0]


def plan_material(mat):
    """How to rebuild a box-projected material: (image, HSV node, rule) or None."""
    if not mat or not mat.use_nodes:
        return None
    texs = node(mat, "TEX_IMAGE")
    if not texs or texs[0].projection != "BOX":
        return None
    hsv = node(mat, "HUE_SAT")[0]
    links = mat.node_tree.links

    def scale_for(tex):
        for l in links:
            if l.to_node == tex and l.from_node.type == "MAPPING":
                return mapping_scale(l.from_node)
        return 1.0

    mix = node(mat, "MIX")
    if mix:   # Wood_Deck: Mix(A=side texture, B=top texture, factor = world normal Z > threshold)
        m = mix[0]
        a = next(l.from_node for l in links if l.to_node == m and l.to_socket.name == "A")
        b = next(l.from_node for l in links if l.to_node == m and l.to_socket.name == "B")
        thr = node(mat, "MATH")[0].inputs[1].default_value
        return dict(img=texs[0].image, hsv=hsv, side=scale_for(a), top=scale_for(b), thr=thr)
    return dict(img=texs[0].image, hsv=hsv, side=scale_for(texs[0]), top=scale_for(texs[0]), thr=2.0)


def simple_material(name, img, roughness):
    m = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    nt.nodes.clear()
    bsdf = nt.nodes.new("ShaderNodeBsdfPrincipled")
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    tex = nt.nodes.new("ShaderNodeTexImage")
    tex.image, tex.interpolation = img, "Closest"
    nt.links.new(tex.outputs["Color"], bsdf.inputs["Base Color"])
    nt.links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Metallic"].default_value = 0.0
    return m


scene = bpy.context.scene
deps = bpy.context.evaluated_depsgraph_get()
sources = [o for o in scene.objects if o.type == "MESH" and o.visible_get() and o.name not in SKIP]


def fire_points():
    """Cannon muzzles, relative to the model origin GDevelop uses (bottom centre of the bounding
    box), in metres. Game axes: x = Blender x, y = toward the stern (-Blender y), z = up.
    Empties named FirePoint* win if you add them; otherwise the tip of every Cannon* mesh is used
    (centre of its outermost vertices)."""
    lo = [min((o.matrix_world @ Vector(c))[k] for o in sources for c in o.bound_box) for k in range(3)]
    hi = [max((o.matrix_world @ Vector(c))[k] for o in sources for c in o.bound_box) for k in range(3)]
    cx, cy, z0 = (lo[0] + hi[0]) / 2, (lo[1] + hi[1]) / 2, lo[2]
    tips = [o.matrix_world.translation.copy() for o in scene.objects
            if o.type == "EMPTY" and o.name.startswith("FirePoint")]
    if not tips:
        for o in sources:
            if not o.name.startswith("Cannon"):
                continue
            me = o.evaluated_get(deps).to_mesh()
            ws = [o.matrix_world @ v.co for v in me.vertices]
            side = 1 if sum(w.x for w in ws) > 0 else -1
            far = max(w.x * side for w in ws)
            tip = [w for w in ws if w.x * side > far - 0.03]
            tips.append(sum(tip, Vector()) / len(tip))
            o.evaluated_get(deps).to_mesh_clear()
    pts = sorted(({"X": round(t.x - cx, 3), "Y": round(-(t.y - cy), 3), "Z": round(t.z - z0, 3)} for t in tips),
                 key=lambda p: -p["Y"])   # stern first, so a volley ripples toward the bow
    return {"Starboard": [p for p in pts if p["X"] > 0], "Port": [p for p in pts if p["X"] < 0],
            "Length": round(hi[1] - lo[1], 3), "Height": round(hi[2] - lo[2], 3)}


guns = fire_points()

# one rebuilt material per box-projected source material
plans, rebuilt = {}, {}
for o in sources:
    for m in o.data.materials:
        if m and m.name not in plans:
            plans[m.name] = plan_material(m)
for name, p in plans.items():
    if p:
        img = recolour(p["img"], p["hsv"], f"__export_{name}")
        rough = node(bpy.data.materials[name], "BSDF_PRINCIPLED")[0].inputs["Roughness"].default_value
        rebuilt[name] = simple_material(f"{name}_export", img, rough)

temp = []
for o in sources:
    ev = o.evaluated_get(deps)
    me = bpy.data.meshes.new_from_object(ev)           # modifiers applied
    copy = bpy.data.objects.new(o.name + "__export", me)
    copy.matrix_world = o.matrix_world.copy()
    scene.collection.objects.link(copy)
    temp.append(copy)

    mw = o.matrix_world
    nrm_obj = [p.normal.copy() for p in me.polygons]       # box axis uses object-space normal
    rot = mw.to_3x3()
    uv = me.uv_layers.get("BoxUV") or me.uv_layers.new(name="BoxUV")
    me.uv_layers.active = uv
    for poly in me.polygons:
        mat = me.materials[poly.material_index] if me.materials else None
        p = plans.get(mat.name) if mat else None
        if not p:
            continue
        n_world = (rot @ poly.normal).normalized()
        scale = p["top"] if n_world.z > p["thr"] else p["side"]
        for li in poly.loop_indices:
            co = mw @ me.vertices[me.loops[li].vertex_index].co   # Geometry > Position is world space
            uv.data[li].uv = box_uv(co, poly.normal, scale)
    for i, m in enumerate(me.materials):
        if m and m.name in rebuilt:
            me.materials[i] = rebuilt[m.name]
    # keep only the new UV map so the exporter uses it
    for layer in [l for l in me.uv_layers if l.name != "BoxUV"]:
        me.uv_layers.remove(layer)

# join into one mesh: one draw call per material instead of one per part (cheaper on phones)
bpy.ops.object.select_all(action="DESELECT")
for t in temp:
    t.select_set(True)
bpy.context.view_layer.objects.active = temp[0]
bpy.ops.object.join()
ship = bpy.context.view_layer.objects.active
ship.name = "Sloop__export"

os.makedirs(os.path.dirname(OUT), exist_ok=True)
bpy.ops.export_scene.gltf(filepath=OUT, export_format="GLB", use_selection=True, export_apply=True,
                          export_yup=True, export_texcoords=True, export_normals=True,
                          export_materials="EXPORT", export_image_format="AUTO", export_animations=False)
tris = sum(len(p.vertices) - 2 for p in ship.data.polygons)

# clean up: the .blend goes back to how it was
me = ship.data
bpy.data.objects.remove(ship)
bpy.data.meshes.remove(me)
for m in rebuilt.values():
    bpy.data.materials.remove(m)
for img in [i for i in bpy.data.images if i.name.startswith("__export_")]:
    bpy.data.images.remove(img)
import json
with open(OUT.replace(".glb", ".firepoints.json"), "w") as f:
    json.dump(guns, f, indent=2)
print(f"exported {OUT}  ({tris} triangles, {os.path.getsize(OUT) // 1024} KB), "
      f"{len(guns['Starboard'])}+{len(guns['Port'])} fire points")
