// src/data/projects/types.ts

import type { ComponentType, SVGProps } from "react";

// -----------------------------
// Core classifications
// -----------------------------

export type ProjectDomain =
  | "frontend"
  | "backend"
  | "database"
  | "ux"
  | "ui"
  | "api"
  | "architecture"
  | "internal-tools"
  | "desktop"
  | "mobile"
  | "devops"
  | "testing"
  | "data"
  | "game-dev";

export type ProjectStatus =
  | "planned"
  | "in-progress"
  | "completed"
  | "maintained"
  | "archived";

export type ProjectVisibility = "public" | "private" | "proprietary";

export type ProjectEra = "featured" | "recent" | "archive";

// -----------------------------
// Roles & presentation
// -----------------------------

export type ProjectRole =
  | "sole-developer"
  | "frontend-developer"
  | "backend-developer"
  | "full-stack-developer"
  | "desktop-developer"
  | "ux-designer"
  | "ui-designer"
  | "researcher"
  | "team-member"
  | "tech-lead";

export type ProjectPresentation =
  | "standard"
  | "case-study"
  | "technical-deep-dive"
  | "prototype-showcase";

export type ProjectIconComponent = ComponentType<SVGProps<SVGSVGElement>>;
// -----------------------------
// Links & artifacts
// -----------------------------

export type ProjectLinkType =
  | "live"
  | "github"
  | "demo"
  | "case-study"
  | "video"
  | "documentation"
  | "article"
  | "figma";

export interface ProjectLink {
  label: string;
  url: string;
  type: ProjectLinkType;
}

export type ProjectArtifactType =
  | "image"
  | "screenshot"
  | "mockup"
  | "wireframe"
  | "prototype"
  | "diagram";

export interface ProjectArtifact {
  type: ProjectArtifactType;
  src: string;
  alt: string;
  caption?: string;
}

// -----------------------------
// Supporting structures
// -----------------------------

export interface ProjectDateRange {
  startedAt?: string; // e.g. "2025-03"
  completedAt?: string; // e.g. "2025-06"
  year?: number; // useful for timeline grouping
}

export interface ProjectTechStack {
  languages?: string[];
  frameworks?: string[];
  libraries?: string[];
  tools?: string[];
  databases?: string[];
  platforms?: string[];
  infrastructure?: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

// -----------------------------
// Reflection / retrospective
// -----------------------------

export interface ProjectReflection {
  title: string;
  before: string;
  now: string;
  reason: string;
}

// -----------------------------
// Ownership / access
// -----------------------------

export interface ProprietaryDetails {
  companyName?: string;
  note: string;
  codeUnavailableReason: string;
  canDiscussHighLevelArchitecture?: boolean;
  canShowScreenshots?: boolean;
}

export interface CodeAvailability {
  repositoryUrl?: string;
  isSourcePublic: boolean;
  isDemoPublic: boolean;
  notes?: string;
}

// -----------------------------
// Main Project type
// -----------------------------

export interface Project {
  // Identity
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  description?: string;

  // Display / organization
  featured?: boolean;
  pinnedOrder?: number;
  era: ProjectEra;
  presentation?: ProjectPresentation;

  // Timeline
  dates?: ProjectDateRange;

  // Classification
  domains: ProjectDomain[];
  role: ProjectRole[];
  status: ProjectStatus;
  visibility: ProjectVisibility;
  tags?: string[];

  // Context
  teamSize?: number;
  organization?: string;
  isCoursework?: boolean;

  // Tech
  techStack?: ProjectTechStack;

  // Problem / goals
  problem?: string;
  goals?: string[];
  users?: string[];

  // Outcome sections
  features: string[];
  challenges?: string[];
  solutions?: string[];
  learningOutcomes?: string[];
  architecturalDecisions?: string[];
  tradeoffs?: string[];

  // Retrospective
  whatIdDoDifferently?: ProjectReflection[];
  reflection?: string; // useful for archive projects

  // Evidence
  metrics?: ProjectMetric[];
  artifacts?: ProjectArtifact[];
  links?: ProjectLink[];

  // Ownership / access
  proprietaryDetails?: ProprietaryDetails;
  codeAvailability?: CodeAvailability;

  // Styling and Icons
  projectIcon?: ProjectIconComponent;
}
