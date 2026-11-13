// Automated playtest of the Phase 2 encounter loop against a built phase.
//   npm run test:encounters            (tests site/phase-2)
//   npm run test:encounters -- 3       (tests site/phase-3, once it exists)
//
// Drives the real exported game in headless Chrome/Edge at phone size, taps the
// real buttons, and forces dice rolls (by stubbing Math.random) to reach every
// Fight / Flee / Parley / timeout / sinking outcome. Prints PASS/FAIL per check.
import puppeteer from "puppeteer-core";
import { createServer } from "http";
import { createReadStream, existsSync, statSync } from "fs";
import { extname, join, resolve } from "path";

const phase = process.argv[2] || "2";
const root = resolve(import.meta.dirname, "..", "site");
const BROWSERS = ["C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome", "/usr/bin/chromium"];

const types = { ".html": "text/html", ".js": "text/javascript", ".png": "image/png", ".json": "application/json" };
const server = createServer((req, res) => {
  let f = join(root, decodeURIComponent(req.url.split("?")[0]));
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, "index.html");
  if (!f.startsWith(root) || !existsSync(f)) return res.writeHead(404).end();
  res.writeHead(200, { "Content-Type": types[extname(f)] || "application/octet-stream" });
  createReadStream(f).pipe(res);
}).listen(0, "127.0.0.1");
await new Promise((r) => server.once("listening", r));
const url = `http://127.0.0.1:${server.address().port}/phase-${phase}/`;

const browser = await puppeteer.launch({ executablePath: BROWSERS.find(existsSync), headless: true,
  args: ["--autoplay-policy=no-user-gesture-required"] });
const page = await browser.newPage();
await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 1 });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
await page.goto(url);
await page.waitForFunction(() => window.gdjs && gdjs.RuntimeScene);

// ---- in-page helpers: capture the running scene, read/write variables, force dice
await page.evaluate(() => {
  const orig = gdjs.RuntimeScene.prototype.renderAndStep;
  gdjs.RuntimeScene.prototype.renderAndStep = function (dt) { window.__scene = this; return orig.call(this, dt); };
  window.realRandom = Math.random;
  window.VAR = (p) => {
    const s = window.__scene, parts = p.split(".");
    let v = (s.getVariables().has(parts[0]) ? s.getVariables() : s.getGame().getVariables()).get(parts[0]);
    for (const k of parts.slice(1)) v = v.getChild(k);
    return v;
  };
  window.V = (p) => VAR(p).getValue();
  window.SET = (p, x) => VAR(p).setValue(x);
  window.force = (x) => { Math.random = () => x; };
  window.unforce = () => { Math.random = window.realRandom; };
  window.screenPos = (name) => {   // object centre -> CSS pixels on the canvas
    const o = __scene.getObjects(name)[0], c = document.querySelector("canvas").getBoundingClientRect();
    const g = __scene.getGame();
    return { x: c.left + o.getCenterXInScene() * c.width / g.getGameResolutionWidth(),
             y: c.top + o.getCenterYInScene() * c.height / g.getGameResolutionHeight(),
             visible: o.isVisible() };
  };
});

const V = (p) => page.evaluate((p) => V(p), p);
const SET = (p, x) => page.evaluate((p, x) => SET(p, x), p, x);
const force = (x) => page.evaluate((x) => force(x), x);
const unforce = () => page.evaluate(() => unforce());
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function waitFor(fn, ms = 15000) {
  const t0 = Date.now();
  while (Date.now() - t0 < ms) { if (await fn()) return true; await sleep(50); }
  return false;
}
const waitState = (st, ms) => waitFor(async () => (await V("Voyage.State")) === st, ms);
async function tap(name) {
  await page.waitForFunction(() => window.__scene, { timeout: 10000 });
  const p = await page.evaluate((n) => screenPos(n), name);
  if (!p.visible) throw new Error(`${name} is not visible`);
  await page.mouse.click(p.x, p.y);
}

