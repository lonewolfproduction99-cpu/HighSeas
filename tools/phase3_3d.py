"""Phase 3 redo for the 3D chase view (run after setup_3d_chase.py).

Combat rules are unchanged (same rolls, damage, ammo, outcomes; see phase3_combat.py).
What changes is how the fight is staged in 3D:
  * broadsides fire from the real cannon positions of the Blender sloop
    (4 guns a side, upper/lower deck heights), balls fly a 3D arc to the target's
    near hull side; misses splash into the water between the ships
  * effects, balls and numbers are projected from 3D points and shrink with distance
  * firing heels a ship (recoil roll); hits shake it; a beaten enemy goes down
    bow-first while listing; your ship sinks the same way when hull reaches 0
  * enemies emerge from the haze ahead and close in alongside; "sail on" ships
    pull away into the fog, ships you escape from fall astern past the camera
  * ship tags/bars follow the 3D ships and are kept inside the screen
Safe to re-run: every group it writes is replaced by name.
"""
from gdlib import (act, comment, create, delete, ev, expcmp, external, find_group, foreach_object,
                   group, hide, load, numcmp, objcmp, objvar, repeat, s, save, scene, set_text,
                   set_xy, setnum, setstr, show, size, strcmp, upsert, var)
from proj3d import depth, persp, px, py

proj = load()
sail = scene(proj, "Sailing")
cfg = next(v for v in proj["variables"] if v["name"] == "Config")
for k, v in {"ShipZ": -20, "ApproachDist": 2200}.items():
    upsert(cfg["children"], var(k, v))
for n in ("U", "RefDepth", "MH", "PlayerHit", "EnemyHit", "EnemyStartY", "TagX", "TagY"):
    upsert(sail["variables"], var(n, 0))
objs = {o["name"]: o for o in sail["objects"]}
for k in ("SH", "EH"):
    upsert(objs["CannonBall"]["variables"], var(k, 0))
for k in ("H", "Vh"):
    upsert(objs["Fx"]["variables"], var(k, 0))
upsert(objs["DamageText"]["variables"], var("H", 0))

in_combat = strcmp("Voyage.State", "COMBAT")
T = "TimeFromStart()"
# Blender sloop: 16 m long; guns at 4, 6, 8, 10 m from the stern-centre origin (ship centre
# is 6 m), muzzles 2.55 m out from the keel line, decks at 2.32 m / 1.32 m (alternating).
SLOT = "mod(BallIndex, 4)"


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


