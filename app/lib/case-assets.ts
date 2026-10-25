import { existsSync } from "node:fs";
import path from "node:path";
import type { CaseGalleryItem, CaseShot } from "@/app/components/CaseStudy";
import type { Project } from "@/app/data/projects";

const SHOT_WIDTH = 1200;
const SHOT_HEIGHT = 720;

/** Vrai si le fichier existe dans public/projets (évalué au build, côté serveur). */
export const hasProjectFile = (file: string) => existsSync(path.join(process.cwd(), "public", "projets", file));

/** Capture unique, ou undefined si le fichier n'existe pas encore. */
export function shotIfExists(file: string, alt: string): CaseShot | undefined {
  return hasProjectFile(file)
    ? { src: `/projets/${file}`, alt, width: SHOT_WIDTH, height: SHOT_HEIGHT }
    : undefined;
}

/** Galerie : ne garde que les captures dont le fichier existe. */
export function galleryIfExists(items: { file: string; alt: string; caption: string }[]): CaseGalleryItem[] {
  return items
    .filter((item) => hasProjectFile(item.file))
    .map(({ file, alt, caption }) => ({
      src: `/projets/${file}`,
      alt,
      caption,
      width: SHOT_WIDTH,
      height: SHOT_HEIGHT,
    }));
}

/** Ajoute la vignette des cartes de l'accueil quand la capture existe dans public/projets. */
export function withThumbs(list: Project[]): Project[] {
  return list.map((project) => {
    if (project.thumb || !project.autoThumb || !hasProjectFile(project.autoThumb.file)) {
      return project;
    }

    return {
      ...project,
      thumb: {
        src: `/projets/${project.autoThumb.file}`,
        alt: project.autoThumb.alt,
        width: SHOT_WIDTH,
        height: SHOT_HEIGHT,
      },
    };
  });
}
