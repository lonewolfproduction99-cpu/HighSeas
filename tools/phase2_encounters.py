"""Phase 2 patch: sailing encounters (merchant + pirate), Fight / Flee / Parley.

Adds to the existing project (does not rebuild it):
  * global data: EncounterTypes (weighted, data-driven), encounter tuning in Config
  * external events EncounterManager (spawn, approach, decision, outcomes)
  * Sailing scene: enemy ship, enemy info panel, choice buttons, result panel, banner
  * VoyageManager: encounter-state scrolling, sink check, SUNK -> Port
  * UIManager: layout + refresh for the new UI, buttons record a PendingAction

Fight is resolved with a quick stat roll here; Phase 3 replaces it with real
cannon combat. Parley uses one weighted outcome; fuller dialogue comes later.

Run once:  python tools/phase2_encounters.py
"""
import sys

from gdlib import (act, change_state, comment, cond, ev, expcmp, external, find_group,
                   group, hide, image, instance, link, load, numcmp, s, save, scene,
                   set_text, set_xy, setnum, setstr, show, size, sprite_obj, strcmp,
                   tapped, text_obj, upsert, var)

proj = load()
if external(proj, "EncounterManager") and "--force" not in sys.argv:
    sys.exit("Phase 2 already applied (EncounterManager exists).")

P = "assets/placeholders/"
image(proj, "ship_enemy_merchant", P + "ships/ship_enemy_merchant_PH.png")
image(proj, "ship_enemy_pirate", P + "ships/ship_enemy_pirate_PH.png")
image(proj, "button_small", P + "ui/button_small.png")
image(proj, "panel_enemy", P + "ui/panel_enemy.png")
image(proj, "panel_result", P + "ui/panel_result.png")

# ------------------------------------------------------------------ global data
gv = proj["variables"]


def child(structure, name, value):
    upsert(next(v for v in gv if v["name"] == structure)["children"], var(name, value))


for k, v in {"EncounterMinDelay": 8, "EncounterMaxDelay": 15, "ApproachTime": 2.5,
             "DecisionTimeout": 10, "CombatResolveTime": 2.5, "ParleyTime": 1.5,
             "TierDistance": 5, "TierStatScale": 0.15, "EncounterScrollFactor": 0.35}.items():
    child("Config", k, v)
child("Voyage", "Cannons", 0)
child("Voyage", "NextEncounterIn", 0)

MERCHANT_NAMES = ["Gilded Gull", "Sea Lark", "Prosperous Wren", "Lady Marigold",
                  "Salt Merchant", "Fair Fortune", "Cinnamon Rose", "Dutiful Heron"]
PIRATE_NAMES = ["Black Gannet", "Rusty Cutlass", "Widow's Grin", "Red Tide",
                "Sea Jackal", "Barnacle Bess", "Grim Tally", "Howling Mary"]
# Each key is also the EnemyShip animation name. Add a type = add an entry + animation.
upsert(gv, var("EncounterTypes", {
    "Merchant": {"DisplayName": "Merchant ship", "Faction": "Merchant Guild", "Hostile": 0,
                 "BaseWeight": 60, "WeightPerTier": -4, "Hull": 70, "Crew": 10, "Cannons": 2,
                 "Speed": 9, "GoldMin": 25, "GoldMax": 60,
                 "NameCount": len(MERCHANT_NAMES), "Names": MERCHANT_NAMES},
    "Pirate": {"DisplayName": "Pirate ship", "Faction": "Pirates", "Hostile": 1,
               "BaseWeight": 40, "WeightPerTier": 6, "Hull": 90, "Crew": 14, "Cannons": 4,
               "Speed": 12, "GoldMin": 30, "GoldMax": 80,
               "NameCount": len(PIRATE_NAMES), "Names": PIRATE_NAMES},
}))

