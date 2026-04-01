export const projects = [
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
    number: "01",
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
    number: "02",
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
    number: "03",
  },
] as const;

