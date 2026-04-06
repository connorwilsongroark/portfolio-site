import type { Project } from "./types";

export const employeeGradingProject: Project = {
  slug: "employee-performance-grading-system",
  title: "Employee Performance Grading System",
  tagline:
    "A composable, configurable SQL-based scoring system and reusable grading function library for organization-wide performance analysis.",
  summary:
    "Designed and implemented a company-wide performance grading system in SQL Server that evaluated employees across multiple roles and operational metrics. The system was built as a reusable library of parameterized grading functions, each responsible for a specific metric (e.g., note quality, SLA compliance, profit margins on work orders), which could be composed into higher-level scoring queries. Scores were calculated using data-driven grading tables that applied weighted penalties based on business-defined thresholds, allowing management to adjust the importance of each metric without changing code. The system also persisted weekly snapshots of employee scores, enabling historical trend analysis and allowing performance changes to be correlated with organizational factors such as manager assignments. With minimal initial guidance, I defined the metrics, scoring logic, and structure, resulting in a flexible and extensible system used to compare performance across leadership, operations, billing, and proposal teams.",

  era: "recent",
  dates: {
    startedAt: "2025-05",
    completedAt: "2025-10",
    year: 2025,
  },

  domains: ["backend", "database", "architecture", "data"],
  role: ["sole-developer"],
  status: "completed",
  visibility: "proprietary",

  techStack: {
    languages: ["SQL"],
    databases: ["SQL Server"],
    tools: ["SSMS", "SQL Server Agent"],
    platforms: ["Internal reporting systems"],
  },

  tags: [
    "sql-server",
    "reporting",
    "analytics",
    "performance-scoring",
    "business-logic",
    "ranking",
    "data-modeling",
    "composable-design",
    "parameterized-functions",
    "automation",
    "historical-analysis",
    "library-design",
    "configurable-systems",
  ],

  problem:
    "The business needed a structured, objective way to evaluate employee performance across roles and departments using operational and financial outcomes, rather than relying on fragmented reports or subjective interpretation.",
  goals: [
    "Define measurable performance metrics across multiple employee roles",
    "Create a repeatable scoring model that could be recalculated over time",
    "Support flexible time windows for performance evaluation",
    "Roll lower-level performance into higher-level organizational reporting",
    "Design a system that could evolve as new metrics were introduced",
    "Enable historical tracking of performance changes over time",
    "Provide a reusable library of grading functions for future development",
    "Allow scoring behavior to be tuned without code changes",
    "Support analysis of performance trends and organizational impact (e.g., manager changes)",
  ],

  users: [
    "Internal leadership",
    "Operations stakeholders",
    "Reporting and performance review teams",
    "Internal developers extending reporting capabilities",
  ],

  features: [
    "Generated performance metrics across leadership, operations, billing, and proposal-related roles",
    "Built a library of reusable, parameterized grading functions (e.g., GetNoteQualityByRPM, GetSLAComplianceByEAM, GetWOMarginsByVP)",
    "Accepted employee ID and date ranges to dynamically scope performance calculations",
    "Composed large grading queries by combining smaller metric functions (TVFs) using OUTER APPLY",
    "Enabled developers to build custom grading queries by composing existing metric functions",
    "Applied weighted penalties using grading tables to convert raw metrics into scores",
    "Externalized penalty values and metric weights into grading tables for easy adjustment",
    "Allowed management to tune scoring behavior by modifying weights and thresholds without requiring code changes",
    "Supported metrics such as write-offs, days to close, billed-for-incurred, vendor terms, and note activity",
    "Produced ranked outputs for employee comparison across roles and departments",
    "Persisted weekly snapshots of employee scores into reporting/audit tables",
    "Automated weekly grade generation and storage using SQL Server Agent",
    "Enabled historical auditing of performance trends over time",
    "Supported analysis of performance changes in relation to organizational factors such as manager reassignment",
  ],

  challenges: [
    "Translating loosely defined or ambiguous business expectations into precise, defensible SQL logic",
    "Designing a system that could combine many independent metrics into a unified scoring model",
    "Ensuring consistency and fairness when evaluating employees across different roles",
    "Keeping complex SQL logic readable and maintainable as the system expanded",
    "Building a flexible structure without clear upfront requirements for metrics",
    "Designing a system that could be safely extended by future developers",
  ],

  solutions: [
    "Designed a composable architecture of small, focused grading functions that could be reused and combined",
    "Structured grading logic as a library of functions rather than one-off queries",
    "Parameterized all grading functions by employee and date range to support flexible reporting windows",
    "Used OUTER APPLY to assemble multiple metric outputs into a single grading context",
    "Leveraged grading tables to apply weighted penalties in a data-driven way rather than hardcoding logic",
    "Designed scoring logic to be data-driven, allowing business stakeholders to adjust metric importance through configuration rather than code changes",
    "Separated metric calculation from scoring logic to improve clarity and extensibility",
    "Persisted weekly grading results into dedicated tables to enable longitudinal analysis",
    "Used SQL Server Agent to automate recurring grade calculations and data storage",
  ],

  learningOutcomes: [
    "Learned how to design composable analytical systems using SQL",
    "Improved at converting ambiguous business expectations into structured, measurable logic",
    "Developed a stronger understanding of weighting, scoring, and ranking methodologies",
    "Gained experience designing reusable systems that can be extended by other developers",
    "Learned how to balance power, readability, and maintainability in large SQL-based systems",
    "Gained insight into designing systems for historical analysis and trend tracking",
  ],

  architecturalDecisions: [
    "Used SQL Server as the primary calculation engine to keep logic close to the data source",
    "Structured the system as a library of reusable grading functions rather than monolithic queries",
    "Used OUTER APPLY to compose multiple metric functions into a single scoring query",
    "Externalized scoring weights and thresholds into grading tables for flexibility",
    "Separated scoring policy (weights and penalties) from implementation by storing them in configurable grading tables",
    "Parameterized all functions to support dynamic time-based analysis",
    "Persisted periodic snapshots of computed scores to enable historical reporting and auditing",
  ],

  tradeoffs: [
    "Keeping complex logic in SQL improved centralization but increased query complexity",
    "A highly composable and reusable design improved flexibility but required strong naming conventions and discipline",
    "Data-driven scoring tables made tuning easier but added an extra layer of indirection when debugging",
    "Making scoring configurable increased flexibility but required governance to ensure consistency in how metrics were weighted over time",
    "Persisting historical snapshots increased storage usage but enabled significantly richer analysis capabilities",
  ],

  metrics: [
    { label: "Scope", value: "Company-wide across multiple roles" },
    { label: "Architecture", value: "Composable grading function library" },
    { label: "Composition model", value: "Reusable functions + OUTER APPLY" },
    { label: "Scoring method", value: "Weighted penalties via grading tables" },
    { label: "Flexibility", value: "Parameterized by employee and date range" },
    {
      label: "Configurability",
      value: "Weights and penalties adjustable without code changes",
    },
    {
      label: "Historical tracking",
      value: "Weekly automated performance snapshots",
    },
  ],

  proprietaryDetails: {
    companyName: "Hero Facility Services",
    note: "This system was developed as part of internal performance analysis and scoring initiatives across multiple departments.",
    codeUnavailableReason:
      "The queries, schemas, and business logic were employer-owned and are no longer accessible to me.",
    canDiscussHighLevelArchitecture: true,
    canShowScreenshots: false,
  },

  codeAvailability: {
    isSourcePublic: false,
    isDemoPublic: false,
    notes:
      "This project was developed for internal business reporting and is not publicly available.",
  },
};
