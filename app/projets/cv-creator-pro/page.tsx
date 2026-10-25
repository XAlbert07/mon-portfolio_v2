import type { Metadata } from "next";
import CaseStudy from "@/app/components/CaseStudy";
import { projects } from "@/app/data/projects";
import { galleryIfExists, shotIfExists } from "@/app/lib/case-assets";
import { getSiteUrl, siteConfig } from "@/app/site-config";

const project = projects.find((item) => item.slug === "cv-creator-pro")!;
const pagePath = "/projets/cv-creator-pro";
const pageTitle = `CV Creator Pro : étude de cas d'un générateur de CV en React | ${siteConfig.name}`;
const pageDescription =
  "Étude de cas de CV Creator Pro, un générateur de CV gratuit et sans inscription : 22 modèles, aperçu en direct, export PDF et Word, données gardées dans le navigateur.";

const heroShot = shotIfExists(
  "cv-creator-editeur.webp",
  "Éditeur de CV Creator Pro : choix parmi 22 modèles et aperçu en direct d'un CV d'exemple",
);

const gallery = galleryIfExists([
  {
    file: "cv-creator-accueil.webp",
    alt: "Page d'accueil de CV Creator Pro : créer un CV professionnel en quelques minutes",
    caption: "Accueil : gratuit, sans inscription, 22 modèles.",
  },
  {
    file: "cv-creator-assistant.webp",
    alt: "Assistant de CV Creator Pro : choix du type de poste parmi dix profils",
    caption: "Assistant : dix profils métier qui règlent modèle, sections et exemples.",
  },
  {
    file: "cv-creator-apercu.webp",
    alt: "Aperçu plein écran d'un CV d'exemple dans CV Creator Pro",
    caption: "Aperçu plein écran avec zoom.",
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
  "Je voulais un générateur de CV simple, gratuit et respectueux de la vie privée : pas de compte, pas de serveur, et un résultat propre à envoyer à un recruteur.",
  "Le défi technique : proposer 22 mises en page différentes à partir des mêmes données, et les exporter correctement, en PDF (impression A4 ou texte lisible par les logiciels de recrutement) comme en Word.",
];

const features = [
  "22 modèles (classique, créatif, ATS, médical, juridique, étudiant, freelance…) avec aperçu en temps réel.",
  "Assistant de départ : dix profils métier qui règlent le modèle, les sections et les exemples.",
  "Formulaire par sections : profil, expériences, formation, compétences, langues, projets et certifications.",
  "Photo avec recadrage, et indicateur de complétion du CV.",
  "Réorganisation des sections par glisser-déposer.",
  "Plusieurs versions du CV, par exemple une par poste visé, enregistrées dans le navigateur.",
  "Export en PDF à imprimer (A4), en PDF « ATS » à texte sélectionnable, ou en DOCX modifiable.",
  "Sauvegarde et import des versions en JSON, thème clair ou sombre, interface adaptée au mobile.",
];

const decisions = [
  {
    title: "Aucune donnée ne quitte le navigateur",
    text: "L'application n'a pas de serveur. Les versions du CV sont enregistrées dans le navigateur, et l'export JSON permet de les sauvegarder ou de les déplacer vers un autre appareil.",
  },
  {
    title: "Un modèle, un composant chargé à la demande",
    text: "Les 22 modèles reçoivent les mêmes données et sont déclarés dans un registre en chargement différé. Ajouter un modèle revient à écrire un composant et une ligne de registre, sans alourdir le chargement initial.",
  },
  {
    title: "Trois exports pour trois usages",
    text: "L'impression A4 donne la meilleure fidélité visuelle. Le PDF « ATS » est construit en texte avec jsPDF, avec liens cliquables, pour les logiciels de tri de candidatures. Le DOCX est généré avec la bibliothèque docx, chargée seulement au moment de l'export.",
  },
  {
    title: "Des données relues avec prudence",
    text: "Au chargement, chaque version enregistrée est normalisée : champs manquants, anciens formats ou fichier importé incomplet ne font pas planter l'application.",
  },
  {
    title: "L'ordre des sections est une donnée",
    text: "Chaque version mémorise l'ordre de ses sections, que tous les modèles respectent. Le glisser-déposer fonctionne donc avec n'importe quel modèle.",
  },
];

const architecture = [
  { step: "01", name: "Interface", text: "React et TypeScript, avec une page d'accueil et un éditeur." },
  { step: "02", name: "État", text: "Versions du CV dans le navigateur, normalisées à la lecture." },
  { step: "03", name: "Modèles", text: "22 composants chargés à la demande via un registre." },
  { step: "04", name: "Export", text: "Impression A4, PDF texte avec jsPDF, Word avec docx." },
];

const quality = [
  "TypeScript et ESLint sur l'ensemble du code.",
  "Chargement différé des modèles et de la bibliothèque Word pour garder un démarrage rapide.",
  "Configuration Vercel avec repli sur index.html pour le routage côté navigateur.",
];

export default function CaseStudyPage() {
  const siteUrl = getSiteUrl();

  return (
    <CaseStudy
      data={{
        title: project.title,
        lead: "Un générateur de CV gratuit et sans inscription : 22 modèles, aperçu en temps réel et export en PDF ou Word, avec des données qui restent dans le navigateur.",
        meta: [
          { label: "Rôle", value: "Conception et développement complets" },
          { label: "Stack", value: "React, TypeScript, Vite, Tailwind, shadcn/ui" },
          { label: "Contexte", value: "Application 100 % côté navigateur, sans serveur" },
        ],
        demoUrl: project.link,
        codeUrl: project.github,
        note: "Les captures utilisent le CV d'exemple intégré à l'application, accessible par « Remplir un exemple ».",
        heroShot,
        challenge: challenge,
        features,
        decisions,
        gallery,
        architecture,
        qualityTitle: "QUALITÉ ET MISE EN LIGNE",
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
