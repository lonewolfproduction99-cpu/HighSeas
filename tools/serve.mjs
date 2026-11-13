// Serve site/ on your local network so you can test builds on your phone
// (phone and PC on the same Wi-Fi).   npm run serve
import { createServer } from "http";
import { createReadStream, existsSync, statSync } from "fs";
import { networkInterfaces } from "os";
import { extname, join, normalize, resolve } from "path";

const root = resolve(import.meta.dirname, "..", "site");
const port = Number(process.env.PORT) || 8765;
const types = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript",
  ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml",
  ".css": "text/css", ".webmanifest": "application/manifest+json", ".mp3": "audio/mpeg",
  ".ogg": "audio/ogg", ".wav": "audio/wav", ".ttf": "font/ttf", ".woff2": "font/woff2" };

createServer((req, res) => {
  let path = normalize(decodeURIComponent(req.url.split("?")[0])).replace(/^([/\\])+/, "");
  let file = join(root, path);
  if (!file.startsWith(root)) { res.writeHead(403).end(); return; }
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
  if (!existsSync(file)) { res.writeHead(404).end("Not found"); return; }
  res.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream",
                       "Cache-Control": "no-store" });
  createReadStream(file).pipe(res);
}).listen(port, "0.0.0.0", () => {
  console.log(`On this PC:   http://localhost:${port}/`);
  for (const nets of Object.values(networkInterfaces()))
    for (const n of nets || [])
      if (n.family === "IPv4" && !n.internal) console.log(`On your phone: http://${n.address}:${port}/`);
  console.log("(If Windows asks, allow Node.js on Private networks.)");
});
