"""Phase 3 redo for the 3D chase view (run after setup_3d_chase.py).

Combat rules are unchanged (same rolls, damage, ammo, outcomes; see phase3_combat.py).
What changes is how the fight is staged in 3D:
  * every ball leaves the muzzle of a real cannon. Fire points come from Blender
    (assets/models/ships/sloop.firepoints.json, written by blender_export_ship.py) and
    are turned into world positions at the moment the ball launches, using the ship's
    current roll, pitch and heading (GDevelop rotates a model around its 3D centre)
  * balls fly a 3D arc: hits strike the near hull side and vanish in a burst (damage
    applies then); misses fall short between the ships or sail past the bow/stern
  * effects, balls and numbers are projected from 3D points and shrink with distance
  * firing heels a ship a little; hits shake it; a beaten enemy goes down bow-first while
    listing; your ship sinks the same way when hull reaches 0
  * the ship you catch up with slides down from the top of the screen at a slow, steady
    speed (Config.DriftSpeed) until alongside, and afterwards (unless sunk) keeps drifting
    back at the same speed out of the bottom of the screen
  * ship tags/bars follow the 3D ships and are kept inside the screen
Run on the project after setup_3d_chase.py (once; it rewrites encounter staging).
"""
import json
import os

from gdlib import (act, comment, create, delete, ev, expcmp, external, find_group, foreach_object,
                   group, hide, load, numcmp, objcmp, objvar, repeat, s, save, scene, set_text,
                   set_xy, setnum, setstr, show, size, strcmp, upsert, var, walk)
from proj3d import depth, persp, px, py

ROOT = os.path.join(os.path.dirname(__file__), "..")
proj = load()
sail = scene(proj, "Sailing")
cfg = next(v for v in proj["variables"] if v["name"] == "Config")
for k, v in {"ShipZ": -20, "DriftSpeed": 120}.items():
    upsert(cfg["children"], var(k, v))
cfg["children"] = [c for c in cfg["children"] if c["name"] != "ApproachDist"]
guns = json.load(open(os.path.join(ROOT, "assets/models/ships/sloop.firepoints.json")))
upsert(proj["variables"], var("ShipGuns", {"Sloop": {
    "Starboard": guns["Starboard"], "Port": guns["Port"], "StarboardN": len(guns["Starboard"]),
    "PortN": len(guns["Port"]), "Height": guns["Height"], "Length": guns["Length"]}}))
for n in ("U", "Zc", "RefDepth", "MH", "PlayerHit", "EnemyHit", "EnemyStartY", "ApproachDur", "TagX", "TagY",
          "RA", "RB", "RC", "DZ", "Y1", "Z1", "X2", "Z2"):
    upsert(sail["variables"], var(n, 0))
objs = {o["name"]: o for o in sail["objects"]}
for k in ("SH", "EH", "GX", "GY", "GZ", "Launched", "Long", "Arc"):
    upsert(objs["CannonBall"]["variables"], var(k, 0))
for k in ("H", "Vh"):
    upsert(objs["Fx"]["variables"], var(k, 0))
upsert(objs["DamageText"]["variables"], var("H", 0))

in_combat = strcmp("Voyage.State", "COMBAT")
T = "TimeFromStart()"


def fx(anim, x, y, h, life, delay=0, scale=1.0, grow=0.0, vx=0, vy=0, vh=0):
    return [create("Fx", x, y, "FX"), act("SetZOrder", "Fx", "=", "40"), act("SetAnimationName", "Fx", s(anim)),
            objvar("Fx", "CX", x), objvar("Fx", "CY", y), objvar("Fx", "H", h), objvar("Fx", "Life", life),
            objvar("Fx", "Age", f"-({delay})"), objvar("Fx", "BaseScale", scale), objvar("Fx", "Grow", grow),
            objvar("Fx", "Vx", vx), objvar("Fx", "Vy", vy), objvar("Fx", "Vh", vh), act("Opacity", "Fx", "=", "0")]


