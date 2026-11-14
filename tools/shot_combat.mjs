// Screenshot a fight in progress: node tools/shot_combat.mjs [out.png]
import { openGame } from "./testkit.mjs";

const g = await openGame("3");
const { sleep, waitState, tap, spawn } = g;
await sleep(1500);
await tap("SetSailButton");
await waitState("SAILING");
await spawn("Pirate");
await tap("FightButton");
await waitState("COMBAT", 3000);
await sleep(1400);
await g.page.screenshot({ path: process.argv[2] || "combat.png" });
await g.browser?.close?.();
process.exit(0);
