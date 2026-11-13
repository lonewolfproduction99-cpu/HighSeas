"""ONE-TIME bootstrap of the High Seas GDevelop project (Phase 1).

Writes HighSeas.json from scratch. After Phase 1 the project is edited in the
GDevelop editor (or with targeted edits) -- do NOT re-run this on a project
that has been edited, it would discard those edits. It refuses to overwrite
an existing project unless --force is passed.

Run:  python tools/bootstrap_phase1.py [--force]
"""
import json
import os
import sys
import uuid

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
PROJECT = os.path.join(ROOT, "HighSeas.json")

REF_W, REF_H = 720, 1280  # 9:16 reference layout


# ------------------------------------------------------------------ helpers
def s(text):
    """GDevelop string-literal parameter."""
    return '"' + text + '"'


def cond(type_, *params, inverted=False):
    return {"type": {"inverted": inverted, "value": type_}, "parameters": list(params)}


def act(type_, *params):
    return {"type": {"value": type_}, "parameters": list(params)}


def ev(conditions=None, actions=None, events=None):
    return {"type": "BuiltinCommonInstructions::Standard",
            "conditions": conditions or [], "actions": actions or [],
            "events": events or []}


def comment(text):
    return {"type": "BuiltinCommonInstructions::Comment",
            "color": {"b": 109, "g": 230, "r": 255, "textB": 0, "textG": 0, "textR": 0},
            "comment": text, "comment2": ""}


def group(name, events, color=(74, 176, 228)):
    return {"type": "BuiltinCommonInstructions::Group", "name": name, "source": "",
            "creationTime": 0, "colorR": color[0], "colorG": color[1], "colorB": color[2],
            "folded": False, "events": events}


def link(target):
    return {"type": "BuiltinCommonInstructions::Link", "disabled": False,
            "folded": False, "include": {"includeConfig": 0}, "target": target}


def setnum(var, value, op="="):
    return act("SetNumberVariable", var, op, str(value))


def setstr(var, value_expr):
    return act("SetStringVariable", var, "=", value_expr)


def numcmp(var, op, value):
    return cond("NumberVariable", var, op, str(value))


def strcmp(var, value):
    return cond("StringVariable", var, "=", s(value))


def set_text(obj, expr):
    return act("TextObject::String", obj, "=", expr)


def set_xy(obj, x, y):
    return act("SetXY", obj, "=", x, "=", y)


def tapped(obj):
    """Touch/click released over an object (touch is mapped to mouse by default)."""
    return [cond("MouseButtonReleased", "", "Left"),
            cond("SourisSurObjet", obj, "", "", "")]


# variables -----------------------------------------------------------------
def var(name, value):
    if isinstance(value, dict):
        return {"name": name, "type": "structure",
                "children": [var(k, v) for k, v in value.items()]}
    if isinstance(value, bool):
        return {"name": name, "type": "boolean", "value": value}
    if isinstance(value, (int, float)):
        return {"name": name, "type": "number", "value": value}
    return {"name": name, "type": "string", "value": value}


# resources / objects ---------------------------------------------------------
RESOURCES = {}


def image(name, rel_path):
    RESOURCES[name] = {"file": rel_path.replace("\\", "/"), "kind": "image",
                       "metadata": "", "name": name, "smoothed": True, "userAdded": True}
    return name


def sprite_obj(name, res):
    return {
        "adaptCollisionMaskAutomatically": True, "updateIfNotVisible": False,
        "name": name, "type": "Sprite", "variables": [], "effects": [],
        "behaviors": [], "tags": "",
        "animations": [{
            "name": "Default", "useMultipleDirections": False,
            "directions": [{"looping": False, "timeBetweenFrames": 0.08, "sprites": [{
                "hasCustomCollisionMask": False, "image": res, "points": [],
                "originPoint": {"name": "origine", "x": 0, "y": 0},
                "centerPoint": {"automatic": True, "name": "centre", "x": 0, "y": 0},
                "customCollisionMask": []}]}]}],
    }