def dmg_text(text_expr, x, y, h, color):
    return [create("DamageText", x, y, "FX"), set_text("DamageText", text_expr),
            act("TextObject::ChangeColor", "DamageText", s(color)), act("SetZOrder", "DamageText", "=", "50"),
            objvar("DamageText", "CX", x), objvar("DamageText", "CY", y), objvar("DamageText", "H", h),
            act("TextObject::Opacity", "DamageText", "=", "0")]


def volley(tgt_cx, tgt_cy, side, target_flag, prefix, guns):
    """One cannonball for gun BallIndex (inside a Repeat). The ball only remembers which gun
    fires it (fire point, in game units relative to the ship's bottom centre); its world start
    is worked out when it launches (see "Launch"), so it leaves the muzzle wherever the ship
    has rolled to by then."""
    gun = f"ShipGuns.Sloop.{guns}[mod(BallIndex, ShipGuns.Sloop.{guns}N)]"
    hit_h = "(Config.ShipZ + U * RandomFloatInRange(0.9, 2.4))"
    miss_short = "(1 - CannonBall.Hit) * (1 - CannonBall.Long)"
    return [
        create("CannonBall", -1000, -1000, "FX"),
        act("SetZOrder", "CannonBall", "=", "35"),
        act("SetAnimationName", "CannonBall", f"{prefix}.Ammo"),
        objvar("CannonBall", "Target", target_flag),
        objvar("CannonBall", "Launched", 0),
        objvar("CannonBall", "GX", f"U * {gun}.X"), objvar("CannonBall", "GY", f"U * {gun}.Y"),
        objvar("CannonBall", "GZ", f"U * {gun}.Z"),
        objvar("CannonBall", "Hit", f"floor(RandomFloat(1) + {prefix}.Accuracy)"),
        objvar("CannonBall", "Damage", f"CannonBall.Hit * round({prefix}.CannonDamage * {prefix}.AmmoHullMult"
                                       " * RandomFloatInRange(0.8, 1.2))"),
        objvar("CannonBall", "CrewKill", f"CannonBall.Hit * floor(RandomFloat(1) + {prefix}.AmmoCrewKill)"),
        objvar("CannonBall", "SailDmg", f"CannonBall.Hit * {prefix}.AmmoSailDmg"),
        # where it ends: hits strike the near side of the hull; a miss either falls short into the
        # water between the ships, or sails high past the bow or stern and splashes beyond
        objvar("CannonBall", "Long", "(1 - CannonBall.Hit) * floor(RandomFloat(1) * 2)"),
        objvar("CannonBall", "EX", f"{tgt_cx} - {side} * ((1 - CannonBall.Long) * U * 2.3"
                                   f" + {miss_short} * RandomInRange(30, 170)) + CannonBall.Long * RandomInRange(-40, 40)"),
        objvar("CannonBall", "EY", f"{tgt_cy} + (1 - CannonBall.Long) * RandomFloatInRange(-0.3, 0.3) * ShipH * (2 - CannonBall.Hit)"
                                   " + CannonBall.Long * (2 * floor(RandomFloat(1) * 2) - 1) * (ShipH * 0.55 + RandomInRange(20, 120))"),
        objvar("CannonBall", "EH", f"CannonBall.Hit * {hit_h} - (1 - CannonBall.Hit) * 6"),
        objvar("CannonBall", "Arc", "40 + CannonBall.Long * 90"),
        objvar("CannonBall", "T", "-BallIndex * Config.VolleyStagger"),
        objvar("CannonBall", "Dur", "Config.ShotFlightTime"),
        act("Opacity", "CannonBall", "=", "0"),
    ]


