import type { Metadata } from "next";
import CaseStudy from "@/app/components/CaseStudy";
import { projects } from "@/app/data/projects";
import { galleryIfExists, shotIfExists } from "@/app/lib/case-assets";
import { getSiteUrl, siteConfig } from "@/app/site-config";

const project = projects.find((item) => item.slug === "devis-facture")!;
const pagePath = "/projets/devis-facture";
const pageTitle = `Devis et factures : étude de cas React, Node.js et PostgreSQL | ${siteConfig.name}`;
const pageDescription =
  "Étude de cas d'une application de devis et de factures en F CFA : calculs monétaires exacts, documents immuables, numérotation sans trou, paiements, PDF figés, isolation entre entreprises et démo en un clic.";

const heroShot = shotIfExists(
  "devis-facture-tableau-de-bord.webp",
  "Tableau de bord du Générateur de Devis et Factures : facturé, encaissé, à recevoir et devis en attente",
);

const gallery = galleryIfExists([
  {
    file: "devis-facture-devis.webp",
    alt: "Liste des devis avec un état par ligne : brouillon, envoyé, refusé, converti",
    caption: "Devis : un état par ligne et les actions possibles.",
  },
  {
    file: "devis-facture-factures.webp",
    alt: "Liste des factures avec accès au PDF et aux paiements",
    caption: "Factures : brouillon ou émise, avec accès au PDF et aux paiements.",
  },
  {
    file: "devis-facture-paiements.webp",
    alt: "Suivi des paiements d'une facture : acompte, solde restant et historique",
    caption: "Paiements : acompte, solde restant et historique.",
  },
  {
    file: "devis-facture-pdf.webp",
    alt: "PDF d'un devis avec bon pour accord et PDF d'une facture avec échéance et totaux",
    caption: "PDF d'un devis (bon pour accord) et d'une facture (échéance, totaux).",
  },
]);

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
    ...(heroShot
      ? { images: [{ url: heroShot.src, width: heroShot.width, height: heroShot.height, alt: heroShot.alt }] }
      : {}),
  },
  twitter: {
    card: heroShot ? "summary_large_image" : "summary",
    title: pageTitle,
    description: pageDescription,
    ...(heroShot ? { images: [heroShot.src] } : {}),
  },
};

const challenge = [
  "Un devis ou une facture engage son émetteur : ses montants doivent être exacts, son numéro sans trou, et son contenu ne doit plus changer une fois le document envoyé.",
  "Mon objectif : une application où les calculs sont exacts, où les documents envoyés sont figés et vérifiables, et où chaque entreprise ne voit que ses propres données.",
];

const features = [
  "Clients et catalogue de produits et services, avec TVA par ligne.",
  "Devis : brouillon, envoi avec un numéro (DEV-AAAA-NNNNN), acceptation, refus, annulation et conversion en facture.",
  "Factures numérotées par année (FAC-AAAA-NNNNN), avec échéance calculée, créées depuis un devis accepté ou à la main.",
  "Plusieurs paiements par facture (virement, espèces, chèque, mobile money, carte), avec solde et état calculés. Un paiement n'est jamais supprimé, seulement annulé avec un motif.",
  "PDF de devis et de factures, avec bon pour accord, conditions de règlement et PDF d'annulation.",
  "Tableau de bord : facturé hors taxes, encaissé, à recevoir, en retard et devis en attente.",
  "Paramètres de l'entreprise : identité, identifiants fiscaux, logo, devise, TVA, préfixes de numérotation et mentions légales.",
  "Comptes avec plusieurs entreprises isolées, et espaces d'essai remplis de données fictives.",
];

