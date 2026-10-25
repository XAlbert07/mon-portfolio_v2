import type { Metadata } from "next";
import CaseStudy from "@/app/components/CaseStudy";
import { galleryIfExists, shotIfExists } from "@/app/lib/case-assets";
import { projects } from "@/app/data/projects";
import { getSiteUrl, siteConfig } from "@/app/site-config";

const project = projects.find((item) => item.slug === "fasomarket")!;
const pagePath = "/projets/fasomarket";
const pageTitle = `FasoMarket : étude de cas d'une marketplace React et Supabase | ${siteConfig.name}`;
const pageDescription =
  "Étude de cas de FasoMarket, une plateforme de petites annonces pour le Burkina Faso : messagerie en temps réel, avis fiables, modération, PWA et application Android.";

/**
 * Les captures sont générées par `node scripts/capture-sites.mjs fasomarket`.
 * Chaque image n'est affichée que si son fichier existe dans public/projets.
 */
const heroShot = shotIfExists(
  "fasomarket-accueil.webp",
  "Page d'accueil de FasoMarket : recherche, catégories et annonces récentes",
);

const gallery = galleryIfExists([
  {
    file: "fasomarket-annonces.webp",
    alt: "Liste des annonces de FasoMarket avec recherche et filtres",
    caption: "Annonces : recherche par mots-clés, catégorie, ville, prix et état.",
  },
  {
    file: "fasomarket-annonce.webp",
    alt: "Fiche d'une annonce FasoMarket avec photos, prix et contacts du vendeur",
    caption: "Fiche d'annonce : photos, prix, contact direct ou messagerie.",
  },
  {
    file: "fasomarket-publier.webp",
    alt: "Guide pour publier une annonce sur FasoMarket",
    caption: "Guide pour publier une annonce.",
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

const features = [
  "Publication d'annonces avec plusieurs images, catégorie, ville, état et prix en FCFA.",
  "Recherche par mots-clés, catégorie, ville, prix et état, avec tri et pagination.",
  "Favoris et profils vendeurs publics, avec leurs annonces.",
  "Contact par téléphone, WhatsApp ou messagerie intégrée, y compris pour les visiteurs non connectés.",
  "Avis sur les vendeurs, réservés aux acheteurs qui ont échangé avec eux.",
  "Tableau de bord vendeur : annonces, vues et statistiques.",
  "Signalements, sanctions graduées et espace d'administration en 5 sections.",
];

const decisions = [
  {
    title: "Des avis qui reposent sur de vrais échanges",
    text: "Un acheteur ne peut noter un vendeur qu'après avoir échangé des messages avec lui. La vérification se fait avant l'ouverture du formulaire d'avis, ce qui limite les faux avis sans alourdir le parcours.",
  },
  {
    title: "Une messagerie en temps réel",
    text: "Chaque annonce a son canal Supabase Realtime, avec indicateur de frappe et présence. Les visiteurs sans compte peuvent aussi écrire grâce à des messages invités.",
  },
  {
    title: "La base de données fait le gros du travail",
    text: "Des index ciblés sur les messages, favoris et vues, des fonctions SQL pour compter les catégories et incrémenter les vues, et des vues matérialisées pour les statistiques d'administration. Côté interface : pagination et cache des catégories.",
  },
  {
    title: "Des images adaptées aux connexions lentes",
    text: "Avant l'envoi, chaque photo est déclinée en miniature (200 px), taille moyenne (800 px) et grande taille (1600 px), pour pouvoir servir la taille adaptée à chaque écran.",
  },
  {
    title: "Une modération pensée pour une petite équipe",
    text: "Une file unique regroupe signalements, annonces et utilisateurs, avec filtres, actions rapides et actions de masse. Le journal des décisions est enregistré en base, avec un repli local si la table est indisponible.",
  },
  {
    title: "Installable comme une vraie application",
    text: "Un manifeste, un service worker et une page hors ligne rendent le site installable (PWA). Il est aussi empaqueté en application Android grâce à une Trusted Web Activity.",
  },
];

const architecture = [
  { step: "01", name: "Client", text: "Application React, installable en PWA et empaquetée en Android (TWA)." },
  { step: "02", name: "Vercel", text: "Hébergement de l'application Vite, avec repli sur index.html pour le routage." },
  { step: "03", name: "Supabase", text: "Authentification, PostgreSQL, stockage des images et canaux temps réel." },
  { step: "04", name: "Scripts SQL", text: "Index, fonctions et vues matérialisées, versionnés dans le dépôt." },
];

const quality = [
  "TypeScript et ESLint sur l'ensemble du code.",
  "Déploiement continu sur Vercel à chaque push.",
  "Service worker, manifeste d'installation et page hors ligne pour la PWA.",
  "Digital Asset Links et manifeste TWA pour l'application Android.",
  "Scripts SQL numérotés (index, fonctions, vues matérialisées) à exécuter dans Supabase.",
];

export default function FasoMarketCaseStudy() {
  const siteUrl = getSiteUrl();

  return (
    <CaseStudy
      data={{
        title: project.title,
        lead: "Une plateforme de petites annonces pour le Burkina Faso : publier, rechercher, discuter avec le vendeur en temps réel et laisser un avis fiable, sur le web comme sur Android.",
        meta: [
          { label: "Rôle", value: "Conception et développement complets" },
          { label: "Stack", value: "React, TypeScript, Tailwind, Supabase, Vite" },
          { label: "Contexte", value: "Projet personnel, en ligne sur Vercel" },
        ],
        demoUrl: project.link,
        codeUrl: project.github,
        note: "La consultation des annonces est libre. La publication, les favoris et la messagerie demandent un compte.",
        heroShot,
        challenge: [
          "Je voulais offrir une alternative numérique aux méthodes traditionnelles de vente et d'achat entre particuliers, adaptée au Burkina Faso : prix en FCFA, recherche par ville, contact direct par téléphone ou WhatsApp.",
          "Le défi était de garder une plateforme simple pour les utilisateurs tout en la rendant fiable : des avis crédibles, une modération efficace et une interface qui reste fluide sur mobile.",
        ],
        features,
        decisions,
        gallery,
        architecture,
        qualityTitle: "MISE EN LIGNE ET PERFORMANCE",
        quality,
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "@id": `${siteUrl}${pagePath}#app`,
          name: project.title,
          description: pageDescription,
          applicationCategory: "ShoppingApplication",
          operatingSystem: "Web, Android",
          url: project.link,
          codeRepository: project.github,
          inLanguage: "fr",
          author: { "@id": `${siteUrl}/#person` },
        },
      }}
    />
  );
}
