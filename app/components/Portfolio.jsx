"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectsGrid from "@/app/components/ProjectsGrid";
import { projects } from "@/app/data/projects";
import { siteConfig } from "@/app/site-config";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML / CSS",
  "Supabase",
  "Git / GitHub",
  "Figma",
  "Vercel",
];

const services = [
  {
    n: "01",
    title: "Intégration de maquettes",
    desc: "Je transforme vos maquettes Figma en interfaces web propres, responsives et fidèles au design.",
    deliverables: ["Découpage en composants", "Responsive desktop/mobile", "Finitions UI propres"],
  },
  {
    n: "02",
    title: "Landing pages & sites vitrines",
    desc: "Je crée des pages claires, rapides et orientées conversion pour présenter votre activité ou votre offre.",
    deliverables: ["Structure orientée conversion", "SEO technique de base", "Déploiement propre"],
  },
  {
    n: "03",
    title: "Sites web interactifs",
    desc: "Je développe des sites avec formulaires, contenus dynamiques et connexion à une base de données ou à un CMS.",
    deliverables: ["Formulaires et interactions", "Connexion CMS / base", "Responsive et performance"],
  },
  {
    n: "04",
    title: "Interfaces d'applications web",
    desc: "Je construis des dashboards, espaces utilisateurs et interfaces metier en React / Next.js.",
    deliverables: ["Dashboards et CRUD", "Authentification", "Connexion API ou base de donnees"],
  },
  {
    n: "05",
    title: "Refonte frontend",
    desc: "J'amelore l'apparence, la lisibilite et l'experience utilisateur de votre site existant sans repartir de zero.",
    deliverables: ["Audit visuel rapide", "Refonte UI", "Amelioration responsive"],
  },
  {
    n: "06",
    title: "Maintenance & support frontend",
    desc: "Je corrige les bugs, j'ajoute de petites evolutions et j'assure le suivi technique de votre interface.",
    deliverables: ["Corrections", "Petites evolutions", "Support technique"],
  },
  {
    n: "07",
    title: "Renfort frontend",
    desc: "Je peux intervenir ponctuellement ou regulierement pour renforcer votre equipe sur un projet React / Next.js.",
    deliverables: ["Renfort sprint/backlog", "Integration de nouvelles vues", "Communication claire avec l'equipe"],
  },
];

const pricingItems = [
  {
    title: "Landing page / site vitrine simple",
    price: "75 000 FCFA",
    note: "À partir de",
    delay: "5 à 7 jours",
    includes: ["Design responsive", "Pages essentielles", "Mise en ligne initiale"],
  },
  {
    title: "Site web interactif",
    price: "150 000 FCFA",
    note: "À partir de",
    delay: "7 à 14 jours",
    includes: ["Formulaires ou contenus dynamiques", "Connexion CMS ou base", "Deploiement"],
  },
  {
    title: "Interface d'application web",
    price: "200 000 FCFA",
    note: "À partir de",
    delay: "2 à 4 semaines",
    includes: ["Dashboard ou espace utilisateur", "CRUD", "Connexion API / BDD"],
  },
  {
    title: "Boutique en ligne simple",
    price: "250 000 FCFA",
    note: "À partir de",
    delay: "2 à 4 semaines",
    includes: ["Catalogue produit", "Panier ou pages de vente", "Parcours d'achat cote frontend"],
  },
  {
    title: "Refonte frontend",
    price: "60 000 FCFA",
    note: "À partir de",
    delay: "3 à 10 jours",
    includes: ["Audit rapide", "Refonte UI", "Amelioration responsive"],
  },
  {
    title: "Maintenance & support frontend",
    price: "15 000 FCFA / mois",
    note: "Abonnement mensuel",
    delay: "Suivi mensuel",
    includes: ["Corrections", "Petites evolutions", "Support technique"],
  },
  {
    title: "Renfort frontend",
    price: "Sur devis",
    note: "Selon la mission",
    delay: "Selon le sprint",
    includes: ["Renfort ponctuel", "Integration de nouvelles vues", "Suivi avec votre equipe"],
  },
];

const trustHighlights = [
  {
    label: "Positionnement",
    value: "Frontend React & Next.js",
    detail: "Interfaces web claires, rapides et maintenables.",
  },
  {
    label: "Formats",
    value: "Landing pages, sites et interfaces web",
    detail: "Du site vitrine au dashboard connecte.",
  },
  {
    label: "Technique",
    value: "Figma, React, Next.js, API",
    detail: "Integration UI, composants, formulaires et donnees connectees.",
  },
  {
    label: "Engagement",
    value: "Ponctuel ou continu",
    detail: "Refonte ciblee, mission frontend ou renfort sprint.",
  },
];