def muzzle(ship):
    """World position (MX, MY, MH) of the ball's fire point on `ship` as it is posed right now.
    GDevelop turns a model around its 3D centre: rotation X (pitch), then Y (roll), then the
    2D angle (heading). Centre height above the model's bottom = Zc."""
    return [
        setnum("RA", f"ToRad({ship}.Object3D::RotationX())"),
        setnum("RB", f"ToRad({ship}.Object3D::RotationY())"),
        setnum("RC", f"ToRad({ship}.Angle())"),
        setnum("DZ", "CannonBall.GZ - Zc"),
        setnum("Y1", "CannonBall.GY * cos(RA) - DZ * sin(RA)"),
        setnum("Z1", "CannonBall.GY * sin(RA) + DZ * cos(RA)"),
        setnum("X2", "CannonBall.GX * cos(RB) + Z1 * sin(RB)"),
        setnum("Z2", "-CannonBall.GX * sin(RB) + Z1 * cos(RB)"),
        setnum("MX", f"{ship}.X() + X2 * cos(RC) - Y1 * sin(RC)"),
        setnum("MY", f"{ship}.Y() + X2 * sin(RC) + Y1 * cos(RC)"),
        setnum("MH", f"{ship}.Object3D::Z() + Zc + Z2"),
    ]


SIDE = "(2 * CannonBall.Target - 1)"   # +1: player firing to the right, -1: enemy firing left
LAUNCH = foreach_object("CannonBall", [objcmp("CannonBall", "Launched", "=", 0), objcmp("CannonBall", "T", ">=", 0)], [], [
    ev([objcmp("CannonBall", "Target", "=", 1)], muzzle("PlayerShip")),
    ev([objcmp("CannonBall", "Target", "=", 0)], muzzle("EnemyShip3D")),
    ev([], [objvar("CannonBall", "SX", "MX"), objvar("CannonBall", "SY", "MY"), objvar("CannonBall", "SH", "MH"),
            objvar("CannonBall", "Launched", 1),
            *fx("Flash", "MX", "MY", "MH", life=0.16, scale=0.6, grow=2),
            *fx("Smoke", "MX", "MY", "MH", life=1.2, scale=0.5, grow=0.9, vx=f"{SIDE} * 16", vh=22)]),
])


def impact(hull, crew, sails, color, shake):
    return [
        setnum(hull, f"max(0, {hull} - CannonBall.Damage)"),
        setnum(crew, f"max(0, {crew} - CannonBall.CrewKill)"),
        setnum(sails, f"max(0, {sails} - CannonBall.SailDmg)"),
        setnum(shake, 1),
        *fx("Hit", "CannonBall.EX", "CannonBall.EY", "CannonBall.EH", life=0.45, scale=0.8, grow=1.2),
        *dmg_text('"-" + ToString(CannonBall.Damage)', "CannonBall.EX + RandomInRange(-30, 30)", "CannonBall.EY", "CannonBall.EH + 50",
                  color),
    ]


EFF_RELOAD = "{s}.ReloadTime / clamp({s}.Crew / max(1, {s}.Cannons * Config.CrewPerCannon), 0.4, 1)"
K = "min(1, CannonBall.T / CannonBall.Dur)"
BX, BY = f"lerp(CannonBall.SX, CannonBall.EX, {K})", f"lerp(CannonBall.SY, CannonBall.EY, {K})"
BH = f"(lerp(CannonBall.SH, CannonBall.EH, {K}) + CannonBall.Arc * sin(3.14159 * {K}))"