def tiled_obj(name, res, w=REF_W, h=REF_H):
    return {"name": name, "type": "TiledSpriteObject::TiledSprite", "variables": [],
            "effects": [], "behaviors": [], "tags": "", "texture": res,
            "width": w, "height": h}


def text_obj(name, text, size=28, color="255;255;255", bold=True):
    return {"name": name, "type": "TextObject::Text", "variables": [], "effects": [],
            "behaviors": [], "tags": "",
            "content": {"bold": bold, "italic": False, "smoothed": True,
                        "underlined": False, "text": text, "font": "",
                        "characterSize": size, "color": color,
                        "textAlignment": "left", "verticalTextAlignment": "top",
                        "isOutlineEnabled": True, "outlineThickness": 3,
                        "outlineColor": "10;14;24", "isShadowEnabled": False,
                        "shadowColor": "0;0;0", "shadowOpacity": 127,
                        "shadowDistance": 4, "shadowAngle": 90, "shadowBlurRadius": 2}}


def instance(obj, x=0, y=0, layer="", z=1, w=None, h=None):
    inst = {"angle": 0, "customSize": w is not None, "height": h or 0, "width": w or 0,
            "layer": layer, "locked": False, "name": obj,
            "persistentUuid": str(uuid.uuid4()), "x": x, "y": y, "zOrder": z,
            "numberProperties": [], "stringProperties": [], "initialVariables": []}
    return inst


def layer(name):
    return {"ambientLightColorB": 200, "ambientLightColorG": 200, "ambientLightColorR": 200,
            "camera3DFarPlaneDistance": 10000, "camera3DFieldOfView": 45,
            "camera3DNearPlaneDistance": 3, "followBaseLayerCamera": False,
            "isLightingLayer": False, "isLocked": False, "name": name,
            "renderingType": "2d", "visibility": True,
            "defaultCameraBehavior": "top-left-anchored-if-never-moved",
            "cameras": [{"defaultSize": True, "defaultViewport": True, "height": 0,
                         "viewportBottom": 1, "viewportLeft": 0, "viewportRight": 1,
                         "viewportTop": 0, "width": 0}],
            "effects": []}


def scene(name, objects, instances, variables, events, bg=(18, 60, 92)):
    return {"b": bg[2], "g": bg[1], "r": bg[0], "v": 0,
            "disableInputWhenNotFocused": True, "mangledName": name, "name": name,
            "standardSortMethod": True, "stopSoundsOnStartup": True, "title": "",
            "uiSettings": {"grid": False, "gridType": "rectangular", "gridWidth": 32,
                           "gridHeight": 32, "gridOffsetX": 0, "gridOffsetY": 0,
                           "gridColor": 10401023, "gridAlpha": 0.8, "snap": False,
                           "zoomFactor": 0.5, "windowMask": False},
            "variables": variables, "instances": instances, "objects": objects,
            "objectsFolderStructure": {"folderName": "__ROOT"},
            "events": events, "layers": [layer(""), layer("HUD")],
            "behaviorsSharedData": [], "usedResources": []}


# ------------------------------------------------------------------ resources
P = "assets/placeholders/"
image("ocean_tile", P + "ocean/ocean_tile.png")
image("foam_tile", P + "ocean/foam_tile.png")
image("ship_player_sloop", P + "ships/ship_player_sloop_PH.png")
image("hud_panel", P + "ui/hud_panel.png")
image("button_wood", P + "ui/button_wood.png")
image("bar_bg", P + "ui/bar_bg.png")
image("bar_fill", P + "ui/bar_fill.png")
image("port_bg", P + "port/port_bg_PH.png")
for ic in ("gold", "hull", "crew", "food", "shot", "cargo", "distance"):
    image("icon_" + ic, P + "ui/icons/icon_" + ic + ".png")


