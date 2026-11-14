"""3D SPIKE: your Blender sloop as a real 3D model + a "top back" chase camera.

What it changes in the Sailing scene (Port stays 2D):
  * PlayerShip becomes a 3D model (assets/models/ships/sloop.glb, exported from
    PiratesShips.blend). Same object name, so the managers keep working.
  * The base layer becomes 2D+3D with sky/sun lights and sky-coloured fog.
  * The 2D tiled ocean is hidden; a large textured 3D water surface (+ foam
    layer) scrolls toward the camera instead.
  * Camera: kept centred, raised and pitched forward so you look past the stern
    of your ship toward the horizon. Ships are placed where the camera looks.
    Tunables: Config.CamZ, CamPitch, CamFov, ShipScreenFrac.
  * Ship rolls (rotation around its length) and bobs (Z) instead of 2D sway.

Known spike limitations: enemies / cannonballs / effects are still 2D and lie
flat on the water; HUD tags above ships are in screen space and won't line up.

Run once on the Phase 3 project:  python tools/spike_3d_sloop.py
"""
import sys

from gdlib import (act, comment, ev, external, find_group, group, image, instance, load, s, save,
                   scene, set_xy, setnum, upsert, var, walk)

proj = load()
sail = scene(proj, "Sailing")
if any(o["name"] == "Water3D" for o in sail["objects"]) and "--force" not in sys.argv:
    sys.exit("3D spike already applied.")

upsert(proj["resources"]["resources"], {"file": "assets/models/ships/sloop.glb", "kind": "model3D",
                                        "metadata": "", "name": "sloop_model", "userAdded": True})

cfg = next(v for v in proj["variables"] if v["name"] == "Config")
for k, v in {"CamZ": 430, "CamPitch": 52, "CamFov": 60, "ShipScreenFrac": 0.55, "ShipLength": 260,
             "WaterSize": 6000}.items():
    upsert(cfg["children"], var(k, v))
for n in ("ShipGroundY", "RayA"):
    upsert(sail["variables"], var(n, 0))

# ---------------------------------------------------------------- objects
OBJ3D_BEHAVIORS = []  # Base3DBehavior ("Object3D") is a default behaviour added on load


def model(name, res, w, h, d):
    return {"name": name, "type": "Scene3D::Model3DObject", "variables": [], "effects": [],
            "behaviors": OBJ3D_BEHAVIORS, "tags": "",
            "content": {"modelResourceName": res, "width": w, "height": h, "depth": d,
                        "rotationX": 90, "rotationY": 0, "rotationZ": 0, "keepAspectRatio": True,
                        "materialType": "StandardWithoutMetalness", "originLocation": "BottomCenterZ",
                        "centerLocation": "ObjectCenter", "animations": [], "crossfadeDuration": 0,
                        "isCastingShadow": True, "isReceivingShadow": True}}


def water(name, res, transparent):
    faces = {f: "" for f in ("front", "back", "left", "right", "top", "bottom")}
    faces["front"] = res
    c = {"enableTextureTransparency": transparent, "facesOrientation": "Y",
         "backFaceUpThroughWhichAxisRotation": "X", "materialType": "Basic", "tint": "255;255;255",
         "isCastingShadow": False, "isReceivingShadow": False,
         "width": 6000, "height": 6000, "depth": 1}
    for f, r in faces.items():
        c[f + "FaceResourceName"] = r
        c[f + "FaceVisible"] = f == "front"
        c[f + "FaceResourceRepeat"] = True
    return {"name": name, "type": "Scene3D::Cube3DObject", "variables": [], "effects": [],
            "behaviors": OBJ3D_BEHAVIORS, "tags": "", "content": c}


# Ship proportions from Blender: 5.0 wide x 16 long x 8.1 tall (metres)
upsert(sail["objects"], model("PlayerShip", "sloop_model", 81, 260, 131))
upsert(sail["objects"], water("Water3D", "ocean_tile", False))
upsert(sail["objects"], water("Foam3D", "foam_tile", True))
for n, z in (("Water3D", -7), ("Foam3D", -5)):  # top faces below z=0, where 2D sprites are drawn
    if not any(i["name"] == n for i in sail["instances"]):
        inst = instance(n, -3000, -4000, z=0)
        inst["z"] = z
        sail["instances"].append(inst)
ship_inst = next(i for i in sail["instances"] if i["name"] == "PlayerShip")
ship_inst["z"] = -20