GROUPS = {
    "Reload timers": [
        ev([in_combat], [setnum("Voyage.ReloadLeft", "TimeDelta()", "-"), setnum("Enemy.ReloadLeft", "TimeDelta()", "-")]),
        ev([], [setnum("PlayerRecoil", "max(0, PlayerRecoil - TimeDelta() * 3)"),
                setnum("EnemyRecoil", "max(0, EnemyRecoil - TimeDelta() * 3)"),
                setnum("PlayerHit", "max(0, PlayerHit - TimeDelta() * 3)"),
                setnum("EnemyHit", "max(0, EnemyHit - TimeDelta() * 3)")]),
    ],
    "Player volley": [
        ev([in_combat, numcmp("Voyage.ReloadLeft", "<=", 0), numcmp("Voyage.Cannonballs", ">", 0),
            numcmp("Voyage.Crew", ">", 0)], [
            setnum("VolleyN", "min(Voyage.Cannons, Voyage.Cannonballs)"),
            setnum("Voyage.Cannonballs", "max(0, Voyage.Cannonballs - VolleyN)"),
            setnum("Voyage.ReloadTotal", EFF_RELOAD.format(s="Voyage")),
            setnum("Voyage.ReloadLeft", "Voyage.ReloadTotal"), setnum("PlayerRecoil", 1), setnum("HudTimer", 1),
        ], [repeat("VolleyN", "BallIndex", actions=volley("EnemyCX", "EnemyCY", 1, 1, "Voyage", "Starboard"))]),
        ev([in_combat, numcmp("Voyage.ReloadLeft", "<=", 0), numcmp("Voyage.Cannonballs", "<=", 0),
            numcmp("OutOfAmmoWarned", "=", 0)],
           [setnum("OutOfAmmoWarned", 1), setstr("BannerText", '"Out of cannonballs! Flee or surrender."'),
            setnum("BannerTime", 3), setnum("BannerDirty", 1)]),
    ],
    "Cannonball flight and impact": [
        ev([], [objvar("CannonBall", "T", "TimeDelta()", "+")]),
        comment("Launch: the ball's turn in the ripple has come -> place it at its gun's muzzle."),
        LAUNCH,
        ev([objcmp("CannonBall", "T", ">=", 0), objcmp("CannonBall", "Launched", "=", 1)], [
            act("Opacity", "CannonBall", "=", "255"),
            act("ChangeScale", "CannonBall", "=", f"0.9 * {persp(BY, BH)}"),
            set_xy("CannonBall", f"{px(BX, BY, BH)} - CannonBall.Width() / 2",
                   f"{py(BY, BH)} - CannonBall.Height() / 2")]),
        foreach_object("CannonBall", [in_combat, objcmp("CannonBall", "T", ">=", "CannonBall.Dur")], [], [
            ev([objcmp("CannonBall", "Hit", "=", 1), objcmp("CannonBall", "Target", "=", 1)],
               impact("Enemy.Hull", "Enemy.Crew", "Enemy.Sails", "255;255;255", "EnemyHit") + [setnum("HudTimer", 1)]),
            ev([objcmp("CannonBall", "Hit", "=", 1), objcmp("CannonBall", "Target", "=", 0)],
               impact("Voyage.Hull", "Voyage.Crew", "Voyage.Sails", "255;110;90", "PlayerHit") + [setnum("HudTimer", 1)]),
            ev([objcmp("CannonBall", "Hit", "=", 1), objcmp("CannonBall", "CrewKill", ">", 0)],
               dmg_text('"-" + ToString(CannonBall.CrewKill) + " crew"', "CannonBall.EX + RandomInRange(-30, 30)",
                        "CannonBall.EY + 70", "CannonBall.EH - 30", "255;170;80")),
            ev([objcmp("CannonBall", "Hit", "=", 1), objcmp("CannonBall", "SailDmg", ">", 0)],
               dmg_text('"sails -" + ToString(CannonBall.SailDmg)', "CannonBall.EX + RandomInRange(-30, 30)",
                        "CannonBall.EY - 70", "CannonBall.EH + 120", "150;210;255")),
            ev([objcmp("CannonBall", "Hit", "=", 0)],
               fx("Splash", "CannonBall.EX", "CannonBall.EY", -6, life=0.6, scale=0.55, grow=0.9)),
            ev([], [delete("CannonBall")]),
        ]),
        ev([strcmp("Voyage.State", "COMBAT", "!=")], [delete("CannonBall")]),
    ],
    "Effects + damage numbers (time-based, self-deleting)": [
        ev([], [objvar("Fx", "Age", "TimeDelta()", "+"), objvar("DamageText", "Age", "TimeDelta()", "+")]),
        ev([objcmp("Fx", "Age", ">=", 0)], [
            objvar("Fx", "CX", "Fx.Vx * TimeDelta()", "+"), objvar("Fx", "CY", "Fx.Vy * TimeDelta()", "+"),
            objvar("Fx", "H", "Fx.Vh * TimeDelta()", "+"),
            act("ChangeScale", "Fx", "=", f"(Fx.BaseScale + Fx.Grow * Fx.Age) * {persp('Fx.CY', 'Fx.H')}"),
            act("Opacity", "Fx", "=", "255 * clamp(1 - Fx.Age / Fx.Life, 0, 1)"),
            set_xy("Fx", f"{px('Fx.CX', 'Fx.CY', 'Fx.H')} - Fx.Width() / 2",
                   f"{py('Fx.CY', 'Fx.H')} - Fx.Height() / 2")]),
        ev([objcmp("Fx", "Age", ">=", "Fx.Life")], [delete("Fx")]),
        ev([], [objvar("DamageText", "H", "TimeDelta() * 60", "+"),
                set_xy("DamageText", f"{px('DamageText.CX', 'DamageText.CY', 'DamageText.H')} - DamageText.Width() / 2",
                       f"{py('DamageText.CY', 'DamageText.H')} - DamageText.Height() / 2"),
                act("TextObject::Opacity", "DamageText", "=",
                    "255 * clamp(2 * (1 - DamageText.Age / DamageText.Life), 0, 1)")]),
        ev([objcmp("DamageText", "Age", ">=", "DamageText.Life")], [delete("DamageText")]),
    ],
}
ENEMY_VOLLEY = volley("ShipCX", "ShipCY", -1, 0, "Enemy", "Port")

