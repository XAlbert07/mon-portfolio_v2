export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  id: number;
  number: string;
  title: string;
  tag: string;
  desc: string;
  challenge: string;
  outcome: string;
  deliverables: string[];
  stack: string[];
  link: string;
  github?: string;
  /** Slug de la page d'étude de cas (/projets/[slug]), si elle existe. */
  slug?: string;
  /** Chiffres clés affichés sur le projet phare. */
  facts?: { value: string; label: string }[];
  /** Captures affichées sur l'accueil (la première est la principale). */
  screenshots?: ProjectImage[];
};

export const projects: Project[] = [
  {
    id: 4,
    number: "01",
    title: "Gestion de Stock",
    tag: "Application Web",
    desc: "Application de gestion de stock et de ventes pour un petit commerce : catalogue, réceptions, ventes, retours et inventaires, en FCFA.",
    challenge:
      "Garder un stock toujours exact : chaque entrée et sortie doit être tracée, avec des unités multiples (bouteille, carton, sac) et un coût moyen recalculé.",
    outcome:
      "Une application complète, de l'API PostgreSQL à l'interface, avec une démo en un clic en lecture seule, des tests automatisés et un déploiement continu.",
    deliverables: ["Mouvements de stock tracés", "Ventes et retours clients", "Démo en lecture seule"],
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    link: "https://gestion-stock-pied-three.vercel.app",
    github: "https://github.com/XAlbert07/gestion-stock",
    slug: "gestion-stock",
    facts: [
      { value: "35", label: "produits dans la démo" },
      { value: "~400", label: "ventes simulées sur 5 semaines" },
      { value: "2", label: "suites de tests + CI GitHub Actions" },
    ],
    screenshots: [
      {
        src: "/projets/gestion-stock-tableau-de-bord.webp",
        alt: "Tableau de bord de Gestion de Stock : produits actifs, ruptures, stocks faibles et activité des 7 derniers jours",
        width: 1200,
        height: 720,
      },
      {
        src: "/projets/gestion-stock-ventes.webp",
        alt: "Liste des ventes de Gestion de Stock, brouillons et ventes validées",
        width: 1200,
        height: 720,
      },
      {
        src: "/projets/gestion-stock-stock.webp",
        alt: "Page Stock de Gestion de Stock : niveaux, alertes et historique des mouvements",
        width: 1200,
        height: 720,
      },
    ],
  },
  {
    id: 1,
    number: "02",
    title: "FasoMarket",
    tag: "Application Web",
    desc: "Plateforme de petites annonces pour le Burkina Faso : messagerie en temps réel, avis liés à de vrais échanges, modération et application Android.",
    challenge:
      "Offrir une alternative numérique à la vente entre particuliers, simple à utiliser mais fiable : avis crédibles, modération et fluidité sur mobile.",
    outcome:
      "Une plateforme complète en ligne, installable en PWA et empaquetée en application Android, avec un espace d'administration en 5 sections.",
    deliverables: ["Messagerie temps réel", "Avis fiables", "PWA et Android"],
    stack: ["React", "TypeScript", "Tailwind", "Supabase"],
    link: "https://faso-market.vercel.app/",
    github: "https://github.com/XAlbert07/FasoMarket",
    slug: "fasomarket",
  },
  {
    id: 2,
    number: "03",
    title: "Site Vitrine Restaurant",
    tag: "Site Vitrine",
    desc: "Site web pour un restaurant gastronomique avec menu interactif et système de réservation.",
    challenge: "Valoriser l'identité du restaurant et simplifier la réservation depuis mobile comme desktop.",
    outcome:
      "Une navigation directe, un univers plus lisible et un site centré sur les actions utiles : consulter, choisir, réserver.",
    deliverables: ["Menu interactif", "Parcours de réservation", "Responsive premium"],
    stack: ["HTML", "CSS", "Tailwind", "JavaScript"],
    link: "https://restaurant-site-henna.vercel.app/",
  },
  {
    id: 3,
    number: "04",
    title: "Landing Page Concours",
    tag: "Landing Page",
    desc: "Page d'atterrissage pour une plateforme de préparation aux concours, design simple et fluide.",
    challenge: "Présenter une offre pédagogique de manière rapide, claire et orientée conversion.",
    outcome:
      "Une landing page légère, structurée et efficace pour capter l'attention puis pousser à la prise de contact.",
    deliverables: ["Message clarifié", "Sections courtes", "Chargement rapide"],
    stack: ["HTML", "CSS", "Tailwind", "JavaScript"],
    link: "https://landing-page-c6efbe5g5-alberts-projects-394db913.vercel.app/",
  },
];
