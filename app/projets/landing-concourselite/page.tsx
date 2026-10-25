import type { Metadata } from "next";
import CaseStudy from "@/app/components/CaseStudy";
import { projects } from "@/app/data/projects";
import { galleryIfExists, shotIfExists } from "@/app/lib/case-assets";
import { getSiteUrl, siteConfig } from "@/app/site-config";

const project = projects.find((item) => item.slug === "landing-concourselite")!;
const pagePath = "/projets/landing-concourselite";
const pageTitle = `Landing page ConcoursElite : étude de cas en Tailwind CSS | ${siteConfig.name}`;
const pageDescription =
  "Étude de cas d'une landing page pour un service de préparation aux concours de la fonction publique : parcours par profil, méthode, tarifs en FCFA et inscription, en Tailwind CSS.";

const heroShot = shotIfExists(
  "landing-accueil.webp",
  "Page d'accueil de la landing page ConcoursElite",
);

const gallery = galleryIfExists([
  {
    file: "landing-concours.webp",
    alt: "Section des concours préparés sur la landing page ConcoursElite",
    caption: "Les concours préparés.",
  },
  {
    file: "landing-tarifs.webp",
    alt: "Section des tarifs sur la landing page ConcoursElite",
    caption: "Trois formules tarifaires en FCFA.",
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
  "Faire comprendre en quelques secondes pour qui est la formation, comment elle fonctionne, combien elle coûte et comment s'inscrire.",
  "Une page unique, légère et lisible sur mobile, avec un ton rassurant pour des candidats qui jouent un concours.",
];

const features = [
  "Hero avec une promesse claire et quatre chiffres clés.",
  "Parcours selon le profil : élèves et étudiants, candidats libres, travailleurs, reconversion.",
  "Six concours présentés : ENAREF, Douanes, IDS, Police, Infirmier et professeur des écoles.",
  "Présentation de la méthode, avec six éléments d'accompagnement.",
  "Témoignages et trois formules tarifaires en FCFA.",
  "Formulaire d'inscription, bouton WhatsApp, navigation fixe et menu mobile.",
];

const decisions = [
  {
    title: "Une page qui répond dans l'ordre",
    text: "Les sections suivent les questions du visiteur : pour qui, quels concours, quelle méthode, quelles preuves, quel prix, comment s'inscrire.",
  },
  {
    title: "Un thème Tailwind piloté par variables",
    text: "Les couleurs sont des variables CSS en HSL branchées dans la configuration Tailwind. Les titres utilisent Playfair Display, le texte DM Sans.",
  },
  {
    title: "Une navigation qui s'adapte au défilement",
    text: "L'en-tête est transparent sur le hero, puis prend un fond flou et une ombre dès qu'on descend. Le défilement vers les sections est fluide.",
  },
  {
    title: "Un JavaScript minimal",
    text: "Environ 150 lignes, sans framework : menu mobile, défilement vers les sections et état de l'en-tête.",
  },
];

const quality = [
  "CSS Tailwind compilé et minifié en un seul fichier.",
  "Environ 150 lignes de JavaScript, sans framework.",
  "Hébergement statique sur Vercel.",
];

export default function CaseStudyPage() {
  const siteUrl = getSiteUrl();

  return (
    <CaseStudy
      data={{
        title: project.title,
        lead: "Une landing page pour ConcoursElite, un service de préparation aux concours de la fonction publique burkinabè : promesse claire, parcours par profil, méthode, tarifs et inscription.",
        meta: [
          { label: "Rôle", value: "Conception et développement" },
          { label: "Stack", value: "HTML, Tailwind CSS, JavaScript" },
          { label: "Contexte", value: "Page statique, sans serveur" },
        ],
        demoUrl: project.link,
        codeUrl: project.github,
        note: "Le formulaire d'inscription est pour l'instant une maquette : il n'envoie pas encore de message.",
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
