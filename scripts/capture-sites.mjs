#!/usr/bin/env node
/**
 * Génère les captures d'écran de projets en ligne pour le portfolio.
 *
 * Usage (depuis la racine du portfolio) :
 *   npm i --no-save puppeteer
 *   node scripts/capture-sites.mjs fasomarket
 *   node scripts/capture-sites.mjs agence-web
 *   node scripts/capture-sites.mjs            (tous les projets)
 *
 * Variables facultatives :
 *   OUT=public/projets   dossier de sortie
 *   BASE_FASOMARKET=...  BASE_AGENCE_WEB=...   pour viser une autre adresse
 *
 * Les images sont enregistrées en WebP, en 1200 x 720, dans public/projets.
 * Les pages /projets/<projet> les affichent automatiquement dès qu'elles existent.
 */
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const SITES = {
  fasomarket: {
    base: process.env.BASE_FASOMARKET || "https://faso-market.vercel.app",
    shots: [
      { name: "accueil", path: "/" },
      { name: "annonces", path: "/listings" },
      { name: "annonce", firstLink: { from: "/listings", selector: 'a[href^="/listing/"]' } },
      { name: "publier", path: "/how-to-publish" },
    ],
  },
  "agence-web": {
    base: process.env.BASE_AGENCE_WEB || "https://agence-web-phi.vercel.app",
    shots: [
      { name: "accueil", path: "/" },
      { name: "creation-sites", path: "/service-creation-sites-web.html" },
      { name: "realisations", path: "/nos-realisations.html" },
      { name: "contact", path: "/contact.html" },
    ],
  },
};

const OUT = resolve(process.env.OUT || "public/projets");
const wanted = process.argv.slice(2);
const names = wanted.length ? wanted : Object.keys(SITES);

for (const name of names) {
  if (!SITES[name]) {
    console.error(`Projet inconnu : ${name}. Choix : ${Object.keys(SITES).join(", ")}`);
    process.exit(1);
  }
}

let puppeteer;
try {
  ({ default: puppeteer } = await import("puppeteer"));
} catch {
  try {
    ({ default: puppeteer } = await import("puppeteer-core"));
  } catch {
    console.error("Puppeteer est introuvable. Lancez d'abord : npm i --no-save puppeteer");
    process.exit(1);
  }
}

const sleep = (ms) => new Promise((done) => setTimeout(done, ms));

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox"],
  ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}),
});

const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 720, deviceScaleFactor: 1 });
await mkdir(OUT, { recursive: true });

async function open(base, path) {
  await page.goto(`${base}${path}`, { waitUntil: "networkidle2", timeout: 60_000 });
  await sleep(2000);
  // Parcourt la page pour déclencher les animations d'apparition, puis revient en haut.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise((done) => setTimeout(done, 80));
    }
    window.scrollTo(0, 0);
  });
  await sleep(800);
}

async function shot(project, name) {
  const file = resolve(OUT, `${project}-${name}.webp`);
  await page.screenshot({ path: file, type: "webp", quality: 82 });
  console.log("OK  ", file);
}

let failed = false;
try {
  for (const project of names) {
    const { base, shots } = SITES[project];
    console.log(`\n== ${project} (${base})`);

    for (const item of shots) {
      try {
        if (item.firstLink) {
          await open(base, item.firstLink.from);
          const href = await page
            .waitForSelector(item.firstLink.selector, { timeout: 15_000 })
            .then((el) => el.evaluate((node) => node.getAttribute("href")))
            .catch(() => null);
          if (!href) {
            console.warn(`SKIP ${item.name} : aucun lien trouvé sur ${item.firstLink.from}`);
            continue;
          }
          await open(base, href);
        } else {
          await open(base, item.path);
        }
        await shot(project, item.name);
      } catch (error) {
        failed = true;
        console.error(`ÉCHEC ${project}/${item.name} :`, error instanceof Error ? error.message : error);
      }
    }
  }
} finally {
  await browser.close();
}
process.exitCode = failed ? 1 : 0;