combat = external(proj, "CombatManager")["events"]
for name, events in GROUPS.items():
    find_group(combat, name)["events"] = events
# the enemy volley group keeps its surrender logic; only the Repeat's ball actions change
for e in find_group(combat, "Enemy volley (or surrender when beaten)")["events"]:
    for sub in e.get("events", []):
        for r in sub.get("events", []):
            if r.get("type") == "BuiltinCommonInstructions::Repeat":
                r["actions"] = ENEMY_VOLLEY
# camera constants for the projection, before anything is positioned this frame
cam = next(e for e in combat if any(a["parameters"][:1] == ["CamF"] for a in e.get("actions", [])))
cam["actions"] = [setnum("CamF", "(LayoutH / 2) / tan(ToRad(Config.CamFov / 2))"),
                  setnum("U", "Config.ShipLength / ShipGuns.Sloop.Length"),   # game units per Blender metre
                  setnum("Zc", "U * ShipGuns.Sloop.Height / 2"),               # model's rotation centre height
                  setnum("RefDepth", depth("ShipCY", "Config.ShipZ + U * 2"))]
combat[0]["comment"] += ("\n3D: balls fly from the sloop's real gun ports along a 3D arc; everything\n"
                         "spawned here lives on the FX overlay layer and is projected from (CX, CY, H).")

# ------------------------------------------------------------------ encounter staging
enc = external(proj, "EncounterManager")["events"]
ALONGSIDE_Y = "ShipCY - ShipH * Config.AlongsideAhead"   # 0 = level with the player ship
# ground y seen at the very top edge of the screen (the camera looks down, no horizon at this pitch)
TOP_Y = "(LayoutH / 2 - Config.CamZ / tan(ToRad(max(5, Config.CamPitch - Config.CamFov / 2))))"
GONE_Y = "LayoutH / 2 + ShipH * 0.6"     # bow has passed under the camera: off the bottom edge
DRIFT = setnum("EnemyCY", "Config.DriftSpeed * TimeDelta()", "+")
for e in walk(enc):
    acts = e.get("actions", [])
    for i, a in enumerate(acts):
        p = a["parameters"]
        if p[:1] == ["EnemyStartX"]:       # straight down its own lane, no sideways slide
            p[2] = "X0 + Config.RefWidth * (1 - Config.ShipXFrac + 0.04)"
        if p[:3] == ["EnemyCY", "=", ALONGSIDE_Y]:   # spawn: just above the top edge of the screen
            acts[i:i + 1] = [setnum("EnemyStartY", f"{TOP_Y} - ShipH * 0.75"), setnum("EnemyCY", "EnemyStartY"),
                             setnum("ApproachDur", f"({ALONGSIDE_Y} - EnemyStartY) / Config.DriftSpeed")]
            break
