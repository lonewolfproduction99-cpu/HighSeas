"""GDevelop expression builders: project a 3D world point (x, y, h) to the 2D overlay layer.

The base-layer camera sits at (LayoutW/2, LayoutH/2, Config.CamZ), pitched Config.CamPitch
degrees toward -y, with vertical field of view Config.CamFov. Scene variable CamF must hold
(LayoutH / 2) / tan(fov / 2) and RefDepth the camera depth of the player ship (both set at the
top of CombatManager each frame).
    depth  = -(y - cy) sin(p) - (h - Z) cos(p)
    up     = -(y - cy) cos(p) + (h - Z) sin(p)
    screen = (cx + (x - cx) F / depth,  cy - up F / depth)
"""
P = "ToRad(Config.CamPitch)"


def depth(y, h):
    return f"(-(({y}) - LayoutH / 2) * sin({P}) - (({h}) - Config.CamZ) * cos({P}))"


def px(x, y, h):
    return f"(LayoutW / 2 + (({x}) - LayoutW / 2) * CamF / {depth(y, h)})"


def py(y, h):
    up = f"(-(({y}) - LayoutH / 2) * cos({P}) + (({h}) - Config.CamZ) * sin({P}))"
    return f"(LayoutH / 2 - {up} * CamF / {depth(y, h)})"


def persp(y, h):
    """Size factor: 1 at the player ship's distance, smaller further away."""
    return f"(RefDepth / max(1, {depth(y, h)}))"
