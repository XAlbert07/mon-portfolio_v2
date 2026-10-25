import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects";
import { getSiteUrl, siteConfig } from "@/app/site-config";

const project = projects.find((item) => item.slug === "gestion-stock")!;
const pagePath = "/projets/gestion-stock";
const pageTitle = `Gestion de Stock : étude de cas React, Node.js et PostgreSQL | ${siteConfig.name}`;
const pageDescription =
  "Étude de cas d'une application de gestion de stock et de ventes en FCFA : journal de mouvements, coût moyen pondéré, retours clients, démo en lecture seule, tests et déploiement continu.";
const heroShot = {
  src: "/projets/gestion-stock-tableau-de-bord.webp",
  alt: "Tableau de bord de Gestion de Stock : produits actifs, ruptures, stocks faibles et activité des 7 derniers jours",
  width: 1200,
  height: 720,
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pagePath },
  openGraph: {
    type: "article",
    locale: siteConfig.locale,
    url: pagePath,
    siteName: siteConfig.name,
    title: pageTitle,
    description: pageDescription,
    images: [{ url: heroShot.src, width: heroShot.width, height: heroShot.height, alt: heroShot.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [heroShot.src],
  },
};

const features = [
  "Catalogue avec plusieurs unités par produit et facteurs de conversion (bouteille, carton de 12, sac de 25 kg).",
  "Grille de prix par type de client et par unité de vente, en FCFA entiers.",
  "Réceptions fournisseurs : le stock entre à la validation et le coût moyen pondéré est recalculé.",
  "Ventes et retours clients, avec le coût conservé au moment de la vente pour calculer les marges.",
  "Inventaire : stock d'ouverture, ajustements (casse, péremption), comptages et annulation d'opérations.",
  "Tableau de bord : ruptures, stocks faibles et activité des 7 derniers jours.",
];

const decisions = [
  {
    title: "Le stock repose sur un journal de mouvements",
    text: "Chaque opération (réception, vente, retour, ajustement) écrit ses lignes et ses mouvements dans une seule transaction PostgreSQL, puis met à jour le stock courant et le coût moyen. Le stock affiché correspond donc toujours à la somme des mouvements.",
  },
  {
    title: "Les conversions d'unités vivent dans la base",
    text: "Chaque ligne stocke la quantité saisie et son facteur. La quantité en unité de base est une colonne calculée par PostgreSQL : impossible de la faire diverger de la saisie.",
  },
  {
    title: "Le mode démo est appliqué côté serveur",
    text: "Le rôle DEMO est contenu dans le jeton, et un seul middleware refuse toute requête d'écriture (403 DEMO_READ_ONLY). Masquer des boutons dans l'interface ne suffirait pas à protéger la démo.",
  },
  {
    title: "Pas de CORS à configurer",
    text: "Le navigateur ne parle qu'à Vercel, qui réécrit /api/* vers l'API hébergée sur Render. Moins de configuration, moins de surface d'erreur.",
  },
];

const gallery = [
  {
    src: "/projets/gestion-stock-catalogue.webp",
    alt: "Catalogue de Gestion de Stock avec recherche, catégories et seuils critiques",
    caption: "Catalogue : recherche, catégories, seuils critiques.",
  },
  {
    src: "/projets/gestion-stock-stock.webp",
    alt: "Page Stock de Gestion de Stock avec niveaux, alertes et historique des mouvements",
    caption: "Stock : niveaux, alertes et historique des mouvements.",
  },
  {
    src: "/projets/gestion-stock-ventes.webp",
    alt: "Liste des ventes de Gestion de Stock, brouillons et ventes validées",
    caption: "Ventes : brouillons et ventes validées.",
  },
  {
    src: "/projets/gestion-stock-detail-vente.webp",
    alt: "Détail d'une vente avec lignes, tarif client et retour de marchandises",
    caption: "Détail d'une vente : lignes, tarif client, retour de marchandises.",
  },
];

const architecture = [
  { step: "01", name: "Navigateur", text: "Ne parle qu'à Vercel, en HTTPS." },
  { step: "02", name: "Vercel", text: "React 19 et Vite. Réécrit /api/* vers l'API." },
  { step: "03", name: "Render", text: "API Express 5, jetons JWT, limitation des requêtes." },
  { step: "04", name: "Neon", text: "PostgreSQL 16, migrations SQL versionnées." },
];

const quality = [
  "Tests automatisés : Jest et Supertest côté API, Vitest et Testing Library côté interface.",
  "ESLint, Prettier et Oxlint pour garder un code homogène.",
  "CI GitHub Actions : audit des dépendances, base PostgreSQL de test, lint, build et tests à chaque push.",
  "Déploiement automatique sur Vercel et Render à chaque push.",
  "Sécurité de base : mots de passe hachés avec bcrypt, en-têtes helmet, limitation des tentatives de connexion, secrets uniquement dans l'environnement.",
];

export default function GestionStockCaseStudy() {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}${pagePath}#app`,
    name: project.title,
    description: pageDescription,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: project.link,
    codeRepository: project.github,
    inLanguage: "fr",
    author: { "@id": `${siteUrl}/#person` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main-content" className="portfolio-page min-h-screen overflow-x-hidden bg-[#0a0a0a] text-[#f0ede6]">
        <section className="projects-page-hero">
          <div className="mx-auto max-w-[1100px]">
            <div className="projects-page-topbar">
              <Link href="/" className="nav-brand">
                ALBERT<span className="text-[#c8f04a]">.</span>
              </Link>
              <div className="projects-page-links">
                <Link href="/#projets" className="projects-page-link">
                  Tous les projets
                </Link>
                <Link href="/#contact" className="cta-btn px-5 py-2.5 text-xs">
                  Me contacter
                </Link>
              </div>
            </div>

            <div className="projects-page-intro">
              <p className="font-mono-custom mb-4 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]">
                Étude de cas
              </p>
              <h1 className="font-display mb-6 text-[clamp(52px,8vw,112px)] leading-none">GESTION DE STOCK</h1>
              <p className="projects-page-copy">
                Une application web de gestion de stock et de ventes pour un petit commerce : catalogue, réceptions
                fournisseurs, ventes, retours clients et inventaires, avec les montants en FCFA.
              </p>
            </div>

            <div className="case-meta">
              <div className="case-meta-item">
                <span className="font-mono-custom">Rôle</span>
                <span>Conception et développement complets</span>
              </div>
              <div className="case-meta-item">
                <span className="font-mono-custom">Stack</span>
                <span>{project.stack.join(", ")}</span>
              </div>
              <div className="case-meta-item">
                <span className="font-mono-custom">Contexte</span>
                <span>Projet personnel, démo avec données fictives</span>
              </div>
            </div>

            <div className="case-actions">
              <a href={project.link} target="_blank" rel="noreferrer" className="cta-btn">
                Voir la démo <span aria-hidden="true">→</span>
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="ghost-btn">
                Code source
              </a>
            </div>
            <p className="case-note">
              Sur la page de connexion, le bouton « Explorer la démo » ouvre l&apos;application en lecture seule. L&apos;API
              est hébergée sur un plan gratuit : le premier chargement peut prendre jusqu&apos;à une minute.
            </p>
          </div>
        </section>

        <section className="case-section" style={{ borderTop: "none" }}>
          <div className="mx-auto max-w-[1000px]">
            <div className="case-shot">
              <Image
                src={heroShot.src}
                alt={heroShot.alt}
                width={heroShot.width}
                height={heroShot.height}
                sizes="(max-width: 1100px) 100vw, 1000px"
                priority
              />
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="mx-auto max-w-[1100px]">
            <h2 className="font-display mb-8 text-[clamp(36px,4.5vw,60px)] leading-none">LE DÉFI</h2>
            <p className="case-text">
              Un petit commerce a besoin de savoir, à tout moment, ce qu&apos;il a en stock, ce que lui coûte chaque
              produit et ce qui se vend. Le piège classique est un stock affiché qui ne correspond plus à la réalité.
            </p>
            <p className="case-text mt-5">
              Mon objectif : une application où le stock affiché est toujours égal à la somme des mouvements
              enregistrés, même avec des unités multiples comme la bouteille, le carton de 12 ou le sac de 25 kg.
            </p>
          </div>
        </section>

        <section className="case-section">
          <div className="mx-auto max-w-[1100px]">
            <h2 className="font-display mb-8 text-[clamp(36px,4.5vw,60px)] leading-none">CE QUE FAIT L&apos;APPLICATION</h2>
            <ul className="case-list">
              {features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="case-section">
          <div className="mx-auto max-w-[1100px]">
            <h2 className="font-display mb-8 text-[clamp(36px,4.5vw,60px)] leading-none">DÉCISIONS TECHNIQUES</h2>
            <div className="case-decisions">
              {decisions.map((item) => (
                <article key={item.title} className="case-decision">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="mx-auto max-w-[1100px]">
            <h2 className="font-display mb-8 text-[clamp(36px,4.5vw,60px)] leading-none">APERÇU</h2>
            <div className="case-gallery">
              {gallery.map((shot) => (
                <figure key={shot.src}>
                  <div className="case-shot">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={1200}
                      height={720}
                      sizes="(max-width: 900px) 100vw, 540px"
                    />
                  </div>
                  <figcaption>{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="mx-auto max-w-[1100px]">
            <h2 className="font-display mb-8 text-[clamp(36px,4.5vw,60px)] leading-none">ARCHITECTURE</h2>
            <ol className="case-arch">
              {architecture.map((node) => (
                <li key={node.name}>
                  <span className="font-mono-custom">{node.step}</span>
                  <strong>{node.name}</strong>
                  <span>{node.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="case-section">
          <div className="mx-auto max-w-[1100px]">
            <h2 className="font-display mb-8 text-[clamp(36px,4.5vw,60px)] leading-none">QUALITÉ ET DÉPLOIEMENT</h2>
            <ul className="case-list">
              {quality.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="compact-section">
          <div className="mx-auto max-w-[1100px] projects-page-cta">
            <div>
              <p className="font-mono-custom mb-4 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]">Suite</p>
              <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-none">
                UN PROJET
                <br />
                À DISCUTER ?
              </h2>
            </div>
            <div className="projects-page-cta-actions">
              <Link href="/#contact" className="cta-btn">
                Me contacter
              </Link>
              <Link href="/#projets" className="ghost-btn">
                Voir les autres projets
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
