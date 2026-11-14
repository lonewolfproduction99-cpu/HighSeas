"""Phase 3 patch: automatic naval cannon combat with Round / Grape / Chain shot.

Replaces Phase 2's quick-roll fight with real combat:
  * both ships fire volleys on reload timers (crew shortage slows reloading)
  * each ball's hit / damage is rolled by game logic when fired; the projectile is
    only a visual and applies its result on landing, and only while still in COMBAT
  * muzzle flash, smoke, splashes, hit bursts, floating damage numbers
  * Round (hull), Grape (crew), Chain (sails -> escape) with in-combat switching
  * outcomes: enemy sinks, enemy surrenders, player sinks, player escapes,
    player surrenders. Boarding hooks in at Phase 4.
Cannonballs are one shared supply for all three ammo types.

Run once:  python tools/phase3_combat.py
"""
import sys

from gdlib import (act, change_state, comment, cond, create, delete, ev, expcmp, external,
                   find_group, foreach_object, group, hide, image, instance, link, load, numcmp,
                   objcmp, objvar, repeat, s, save, scene, set_text, set_xy, setnum, setstr, show,
                   size, sprite_obj, strcmp, tapped, text_obj, upsert, var, walk)

proj = load()
if external(proj, "CombatManager") and "--force" not in sys.argv:
    sys.exit("Phase 3 already applied (CombatManager exists).")
if not external(proj, "EncounterManager"):
    sys.exit("Phase 2 must be applied first.")

P = "assets/placeholders/fx/"
for n in ("shot_round", "shot_grape", "shot_chain", "fx_flash", "fx_smoke", "fx_splash", "fx_hit"):
    image(proj, n, P + n + ".png")

gv = proj["variables"]


def gchild(structure, name, value):
    node = next(v for v in gv if v["name"] == structure)
    for part in name.split(".")[:-1]:
        node = next(c for c in node["children"] if c["name"] == part)
    upsert(node["children"], var(name.split(".")[-1], value))


# ------------------------------------------------------------------ data
for k, v in {"ShotFlightTime": 0.45, "VolleyStagger": 0.08, "CrewPerCannon": 2,
             "SurrenderHullFrac": 0.3, "FleeCooldown": 4, "SurrenderGoldLoss": 0.5,
             "TierDamageScale": 0.08}.items():
    gchild("Config", k, v)
for k, v in {"CannonDamage": 6, "ReloadTime": 3.0, "Accuracy": 0.7}.items():
    gchild("Ships", "Sloop." + k, v)
gchild("StartSupplies", "Cannonballs", 60)  # 40 ran out after ~2 real fights in testing
for k, v in {"CannonDamage": 0, "ReloadTime": 3, "Accuracy": 0.7, "Sails": 100, "Ammo": "Round",
             "ReloadLeft": 0, "ReloadTotal": 3, "AmmoHullMult": 1, "AmmoCrewKill": 0.1,
             "AmmoSailDmg": 0}.items():
    gchild("Voyage", k, v)
upsert(gv, var("AmmoTypes", {
    "Round": {"Label": "Round", "HullMult": 1.0, "CrewKill": 0.1, "SailDmg": 0},
    "Grape": {"Label": "Grape", "HullMult": 0.35, "CrewKill": 0.9, "SailDmg": 0},
    "Chain": {"Label": "Chain", "HullMult": 0.4, "CrewKill": 0.05, "SailDmg": 8},
}))
COMBAT_STATS = {
    "Merchant": {"CannonDamage": 5, "ReloadTime": 4.0, "Accuracy": 0.55, "SurrenderChance": 0.45,
                 "GrapeChance": 0, "ChainChance": 0},
    "Pirate": {"CannonDamage": 6, "ReloadTime": 3.2, "Accuracy": 0.65, "SurrenderChance": 0.15,
               "GrapeChance": 0.15, "ChainChance": 0.2},
}
for t, stats in COMBAT_STATS.items():
    for k, v in stats.items():
        gchild("EncounterTypes", f"{t}.{k}", v)

sail = scene(proj, "Sailing")
enc_type = next(v for v in sail["variables"] if v["name"] == "EncType")
enemy = next(v for v in sail["variables"] if v["name"] == "Enemy")
for k in COMBAT_STATS["Pirate"]:
    upsert(enc_type["children"], var(k, 0))