def volley(src_cx, src_cy, tgt_cx, tgt_cy, side, target_flag, prefix):
    """One cannonball from gun slot BallIndex (inside a Repeat)."""
    hit_h = "(Config.ShipZ + U * RandomFloatInRange(0.9, 2.4))"
    return [
        setnum("MX", f"{src_cx} + {side} * U * 2.55"),
        setnum("MY", f"{src_cy} + U * (2 - 2 * {SLOT})"),
        setnum("MH", f"Config.ShipZ + U * (1.82 + 0.5 * cos(3.14159 * {SLOT}))"),
        create("CannonBall", "MX", "MY", "FX"),
        act("SetZOrder", "CannonBall", "=", "35"),
        act("SetAnimationName", "CannonBall", f"{prefix}.Ammo"),
        objvar("CannonBall", "Target", target_flag),
        objvar("CannonBall", "Hit", f"floor(RandomFloat(1) + {prefix}.Accuracy)"),
        objvar("CannonBall", "Damage", f"CannonBall.Hit * round({prefix}.CannonDamage * {prefix}.AmmoHullMult"
                                       " * RandomFloatInRange(0.8, 1.2))"),
        objvar("CannonBall", "CrewKill", f"CannonBall.Hit * floor(RandomFloat(1) + {prefix}.AmmoCrewKill)"),
        objvar("CannonBall", "SailDmg", f"CannonBall.Hit * {prefix}.AmmoSailDmg"),
        objvar("CannonBall", "SX", "MX"), objvar("CannonBall", "SY", "MY"), objvar("CannonBall", "SH", "MH"),
        # hits strike the near side of the hull; misses fall short into the water between the ships
        objvar("CannonBall", "EX", f"{tgt_cx} - {side} * (U * 2.3 + (1 - CannonBall.Hit) * RandomInRange(30, 170))"),
        objvar("CannonBall", "EY", f"{tgt_cy} + RandomFloatInRange(-0.3, 0.3) * ShipH * (2 - CannonBall.Hit)"),
        objvar("CannonBall", "EH", f"CannonBall.Hit * {hit_h} - (1 - CannonBall.Hit) * 6"),
        objvar("CannonBall", "T", "-BallIndex * Config.VolleyStagger"),
        objvar("CannonBall", "Dur", "Config.ShotFlightTime"),
        act("Opacity", "CannonBall", "=", "0"),
        *fx("Flash", "MX", "MY", "MH", life=0.16, delay="BallIndex * Config.VolleyStagger", scale=0.7, grow=2),
        *fx("Smoke", f"MX + {side} * 18", "MY", "MH", life=1.2, delay="BallIndex * Config.VolleyStagger",
            scale=0.6, grow=0.9, vx=f"{side} * 14", vh=24),
    ]


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
BH = f"(lerp(CannonBall.SH, CannonBall.EH, {K}) + 45 * sin(3.14159 * {K}))"

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
        ], [repeat("VolleyN", "BallIndex", actions=volley("ShipCX", "ShipCY", "EnemyCX", "EnemyCY", 1, 1, "Voyage"))]),
        ev([in_combat, numcmp("Voyage.ReloadLeft", "<=", 0), numcmp("Voyage.Cannonballs", "<=", 0),
            numcmp("OutOfAmmoWarned", "=", 0)],
           [setnum("OutOfAmmoWarned", 1), setstr("BannerText", '"Out of cannonballs! Flee or surrender."'),
            setnum("BannerTime", 3), setnum("BannerDirty", 1)]),
    ],
    "Cannonball flight and impact": [
        ev([], [objvar("CannonBall", "T", "TimeDelta()", "+")]),
        ev([objcmp("CannonBall", "T", ">=", 0)], [
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
ENEMY_VOLLEY = volley("EnemyCX", "EnemyCY", "ShipCX", "ShipCY", -1, 0, "Enemy")

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
                  setnum("U", "Config.ShipLength / 16"),
                  setnum("RefDepth", depth("ShipCY", "Config.ShipZ + U * 2"))]
combat[0]["comment"] += ("\n3D: balls fly from the sloop's real gun ports along a 3D arc; everything\n"
                         "spawned here lives on the FX overlay layer and is projected from (CX, CY, H).")

# ------------------------------------------------------------------ encounter staging
enc = external(proj, "EncounterManager")["events"]
ALONGSIDE_Y = "ShipCY - ShipH * 0.15"
for e in __import__("gdlib").walk(enc):
    acts = e.get("actions", [])
    for i, a in enumerate(acts):
        p = a["parameters"]
        if p[:1] == ["EnemyStartX"] and "LayoutW" in p[2]:
            p[2] = "X0 + Config.RefWidth * (1 - Config.ShipXFrac + 0.04) + 160"
        if p[:3] == ["EnemyCY", "=", ALONGSIDE_Y]:   # spawn: start far ahead, in the haze
            acts[i:i + 1] = [setnum("EnemyStartY", f"{ALONGSIDE_Y} - Config.ApproachDist"),
                             setnum("EnemyCY", "EnemyStartY")]
            break
motion = find_group(enc, "Enemy ship motion (time-based)")["events"]
for e in motion:
    conds = [(c["parameters"][0], c["parameters"][-1]) for c in e.get("conditions", [])]
    acts = e.get("actions", [])
    if conds == [("Voyage.State", '"ENCOUNTER_APPROACH"')]:
        acts[:] = [a for a in acts if a["parameters"][:1] != ["EnemyCY"]]
        acts.insert(3, setnum("EnemyCY", f"lerp(EnemyStartY, {ALONGSIDE_Y}, Ease)"))
        for a in acts:
            if a["type"]["value"] == "SetAngle":
                a["parameters"][2] = "-10 * (1 - Ease) + 2 * sin(TimeFromStart() * 1.4)"
    if ("Enemy.Departing", '"leave"') in conds and acts and acts[0]["parameters"][0] == "EnemyCY":
        acts[:] = [setnum("EnemyCY", "TimeDelta() * 400", "-"), setnum("EnemyCX", "TimeDelta() * 30", "+")]
    for c in e.get("conditions", []):
        if c["parameters"][:2] == ["EnemyCY", "<"]:     # sailed off ahead, gone in the fog
            c["parameters"][2] = f"{ALONGSIDE_Y} - Config.ApproachDist - 300"
        if c["parameters"][:2] == ["EnemyCY", ">"]:     # fell astern, past the camera
            c["parameters"][2] = "LayoutH / 2 + ShipH"

# ------------------------------------------------------------------ 3D ship motion (UIManager)
ui = external(proj, "UIManager")["events"]
RX, RY, SZ = ("Scene3D::Base3DBehavior::SetRotationX", "Scene3D::Base3DBehavior::SetRotationY",
              "Scene3D::Base3DBehavior::SetZ")
find_group(ui, "Ship idle motion (rocking + bobbing, time-based)")["events"] = [
    comment("Roll (RotationY): sea swell + heel from firing a broadside + shudder when hit.\n"
            "When the voyage is SUNK the ship goes down bow-first."),
    ev([], [act("SetAngle", "PlayerShip", "=", f"1.2 * sin({T} * 0.9)"),
            act(RY, "PlayerShip", "Object3D", "=", f"4 * sin({T} * 1.6) + 7 * PlayerRecoil + 2.5 * PlayerHit * sin({T} * 45)"),
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
            f"4 * sin({T} * 1.4 + 1) - 7 * EnemyRecoil + 2.5 * EnemyHit * sin({T} * 47) - {SINK} * 0.12"),
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
