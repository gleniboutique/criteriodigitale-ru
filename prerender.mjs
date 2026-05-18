import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");
const serverEntry = path.join(distDir, "server", "entry-server.js");

const { render } = await import(pathToFileURL(serverEntry).href);

const templatePath = path.join(distDir, "index.html");
const template = fs.readFileSync(templatePath, "utf-8");

const appHtml = render();
const final = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
);

fs.writeFileSync(templatePath, final);
fs.rmSync(path.join(distDir, "server"), { recursive: true, force: true });

console.log("✓ Prerendered into dist/index.html");