# ------------------------------------------------------------------ Sailing objects
sail = scene(proj, "Sailing")
NEW_OBJECTS = [
    sprite_obj("EnemyShip", animations={"Merchant": "ship_enemy_merchant", "Pirate": "ship_enemy_pirate"}),
    sprite_obj("EnemyPanel", "panel_enemy"),
    text_obj("EnemyNameText", "Ship name", 32, "255;230;160"),
    text_obj("EnemyTypeText", "Type", 22, "220;220;220", bold=False),
    text_obj("EnemyStatsText", "Hull 0   Crew 0   Cannons 0", 24),
    text_obj("EnemyHintText", "", 20, "200;230;255", bold=False),
    sprite_obj("FightButton", "button_small"), text_obj("FightLabel", "Fight", 30),
    sprite_obj("FleeButton", "button_small"), text_obj("FleeLabel", "Flee", 30),
    sprite_obj("ParleyButton", "button_small"), text_obj("ParleyLabel", "Parley", 30),
    sprite_obj("ResultPanel", "panel_result"),
    text_obj("ResultTitle", "Title", 44, "255;214;90"),
    text_obj("ResultBody", "Body", 28),
    sprite_obj("ContinueButton", "button_wood"), text_obj("ContinueLabel", "Continue", 32),
    text_obj("StatusBanner", "", 34, "255;240;200"),
]
for o in NEW_OBJECTS:
    upsert(sail["objects"], o)
    if not any(i["name"] == o["name"] for i in sail["instances"]):
        is_bg = o["name"] in ("EnemyPanel", "ResultPanel") or o["name"].endswith("Button")
        sail["instances"].append(instance(o["name"], -2000, -2000,
                                          layer="" if o["name"] == "EnemyShip" else "HUD",
                                          z=9 if o["name"] == "EnemyShip" else (5 if is_bg else 6)))
DECISION_UI = ["EnemyPanel", "EnemyNameText", "EnemyTypeText", "EnemyStatsText", "EnemyHintText",
               "FightButton", "FightLabel", "FleeButton", "FleeLabel", "ParleyButton", "ParleyLabel"]
RESULT_UI = ["ResultPanel", "ResultTitle", "ResultBody", "ContinueButton", "ContinueLabel"]
sail.setdefault("objectsGroups", [])
upsert(sail["objectsGroups"], {"name": "DecisionUI", "objects": [{"name": n} for n in DECISION_UI]})
upsert(sail["objectsGroups"], {"name": "ResultUI", "objects": [{"name": n} for n in RESULT_UI]})

for n in ("EnemyCX", "EnemyCY", "EnemyStartX", "EnemyTargetX", "ApproachP", "Ease", "Tier",
          "StatScale", "EncWeightTotal", "EncRoll", "FleeChance", "Roll", "ShotsUsed",
          "PlayerPower", "EnemyPower", "WinChance", "DamageTaken", "GoldGain", "BannerTime",
          "BannerDirty", "InputConsumed", "PanelBY", "ResultY"):
    upsert(sail["variables"], var(n, 0))
for n in ("EncKey", "EncPicked", "PendingAction", "BannerText"):
    upsert(sail["variables"], var(n, ""))
# Value iterator for ForEachChildVariable. It MUST declare the same fields as an
# EncounterTypes entry: GDevelop compiles EncType.<field> to 0 / "" for undeclared fields.
upsert(sail["variables"], var("EncType", {
    "DisplayName": "", "Faction": "", "Hostile": 0, "BaseWeight": 0, "WeightPerTier": 0,
    "Hull": 0, "Crew": 0, "Cannons": 0, "Speed": 0, "GoldMin": 0, "GoldMax": 0,
    "NameCount": 0, "Names": [""]}))
upsert(sail["variables"], var("Enemy", {
    "Active": 0, "Departing": "", "Type": "", "Name": "", "DisplayName": "", "Faction": "",
    "Hostile": 0, "Tier": 1, "Hull": 0, "MaxHull": 0, "Crew": 0, "Cannons": 0, "Speed": 0,
    "Gold": 0, "EstCrew": 0, "EstCannons": 0, "Approx": "", "Danger": ""}))
upsert(sail["variables"], var("Result", {"Title": "", "Body": "", "Color": "255;214;90"}))

# Sailing scene links: Voyage -> Encounter -> UI (UI last so it shows this frame's values)
sail["events"] = [e for e in sail["events"] if e.get("target") != "EncounterManager"]
ui_index = next(i for i, e in enumerate(sail["events"]) if e.get("target") == "UIManager")
sail["events"].insert(ui_index, link("EncounterManager"))
sail["events"][0]["comment"] = (
    "SAILING SCENE -- logic lives in external events, one per manager.\n"
    "VoyageManager: voyage state machine, distance, ocean scroll, sinking.\n"
    "EncounterManager: spawning, approach, decisions, outcomes.\n"
    "UIManager: layout, HUD, buttons. Buttons only record Sailing.PendingAction;\n"
    "managers act on it next frame. Order matters: UI last.")


def banner(text_expr, seconds=2.4):
    return [setstr("BannerText", text_expr), setnum("BannerTime", seconds), setnum("BannerDirty", 1)]


def result(title, body_expr, color):
    return [setstr("Result.Title", s(title)), setstr("Result.Body", body_expr),
            setstr("Result.Color", s(color)), setnum("HudTimer", 1)]


NL = " + NewLine() + "
NAME = 'Enemy.Name'