# ------------------------------------------------------------------ globals
GLOBAL_VARIABLES = [
    var("Config", {
        "SaveVersion": 1,
        "ScrollPerKnot": 12,           # ocean px/second per knot of ship speed
        "DistancePerKnotSecond": 0.01,  # nautical miles per knot per second
        "RefWidth": REF_W, "RefHeight": REF_H,
    }),
    var("Settings", {"SafeTop": 24, "SafeBottom": 24}),
    var("Player", {"BankedGold": 100, "SelectedShip": "Sloop"}),
    var("Ships", {"Sloop": {
        "DisplayName": "Sloop", "MaxHull": 100, "Cannons": 4, "MaxCrew": 16,
        "StartCrew": 12, "Speed": 12, "CargoMax": 20, "FoodMax": 40,
        "ShotMax": 60}}),
    var("StartSupplies", {"Food": 30, "Cannonballs": 40}),
    var("Voyage", {
        "State": "PORT", "StateTime": 0, "Distance": 0, "Gold": 0,
        "Hull": 0, "MaxHull": 0, "Crew": 0, "MaxCrew": 0, "Food": 0,
        "Cannonballs": 0, "CargoUsed": 0, "CargoMax": 0, "Speed": 0}),
]


# ================================================================== SAILING
SAIL_OBJECTS = [
    tiled_obj("Ocean", "ocean_tile"),
    tiled_obj("OceanFoam", "foam_tile"),
    sprite_obj("PlayerShip", "ship_player_sloop"),
    sprite_obj("HudPanel", "hud_panel"),
    sprite_obj("HullBarBg", "bar_bg"),
    sprite_obj("HullBarFill", "bar_fill"),
    sprite_obj("IconDistance", "icon_distance"),
    sprite_obj("IconGold", "icon_gold"),
    sprite_obj("IconHull", "icon_hull"),
    sprite_obj("IconCrew", "icon_crew"),
    sprite_obj("IconFood", "icon_food"),
    sprite_obj("IconShot", "icon_shot"),
    sprite_obj("IconCargo", "icon_cargo"),
    text_obj("DistanceText", "0.0 nm", 34),
    text_obj("GoldText", "0", 34, "255;214;90"),
    text_obj("HullText", "100/100", 26),
    text_obj("CrewText", "12/16", 26),
    text_obj("FoodText", "30", 26),
    text_obj("ShotText", "40", 26),
    text_obj("CargoText", "0/20", 26),
    sprite_obj("ReturnButton", "button_wood"),
    text_obj("ReturnLabel", "Return to Port", 30),
    text_obj("StateText", "SAILING", 18, "200;230;255", bold=False),
]

SAIL_INSTANCES = [
    instance("Ocean", 0, 0, z=0, w=REF_W, h=REF_H),
    instance("OceanFoam", 0, 0, z=1, w=REF_W, h=REF_H),
    instance("PlayerShip", 140, 560, z=10),
] + [instance(o["name"], 0, 0, layer="HUD", z=(1 if o["name"] in ("HudPanel", "ReturnButton", "HullBarBg") else 2 if o["name"] == "HullBarFill" else 3))
     for o in SAIL_OBJECTS if o["name"] not in ("Ocean", "OceanFoam", "PlayerShip")]

SAIL_VARIABLES = [var(n, 0) for n in (
    "LayoutW", "LayoutH", "X0", "PanelX", "PanelY", "ShipCX", "ShipCY", "ShipH",
    "ScrollSpeed", "ScrollTarget", "OceanOffset", "FoamOffset", "HudTimer",
    "HullRatio", "BtnX", "BtnY")]

SAIL_EVENTS = [
    comment("SAILING SCENE -- logic lives in external events, one per manager.\n"
            "VoyageManager: voyage state machine + distance + ocean scroll.\n"
            "UIManager: responsive layout, HUD refresh, HUD buttons.\n"
            "Order matters: state logic runs before UI so the HUD shows this frame's values."),
    link("VoyageManager"),
    link("UIManager"),
]