for k, v in {"CannonDamage": 0, "ReloadTime": 3, "Accuracy": 0.5, "Sails": 100, "SurrenderChance": 0,
             "GrapeChance": 0, "ChainChance": 0, "ReloadLeft": 0, "ReloadTotal": 3, "AmmoHullMult": 1,
             "AmmoCrewKill": 0.1, "AmmoSailDmg": 0, "Ammo": "Round", "Surrenders": 0}.items():
    upsert(enemy["children"], var(k, v))
for n in ("CombatStarted", "FleeCooldown", "VolleyN", "BallIndex", "MX", "MY", "OutOfAmmoWarned",
          "PlayerDPS", "EnemyDPS", "PlayerRecoil", "EnemyRecoil", "Roll2", "EnemyBarW"):
    upsert(sail["variables"], var(n, 0))

# ------------------------------------------------------------------ objects
BALL_VARS = {"Target": 0, "Hit": 0, "Damage": 0, "CrewKill": 0, "SailDmg": 0,
             "SX": 0, "SY": 0, "EX": 0, "EY": 0, "T": 0, "Dur": 0.45}
FX_VARS = {"Age": 0, "Life": 0.5, "Grow": 0, "BaseScale": 1, "CX": 0, "CY": 0, "Vx": 0, "Vy": 0}
NEW_OBJECTS = [
    sprite_obj("CannonBall", animations={"Round": "shot_round", "Grape": "shot_grape", "Chain": "shot_chain"},
               variables=BALL_VARS),
    sprite_obj("Fx", animations={"Flash": "fx_flash", "Smoke": "fx_smoke", "Splash": "fx_splash", "Hit": "fx_hit"},
               variables=FX_VARS),
    text_obj("DamageText", "-0", 30, "255;255;255", variables={"Age": 0, "Life": 1.0}),
    sprite_obj("EnemyHullBg", "bar_bg"), sprite_obj("EnemyHullFill", "bar_fill"),
    text_obj("EnemyTagText", "", 20, "255;235;200"),
    sprite_obj("PlayerReloadBg", "bar_bg"), sprite_obj("PlayerReloadFill", "bar_fill"),
    text_obj("PlayerTagText", "", 18, "220;240;255", bold=False),
    sprite_obj("AmmoRoundButton", "button_small"), text_obj("AmmoRoundLabel", "Round", 28),
    sprite_obj("AmmoGrapeButton", "button_small"), text_obj("AmmoGrapeLabel", "Grape", 28),
    sprite_obj("AmmoChainButton", "button_small"), text_obj("AmmoChainLabel", "Chain", 28),
    sprite_obj("CombatFleeButton", "button_small"), text_obj("CombatFleeLabel", "Flee", 26),
    sprite_obj("SurrenderButton", "button_small"), text_obj("SurrenderLabel", "Surrender", 26),
]
SPAWNED = ("CannonBall", "Fx", "DamageText")  # created at runtime, no editor instance
for o in NEW_OBJECTS:
    upsert(sail["objects"], o)
    if o["name"] in SPAWNED or any(i["name"] == o["name"] for i in sail["instances"]):
        continue
    bg = o["name"].endswith(("Button", "Bg"))
    sail["instances"].append(instance(o["name"], -2000, -2000, layer="HUD",
                                      z=5 if bg else (6 if o["name"].endswith("Fill") else 7)))
COMBAT_UI = [o["name"] for o in NEW_OBJECTS if o["name"] not in SPAWNED]
upsert(sail["objectsGroups"], {"name": "CombatUI", "objects": [{"name": n} for n in COMBAT_UI]})

# CombatManager runs after EncounterManager and before UIManager
sail["events"] = [e for e in sail["events"] if e.get("target") != "CombatManager"]
ui_i = next(i for i, e in enumerate(sail["events"]) if e.get("target") == "UIManager")
sail["events"].insert(ui_i, link("CombatManager"))
sail["events"][0]["comment"] = (
    "SAILING SCENE -- logic lives in external events, one per manager.\n"
    "VoyageManager: voyage state machine, distance, ocean scroll, sinking.\n"
    "EncounterManager: spawning, approach, decisions, parley outcomes.\n"
    "CombatManager: volleys, projectiles, damage, ammo, combat outcomes.\n"
    "UIManager: layout, HUD, buttons. Buttons only record Sailing.PendingAction;\n"
    "managers act on it next frame (cleared at the end of CombatManager). UI last.")


def banner(text_expr, seconds=2.2):
    return [setstr("BannerText", text_expr), setnum("BannerTime", seconds), setnum("BannerDirty", 1)]


