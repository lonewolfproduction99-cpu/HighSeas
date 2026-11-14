// Shared headless playtest harness: serves site/, opens a phase build at phone
// size in local Chrome/Edge, and exposes helpers to read/write game variables,
// tap real objects, and force dice rolls (Math.random stub).
import puppeteer from "puppeteer-core";
import { createServer } from "http";
import { createReadStream, existsSync, statSync } from "fs";
import { extname, join, resolve } from "path";

const BROWSERS = ["C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser"];

export async function openGame(phase) {
  const root = resolve(import.meta.dirname, "..", "site");
  const types = { ".html": "text/html", ".js": "text/javascript", ".png": "image/png", ".json": "application/json" };
  const server = createServer((req, res) => {
    let f = join(root, decodeURIComponent(req.url.split("?")[0]));
    if (existsSync(f) && statSync(f).isDirectory()) f = join(f, "index.html");
    if (!f.startsWith(root) || !existsSync(f)) return res.writeHead(404).end();
    res.writeHead(200, { "Content-Type": types[extname(f)] || "application/octet-stream" });
    createReadStream(f).pipe(res);
  }).listen(0, "127.0.0.1");
  await new Promise((r) => server.once("listening", r));

  const browser = await puppeteer.launch({ executablePath: BROWSERS.find(existsSync), headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 1 });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const folder = /^\d+$/.test(String(phase)) ? `phase-${phase}` : String(phase);  // "3" or "test-3d-chase"
  await page.goto(`http://127.0.0.1:${server.address().port}/${folder}/`);
  await page.waitForFunction(() => window.gdjs && gdjs.RuntimeScene);
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
    window.screenPos = (name) => {
      const o = __scene.getObjects(name)[0], c = document.querySelector("canvas").getBoundingClientRect();
      const g = __scene.getGame();
      return { x: c.left + o.getCenterXInScene() * c.width / g.getGameResolutionWidth(),
               y: c.top + o.getCenterYInScene() * c.height / g.getGameResolutionHeight(), visible: o.isVisible() };
    };
  });
  await page.waitForFunction(() => window.__scene, { timeout: 15000 });

  const g = {
    page, errors,
    V: (p) => page.evaluate((p) => VAR(p).getValue(), p),
    SET: (p, x) => page.evaluate((p, x) => VAR(p).setValue(x), p, x),
    force: (x) => page.evaluate((x) => { Math.random = () => x; }, x),
    unforce: () => page.evaluate(() => { Math.random = window.realRandom; }),
    count: (name) => page.evaluate((n) => __scene.getObjects(n).length, name),
    sceneName: () => page.evaluate(() => __scene.getName()),
    sleep: (ms) => new Promise((r) => setTimeout(r, ms)),
    async waitFor(fn, ms = 15000) {
      const t0 = Date.now();
      while (Date.now() - t0 < ms) { if (await fn()) return true; await g.sleep(50); }
      return false;
    },
    waitState: (st, ms) => g.waitFor(async () => (await g.V("Voyage.State")) === st, ms),
    async tap(name) {
      const p = await page.evaluate((n) => screenPos(n), name);
      if (!p.visible) throw new Error(`${name} is not visible`);
      await page.mouse.click(p.x, p.y);
    },
    pass: 0, fail: 0,
    check(label, ok, detail = "") {
      ok ? g.pass++ : g.fail++;
      console.log(`${ok ? "PASS" : "FAIL"}  ${label}${detail !== "" ? "   [" + detail + "]" : ""}`);
    },
    async spawn(type) {   // force the next encounter type (tier-1 weights 60/40)
      await g.waitFor(async () => (await g.V("Enemy.Active")) === 0 && (await g.V("Voyage.State")) === "SAILING");
      await g.force(type === "Merchant" ? 0.1 : 0.9);
      await g.SET("Voyage.NextEncounterIn", 0);
      await g.waitState("ENCOUNTER_APPROACH");
      await g.unforce();
      const ok = await g.waitState("ENCOUNTER_DECISION", 15000);  // 3D: slow drift-in from the top
      g.check(`${type} spawns and reaches decision`, ok && (await g.V("Enemy.Type")) === type, await g.V("Enemy.Name"));
      await g.sleep(300);
    },
    async continueOn() {
      await g.sleep(300);
      await g.tap("ContinueButton");
      await g.waitState("SAILING");
      await g.waitFor(async () => (await g.V("Enemy.Active")) === 0, 16000);  // drifts out the bottom
    },
    async finish() {
      g.check("no page errors", errors.length === 0, errors.join(" | "));
      console.log(`\n${g.pass} passed, ${g.fail} failed`);
      await browser.close();
      server.close();
      process.exit(g.fail ? 1 : 0);
    },
  };
  return g;
}
