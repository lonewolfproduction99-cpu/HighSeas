"""3D TEST B ("2.5D"): 3D ships seen from almost overhead, so the game reads like
the 2D top-down version while the ships stay real 3D models.

Run on top of the 3D test A project (spike_3d_sloop.py + spike_3d_enemy.py):
    python tools/spike_3d_overhead.py

  * camera: small forward tilt (20 deg) and a narrower lens (45 deg), placed so the
    ships sit inside the area where GDevelop draws 2D sprites -> the 2D cannonballs,
    splashes, flashes and damage numbers are visible again
  * player back on the left like the 2D layout; enemy on the right
  * no horizon at this angle, so the fog is removed
  * enemy hull/name tag and your reload bar move from the screen-space HUD layer onto
    the sea surface (base layer), so they line up with the ships
"""
from gdlib import load, save, scene

proj = load()
cfg = next(v for v in proj["variables"] if v["name"] == "Config")
vals = {"CamZ": 1780, "CamPitch": 20, "CamFov": 45, "ShipScreenFrac": 0.55, "ShipLength": 260,
        "ShipXFrac": 0.28}
for c in cfg["children"]:
    if c["name"] in vals:
        c["value"] = vals[c["name"]]

sail = scene(proj, "Sailing")
base = next(l for l in sail["layers"] if l["name"] == "")
base["camera3DFieldOfView"] = 45
base["effects"] = [e for e in base["effects"] if e["effectType"] != "Scene3D::LinearFog"]

for i in sail["instances"]:
    if i["name"] in ("EnemyHullBg", "EnemyHullFill", "EnemyTagText",
                     "PlayerReloadBg", "PlayerReloadFill", "PlayerTagText"):
        i["layer"] = ""
        i["zOrder"] = 60 if not i["name"].endswith("Bg") else 59
save(proj)
print("2.5D overhead variant applied")
