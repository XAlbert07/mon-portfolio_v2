export const projects = [
  {
    id: 4,
    title: "Gestion de Stock",
    tag: "Application Web",
    desc: "Application de gestion de stock et de ventes pour un petit commerce : catalogue, réceptions, ventes, retours et inventaires, en FCFA.",
    challenge:
      "Garder un stock toujours exact : chaque entrée et sortie doit être tracée, avec des unités multiples (bouteille, carton, sac) et un coût moyen recalculé.",
    outcome:
      "Une application complète, de l'API PostgreSQL à l'interface, avec une démo en un clic en lecture seule, des tests automatisés et un déploiement continu.",
    deliverables: ["Mouvements de stock tracés", "Ventes et retours clients", "Démo en lecture seule"],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "https://gestion-stock-pied-three.vercel.app",
    github: "https://github.com/XAlbert07/gestion-stock",
    number: "01",
  },
  {
    id: 1,
    title: "FasoMarket",
    tag: "Application Web",
    desc: "Plateforme de petites annonces avec authentification complète, gestion de profils vendeurs et base de données en temps réel.",
    challenge:
      "Concevoir un MVP clair avec comptes utilisateurs, publication d'annonces et profils vendeurs sans rendre l'interface lourde.",
    outcome:
      "Une base produit solide, un parcours utilisateur lisible et une structure prête à évoluer vers de nouvelles fonctionnalités.",
    deliverables: ["Authentification", "Profils vendeurs", "Données temps réel"],
    stack: ["React", "TypeScript", "Tailwind", "Supabase"],
    link: "https://faso-market.vercel.app/",
    number: "02",
  },
  {
    id: 2,
    title: "Site Vitrine Restaurant",
    tag: "Site Vitrine",
    desc: "Site web pour un restaurant gastronomique avec menu interactif et système de réservation.",
    challenge: "Valoriser l'identité du restaurant et simplifier la réservation depuis mobile comme desktop.",
    outcome:
      "Une navigation directe, un univers plus lisible et un site centré sur les actions utiles : consulter, choisir, réserver.",
    deliverables: ["Menu interactif", "Parcours de réservation", "Responsive premium"],
    stack: ["HTML", "CSS", "Tailwind", "JavaScript"],
    link: "https://restaurant-site-henna.vercel.app/",
    number: "03",
  },
  {
    id: 3,
    title: "Landing Page Concours",
    tag: "Landing Page",
    desc: "Page d'atterrissage pour une plateforme de préparation aux concours, design simple et fluide.",
    challenge: "Présenter une offre pédagogique de manière rapide, claire et orientée conversion.",
    outcome:
      "Une landing page légère, structurée et efficace pour capter l'attention puis pousser à la prise de contact.",
    deliverables: ["Message clarifié", "Sections courtes", "Chargement rapide"],
    stack: ["HTML", "CSS", "Tailwind", "JavaScript"],
    link: "https://landing-page-c6efbe5g5-alberts-projects-394db913.vercel.app/",
    number: "04",
  },
] as const;

