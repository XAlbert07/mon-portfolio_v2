import type { Metadata } from "next";

import SeoLandingPage from "@/app/components/SeoLandingPage";
import { siteConfig } from "@/app/site-config";

const pageTitle = `Refonte frontend React | ${siteConfig.name}`;
const pageDescription =
  "Refonte frontend React et Next.js : amelioration UI, responsive, lisibilite, parcours utilisateur et base front maintenable.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/refonte-frontend-react",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/refonte-frontend-react",
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

export default function FrontendRefontePage() {
  return (
    <SeoLandingPage
      eyebrow="Refonte frontend"
      title={
        <>
          REFONTE
          <br />
          FRONTEND
          <br />
          REACT
        </>
      }
      description="Une refonte frontend sert a remettre de l'ordre dans un site ou une interface devenue confuse, lourde ou difficile a faire evoluer. L'objectif est d'ameliorer l'experience, pas seulement de changer les couleurs."
      sections={[
        {
          title: "Ce qu'une refonte frontend peut corriger",
          paragraphs: [
            "Beaucoup de sites ont surtout un probleme de clarte : hierarchie visuelle faible, responsive casse, parcours mal pense, composants disperses ou styles difficiles a maintenir. Une bonne refonte frontend cible ces points avant de penser au simple habillage.",
            "Avec React ou Next.js, la refonte peut aussi servir a remettre de l'ordre dans la structure des composants et a simplifier la maintenance future.",
          ],
          points: [
            "UI plus lisible et plus coherente",
            "Responsive mieux maitrise sur mobile",
            "Composants et styles plus simples a reprendre",
            "Parcours utilisateurs plus directs",
          ],
        },
        {
          title: "Quand la refonte vaut vraiment le coup",
          paragraphs: [
            "Je recommande une refonte frontend quand le projet existe deja mais que l'interface freine la conversion, donne une image vieillissante ou ralentit les evolutions. C'est souvent plus rentable qu'une reconstruction complete si la base fonctionnelle reste valable.",
          ],
        },
        {
          title: "Mon perimetre d'intervention",
          paragraphs: [
            "Je travaille sur l'interface, la structure visuelle, les composants, le responsive et les finitions utiles. Si le projet utilise deja React ou Next.js, je peux intervenir sans repartir de zero et remettre le frontend sur de meilleures bases.",
            `Depuis ${siteConfig.location}, j'accompagne ce type de mission avec un audit visuel rapide, une priorisation claire et une execution centree sur ce qui a un vrai impact.`,
          ],
        },
      ]}
      highlights={[
        { label: "Intervention", value: "Refonte UI, responsive, composants, parcours" },
        { label: "Stack", value: "React, Next.js, Tailwind CSS, TypeScript" },
        { label: "Contexte", value: "Site existant ou interface a clarifier" },
        { label: "Zone", value: `${siteConfig.city} et a distance` },
      ]}
      relatedLinks={[
        { href: "/developpeur-react-burkina-faso", label: "Developpeur React" },
        { href: "/freelance-nextjs-burkina-faso", label: "Freelance Next.js" },
        { href: "/projets", label: "Voir les projets" },
      ]}
      ctaTitle={
        <>
          UNE INTERFACE
          <br />
          A REMETTRE AU PROPRE ?
        </>
      }
      ctaText="Si votre frontend existe deja mais manque de clarte, de coherence ou de finition mobile, je peux cadrer une refonte simple et utile."
      primaryCtaHref="/#contact"
      primaryCtaLabel="Parler de la refonte"
      secondaryCtaHref="/projets"
      secondaryCtaLabel="Voir les projets"
    />
  );
}
