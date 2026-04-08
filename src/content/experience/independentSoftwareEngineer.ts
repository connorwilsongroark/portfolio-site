import type { Experience } from "./types";

export const independentSoftwareEngineerExperience: Experience = {
  slug: "independent-software-engineer",
  company: "Independent",
  title: "Software Engineer",
  tagline:
    "Building personal products, deepening system design skills, and continuing structured technical growth.",
  summary:
    "Focused on building independent software projects with an emphasis on architecture, maintainability, performance, and thoughtful user experience.",
  featured: true,
  status: "current",
  visibility: "public",
  employmentType: "freelance",
  workplaceType: "remote",
  dates: {
    startedAt: "2025-10",
    isCurrent: true,
    year: 2024,
  },
  responsibilities: [
    "Designed and built full-stack and front-end-heavy personal software projects.",
    "Practiced scalable architecture, feature organization, and maintainable component design.",
    "Used independent study and online coursework to strengthen technical and UX skills.",
  ],
  relatedProjects: [
    {
      slug: "tile-based-game-engine",
      relationship: "research",
    },
    {
      slug: "pattern-atlas",
      relationship: "feature-delivery",
    },
  ],
};
