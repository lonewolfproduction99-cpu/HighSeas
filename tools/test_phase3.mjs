// Automated playtest of Phase 3 naval combat (plus Phase 2 regressions).
//   npm test            (tests the newest build: site/phase-3)
import { openGame } from "./testkit.mjs";

const g = await openGame(process.argv[2] || "3");
const { V, SET, force, unforce, sleep, waitFor, waitState, tap, check, spawn, continueOn, count } = g;

await sleep(1500);
await tap("SetSailButton");
check("Set Sail opens the voyage", await waitState("SAILING"));
await sleep(400);
check("voyage starts with 60 cannonballs and Round shot",
  (await V("Voyage.Cannonballs")) === 60 && (await V("Voyage.Ammo")) === "Round");

// ---- 1. Real combat: volleys fire, balls fly, damage lands on both ships
await spawn("Pirate");
check("danger estimate computed", ["Low", "Even", "High"].includes(await V("Enemy.Danger")), await V("Enemy.Danger"));
const shot0 = await V("Voyage.Cannonballs"), eHull0 = await V("Enemy.Hull");
await tap("FightButton");
check("Fight -> COMBAT", await waitState("COMBAT", 3000));
check("player fires a volley (4 cannonballs used)", await waitFor(async () => (await V("Voyage.Cannonballs")) === shot0 - 4, 3000));
check("cannonball projectiles in flight", await waitFor(async () => (await count("CannonBall")) > 0, 2000));
check("effects spawned (flash/smoke)", (await count("Fx")) > 0);
await force(0.99);  // every ball hits from here
check("enemy hull drops from hits", await waitFor(async () => (await V("Enemy.Hull")) < eHull0, 5000));
check("damage numbers appear", await waitFor(async () => (await count("DamageText")) > 0, 3000));
const pHull0 = await V("Voyage.Hull");
check("enemy fires back and hits", await waitFor(async () => (await V("Voyage.Hull")) < pHull0, 6000));
await unforce();

// ---- 2. Victory by sinking: reward once, firing stops, projectiles cleared
await SET("Enemy.SurrenderChance", 0);
await SET("Enemy.Hull", 3);
await force(0.99);
const gold0 = await V("Voyage.Gold"), prize = await V("Enemy.Gold");
check("enemy sunk -> Victory", (await waitState("REWARDS", 8000)) && (await V("Result.Title")) === "Victory!");
await unforce();
check("victory gold added once", (await V("Voyage.Gold")) === gold0 + prize, `${gold0} + ${prize}`);
check("enemy hull never negative", (await V("Enemy.Hull")) >= 0);
const shotAfter = await V("Voyage.Cannonballs");
await sleep(3500);
check("firing stops after combat", (await V("Voyage.Cannonballs")) === shotAfter);
check("no cannonballs left in flight", (await count("CannonBall")) === 0);
check("gold unchanged while result shows", (await V("Voyage.Gold")) === gold0 + prize);
await continueOn();
check("effects cleaned up", (await count("Fx")) === 0 && (await count("DamageText")) === 0);

// ---- 3. Grape kills crew, Chain cuts sails; switching affects next volley
await spawn("Pirate");
await tap("FightButton");
await waitState("COMBAT", 3000);
await SET("Enemy.SurrenderChance", 0);
await sleep(300);
await tap("AmmoGrapeButton");
check("ammo switch to Grape", await waitFor(async () => (await V("Voyage.Ammo")) === "Grape", 2000));
let crew0 = await V("Enemy.Crew"), hullG = await V("Enemy.Hull");
await force(0.99);
check("grape shot kills enemy crew", await waitFor(async () => (await V("Enemy.Crew")) < crew0, 8000), `${crew0} -> ${await V("Enemy.Crew")}`);
check("grape does reduced hull damage", (hullG - (await V("Enemy.Hull"))) <= 4 * 3, `-${hullG - (await V("Enemy.Hull"))}`);
await unforce();
await tap("AmmoChainButton");
check("ammo switch to Chain", await waitFor(async () => (await V("Voyage.Ammo")) === "Chain", 2000));
await force(0.99);
check("chain shot cuts enemy sails", await waitFor(async () => (await V("Enemy.Sails")) < 100, 8000), `${await V("Enemy.Sails")}%`);
await unforce();
// FleeChance is recomputed by EncounterManager on the frame after the sails are hit
await waitFor(async () => (await V("FleeChance")) > 0.5, 1000);
const fleeBefore = await V("FleeChance");
check("damaged sails improve flee chance", fleeBefore > 0.5, `${Math.round(fleeBefore * 100)}%`);

