# High Seas (working title)

Mobile-portrait pirate roguelite built in **GDevelop 5** (project format 5.6).

## Open the project
1. Install the GDevelop desktop app (no local install was detected on this machine).
2. File → Open → `HighSeas.json`.
3. Preview the **Port** scene (first scene). In the preview window use a phone-shaped size, or
   the editor's preview with a mobile window.

## Preview & test each phase
One-time setup: install [Node.js](https://nodejs.org) (already on this PC), then run `npm install` in this folder.

| Want to… | Do this |
|---|---|
| Build the current project as a phase | `npm run build -- <phase> "<short note>"`, e.g. `npm run build -- 2 "Encounters"`. This writes `site/phase-<N>/` and updates `site/index.html` |
| Play it on this PC | `npm run serve`, then open http://localhost:8765/ |
| Play it on your phone (same Wi-Fi) | `npm run serve`, then open the "On your phone" address it prints |
| Play it on your phone anywhere | Commit and push to GitHub. The Pages workflow publishes `site/` to `https://<user>.github.io/<repo>/` |

| Run the automated playtests | `npm test` (Phase 3 combat + 3D staging, 62 checks) or `npm run test:encounters` (Phase 2). Headless Chrome/Edge taps real buttons through every outcome |
| Screenshot a build | `node tools/shot.mjs 3 out.png fight` |

Every phase keeps its own build, so older phases stay playable for comparison.
On a phone, use **Add to Home Screen** to play full screen.

## Layout
```
HighSeas.json                 GDevelop project (single-file JSON)
assets/placeholders/...       Temporary art (see assets/ASSET_MANIFEST.md)
assets/ASSET_MANIFEST.md      Asset / license tracking
tools/make_placeholders.py    Regenerates placeholder PNGs
tools/bootstrap_phase1.py     One-time generator used to create the Phase 1 project
tools/gdlib.py                Helpers for writing GDevelop events/objects from patch scripts
tools/phase2_encounters.py    One-time patch that added Phase 2 (refuses to run twice)
tools/test_phase2.mjs         Automated headless playtest of the encounter loop
tools/phase3_combat.py        One-time patch that added Phase 3 combat rules (CombatManager)
tools/spike_3d_*.py, setup_3d_chase.py, phase3_3d.py
                              3D chase view + 3D combat staging (order in docs/STATUS.md)
tools/proj3d.py               3D -> screen projection expressions for the FX overlay layer
tools/blender_export_ship.py  Run inside Blender: exports a ship .glb that looks like it does in Blender
tools/test_phase3.mjs, testkit.mjs, shot.mjs   Combat playtest, shared harness, screenshots
assets/models/ships/          3D ship models (.glb) exported from Blender
docs/STATUS.md                Completed features, known issues, next steps
tools/build_web.mjs           npm run build: exports a phase build into site/
tools/serve.mjs               npm run serve: serves site/ on this PC + local network
site/                         Published phase builds (GitHub Pages)
.github/workflows/pages.yml   Deploys site/ to GitHub Pages on push to main
```

## Architecture (GDevelop)
| Logical manager | Implementation |
|---|---|
| VoyageManager | External events `VoyageManager` (linked from Sailing): state machine, distance, ocean scroll |
| EncounterManager | External events `EncounterManager` (linked from Sailing): spawn timer, weighted type pick, approach, decisions, outcomes |
| UIManager | External events `UIManager` (linked from Sailing): responsive layout, HUD refresh, HUD buttons |
| PortManager | Port scene events (stub) |
| Encounter/Combat/Boarding/Ship/Crew/Economy/Progression/Save managers | Added in later phases as further external events / extension functions |

**Global variables** (persist across scenes, future save-file source):
`Config` (tuning + `SaveVersion`), `Settings` (safe-area margins), `Player` (banked gold,
selected ship), `Ships.Sloop` (base stats), `StartSupplies`, `Voyage` (current-run values and
`Voyage.State`).

**Voyage state machine** — `Voyage.State` holds exactly one of
`PORT, SAILING, ENCOUNTER_APPROACH, ENCOUNTER_DECISION, COMBAT, BOARDING, PARLEY, TRADE, EVENT,
REWARDS, RETURNING, SUNK`. Change state only by setting `Voyage.State` and zeroing
`Voyage.StateTime`. Phase 1 implements PORT, SAILING, RETURNING.

**Screen scaling** — reference 720×1280, resize mode `scaleOuter`: the reference area is always
visible; taller phones gain height, tablets gain width (content column stays 720 wide, centred).
Layout is recomputed only when the window size changes. `Settings.SafeTop/SafeBottom` reserve
notch / home-indicator space.

All movement and timers use `TimeDelta()` (frame-rate independent). No JavaScript is used.

## Phase 1 test procedure
1. Launch → Port scene shows title, banked gold 100, docked ship, **Set Sail**.
2. Tap Set Sail → Sailing scene: ship left-centre, rocking; ocean + foam scroll downward; HUD shows
   distance (rising ~0.12 nm/s), gold 0, hull 100/100 (green bar), crew 12/16, food 30, shot 40,
   cargo 0/20, `State: SAILING`.
3. Tap **Return to Port** → state `RETURNING`, button hides, ocean slows to a stop, Port opens after 1.5 s.
4. Set Sail again → distance restarts from 0.
5. Resize the window / try phone and tablet shapes → HUD and ship re-layout with no overlap.
