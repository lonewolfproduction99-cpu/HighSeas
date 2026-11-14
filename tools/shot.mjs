// Screenshot helper: node tools/shot.mjs <phase> <out.png> [sail] [encounter] [waitMs] [var=value ...]
// Opens the build at phone size; optionally taps Set Sail, forces an encounter,
// overrides variables (e.g. Config.CamPitch=50), then saves a screenshot.
import { openGame } from "./testkit.mjs";

const [phase, out, ...rest] = process.argv.slice(2);
const flags = new Set(rest.filter((r) => !r.includes("=") && isNaN(r)));
const wait = Number(rest.find((r) => !isNaN(r)) || 2500);
const g = await openGame(phase);
await g.sleep(1500);
if (flags.has("sail") || flags.has("encounter")) {
  await g.tap("SetSailButton");
  await g.waitState("SAILING");
}
for (const kv of rest.filter((r) => r.includes("="))) {
  const [k, v] = kv.split("=");
  await g.SET(k, Number(v));
}
if (rest.some((r) => r.includes("="))) await g.SET("LayoutW", -1);  // force relayout
if (flags.has("encounter") || flags.has("fight")) {
  if (!flags.has("encounter")) { await g.tap("SetSailButton"); await g.waitState("SAILING"); }
  await g.SET("Voyage.NextEncounterIn", 0);
  await g.waitState("ENCOUNTER_DECISION", 8000);
}
if (flags.has("fight")) {
  await g.sleep(300);
  await g.tap("FightButton");
  await g.waitState("COMBAT", 3000);
  await g.force(0.99);  // every shot hits, so impacts are on screen
}
await g.sleep(wait);
await g.page.screenshot({ path: out });
console.log("saved", out, g.errors.length ? "ERRORS: " + g.errors.join(" | ") : "no page errors");
process.exit(0);
