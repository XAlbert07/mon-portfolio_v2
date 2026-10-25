import Portfolio from "@/app/components/Portfolio";
import { projects } from "@/app/data/projects";
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
        jobTitle: "Développeur React et Next.js freelance",
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
          "Intégration de maquettes",
          "Refonte frontend",
          "Interfaces web connectées",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: `${siteConfig.name} - Développeur React & Next.js`,
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
          "Intégration de maquettes",
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
        "@type": "ItemList",
        "@id": `${siteUrl}/#projects`,
        name: "Projets",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: project.slug ? `${siteUrl}/projets/${project.slug}` : project.link,
        })),
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
