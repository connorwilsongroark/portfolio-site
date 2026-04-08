import type { Experience } from "../experience/types";
import type { Project } from "../projects/types";

export type CareerTimelineEntryKind = "experience";

export interface CareerTimelineExperienceEntry {
  id: string;
  kind: "experience";
  experience: Experience;
  projects?: Project[];
}

export type CareerTimelineEntry = CareerTimelineExperienceEntry;
