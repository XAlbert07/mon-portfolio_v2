import type { Metadata } from "next";
import CaseStudy from "@/app/components/CaseStudy";
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
    width: 1200,
    height: 720,
  },
  {
    src: "/projets/gestion-stock-stock.webp",
    alt: "Page Stock de Gestion de Stock avec niveaux, alertes et historique des mouvements",
    caption: "Stock : niveaux, alertes et historique des mouvements.",
    width: 1200,
    height: 720,
  },
  {
    src: "/projets/gestion-stock-ventes.webp",
    alt: "Liste des ventes de Gestion de Stock, brouillons et ventes validées",
    caption: "Ventes : brouillons et ventes validées.",
    width: 1200,
    height: 720,
  },
  {
    src: "/projets/gestion-stock-detail-vente.webp",
    alt: "Détail d'une vente avec lignes, tarif client et retour de marchandises",
    caption: "Détail d'une vente : lignes, tarif client, retour de marchandises.",
    width: 1200,
    height: 720,
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

  return (
    <CaseStudy
      data={{
        title: project.title,
        lead: "Une application web de gestion de stock et de ventes pour un petit commerce : catalogue, réceptions fournisseurs, ventes, retours clients et inventaires, avec les montants en FCFA.",
        meta: [
          { label: "Rôle", value: "Conception et développement complets" },
          { label: "Stack", value: project.stack.join(", ") },
          { label: "Contexte", value: "Projet personnel, démo avec données fictives" },
        ],
        demoUrl: project.link,
        codeUrl: project.github,
        note: "Sur la page de connexion, le bouton « Explorer la démo » ouvre l'application en lecture seule. L'API est hébergée sur un plan gratuit : le premier chargement peut prendre jusqu'à une minute.",
        heroShot,
        challenge: [
          "Un petit commerce a besoin de savoir, à tout moment, ce qu'il a en stock, ce que lui coûte chaque produit et ce qui se vend. Le piège classique est un stock affiché qui ne correspond plus à la réalité.",
          "Mon objectif : une application où le stock affiché est toujours égal à la somme des mouvements enregistrés, même avec des unités multiples comme la bouteille, le carton de 12 ou le sac de 25 kg.",
        ],
        features,
        decisions,
        gallery,
        architecture,
        quality,
        jsonLd: {
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
        },
      }}
    />
  );
}