const processSteps = [
  {
    n: "01",
    title: "Cadrage rapide",
    desc: "On clarifie l'objectif, les priorités, le délai et le niveau de finition attendu.",
  },
  {
    n: "02",
    title: "Production",
    desc: "Je construis une interface propre, responsive et maintenable, pensée pour votre contexte réel.",
  },
  {
    n: "03",
    title: "Validation",
    desc: "On ajuste les points importants sans perdre de temps sur du bruit visuel ou technique.",
  },
  {
    n: "04",
    title: "Livraison",
    desc: "Je vous laisse un rendu exploitable, documenté et prêt à être mis en ligne ou repris par l'équipe.",
  },
];

const contactOptions = [
  {
    label: "Email direct",
    value: "albertsama07@gmail.com",
    detail: "Le canal le plus simple pour lancer un devis ou un échange.",
    href: "mailto:albertsama07@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Profil professionnel",
    detail: "Pour une prise de contact rapide ou un premier échange.",
    href: "https://www.linkedin.com/in/albert-sama-299a51193",
  },
  {
    label: "GitHub",
    value: "Code & références",
    detail: "Pour voir ma manière de structurer et livrer un projet.",
    href: "https://github.com/XAlbert07",
  },
];

const navItems = [
  { id: "accueil", label: "accueil", href: "#accueil" },
  { id: "services", label: "services", href: "#services" },
  { id: "tarifs", label: "tarifs", href: "#tarifs" },
  { id: "projets", label: "projets", href: "/projets", isRoute: true },
  { id: "apropos", label: "à propos", href: "#apropos" },
  { id: "contact", label: "contact", href: "#contact" },
];

const footerLinks = [
  { href: "/developpeur-react-burkina-faso", label: "Developpeur React Burkina Faso" },
  { href: "/freelance-nextjs-burkina-faso", label: "Freelance Next.js Burkina Faso" },
  { href: "/refonte-frontend-react", label: "Refonte frontend React" },
];

