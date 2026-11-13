"""Generate PLACEHOLDER art for High Seas (Phase 1).

Every file written here is a temporary stand-in. Final art (ships, buildings)
will come from Blender renders. Replace the PNG at the same path, or point the
GDevelop resource at a new file -- object names and layout code do not depend
on these pixel dimensions.

Run:  python tools/make_placeholders.py
"""
import math
import os
import random

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.join(os.path.dirname(__file__), "..", "assets", "placeholders")


def out(*parts):
    path = os.path.join(ROOT, *parts)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    return path


def font(size):
    for name in ("arialbd.ttf", "arial.ttf", "DejaVuSans-Bold.ttf"):
        try:
            return ImageFont.truetype(name, size)
        except OSError:
            pass
    return ImageFont.load_default()


# ---------------------------------------------------------------- ocean
def ocean_tile():
    """256x256 seamless deep-water tile with wave ripples."""
    S = 256
    img = Image.new("RGBA", (S, S), (24, 92, 140, 255))
    px = img.load()
    for y in range(S):
        for x in range(S):
            v = (math.sin(2 * math.pi * (x / S * 2 + y / S)) +
                 math.sin(2 * math.pi * (y / S * 3 - x / S))) * 6
            r, g, b, a = px[x, y]
            px[x, y] = (int(r + v), int(g + v * 1.2), int(b + v * 1.4), 255)
    d = ImageDraw.Draw(img)
    rnd = random.Random(7)
    for _ in range(26):
        cx, cy = rnd.randrange(S), rnd.randrange(S)
        w = rnd.randrange(18, 40)
        for ox in (-S, 0, S):  # draw wrapped copies so the tile is seamless
            for oy in (-S, 0, S):
                d.arc([cx + ox - w, cy + oy - 6, cx + ox + w, cy + oy + 6],
                      200, 340, fill=(90, 170, 210, 255), width=2)
    img.save(out("ocean", "ocean_tile.png"))


def foam_tile():
    """256x512 seamless, mostly transparent foam streaks (parallax layer)."""
    W, H = 256, 512
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    rnd = random.Random(11)
    for _ in range(14):
        cx, cy = rnd.randrange(W), rnd.randrange(H)
        w = rnd.randrange(10, 26)
        for ox in (-W, 0, W):
            for oy in (-H, 0, H):
                d.arc([cx + ox - w, cy + oy - 4, cx + ox + w, cy + oy + 4],
                      190, 350, fill=(230, 245, 255, 150), width=2)
    img.save(out("ocean", "foam_tile.png"))


# ---------------------------------------------------------------- ship
def player_ship():
    """Top-down sloop, bow pointing up. 120x260 incl. transparent margin."""
    W, H = 120, 260
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    hull = [(60, 6), (92, 60), (98, 150), (90, 220), (72, 252),
            (48, 252), (30, 220), (22, 150), (28, 60)]
    d.polygon(hull, fill=(120, 72, 38, 255), outline=(60, 34, 16, 255))
    deck = [(60, 22), (84, 66), (88, 150), (82, 214), (68, 240),
            (52, 240), (38, 214), (32, 150), (36, 66)]
    d.polygon(deck, fill=(176, 128, 78, 255))
    for y in range(40, 240, 12):  # planks
        d.line([(34, y), (86, y)], fill=(150, 104, 60, 255), width=1)
    for cy in (90, 130, 170):  # cannons (2 per side)
        d.rectangle([14, cy, 26, cy + 8], fill=(40, 40, 44, 255))
        d.rectangle([94, cy, 106, cy + 8], fill=(40, 40, 44, 255))
    # sails seen from above (cream ellipses + mast dots)
    d.ellipse([20, 70, 100, 110], fill=(236, 226, 196, 235), outline=(150, 140, 110, 255))
    d.ellipse([16, 140, 104, 186], fill=(236, 226, 196, 235), outline=(150, 140, 110, 255))
    for cy in (90, 163):
        d.ellipse([55, cy - 5, 65, cy + 5], fill=(80, 50, 25, 255))
    d.polygon([(60, 30), (70, 50), (50, 50)], fill=(30, 30, 30, 255))  # flag/bow mark
    d.text((60, 214), "PH", font=font(16), fill=(255, 60, 60, 255), anchor="mm")
    img.save(out("ships", "ship_player_sloop_PH.png"))


