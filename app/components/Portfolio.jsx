"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "FasoMarket",
    tag: "Application Web",
    desc: "Plateforme de petites annonces avec authentification complète, gestion de profils vendeurs et base de données en temps réel.",
    stack: ["React", "TypeScript", "Tailwind", "Supabase"],
    link: "https://faso-market.vercel.app/",
    number: "01",
  },
  {
    id: 2,
    title: "Site Vitrine Restaurant",
    tag: "Site Vitrine",
    desc: "Site web pour un restaurant gastronomique avec menu interactif et système de réservation.",
    stack: ["HTML", "CSS", "Tailwind", "JavaScript"],
    link: "https://restaurant-site-henna.vercel.app/",
    number: "02",
  },
  {
    id: 3,
    title: "Landing Page Concours",
    tag: "Landing Page",
    desc: "Page d'atterrissage pour une plateforme de préparation aux concours, design simple et fluide.",
    stack: ["HTML", "CSS", "Tailwind", "JavaScript"],
    link: "https://landing-page-c6efbe5g5-alberts-projects-394db913.vercel.app/",
    number: "03",
  },
];

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
    desc: "Je transforme vos fichiers Figma en interfaces React/Next.js pixel-perfect, fidèles aux intentions visuelles.",
  },
  {
    n: "02",
    title: "Landing pages & sites vitrines",
    desc: "Des pages rapides, claires et orientées conversion, construites pour durer.",
  },
  {
    n: "03",
    title: "Applications web",
    desc: "Authentification, gestion de données, logique métier — je construis des apps fonctionnelles et maintenables.",
  },
  {
    n: "04",
    title: "Collaboration régulière",
    desc: "Disponible pour des missions ponctuelles ou une intégration continue dans votre équipe.",
  },
];

const navItems = [
  { id: "accueil", label: "accueil" },
  { id: "services", label: "services" },
  { id: "projets", label: "projets" },
  { id: "apropos", label: "à propos" },
  { id: "contact", label: "contact" },
];

