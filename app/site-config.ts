export const siteConfig = {
  name: "Albert Sama",
  title: "Albert Sama | Développeur Frontend React et Next.js",
  description:
    "Portfolio de Albert Sama, développeur frontend React et Next.js pour landing pages, sites web interactifs, refontes frontend et interfaces web connectées.",
  locale: "fr_FR",
  email: "albertsama07@gmail.com",
  github: "https://github.com/XAlbert07",
  linkedin: "https://www.linkedin.com/in/albert-sama-299a51193",
  googleSiteVerification: "p_WegwepbY4e2itI27wzbKwMqywowA2v1gYFoIzWSgY",
  location: "Ouagadougou, Burkina Faso",
  keywords: [
    "developpeur frontend",
    "developpeur React",
    "developpeur Next.js",
    "portfolio developpeur frontend",
    "React Burkina Faso",
    "Next.js Burkina Faso",
    "integration maquette Figma",
    "landing page React",
    "freelance frontend",
  ],
} as const;

export function getSiteUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;

  if (!envUrl) {
    return "http://localhost:3000";
  }

  return envUrl.startsWith("http") ? envUrl : `https://${envUrl}`;
}
