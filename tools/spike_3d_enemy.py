"""3D SPIKE part 2: show the encounter ship as a 3D model.

The 2D EnemyShip keeps doing all the logic (position, approach, recoil, sinking
fade) on a hidden "Logic2D" layer; a 3D model (temporarily your sloop) mirrors
it every frame. The 2D fade-out becomes the 3D ship sinking below the water.

Run after spike_3d_sloop.py:  python tools/spike_3d_enemy.py
"""
from gdlib import (act, comment, ev, external, group, instance, load, numcmp, save, scene, set_xy,
                   upsert)


def model(name, res, w, h, d):
    return {"name": name, "type": "Scene3D::Model3DObject", "variables": [], "effects": [],
            "behaviors": [], "tags": "",
            "content": {"modelResourceName": res, "width": w, "height": h, "depth": d,
                        "rotationX": 90, "rotationY": 0, "rotationZ": 0, "keepAspectRatio": True,
                        "materialType": "StandardWithoutMetalness", "originLocation": "BottomCenterZ",
                        "centerLocation": "ObjectCenter", "animations": [], "crossfadeDuration": 0,
                        "isCastingShadow": True, "isReceivingShadow": True}}


proj = load()
sail = scene(proj, "Sailing")
upsert(sail["objects"], model("EnemyShip3D", "sloop_model", 81, 260, 131))
if not any(i["name"] == "EnemyShip3D" for i in sail["instances"]):
    inst = instance("EnemyShip3D", -2000, -2000, z=9)
    inst["z"] = -20
    sail["instances"].append(inst)

if not any(l["name"] == "Logic2D" for l in sail["layers"]):
    hidden = dict(next(l for l in sail["layers"] if l["name"] == "HUD"), name="Logic2D", visibility=False)
    sail["layers"].insert(1, hidden)
next(i for i in sail["instances"] if i["name"] == "EnemyShip")["layer"] = "Logic2D"

ui = external(proj, "UIManager")["events"]
ui[:] = [e for e in ui if e.get("name") != "3D enemy mirrors the logical enemy"]
ui.insert(3, group("3D enemy mirrors the logical enemy", [
    comment("EnemyShip (2D, hidden layer) is the logic object. EnemyShip3D copies its centre,\n"
            "heading and fade; fading out = sinking below the waterline."),
    ev([numcmp("Enemy.Active", "=", 1)], [
        act("Show", "EnemyShip3D", ""),
        set_xy("EnemyShip3D", "EnemyShip.CenterX()", "EnemyShip.CenterY()"),
        act("SetAngle", "EnemyShip3D", "=", "EnemyShip.Angle()"),
        act("Scene3D::Base3DBehavior::SetRotationY", "EnemyShip3D", "Object3D", "=",
            "4 * sin(TimeFromStart() * 1.4 + 1)"),
        act("Scene3D::Base3DBehavior::SetZ", "EnemyShip3D", "Object3D", "=",
            "-20 - (255 - EnemyShip.Opacity()) * 0.7"),
    ]),
    ev([numcmp("Enemy.Active", "=", 0)], [act("Hide", "EnemyShip3D")]),
]))
save(proj)
print("3D enemy applied")