def result(title, body_expr, color):
    return [setstr("Result.Title", s(title)), setstr("Result.Body", body_expr),
            setstr("Result.Color", s(color)), setnum("HudTimer", 1)]


NL = " + NewLine() + "
in_combat = strcmp("Voyage.State", "COMBAT")

# ------------------------------------------------------------------ existing managers
voy = external(proj, "VoyageManager")["events"]
start = find_group(voy, "Voyage start (new voyage every time this scene opens)")["events"][0]["actions"]
start[:] = [a for a in start if a["parameters"][0] not in
            ("Voyage.CannonDamage", "Voyage.ReloadTime", "Voyage.Accuracy", "Voyage.Sails", "Voyage.Ammo")]
start[:0] = [setnum("Voyage.CannonDamage", "Ships.Sloop.CannonDamage"),
             setnum("Voyage.ReloadTime", "Ships.Sloop.ReloadTime"),
             setnum("Voyage.Accuracy", "Ships.Sloop.Accuracy"),
             setnum("Voyage.Sails", 100), setstr("Voyage.Ammo", s("Round"))]
voy[0]["comment"] = voy[0]["comment"].replace("COMBAT (quick roll until Phase 3)", "COMBAT")

enc = external(proj, "EncounterManager")["events"]
enc[:] = [e for e in enc if not e.get("name", "").startswith(("COMBAT (Phase 2 quick", "Frame end"))]
# spawn: copy combat stats; danger = time to sink them vs time they need to sink us
for e in walk(enc):
    acts = e.get("actions", [])
    if any(a["parameters"][:1] == ["Enemy.Speed"] for a in acts):
        acts[:] = [a for a in acts if a["parameters"][0] not in
                   ("Enemy." + k for k in list(COMBAT_STATS["Pirate"]) + ["Sails"])]
        acts += [setnum("Enemy.CannonDamage", "round(EncType.CannonDamage * (1 + Config.TierDamageScale * (Tier - 1)))"),
                 setnum("Enemy.ReloadTime", "EncType.ReloadTime"), setnum("Enemy.Accuracy", "EncType.Accuracy"),
                 setnum("Enemy.SurrenderChance", "EncType.SurrenderChance"),
                 setnum("Enemy.GrapeChance", "EncType.GrapeChance"),
                 setnum("Enemy.ChainChance", "EncType.ChainChance"), setnum("Enemy.Sails", 100)]
    for a in acts:
        if a["parameters"][:1] == ["PlayerPower"]:
            a["parameters"][2] = ("Voyage.Hull / max(0.1, Enemy.Cannons * Enemy.CannonDamage * Enemy.Accuracy"
                                  " / Enemy.ReloadTime)")
        if a["parameters"][:1] == ["EnemyPower"]:
            a["parameters"][2] = ("Enemy.Hull / max(0.1, Voyage.Cannons * Voyage.CannonDamage * Voyage.Accuracy"
                                  " / Voyage.ReloadTime)")
    # replace Phase 2 constant shaking during combat with recoil (set when a volley fires)
    for a in acts:
        if a["type"]["value"] == "SetXY" and a["parameters"][0] == "EnemyShip" and "* 37" in a["parameters"][2]:
            a["parameters"][2] = "EnemyShip.X() + 10 * EnemyRecoil"
# flee chance: effective speed includes sail condition (chain shot matters)
flee = find_group(enc, "Flee chance (shown on the Flee button)")["events"]
flee[0]["actions"] = [setnum("FleeChance",
                             "clamp(0.5 + (Voyage.Speed * (0.5 + Voyage.Sails / 200) - Enemy.Speed * "
                             "(0.5 + Enemy.Sails / 200)) * 0.06, 0.15, 0.9)")]
enc[0]["comment"] = enc[0]["comment"] + "\nCombat itself lives in CombatManager."

# ------------------------------------------------------------------ CombatManager
EFF_RELOAD = "{s}.ReloadTime / clamp({s}.Crew / max(1, {s}.Cannons * Config.CrewPerCannon), 0.4, 1)"


