#!/usr/bin/env node
/**
 * Génère les captures d'écran de FasoMarket pour le portfolio.
 *
 * Usage (depuis la racine du portfolio) :
 *   npm i --no-save puppeteer
 *   node scripts/capture-fasomarket.mjs
 *
 * Arguments facultatifs :
 *   node scripts/capture-fasomarket.mjs [urlDuSite] [dossierDeSortie]
 *
 * Les images sont enregistrées en WebP, en 1200 x 720, dans public/projets.
 * La page /projets/fasomarket les affiche automatiquement dès qu'elles existent.
 */
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const BASE = (process.argv[2] || "https://faso-market.vercel.app").replace(/\/$/, "");
const OUT = resolve(process.argv[3] || "public/projets");

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

async function open(path) {
  await page.goto(`${BASE}${path}`, { waitUntil: "networkidle2", timeout: 60_000 });
  // Laisse le temps aux images et aux animations d'apparition de se terminer.
  await sleep(2500);
  await page.evaluate(() => window.scrollTo(0, 0));
}

async function shot(name) {
  const file = resolve(OUT, `fasomarket-${name}.webp`);
  await page.screenshot({ path: file, type: "webp", quality: 82 });
  console.log("OK  ", file);
}

try {
  await open("/");
  await shot("accueil");

  await open("/listings");
  await shot("annonces");

  const href = await page
    .waitForSelector('a[href^="/listing/"]', { timeout: 15_000 })
    .then((el) => el.evaluate((node) => node.getAttribute("href")))
    .catch(() => null);

  if (href) {
    await open(href);
    await shot("annonce");
  } else {
    console.warn("SKIP annonce : aucune fiche d'annonce trouvée sur /listings");
  }

  await open("/how-to-publish");
  await shot("publier");
} catch (error) {
  console.error("Échec de la capture :", error instanceof Error ? error.message : error);
  process.exitCode = 1;
} finally {
  await browser.close();
}
