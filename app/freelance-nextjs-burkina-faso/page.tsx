import type { Metadata } from "next";

import SeoLandingPage from "@/app/components/SeoLandingPage";
import { siteConfig } from "@/app/site-config";

const pageTitle = `Freelance Next.js au Burkina Faso | ${siteConfig.name}`;
const pageDescription =
  `Freelance Next.js basé à ${siteConfig.city}, ${siteConfig.country}. Landing pages, sites performants, SEO technique de base et interfaces web connectées.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/freelance-nextjs-burkina-faso",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/freelance-nextjs-burkina-faso",
    siteName: siteConfig.name,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-image"],
  },
};

export default function NextJsFreelancePage() {
  return (
    <SeoLandingPage
      eyebrow="Freelance Next.js"
      title={
        <>
          FREELANCE
          <br />
          NEXT.JS
          <br />
          AU BURKINA FASO
        </>
      }
      description={`Je développe des sites et interfaces Next.js depuis ${siteConfig.location}, avec un travail ciblé sur la performance perçue, la clarté du frontend et une base technique simple à faire évoluer.`}
      sections={[
        {
          title: "Pourquoi choisir Next.js ?",
          paragraphs: [
            "Next.js est pertinent quand il faut un site rapide, bien structuré et prêt à grandir sans changer toute la base plus tard. Il convient très bien aux landing pages, sites vitrines premium, interfaces web connectées et projets React qui veulent une structure plus solide.",
            "Dans un cadre freelance, l'intérêt est aussi de livrer un projet plus propre dès le départ : routage clair, bonnes bases SEO, optimisation des assets et organisation front plus maintenable.",
          ],
        },
        {
          title: "Les missions les plus adaptées",
          paragraphs: [
            "Je recommande surtout Next.js quand le projet a besoin de vitesse d'affichage, d'une bonne structure de pages et d'un front facile à reprendre. C'est moins une question de tendance qu'une question de pertinence pour le type de site ou d'outil à construire.",
          ],
          points: [
            "Landing page orientée acquisition ou prise de contact",
            "Site vitrine moderne avec contenu bien structure",
            "Interface connectée à une API, un CMS ou une base de données",
            "Refonte d'un frontend React vers une base plus propre",
          ],
        },
        {
          title: "Ma façon de travailler",
          paragraphs: [
            "Je travaille sur un périmètre frontend clair : structure, composants, responsive, intégration et connection aux données. L'objectif n'est pas de vendre trop large, mais de livrer un résultat fiable sur le bon périmètre.",
            `Depuis ${siteConfig.city}, j'accompagne des projets locaux ou à distance avec la même logique : échanges simples, délais clarifies et decisions concrètes sur le rendu final.`,
          ],
        },
      ]}
      highlights={[
        { label: "Localisation", value: siteConfig.location },
        { label: "Stack", value: "Next.js, React, TypeScript, SEO technique de base" },
        { label: "Formats", value: "Landing pages, sites vitrines, interfaces web" },
        { label: "Objectif", value: "Performance, clarté, maintenance" },
      ]}
      relatedLinks={[
        { href: "/developpeur-react-burkina-faso", label: "Développeur React" },
        { href: "/refonte-frontend-react", label: "Refonte frontend" },
        { href: "/#projets", label: "Voir les projets" },
      ]}
      ctaTitle={
        <>
          UN SITE NEXT.JS
          <br />
          À LANCER ?
        </>
      }
      ctaText="Si vous avez besoin d'un site rapide, d'une refonte frontend ou d'une interface connectée en Next.js, je peux vous proposer un cadrage simple puis une exécution propre."
      primaryCtaHref="/#contact"
      primaryCtaLabel="Demander un devis"
      secondaryCtaHref="/#projets"
      secondaryCtaLabel="Voir les projets"
    />
  );
}