def volley(shooter, target_ship, target_cx, target_cy, src_cx, src_cy, src_w, side, target_flag, prefix):
    """Actions creating one cannonball (inside a Repeat with BallIndex)."""
    return [
        setnum("MX", f"{src_cx} + {side} * {src_w} * 0.42"),
        setnum("MY", f"{src_cy} - ShipH * 0.26 + ShipH * 0.52 * (BallIndex + 0.5) / max(1, VolleyN)"),
        create("CannonBall", "MX", "MY"),
        act("SetZOrder", "CannonBall", "=", "35"),
        act("SetAnimationName", "CannonBall", f"{prefix}.Ammo"),
        objvar("CannonBall", "Target", target_flag),
        objvar("CannonBall", "Hit", f"floor(RandomFloat(1) + {prefix}.Accuracy)"),
        objvar("CannonBall", "Damage", f"CannonBall.Hit * round({prefix}.CannonDamage * {prefix}.AmmoHullMult"
                                       " * RandomFloatInRange(0.8, 1.2))"),
        objvar("CannonBall", "CrewKill", f"CannonBall.Hit * floor(RandomFloat(1) + {prefix}.AmmoCrewKill)"),
        objvar("CannonBall", "SailDmg", f"CannonBall.Hit * {prefix}.AmmoSailDmg"),
        objvar("CannonBall", "SX", "MX"), objvar("CannonBall", "SY", "MY"),
        objvar("CannonBall", "EX", f"{target_cx} + CannonBall.Hit * RandomInRange(-14, 14)"
                                   f" - (1 - CannonBall.Hit) * {side} * RandomInRange(60, 130)"),
        objvar("CannonBall", "EY", f"{target_cy} + RandomFloatInRange(-0.32, 0.32) * ShipH"),
        objvar("CannonBall", "T", "-BallIndex * Config.VolleyStagger"),
        objvar("CannonBall", "Dur", "Config.ShotFlightTime"),
        act("Opacity", "CannonBall", "=", "0"),
        *fx("Flash", "MX", "MY", life=0.16, delay="BallIndex * Config.VolleyStagger", scale=0.7, grow=2),
        *fx("Smoke", f"MX + {side} * 14", "MY", life=1.1, delay="BallIndex * Config.VolleyStagger",
            scale=0.6, grow=0.9, vx=f"{side} * 12", vy=-18),
    ]


def fx(anim, x, y, life, delay=0, scale=1.0, grow=0.0, vx=0, vy=0):
    return [create("Fx", x, y), act("SetZOrder", "Fx", "=", "40"), act("SetAnimationName", "Fx", s(anim)),
            objvar("Fx", "CX", x), objvar("Fx", "CY", y), objvar("Fx", "Life", life),
            objvar("Fx", "Age", f"-({delay})"), objvar("Fx", "BaseScale", scale), objvar("Fx", "Grow", grow),
            objvar("Fx", "Vx", vx), objvar("Fx", "Vy", vy), act("Opacity", "Fx", "=", "0")]


def dmg_text(text_expr, x, y, color):
    return [create("DamageText", x, y), set_text("DamageText", text_expr),
            act("TextObject::ChangeColor", "DamageText", s(color)), act("SetZOrder", "DamageText", "=", "50")]


def ammo_events(prefix, ammo_var):
    return [ev([strcmp(ammo_var, t)], [setnum(f"{prefix}.AmmoHullMult", f"AmmoTypes.{t}.HullMult"),
                                       setnum(f"{prefix}.AmmoCrewKill", f"AmmoTypes.{t}.CrewKill"),
                                       setnum(f"{prefix}.AmmoSailDmg", f"AmmoTypes.{t}.SailDmg")])
            for t in ("Round", "Grape", "Chain")]


def impact(prefix, hull, crew, sails, color):
    return [
        setnum(hull, f"max(0, {hull} - CannonBall.Damage)"),
        setnum(crew, f"max(0, {crew} - CannonBall.CrewKill)"),
        setnum(sails, f"max(0, {sails} - CannonBall.SailDmg)"),
        *fx("Hit", "CannonBall.EX", "CannonBall.EY", life=0.45, scale=0.8, grow=1.2),
        *dmg_text('"-" + ToString(CannonBall.Damage)', "CannonBall.EX - 16", "CannonBall.EY - 30", color),
    ]