# ------------------------------------------------------------------ VoyageManager edits
voy = external(proj, "VoyageManager")["events"]
voy[0]["comment"] = (
    "VOYAGE STATE MACHINE. Voyage.State holds exactly one of:\n"
    "PORT, SAILING, ENCOUNTER_APPROACH, ENCOUNTER_DECISION, COMBAT, BOARDING,\n"
    "PARLEY, TRADE, EVENT, REWARDS, RETURNING, SUNK.\n"
    "Change state ONLY by setting Voyage.State and resetting Voyage.StateTime to 0.\n"
    "Phase 2 uses: PORT, SAILING, ENCOUNTER_APPROACH, ENCOUNTER_DECISION, PARLEY,\n"
    "COMBAT (quick roll until Phase 3), REWARDS (outcome screen), RETURNING, SUNK.")
start = find_group(voy, "Voyage start (new voyage every time this scene opens)")["events"][0]["actions"]
if not any(a["parameters"][0] == "Voyage.Cannons" for a in start):
    start.insert(0, setnum("Voyage.Cannons", "Ships.Sloop.Cannons"))
sailing = find_group(voy, "STATE: SAILING")["events"]
sailing[:] = [sailing[0], ev([strcmp("Voyage.State", "SAILING"), strcmp("PendingAction", "RETURN")],
                             change_state("RETURNING"))]
FULL = "Voyage.Speed * Config.ScrollPerKnot"
enc_scroll = group("ENCOUNTER STATES: ships slow down alongside each other", [
    ev([strcmp("Voyage.State", st)], [setnum("ScrollTarget", FULL + " * Config.EncounterScrollFactor")])
    for st in ("ENCOUNTER_APPROACH", "ENCOUNTER_DECISION", "PARLEY", "COMBAT", "REWARDS")])
sunk = group("STATE: SUNK (hull reached 0: lose unbanked gold, keep permanent progress)", [
    ev([numcmp("Voyage.Hull", "<=", 0), strcmp("Voyage.State", "SUNK", "!="),
        strcmp("Voyage.State", "PORT", "!=")],
       [setnum("Voyage.Hull", 0)] +
       result("Your ship has sunk!", '"Unbanked gold lost: " + ToString(Voyage.Gold)' + NL +
              '"Your ships and upgrades are safe."', "230;90;80") + change_state("SUNK")),
    ev([strcmp("Voyage.State", "SUNK")], [setnum("ScrollTarget", 0)]),
    ev([strcmp("Voyage.State", "SUNK"), strcmp("PendingAction", "CONTINUE")],
       [setnum("Voyage.Gold", 0)] + change_state("PORT") + [act("Scene", "", s("Port"), "")]),
])
voy[:] = [e for e in voy if e.get("name") not in (enc_scroll["name"], sunk["name"])]
scroll_i = next(i for i, e in enumerate(voy) if e.get("name", "").startswith("Ocean scroll"))
voy[scroll_i:scroll_i] = [enc_scroll, sunk]

# ------------------------------------------------------------------ EncounterManager
WEIGHT = "max(5, EncType.BaseWeight + EncType.WeightPerTier * (Tier - 1))"


def foreach(events):
    return {"type": "BuiltinCommonInstructions::ForEachChildVariable",
            "iterableVariableName": "EncounterTypes", "valueIteratorVariableName": "EncType",
            "keyIteratorVariableName": "EncKey", "conditions": [], "actions": [], "events": events}


def reset_timer():
    return setnum("Voyage.NextEncounterIn",
                  "RandomFloatInRange(Config.EncounterMinDelay, Config.EncounterMaxDelay)")


def in_state(st):
    return strcmp("Voyage.State", st)


pick_actions = [
    setstr("EncPicked", "EncKey"),
    setstr("Enemy.Type", "EncKey"),
    setstr("Enemy.Name", 'EncType.Names[RandomInRange(0, EncType.NameCount - 1)]'),
    setstr("Enemy.DisplayName", "EncType.DisplayName"),
    setstr("Enemy.Faction", "EncType.Faction"),
    setnum("Enemy.Hostile", "EncType.Hostile"),
    setnum("Enemy.Tier", "Tier"),
    setnum("Enemy.MaxHull", "round(EncType.Hull * StatScale)"),
    setnum("Enemy.Hull", "Enemy.MaxHull"),
    setnum("Enemy.Crew", "round(EncType.Crew * StatScale)"),
    setnum("Enemy.Cannons", "EncType.Cannons + floor((Tier - 1) / 2)"),
    setnum("Enemy.Speed", "EncType.Speed"),
    setnum("Enemy.Gold", "round(RandomInRange(EncType.GoldMin, EncType.GoldMax) * StatScale)"),
]

