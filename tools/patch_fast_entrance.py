"""Faster ship entrances + fire points from the PlayerFirePoint/OtherFirePoint empties.

  * the ship you catch up with now arrives in Config.ApproachTime (3.5 s) and slows into
    place (ease-out) instead of crawling down at Config.DriftSpeed; leaving is unchanged
  * ShipGuns.Sloop is reloaded from assets/models/ships/sloop.firepoints.json
Run once on the project after phase3_3d.py (it is idempotent).
"""
import json
import os

from gdlib import load, save, upsert, var, walk, external

ROOT = os.path.join(os.path.dirname(__file__), "..")
proj = load()
cfg = next(v for v in proj["variables"] if v["name"] == "Config")
upsert(cfg["children"], var("ApproachTime", 3.5))

guns = json.load(open(os.path.join(ROOT, "assets/models/ships/sloop.firepoints.json")))
upsert(proj["variables"], var("ShipGuns", {"Sloop": {
    "Starboard": guns["Starboard"], "Port": guns["Port"], "StarboardN": len(guns["Starboard"]),
    "PortN": len(guns["Port"]), "Height": guns["Height"], "Length": guns["Length"]}}))

OLD_DUR = "(ShipCY - ShipH * 0.15 - EnemyStartY) / Config.DriftSpeed"
OLD_Y = "lerp(EnemyStartY, ShipCY - ShipH * 0.15, ApproachP)"
NEW_Y = "lerp(EnemyStartY, ShipCY - ShipH * Config.AlongsideAhead, 1 - (1 - ApproachP) * (1 - ApproachP))"
hits = {"dur": 0, "y": 0}
for e in walk(external(proj, "EncounterManager")["events"]):
    for a in e.get("actions", []):
        p = a["parameters"]
        if p[:1] == ["ApproachDur"] and p[2] == OLD_DUR:
            p[2] = "Config.ApproachTime"
            hits["dur"] += 1
        if p[:1] == ["EnemyCY"] and p[2] == OLD_Y:
            p[2] = NEW_Y
            hits["y"] += 1
    if e.get("type") == "BuiltinCommonInstructions::Comment" and "slides down the screen at Config.DriftSpeed" in e.get("comment", ""):
        e["comment"] = ("We are faster: the ship we catch up with comes in from the top of the screen in\n"
                        "Config.ApproachTime seconds and slows into place alongside, holds there during the\n"
                        "encounter, then (unless sunk) drifts back at Config.DriftSpeed out of the bottom.")
print(hits)
save(proj)
