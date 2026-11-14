# Development Status

## Phase 3 — Naval Combat (3D chase view): COMPLETE (awaiting approval)
Build: `site/phase-3/`. The 2D version of Phase 3 was replaced by this one. The 2.5D overhead
experiment is still at `site/test-3d-overhead/` for comparison.

### The look (3D chase camera, chosen 2026-11-14)
- Your sloop from `PiratesShips.blend` is exported with `tools/blender_export_ship.py`, run inside
  Blender. glTF can't carry the Blender materials, so the script rebuilds them:
  - the world-space box projection becomes a real UV map;
  - the Hue/Saturation/Value recolour is applied to a copy of `hull_dark_128.png`;
  - pixel ("Closest") filtering is kept.
  All parts are joined into one mesh, and the `.blend` is not modified. Re-run the script after
  changing the ship.
- `assets/models/ships/sloop.glb`: 22k triangles, 1.4 MB. A fight frame is about 24 draw calls and
  44k triangles.
- Camera behind and above your stern, with horizon fog: `Config.CamZ` 620, `CamPitch` 55°,
  `CamFov` 60°. Ships at `ShipScale` 1.85, `ShipXFrac` 0.33.
- Cannonballs, flashes, smoke, splashes, damage numbers and ship tags are on a 2D "FX" layer above
  the 3D scene, projected from 3D points (`tools/proj3d.py`). They shrink with distance and are
  never hidden by hulls.
- Build order from the 2D Phase 3 project:
  1. `tools/spike_3d_sloop.py`
  2. `tools/spike_3d_enemy.py`
  3. `tools/spike_3d_overhead.py`
  4. `tools/spike_3d_fx_overlay.py`
  5. `tools/setup_3d_chase.py`
  6. `tools/phase3_3d.py`

### 3D combat staging (`tools/phase3_3d.py`)
- Every ball leaves the tip of a real cannon. `blender_export_ship.py` writes the muzzle positions to
  `assets/models/ships/sloop.firepoints.json`. They come from your empties: `PlayerFirePoint*` (right
  side, the player's guns) and `OtherFirePoint*` (left side, the enemy's guns), 4 each. Re-export and
  run `tools/patch_fast_entrance.py` to pick up moved empties. When a ball launches, its gun's fire point is carried through the ship's current roll,
  pitch and heading. GDevelop turns a model around its 3D centre, about 4 m up because of the mast,
  so ignoring the roll is what made the first version's shots start in the wrong place.
- Balls fly a 3D arc. Hits strike the near hull side, vanish in a burst and apply hull/crew/sail
  damage. Misses either fall short between the ships or sail high past the bow or stern and splash.
- Firing heels a ship over (recoil roll), and hits make it shudder.
- A sunk enemy goes down bow-first while listing. Your ship does the same when hull reaches 0.
- The ship you catch up with comes down from just above the top of the screen in
  `Config.ApproachTime` (3.5 s) and slows into place alongside. Unless it's sunk, it then drifts back
  slowly at `Config.DriftSpeed` (120/s) and leaves through the bottom of the screen; a sinking ship drifts back as it goes down.
- The enemy name and hull bar float above its masthead, and your reload bar sits behind your stern.
  Both follow the ships and are kept on screen.

### Combat rules (unchanged from the 2D Phase 3)
- `CombatManager` external events. Both ships fire volleys on reload timers; a crew shortage slows
  reloading (`Config.CrewPerCannon`).
- Every ball's hit, hull damage, crew kills and sail damage are rolled by logic when it is fired.
  The projectile is only a visual: it applies its stored result when it lands, and only while the
  state is still COMBAT. Leaving COMBAT deletes balls in flight.
- Ammo (global `AmmoTypes`), switchable mid-combat:
  - **Round:** full hull damage.
  - **Grape:** 35% hull damage, but it kills crew.
  - **Chain:** 40% hull damage, cuts sails, which slows the enemy and raises your flee chance.
  One shared cannonball supply (starting 60), never negative; partial volleys when low; an
  out-of-ammo warning.
- Merchants fire round shot only; pirates also use some grape and chain.
- Outcomes: enemy sinks (gold), enemy surrenders when badly damaged or out of crew (gold), you sink
  (SUNK), you escape (speed × sail condition, 4 s cooldown after a failed try), or you surrender
  (lose half your unbanked gold).

### Tested (actual results, 2026-11-14)
- `npm test` (headless phone-size playtest of the real `site/phase-3` build): **65/65 passed**.
  The new checks: every launched ball is within 4.6 units of the real cannon mesh (the barrel's
  radius), and the enemy starts above the top edge, drifts in at 122/s, drifts out at 120/s and is
  gone after 9.6 s. The earlier results below still hold.
  - The original 55 combat checks, including a soak of 10 full real combats (no stuck states, peak
    31 spawned objects, none left over, no page errors).
  - 7 new 3D checks:
    - the enemy appears about 2,100 units ahead and ends exactly alongside;
    - balls start at deck height and fly on the FX layer;
    - misses land at water level;
    - a sunk enemy drops in 3D (z −26 → −191 in 0.8 s);
    - a ship that sails on is gone and the slot freed after 6.3 s.
- Screenshots checked for the approach, a volley, hits with spread-out damage numbers, and the
  sinking enemy.
- Not tested on a real phone yet.

### Known issues / limitations
- The enemy is your sloop again until enemy ship models exist.
- The GDevelop watermark overlaps the top HUD for the first seconds.
- If your crew reaches 0 your guns go silent with no message. The crew system is Phase 4.
- Boarding is not offered yet (Phase 4 hook in CombatManager). Merchants never run mid-fight.
- If phones struggle: a lower-poly enemy ship and Draco compression of the `.glb`.

## Phase 2 — Sailing and Encounters: COMPLETE

### Completed
- **Encounter timer**: a new ship after a random 5–15 s of sailing (was 8–15) (`Config.EncounterMin/MaxDelay`). It only
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

## Next steps (Phase 4 — needs your approval)
Boarding and crew: board a weakened or surrendered enemy, crew fights, crew loss messages, and
hiring/recovery hooks for the port.