ENC_EVENTS = [
    comment("ENCOUNTER MANAGER. One encounter at a time: the spawn timer only runs while\n"
            "SAILING with no other ship present (Enemy.Active = 0). A single EnemyShip\n"
            "instance is reused for every encounter (no create/delete per encounter).\n"
            "Encounter types are data in the global EncounterTypes structure."),
    group("Setup", [
        ev([cond("DepartScene", "")], [setnum("Enemy.Active", 0), setstr("Enemy.Departing", '""'),
                                       setstr("PendingAction", '""'), hide("EnemyShip"), reset_timer()]),
    ]),
    group("Spawn timer + weighted encounter generation", [
        ev([in_state("SAILING"), numcmp("Enemy.Active", "=", 0)],
           [setnum("Voyage.NextEncounterIn", "TimeDelta()", "-")]),
        ev([in_state("SAILING"), numcmp("Enemy.Active", "=", 0), numcmp("Voyage.NextEncounterIn", "<=", 0)], [
            setnum("Tier", "1 + floor(Voyage.Distance / Config.TierDistance)"),
            setnum("StatScale", "1 + Config.TierStatScale * (Tier - 1)"),
            setnum("EncWeightTotal", 0), setstr("EncPicked", '""'),
        ], [
            comment("Pass 1: total weight (weights shift with distance tier)."),
            foreach([ev([], [setnum("EncWeightTotal", WEIGHT, "+")])]),
            ev([], [setnum("EncRoll", "RandomFloat(EncWeightTotal)")]),
            comment("Pass 2: walk the list until the roll is used up."),
            foreach([
                ev([strcmp("EncPicked", "")], [setnum("EncRoll", WEIGHT, "-")]),
                ev([strcmp("EncPicked", ""), numcmp("EncRoll", "<", 0)], pick_actions),
            ]),
            ev([strcmp("EncPicked", "")], [reset_timer()]),  # safety: nothing picked
            ev([strcmp("EncPicked", "", "!=")], [
                setnum("Enemy.Active", 1), setstr("Enemy.Departing", '""'),
                act("SetAnimationName", "EnemyShip", "Enemy.Type"),
                act("Opacity", "EnemyShip", "=", "255"),
                act("SetAngle", "EnemyShip", "=", "0"),
                size("EnemyShip", "ShipH * 1.05 * EnemyShip.Width() / EnemyShip.Height()", "ShipH * 1.05"),
                show("EnemyShip"),
                setnum("EnemyStartX", "LayoutW + EnemyShip.Width()"),
                setnum("EnemyCX", "EnemyStartX"),
                setnum("EnemyCY", "ShipCY - ShipH * 0.15"),
                setnum("PlayerPower", "Voyage.Cannons * 9 + Voyage.Crew * 1.5 + Voyage.Hull * 0.2"),
                setnum("EnemyPower", "Enemy.Cannons * 9 + Enemy.Crew * 1.5 + Enemy.Hull * 0.2"),
                setstr("Enemy.Danger", '"Even"'),
            ] + banner('"A " + Enemy.DisplayName + " approaches!"') + change_state("ENCOUNTER_APPROACH"), [
                comment("Some information is approximate: hostile captains hide their strength."),
                ev([numcmp("Enemy.Hostile", "=", 1)], [
                    setnum("Enemy.EstCrew", "max(5, round(Enemy.Crew / 5) * 5)"),
                    setnum("Enemy.EstCannons", "max(1, Enemy.Cannons + RandomInRange(-1, 1))"),
                    setstr("Enemy.Approx", '"~"')]),
                ev([numcmp("Enemy.Hostile", "=", 0)], [
                    setnum("Enemy.EstCrew", "Enemy.Crew"), setnum("Enemy.EstCannons", "Enemy.Cannons"),
                    setstr("Enemy.Approx", '""')]),
                ev([expcmp("EnemyPower", "<", "PlayerPower * 0.8")], [setstr("Enemy.Danger", '"Low"')]),
                ev([expcmp("EnemyPower", ">", "PlayerPower * 1.2")], [setstr("Enemy.Danger", '"High"')]),
            ]),
        ]),
    ]),
    group("Enemy ship motion (time-based)", [
        ev([], [setnum("EnemyTargetX", "X0 + Config.RefWidth * 0.72")]),
        ev([in_state("ENCOUNTER_APPROACH")], [
            setnum("ApproachP", "min(1, Voyage.StateTime / Config.ApproachTime)"),
            setnum("Ease", "1 - pow(1 - ApproachP, 3)"),
            setnum("EnemyCX", "lerp(EnemyStartX, EnemyTargetX, Ease)"),
            act("SetAngle", "EnemyShip", "=", "-18 * (1 - Ease) + 2 * sin(TimeFromStart() * 1.4)"),
        ]),
        ev([in_state("ENCOUNTER_APPROACH"), numcmp("Voyage.StateTime", ">=", "Config.ApproachTime")],
           [setnum("HudTimer", 1)] + change_state("ENCOUNTER_DECISION")),
        *[ev([in_state(st), numcmp("Enemy.Active", "=", 1)], [
            setnum("EnemyCX", "EnemyTargetX"),
            act("SetAngle", "EnemyShip", "=", "2 * sin(TimeFromStart() * 1.4)")])
          for st in ("ENCOUNTER_DECISION", "PARLEY", "COMBAT", "REWARDS")],
        comment("Departures play after the outcome, once back to SAILING."),
        ev([in_state("SAILING"), strcmp("Enemy.Departing", "leave")], [
            setnum("EnemyCY", "TimeDelta() * 220", "-"), setnum("EnemyCX", "TimeDelta() * 60", "+")]),
        ev([in_state("SAILING"), strcmp("Enemy.Departing", "behind")], [
            setnum("EnemyCY", "TimeDelta() * 320", "+")]),
        ev([in_state("SAILING"), strcmp("Enemy.Departing", "sunk")], [
            act("Opacity", "EnemyShip", "-", "TimeDelta() * 170"),
            act("SetAngle", "EnemyShip", "+", "TimeDelta() * 25")]),
        ev([numcmp("Enemy.Active", "=", 1)], [
            set_xy("EnemyShip", "EnemyCX - EnemyShip.Width() / 2",
                   "EnemyCY - EnemyShip.Height() / 2 + 4 * sin(TimeFromStart() * 1.3 + 1)")]),
        ev([in_state("COMBAT"), numcmp("Enemy.Active", "=", 1)], [
            set_xy("EnemyShip", "EnemyShip.X() + 3 * sin(TimeFromStart() * 37)", "EnemyShip.Y()")]),
        comment("Ship fully gone: free the slot and schedule the next encounter."),
        ev([numcmp("Enemy.Active", "=", 1), strcmp("Enemy.Departing", "", "!="),
            expcmp("EnemyCY", "<", "-EnemyShip.Height()")], []),
    ]),
    group("Decision timeout (pirates attack, others sail on)", [
        ev([in_state("ENCOUNTER_DECISION"), numcmp("Voyage.StateTime", ">=", "Config.DecisionTimeout"),
            numcmp("Enemy.Hostile", "=", 1)],
           banner('"The " + Enemy.Name + " opens fire!"') + change_state("COMBAT")),
        ev([in_state("ENCOUNTER_DECISION"), numcmp("Voyage.StateTime", ">=", "Config.DecisionTimeout"),
            numcmp("Enemy.Hostile", "=", 0)],
           banner('"The " + Enemy.Name + " sails on."') + [setstr("Enemy.Departing", '"leave"')] +
           change_state("SAILING")),
    ]),
    group("Flee chance (shown on the Flee button)", [
        ev([numcmp("Enemy.Hostile", "=", 1)],
           [setnum("FleeChance", "clamp(0.5 + (Voyage.Speed - Enemy.Speed) * 0.06, 0.15, 0.9)")]),
        ev([numcmp("Enemy.Hostile", "=", 0)], [setnum("FleeChance", 1)]),
    ]),
    group("Player decisions (from Sailing.PendingAction)", [
        ev([in_state("ENCOUNTER_DECISION"), strcmp("PendingAction", "FIGHT")],
           banner('"Battle stations!"') + change_state("COMBAT")),
        ev([in_state("ENCOUNTER_DECISION"), strcmp("PendingAction", "FLEE")],
           [setnum("Roll", "RandomFloat(1)")], [
            ev([numcmp("Roll", "<", "FleeChance")],
               banner('"You slipped away!"') + [setstr("Enemy.Departing", '"behind"')] + change_state("SAILING")),
            ev([numcmp("Roll", ">=", "FleeChance")], [
                setnum("DamageTaken", "RandomInRange(4, 10) + Enemy.Cannons"),
                setnum("Voyage.Hull", "max(0, Voyage.Hull - DamageTaken)"),
            ] + banner('"Escape failed!  -" + ToString(DamageTaken) + " hull"') + change_state("COMBAT")),
        ]),
        ev([in_state("ENCOUNTER_DECISION"), strcmp("PendingAction", "PARLEY")],
           banner('"Parleying with the " + Enemy.Name + "..."', 1.6) + change_state("PARLEY")),
        ev([in_state("REWARDS"), strcmp("PendingAction", "CONTINUE")], change_state("SAILING")),
    ]),
    group("PARLEY outcome (weighted; full dialogue options come in a later phase)", [
        ev([in_state("PARLEY"), numcmp("Voyage.StateTime", ">=", "Config.ParleyTime")],
           [setnum("Roll", "RandomFloat(1)"), setstr("Enemy.Departing", '"leave"')], [
            comment("Merchant (not hostile)"),
            ev([numcmp("Enemy.Hostile", "=", 0), numcmp("Roll", "<", 0.5)], [
                setnum("GoldGain", "max(5, round(Enemy.Gold * 0.3))"),
                setnum("Voyage.Gold", "GoldGain", "+"),
            ] + result("Safe passage", '"The " + Enemy.Name + " pays"' + NL +
                       'ToString(GoldGain) + " gold for safe passage."', "255;214;90") + change_state("REWARDS")),
            ev([numcmp("Enemy.Hostile", "=", 0), numcmp("Roll", ">=", 0.5), numcmp("Roll", "<", 0.85)],
               result("Fair winds", '"The captain of the " + Enemy.Name' + NL +
                      '"wishes you fair winds."', "160;220;255") + change_state("REWARDS")),
            ev([numcmp("Enemy.Hostile", "=", 0), numcmp("Roll", ">=", 0.85)],
               result("No deal", '"The " + Enemy.Name + " refuses"' + NL + '"to talk and sails on."',
                      "220;220;220") + change_state("REWARDS")),
            comment("Pirate (hostile)"),
            ev([numcmp("Enemy.Hostile", "=", 1), numcmp("Roll", "<", 0.35), numcmp("Voyage.Gold", ">=", 10)], [
                setnum("GoldGain", "max(10, round(Voyage.Gold * 0.25))"),
                setnum("Voyage.Gold", "max(0, Voyage.Gold - GoldGain)"),
            ] + result("Tribute paid", '"You hand over " + ToString(GoldGain) + " gold."' + NL +
                       '"The " + Enemy.Name + " lets you pass."', "230;170;90") + change_state("REWARDS")),
            ev([numcmp("Enemy.Hostile", "=", 1), numcmp("Roll", "<", 0.35), numcmp("Voyage.Gold", "<", 10)],
               [setstr("Enemy.Departing", '""')] + banner('"Nothing to offer? They attack!"') +
               change_state("COMBAT")),
            ev([numcmp("Enemy.Hostile", "=", 1), numcmp("Roll", ">=", 0.35), numcmp("Roll", "<", 0.65)],
               result("Pirate's code", '"The " + Enemy.Name + " honours"' + NL + '"the code and sails off."',
                      "160;220;255") + change_state("REWARDS")),
            ev([numcmp("Enemy.Hostile", "=", 1), numcmp("Roll", ">=", 0.65)],
               [setstr("Enemy.Departing", '""')] + banner('"Parley fails! The " + Enemy.Name + " attacks!"') +
               change_state("COMBAT")),
        ]),
    ]),
    group("COMBAT (Phase 2 quick resolution; Phase 3 replaces this with cannon combat)", [
        ev([in_state("COMBAT"), numcmp("Voyage.StateTime", ">=", "Config.CombatResolveTime")], [
            setnum("ShotsUsed", "min(Voyage.Cannonballs, Voyage.Cannons * 3)"),
            setnum("Voyage.Cannonballs", "max(0, Voyage.Cannonballs - ShotsUsed)"),
            setnum("PlayerPower", "ShotsUsed * 3 + Voyage.Crew * 1.5 + Voyage.Hull * 0.2"),
            setnum("EnemyPower", "Enemy.Cannons * 9 + Enemy.Crew * 1.5 + Enemy.Hull * 0.2"),
            setnum("WinChance", "clamp(PlayerPower / max(1, PlayerPower + EnemyPower), 0.1, 0.9)"),
            setnum("Roll", "RandomFloat(1)"),
            setnum("DamageTaken", "round(Enemy.Cannons * RandomFloatInRange(2, 4))"),
        ], [
            ev([numcmp("Roll", "<", "WinChance")], [
                setnum("Voyage.Hull", "max(0, Voyage.Hull - DamageTaken)"),
                setnum("GoldGain", "Enemy.Gold"), setnum("Voyage.Gold", "GoldGain", "+"),
                setstr("Enemy.Departing", '"sunk"'),
            ] + result("Victory!", '"You sank the " + Enemy.Name + "."' + NL +
                       '"+" + ToString(GoldGain) + " gold    -" + ToString(DamageTaken) + " hull"' + NL +
                       '"Cannonballs used: " + ToString(ShotsUsed)', "255;214;90") + change_state("REWARDS")),
            ev([numcmp("Roll", ">=", "WinChance")], [
                setnum("DamageTaken", "round(DamageTaken * 1.8)"),
                setnum("Voyage.Hull", "max(0, Voyage.Hull - DamageTaken)"),
                setstr("Enemy.Departing", '"leave"'),
            ] + result("Driven off", '"The " + Enemy.Name + " out-gunned you."' + NL +
                       '"-" + ToString(DamageTaken) + " hull    no plunder"' + NL +
                       '"Cannonballs used: " + ToString(ShotsUsed)', "230;110;90") + change_state("REWARDS")),
        ]),
    ]),
    group("Frame end: the pending button action has been handled", [
        ev([], [setstr("PendingAction", '""')]),
    ]),
]

