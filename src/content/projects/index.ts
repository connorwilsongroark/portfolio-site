// src/data/projects/index.ts

import type { Project, ProjectDomain, ProjectEra } from "./types";

import { employeeGradingProject } from "./employeePerformanceGrading";
import { employeeOrgChartProject } from "./employeeOrgChart";
import { roc3EmployeeRewardsProject } from "./roc3EmployeeRewards";
import { tileBasedGameEngineProject } from "./tileBasedGameEngine";
import { vendorGradingProject } from "./vendorGrading";

// Re-export individual project modules
export { employeeGradingProject } from "./employeePerformanceGrading";
export { employeeOrgChartProject } from "./employeeOrgChart";
export { roc3EmployeeRewardsProject } from "./roc3EmployeeRewards";
export { tileBasedGameEngineProject } from "./tileBasedGameEngine";
export { vendorGradingProject } from "./vendorGrading";

// Master collection
export const projects: Project[] = [
  tileBasedGameEngineProject,
  roc3EmployeeRewardsProject,
  employeeGradingProject,
  vendorGradingProject,
  employeeOrgChartProject,
];

// Basic queries
export function listProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function listFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function listProjectsByEra(era: ProjectEra): Project[] {
  return projects.filter((project) => project.era === era);
}

export function listProjectsByDomain(domain: ProjectDomain): Project[] {
  return projects.filter((project) => project.domains.includes(domain));
}

export function listProjectsByVisibility(
  visibility: Project["visibility"],
): Project[] {
  return projects.filter((project) => project.visibility === visibility);
}

// Higher-level portfolio groupings
export type ProjectCollection =
  | "all"
  | "engineering"
  | "data"
  | "ux"
  | "archive";

export function matchesCollection(
  project: Project,
  collection: ProjectCollection,
): boolean {
  switch (collection) {
    case "all":
      return project.era !== "archive";

    case "engineering":
      return project.domains.some((domain) =>
        [
          "frontend",
          "backend",
          "api",
          "architecture",
          "desktop",
          "mobile",
          "devops",
          "testing",
          "game-dev",
        ].includes(domain),
      );

    case "data":
      return project.domains.some((domain) =>
        ["database", "data"].includes(domain),
      );

    case "ux":
      return project.domains.some((domain) => ["ux", "ui"].includes(domain));

    case "archive":
      return project.era === "archive";
  }
}

export function listProjectsByCollection(
  collection: ProjectCollection,
): Project[] {
  return projects.filter((project) => matchesCollection(project, collection));
}

// Sorting helpers
export function sortProjectsByPinnedOrder(items: Project[]): Project[] {
  return [...items].sort((a, b) => {
    const aOrder = a.pinnedOrder ?? Number.MAX_SAFE_INTEGER;
    const bOrder = b.pinnedOrder ?? Number.MAX_SAFE_INTEGER;
    return aOrder - bOrder;
  });
}

export function sortProjectsByYearDesc(items: Project[]): Project[] {
  return [...items].sort((a, b) => {
    const aYear = a.dates?.year ?? 0;
    const bYear = b.dates?.year ?? 0;
    return bYear - aYear;
  });
}

export function sortProjectsByStartDateDesc(items: Project[]): Project[] {
  return [...items].sort((a, b) => {
    const aTime = a.dates?.startedAt
      ? new Date(a.dates.startedAt).getTime()
      : 0;

    const bTime = b.dates?.startedAt
      ? new Date(b.dates.startedAt).getTime()
      : 0;

    return bTime - aTime;
  });
}

// Common prebuilt views
export function listFeaturedProjectsSorted(): Project[] {
  return sortProjectsByPinnedOrder(listFeaturedProjects());
}

export function listRecentProjectsSorted(): Project[] {
  return sortProjectsByYearDesc(listProjectsByEra("recent"));
}

export function listArchiveProjectsSorted(): Project[] {
  return sortProjectsByYearDesc(listProjectsByEra("archive"));
}
