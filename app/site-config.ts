export const siteConfig = {
  name: "Albert Sama",
  title: "Développeur React & Next.js à Koudougou, Burkina Faso | Albert Sama",
  description:
    "Albert Sama, développeur React & Next.js basé à Koudougou, Burkina Faso. Landing pages, sites web interactifs, refontes frontend et interfaces web connectées.",
  locale: "fr_FR",
  email: "albertsama07@gmail.com",
  github: "https://github.com/XAlbert07",
  linkedin: "https://www.linkedin.com/in/albert-sama-299a51193",
  googleSiteVerification: "p_WegwepbY4e2itI27wzbKwMqywowA2v1gYFoIzWSgY",
  city: "Koudougou",
  country: "Burkina Faso",
  countryCode: "BF",
  location: "Koudougou, Burkina Faso",
  keywords: [
    "developpeur frontend",
    "developpeur React",
    "developpeur Next.js",
    "portfolio developpeur frontend",
    "developpeur react burkina faso",
    "developpeur nextjs burkina faso",
    "developpeur react koudougou",
    "developpeur web koudougou",
    "freelance nextjs burkina faso",
    "refonte frontend react",
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
