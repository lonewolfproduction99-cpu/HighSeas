# Development Status

## Phase 1 — Project Foundation: COMPLETE (awaiting approval)

### Completed
- Portrait project, 720×1280 reference, `scaleOuter` responsive scaling, portrait orientation.
- Scenes: **Port** (stub with Set Sail) and **Sailing**.
- Scrolling ocean (tiled water + faster foam parallax layer), eased speed, wrapped offsets.
- Player ship left-centre with time-based rocking/bobbing; size derived from screen height and art aspect.
- HUD: distance, unbanked gold, hull bar (green/yellow/red tint) + numbers, crew, food, cannonballs, cargo.
  Text refreshes 5×/s, not every frame.
- Voyage state machine (`Voyage.State` + `Voyage.StateTime`) with SAILING → RETURNING → PORT working.
- External events split: `VoyageManager`, `UIManager`.
- Placeholder art generator + asset manifest.

### Tested (actual results, 2026-11-13)
- `validate_project`: valid, 0 errors, 0 warnings.
- Headless runtime renders at 405×720 (16:9), 360×780 (19.5:9), 768×1024 (4:3): HUD and ship laid out correctly, no page errors.
- Interactive web build (375×812): Port → Set Sail → Sailing (distance increasing) → Return to Port → RETURNING → Port → Set Sail again (distance reset to 0). All passed.
- Not yet tested: opening in the GDevelop desktop editor (not installed here), real Android/iPhone devices, FPS profiling.

### Known issues / limitations
- GDevelop "Made with GDevelop" watermark shows for ~20 s at launch and is a clickable link; it was
  intercepting taps on the bottom buttons, so it was moved to top-left (it briefly covers the HUD's
  top-left). Removing it is a GDevelop account/licensing choice for you.
- Safe-area margins are fixed values (`Settings.SafeTop/SafeBottom` = 24 px), not read from the
  device. Real notch insets need a small JS read of CSS `env(safe-area-inset-*)` — proposed for Phase 8.
- Console shows one harmless 404 (favicon) and an empty-texture warning from the loading screen.
- Default font only; no audio.

## Next steps (Phase 2 — needs your approval)
Distance-driven encounter timer (8–15 s), merchant & pirate ship types, approach animation,
enemy info panel, Fight / Flee / Parley buttons, basic outcomes, reliable return to SAILING.