motion = find_group(enc, "Enemy ship motion (time-based)")["events"]
motion.insert(0, comment("We are faster: the ship we catch up with slides down the screen at Config.DriftSpeed\n"
                         "until it is alongside, holds there during the encounter, then (unless sunk) keeps\n"
                         "drifting back at the same speed and leaves through the bottom of the screen."))
for e in motion:
    conds = [(c["parameters"][0], c["parameters"][-1]) for c in e.get("conditions", [])]
    acts = e.get("actions", [])
    for c in e.get("conditions", []):
        if c["parameters"][-1] == "Config.ApproachTime":
            c["parameters"][-1] = "ApproachDur"
    if conds == [("Voyage.State", '"ENCOUNTER_APPROACH"')]:
        acts[:] = [setnum("ApproachP", "min(1, Voyage.StateTime / max(0.1, ApproachDur))"),
                   setnum("Ease", "ApproachP"),
                   setnum("EnemyCX", "lerp(EnemyStartX, EnemyTargetX, Ease)"),
                   setnum("EnemyCY", f"lerp(EnemyStartY, {ALONGSIDE_Y}, ApproachP)"),
                   act("SetAngle", "EnemyShip", "=", "2 * sin(TimeFromStart() * 1.4)")]
    if ("Voyage.State", '"SAILING"') in conds and len(conds) == 2 and conds[1][0] == "Enemy.Departing":
        acts[:] = [a for a in acts if a["parameters"][0] not in ("EnemyCY", "EnemyCX")] + [DRIFT]
    for c in e.get("conditions", []):
        if c["parameters"][:1] == ["EnemyCY"]:      # leave / behind: gone off the bottom edge
            c["parameters"][1:] = [">", GONE_Y]

# ------------------------------------------------------------------ 3D ship motion (UIManager)
ui = external(proj, "UIManager")["events"]
RX, RY, SZ = ("Scene3D::Base3DBehavior::SetRotationX", "Scene3D::Base3DBehavior::SetRotationY",
              "Scene3D::Base3DBehavior::SetZ")
find_group(ui, "Ship idle motion (rocking + bobbing, time-based)")["events"] = [
    comment("Roll (RotationY): sea swell + heel from firing a broadside + shudder when hit.\n"
            "When the voyage is SUNK the ship goes down bow-first."),
    ev([], [act("SetAngle", "PlayerShip", "=", f"1.2 * sin({T} * 0.9)"),
            act(RY, "PlayerShip", "Object3D", "=", f"3 * sin({T} * 1.6) + 4 * PlayerRecoil + 2 * PlayerHit * sin({T} * 45)"),
            act(SZ, "PlayerShip", "Object3D", "=", f"Config.ShipZ + 3 * sin({T} * 1.1)"),
            act(RX, "PlayerShip", "Object3D", "=", "0"),
            set_xy("PlayerShip", "ShipCX - 8 * PlayerRecoil", "ShipCY")]),
    ev([strcmp("Voyage.State", "SUNK")], [
        act(SZ, "PlayerShip", "Object3D", "=", "Config.ShipZ - min(U * 9, Voyage.StateTime * U * 3)"),
        act(RX, "PlayerShip", "Object3D", "=", "-min(22, Voyage.StateTime * 9)"),
        act(RY, "PlayerShip", "Object3D", "+", "min(25, Voyage.StateTime * 10)")]),
]
SINK = "(255 - EnemyShip.Opacity())"
find_group(ui, "3D enemy mirrors the logical enemy")["events"] = [
    comment("EnemyShip (2D, hidden Logic2D layer) is the logic object; EnemyShip3D copies its\n"
            "centre and heading. Fading out (sunk) = going down bow-first while listing."),
    ev([numcmp("Enemy.Active", "=", 1)], [
        act("Show", "EnemyShip3D", ""),
        set_xy("EnemyShip3D", "EnemyShip.CenterX()", "EnemyShip.CenterY()"),
        act("SetAngle", "EnemyShip3D", "=", "EnemyShip.Angle()"),
        act(RY, "EnemyShip3D", "Object3D", "=",
            f"3 * sin({T} * 1.4 + 1) - 4 * EnemyRecoil + 2 * EnemyHit * sin({T} * 47) - {SINK} * 0.12"),
        act(RX, "EnemyShip3D", "Object3D", "=", f"-{SINK} * 0.09"),
        act(SZ, "EnemyShip3D", "Object3D", "=", f"Config.ShipZ + 3 * sin({T} * 1.2 + 2) - {SINK} * 1.2"),
    ]),
    ev([numcmp("Enemy.Active", "=", 0)], [act("Hide", "EnemyShip3D")]),
]

