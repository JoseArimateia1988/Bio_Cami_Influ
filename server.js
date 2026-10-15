const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const pages = new Map([
  ["/", "index.html"],
  ["/curadoria", "curadoria.html"],
  ["/midia-kit", "midia-kit.html"],
]);
const types = { ".html": "text/html; charset=utf-8", ".pdf": "application/pdf", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8" };

http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname); }
  catch { res.writeHead(400).end(); return; }
  const file = pages.get(pathname) || pathname.slice(1);
  const target = path.resolve(root, file);
  if (!target.startsWith(root + path.sep) || !fs.existsSync(target) || !fs.statSync(target).isFile()) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Página não encontrada");
    return;
  }
  res.writeHead(200, { "Content-Type": types[path.extname(target)] || "application/octet-stream", "X-Content-Type-Options": "nosniff" });
  if (req.method === "HEAD") res.end();
  else fs.createReadStream(target).pipe(res);
}).listen(Number(process.env.PORT) || 3000, "0.0.0.0");
