import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/app/data/projects";

export function FeaturedProject({ project }: { project: Project }) {
  const [main, ...others] = project.screenshots ?? [];

  return (
    <article className="feat-card" aria-labelledby={`feat-${project.id}`}>
      <div className="feat-text">
        <div className="feat-meta">
          <span className="font-mono-custom text-xs text-[#c8f04a]">{project.number}</span>
          <span className="tag-pill">Projet phare</span>
        </div>

        <h3 id={`feat-${project.id}`} className="font-display feat-title">
          {project.title.toUpperCase()}
        </h3>
        <p className="feat-desc">{project.desc}</p>

        {project.facts ? (
          <dl className="feat-facts">
            {project.facts.map((fact) => (
              <div key={fact.label} className="feat-fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        <p className="feat-stack font-mono-custom">{project.stack.join(" · ")}</p>

        <div className="feat-actions">
          {project.slug ? (
            <Link href={`/projets/${project.slug}`} className="cta-btn">
              Lire l&apos;étude de cas <span aria-hidden="true">→</span>
            </Link>
          ) : null}
          <a href={project.link} target="_blank" rel="noreferrer" className="ghost-btn">
            Voir la démo
          </a>
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="ghost-btn">
              Code source
            </a>
          ) : null}
        </div>
      </div>

      {main ? (
        <div className="feat-media">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="feat-shot feat-shot-main"
            tabIndex={-1}
            aria-hidden="true"
          >
            <Image
              src={main.src}
              alt={main.alt}
              width={main.width}
              height={main.height}
              sizes="(max-width: 900px) 100vw, 600px"
            />
          </a>
          {others.length > 0 ? (
            <div className="feat-thumbs">
              {others.slice(0, 2).map((shot) => (
                <div key={shot.src} className="feat-shot">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes="(max-width: 900px) 50vw, 300px"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export function CompactProjects({ projects }: { projects: Project[] }) {
  return (
    <div className="mini-grid">
      {projects.map((project) => (
        <article key={project.id} className="mini-card">
          <div className="mini-top">
            <span className="font-mono-custom text-xs text-[rgba(240,237,230,0.45)]">{project.number}</span>
            <span className="tag-pill">{project.tag}</span>
          </div>
          <h3 className="mini-title">{project.title}</h3>
          <p className="mini-desc">{project.desc}</p>
          <p className="mini-stack font-mono-custom">{project.stack.join(" · ")}</p>
          <div className="mini-links">
            {project.slug ? (
              <Link href={`/projets/${project.slug}`} className="mini-link">
                Étude de cas <span aria-hidden="true">→</span>
              </Link>
            ) : null}
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={project.slug ? "mini-link mini-link-quiet" : "mini-link"}
              aria-label={`Voir le projet ${project.title}`}
            >
              Voir le projet {project.slug ? null : <span aria-hidden="true">→</span>}
            </a>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mini-link mini-link-quiet"
                aria-label={`Code source du projet ${project.title}`}
              >
                Code source
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