export default function Portfolio() {
  const [active, setActive] = useState("accueil");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [contactStatus, setContactStatus] = useState({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const updateViewportMode = () => setIsMobileViewport(mediaQuery.matches);

    updateViewportMode();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateViewportMode);
      return () => mediaQuery.removeEventListener("change", updateViewportMode);
    }

    mediaQuery.addListener(updateViewportMode);
    return () => mediaQuery.removeListener(updateViewportMode);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const updateActiveFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActive(hash);
      }
    };

    updateActiveFromHash();
    window.addEventListener("hashchange", updateActiveFromHash);
    return () => window.removeEventListener("hashchange", updateActiveFromHash);
  }, []);

  const handleNavSelect = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  const handleRouteSelect = () => {
    setMenuOpen(false);
  };

  const handleContactChange = (event) => {
    const { name, value } = event.target;

    setContactForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (contactStatus.type !== "idle") {
      setContactStatus({ type: "idle", message: "" });
    }
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      ...contactForm,
      name: contactForm.name.trim().replace(/\s+/g, " "),
      email: contactForm.email.trim().toLowerCase(),
      message: contactForm.message.trim(),
    };

    if (payload.name.length < 2) {
      setContactStatus({
        type: "error",
        message: "Renseignez un nom valide.",
      });
      return;
    }

    if (payload.message.length < 20) {
      setContactStatus({
        type: "error",
        message: "Decrivez un peu plus la mission (20 caracteres minimum).",
      });
      return;
    }

    setIsSubmitting(true);
    setContactStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Impossible d'envoyer le message pour le moment.");
      }

      setContactForm({
        name: "",
        email: "",
        message: "",
        company: "",
      });
      setContactStatus({
        type: "success",
        message: data.message || "Message envoye.",
      });
    } catch (error) {
      setContactStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Impossible d'envoyer le message pour le moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const visibleTrustHighlights = isMobileViewport ? trustHighlights.slice(0, 2) : trustHighlights;
  const visibleServices = isMobileViewport ? services.slice(0, 4) : services;
  const visiblePricingItems = isMobileViewport ? pricingItems.slice(0, 5) : pricingItems;
  const visibleProcessSteps = isMobileViewport ? processSteps.slice(0, 2) : processSteps;

  return (
    <div className="portfolio-page min-h-screen overflow-x-hidden bg-[#0a0a0a] text-[#f0ede6]">
      <nav
        aria-label="Navigation principale"
        className={`site-nav ${
          scrolled
            ? "border-b border-[rgba(240,237,230,0.06)] bg-[rgba(10,10,10,0.95)] backdrop-blur-[12px]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <a
          href="#accueil"
          className="nav-brand"
          onClick={() => handleNavSelect("accueil")}
        >
          ALBERT<span className="text-[#c8f04a]">.</span>
        </a>

        <div className="nav-desktop">
          {navItems.map((item) => (
            item.isRoute ? (
              <Link
                key={item.id}
                href={item.href}
                className="nav-link border-none bg-transparent text-[13px] uppercase tracking-[0.06em] text-[rgba(240,237,230,0.6)] transition-colors"
                onClick={handleRouteSelect}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link border-none bg-transparent text-[13px] uppercase tracking-[0.06em] transition-colors ${
                  active === item.id ? "text-[#c8f04a]" : "text-[rgba(240,237,230,0.6)]"
                }`}
                aria-current={active === item.id ? "page" : undefined}
                onClick={() => handleNavSelect(item.id)}
              >
                {item.label}
              </a>
            )
          ))}

          <a
            href="#contact"
            className="cta-btn px-5 py-2.5 text-xs"
            onClick={() => handleNavSelect("contact")}
          >
            Me contacter
          </a>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-mobile ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            item.isRoute ? (
              <Link
                key={item.id}
                href={item.href}
                onClick={handleRouteSelect}
                className="block border border-[rgba(240,237,230,0.08)] bg-transparent px-[14px] py-3 text-left text-xs uppercase tracking-[0.06em] text-[rgba(240,237,230,0.7)]"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavSelect(item.id)}
                className={`block border border-[rgba(240,237,230,0.08)] bg-transparent px-[14px] py-3 text-left text-xs uppercase tracking-[0.06em] ${
                  active === item.id ? "text-[#c8f04a]" : "text-[rgba(240,237,230,0.7)]"
                }`}
                aria-current={active === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            )
          ))}
          <a
            href="#contact"
            className="cta-btn w-full justify-center"
            onClick={() => handleNavSelect("contact")}
          >
            Me contacter
          </a>
        </div>
      </nav>

      <section id="accueil" aria-labelledby="hero-title" className="hero-section">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(240,237,230,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(240,237,230,0.03)_1px,transparent_1px)] bg-[length:80px_80px]" />

        <div className="absolute right-[10%] top-[20%] z-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(200,240,74,0.08)_0%,transparent_70%)]" />

        <div className="hero-content">
          <div className="fade-up mb-6 flex items-center gap-3">
            <span className="dot-accent animate-[blink_2s_infinite]" />
            <span className="font-mono-custom text-xs uppercase tracking-[0.15em] text-[rgba(240,237,230,0.48)]">
              Developpeur React & Next.js base a {siteConfig.location}
            </span>
          </div>

          <h1
            id="hero-title"
            className="hero-title font-display fade-up-2 mb-8 text-[clamp(42px,12vw,54px)] leading-[0.92] tracking-normal sm:text-[clamp(64px,10vw,140px)] sm:leading-[0.95] sm:tracking-[0.02em]"
          >
            DEVELOPPEUR
            <br />
            <span className="text-[#c8f04a]">REACT & NEXT.JS</span>
            <br />
            A KOUDOUGOU
          </h1>

          <p className="hero-copy fade-up-3 mb-12 max-w-[520px] text-lg font-light leading-[1.7] text-[rgba(240,237,230,0.6)]">
            Base a <span className="text-[#f0ede6]">{siteConfig.location}</span>, je cree des interfaces web React &
            Next.js claires, responsives et maintenables pour landing pages, sites interactifs et refontes frontend.
          </p>

          <div className="hero-pills fade-up-3">
            {["React / Next.js", "Interfaces web", "Refonte frontend"].map((item) => (
              <span key={item} className="hero-pill">
                {item}
              </span>
            ))}
          </div>

          <div className="hero-actions fade-up-4">
            <a
              href="#contact"
              className="cta-btn"
              onClick={() => handleNavSelect("contact")}
            >
              Demander un devis
              <span className="text-base">→</span>
            </a>
            <Link
              href="/projets"
              className="ghost-btn"
              onClick={handleRouteSelect}
            >
              Voir les projets
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="trust-title" className="compact-section trust-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="section-heading mb-10 md:mb-14">
            <p className="font-mono-custom mb-4 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]">
              Repères
            </p>
            <h2 id="trust-title" className="font-display text-[clamp(32px,4vw,56px)] leading-none">
              UN CADRE CLAIR
            </h2>
          </div>

          <div className="trust-grid">
            {visibleTrustHighlights.map((item) => (
              <article key={item.label} className="trust-card">
                <span className="trust-label">{item.label}</span>
                <h3 className="trust-value">{item.value}</h3>
                <p className="trust-detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" aria-labelledby="services-title" className="page-section services-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="section-heading mb-12 flex items-end justify-between md:mb-20">
            <div>
              <p className="font-mono-custom mb-4 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]">
                Ce que j&apos;apporte
              </p>
              <h2 id="services-title" className="font-display text-[clamp(40px,5vw,72px)] leading-none">
                SERVICES
              </h2>
            </div>
            <p className="section-intro">
              Un perimetre clair : interface, integration frontend, refonte UI et connexion a vos contenus ou donnees.
            </p>
          </div>

          <div className="services-grid">
            {visibleServices.map((service) => (
              <div key={service.n} className="service-card">
                <div className="service-card-top">
                  <div className="font-mono-custom text-[11px] tracking-[0.1em] text-[#c8f04a]">{service.n}</div>
                  <span className="service-chip">Livrables inclus</span>
                </div>
                <h3 className="mb-3 text-xl font-medium">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <ul className="service-points">
                  {(isMobileViewport ? service.deliverables.slice(0, 2) : service.deliverables).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tarifs" aria-labelledby="pricing-title" className="page-section pricing-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="pricing-header">
            <div>
              <p className="font-mono-custom mb-4 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]">
                Budget de départ
              </p>
              <h2 id="pricing-title" className="font-display text-[clamp(40px,5vw,72px)] leading-none">
                TARIFS INDICATIFS
              </h2>
            </div>
            <p className="pricing-intro">
              Tous les prix sont des tarifs plancher. Le devis final depend de la complexite de l&apos;interface, du niveau
              d&apos;integration attendu et du perimetre frontend demande.
            </p>
          </div>

          <div className="pricing-grid">
            {visiblePricingItems.map((item, index) => (
              <article key={item.title} className="pricing-card">
                <div className="pricing-card-top">
                  <span className="pricing-index">{String(index + 1).padStart(2, "0")}</span>
                  <p className="pricing-note">{item.note}</p>
                </div>

                <div className="pricing-card-body">
                  <h3 className="pricing-title">{item.title}</h3>
                  <p className="pricing-amount">{item.price}</p>
                </div>

                <div className="pricing-meta">
                  <div className="pricing-meta-item">
                    <span className="pricing-meta-label">Délai estimatif</span>
                    <span className="pricing-meta-value">{item.delay}</span>
                  </div>
                </div>

                <ul className="pricing-includes">
                  {(isMobileViewport ? item.includes.slice(0, 2) : item.includes).map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="pricing-cta"
                  onClick={() => handleNavSelect("contact")}
                >
                  Demander un devis
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projets" aria-labelledby="projects-title" className="page-section projects-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="section-heading mb-12 flex items-end justify-between md:mb-20">
            <div>
              <p className="font-mono-custom mb-4 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]">
                Une selection courte
              </p>
              <h2 id="projects-title" className="font-display text-[clamp(40px,5vw,72px)] leading-none">
                PROJETS MIS EN AVANT
              </h2>
            </div>
            <p className="section-intro">
              Deux a trois projets pour voir le niveau d&apos;execution. Le reste est accessible sur la page dediee.
            </p>
          </div>

          <ProjectsGrid
            projects={projects}
            desktopLimit={3}
            mobileLimit={2}
            showCasesOnMobile={false}
            mobileDeliverablesLimit={2}
            showAllLinkHref="/projets"
            showAllLinkLabel="Voir tous les projets"
          />
        </div>
      </section>

      <section aria-labelledby="stack-title" className="compact-section stack-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="stack-panel">
            <div>
              <h2
                id="stack-title"
                className="font-mono-custom mb-4 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]"
              >
                Stack technique
              </h2>
              <p className="section-intro stack-intro">
                Des outils cibles pour livrer des interfaces rapides, connectees et maintenables sans complexite inutile.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="apropos" aria-labelledby="about-title" className="page-section about-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="about-grid">
            <div>
              <p className="font-mono-custom mb-4 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]">
                Qui suis-je
              </p>
              <h2 id="about-title" className="font-display mb-10 text-[clamp(40px,5vw,72px)] leading-none">
                À PROPOS
              </h2>
              <p className="mb-6 text-base font-light leading-[1.9] text-[rgba(240,237,230,0.65)]">
                Je suis <span className="font-medium text-[#f0ede6]">Albert Sama</span>, developpeur React & Next.js base a {siteConfig.location}.
              </p>
              <p className="mb-6 text-base font-light leading-[1.9] text-[rgba(240,237,230,0.65)]">
                J&apos;accompagne des clients locaux et a distance avec des echanges simples et une communication claire
                pour des missions ponctuelles, des refontes ciblees ou du renfort frontend React / Next.js.
              </p>
              <p className="mb-10 text-base font-light leading-[1.9] text-[rgba(240,237,230,0.65)]">
                Mon objectif : clarifier le frontend, accelerer l&apos;execution et livrer des interfaces exploitables
                sans friction pour votre equipe ou votre activite.
              </p>

              <div className="process-panel">
                <p className="font-mono-custom mb-5 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]">
                  Méthode de travail
                </p>
                <div className="process-grid">
                  {visibleProcessSteps.map((step) => (
                    <article key={step.n} className="process-card">
                      <span className="process-step">{step.n}</span>
                      <h3 className="process-title">{step.title}</h3>
                      <p className="process-desc">{step.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="about-card">
                <div className="absolute -top-px left-10 h-0.5 w-[60px] bg-[#c8f04a]" />
                {[
                  { label: "Localisation", value: siteConfig.location },
                  { label: "Disponibilité", value: "Immédiate — local ou a distance" },
                  { label: "Langues", value: "Français, Anglais (technique)" },
                  { label: "Spécialité", value: "React & Next.js" },
                ].map((item) => (
                  <div key={item.label} className="about-item">
                    <span className="font-mono-custom text-xs uppercase tracking-[0.08em] text-[rgba(240,237,230,0.35)]">
                      {item.label}
                    </span>
                    <span className="text-sm text-[#f0ede6]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title" className="page-section contact-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="contact-grid">
            <div className="contact-copy">
              <p className="font-mono-custom mb-4 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]">
                Travaillons ensemble
              </p>
              <h2 id="contact-title" className="contact-title font-display mb-6 text-[clamp(48px,7vw,96px)] leading-none">
                UNE MISSION
                <br />
                À CONFIER ?
              </h2>
              <p className="contact-intro">
                Depuis {siteConfig.location}, j&apos;interviens sur des missions frontend locales ou a distance. Decrivez le
                contexte, le type d&apos;interface a produire, le delai souhaite et votre budget de depart.
              </p>

              <div className="contact-highlights">
                {["Reponse rapide", "Local ou a distance", "Refonte, mission ou renfort frontend"].map((item) => (
                  <span key={item} className="contact-highlight">
                    {item}
                  </span>
                ))}
              </div>

              <div className="contact-methods">
                {contactOptions.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="contact-method-card"
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  >
                    <span className="contact-method-label">{item.label}</span>
                    <strong className="contact-method-value">{item.value}</strong>
                    <span className="contact-method-detail">{item.detail}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-form-panel">
              <form onSubmit={handleContactSubmit} className="text-left">
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="contact-company">Entreprise</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={contactForm.company}
                    onChange={handleContactChange}
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </div>

                <div className="contact-form-fields">
                  <input
                    id="contact-name"
                    name="name"
                    className="contact-input"
                    placeholder="Votre nom"
                    autoComplete="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                    minLength={2}
                    maxLength={80}
                  />
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="contact-input"
                    placeholder="Votre email"
                    autoComplete="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                  />
                  <textarea
                    id="contact-message"
                    name="message"
                    className="contact-input resize-y"
                    placeholder="Décrivez votre mission..."
                    rows={6}
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    minLength={20}
                    maxLength={2000}
                  />
                </div>

                <button
                  type="submit"
                  className="cta-btn w-full justify-center px-8 py-4 text-sm disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi..." : "Envoyer le message →"}
                </button>

                <p
                  aria-live="polite"
                  className={`mt-4 text-sm leading-6 ${
                    contactStatus.type === "error" ? "text-[#ff8f8f]" : "text-[rgba(240,237,230,0.6)]"
                  } ${contactStatus.type === "success" ? "text-[#c8f04a]" : ""}`}
                >
                  {contactStatus.message ||
                    "Partagez le besoin, le delai souhaite et le type d'interface a produire. Je vous repondrai avec un cadrage clair."}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="flex flex-col gap-2">
          <span className="font-display text-lg tracking-[0.1em]">
            ALBERT<span className="text-[#c8f04a]">.</span>
          </span>
          <span className="font-mono-custom text-[11px] text-[rgba(240,237,230,0.25)]">
            © 2026 — Developpeur React & Next.js a {siteConfig.location}
          </span>
        </div>

        <div className="flex flex-wrap justify-end gap-2">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-[rgba(240,237,230,0.12)] px-3 py-2 text-[10px] uppercase tracking-[0.08em] text-[rgba(240,237,230,0.58)] transition-colors hover:text-[#c8f04a]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}
