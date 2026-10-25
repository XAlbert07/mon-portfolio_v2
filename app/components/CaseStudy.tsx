import Image from "next/image";
import Link from "next/link";

export type CaseShot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseGalleryItem = CaseShot & { caption: string };

export type CaseStudyData = {
  title: string;
  lead: string;
  meta: { label: string; value: string }[];
  demoUrl?: string;
  codeUrl?: string;
  note?: string;
  heroShot?: CaseShot;
  challenge: string[];
  featuresTitle?: string;
  features: string[];
  decisions: { title: string; text: string }[];
  gallery?: CaseGalleryItem[];
  architecture?: { step: string; name: string; text: string }[];
  qualityTitle?: string;
  quality?: string[];
  jsonLd: Record<string, unknown>;
};

const h2Class = "font-display mb-8 text-[clamp(36px,4.5vw,60px)] leading-none";

export default function CaseStudy({ data }: { data: CaseStudyData }) {
  const gallery = data.gallery ?? [];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data.jsonLd) }} />
      <main id="main-content" className="portfolio-page min-h-screen overflow-x-hidden bg-[#0a0a0a] text-[#f0ede6]">
        <section className="projects-page-hero">
          <div className="mx-auto max-w-[1100px]">
            <div className="projects-page-topbar">
              <Link href="/" className="nav-brand">
                ALBERT<span className="text-[#c8f04a]">.</span>
              </Link>
              <div className="projects-page-links">
                <Link href="/#projets" className="projects-page-link">
                  Tous les projets
                </Link>
                <Link href="/#contact" className="cta-btn px-5 py-2.5 text-xs">
                  Me contacter
                </Link>
              </div>
            </div>

            <div className="projects-page-intro">
              <p className="font-mono-custom mb-4 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]">
                Étude de cas
              </p>
              <h1 className="font-display mb-6 text-[clamp(52px,8vw,112px)] leading-none">
                {data.title.toUpperCase()}
              </h1>
              <p className="projects-page-copy">{data.lead}</p>
            </div>

            <div className="case-meta">
              {data.meta.map((item) => (
                <div key={item.label} className="case-meta-item">
                  <span className="font-mono-custom">{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>

            <div className="case-actions">
              {data.demoUrl ? (
                <a href={data.demoUrl} target="_blank" rel="noreferrer" className="cta-btn">
                  Voir le site <span aria-hidden="true">→</span>
                </a>
              ) : null}
              {data.codeUrl ? (
                <a
                  href={data.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={data.demoUrl ? "ghost-btn" : "cta-btn"}
                >
                  Code source {data.demoUrl ? null : <span aria-hidden="true">→</span>}
                </a>
              ) : null}
            </div>
            {data.note ? <p className="case-note">{data.note}</p> : null}
          </div>
        </section>

        {data.heroShot ? (
          <section className="case-section" style={{ borderTop: "none" }}>
            <div className="mx-auto max-w-[1000px]">
              <div className="case-shot">
                <Image
                  src={data.heroShot.src}
                  alt={data.heroShot.alt}
                  width={data.heroShot.width}
                  height={data.heroShot.height}
                  sizes="(max-width: 1100px) 100vw, 1000px"
                  priority
                />
              </div>
            </div>
          </section>
        ) : null}

        <section className="case-section">
          <div className="mx-auto max-w-[1100px]">
            <h2 className={h2Class}>LE DÉFI</h2>
            {data.challenge.map((paragraph, index) => (
              <p key={paragraph} className={`case-text ${index > 0 ? "mt-5" : ""}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="case-section">
          <div className="mx-auto max-w-[1100px]">
            <h2 className={h2Class}>{data.featuresTitle ?? "CE QUE FAIT L'APPLICATION"}</h2>
            <ul className="case-list">
              {data.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="case-section">
          <div className="mx-auto max-w-[1100px]">
            <h2 className={h2Class}>DÉCISIONS TECHNIQUES</h2>
            <div className="case-decisions">
              {data.decisions.map((item) => (
                <article key={item.title} className="case-decision">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {gallery.length > 0 ? (
          <section className="case-section">
            <div className="mx-auto max-w-[1100px]">
              <h2 className={h2Class}>APERÇU</h2>
              <div className="case-gallery">
                {gallery.map((shot) => (
                  <figure key={shot.src}>
                    <div className="case-shot">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        width={shot.width}
                        height={shot.height}
                        sizes="(max-width: 900px) 100vw, 540px"
                      />
                    </div>
                    <figcaption>{shot.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {data.architecture && data.architecture.length > 0 ? (
        <section className="case-section">
          <div className="mx-auto max-w-[1100px]">
            <h2 className={h2Class}>ARCHITECTURE</h2>
            <ol className="case-arch">
              {data.architecture!.map((node) => (
                <li key={node.name}>
                  <span className="font-mono-custom">{node.step}</span>
                  <strong>{node.name}</strong>
                  <span>{node.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
        ) : null}

        {data.quality && data.quality.length > 0 ? (
        <section className="case-section">
          <div className="mx-auto max-w-[1100px]">
            <h2 className={h2Class}>{data.qualityTitle ?? "QUALITÉ ET DÉPLOIEMENT"}</h2>
            <ul className="case-list">
              {data.quality!.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
        ) : null}

        <section className="compact-section">
          <div className="mx-auto max-w-[1100px] projects-page-cta">
            <div>
              <p className="font-mono-custom mb-4 text-[11px] uppercase tracking-[0.15em] text-[#c8f04a]">Suite</p>
              <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-none">
                UN PROJET
                <br />
                À DISCUTER ?
              </h2>
            </div>
            <div className="projects-page-cta-actions">
              <Link href="/#contact" className="cta-btn">
                Me contacter
              </Link>
              <Link href="/#projets" className="ghost-btn">
                Voir les autres projets
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
