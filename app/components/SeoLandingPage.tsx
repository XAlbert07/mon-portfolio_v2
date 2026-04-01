import type { ReactNode } from "react";
import Link from "next/link";

type SeoSection = {
  title: string;
  paragraphs: string[];
  points?: string[];
};

type SeoLink = {
  href: string;
  label: string;
};

type SeoHighlight = {
  label: string;
  value: string;
};

type SeoLandingPageProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  sections: SeoSection[];
  highlights: SeoHighlight[];
  relatedLinks?: SeoLink[];
  ctaTitle: ReactNode;
  ctaText: string;
  primaryCtaHref: string;
  primaryCtaLabel: string;
  secondaryCtaHref: string;
  secondaryCtaLabel: string;
};

export default function SeoLandingPage({
  eyebrow,
  title,
  description,
  sections,
  highlights,
  relatedLinks = [],
  ctaTitle,
  ctaText,
  primaryCtaHref,
  primaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaLabel,
}: SeoLandingPageProps) {
  return (
    <main id="main-content" className="portfolio-page min-h-screen overflow-x-hidden bg-[#0a0a0a] text-[#f0ede6]">
      <section className="projects-page-hero">
        <div className="mx-auto max-w-[1100px]">
          <div className="projects-page-topbar">
            <Link href="/" className="nav-brand">
              ALBERT<span className="text-[#c8f04a]">.</span>
            </Link>

            <div className="projects-page-links">
              <Link href="/" className="projects-page-link">
                Accueil
              </Link>
              <Link href="/projets" className="projects-page-link">
                Projets
              </Link>
              <Link href="/#contact" className="cta-btn px-5 py-2.5 text-xs">
                Me contacter
              </Link>
            </div>
          </div>

          <div className="projects-page-intro">
            <p className="font-mono-custom mb-4 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]">
              {eyebrow}
            </p>
            <h1 className="font-display mb-6 text-[clamp(42px,8vw,112px)] leading-none">
              {title}
            </h1>
            <p className="projects-page-copy">{description}</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="mx-auto grid max-w-[1100px] gap-6 lg:grid-cols-[minmax(0,1.45fr)_320px]">
          <article className="project-card grid gap-6">
            {sections.map((section) => (
              <section
                key={section.title}
                className="grid gap-4 border-b border-[rgba(240,237,230,0.08)] pb-6 last:border-b-0 last:pb-0"
              >
                <h2 className="font-display text-[clamp(28px,4vw,44px)] leading-none">
                  {section.title}
                </h2>

                <div className="grid gap-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base font-light leading-[1.85] text-[rgba(240,237,230,0.68)]">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.points ? (
                  <ul className="grid gap-3">
                    {section.points.map((point) => (
                      <li
                        key={point}
                        className="border border-[rgba(240,237,230,0.08)] bg-[rgba(240,237,230,0.02)] px-4 py-3 text-sm text-[rgba(240,237,230,0.75)]"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>

          <aside className="about-card">
            <div className="absolute -top-px left-10 h-0.5 w-[60px] bg-[#c8f04a]" />

            <div className="grid gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-[rgba(240,237,230,0.08)] pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="font-mono-custom text-xs uppercase tracking-[0.08em] text-[rgba(240,237,230,0.35)]">
                    {item.label}
                  </span>
                  <div className="mt-2 text-sm text-[#f0ede6]">{item.value}</div>
                </div>
              ))}
            </div>

            {relatedLinks.length ? (
              <div className="mt-8 grid gap-3">
                <p className="font-mono-custom text-xs uppercase tracking-[0.08em] text-[rgba(240,237,230,0.35)]">
                  Pages liees
                </p>
                <div className="flex flex-wrap gap-2">
                  {relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="border border-[rgba(240,237,230,0.12)] px-3 py-2 text-xs uppercase tracking-[0.06em] text-[rgba(240,237,230,0.72)] transition-colors hover:text-[#c8f04a]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <section className="compact-section">
        <div className="mx-auto max-w-[1100px] projects-page-cta">
          <div>
            <p className="font-mono-custom mb-4 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]">
              Suite
            </p>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-none">
              {ctaTitle}
            </h2>
            <p className="mt-4 max-w-[580px] text-base font-light leading-[1.8] text-[rgba(240,237,230,0.62)]">
              {ctaText}
            </p>
          </div>

          <div className="projects-page-cta-actions">
            <Link href={primaryCtaHref} className="cta-btn">
              {primaryCtaLabel}
            </Link>
            <Link href={secondaryCtaHref} className="ghost-btn">
              {secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
