import type { Metadata } from "next";
import Link from "next/link";
import ProjectsGrid from "@/app/components/ProjectsGrid";
import { projects } from "@/app/data/projects";
import { getSiteUrl, siteConfig } from "@/app/site-config";

const pageTitle = `Projets | ${siteConfig.name}`;
const pageDescription =
  "Selection de projets frontend React et Next.js : landing pages, sites vitrines, interfaces web connectees et refontes frontend.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/projets",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/projets",
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

export default function ProjectsPage() {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/projets/#webpage`,
    url: `${siteUrl}/projets`,
    name: pageTitle,
    description: pageDescription,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: project.link,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content" className="portfolio-page min-h-screen overflow-x-hidden bg-[#0a0a0a] text-[#f0ede6]">
        <section className="projects-page-hero">
          <div className="mx-auto max-w-[1100px]">
            <div className="projects-page-topbar">
              <Link href="/" className="nav-brand">
                ALBERT<span className="text-[#c8f04a]">.</span>
              </Link>

              <div className="projects-page-links">
                <Link href="/" className="projects-page-link">
                  Accueil
                </Link>
                <Link href="/#contact" className="cta-btn px-5 py-2.5 text-xs">
                  Me contacter
                </Link>
              </div>
            </div>

            <div className="projects-page-intro">
              <p className="font-mono-custom mb-4 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]">
                Selection complete
              </p>
              <h1 className="font-display mb-6 text-[clamp(52px,8vw,112px)] leading-none">
                PROJETS
              </h1>
              <p className="projects-page-copy">
                Landing pages, sites vitrines, interfaces web connectees et refontes frontend construites avec une
                logique claire, un rendu propre et une base maintenable.
              </p>
            </div>
          </div>
        </section>

        <section className="page-section projects-section">
          <div className="mx-auto max-w-[1100px]">
            <ProjectsGrid projects={projects} showCasesOnMobile mobileDeliverablesLimit={3} />
          </div>
        </section>

        <section className="compact-section">
          <div className="mx-auto max-w-[1100px] projects-page-cta">
            <div>
              <p className="font-mono-custom mb-4 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]">
                Suite
              </p>
              <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-none">
                UN PROJET
                <br />
                A LANCER ?
              </h2>
            </div>

            <div className="projects-page-cta-actions">
              <Link href="/#contact" className="cta-btn">
                Discuter de votre projet
              </Link>
              <Link href="/" className="ghost-btn">
                Retour a l&apos;accueil
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