# fill the "ship fully gone" event properly (three exit conditions share one cleanup)
cleanup = [setnum("Enemy.Active", 0), setstr("Enemy.Departing", '""'), hide("EnemyShip"), reset_timer()]
motion = find_group(ENC_EVENTS, "Enemy ship motion (time-based)")["events"]
motion[-1] = ev([numcmp("Enemy.Active", "=", 1), strcmp("Enemy.Departing", "leave"),
                 expcmp("EnemyCY", "<", "-EnemyShip.Height()")], cleanup)
motion += [
    ev([numcmp("Enemy.Active", "=", 1), strcmp("Enemy.Departing", "behind"),
        expcmp("EnemyCY", ">", "LayoutH + EnemyShip.Height()")], cleanup),
    ev([numcmp("Enemy.Active", "=", 1), strcmp("Enemy.Departing", "sunk"),
        cond("Opacity", "EnemyShip", "<=", "0")], cleanup),
]

proj["externalEvents"] = [e for e in proj["externalEvents"] if e["name"] != "EncounterManager"]
proj["externalEvents"].append({"associatedLayout": "Sailing", "lastChangeTimeStamp": 0,
                               "name": "EncounterManager", "events": ENC_EVENTS})

# ------------------------------------------------------------------ UIManager edits
ui = external(proj, "UIManager")["events"]
layout = find_group(ui, "Layout (on start and on resize)")["events"][2]["actions"]
layout[:] = [a for a in layout if not str(a["parameters"][0]).startswith(
    tuple(DECISION_UI + RESULT_UI + ["PanelBY", "ResultY"]))]