let pass = 0, fail = 0;
function check(label, ok, detail = "") {
  ok ? pass++ : fail++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}${detail ? "   [" + detail + "]" : ""}`);
}

async function spawn(type) {   // force the next encounter to be a given type (tier-1 weights 60/40)
  await waitFor(async () => (await V("Enemy.Active")) === 0 && (await V("Voyage.State")) === "SAILING");
  await force(type === "Merchant" ? 0.1 : 0.9);
  await SET("Voyage.NextEncounterIn", 0);
  await waitState("ENCOUNTER_APPROACH");
  await unforce();
  const ok = await waitState("ENCOUNTER_DECISION", 6000);
  check(`${type} spawns and reaches decision`, ok && (await V("Enemy.Type")) === type, await V("Enemy.Name"));
  await sleep(300); // let UI refresh place the buttons
}
async function resolveTo(roll, state = "REWARDS", ms = 8000) {
  await force(roll);
  const ok = await waitState(state, ms);
  await unforce();
  return ok;
}
async function continueOn() {
  await sleep(300);
  await tap("ContinueButton");
  await waitState("SAILING");
  await waitFor(async () => (await V("Enemy.Active")) === 0, 8000);
}

// ---------------------------------------------------------------- scenarios
await page.waitForFunction(() => window.__scene, { timeout: 15000 });
await sleep(1500);
await tap("SetSailButton");
check("Set Sail opens the voyage", await waitState("SAILING"));
await sleep(500);
check("encounter timer within 8-15s", await V("Voyage.NextEncounterIn").then((t) => t > 6 && t <= 15));

// 1. Merchant: flee always succeeds
await spawn("Merchant");
check("merchant flee chance is 100%", (await V("FleeChance")) === 1);
await tap("FleeButton");
check("merchant flee -> sailing, enemy left behind",
  (await waitState("SAILING")) && (await V("Enemy.Departing")) === "behind");
await waitFor(async () => (await V("Enemy.Active")) === 0, 8000);
check("enemy slot freed after departure", (await V("Enemy.Active")) === 0);

// 2. Pirate: flee fails -> damage + forced combat; combat lost -> driven off
await spawn("Pirate");
let hull = await V("Voyage.Hull");
await force(0.99); await tap("FleeButton");
check("failed flee forces combat", await waitState("COMBAT", 3000));
check("failed flee damages hull", (await V("Voyage.Hull")) < hull);
check("combat lost -> REWARDS 'Driven off'", (await resolveTo(0.99)) && (await V("Result.Title")) === "Driven off");
await continueOn();

// 3. Pirate: fight and win, rewards applied once
await spawn("Pirate");
let gold = await V("Voyage.Gold"), shot = await V("Voyage.Cannonballs"), prize = await V("Enemy.Gold");
await tap("FightButton");
check("fight -> COMBAT", await waitState("COMBAT", 3000));
check("combat won -> Victory", (await resolveTo(0.01)) && (await V("Result.Title")) === "Victory!");
await sleep(1000);
check("victory gold added exactly once", (await V("Voyage.Gold")) === gold + prize, `${gold} + ${prize}`);
check("cannonballs consumed", (await V("Voyage.Cannonballs")) < shot);
await continueOn();
check("no duplicate reward after continue", (await V("Voyage.Gold")) === gold + prize);

// 4. Merchant parley outcomes
for (const [roll, title] of [[0.1, "Safe passage"], [0.6, "Fair winds"], [0.9, "No deal"]]) {
  await spawn("Merchant");
  await tap("ParleyButton");
  check(`merchant parley roll ${roll} -> ${title}`,
    (await waitState("PARLEY", 3000)) && (await resolveTo(roll)) && (await V("Result.Title")) === title);
  await continueOn();
}

// 5. Pirate parley outcomes
await SET("Voyage.Gold", 100);
for (const [roll, expect] of [[0.1, "Tribute paid"], [0.5, "Pirate's code"], [0.9, "COMBAT"]]) {
  await spawn("Pirate");
  gold = await V("Voyage.Gold");
  await tap("ParleyButton");
  await waitState("PARLEY", 3000);
  if (expect === "COMBAT") {
    check("pirate parley roll 0.9 -> attacks", await resolveTo(roll, "COMBAT"));
    await resolveTo(0.01);
  } else {
    check(`pirate parley roll ${roll} -> ${expect}`, (await resolveTo(roll)) && (await V("Result.Title")) === expect);
    if (expect === "Tribute paid") check("tribute takes gold, never negative",
      (await V("Voyage.Gold")) < gold && (await V("Voyage.Gold")) >= 0);
  }
  await continueOn();
}
await SET("Voyage.Gold", 5);
await spawn("Pirate");
await tap("ParleyButton");
await waitState("PARLEY", 3000);
check("pirate tribute with <10 gold -> attacks", await resolveTo(0.1, "COMBAT"));
await resolveTo(0.01); await continueOn();

// 6. Decision timeouts (10 s)
await spawn("Merchant");
check("merchant timeout -> sails on", (await waitState("SAILING", 13000)) && (await V("Enemy.Departing")) === "leave");
await spawn("Pirate");
check("pirate timeout -> attacks", await waitState("COMBAT", 13000));
await resolveTo(0.01); await continueOn();

// 7. Out of ammunition: never negative, combat still resolves
await SET("Voyage.Cannonballs", 2);
await spawn("Pirate");
await tap("FightButton");
await resolveTo(0.01);
check("cannonballs clamp at 0", (await V("Voyage.Cannonballs")) === 0);
await continueOn();

// 8. Sinking: lose unbanked gold, go to port
await SET("Voyage.Gold", 77); await SET("Voyage.Hull", 1);
await spawn("Pirate");
await tap("FightButton");
check("hull 0 -> SUNK", await resolveTo(0.99, "SUNK", 8000));
check("hull never negative", (await V("Voyage.Hull")) === 0);
await sleep(400);
await tap("ContinueButton");
await sleep(1500);
check("sunk -> Port scene", (await page.evaluate(() => __scene.getName())) === "Port");
check("unbanked gold lost on sinking", (await V("Voyage.Gold")) === 0);

// 9. New voyage + safe return
await tap("SetSailButton");
await waitState("SAILING");
await sleep(500);
check("new voyage starts with full hull", (await V("Voyage.Hull")) === (await V("Voyage.MaxHull")));
await tap("ReturnButton");
check("return to port", await waitState("RETURNING", 3000));
await sleep(2200);
check("returned to Port scene", (await page.evaluate(() => __scene.getName())) === "Port");

// 10. Soak: real random rolls, random choices; nothing may get stuck or overlap
await tap("SetSailButton");
await waitState("SAILING");
let stuck = 0, rounds = 0, sunkCount = 0;
const seen = new Set();
for (let i = 0; i < 15; i++) {
  if ((await page.evaluate(() => __scene.getName())) === "Port") { await sleep(500); await tap("SetSailButton"); await waitState("SAILING"); }
  await waitFor(async () => (await V("Enemy.Active")) === 0 && (await V("Voyage.State")) === "SAILING", 15000);
  await SET("Voyage.NextEncounterIn", 0);
  if (!(await waitState("ENCOUNTER_DECISION", 6000))) { stuck++; continue; }
  seen.add(await V("Enemy.Type"));
  await sleep(300);
  const choice = ["FightButton", "FleeButton", "ParleyButton", null][Math.floor(Math.random() * 4)];
  if (choice) await tap(choice);
  const done = await waitFor(async () => ["REWARDS", "SAILING", "SUNK"].includes(await V("Voyage.State")), 16000);
  if (!done) { stuck++; console.log("   stuck in", await V("Voyage.State")); continue; }
  if ((await V("Voyage.State")) === "REWARDS") await continueOn();
  else if ((await V("Voyage.State")) === "SUNK") { sunkCount++; await sleep(300); await tap("ContinueButton"); await sleep(1500); }
  rounds++;
}
check(`soak: 15 random encounters, none stuck`, stuck === 0 && rounds === 15, `types ${[...seen].join("/")}, sank ${sunkCount}x`);

check("no page errors", errors.length === 0, errors.join(" | "));
console.log(`\n${pass} passed, ${fail} failed`);
await browser.close();
server.close();
process.exit(fail ? 1 : 0);
