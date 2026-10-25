import type { Metadata } from "next";

import SeoLandingPage from "@/app/components/SeoLandingPage";
import { siteConfig } from "@/app/site-config";

const pageTitle = `Développeur React a ${siteConfig.city}, ${siteConfig.country} | ${siteConfig.name}`;
const pageDescription =
  `Développeur React freelance à ${siteConfig.city}, ${siteConfig.country}. Interfaces web rapides, dashboards, landing pages et refontes frontend React / Next.js.`;

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
      eyebrow="Développeur React"
      title={
        <>
          DÉVELOPPEUR
          <br />
          REACT
          <br />
          AU BURKINA FASO
        </>
      }
      description={`Je conçois des interfaces React et Next.js depuis ${siteConfig.location}, pour des entreprises, porteurs de projet et équipes qui veulent un frontend rapide, clair et maintenable.`}
      sections={[
        {
          title: "Quand faire appel à un développeur React ?",
          paragraphs: [
            "React est une bonne option quand le projet demande une interface dynamique, des composants réutilisables et une base front claire à faire évoluer. C'est le cas pour un dashboard, un espace client, un site interactif ou une interface métier reliee a une API.",
            `Depuis ${siteConfig.city}, j'interviens sur des missions React orientées exécution : intégration de maquettes, structuration des composants, formulaires, affichage de données et amélioration du responsive.`,
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
            "Le but n'est pas seulement d'avoir un rendu propre. Le front doit aussi être lisible, réutilisable et simple à reprendre. Je travaille donc autant la structure des composants que la finition visuelle et les parcours utiles.",
          ],
          points: [
            "Intégration de maquettes Figma en composants",
            "Connexion à une API ou à une base de données",
            "Responsive desktop / mobile sans effet bricolage",
            "Refonte d'écrans existants sans repartir de zero",
          ],
        },
        {
          title: "Pourquoi un positionnement local compte",
          paragraphs: [
            `Être basé à ${siteConfig.city}, au Burkina Faso, me permet aussi de parler le même contexte que des porteurs de projet locaux : budget, délais, niveau de maturite produit et besoin de simplicite dans les échanges.`,
            "Je peux intervenir localement ou à distance, mais avec un cadre clair : objectifs, priorités, rendu attendu et points de validation utiles. C'est souvent ce qui fait gagner le plus de temps sur un projet frontend.",
          ],
        },
      ]}
      highlights={[
        { label: "Localisation", value: siteConfig.location },
        { label: "Stack", value: "React, Next.js, TypeScript, Tailwind CSS" },
        { label: "Missions", value: "Landing pages, dashboards, interfaces web connectées" },
        { label: "Mode", value: "Local ou à distance" },
      ]}
      relatedLinks={[
        { href: "/freelance-nextjs-burkina-faso", label: "Freelance Next.js" },
        { href: "/refonte-frontend-react", label: "Refonte frontend" },
        { href: "/#projets", label: "Voir les projets" },
      ]}
      ctaTitle={
        <>
          UN FRONTEND
          <br />
          À FAIRE AVANCER ?
        </>
      }
      ctaText="Si vous avez un besoin React ou Next.js, je peux cadrer rapidement le périmètre, proposer une base claire et livrer une interface exploitable sans complexité inutile."
      primaryCtaHref="/#contact"
      primaryCtaLabel="Me contacter"
      secondaryCtaHref="/#projets"
      secondaryCtaLabel="Voir les projets"
    />
  );
}