layout += [
    # enemy info panel sits just above the bottom button row
    setnum("PanelBY", "BtnY - 24 - 210"),
    size("EnemyPanel", "Config.RefWidth - 32", 210), set_xy("EnemyPanel", "X0 + 16", "PanelBY"),
    set_xy("EnemyNameText", "X0 + 40", "PanelBY + 18"),
    set_xy("EnemyTypeText", "X0 + 40", "PanelBY + 64"),
    set_xy("EnemyStatsText", "X0 + 40", "PanelBY + 104"),
    set_xy("EnemyHintText", "X0 + 40", "PanelBY + 152"),
    act("ChangeColor", "FightButton", s("200;70;60")),
    act("ChangeColor", "FleeButton", s("70;120;190")),
    act("ChangeColor", "ParleyButton", s("70;160;90")),
]
for i, b in enumerate(("Fight", "Flee", "Parley")):
    layout += [size(b + "Button", 216, 96), set_xy(b + "Button", f"X0 + 16 + {i} * 236", "BtnY")]
layout += [
    setnum("ResultY", "LayoutH * 0.5 - 260"),
    size("ResultPanel", 620, 420), set_xy("ResultPanel", "X0 + 50", "ResultY"),
    size("ContinueButton", 300, 96), set_xy("ContinueButton", "X0 + 210", "ResultY + 296"),
]