export default function Portfolio() {
  const [active, setActive] = useState("accueil");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const updateInputMode = () => setIsTouchDevice(mediaQuery.matches);

    updateInputMode();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateInputMode);
      return () => mediaQuery.removeEventListener("change", updateInputMode);
    }

    mediaQuery.addListener(updateInputMode);
    return () => mediaQuery.removeListener(updateInputMode);
  }, []);

  useEffect(() => {
    if (isTouchDevice) {
      return undefined;
    }

    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isTouchDevice]);

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

  return (
    <div className="portfolio-page min-h-screen overflow-x-hidden bg-[#0a0a0a] text-[#f0ede6]">
      {!isTouchDevice && (
        <div
          className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4 rounded-full bg-[#c8f04a] mix-blend-difference transition-transform duration-75 ease-linear"
          ref={cursorRef}
        />
      )}

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
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link border-none bg-transparent text-[13px] uppercase tracking-[0.06em] transition-colors ${
                active === item.id ? "text-[#c8f04a]" : "text-[rgba(240,237,230,0.6)]"
              }`}
              aria-current={active === item.id ? "page" : undefined}
              onClick={() => handleNavSelect(item.id)}
            >
              {item.label}
            </a>
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
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleNavSelect(item.id)}
              className={`block border border-[rgba(240,237,230,0.08)] bg-transparent px-[14px] py-3 text-left text-xs uppercase tracking-[0.06em] ${
                active === item.id ? "text-[#c8f04a]" : "text-[rgba(240,237,230,0.7)]"
              }`}
              aria-current={active === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
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
          <div className="fade-up mb-8 flex items-center gap-3">
            <span className="dot-accent animate-[blink_2s_infinite]" />
            <span className="font-mono-custom text-xs uppercase tracking-[0.15em] text-[rgba(240,237,230,0.5)]">
              Disponible pour missions
            </span>
          </div>

          <h1
            id="hero-title"
            className="font-display fade-up-2 mb-8 text-[clamp(46px,12vw,54px)] leading-[0.92] tracking-normal sm:text-[clamp(64px,10vw,140px)] sm:leading-[0.95] sm:tracking-[0.02em]"
          >
            DÉVELOPPEUR
            <br />
            <span className="text-[#c8f04a]">FRONTEND</span>
            <br />
            REACT & NEXT.JS
          </h1>

          <p className="fade-up-3 mb-12 max-w-[520px] text-lg font-light leading-[1.7] text-[rgba(240,237,230,0.6)]">
            Je m&apos;intègre dans votre équipe pour livrer vos projets frontend.
            <br />
            <span className="text-[#f0ede6]">Disponible, sérieux, remote.</span>
          </p>

          <div className="hero-actions fade-up-4">
            <a
              href="#projets"
              className="cta-btn"
              onClick={() => handleNavSelect("projets")}
            >
              Voir les projets
              <span className="text-base">→</span>
            </a>
            <a
              href="#contact"
              className="ghost-btn"
              onClick={() => handleNavSelect("contact")}
            >
              Discuter d&apos;une mission
            </a>
          </div>
        </div>

      </section>

      <section id="services" aria-labelledby="services-title" className="page-section">
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
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.n} className="service-card">
                <div className="font-mono-custom mb-5 text-[11px] tracking-[0.1em] text-[#c8f04a]">
                  {service.n}
                </div>
                <h3 className="mb-3 text-xl font-medium">{service.title}</h3>
                <p className="text-sm font-light leading-[1.7] text-[rgba(240,237,230,0.5)]">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projets" aria-labelledby="projects-title" className="page-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="section-heading mb-12 md:mb-20">
            <p className="font-mono-custom mb-4 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]">
              Réalisations
            </p>
            <h2 id="projects-title" className="font-display text-[clamp(40px,5vw,72px)] leading-none">
              PROJETS
            </h2>
          </div>

          <div>
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-row"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <span
                  className={`font-mono-custom text-xs transition-colors duration-300 ${
                    hoveredProject === project.id ? "text-[#c8f04a]" : "text-[rgba(240,237,230,0.25)]"
                  }`}
                >
                  {project.number}
                </span>

                <div className="project-main">
                  <div className="project-header">
                    <h3
                      className={`text-[clamp(22px,3vw,36px)] font-medium transition-colors duration-300 ${
                        hoveredProject === project.id ? "text-[#c8f04a]" : "text-[#f0ede6]"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <span className="tag-pill">{project.tag}</span>
                  </div>

                  <p className="max-w-[500px] text-sm font-light leading-[1.6] text-[rgba(240,237,230,0.45)]">
                    {project.desc}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="font-mono-custom text-[11px] text-[rgba(240,237,230,0.35)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  className={`project-link border text-lg no-underline transition-all duration-300 ${
                    hoveredProject === project.id
                      ? "rotate-45 border-[#c8f04a] text-[#c8f04a]"
                      : "border-[rgba(240,237,230,0.15)] text-[rgba(240,237,230,0.4)]"
                  }`}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Voir le projet ${project.title}`}
                >
                  <span aria-hidden="true">→</span>
                  <span className="sr-only">{project.title}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="stack-title" className="compact-section">
        <div className="mx-auto max-w-[1100px]">
          <h2
            id="stack-title"
            className="font-mono-custom mb-8 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]"
          >
            Stack technique
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="apropos" aria-labelledby="about-title" className="page-section">
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
                Je suis <span className="font-medium text-[#f0ede6]">Albert Sama</span>, développeur frontend basé au Burkina Faso.
              </p>
              <p className="mb-6 text-base font-light leading-[1.9] text-[rgba(240,237,230,0.65)]">
                Je travaille en remote, je communique clairement et je livre ce qu&apos;on me demande. Disponible pour des missions ponctuelles ou une
                collaboration régulière avec des agences.
              </p>
              <p className="text-base font-light leading-[1.9] text-[rgba(240,237,230,0.65)]">
                Mon objectif : m&apos;intégrer dans votre flux de travail sans friction, et vous permettre de livrer plus vite à vos clients.
              </p>
            </div>

            <div className="relative">
              <div className="about-card">
                <div className="absolute -top-px left-10 h-0.5 w-[60px] bg-[#c8f04a]" />
                {[
                  { label: "Localisation", value: "Ouagadougou, Burkina Faso" },
                  { label: "Disponibilité", value: "Immédiate — remote" },
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

      <section id="contact" aria-labelledby="contact-title" className="page-section bg-[rgba(200,240,74,0.02)]">
        <div className="mx-auto max-w-[700px] text-center">
          <p className="font-mono-custom mb-4 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]">
            Travaillons ensemble
          </p>
          <h2 id="contact-title" className="font-display mb-6 text-[clamp(48px,7vw,96px)] leading-none">
            UNE MISSION
            <br />
            À CONFIER ?
          </h2>
          <p className="mb-14 text-base font-light leading-[1.7] text-[rgba(240,237,230,0.5)]">
            Écrivez-moi directement. Je réponds rapidement.
          </p>

          <div className="mb-8 flex flex-col gap-3">
            <input className="contact-input" placeholder="Votre nom" />
            <input className="contact-input" placeholder="Votre email" />
            <textarea className="contact-input resize-y" placeholder="Décrivez votre mission..." rows={5} />
          </div>

          <a
            href="mailto:albertsama07@gmail.com"
            className="cta-btn w-full justify-center px-8 py-4 text-sm"
          >
            Envoyer le message →
          </a>

          <div className="contact-links">
            {[
              { label: "GitHub", href: "https://github.com/XAlbert07" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/albert-sama-299a51193" },
              { label: "Email direct", href: "mailto:albertsama07@gmail.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="contact-link"
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span className="font-display text-lg tracking-[0.1em]">
          ALBERT<span className="text-[#c8f04a]">.</span>
        </span>
        <span className="font-mono-custom text-[11px] text-[rgba(240,237,230,0.25)]">
          © 2026 — Développeur Frontend React & Next.js
        </span>
      </footer>
    </div>
  );
}
