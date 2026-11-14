"""3D TEST B, part 2: draw combat effects and ship tags on a 2D "FX" layer on top of
the 3D scene, at the screen position the 3D camera projects them to.

Why: on a 2D+3D layer GDevelop draws 2D sprites at sea level (z = 0), so 3D hulls
and masts cover hit bursts, damage numbers and tags. On an overlay layer they are
always on top; a perspective projection keeps them lined up with the 3D ships.

Projection of a world point (x, y, h) for the base-layer camera, which sits at
(LayoutW/2, LayoutH/2, Config.CamZ), pitched Config.CamPitch degrees toward -y,
vertical field of view Config.CamFov:
    depth  = -(y - cy) sin(p) - (h - Z) cos(p)
    up     = -(y - cy) cos(p) + (h - Z) sin(p)
    screen = (cx + (x - cx) F / depth,  cy - up F / depth),  F = (H/2) / tan(fov/2)

Run after spike_3d_overhead.py:  python tools/spike_3d_fx_overlay.py
"""
from gdlib import act, ev, external, find_group, load, objvar, save, scene, set_xy, setnum, upsert, var, walk

P = "ToRad(Config.CamPitch)"


def depth(y, h):
    return f"(-(({y}) - LayoutH / 2) * sin({P}) - (({h}) - Config.CamZ) * cos({P}))"


def px(x, y, h=40):
    return f"(LayoutW / 2 + (({x}) - LayoutW / 2) * CamF / {depth(y, h)})"


def py(y, h=40):
    up = f"(-(({y}) - LayoutH / 2) * cos({P}) + (({h}) - Config.CamZ) * sin({P}))"
    return f"(LayoutH / 2 - {up} * CamF / {depth(y, h)})"


proj = load()
sail = scene(proj, "Sailing")
upsert(sail["variables"], var("CamF", 1000))
if not any(l["name"] == "FX" for l in sail["layers"]):
    fx_layer = dict(next(l for l in sail["layers"] if l["name"] == "HUD"), name="FX", visibility=True,
                    effects=[])
    hud_i = next(i for i, l in enumerate(sail["layers"]) if l["name"] == "HUD")
    sail["layers"].insert(hud_i, fx_layer)
TAGS = ("EnemyHullBg", "EnemyHullFill", "EnemyTagText", "PlayerReloadBg", "PlayerReloadFill", "PlayerTagText")
for i in sail["instances"]:
    if i["name"] in TAGS:
        i["layer"] = "FX"
dmg = next(o for o in sail["objects"] if o["name"] == "DamageText")
upsert(dmg["variables"], var("CX", 0))
upsert(dmg["variables"], var("CY", 0))

combat = external(proj, "CombatManager")["events"]
for e in walk(combat):
    acts = e.get("actions", [])
    out = []
    for a in acts:
        t, prm = a["type"]["value"], a["parameters"]
        if t == "Create" and prm[1] in ("CannonBall", "Fx", "DamageText"):
            prm[4] = '"FX"'
            out.append(a)
            if prm[1] == "DamageText":   # remember the world point; projection happens every frame
                out += [objvar("DamageText", "CX", prm[2]), objvar("DamageText", "CY", prm[3])]
            continue
        if t == "SetXY" and prm[0] == "CannonBall" and "lerp" in prm[2]:
            k = "min(1, CannonBall.T / CannonBall.Dur)"
            wx, wy = f"lerp(CannonBall.SX, CannonBall.EX, {k})", f"lerp(CannonBall.SY, CannonBall.EY, {k})"
            h = f"(30 + 60 * sin(3.14159 * {k}))"   # a real arc in height now
            prm[2] = f"{px(wx, wy, h)} - CannonBall.Width() / 2"
            prm[4] = f"{py(wy, h)} - CannonBall.Height() / 2"
        if t == "SetXY" and prm[0] == "Fx":
            prm[2] = f"{px('Fx.CX', 'Fx.CY')} - Fx.Width() / 2"
            prm[4] = f"{py('Fx.CY')} - Fx.Height() / 2"
        if t == "SetXY" and prm[0] == "DamageText" and prm[1] == "+":
            out += [objvar("DamageText", "CY", "TimeDelta() * 55", "-"),
                    set_xy("DamageText", px("DamageText.CX", "DamageText.CY", 70),
                           py("DamageText.CY", 70))]
            continue
        out.append(a)
    acts[:] = out
# CamF before anything is positioned this frame
combat.insert(1, ev([], [setnum("CamF", "(LayoutH / 2) / tan(ToRad(Config.CamFov / 2))")]))

ui = external(proj, "UIManager")["events"]
for e in walk(find_group(ui, "Combat UI: enemy tag, reload bar, ammo selection")["events"]):
    for a in e.get("actions", []):
        prm = a["parameters"]
        if a["type"]["value"] == "SetXY" and prm[0] in TAGS:
            h = 150 if prm[0].startswith("Enemy") else 0
            prm[2], prm[4] = px(prm[2], prm[4], h), py(prm[4], h)

save(proj)
print("FX overlay + projection applied")