center_label = lambda lbl, btn: set_xy(lbl, f"{btn}.X() + ({btn}.Width() - {lbl}.Width()) / 2",
                                       f"{btn}.Y() + ({btn}.Height() - {lbl}.Height()) / 2")
refresh = find_group(ui, "HUD refresh (5x per second, not every frame, to avoid re-rendering text)")["events"][1]
refresh["events"] = [e for e in refresh["events"] if not e.get("conditions") or
                     e["conditions"][0]["parameters"][0] != "Voyage.State"]
refresh["events"] += [
    ev([in_state("ENCOUNTER_DECISION")], [
        set_text("EnemyNameText", "Enemy.Name"),
        set_text("EnemyTypeText", 'Enemy.DisplayName + "  ·  " + Enemy.Faction + "  ·  Danger: " + Enemy.Danger'),
        set_text("EnemyStatsText", '"Hull " + ToString(Enemy.Hull) + "    Crew " + Enemy.Approx + '
                 'ToString(Enemy.EstCrew) + "    Cannons " + Enemy.Approx + ToString(Enemy.EstCannons)'),
        set_text("FleeLabel", '"Flee " + ToString(round(FleeChance * 100)) + "%"'),
        center_label("FightLabel", "FightButton"), center_label("FleeLabel", "FleeButton"),
        center_label("ParleyLabel", "ParleyButton"),
    ], [
        ev([numcmp("Enemy.Hostile", "=", 1)], [
            act("TextObject::ChangeColor", "EnemyNameText", s("255;120;100")),
            set_text("EnemyHintText", '"They will attack in " + ToString(ceil(Config.DecisionTimeout - '
                     'Voyage.StateTime)) + "s"')]),
        ev([numcmp("Enemy.Hostile", "=", 0)], [
            act("TextObject::ChangeColor", "EnemyNameText", s("255;230;160")),
            set_text("EnemyHintText", '"They will sail on in " + ToString(ceil(Config.DecisionTimeout - '
                     'Voyage.StateTime)) + "s"')]),
    ]),
    *[ev([in_state(st)], [
        set_text("ResultTitle", "Result.Title"), set_text("ResultBody", "Result.Body"),
        act("TextObject::ChangeColor", "ResultTitle", "Result.Color"),
        set_xy("ResultTitle", "X0 + (Config.RefWidth - ResultTitle.Width()) / 2", "ResultY + 34"),
        set_xy("ResultBody", "X0 + (Config.RefWidth - ResultBody.Width()) / 2", "ResultY + 112"),
        set_text("ContinueLabel", '"Continue"' if st == "REWARDS" else '"Return to Port"'),
        center_label("ContinueLabel", "ContinueButton")]) for st in ("REWARDS", "SUNK")],
]

