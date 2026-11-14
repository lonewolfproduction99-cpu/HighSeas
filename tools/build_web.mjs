// Export HighSeas.json to an HTML5 build for one phase and refresh the phase index.
//
//   npm run build -- 1 "Foundation: ocean, ship, HUD"
//
// Output: site/phase-<N>/ (playable build) + site/index.html (links to every phase).
// site/ is what GitHub Pages publishes, so each phase stays playable on your phone.
import exporter from "gdexporter";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { join, resolve } from "path";

const root = resolve(import.meta.dirname, "..");
const [phaseArg, ...noteParts] = process.argv.slice(2);
// A number builds a phase (site/phase-N); a word builds a side-by-side test (site/test-word).
const phase = Number(phaseArg);
const isPhase = Number.isInteger(phase) && phase >= 1;
if (!phaseArg || (!isPhase && !/^[a-z0-9-]+$/.test(phaseArg))) {
  console.error('Usage: npm run build -- <phase number | test-name> "<short description>"');
  process.exit(1);
}
const slug = isPhase ? `phase-${phase}` : `test-${phaseArg}`;

const site = join(root, "site");
const out = join(site, slug);
// Retries: on Windows the local preview server can briefly hold files open.
rmSync(out, { recursive: true, force: true, maxRetries: 10, retryDelay: 200 });
mkdirSync(out, { recursive: true });

console.log(`Exporting HighSeas.json -> site/${slug} ...`);
await exporter(join(root, "HighSeas.json"), out, {});
if (!existsSync(join(out, "index.html"))) {
  console.error("Export failed: no index.html produced.");
  process.exit(1);
}
// The exporter lists the Draco .wasm decoder as a <script>, which throws
// "Invalid or unexpected token" in the browser. The JS wrapper loads it properly.
const html = readFileSync(join(out, "index.html"), "utf8");
writeFileSync(join(out, "index.html"), html.replace(/^.*<script[^>]*src="[^"]+\.wasm"[^>]*><\/script>.*\r?\n/gm, ""));

// ---- phase list -> index page
const listPath = join(site, "phases.json");
const phases = (existsSync(listPath) ? JSON.parse(readFileSync(listPath, "utf8")) : [])
  .map((p) => (p.slug ? p : { ...p, slug: `phase-${p.phase}` }));  // older entries had only `phase`
const note = noteParts.join(" ").trim();
const entry = { slug, ...(isPhase ? { phase } : {}),
  note: note || phases.find((p) => p.slug === slug)?.note || "", built: new Date().toISOString().slice(0, 10) };
// tests first (they are the open questions), then phases newest first
const rank = (p) => (p.phase ? p.phase : 1000);
const merged = [...phases.filter((p) => p.slug !== slug), entry].sort((a, b) => rank(b) - rank(a));
writeFileSync(listPath, JSON.stringify(merged, null, 2));

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const newestPhase = Math.max(0, ...merged.map((p) => p.phase || 0));
const rows = merged
  .map((p) => {
    const latest = p.phase === newestPhase;
    const title = p.phase ? `Phase ${p.phase}${latest ? " · latest" : ""}` : `Test · ${p.slug.slice(5)}`;
    return `<a class="card${latest ? " latest" : ""}${p.phase ? "" : " test"}" href="${p.slug}/">
  <span class="num">${esc(title)}</span>
  <span class="note">${esc(p.note)}</span>
  <span class="date">built ${p.built}</span></a>`;
  })
  .join("\n");
writeFileSync(join(site, "index.html"), `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>High Seas builds</title>
<style>
  :root { color-scheme: dark; }
  body { margin: 0; font-family: system-ui, sans-serif; background: #0f2233; color: #f3ead6; }
  main { max-width: 480px; margin: 0 auto; padding: 24px 16px; }
  h1 { font-size: 28px; margin: 0 0 4px; color: #f2c75c; }
  p { margin: 0 0 20px; opacity: .75; }
  .card { display: block; padding: 16px; margin-bottom: 12px; border-radius: 12px;
          background: #1b3a52; border: 2px solid #2d5574; color: inherit; text-decoration: none; }
  .card.latest { border-color: #f2c75c; }
  .card.test { border-style: dashed; border-color: #6fb3d9; }
  .num { display: block; font-weight: 700; font-size: 18px; }
  .note { display: block; margin: 4px 0; }
  .date { font-size: 13px; opacity: .6; }
</style></head>
<body><main>
<h1>High Seas</h1>
<p>Playable test build for each phase. Tap one, then use your browser's “Add to Home Screen” for full screen.</p>
${rows}
</main></body></html>
`);
console.log(`Done. Open site/${slug}/ (or run: npm run serve).`);
