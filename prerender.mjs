import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");
const serverEntry = path.join(distDir, "server", "entry-server.js");

const { render } = await import(pathToFileURL(serverEntry).href);

const templatePath = path.join(distDir, "index.html");
const template = fs.readFileSync(templatePath, "utf-8");

const pages = [
  { url: "/", out: "index.html", title: null, description: null },
  {
    url: "/privacy",
    out: "privacy/index.html",
    title: "Политика конфиденциальности — Татьяна Мирошина",
    description: "Политика обработки персональных данных сайта ru.criteriodigitale.it по GDPR.",
  },
  {
    url: "/cookie",
    out: "cookie/index.html",
    title: "Cookie Policy — Татьяна Мирошина",
    description: "Использование cookies на сайте ru.criteriodigitale.it.",
  },
];

for (const page of pages) {
  const appHtml = render(page.url);
  let filled = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  if (page.title) {
    filled = filled.replace(
      /<title>[^<]*<\/title>/,
      `<title>${page.title}</title>`
    );
  }
  if (page.description) {
    filled = filled.replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${page.description}"`
    );
  }

  const outPath = path.join(distDir, page.out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, filled);
  console.log(`✓ Prerendered ${page.url} → dist/${page.out}`);
}

fs.rmSync(path.join(distDir, "server"), { recursive: true, force: true });
