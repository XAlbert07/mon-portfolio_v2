"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * @typedef {object} Project
 * @property {number} id
 * @property {string} title
 * @property {string} tag
 * @property {string} desc
 * @property {string} challenge
 * @property {string} outcome
 * @property {readonly string[]} deliverables
 * @property {readonly string[]} stack
 * @property {string} link
 * @property {string} number
 */

/**
 * @param {{
 *   projects: readonly Project[];
 *   desktopLimit?: number;
 *   mobileLimit?: number;
 *   showCasesOnMobile?: boolean;
 *   mobileDeliverablesLimit?: number;
 *   showAllLinkHref?: string;
 *   showAllLinkLabel?: string;
 * }} props
 */
export default function ProjectsGrid({
  projects,
  desktopLimit = undefined,
  mobileLimit = undefined,
  showCasesOnMobile = true,
  mobileDeliverablesLimit = undefined,
  showAllLinkHref = undefined,
  showAllLinkLabel = undefined,
}) {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

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

  const limitedProjects = (() => {
    if (isMobileViewport && typeof mobileLimit === "number") {
      return projects.slice(0, mobileLimit);
    }

    if (typeof desktopLimit === "number") {
      return projects.slice(0, desktopLimit);
    }

    return projects;
  })();

  const showCaseBlocks = !isMobileViewport || showCasesOnMobile;

  return (
    <>
      <div className="projects-grid">
        {limitedProjects.map((project) => (
          <article
            key={project.id}
            className="project-card"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-card-top">
              <span
                className={`font-mono-custom text-xs transition-colors duration-300 ${
                  hoveredProject === project.id ? "text-[#c8f04a]" : "text-[rgba(240,237,230,0.25)]"
                }`}
              >
                {project.number}
              </span>
              <span className="tag-pill">{project.tag}</span>
            </div>

            <div className="project-card-header">
              <div className="project-main">
                <h3
                  className={`text-[clamp(26px,3vw,36px)] font-medium transition-colors duration-300 ${
                    hoveredProject === project.id ? "text-[#c8f04a]" : "text-[#f0ede6]"
                  }`}
                >
                  {project.title}
                </h3>
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
                <span aria-hidden="true" className="project-link-icon">→</span>
                <span className="project-link-label">Voir le projet</span>
                <span className="sr-only">{project.title}</span>
              </a>
            </div>

            <p className="project-summary">{project.desc}</p>

            {showCaseBlocks && (
              <div className="project-case-grid">
                <div className="project-case-block">
                  <span className="project-case-label">Enjeu</span>
                  <p>{project.challenge}</p>
                </div>
                <div className="project-case-block">
                  <span className="project-case-label">Résultat</span>
                  <p>{project.outcome}</p>
                </div>
              </div>
            )}

            <div className="project-footer">
              <div className="project-deliverables">
                {(isMobileViewport && typeof mobileDeliverablesLimit === "number"
                  ? project.deliverables.slice(0, mobileDeliverablesLimit)
                  : project.deliverables
                ).map((item) => (
                  <span key={item} className="project-point">
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-tech-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="font-mono-custom text-[11px] text-[rgba(240,237,230,0.35)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {showAllLinkHref && showAllLinkLabel ? (
        <div className="projects-grid-actions">
          <Link href={showAllLinkHref} className="ghost-btn">
            {showAllLinkLabel}
          </Link>
        </div>
      ) : null}
    </>
  );
}
