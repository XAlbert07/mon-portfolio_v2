import type { Metadata } from "next";
import CaseStudy from "@/app/components/CaseStudy";
import { projects } from "@/app/data/projects";
import { galleryIfExists, shotIfExists } from "@/app/lib/case-assets";
import { getSiteUrl, siteConfig } from "@/app/site-config";

const project = projects.find((item) => item.slug === "web-digi")!;
const pagePath = "/projets/web-digi";
const pageTitle = `Web Digi : étude de cas d'un site d'agence en HTML, CSS et JavaScript | ${siteConfig.name}`;
const pageDescription =
  "Étude de cas du site vitrine de l'agence Web Digi : 7 pages, header et footer partagés, données structurées, sitemap généré par script, sans framework.";

const heroShot = shotIfExists(
  "agence-web-accueil.webp",
  "Page d'accueil du site Web Digi, agence web et infographie",
);

const gallery = galleryIfExists([
  {
    file: "agence-web-creation-sites.webp",
    alt: "Page du service de création de sites web de Web Digi",
    caption: "Service : création de sites web.",
  },
  {
    file: "agence-web-realisations.webp",
    alt: "Page des réalisations de Web Digi avec des filtres par catégorie",
    caption: "Réalisations : filtres par catégorie.",
  },
  {
    file: "agence-web-contact.webp",
    alt: "Page de contact de Web Digi",
    caption: "Contact.",
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
  "Présenter clairement trois métiers (création de sites, visibilité digitale, infographie) et donner envie de passer à l'action, avec un site léger, facile à héberger et sans étape de build.",
  "Le site devait aussi être trouvé : chaque page devait être décrite correctement aux moteurs de recherche dès la conception.",
];

const features = [
  "7 pages : accueil, trois pages de services, réalisations, à propos et contact.",
  "Hero en carrousel avec lecture automatique, et méthode de travail présentée en onglets.",
  "Compteurs animés, barre de progression de lecture, effets de parallaxe et bouton de retour en haut.",
  "Navigation avec suivi de la section active et menu mobile avec sous-menu des services.",
  "FAQ, page de réalisations et page de contact.",
];

const decisions = [
  {
    title: "Header et footer partagés, sans framework",
    text: "Le header et le footer vivent dans deux fichiers, injectés dans chaque page par un petit script. La page active est repérée par un attribut sur le body : un changement de menu se fait une seule fois pour les 7 pages.",
  },
  {
    title: "Un CSS organisé en couches",
    text: "Six fichiers du plus général au plus précis : variables, reset, base, composants, mise en page et animations. Les couleurs et espacements viennent de variables, pour garder un design cohérent.",
  },
  {
    title: "Le référencement est posé dès la conception",
    text: "Chaque page a sa description, sa balise canonical, ses balises Open Graph et Twitter, et des données structurées JSON-LD adaptées (organisation, FAQ, service, entreprise locale). Un script génère le sitemap et le robots.txt.",
  },
  {
    title: "Des interactions pilotées par le défilement, mais sobres",
    text: "Les gestionnaires de scroll sont limités par throttle et debounce pour garder la fluidité, et les animations se déclenchent à l'apparition des éléments.",
  },
];

const architecture = [
  { step: "01", name: "Pages", text: "7 pages HTML statiques, avec un attribut data-page par page." },
  { step: "02", name: "Partials", text: "Header et footer injectés par includes.js." },
  { step: "03", name: "CSS", text: "6 fichiers : variables, reset, base, composants, layout, animations." },
  { step: "04", name: "JavaScript", text: "Modules main, scroll, interactions, animations et includes." },
];

const quality = [
  "Description, robots, canonical, Open Graph et Twitter Cards sur chaque page.",
  "Données structurées JSON-LD : Organization, WebSite, FAQPage, Service, AboutPage, CollectionPage, ContactPage et LocalBusiness.",
  "robots.txt et sitemap.xml générés par un script shell à partir de l'adresse du site.",
  "Fichier de vérification Google Search Console.",
  "Hébergement statique sur Vercel.",
];

export default function CaseStudyPage() {
  const siteUrl = getSiteUrl();

  return (
    <CaseStudy
      data={{
        title: project.title,
        lead: "Le site vitrine d'une agence web et infographie : trois services détaillés, des réalisations, une FAQ et un référencement soigné, en HTML, CSS et JavaScript, sans framework.",
        meta: [
          { label: "Rôle", value: "Conception, intégration et développement" },
          { label: "Stack", value: "HTML, CSS, JavaScript" },
          { label: "Contexte", value: "Site statique de 7 pages, sans framework" },
        ],
        demoUrl: project.link,
        codeUrl: project.github,
        note: "Le formulaire de contact est pour l'instant une interface sans envoi côté serveur.",
        heroShot,
        challenge: challenge,
        features,
        decisions,
        gallery,
        architecture,
        qualityTitle: "RÉFÉRENCEMENT ET MISE EN LIGNE",
        quality,
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          "@id": `${siteUrl}${pagePath}#app`,
          name: project.title,
          description: pageDescription,
          ...(project.link ? { url: project.link } : {}),
          codeRepository: project.github,
          inLanguage: "fr",
          author: { "@id": `${siteUrl}/#person` },
        },
      }}
    />
  );
}
