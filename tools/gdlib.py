"""Small helpers for writing GDevelop project JSON (events, objects, variables).

Used by the phase patch scripts in tools/. Each patch loads HighSeas.json,
adds or replaces only its own pieces, and saves. Existing work is preserved.
"""
import json
import os
import uuid

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
PROJECT = os.path.join(ROOT, "HighSeas.json")


def load():
    with open(PROJECT, encoding="utf-8") as f:
        return json.load(f)


def save(proj):
    with open(PROJECT, "w", encoding="utf-8") as f:
        json.dump(proj, f, indent=2)


# ---------------------------------------------------------------- events
def s(text):
    """GDevelop string literal."""
    return '"' + text.replace('"', '\\"') + '"'


def cond(type_, *params, inverted=False):
    return {"type": {"inverted": inverted, "value": type_}, "parameters": list(params)}


def act(type_, *params):
    return {"type": {"value": type_}, "parameters": list(params)}


def ev(conditions=None, actions=None, events=None):
    return {"type": "BuiltinCommonInstructions::Standard",
            "conditions": conditions or [], "actions": actions or [], "events": events or []}


def comment(text):
    return {"type": "BuiltinCommonInstructions::Comment",
            "color": {"b": 109, "g": 230, "r": 255, "textB": 0, "textG": 0, "textR": 0},
            "comment": text, "comment2": ""}


def group(name, events, color=(74, 176, 228)):
    return {"type": "BuiltinCommonInstructions::Group", "name": name, "source": "",
            "creationTime": 0, "colorR": color[0], "colorG": color[1], "colorB": color[2],
            "folded": False, "events": events}


def link(target):
    return {"type": "BuiltinCommonInstructions::Link", "disabled": False, "folded": False,
            "include": {"includeConfig": 0}, "target": target}


def setnum(var, value, op="="):
    return act("SetNumberVariable", var, op, str(value))


def setstr(var, expr, op="="):
    return act("SetStringVariable", var, op, expr)


def numcmp(var, op, value):
    return cond("NumberVariable", var, op, str(value))


def strcmp(var, value, op="="):
    return cond("StringVariable", var, op, s(value))


def expcmp(a, op, b):
    return cond("BuiltinCommonInstructions::CompareNumbers", str(a), op, str(b))


def once():
    return cond("BuiltinCommonInstructions::Once")


def set_text(obj, expr):
    return act("TextObject::String", obj, "=", expr)


def set_xy(obj, x, y):
    return act("SetXY", obj, "=", str(x), "=", str(y))


def size(obj, w, h):
    return act("SetSize", obj, str(w), str(h))


def show(obj):
    return act("Show", obj, "")


def hide(obj):
    return act("Hide", obj)


def tapped(obj):
    """Touch/click released over an object (touch is mapped to mouse by default)."""
    return [cond("MouseButtonReleased", "", "Left"), cond("SourisSurObjet", obj, "", "", "")]


def change_state(state):
    """The only sanctioned way to switch the voyage state machine."""
    return [setstr("Voyage.State", s(state)), setnum("Voyage.StateTime", 0)]


# ---------------------------------------------------------------- variables
def var(name, value):
    if isinstance(value, dict):
        return {"name": name, "type": "structure",
                "children": [var(k, v) for k, v in value.items()]}
    if isinstance(value, list):
        return {"name": name, "type": "array",
                "children": [{k: v for k, v in var("", x).items() if k != "name"} for x in value]}
    if isinstance(value, bool):
        return {"name": name, "type": "boolean", "value": value}
    if isinstance(value, (int, float)):
        return {"name": name, "type": "number", "value": value}
    return {"name": name, "type": "string", "value": value}


def upsert(lst, item, key="name"):
    """Replace an item with the same name, or append it."""
    for i, old in enumerate(lst):
        if old.get(key) == item[key]:
            lst[i] = item
            return item
    lst.append(item)
    return item


# ---------------------------------------------------------------- objects
def image(proj, name, rel_path):
    upsert(proj["resources"]["resources"],
           {"file": rel_path, "kind": "image", "metadata": "", "name": name,
            "smoothed": True, "userAdded": True})
    return name


def _frame(res):
    return {"hasCustomCollisionMask": False, "image": res, "points": [],
            "originPoint": {"name": "origine", "x": 0, "y": 0},
            "centerPoint": {"automatic": True, "name": "centre", "x": 0, "y": 0},
            "customCollisionMask": []}


def sprite_obj(name, res=None, animations=None):
    """animations: {"AnimName": "resource"}; or a single res for one 'Default' animation."""
    animations = animations or {"Default": res}
    return {"adaptCollisionMaskAutomatically": True, "updateIfNotVisible": False,
            "name": name, "type": "Sprite", "variables": [], "effects": [],
            "behaviors": [], "tags": "",
            "animations": [{"name": a, "useMultipleDirections": False,
                            "directions": [{"looping": False, "timeBetweenFrames": 0.08,
                                            "sprites": [_frame(r)]}]}
                           for a, r in animations.items()]}


def text_obj(name, text, size_=28, color="255;255;255", bold=True, align="left"):
    return {"name": name, "type": "TextObject::Text", "variables": [], "effects": [],
            "behaviors": [], "tags": "",
            "content": {"bold": bold, "italic": False, "smoothed": True, "underlined": False,
                        "text": text, "font": "", "characterSize": size_, "color": color,
                        "textAlignment": align, "verticalTextAlignment": "top",
                        "isOutlineEnabled": True, "outlineThickness": 3,
                        "outlineColor": "10;14;24", "isShadowEnabled": False,
                        "shadowColor": "0;0;0", "shadowOpacity": 127, "shadowDistance": 4,
                        "shadowAngle": 90, "shadowBlurRadius": 2}}


def instance(obj, x=0, y=0, layer="", z=1):
    return {"angle": 0, "customSize": False, "height": 0, "width": 0, "layer": layer,
            "locked": False, "name": obj, "persistentUuid": str(uuid.uuid4()), "x": x, "y": y,
            "zOrder": z, "numberProperties": [], "stringProperties": [], "initialVariables": []}


def scene(proj, name):
    return next(l for l in proj["layouts"] if l["name"] == name)


def external(proj, name):
    return next((e for e in proj["externalEvents"] if e["name"] == name), None)


def find_group(events, name):
    for e in events:
        if e.get("type") == "BuiltinCommonInstructions::Group" and e.get("name") == name:
            return e
    raise KeyError(name)