# ---------------------------------------------------------------- VoyageManager
VOYAGE_EVENTS = [
    comment("VOYAGE STATE MACHINE. Voyage.State holds exactly one of:\n"
            "PORT, SAILING, ENCOUNTER_APPROACH, ENCOUNTER_DECISION, COMBAT, BOARDING,\n"
            "PARLEY, TRADE, EVENT, REWARDS, RETURNING, SUNK.\n"
            "Change state ONLY by setting Voyage.State and resetting Voyage.StateTime to 0.\n"
            "Phase 1 implements SAILING and RETURNING; other states are reserved."),
    group("Voyage start (new voyage every time this scene opens)", [
        ev([cond("DepartScene", "")], [
            setnum("Voyage.MaxHull", "Ships.Sloop.MaxHull"),
            setnum("Voyage.Hull", "Voyage.MaxHull"),
            setnum("Voyage.MaxCrew", "Ships.Sloop.MaxCrew"),
            setnum("Voyage.Crew", "Ships.Sloop.StartCrew"),
            setnum("Voyage.Speed", "Ships.Sloop.Speed"),
            setnum("Voyage.CargoMax", "Ships.Sloop.CargoMax"),
            setnum("Voyage.CargoUsed", 0),
            setnum("Voyage.Food", "StartSupplies.Food"),
            setnum("Voyage.Cannonballs", "StartSupplies.Cannonballs"),
            setnum("Voyage.Gold", 0),
            setnum("Voyage.Distance", 0),
            setstr("Voyage.State", s("SAILING")),
            setnum("Voyage.StateTime", 0),
            setnum("ScrollSpeed", "Voyage.Speed * Config.ScrollPerKnot"),
        ]),
    ]),
    group("State timer (seconds spent in current state, frame-rate independent)", [
        ev([], [setnum("Voyage.StateTime", "TimeDelta()", "+")]),
    ]),
    group("STATE: SAILING", [
        ev([strcmp("Voyage.State", "SAILING")], [
            setnum("Voyage.Distance", "Voyage.Speed * Config.DistancePerKnotSecond * TimeDelta()", "+"),
            setnum("ScrollTarget", "Voyage.Speed * Config.ScrollPerKnot"),
        ]),
    ]),
    group("STATE: RETURNING (ship slows, then the Port scene opens)", [
        ev([strcmp("Voyage.State", "RETURNING")], [setnum("ScrollTarget", 0)]),
        ev([strcmp("Voyage.State", "RETURNING"), numcmp("Voyage.StateTime", ">=", 1.5)], [
            setstr("Voyage.State", s("PORT")),
            setnum("Voyage.StateTime", 0),
            act("Scene", "", s("Port"), ""),
        ]),
        comment("Phase 5 will bank Voyage.Gold / cargo into Player here before leaving."),
    ]),
    group("Ocean scroll (eases toward ScrollTarget; offsets wrap to stay small)", [
        ev([], [
            setnum("ScrollSpeed", "lerp(ScrollSpeed, ScrollTarget, min(1, 2 * TimeDelta()))"),
            setnum("OceanOffset", "mod(OceanOffset + ScrollSpeed * TimeDelta(), 256)"),
            setnum("FoamOffset", "mod(FoamOffset + ScrollSpeed * 1.5 * TimeDelta(), 512)"),
            act("TiledSpriteObject::YOffset", "Ocean", "=", "-OceanOffset"),
            act("TiledSpriteObject::YOffset", "OceanFoam", "=", "-FoamOffset"),
        ]),
    ]),
]

# ---------------------------------------------------------------- UIManager
W, H = "SceneWindowWidth()", "SceneWindowHeight()"
HUD_ROW3 = [("IconCrew", "CrewText"), ("IconFood", "FoodText"),
            ("IconShot", "ShotText"), ("IconCargo", "CargoText")]

