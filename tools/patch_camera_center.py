"""Keep every layer camera centred on the layout, every frame.

The game resizes its resolution to the window (phone browser bars, rotation, a resized pane).
GDevelop doesn't move layer cameras when that happens, so the 3D camera stayed at the old
centre while the FX overlay (tools/proj3d.py assumes the camera at LayoutW/2, LayoutH/2) used
the new one: cannonballs and smoke were drawn hundreds of pixels away from the guns.
Run once (idempotent).
"""
from gdlib import act, load, save, walk, external

proj = load()
ui = external(proj, "UIManager")["events"]
done = 0
for e in walk(ui):
    acts = e.get("actions", [])
    for i, a in enumerate(acts):
        if a["type"]["value"] == "Scene3D::SetCameraZ" and a["parameters"][3] == '""':
            acts[:] = [x for x in acts if x["type"]["value"] not in ("SetCameraCenterX", "SetCameraCenterY")]
            i = acts.index(a)
            new = []
            for layer in ('""', '"FX"', '"HUD"'):
                new += [act("SetCameraCenterX", "", "=", "LayoutW / 2", layer, "0"),
                        act("SetCameraCenterY", "", "=", "LayoutH / 2", layer, "0")]
            acts[i:i] = new
            done += 1
            break
print("camera events patched:", done)
save(proj)