COMBAT_EVENTS = [
    comment("COMBAT MANAGER. Cannons fire automatically on reload timers. Every ball's\n"
            "hit / damage / crew / sail effect is rolled by logic at the moment of firing;\n"
            "the CannonBall object is only a visual and applies its stored result when it\n"
            "lands, and only while the state is still COMBAT. Leaving COMBAT deletes all\n"
            "balls in flight, so nothing can land after the fight is decided.\n"
            "Spawned objects (CannonBall, Fx, DamageText) are deleted when done; the GDevelop\n"
            "runtime recycles deleted instances, so this acts as a pool."),
    group("Combat start (once each time COMBAT is entered)", [
        ev([in_combat, numcmp("CombatStarted", "=", 0)], [
            setnum("CombatStarted", 1), setnum("Voyage.ReloadLeft", 0.9), setnum("Voyage.ReloadTotal", 0.9),
            setnum("Enemy.ReloadLeft", "1.3 + RandomFloat(0.7)"), setnum("FleeCooldown", 0),
            setnum("OutOfAmmoWarned", 0), setnum("Enemy.Surrenders", 0), setnum("HudTimer", 1)]),
        ev([strcmp("Voyage.State", "COMBAT", "!=")], [setnum("CombatStarted", 0)]),
    ]),
    group("Ammunition stats (from global AmmoTypes)", ammo_events("Voyage", "Voyage.Ammo") +
          ammo_events("Enemy", "Enemy.Ammo")),
    group("Ammo switching + combat buttons (from PendingAction)", [
        *[ev([in_combat, strcmp("PendingAction", "AMMO_" + t.upper())],
             [setstr("Voyage.Ammo", s(t))] + banner(f'"Loading {t.lower()} shot"', 1.2))
          for t in ("Round", "Grape", "Chain")],
        ev([in_combat, strcmp("PendingAction", "COMBAT_FLEE"), numcmp("FleeCooldown", "<=", 0)],
           [setnum("Roll", "RandomFloat(1)")], [
            ev([numcmp("Roll", "<", "FleeChance")],
               banner('"You escaped!"') + [setstr("Enemy.Departing", '"behind"')] + change_state("SAILING")),
            ev([numcmp("Roll", ">=", "FleeChance")],
               banner('"They cut you off!"') + [setnum("FleeCooldown", "Config.FleeCooldown"),
                                                setnum("Enemy.ReloadLeft", "min(Enemy.ReloadLeft, 0.3)")]),
        ]),
        ev([in_combat, strcmp("PendingAction", "SURRENDER")], [
            setnum("GoldGain", "floor(Voyage.Gold * Config.SurrenderGoldLoss)"),
            setnum("Voyage.Gold", "max(0, Voyage.Gold - GoldGain)"), setstr("Enemy.Departing", '"leave"'),
        ] + result("You strike your colours", '"The " + Enemy.Name + " takes " + ToString(GoldGain) + " gold"' + NL +
                   '"and lets you sail away."', "230;170;90") + change_state("REWARDS")),
        ev([numcmp("FleeCooldown", ">", 0)], [setnum("FleeCooldown", "TimeDelta()", "-")]),
    ]),
    group("Reload timers", [
        ev([in_combat], [setnum("Voyage.ReloadLeft", "TimeDelta()", "-"), setnum("Enemy.ReloadLeft", "TimeDelta()", "-"),
                         setnum("PlayerRecoil", "max(0, PlayerRecoil - TimeDelta() * 4)"),
                         setnum("EnemyRecoil", "max(0, EnemyRecoil - TimeDelta() * 4)")]),
    ]),
    group("Player volley", [
        ev([in_combat, numcmp("Voyage.ReloadLeft", "<=", 0), numcmp("Voyage.Cannonballs", ">", 0),
            numcmp("Voyage.Crew", ">", 0)], [
            setnum("VolleyN", "min(Voyage.Cannons, Voyage.Cannonballs)"),
            setnum("Voyage.Cannonballs", "max(0, Voyage.Cannonballs - VolleyN)"),
            setnum("Voyage.ReloadTotal", EFF_RELOAD.format(s="Voyage")),
            setnum("Voyage.ReloadLeft", "Voyage.ReloadTotal"), setnum("PlayerRecoil", 1), setnum("HudTimer", 1),
        ], [repeat("VolleyN", "BallIndex", actions=volley(
            "Player", "EnemyShip", "EnemyCX", "EnemyCY", "ShipCX", "ShipCY", "PlayerShip.Width()", 1, 1, "Voyage"))]),
        ev([in_combat, numcmp("Voyage.ReloadLeft", "<=", 0), numcmp("Voyage.Cannonballs", "<=", 0),
            numcmp("OutOfAmmoWarned", "=", 0)],
           [setnum("OutOfAmmoWarned", 1)] + banner('"Out of cannonballs! Flee or surrender."', 3)),
    ]),
    group("Enemy volley (or surrender when beaten)", [
        ev([in_combat, numcmp("Enemy.ReloadLeft", "<=", 0)], [
            setnum("Roll", "RandomFloat(1)"), setstr("Enemy.Ammo", s("Round")),
            setnum("Enemy.ReloadTotal", EFF_RELOAD.format(s="Enemy")), setnum("Enemy.ReloadLeft", "Enemy.ReloadTotal"),
        ], [
            ev([numcmp("Roll", "<", "Enemy.GrapeChance")], [setstr("Enemy.Ammo", s("Grape"))]),
            ev([numcmp("Roll", ">=", "Enemy.GrapeChance"), numcmp("Roll", "<", "Enemy.GrapeChance + Enemy.ChainChance")],
               [setstr("Enemy.Ammo", s("Chain"))]),
            *ammo_events("Enemy", "Enemy.Ammo"),
            comment("A badly damaged enemy may strike its colours instead of firing."),
            ev([expcmp("Enemy.Hull", "<=", "Enemy.MaxHull * Config.SurrenderHullFrac")],
               [setnum("Roll2", "RandomFloat(1)")],
               [ev([numcmp("Roll2", "<", "Enemy.SurrenderChance")], [setnum("Enemy.Surrenders", 1)])]),
            ev([numcmp("Enemy.Surrenders", "=", 0), numcmp("Enemy.Crew", ">", 0)],
               [setnum("VolleyN", "Enemy.Cannons"), setnum("EnemyRecoil", 1)],
               [repeat("VolleyN", "BallIndex", actions=volley(
                   "Enemy", "PlayerShip", "ShipCX", "ShipCY", "EnemyCX", "EnemyCY", "EnemyShip.Width()", -1, 0, "Enemy"))]),
        ]),
        ev([in_combat, numcmp("Enemy.Crew", "<=", 0)], [setnum("Enemy.Surrenders", 1)]),
    ]),
    group("Cannonball flight and impact", [
        ev([], [objvar("CannonBall", "T", "TimeDelta()", "+")]),
        ev([objcmp("CannonBall", "T", ">=", 0)], [
            act("Opacity", "CannonBall", "=", "255"),
            act("ChangeScale", "CannonBall", "=", "1 + 0.7 * sin(3.14159 * min(1, CannonBall.T / CannonBall.Dur))"),
            set_xy("CannonBall", "lerp(CannonBall.SX, CannonBall.EX, min(1, CannonBall.T / CannonBall.Dur)) - CannonBall.Width() / 2",
                   "lerp(CannonBall.SY, CannonBall.EY, min(1, CannonBall.T / CannonBall.Dur)) - CannonBall.Height() / 2")]),
        foreach_object("CannonBall", [in_combat, objcmp("CannonBall", "T", ">=", "CannonBall.Dur")], [], [
            ev([objcmp("CannonBall", "Hit", "=", 1), objcmp("CannonBall", "Target", "=", 1)],
               impact("Enemy", "Enemy.Hull", "Enemy.Crew", "Enemy.Sails", "255;255;255") + [setnum("HudTimer", 1)]),
            ev([objcmp("CannonBall", "Hit", "=", 1), objcmp("CannonBall", "Target", "=", 0)],
               impact("Voyage", "Voyage.Hull", "Voyage.Crew", "Voyage.Sails", "255;110;90") + [setnum("HudTimer", 1)]),
            ev([objcmp("CannonBall", "Hit", "=", 1), objcmp("CannonBall", "CrewKill", ">", 0)],
               dmg_text('"-" + ToString(CannonBall.CrewKill) + " crew"', "CannonBall.EX - 30", "CannonBall.EY + 4",
                        "255;170;80")),
            ev([objcmp("CannonBall", "Hit", "=", 1), objcmp("CannonBall", "SailDmg", ">", 0)],
               dmg_text('"sails -" + ToString(CannonBall.SailDmg)', "CannonBall.EX - 30", "CannonBall.EY + 34",
                        "150;210;255")),
            ev([objcmp("CannonBall", "Hit", "=", 0)],
               fx("Splash", "CannonBall.EX", "CannonBall.EY", life=0.6, scale=0.5, grow=0.9)),
            ev([], [delete("CannonBall")]),
        ]),
        ev([strcmp("Voyage.State", "COMBAT", "!=")], [delete("CannonBall")]),
    ]),
    group("Effects + damage numbers (time-based, self-deleting)", [
        ev([], [objvar("Fx", "Age", "TimeDelta()", "+"), objvar("DamageText", "Age", "TimeDelta()", "+")]),
        ev([objcmp("Fx", "Age", ">=", 0)], [
            objvar("Fx", "CX", "Fx.Vx * TimeDelta()", "+"), objvar("Fx", "CY", "Fx.Vy * TimeDelta()", "+"),
            act("ChangeScale", "Fx", "=", "Fx.BaseScale + Fx.Grow * Fx.Age"),
            act("Opacity", "Fx", "=", "255 * clamp(1 - Fx.Age / Fx.Life, 0, 1)"),
            set_xy("Fx", "Fx.CX - Fx.Width() / 2", "Fx.CY - Fx.Height() / 2")]),
        ev([objcmp("Fx", "Age", ">=", "Fx.Life")], [delete("Fx")]),
        ev([], [act("SetXY", "DamageText", "+", "0", "-", "TimeDelta() * 55"),
                act("TextObject::Opacity", "DamageText", "=", "255 * clamp(2 * (1 - DamageText.Age / DamageText.Life), 0, 1)")]),
        ev([objcmp("DamageText", "Age", ">=", "DamageText.Life")], [delete("DamageText")]),
    ]),
    group("Combat outcomes (each changes state, so it can only happen once)", [
        comment("Player hull 0 is handled by VoyageManager's sink check (-> SUNK)."),
        ev([in_combat, numcmp("Enemy.Hull", "<=", 0), numcmp("Voyage.Hull", ">", 0)], [
            setnum("GoldGain", "Enemy.Gold"), setnum("Voyage.Gold", "GoldGain", "+"),
            setstr("Enemy.Departing", '"sunk"')] +
           result("Victory!", '"You sank the " + Enemy.Name + "."' + NL + '"+" + ToString(GoldGain) + " gold"',
                  "255;214;90") + change_state("REWARDS")),
        ev([in_combat, numcmp("Enemy.Surrenders", "=", 1), numcmp("Enemy.Hull", ">", 0), numcmp("Voyage.Hull", ">", 0)], [
            setnum("Enemy.Surrenders", 0), setnum("GoldGain", "Enemy.Gold"), setnum("Voyage.Gold", "GoldGain", "+"),
            setstr("Enemy.Departing", '"leave"')] +
           result("They surrender!", '"The " + Enemy.Name + " strikes her colours"' + NL +
                  '"and hands over " + ToString(GoldGain) + " gold."', "255;214;90") + change_state("REWARDS")),
        comment("Phase 4: a weakened or surrendered enemy will offer BOARDING here."),
    ]),
    group("Frame end: the pending button action has been handled", [
        ev([], [setstr("PendingAction", '""')]),
    ]),
]
proj["externalEvents"] = [e for e in proj["externalEvents"] if e["name"] != "CombatManager"]
proj["externalEvents"].append({"associatedLayout": "Sailing", "lastChangeTimeStamp": 0,
                               "name": "CombatManager", "events": COMBAT_EVENTS})