layout_actions = [
    setnum("LayoutW", W), setnum("LayoutH", H),
    # Content column is the 720px reference width, centred on wide screens.
    setnum("X0", "max(0, (LayoutW - Config.RefWidth) / 2)"),
    act("TiledSpriteObject::SetSize", "Ocean", "LayoutW", "LayoutH"),
    act("TiledSpriteObject::SetSize", "OceanFoam", "LayoutW", "LayoutH"),
    set_xy("Ocean", "0", "0"), set_xy("OceanFoam", "0", "0"),
    # Player ship: left-centre. Size derives from screen height, aspect from the art,
    # so a Blender render of any pixel size drops in without touching events.
    setnum("ShipH", "min(LayoutH * 0.22, 320)"),
    act("SetSize", "PlayerShip", "ShipH * PlayerShip.Width() / PlayerShip.Height()", "ShipH"),
    setnum("ShipCX", "X0 + Config.RefWidth * 0.28"),
    setnum("ShipCY", "LayoutH * 0.56"),
    # HUD panel (top, below safe area)
    setnum("PanelX", "X0 + 16"), setnum("PanelY", "Settings.SafeTop + 16"),
    act("SetSize", "HudPanel", "Config.RefWidth - 32", "184"),
    set_xy("HudPanel", "PanelX", "PanelY"),
    # row 1: distance (left) and gold (right)
    act("SetSize", "IconDistance", "44", "44"), set_xy("IconDistance", "PanelX + 20", "PanelY + 18"),
    set_xy("DistanceText", "PanelX + 74", "PanelY + 20"),
    act("SetSize", "IconGold", "44", "44"), set_xy("IconGold", "PanelX + 440", "PanelY + 18"),
    set_xy("GoldText", "PanelX + 494", "PanelY + 20"),
    # row 2: hull bar
    act("SetSize", "IconHull", "40", "40"), set_xy("IconHull", "PanelX + 22", "PanelY + 74"),
    act("SetSize", "HullBarBg", "440", "28"), set_xy("HullBarBg", "PanelX + 74", "PanelY + 80"),
    set_xy("HullBarFill", "PanelX + 74", "PanelY + 80"),
    set_xy("HullText", "PanelX + 530", "PanelY + 78"),
]
# row 3: four stat columns
for i, (ic, tx) in enumerate(HUD_ROW3):
    col = f"PanelX + 20 + {i} * 166"
    layout_actions += [act("SetSize", ic, "36", "36"), set_xy(ic, col, "PanelY + 128"),
                       set_xy(tx, f"{col} + 44", "PanelY + 130")]
layout_actions += [
    # bottom: Return button (>= 88px tall touch target), reserved area above it
    # is kept free for Phase 2's Fight / Flee / Parley buttons.
    act("SetSize", "ReturnButton", "320", "96"),
    setnum("BtnX", "X0 + (Config.RefWidth - 320) / 2"),
    setnum("BtnY", "LayoutH - Settings.SafeBottom - 96 - 24"),
    set_xy("ReturnButton", "BtnX", "BtnY"),
    set_xy("ReturnLabel", "BtnX + (320 - ReturnLabel.Width()) / 2",
           "BtnY + (96 - ReturnLabel.Height()) / 2"),
    set_xy("StateText", "X0 + 20", "PanelY + 196"),
    setnum("HudTimer", 1),  # force an immediate HUD refresh after relayout
]