// ---- 4. Flee during combat: fail (cooldown), then succeed
await force(0.99);
await tap("CombatFleeButton");
await sleep(400);
await unforce();
check("failed escape stays in combat with cooldown",
  (await V("Voyage.State")) === "COMBAT" && (await V("FleeCooldown")) > 0);
await waitFor(async () => (await V("FleeCooldown")) <= 0, 6000);
await force(0.01);
await tap("CombatFleeButton");
check("successful escape -> sailing", await waitState("SAILING", 3000));
await unforce();
check("enemy left behind", (await V("Enemy.Departing")) === "behind");
await sleep(500);
check("no cannonballs after escape", (await count("CannonBall")) === 0);
await waitFor(async () => (await V("Enemy.Active")) === 0, 8000);

// ---- 5. Out of ammunition, then surrender
// (forced 0.99 rolls above also make every enemy hit kill a sailor; restore crew + hull)
await SET("Voyage.Crew", 12);
await SET("Voyage.Hull", 100);
await SET("Voyage.Cannonballs", 3);
await SET("Voyage.Gold", 80);
await spawn("Pirate");
await tap("FightButton");
check("fight with 3 balls -> COMBAT", await waitState("COMBAT", 3000),
  `${await V("Voyage.State")} pending=${await V("PendingAction")} ammo=${await V("Voyage.Ammo")} crew=${await V("Voyage.Crew")}`);
await SET("Enemy.SurrenderChance", 0);
check("partial volley uses the last 3 balls", await waitFor(async () => (await V("Voyage.Cannonballs")) === 0, 3000),
  `balls=${await V("Voyage.Cannonballs")} reload=${(await V("Voyage.ReloadLeft")).toFixed(2)} state=${await V("Voyage.State")}`);
await sleep(3500);
check("cannonballs never negative", (await V("Voyage.Cannonballs")) === 0);
check("out-of-ammo warning shown", (await V("OutOfAmmoWarned")) === 1);
await tap("SurrenderButton");
check("surrender -> outcome", (await waitState("REWARDS", 3000)) && (await V("Result.Title")) === "You strike your colours");
check("surrender costs half the unbanked gold", (await V("Voyage.Gold")) === 40);
await continueOn();
await SET("Voyage.Cannonballs", 60);

// ---- 6. Enemy surrenders when beaten
await spawn("Merchant");
await tap("FightButton");
await waitState("COMBAT", 3000);
await SET("Enemy.Hull", Math.floor((await V("Enemy.MaxHull")) * 0.2));
await SET("Enemy.SurrenderChance", 1);
await SET("Enemy.ReloadLeft", 0);
check("weakened enemy surrenders", (await waitState("REWARDS", 4000)) && (await V("Result.Title")) === "They surrender!");
await continueOn();

// ---- 7. Enemy crew wiped out -> surrender
await spawn("Pirate");
await tap("FightButton");
await waitState("COMBAT", 3000);
await SET("Enemy.Crew", 0);
check("enemy with no crew surrenders", (await waitState("REWARDS", 4000)) && (await V("Result.Title")) === "They surrender!");
await continueOn();

// ---- 8. Player sinks in real combat
await SET("Voyage.Gold", 50);
await spawn("Pirate");
await tap("FightButton");
await waitState("COMBAT", 3000);
await SET("Enemy.SurrenderChance", 0);
await SET("Voyage.Hull", 2);
await force(0.99);
check("player sinks from enemy fire", await waitState("SUNK", 8000));
await unforce();
check("hull clamped at 0", (await V("Voyage.Hull")) === 0);
await sleep(500);
check("no cannonballs after sinking", (await count("CannonBall")) === 0);
await tap("ContinueButton");
await sleep(1500);
check("sunk -> Port, unbanked gold lost", (await g.sceneName()) === "Port" && (await V("Voyage.Gold")) === 0);

// ---- 9. Phase 2 regressions
await tap("SetSailButton");
await waitState("SAILING");
await spawn("Merchant");
await tap("FleeButton");
check("merchant flee still works", await waitState("SAILING", 3000));
await waitFor(async () => (await V("Enemy.Active")) === 0, 8000);
await spawn("Merchant");
await tap("ParleyButton");
await waitState("PARLEY", 3000);
await force(0.1);
check("merchant parley still works", (await waitState("REWARDS", 4000)) && (await V("Result.Title")) === "Safe passage");
await unforce();
await continueOn();
await spawn("Pirate");
check("pirate timeout still attacks", await waitState("COMBAT", 13000));
await SET("Enemy.Hull", 0);
await waitState("REWARDS", 3000);
await continueOn();

