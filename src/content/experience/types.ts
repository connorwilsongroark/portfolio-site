// src/data/experience/types.ts

// -----------------------------
// Core classifications
// -----------------------------

export type EmploymentType =
  | "full-time"
  | "part-time"
  | "contract"
  | "freelance"
  | "internship"
  | "co-op"
  | "apprenticeship"
  | "temporary";

export type WorkplaceType = "on-site" | "hybrid" | "remote";

export type ExperienceStatus = "current" | "completed" | "planned";

export type ExperienceVisibility = "public" | "private" | "proprietary";

// -----------------------------
// Dates / timeline
// -----------------------------

export interface ExperienceDateRange {
  startedAt: string; // e.g. "2022-06"
  endedAt?: string; // omit if current
  year?: number; // useful for grouping in timeline UIs
  isCurrent?: boolean;
}

// -----------------------------
// Links & supporting structures
// -----------------------------

export type ExperienceLinkType =
  | "company"
  | "linkedin"
  | "case-study"
  | "team"
  | "press"
  | "article"
  | "documentation";

export interface ExperienceLink {
  label: string;
  url: string;
  type: ExperienceLinkType;
}

export interface ExperienceMetric {
  label: string;
  value: string;
}

export interface ExperienceReflection {
  title: string;
  before: string;
  now: string;
  reason: string;
}

// -----------------------------
// Projects / references
// -----------------------------

export interface RelatedProjectReference {
  slug: string; // links to Project.slug
  label?: string; // optional display label override
  relationship?:
    | "primary-project"
    | "supporting-project"
    | "internal-tool"
    | "platform-work"
    | "research"
    | "migration"
    | "feature-delivery";
}

// -----------------------------
// Ownership / access
// -----------------------------

export interface ExperienceConfidentiality {
  note: string;
  codeUnavailableReason?: string;
  canDiscussHighLevelArchitecture?: boolean;
  canShowScreenshots?: boolean;
  canNameClient?: boolean;
}

// -----------------------------
// Main Experience type
// -----------------------------

export interface Experience {
  // Identity
  slug: string;
  company: string;
  title: string;
  tagline?: string;
  summary: string;
  description?: string;

  // Organization / display
  featured?: boolean;
  pinnedOrder?: number;
  status: ExperienceStatus;
  visibility?: ExperienceVisibility;

  // Role context
  employmentType: EmploymentType;
  workplaceType?: WorkplaceType;
  location?: string;
  department?: string;
  organizationSize?: string; // e.g. "startup", "mid-size", "enterprise"

  // Timeline
  dates: ExperienceDateRange;

  // Scope / context
  responsibilities: string[];
  achievements?: string[];
  impact?: string[];
  leadership?: string[];
  collaboration?: string[];

  // Technology / domain
  domains?: string[];
  techStack?: {
    languages?: string[];
    frameworks?: string[];
    libraries?: string[];
    tools?: string[];
    databases?: string[];
    platforms?: string[];
    infrastructure?: string[];
  };

  // Business / product context
  teamSize?: number;
  users?: string[];
  businessContext?: string;
  notableSystems?: string[];

  // Problem-solving / execution
  challenges?: string[];
  solutions?: string[];
  architecturalDecisions?: string[];
  tradeoffs?: string[];
  learningOutcomes?: string[];

  // Retrospective
  whatIdDoDifferently?: ExperienceReflection[];
  reflection?: string;

  // Evidence
  metrics?: ExperienceMetric[];
  relatedProjects?: RelatedProjectReference[];
  links?: ExperienceLink[];

  // Confidentiality
  confidentiality?: ExperienceConfidentiality;
}