encounter_ui = group("Encounter UI: visibility + banner", [
    ev([in_state("ENCOUNTER_DECISION")], [show("DecisionUI")]),
    ev([strcmp("Voyage.State", "ENCOUNTER_DECISION", "!=")], [hide("DecisionUI")]),
    ev([in_state("REWARDS")], [show("ResultUI")]),
    ev([in_state("SUNK")], [show("ResultUI")]),
    ev([strcmp("Voyage.State", "REWARDS", "!="), strcmp("Voyage.State", "SUNK", "!=")], [hide("ResultUI")]),
    ev([numcmp("BannerDirty", "=", 1)], [set_text("StatusBanner", "BannerText"), setnum("BannerDirty", 0)]),
    ev([numcmp("BannerTime", ">", 0)], [
        setnum("BannerTime", "TimeDelta()", "-"), show("StatusBanner"),
        act("TextObject::Opacity", "StatusBanner", "=", "min(255, BannerTime * 510)"),
        set_xy("StatusBanner", "X0 + (Config.RefWidth - StatusBanner.Width()) / 2", "PanelY + 236")]),
    ev([numcmp("BannerTime", "<=", 0)], [hide("StatusBanner")]),
])
buttons = group("HUD buttons (UI only records the choice; managers act on it next frame)", [
    ev([], [setnum("InputConsumed", 0)]),
    *[ev([in_state(st), numcmp("InputConsumed", "=", 0)] + tapped(btn),
         [setstr("PendingAction", s(action)), setnum("InputConsumed", 1)])
      for st, btn, action in (("SAILING", "ReturnButton", "RETURN"),
                              ("ENCOUNTER_DECISION", "FightButton", "FIGHT"),
                              ("ENCOUNTER_DECISION", "FleeButton", "FLEE"),
                              ("ENCOUNTER_DECISION", "ParleyButton", "PARLEY"),
                              ("REWARDS", "ContinueButton", "CONTINUE"),
                              ("SUNK", "ContinueButton", "CONTINUE"))],
    ev([in_state("SAILING")], [show("ReturnButton"), show("ReturnLabel")]),
    ev([strcmp("Voyage.State", "SAILING", "!=")], [hide("ReturnButton"), hide("ReturnLabel")]),
])
ui[:] = [e for e in ui if not (e.get("type") == "BuiltinCommonInstructions::Group" and
                               (e["name"].startswith("HUD buttons") or e["name"] == encounter_ui["name"]))]
ui += [encounter_ui, buttons]

motion_ui = find_group(ui, "Ship idle motion (rocking + bobbing, time-based)")["events"]
motion_ui[:] = motion_ui[:1] + [ev([in_state("COMBAT")], [
    set_xy("PlayerShip", "PlayerShip.X() + 3 * sin(TimeFromStart() * 41)", "PlayerShip.Y()")])]

save(proj)
print("Phase 2 applied to", "HighSeas.json")