# ---------------------------------------------------------------- layer, lights, sky
base = next(l for l in sail["layers"] if l["name"] == "")
base["renderingType"] = ""                      # automatic 2D + 3D
base["camera3DFieldOfView"] = 60
base["camera3DFarPlaneDistance"] = 12000
base["effects"] = [
    {"effectType": "Scene3D::HemisphereLight", "name": "SkyLight",
     "doubleParameters": {"intensity": 0.85, "elevation": 90, "rotation": 0},
     "stringParameters": {"skyColor": "215;232;255", "groundColor": "60;80;100", "top": "Z+"},
     "booleanParameters": {}},
    {"effectType": "Scene3D::DirectionalLight", "name": "Sun",
     "doubleParameters": {"intensity": 1.0, "elevation": 48, "rotation": 35, "shadowDistance": 2000,
                          "shadowIntensity": 0.6, "minimumShadowBias": 0, "distanceFromCamera": 1500,
                          "frustumSize": 4000, "shadowSoftness": 1},
     "stringParameters": {"color": "255;242;220", "top": "Z+", "shadowQuality": "medium",
                          "shadowRenderingMode": "fittedToCameraView"},
     "booleanParameters": {"isCastingShadow": False}},
    {"effectType": "Scene3D::LinearFog", "name": "Horizon",
     "doubleParameters": {"near": 1100, "far": 3600},
     "stringParameters": {"color": "150;196;232"}, "booleanParameters": {}},
]
sail.pop("g", None)`nsail["r"], sail["v"], sail["b"] = 150, 196, 232  # GDevelop stores green as "v"  # sky colour behind the horizon

# ---------------------------------------------------------------- events
ui = external(proj, "UIManager")["events"]
layout = find_group(ui, "Layout (on start and on resize)")["events"][2]["actions"]
# a 3D model is sized in its object settings, not with the sprite SetSize action
layout[:] = [a for a in layout if not (a["type"]["value"] == "SetSize" and a["parameters"][0] == "PlayerShip")]
for i, a in enumerate(layout):
    if a["parameters"][:1] == ["ShipCY"]:
        cam = [
            act("Hide", "Ocean"), act("Hide", "OceanFoam"),
            act("Scene3D::SetFov", "", "=", "Config.CamFov", '""', "0"),
            act("Scene3D::SetCameraZ", "", "=", "Config.CamZ", '""', "0"),
            act("Scene3D::SetCameraRotationX", "", "=", "Config.CamPitch", '""', "0"),
            # where the ray through ShipScreenFrac of the screen height meets the water
            setnum("RayA", "atan((2 * Config.ShipScreenFrac - 1) * tan(ToRad(Config.CamFov / 2)))"),
            setnum("ShipGroundY", "LayoutH / 2 - Config.CamZ * tan(ToRad(Config.CamPitch) - RayA)"),
        ]
        a["parameters"][2] = "ShipGroundY"
        layout[i:i] = cam
        break
for a in layout:
    if a["parameters"][:1] == ["ShipH"]:
        a["parameters"][2] = "Config.ShipLength"

motion = find_group(ui, "Ship idle motion (rocking + bobbing, time-based)")["events"]
motion[0]["actions"] = [
    act("SetAngle", "PlayerShip", "=", "1.2 * sin(TimeFromStart() * 0.9)"),
    act("Scene3D::Base3DBehavior::SetRotationY", "PlayerShip", "Object3D", "=", "4 * sin(TimeFromStart() * 1.6)"),
    act("Scene3D::Base3DBehavior::SetZ", "PlayerShip", "Object3D", "=", "-20 + 3 * sin(TimeFromStart() * 1.1)"),
    set_xy("PlayerShip", "ShipCX", "ShipCY"),
]
for e in walk(motion):
    for a in e.get("actions", []):
        if a["type"]["value"] == "SetXY" and "PlayerRecoil" in a["parameters"][2]:
            a["parameters"][2] = "ShipCX - 10 * PlayerRecoil"

ui[:] = [e for e in ui if e.get("name") != "3D water scroll"]
ui.insert(2, group("3D water scroll", [
    comment("The water surfaces slide toward the camera by the same offsets the 2D ocean\n"
            "used (wrapped at the texture size), so the tiling is seamless."),
    ev([], [
        set_xy("Water3D", "LayoutW / 2 - Config.WaterSize / 2",
               "LayoutH - Config.WaterSize + 600 + OceanOffset"),
        set_xy("Foam3D", "LayoutW / 2 - Config.WaterSize / 2",
               "LayoutH - Config.WaterSize + 600 + FoamOffset"),
    ]),
]))

save(proj)
print("3D spike applied to HighSeas.json")


