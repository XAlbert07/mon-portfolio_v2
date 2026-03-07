import Portfolio from "@/app/components/Portfolio";
import { getSiteUrl, siteConfig } from "@/app/site-config";

export default function Home() {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: siteConfig.name,
        url: siteUrl,
        jobTitle: "Developpeur frontend React et Next.js",
        description: siteConfig.description,
        email: siteConfig.email,
        sameAs: [siteConfig.github, siteConfig.linkedin],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ouagadougou",
          addressCountry: "BF",
        },
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Integration de maquettes",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: "fr",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: "fr",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#person`,
        },
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        <Portfolio />
      </main>
    </>
  );
}
