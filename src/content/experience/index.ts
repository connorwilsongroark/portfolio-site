import type { Experience } from "./types";

import { heroFacilityServicesExperience } from "./heroFacilityServices";
import { theAdLeafExperience } from "./theAdLeaf";
import { rootshellPlantersExperience } from "./rootshellPlanters";
import { independentSoftwareEngineerExperience } from "./independentSoftwareEngineer";

export { heroFacilityServicesExperience } from "./heroFacilityServices";
export { theAdLeafExperience } from "./theAdLeaf";
export { rootshellPlantersExperience } from "./rootshellPlanters";
export { independentSoftwareEngineerExperience } from "./independentSoftwareEngineer";

export const experiences: Experience[] = [
  heroFacilityServicesExperience,
  theAdLeafExperience,
  rootshellPlantersExperience,
  independentSoftwareEngineerExperience,
];

export function listExperiences(): Experience[] {
  return experiences;
}

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((experience) => experience.slug === slug);
}
