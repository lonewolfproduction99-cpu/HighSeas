"""Make the 3D chase camera the game's view (the look picked after the 3D tests).

Run on the project after spike_3d_sloop.py, spike_3d_enemy.py and
spike_3d_fx_overlay.py (the FX overlay draws cannonballs, splashes, damage numbers
and ship tags on top of the 3D scene at their projected positions, for any camera).

  * camera back behind/above your stern looking toward the horizon, with fog
  * ships scaled up (Config.ShipScale; 1 = the old size)
  * lights tuned so the dark Blender wood reads the same as in Blender's viewport
Tunables live in Config: CamZ, CamPitch, CamFov, ShipScreenFrac, ShipScale.
"""
import sys

from gdlib import load, save, scene, upsert, var, walk

SCALE = float(sys.argv[1]) if len(sys.argv) > 1 else 1.6
BASE = (81, 260, 131)   # sloop width, length, height at scale 1

proj = load()
cfg = next(v for v in proj["variables"] if v["name"] == "Config")
vals = {"CamZ": 620, "CamPitch": 55, "CamFov": 60, "ShipScreenFrac": 0.55,
        "ShipLength": round(BASE[1] * SCALE), "ShipScale": SCALE,
        "ShipXFrac": 0.33}   # player x as a fraction of the width; enemy mirrors it (bigger hulls stay on screen)
for k, v in vals.items():
    upsert(cfg["children"], var(k, v))

sail = scene(proj, "Sailing")
for o in sail["objects"]:
    if o["name"] in ("PlayerShip", "EnemyShip3D"):
        o["content"].update(width=round(BASE[0] * SCALE), height=round(BASE[1] * SCALE),
                            depth=round(BASE[2] * SCALE))

base = next(l for l in sail["layers"] if l["name"] == "")
base["camera3DFieldOfView"] = 60
fx = [e for e in base["effects"] if e["effectType"] != "Scene3D::LinearFog"]
fx.append({"effectType": "Scene3D::LinearFog", "name": "Horizon",
           "doubleParameters": {"near": 1100, "far": 3600},
           "stringParameters": {"color": "150;196;232"}, "booleanParameters": {}})
base["effects"] = fx
save(proj)
print(f"3D chase view set, ship scale {SCALE}")