// ---- 10. Soak: 10 full real combats, random ammo; no leaks, nothing stuck
let stuck = 0, maxObjects = 0;
for (let i = 0; i < 10; i++) {
  if ((await g.sceneName()) === "Port") { await sleep(400); await tap("SetSailButton"); await waitState("SAILING"); }
  await SET("Voyage.Hull", 100); await SET("Voyage.Cannonballs", 60); await SET("Voyage.Crew", 12);
  await waitFor(async () => (await V("Enemy.Active")) === 0 && (await V("Voyage.State")) === "SAILING", 15000);
  await SET("Voyage.NextEncounterIn", 0);
  if (!(await waitState("ENCOUNTER_DECISION", 6000))) { stuck++; continue; }
  await sleep(300);
  await tap("FightButton");
  await waitState("COMBAT", 3000);
  await sleep(500);
  await tap(["AmmoRoundButton", "AmmoGrapeButton", "AmmoChainButton"][i % 3]);
  const t0 = Date.now();
  while ((await V("Voyage.State")) === "COMBAT" && Date.now() - t0 < 45000) {
    maxObjects = Math.max(maxObjects, (await count("CannonBall")) + (await count("Fx")) + (await count("DamageText")));
    await sleep(250);
  }
  const st = await V("Voyage.State");
  if (!["REWARDS", "SUNK"].includes(st)) { stuck++; console.log("   stuck in", st); continue; }
  if (st === "REWARDS") await continueOn();
  else { await sleep(300); await tap("ContinueButton"); await sleep(1500); }
}
check("soak: 10 real combats resolve on their own", stuck === 0);
check("spawned objects stay bounded", maxObjects < 80, `peak ${maxObjects}`);
await sleep(1500);
check("no leftover spawned objects", (await count("CannonBall")) + (await count("Fx")) + (await count("DamageText")) === 0);

// ---- 11. 3D staging (chase camera): approach from ahead, gun ports, sinking, departures
const is3D = await g.page.evaluate(() => __scene.getObjects("EnemyShip3D").length > 0);
if (is3D) {
  if ((await g.sceneName()) === "Port") { await sleep(400); await tap("SetSailButton"); await waitState("SAILING"); }
  await SET("Voyage.Hull", 100); await SET("Voyage.Cannonballs", 60); await SET("Voyage.Crew", 12);
  await waitFor(async () => (await V("Enemy.Active")) === 0 && (await V("Voyage.State")) === "SAILING", 15000);
  await SET("Voyage.NextEncounterIn", 0);
  await waitState("ENCOUNTER_APPROACH");
  const shipCY = await V("ShipCY"), startY = await V("EnemyCY");
  check("enemy appears far ahead, in the haze", startY < shipCY - 1500, `${Math.round(shipCY - startY)} ahead`);
  await waitState("ENCOUNTER_DECISION", 6000);
  const alongside = Math.abs((await V("EnemyCY")) - (shipCY - (await V("ShipH")) * 0.15)) < 2;
  check("enemy closes in alongside", alongside);
  await sleep(300); await tap("FightButton"); await waitState("COMBAT", 3000);
  await waitFor(async () => (await count("CannonBall")) > 0, 4000);
  const balls = await g.page.evaluate(() => __scene.getObjects("CannonBall").map((b) => {
    const v = (n) => b.getVariables().get(n).getAsNumber();
    return { sh: v("SH"), eh: v("EH"), hit: v("Hit"), layer: b.getLayer() };
  }));
  check("balls fire from deck height and fly on the FX overlay",
        balls.every((b) => b.sh > 0 && b.layer === "FX"), JSON.stringify(balls[0]));
  check("misses splash at water level", balls.every((b) => b.hit === 1 || b.eh < 0));
  const z = () => g.page.evaluate(() => __scene.getObjects("EnemyShip3D")[0].getZ());
  await SET("Enemy.Hull", 0);
  await waitState("REWARDS", 3000);
  await sleep(300); await tap("ContinueButton"); await waitState("SAILING");
  const z0 = await z(); await sleep(800); const z1 = await z();
  check("sunk enemy goes down in 3D", z1 < z0 - 50, `z ${Math.round(z0)} -> ${Math.round(z1)}`);
  await waitFor(async () => (await V("Enemy.Active")) === 0, 6000);
  // a merchant that is left alone sails off ahead into the fog and frees the slot in time
  await spawn("Merchant");
  await SET("Voyage.StateTime", 99);  // decision timeout -> merchant sails on
  const t0 = Date.now();
  const gone = await waitFor(async () => (await V("Enemy.Active")) === 0, 12000);
  check("departing ship sails off ahead and is cleaned up", gone, `${((Date.now() - t0) / 1000).toFixed(1)}s`);
}

await g.finish();