const decisions = [
  {
    title: "Des calculs monétaires exacts",
    text: "Les montants sont des bigint dans la plus petite unité de la devise, les quantités en milli-unités et les taux en points de base : aucun nombre flottant dans un calcul métier. Des tests de propriétés (fast-check) vérifient que totaux, remises et taxes restent cohérents quelles que soient les lignes saisies.",
  },
  {
    title: "Des documents immuables",
    text: "À l'envoi d'un devis ou à l'émission d'une facture, un instantané complet du document est figé avec son empreinte SHA-256. Des déclencheurs PostgreSQL empêchent ensuite de modifier ses champs métier, et un PDF manquant peut être régénéré à l'identique depuis l'instantané.",
  },
  {
    title: "Une numérotation annuelle sans trou",
    text: "Les numéros se suivent sans interruption, y compris quand plusieurs demandes arrivent en même temps. Ce cas est couvert par un test.",
  },
  {
    title: "Concurrence optimiste et idempotence",
    text: "Une modification exige un en-tête If-Match portant la version du document. L'enregistrement d'un paiement exige une clé d'idempotence valable 24 heures : un double clic ou une connexion instable ne crée pas deux paiements.",
  },
  {
    title: "Une isolation stricte entre entreprises",
    text: "Chaque requête est limitée à l'entreprise de l'utilisateur. Toucher au document d'une autre entreprise donne la même réponse qu'une action interdite, pour ne jamais révéler son existence. Des tests croisés le vérifient.",
  },
  {
    title: "Une démo qui passe par la vraie logique",
    text: "Le bouton « Essayer la démo » crée une entreprise isolée par l'API du serveur lui-même, donc par la logique de production. Des limites par adresse IP et un plafond d'espaces évitent les abus, et seuls les espaces d'essai peuvent être purgés.",
  },
];

const architecture = [
  { step: "01", name: "Navigateur", text: "Ne parle qu'à un seul domaine, en HTTPS." },
  { step: "02", name: "Vercel", text: "React 19 et Vite. Réécrit /api/* vers l'API." },
  { step: "03", name: "Render", text: "API Express 5 avec Prisma, génération des PDF." },
  { step: "04", name: "Neon", text: "PostgreSQL 16, migrations versionnées, déclencheurs d'immuabilité." },
];

const quality = [
  "Environ 80 tests : unitaires, de propriétés, d'intégration sur un vrai PostgreSQL et un parcours complet avec Playwright.",
  "CI GitHub Actions : audit des dépendances, migrations, vérification des types, tests unitaires et d'intégration à chaque push.",
  "Sécurité : cookies de session HttpOnly, Secure et SameSite, protection CSRF, jetons de rafraîchissement à rotation, verrouillage après 5 échecs de connexion, mots de passe hachés avec bcrypt, en-têtes de sécurité et journal d'audit.",
  "PDF générés par le serveur avec pdfkit, sans navigateur : le rendu est identique d'une génération à l'autre.",
  "Déploiement automatique sur Vercel, Render et Neon à chaque push.",
];

export default function DevisFactureCaseStudy() {
  const siteUrl = getSiteUrl();

  return (
    <CaseStudy
      data={{
        title: project.title,
        lead: "Une application web pour créer des devis, les transformer en factures numérotées, suivre les paiements et produire des PDF figés, avec plusieurs entreprises isolées les unes des autres et des montants en F CFA.",
        meta: [
          { label: "Rôle", value: "Conception et développement complets" },
          { label: "Stack", value: "React, TypeScript, Node.js, Express, Prisma, PostgreSQL" },
          { label: "Contexte", value: "Projet personnel, démo avec données fictives" },
        ],
        demoUrl: project.link,
        codeUrl: project.github,
        note: "Sur la page de connexion, « Essayer la démo » ouvre votre propre espace, déjà rempli, sans compte. Il est supprimé au bout de 12 heures. L'API est hébergée sur un plan gratuit : le premier chargement peut prendre jusqu'à une minute.",
        heroShot,
        challenge,
        features,
        decisions,
        gallery,
        architecture,
        qualityTitle: "QUALITÉ ET SÉCURITÉ",
        quality,
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "@id": `${siteUrl}${pagePath}#app`,
          name: project.title,
          description: pageDescription,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          ...(project.link ? { url: project.link } : {}),
          codeRepository: project.github,
          inLanguage: "fr",
          author: { "@id": `${siteUrl}/#person` },
        },
      }}
    />
  );
}
