import type { Metadata } from "next";

import SeoLandingPage from "@/app/components/SeoLandingPage";
import { siteConfig } from "@/app/site-config";

const pageTitle = `Developpeur React a ${siteConfig.city}, ${siteConfig.country} | ${siteConfig.name}`;
const pageDescription =
  `Developpeur React freelance a ${siteConfig.city}, ${siteConfig.country}. Interfaces web rapides, dashboards, landing pages et refontes frontend React / Next.js.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/developpeur-react-burkina-faso",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/developpeur-react-burkina-faso",
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

export default function ReactDeveloperPage() {
  return (
    <SeoLandingPage
      eyebrow="Developpeur React"
      title={
        <>
          DEVELOPPEUR
          <br />
          REACT
          <br />
          AU BURKINA FASO
        </>
      }
      description={`Je conçois des interfaces React et Next.js depuis ${siteConfig.location}, pour des entreprises, porteurs de projet et equipes qui veulent un frontend rapide, clair et maintenable.`}
      sections={[
        {
          title: "Quand faire appel a un developpeur React ?",
          paragraphs: [
            "React est une bonne option quand le projet demande une interface dynamique, des composants reutilisables et une base front claire a faire evoluer. C'est le cas pour un dashboard, un espace client, un site interactif ou une interface metier reliee a une API.",
            `Depuis ${siteConfig.city}, j'interviens sur des missions React orientees execution : integration de maquettes, structuration des composants, formulaires, affichage de donnees et amelioration du responsive.`,
          ],
          points: [
            "Landing pages et sites interactifs en React / Next.js",
            "Dashboards, espaces utilisateurs et interfaces CRUD",
            "Refonte frontend pour clarifier l'UX et la maintenance",
          ],
        },
        {
          title: "Ce que je peux livrer",
          paragraphs: [
            "Le but n'est pas seulement d'avoir un rendu propre. Le front doit aussi etre lisible, reutilisable et simple a reprendre. Je travaille donc autant la structure des composants que la finition visuelle et les parcours utiles.",
          ],
          points: [
            "Integration de maquettes Figma en composants",
            "Connexion a une API ou a une base de donnees",
            "Responsive desktop / mobile sans effet bricolage",
            "Refonte d'ecrans existants sans repartir de zero",
          ],
        },
        {
          title: "Pourquoi un positionnement local compte",
          paragraphs: [
            `Etre base a ${siteConfig.city}, au Burkina Faso, me permet aussi de parler le meme contexte que des porteurs de projet locaux : budget, delais, niveau de maturite produit et besoin de simplicite dans les echanges.`,
            "Je peux intervenir localement ou a distance, mais avec un cadre clair : objectifs, priorites, rendu attendu et points de validation utiles. C'est souvent ce qui fait gagner le plus de temps sur un projet frontend.",
          ],
        },
      ]}
      highlights={[
        { label: "Localisation", value: siteConfig.location },
        { label: "Stack", value: "React, Next.js, TypeScript, Tailwind CSS" },
        { label: "Missions", value: "Landing pages, dashboards, interfaces web connectees" },
        { label: "Mode", value: "Local ou a distance" },
      ]}
      relatedLinks={[
        { href: "/freelance-nextjs-burkina-faso", label: "Freelance Next.js" },
        { href: "/refonte-frontend-react", label: "Refonte frontend" },
        { href: "/projets", label: "Voir les projets" },
      ]}
      ctaTitle={
        <>
          UN FRONTEND
          <br />
          A FAIRE AVANCER ?
        </>
      }
      ctaText="Si vous avez un besoin React ou Next.js, je peux cadrer rapidement le perimetre, proposer une base claire et livrer une interface exploitable sans complexite inutile."
      primaryCtaHref="/#contact"
      primaryCtaLabel="Me contacter"
      secondaryCtaHref="/projets"
      secondaryCtaLabel="Voir les projets"
    />
  );
}