UI_EVENTS = [
    comment("RESPONSIVE LAYOUT. Game uses 'scaleOuter': the 720x1280 reference is always\n"
            "fully visible, taller phones get extra height, tablets get extra width.\n"
            "Everything is positioned from SceneWindowWidth/Height, and recomputed only\n"
            "when the window size changes (not every frame).\n"
            "Settings.SafeTop/SafeBottom reserve space for notches / home indicators."),
    group("Layout (on start and on resize)", [
        ev([cond("DepartScene", "")], [setnum("LayoutW", -1)]),
        ev([cond("BuiltinCommonInstructions::CompareNumbers", "LayoutW", "!=", W)], [setnum("LayoutH", -1)]),
        ev([cond("BuiltinCommonInstructions::CompareNumbers", "LayoutH", "!=", H)], layout_actions),
    ]),
    group("Ship idle motion (rocking + bobbing, time-based)", [
        ev([], [
            act("SetAngle", "PlayerShip", "=", "2.5 * sin(TimeFromStart() * 1.6)"),
            set_xy("PlayerShip", "ShipCX - PlayerShip.Width() / 2",
                   "ShipCY - PlayerShip.Height() / 2 + 4 * sin(TimeFromStart() * 1.1)"),
        ]),
    ]),
    group("HUD refresh (5x per second, not every frame, to avoid re-rendering text)", [
        ev([], [setnum("HudTimer", "TimeDelta()", "+")]),
        ev([numcmp("HudTimer", ">=", 0.2)], [
            setnum("HudTimer", 0),
            set_text("DistanceText", 'ToString(floor(Voyage.Distance)) + "." + '
                     'ToString(mod(floor(Voyage.Distance * 10), 10)) + " nm"'),
            set_text("GoldText", "ToString(Voyage.Gold)"),
            set_text("HullText", 'ToString(ceil(Voyage.Hull)) + "/" + ToString(Voyage.MaxHull)'),
            set_text("CrewText", 'ToString(Voyage.Crew) + "/" + ToString(Voyage.MaxCrew)'),
            set_text("FoodText", "ToString(floor(Voyage.Food))"),
            set_text("ShotText", "ToString(Voyage.Cannonballs)"),
            set_text("CargoText", 'ToString(Voyage.CargoUsed) + "/" + ToString(Voyage.CargoMax)'),
            set_text("StateText", '"State: " + Voyage.State'),
            setnum("HullRatio", "clamp(Voyage.Hull / max(1, Voyage.MaxHull), 0, 1)"),
            act("SetSize", "HullBarFill", "max(1, 440 * HullRatio)", "28"),
        ], [
            ev([numcmp("HullRatio", ">", 0.5)], [act("ChangeColor", "HullBarFill", s("90;200;90"))]),
            ev([numcmp("HullRatio", "<=", 0.5), numcmp("HullRatio", ">", 0.25)],
               [act("ChangeColor", "HullBarFill", s("230;190;60"))]),
            ev([numcmp("HullRatio", "<=", 0.25)], [act("ChangeColor", "HullBarFill", s("220;70;60"))]),
        ]),
    ]),
    group("HUD buttons", [
        ev([strcmp("Voyage.State", "SAILING")] + tapped("ReturnButton"), [
            setstr("Voyage.State", s("RETURNING")),
            setnum("Voyage.StateTime", 0),
        ]),
        ev([strcmp("Voyage.State", "SAILING")], [act("Show", "ReturnButton", ""), act("Show", "ReturnLabel", "")]),
        ev([cond("StringVariable", "Voyage.State", "!=", s("SAILING"))],
           [act("Hide", "ReturnButton"), act("Hide", "ReturnLabel")]),
    ]),
]


# ================================================================== PORT (stub)
PORT_OBJECTS = [
    sprite_obj("PortBackground", "port_bg"),
    sprite_obj("DockedShip", "ship_player_sloop"),
    text_obj("TitleText", "HIGH SEAS", 64, "255;230;160"),
    text_obj("BankedGoldText", "Gold: 100", 32, "255;214;90"),
    text_obj("PortInfoText", "Shipyard, Tavern and Market\narrive in Phase 5", 24),
    sprite_obj("SetSailButton", "button_wood"),
    text_obj("SetSailLabel", "Set Sail", 36),
]
PORT_INSTANCES = [instance("PortBackground", z=0), instance("DockedShip", z=5)] + [
    instance(o["name"], layer="HUD", z=(1 if o["name"] == "SetSailButton" else 2))
    for o in PORT_OBJECTS if o["name"] not in ("PortBackground", "DockedShip")]
PORT_VARIABLES = [var(n, 0) for n in ("LayoutW", "LayoutH", "X0", "BgScale", "BtnX", "BtnY")]