# ------------------------------------------------------------------ UIManager
ui = external(proj, "UIManager")["events"]
layout = find_group(ui, "Layout (on start and on resize)")["events"][2]["actions"]
layout[:] = [a for a in layout if a["parameters"][0] not in COMBAT_UI]
for i, t in enumerate(("Round", "Grape", "Chain")):
    layout += [size(f"Ammo{t}Button", 216, 96), set_xy(f"Ammo{t}Button", f"X0 + 16 + {i} * 236", "BtnY")]
layout += [size("CombatFleeButton", 334, 84), set_xy("CombatFleeButton", "X0 + 16", "BtnY - 104"),
           size("SurrenderButton", 334, 84), set_xy("SurrenderButton", "X0 + 370", "BtnY - 104"),
           act("ChangeColor", "CombatFleeButton", s("70;120;190")),
           act("ChangeColor", "SurrenderButton", s("120;120;130"))]

center = lambda lbl, btn: set_xy(lbl, f"{btn}.X() + ({btn}.Width() - {lbl}.Width()) / 2",
                                 f"{btn}.Y() + ({btn}.Height() - {lbl}.Height()) / 2")
refresh = find_group(ui, "HUD refresh (5x per second, not every frame, to avoid re-rendering text)")["events"][1]
refresh["events"] = [e for e in refresh["events"] if not any(
    c["parameters"][:2] == ["Voyage.State", "="] and c["parameters"][2] == s("COMBAT") for c in e.get("conditions", []))]
