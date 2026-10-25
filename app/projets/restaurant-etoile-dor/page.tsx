import type { Metadata } from "next";
import CaseStudy from "@/app/components/CaseStudy";
import { projects } from "@/app/data/projects";
import { galleryIfExists, shotIfExists } from "@/app/lib/case-assets";
import { getSiteUrl, siteConfig } from "@/app/site-config";

const project = projects.find((item) => item.slug === "restaurant-etoile-dor")!;
const pagePath = "/projets/restaurant-etoile-dor";
const pageTitle = `Site vitrine de restaurant : étude de cas en Tailwind CSS et JavaScript | ${siteConfig.name}`;
const pageDescription =
  "Étude de cas d'un site vitrine pour un restaurant gastronomique fictif, L'Étoile d'Or : carte filtrable, effets 3D, réservation et animations, en Tailwind CSS et JavaScript.";

const heroShot = shotIfExists(
  "restaurant-accueil.webp",
  "Page d'accueil du site L'Étoile d'Or, restaurant gastronomique",
);

const gallery = galleryIfExists([
  {
    file: "restaurant-carte.webp",
    alt: "La carte du restaurant L'Étoile d'Or avec filtres par catégorie",
    caption: "La carte : filtres par catégorie et plats présentés en cartes.",
  },
  {
    file: "restaurant-reservation.webp",
    alt: "Formulaire de réservation du restaurant L'Étoile d'Or",
    caption: "Section réservation.",
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
  "Faire ressentir l'univers d'un restaurant gastronomique, élégant et chaleureux, avec une interface sobre qui conduit le visiteur vers deux actions : découvrir la carte, réserver une table.",
  "Sans framework, le site devait rester léger, avec un JavaScript découpé par rôle plutôt qu'un seul gros fichier.",
];

const features = [
  "Carte de 6 plats avec filtres par catégorie : tous, entrées, plats, desserts.",
  "Effet 3D au survol des plats, sans bibliothèque.",
  "Barre de navigation qui change au défilement, et menu mobile.",
  "Sections qui apparaissent progressivement pendant le défilement.",
  "Formulaire de réservation : nom, e-mail, téléphone, nombre de personnes, date, heure et demandes particulières.",
  "Mise en page adaptée au mobile.",
];

const decisions = [
  {
    title: "Du JavaScript modulaire",
    text: "Un fichier par rôle : navigation, carte, effet 3D, animations et réservation. Le rendu de la carte importe l'effet 3D comme un module ES.",
  },
  {
    title: "La carte est une donnée",
    text: "Les plats sont un tableau d'objets. Les filtres et les cartes sont générés par le code : ajouter un plat revient à ajouter un objet.",
  },
  {
    title: "Tailwind compilé en un seul fichier",
    text: "Tailwind est configuré à part et compilé en un fichier CSS minifié, sans bibliothèque de composants.",
  },
  {
    title: "Un effet 3D léger",
    text: "L'inclinaison des cartes suit le pointeur grâce à une transformation en perspective, en une cinquantaine de lignes.",
  },
];

const quality = [
  "CSS Tailwind compilé et minifié.",
  "Aucune dépendance JavaScript, hormis les icônes Lucide.",
  "Hébergement statique sur Vercel.",
];

export default function CaseStudyPage() {
  const siteUrl = getSiteUrl();

  return (
    <CaseStudy
      data={{
        title: project.title,
        lead: "Un site vitrine pour un restaurant gastronomique fictif, L'Étoile d'Or : carte filtrable, effets 3D sur les plats, formulaire de réservation et animations au défilement, en Tailwind CSS et JavaScript.",
        meta: [
          { label: "Rôle", value: "Conception et développement" },
          { label: "Stack", value: "HTML, Tailwind CSS, JavaScript" },
          { label: "Contexte", value: "Restaurant fictif, site statique" },
        ],
        demoUrl: project.link,
        codeUrl: project.github,
        note: "Le restaurant est fictif. Le formulaire de réservation est une démonstration : il n'envoie rien.",
        heroShot,
        challenge: challenge,
        features,
        decisions,
        gallery,
        qualityTitle: "MISE EN LIGNE",
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