port_layout = [
    setnum("LayoutW", W), setnum("LayoutH", H),
    setnum("X0", "max(0, (LayoutW - Config.RefWidth) / 2)"),
    # "cover" scaling for the backdrop, aspect taken from the art itself
    setnum("BgScale", "max(LayoutW / PortBackground.Width(), LayoutH / PortBackground.Height())"),
    act("SetSize", "PortBackground", "PortBackground.Width() * BgScale", "PortBackground.Height() * BgScale"),
    set_xy("PortBackground", "(LayoutW - PortBackground.Width()) / 2", "(LayoutH - PortBackground.Height()) / 2"),
    act("SetSize", "DockedShip", "min(LayoutH * 0.2, 280) * DockedShip.Width() / DockedShip.Height()",
        "min(LayoutH * 0.2, 280)"),
    set_xy("DockedShip", "LayoutW / 2 + 60", "LayoutH * 0.52"),
    set_xy("TitleText", "X0 + (Config.RefWidth - TitleText.Width()) / 2", "Settings.SafeTop + 110"),
    set_xy("BankedGoldText", "X0 + (Config.RefWidth - BankedGoldText.Width()) / 2", "Settings.SafeTop + 190"),
    set_xy("PortInfoText", "X0 + 24", "LayoutH * 0.52"),
    act("SetSize", "SetSailButton", "360", "110"),
    setnum("BtnX", "X0 + (Config.RefWidth - 360) / 2"),
    setnum("BtnY", "LayoutH - Settings.SafeBottom - 110 - 40"),
    set_xy("SetSailButton", "BtnX", "BtnY"),
    set_xy("SetSailLabel", "BtnX + (360 - SetSailLabel.Width()) / 2", "BtnY + (110 - SetSailLabel.Height()) / 2"),
]

PORT_EVENTS = [
    comment("PORT (Phase 1 stub). Full harbor with Shipyard/Tavern/Market is Phase 5."),
    ev([cond("DepartScene", "")], [
        setstr("Voyage.State", s("PORT")), setnum("Voyage.StateTime", 0),
        set_text("BankedGoldText", '"Gold: " + ToString(Player.BankedGold)'),
        setnum("LayoutW", -1),
    ]),
    ev([cond("BuiltinCommonInstructions::CompareNumbers", "LayoutW", "!=", W)], [setnum("LayoutH", -1)]),
    ev([cond("BuiltinCommonInstructions::CompareNumbers", "LayoutH", "!=", H)], port_layout),
    ev(tapped("SetSailButton"), [act("Scene", "", s("Sailing"), "")]),
]


# ------------------------------------------------------------------ assemble
def main():
    # Starts from the blank project created by the GDevelop MCP quick-start template.
    with open(PROJECT, encoding="utf-8") as f:
        proj = json.load(f)
    if any(l["name"] == "Sailing" for l in proj.get("layouts", [])) and "--force" not in sys.argv:
        sys.exit("HighSeas.json already bootstrapped; pass --force to overwrite.")
    props = proj["properties"]
    props.update({
        "name": "High Seas", "description": "Passive pirate roguelite (working title).",
        "packageName": "com.highseas.game", "version": "0.1.0",
        "orientation": "portrait", "windowWidth": REF_W, "windowHeight": REF_H,
        "sizeOnStartupMode": "scaleOuter", "adaptGameResolutionAtRuntime": True,
        "scaleMode": "linear", "pixelsRounding": False, "maxFPS": 60, "minFPS": 20,
        "antialiasingMode": "MSAA", "antialisingEnabledOnMobile": False,
    })
    # GDevelop's "Made with GDevelop" badge shows for ~20s after launch and is a
    # clickable link. At the bottom it swallowed taps on Set Sail / Return to Port,
    # so keep it at the top (removing it is an account/licensing decision).
    props["watermark"] = {"placement": "top-left", "showWatermark": True}
    proj["firstLayout"] = "Port"
    proj["variables"] = GLOBAL_VARIABLES
    proj["resources"] = {"resources": list(RESOURCES.values())}
    proj["layouts"] = [
        scene("Port", PORT_OBJECTS, PORT_INSTANCES, PORT_VARIABLES, PORT_EVENTS, bg=(120, 180, 220)),
        scene("Sailing", SAIL_OBJECTS, SAIL_INSTANCES, SAIL_VARIABLES, SAIL_EVENTS),
    ]
    proj["externalEvents"] = [
        {"associatedLayout": "Sailing", "lastChangeTimeStamp": 0, "name": "VoyageManager", "events": VOYAGE_EVENTS},
        {"associatedLayout": "Sailing", "lastChangeTimeStamp": 0, "name": "UIManager", "events": UI_EVENTS},
    ]
    with open(PROJECT, "w", encoding="utf-8") as f:
        json.dump(proj, f, indent=2)
    print("wrote", PROJECT)


if __name__ == "__main__":
    main()