refresh["events"].append(ev([in_combat], [
    set_text("EnemyTagText", 'Enemy.Name + NewLine() + "Crew " + ToString(Enemy.Crew) + "   Sails " + '
             'ToString(round(Enemy.Sails)) + "%"'),
    set_text("PlayerTagText", '"Sails " + ToString(round(Voyage.Sails)) + "%   " + Voyage.Ammo + " shot"'),
    set_text("CombatFleeLabel", '"Flee " + ToString(round(FleeChance * 100)) + "%"'),
    *[center(f"Ammo{t}Label", f"Ammo{t}Button") for t in ("Round", "Grape", "Chain")],
    center("SurrenderLabel", "SurrenderButton"),
], [ev([numcmp("FleeCooldown", ">", 0)],
       [set_text("CombatFleeLabel", '"Flee (" + ToString(ceil(FleeCooldown)) + "s)"')]),
    ev([], [center("CombatFleeLabel", "CombatFleeButton")])]))

combat_ui = group("Combat UI: enemy tag, reload bar, ammo selection", [
    ev([in_combat], [show("CombatUI")]),
    ev([strcmp("Voyage.State", "COMBAT", "!=")], [hide("CombatUI")]),
    ev([in_combat], [
        setnum("EnemyBarW", 170),
        size("EnemyHullBg", "EnemyBarW", 14),
        set_xy("EnemyHullBg", "EnemyCX - EnemyBarW / 2", "EnemyShip.Y() - 26"),
        size("EnemyHullFill", "max(1, EnemyBarW * clamp(Enemy.Hull / max(1, Enemy.MaxHull), 0, 1))", 14),
        set_xy("EnemyHullFill", "EnemyCX - EnemyBarW / 2", "EnemyShip.Y() - 26"),
        act("ChangeColor", "EnemyHullFill", s("220;80;60")),
        set_xy("EnemyTagText", "EnemyCX - EnemyTagText.Width() / 2", "EnemyShip.Y() - 32 - EnemyTagText.Height()"),
        size("PlayerReloadBg", 120, 10),
        set_xy("PlayerReloadBg", "ShipCX - 60", "ShipCY + ShipH / 2 + 12"),
        size("PlayerReloadFill", "max(1, 120 * clamp(1 - Voyage.ReloadLeft / max(0.1, Voyage.ReloadTotal), 0, 1))", 10),
        set_xy("PlayerReloadFill", "ShipCX - 60", "ShipCY + ShipH / 2 + 12"),
        act("ChangeColor", "PlayerReloadFill", s("240;200;90")),
        set_xy("PlayerTagText", "ShipCX - PlayerTagText.Width() / 2", "ShipCY + ShipH / 2 + 28"),
        *[act("ChangeColor", f"Ammo{t}Button", s("85;85;95")) for t in ("Round", "Grape", "Chain")],
    ]),
    *[ev([in_combat, strcmp("Voyage.Ammo", t)], [act("ChangeColor", f"Ammo{t}Button", s("215;160;50"))])
      for t in ("Round", "Grape", "Chain")],
    ev([in_combat, numcmp("Voyage.Cannonballs", "<=", 0)],
       [act("ChangeColor", "PlayerReloadFill", s("120;120;120"))]),
])
buttons = find_group(ui, "HUD buttons (UI only records the choice; managers act on it next frame)")["events"]
buttons[:] = [e for e in buttons if not any(c["parameters"][:1] == ["Voyage.State"] and
                                            c["parameters"][2] == s("COMBAT") for c in e.get("conditions", []))]
