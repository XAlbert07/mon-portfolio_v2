import type { Metadata } from "next";

import SeoLandingPage from "@/app/components/SeoLandingPage";
import { siteConfig } from "@/app/site-config";

const pageTitle = `Refonte frontend React | ${siteConfig.name}`;
const pageDescription =
  "Refonte frontend React et Next.js : amélioration UI, responsive, lisibilité, parcours utilisateur et base front maintenable.";

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
      description="Une refonte frontend sert à remettre de l'ordre dans un site ou une interface devenue confuse, lourde ou difficile à faire évoluer. L'objectif est d'améliorer l'expérience, pas seulement de changer les couleurs."
      sections={[
        {
          title: "Ce qu'une refonte frontend peut corriger",
          paragraphs: [
            "Beaucoup de sites ont surtout un problème de clarté : hiérarchie visuelle faible, responsive cassé, parcours mal pensé, composants dispersés ou styles difficiles à maintenir. Une bonne refonte frontend cible ces points avant de penser au simple habillage.",
            "Avec React ou Next.js, la refonte peut aussi servir à remettre de l'ordre dans la structure des composants et à simplifier la maintenance future.",
          ],
          points: [
            "UI plus lisible et plus cohérente",
            "Responsive mieux maîtrisé sur mobile",
            "Composants et styles plus simples à reprendre",
            "Parcours utilisateurs plus directs",
          ],
        },
        {
          title: "Quand la refonte vaut vraiment le coup",
          paragraphs: [
            "Je recommande une refonte frontend quand le projet existe déjà mais que l'interface freine la conversion, donne une image vieillissante ou ralentit les évolutions. C'est souvent plus rentable qu'une reconstruction complete si la base fonctionnelle reste valable.",
          ],
        },
        {
          title: "Mon périmètre d'intervention",
          paragraphs: [
            "Je travaille sur l'interface, la structure visuelle, les composants, le responsive et les finitions utiles. Si le projet utilise déjà React ou Next.js, je peux intervenir sans repartir de zero et remettre le frontend sur de meilleures bases.",
            `Depuis ${siteConfig.location}, j'accompagne ce type de mission avec un audit visuel rapide, une priorisation claire et une exécution centrée sur ce qui a un vrai impact.`,
          ],
        },
      ]}
      highlights={[
        { label: "Intervention", value: "Refonte UI, responsive, composants, parcours" },
        { label: "Stack", value: "React, Next.js, Tailwind CSS, TypeScript" },
        { label: "Contexte", value: "Site existant ou interface à clarifier" },
        { label: "Zone", value: `${siteConfig.city} et à distance` },
      ]}
      relatedLinks={[
        { href: "/developpeur-react-burkina-faso", label: "Développeur React" },
        { href: "/freelance-nextjs-burkina-faso", label: "Freelance Next.js" },
        { href: "/#projets", label: "Voir les projets" },
      ]}
      ctaTitle={
        <>
          UNE INTERFACE
          <br />
          À REMETTRE AU PROPRE ?
        </>
      }
      ctaText="Si votre frontend existe déjà mais manque de clarté, de cohérence ou de finition mobile, je peux cadrer une refonte simple et utile."
      primaryCtaHref="/#contact"
      primaryCtaLabel="Parler de la refonte"
      secondaryCtaHref="/#projets"
      secondaryCtaLabel="Voir les projets"
    />
  );
}
