# Development Status

## Phase 2 — Sailing and Encounters: COMPLETE (awaiting approval)

### Completed
- **Encounter timer**: a new ship every 8–15 s of sailing (`Config.EncounterMin/MaxDelay`). It only
  counts while SAILING with no other ship present, so encounters never overlap.
- **Data-driven, weighted encounter types** (global `EncounterTypes`): Merchant and Pirate. Each has
  faction, hostility, base stats, a gold range, a name list, a weight and a weight-per-tier. New types
  are added as data plus a matching `EnemyShip` animation, with no new events.
- **Difficulty tiers**: tier = 1 + distance / 5 nm. Enemy hull, crew, cannons and gold scale per tier,
  and pirates become more common the farther you sail.
- **Approach animation**: the enemy slides in from the right with an eased curve and turns in
  alongside. One reused `EnemyShip` instance (pooled, no create/delete).
- **Enemy info panel**: name, type, faction, danger estimate (Low / Even / High), hull, crew and
  cannons. Hostile captains show approximate numbers (`~`). A countdown shows when they act.
- **Fight / Flee / Parley** buttons, plus a decision timeout: pirates attack and merchants sail on.
- **Outcomes**
  - Fight: a quick stat roll that uses cannonballs (Phase 3 replaces it with real cannon combat).
    Victory sinks the enemy for gold; a loss means more hull damage and no plunder.
  - Flee: merchants always let you go. Against pirates the chance comes from relative speed
    (shown on the button). A failed escape costs hull and forces combat.
  - Parley: weighted outcomes. Merchants may pay for safe passage, wish you well, or refuse.
    Pirates may take tribute, honour the code, or attack.
- **Sinking**: hull 0 leads to the SUNK screen, then unbanked gold is lost and you return to Port.
  The next voyage starts repaired.
- Outcome panel with Continue; status banner messages; the Return to Port button only shows while
  sailing.
- Buttons only record `PendingAction`; the managers act on it the next frame. This keeps UI and
  logic apart and stops one tap triggering two buttons.

### Tested (actual results, 2026-11-13)
- `validate_project`: valid, 0 errors, 0 warnings.
- `npm run test:encounters`: **47/47 passed**. This is a headless phone-size (375×812) playtest of
  the real build. It taps real buttons and forces dice rolls to reach every outcome: merchant and
  pirate flee (success and fail), fight win and loss, all six parley outcomes, tribute with too little
  gold, both timeouts, running out of cannonballs, sinking to Port, a new voyage, a safe return, and a
  soak of 15 random encounters (none stuck, no page errors).
- Manual check in the browser pane: approach, info panel, Fight → Victory → Continue.
- Not yet tested: tablet-shaped layout of the new panels; real phones.

### Bugs found and fixed this phase
- GDevelop compiles fields of an undeclared structure variable to constant 0/"" with no warning. The
  for-each iterator `EncType` must declare every field that `EncounterTypes` entries have.
- The build's folder clear could fail while the preview server held files open (now retried).

### Known issues / limitations
- Fight is a placeholder roll; real cannon combat (projectiles, reload, damage numbers) is Phase 3.
- Parley is a single weighted outcome. Choosing trade, information, tribute or threats comes later.
- Gold is not banked on returning to port yet (Phase 5); it only shows during the voyage.
- Watermark, safe-area and font notes from Phase 1 still apply.

## Phase 1 — Project Foundation: COMPLETE
Portrait 720×1280 `scaleOuter` project; Port stub + Sailing scene; scrolling ocean; ship; HUD;
voyage state machine; placeholder art and manifest. Tested at 16:9, 19.5:9 and 4:3 plus an
interactive web build.

## Next steps (Phase 3 — needs your approval)
Automatic cannon combat: volleys on reload timers, cannonball projectiles, muzzle flash, splashes,
hit/miss by accuracy, damage numbers, hull bars for both ships, sinking, rewards. Then Grape and
Chain Shot with an in-combat ammo switch.
