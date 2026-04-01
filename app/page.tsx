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
        jobTitle: "Developpeur React et Next.js freelance",
        description: siteConfig.description,
        email: siteConfig.email,
        sameAs: [siteConfig.github, siteConfig.linkedin],
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.city,
          addressCountry: siteConfig.countryCode,
        },
        homeLocation: {
          "@type": "Place",
          name: siteConfig.location,
        },
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Integration de maquettes",
          "Refonte frontend",
          "Interfaces web connectees",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: `${siteConfig.name} - Developpeur React & Next.js`,
        url: siteUrl,
        description: siteConfig.description,
        areaServed: [
          {
            "@type": "City",
            name: siteConfig.city,
          },
          {
            "@type": "Country",
            name: siteConfig.country,
          },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.city,
          addressCountry: siteConfig.countryCode,
        },
        provider: {
          "@id": `${siteUrl}/#person`,
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
          "@id": `${siteUrl}/#service`,
        },
        mainEntity: {
          "@id": `${siteUrl}/#service`,
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
