import type { Metadata } from "next";

import SeoLandingPage from "@/app/components/SeoLandingPage";
import { siteConfig } from "@/app/site-config";

const pageTitle = `Freelance Next.js au Burkina Faso | ${siteConfig.name}`;
const pageDescription =
  `Freelance Next.js base a ${siteConfig.city}, ${siteConfig.country}. Landing pages, sites performants, SEO technique de base et interfaces web connectees.`;

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
      description={`Je developpe des sites et interfaces Next.js depuis ${siteConfig.location}, avec un travail cible sur la performance percue, la clarte du frontend et une base technique simple a faire evoluer.`}
      sections={[
        {
          title: "Pourquoi choisir Next.js ?",
          paragraphs: [
            "Next.js est pertinent quand il faut un site rapide, bien structure et pret a grandir sans changer toute la base plus tard. Il convient tres bien aux landing pages, sites vitrines premium, interfaces web connectees et projets React qui veulent une structure plus solide.",
            "Dans un cadre freelance, l'interet est aussi de livrer un projet plus propre des le depart : routage clair, bonnes bases SEO, optimisation des assets et organisation front plus maintenable.",
          ],
        },
        {
          title: "Les missions les plus adaptees",
          paragraphs: [
            "Je recommande surtout Next.js quand le projet a besoin de vitesse d'affichage, d'une bonne structure de pages et d'un front facile a reprendre. C'est moins une question de tendance qu'une question de pertinence pour le type de site ou d'outil a construire.",
          ],
          points: [
            "Landing page orientee acquisition ou prise de contact",
            "Site vitrine moderne avec contenu bien structure",
            "Interface connectee a une API, un CMS ou une base de donnees",
            "Refonte d'un frontend React vers une base plus propre",
          ],
        },
        {
          title: "Ma facon de travailler",
          paragraphs: [
            "Je travaille sur un perimetre frontend clair : structure, composants, responsive, integration et connection aux donnees. L'objectif n'est pas de vendre trop large, mais de livrer un resultat fiable sur le bon perimetre.",
            `Depuis ${siteConfig.city}, j'accompagne des projets locaux ou a distance avec la meme logique : echanges simples, delais clarifies et decisions concretes sur le rendu final.`,
          ],
        },
      ]}
      highlights={[
        { label: "Localisation", value: siteConfig.location },
        { label: "Stack", value: "Next.js, React, TypeScript, SEO technique de base" },
        { label: "Formats", value: "Landing pages, sites vitrines, interfaces web" },
        { label: "Objectif", value: "Performance, clarte, maintenance" },
      ]}
      relatedLinks={[
        { href: "/developpeur-react-burkina-faso", label: "Developpeur React" },
        { href: "/refonte-frontend-react", label: "Refonte frontend" },
        { href: "/projets", label: "Voir les projets" },
      ]}
      ctaTitle={
        <>
          UN SITE NEXT.JS
          <br />
          A LANCER ?
        </>
      }
      ctaText="Si vous avez besoin d'un site rapide, d'une refonte frontend ou d'une interface connectee en Next.js, je peux vous proposer un cadrage simple puis une execution propre."
      primaryCtaHref="/#contact"
      primaryCtaLabel="Demander un devis"
      secondaryCtaHref="/projets"
      secondaryCtaLabel="Voir les projets"
    />
  );
}
