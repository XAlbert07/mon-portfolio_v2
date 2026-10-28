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
  /** Site en ligne (absent tant que le projet n'est pas déployé). */
  link?: string;
  github?: string;
  /** Slug de la page d'étude de cas (/projets/[slug]), si elle existe. */
  slug?: string;
  /** Chiffres clés affichés sur le projet phare. */
  facts?: { value: string; label: string }[];
  /** Vignette affichée sur la carte compacte de l'accueil. */
  thumb?: ProjectImage;
  /** Vignette ajoutée automatiquement si le fichier existe dans public/projets (voir withThumbs). */
  autoThumb?: { file: string; alt: string };
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
    id: 7,
    number: "02",
    title: "Générateur de Devis et Factures",
    tag: "Application Web",
    desc: "Application pour créer des devis, les convertir en factures numérotées, suivre les paiements et produire des PDF figés, en F CFA.",
    challenge:
      "Garantir des montants exacts, une numérotation sans trou et des documents qui ne changent plus une fois envoyés, avec plusieurs entreprises isolées.",
    outcome:
      "Une application complète avec calculs sans nombres flottants, documents immuables et vérifiables, environ 80 tests et une démo accessible en un clic.",
    deliverables: ["Calculs monétaires exacts", "Documents immuables", "Démo en un clic"],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "https://generateur-devis-facture.vercel.app/login",
    github: "https://github.com/XAlbert07/generateur-devis-facture",
    slug: "devis-facture",
    thumb: {
      src: "/projets/devis-facture-tableau-de-bord.webp",
      alt: "Tableau de bord du Générateur de Devis et Factures : facturé, encaissé, à recevoir et devis en attente",
      width: 1200,
      height: 720,
    },
  },
  {
    id: 1,
    number: "03",
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
    autoThumb: {
      file: "fasomarket-accueil.webp",
      alt: "Page d'accueil de FasoMarket : recherche, catégories et annonces récentes",
    },
  },
  {
    id: 5,
    number: "04",
    title: "CV Creator Pro",
    tag: "Application Web",
    desc: "Générateur de CV gratuit et sans inscription : 22 modèles, aperçu en direct, export PDF et Word, données gardées dans le navigateur.",
    challenge:
      "Proposer 22 mises en page à partir des mêmes données, avec des exports PDF et Word fidèles, sans compte ni serveur.",
    outcome:
      "Un outil complet côté navigateur : assistant par métier, versions multiples, réorganisation des sections et trois formats d'export.",
    deliverables: ["22 modèles", "Export PDF et Word", "Données privées"],
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    github: "https://github.com/XAlbert07/Generator-CV",
    slug: "cv-creator-pro",
    thumb: {
      src: "/projets/cv-creator-editeur.webp",
      alt: "Éditeur de CV Creator Pro avec le choix des modèles et l'aperçu en direct",
      width: 1200,
      height: 720,
    },
  },
  {
    id: 6,
    number: "05",
    title: "Web Digi",
    tag: "Site Vitrine",
    desc: "Site vitrine d'une agence web et infographie : 7 pages, services détaillés, FAQ et référencement soigné, sans framework.",
    challenge:
      "Présenter trois métiers clairement et être trouvé sur les moteurs de recherche, avec un site léger et sans étape de build.",
    outcome:
      "Un site de 7 pages avec header et footer partagés, données structurées sur chaque page et sitemap généré par script.",
    deliverables: ["7 pages", "SEO technique", "Sans framework"],
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://agence-web-phi.vercel.app/",
    github: "https://github.com/XAlbert07/Agence-Web",
    slug: "web-digi",
    autoThumb: {
      file: "agence-web-accueil.webp",
      alt: "Page d'accueil du site Web Digi, agence web et infographie",
    },
  },
  {
    id: 2,
    number: "06",
    title: "Site Vitrine Restaurant",
    tag: "Site Vitrine",
    desc: "Site vitrine d'un restaurant gastronomique fictif : carte filtrable, effets 3D sur les plats et formulaire de réservation.",
    challenge:
      "Faire ressentir l'univers d'un restaurant gastronomique et conduire le visiteur vers deux actions : découvrir la carte, réserver.",
    outcome:
      "Un site léger en Tailwind et JavaScript modulaire, avec une carte générée à partir de données et des animations au défilement.",
    deliverables: ["Carte filtrable", "Effet 3D sur les plats", "Formulaire de réservation"],
    stack: ["HTML", "Tailwind", "JavaScript"],
    link: "https://restaurant-site-henna.vercel.app/",
    github: "https://github.com/XAlbert07/restaurant-site",
    slug: "restaurant-etoile-dor",
    thumb: {
      src: "/projets/restaurant-accueil.webp",
      alt: "Page d'accueil du site L'Étoile d'Or, restaurant gastronomique",
      width: 1200,
      height: 720,
    },
  },
  {
    id: 3,
    number: "07",
    title: "Landing Page Concours",
    tag: "Landing Page",
    desc: "Landing page d'un service de préparation aux concours : profils, méthode, tarifs en FCFA et inscription, en Tailwind CSS.",
    challenge:
      "Faire comprendre en quelques secondes pour qui est la formation, comment elle fonctionne, combien elle coûte et comment s'inscrire.",
    outcome:
      "Une page unique, légère et lisible sur mobile, structurée pour répondre aux questions du visiteur dans l'ordre.",
    deliverables: ["Parcours par profil", "Tarifs en FCFA", "Inscription et WhatsApp"],
    stack: ["HTML", "Tailwind", "JavaScript"],
    link: "https://landing-page-c6efbe5g5-alberts-projects-394db913.vercel.app/",
    github: "https://github.com/XAlbert07/landing-page",
    slug: "landing-concourselite",
    thumb: {
      src: "/projets/landing-accueil.webp",
      alt: "Page d'accueil de la landing page ConcoursElite",
      width: 1200,
      height: 720,
    },
  },
];
