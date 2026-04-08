import type { CareerTimelineEntry } from "./types";
import type { Experience } from "../experience/types";
import { listExperiences } from "../experience";
import { listProjects } from "../projects";

export function listCareerTimelineEntries(): CareerTimelineEntry[] {
  const experiences = sortExperiencesByStartDateDesc(listExperiences());
  const projects = listProjects();

  return experiences.map((experience) => {
    const relatedProjects =
      experience.relatedProjects
        ?.map((reference) =>
          projects.find((project) => project.slug === reference.slug),
        )
        .filter((project): project is NonNullable<typeof project> =>
          Boolean(project),
        ) ?? [];

    return {
      id: experience.slug,
      kind: "experience",
      experience,
      projects: relatedProjects,
    };
  });
}

export function sortExperiencesByStartDateDesc(
  experiences: Experience[],
): Experience[] {
  return [...experiences].sort((a, b) => {
    const aStartedAt = a.dates.startedAt ?? "";
    const bStartedAt = b.dates.startedAt ?? "";

    return bStartedAt.localeCompare(aStartedAt);
  });
}