insert_at = next(i for i, e in enumerate(buttons) if e.get("actions") and e["actions"][0]["type"]["value"] == "Show")
buttons[insert_at:insert_at] = [
    ev([in_combat, numcmp("InputConsumed", "=", 0)] + tapped(btn),
       [setstr("PendingAction", s(action)), setnum("InputConsumed", 1)])
    for btn, action in (("AmmoRoundButton", "AMMO_ROUND"), ("AmmoGrapeButton", "AMMO_GRAPE"),
                        ("AmmoChainButton", "AMMO_CHAIN"), ("CombatFleeButton", "COMBAT_FLEE"),
                        ("SurrenderButton", "SURRENDER"))]
ui[:] = [e for e in ui if e.get("name") != combat_ui["name"]]
ui.insert(next(i for i, e in enumerate(ui) if e.get("name", "").startswith("HUD buttons")), combat_ui)

# player recoil replaces Phase 2's constant combat shake
for e in walk(find_group(ui, "Ship idle motion (rocking + bobbing, time-based)")["events"]):
    for a in e.get("actions", []):
        if a["type"]["value"] == "SetXY" and "* 41" in a["parameters"][2]:
            a["parameters"][2] = "PlayerShip.X() - 10 * PlayerRecoil"

save(proj)
print("Phase 3 applied to HighSeas.json")