def enemy_ship(filename, hull_col, deck_col, sail_col, sail_outline, flag_col, beam=0):
    """Generic top-down enemy ship, bow up. beam widens the hull (merchants are tubby)."""
    W, H = 130 + beam * 2, 270
    cx = W // 2
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    b = 36 + beam
    hull = [(cx, 6), (cx + b - 4, 62), (cx + b, 150), (cx + b - 8, 222), (cx + 12, 262),
            (cx - 12, 262), (cx - b + 8, 222), (cx - b, 150), (cx - b + 4, 62)]
    d.polygon(hull, fill=hull_col, outline=(30, 20, 10, 255))
    i = b - 10
    deck = [(cx, 24), (cx + i - 2, 68), (cx + i, 150), (cx + i - 6, 214), (cx + 8, 248),
            (cx - 8, 248), (cx - i + 6, 214), (cx - i, 150), (cx - i + 2, 68)]
    d.polygon(deck, fill=deck_col)
    for y in range(44, 246, 12):
        d.line([(cx - i + 4, y), (cx + i - 4, y)], fill=tuple(max(0, c - 25) for c in deck_col[:3]) + (255,))
    for cy in (90, 130, 170, 205):
        d.rectangle([cx - b - 8, cy, cx - b + 4, cy + 8], fill=(40, 40, 44, 255))
        d.rectangle([cx + b - 4, cy, cx + b + 8, cy + 8], fill=(40, 40, 44, 255))
    for top, h in ((72, 40), (142, 48)):
        d.ellipse([cx - b - 6, top, cx + b + 6, top + h], fill=sail_col, outline=sail_outline)
        d.ellipse([cx - 5, top + h // 2 - 5, cx + 5, top + h // 2 + 5], fill=(70, 45, 25, 255))
    d.rectangle([cx - 12, 30, cx + 12, 46], fill=flag_col)
    d.text((cx, 228), "PH", font=font(16), fill=(255, 60, 60, 255), anchor="mm")
    img.save(out("ships", filename))


def enemy_ships():
    enemy_ship("ship_enemy_merchant_PH.png", (150, 110, 70, 255), (196, 160, 110, 255),
               (245, 240, 225, 235), (160, 150, 130, 255), (40, 90, 170, 255), beam=8)
    enemy_ship("ship_enemy_pirate_PH.png", (60, 40, 32, 255), (110, 80, 56, 255),
               (40, 40, 44, 235), (10, 10, 10, 255), (20, 20, 20, 255))


# ---------------------------------------------------------------- ui
def rounded_panel(name, size, fill, outline):
    w, h = size
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([1, 1, w - 2, h - 2], radius=18, fill=fill,
                        outline=outline, width=3)
    img.save(out("ui", name))


def solid(name, size, color):
    Image.new("RGBA", size, color).save(out("ui", name))


def icon(name, draw_fn):
    S = 48
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    draw_fn(ImageDraw.Draw(img), S)
    img.save(out("ui", "icons", name))


def icons():
    icon("icon_gold.png", lambda d, S: (
        d.ellipse([6, 6, 42, 42], fill=(240, 196, 60, 255), outline=(150, 110, 20, 255), width=3),
        d.text((24, 24), "$", font=font(22), fill=(150, 110, 20, 255), anchor="mm")))
    icon("icon_hull.png", lambda d, S: (
        d.polygon([(24, 4), (42, 12), (40, 30), (24, 44), (8, 30), (6, 12)],
                  fill=(200, 200, 210, 255), outline=(80, 80, 90, 255))))
    icon("icon_crew.png", lambda d, S: (
        d.ellipse([16, 4, 32, 20], fill=(240, 205, 170, 255)),
        d.rounded_rectangle([10, 22, 38, 44], radius=8, fill=(180, 50, 50, 255))))
    icon("icon_food.png", lambda d, S: (
        d.ellipse([8, 14, 40, 42], fill=(200, 60, 50, 255)),
        d.line([(24, 14), (28, 4)], fill=(90, 60, 20, 255), width=3)))
    icon("icon_shot.png", lambda d, S: (
        d.ellipse([10, 10, 38, 38], fill=(50, 50, 55, 255)),
        d.ellipse([16, 14, 24, 22], fill=(130, 130, 140, 255))))
    icon("icon_cargo.png", lambda d, S: (
        d.rectangle([8, 10, 40, 40], fill=(150, 100, 50, 255), outline=(80, 50, 20, 255), width=3),
        d.line([(8, 25), (40, 25)], fill=(80, 50, 20, 255), width=3)))
    icon("icon_distance.png", lambda d, S: (
        d.ellipse([4, 4, 44, 44], outline=(230, 220, 190, 255), width=3),
        d.polygon([(24, 8), (30, 24), (24, 40), (18, 24)], fill=(220, 70, 60, 255))))


def ui():
    # Drawn at their on-screen size so corners are not distorted by stretching.
    rounded_panel("hud_panel.png", (688, 184), (20, 28, 40, 200), (200, 170, 110, 255))
    rounded_panel("button_wood.png", (360, 110), (130, 82, 40, 255), (230, 190, 120, 255))
    rounded_panel("button_small.png", (216, 96), (235, 235, 235, 255), (255, 255, 255, 255))  # tinted by events
    rounded_panel("panel_enemy.png", (688, 210), (40, 22, 22, 215), (200, 170, 110, 255))
    rounded_panel("panel_result.png", (620, 420), (20, 28, 40, 235), (230, 190, 120, 255))
    solid("bar_bg.png", (16, 16), (40, 20, 20, 255))
    solid("bar_fill.png", (16, 16), (255, 255, 255, 255))  # white; tinted by events
    icons()


def port_bg():
    """Very rough harbor backdrop for the Port stub scene."""
    W, H = 360, 640
    img = Image.new("RGBA", (W, H), (120, 180, 220, 255))
    d = ImageDraw.Draw(img)
    d.rectangle([0, 260, W, H], fill=(30, 100, 150, 255))
    d.rectangle([0, 200, W, 270], fill=(194, 170, 120, 255))
    for i, x in enumerate((20, 130, 240)):
        d.rectangle([x, 120, x + 90, 210], fill=(150 + i * 20, 90, 60, 255))
        d.polygon([(x - 6, 120), (x + 45, 80), (x + 96, 120)], fill=(90, 50, 40, 255))
    d.rectangle([150, 270, 210, 520], fill=(110, 76, 44, 255))  # pier
    d.text((W - 8, H - 8), "PH", font=font(14), fill=(255, 80, 80, 255), anchor="rb")
    img.save(out("port", "port_bg_PH.png"))


if __name__ == "__main__":
    ocean_tile()
    foam_tile()
    player_ship()
    enemy_ships()
    ui()
    port_bg()
    print("placeholders written to", os.path.abspath(ROOT))