# ------------------------------------------------------------------ tags follow the 3D ships
clampx = lambda w: f"clamp(TagX - ({w}) / 2, 8, LayoutW - ({w}) - 8)"
combat_ui = find_group(ui, "Combat UI: enemy tag, reload bar, ammo selection")
combat_ui["events"] = [
    ev([in_combat], [show("CombatUI")]),
    ev([strcmp("Voyage.State", "COMBAT", "!=")], [hide("CombatUI")]),
    comment("Enemy name + hull bar float above its masthead; your reload bar sits behind your\n"
            "stern. Both are projected from 3D and clamped to stay on screen."),
    ev([in_combat], [
        setnum("TagX", px("EnemyCX", "EnemyCY", "Config.ShipZ + U * 8.6")),
        setnum("TagY", py("EnemyCY", "Config.ShipZ + U * 8.6")),
        setnum("EnemyBarW", 170),
        size("EnemyHullBg", "EnemyBarW", 14),
        set_xy("EnemyHullBg", clampx("EnemyBarW"), "TagY - 20"),
        size("EnemyHullFill", "max(1, EnemyBarW * clamp(Enemy.Hull / max(1, Enemy.MaxHull), 0, 1))", 14),
        set_xy("EnemyHullFill", "EnemyHullBg.X()", "TagY - 20"),
        act("ChangeColor", "EnemyHullFill", s("220;80;60")),
        set_xy("EnemyTagText", clampx("EnemyTagText.Width()"), "TagY - 26 - EnemyTagText.Height()"),
        setnum("TagX", px("ShipCX", "ShipCY + ShipH / 2", "Config.ShipZ")),
        setnum("TagY", py("ShipCY + ShipH / 2", "Config.ShipZ")),
        size("PlayerReloadBg", 120, 10),
        set_xy("PlayerReloadBg", clampx(120), "TagY + 10"),
        size("PlayerReloadFill", "max(1, 120 * clamp(1 - Voyage.ReloadLeft / max(0.1, Voyage.ReloadTotal), 0, 1))", 10),
        set_xy("PlayerReloadFill", "PlayerReloadBg.X()", "TagY + 10"),
        act("ChangeColor", "PlayerReloadFill", s("240;200;90")),
        set_xy("PlayerTagText", clampx("PlayerTagText.Width()"), "TagY + 26"),
        *[act("ChangeColor", f"Ammo{t}Button", s("85;85;95")) for t in ("Round", "Grape", "Chain")],
    ]),
    *[ev([in_combat, strcmp("Voyage.Ammo", t)], [act("ChangeColor", f"Ammo{t}Button", s("215;160;50"))])
      for t in ("Round", "Grape", "Chain")],
    ev([in_combat, numcmp("Voyage.Cannonballs", "<=", 0)],
       [act("ChangeColor", "PlayerReloadFill", s("120;120;120"))]),
]
save(proj)
print("Phase 3 (3D chase staging) applied")
