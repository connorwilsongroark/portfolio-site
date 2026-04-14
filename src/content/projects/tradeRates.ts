import type { Project } from "./types";

export const tradeRateManagementProject: Project = {
  slug: "trade-rate-management-system",
  title: "Trade Rate Management System",
  tagline:
    "A highly normalized pricing engine supporting vendors, customers, and site-level overrides with complex rate structures.",
  summary:
    "Re-architected a legacy trade rate system into a fully normalized, scalable pricing engine capable of handling vendor rates, corporate customer rates, and site-level overrides. The system supports multiple dimensions of pricing including trade type, expertise level (e.g., journeyman vs apprentice), time-based rate schedules (standard, overtime, emergency, holiday), travel policies, and flexible unit-based charges. I designed a relational schema that unified these concepts across entity types and built complex stored procedures to manage updates across interconnected tables. To support adoption, I also developed migration scripts to normalize hundreds of thousands of legacy records and created abstraction views that allowed the rest of the application to consume the new structure in a simplified, flattened format.",

  featured: false,
  era: "recent",
  dates: {
    startedAt: "2025-03",
    completedAt: "2025-05",
    year: 2025,
  },

  domains: ["backend", "database", "architecture", "internal-tools"],
  role: ["sole-developer"],
  status: "completed",
  visibility: "proprietary",

  techStack: {
    languages: ["T-SQL", "VB.NET"],
    databases: ["SQL Server"],
    tools: ["SSMS", "Visual Studio"],
    platforms: ["Internal systems"],
  },

  tags: [
    "data-modeling",
    "schema-design",
    "sql-server",
    "normalization",
    "stored-procedures",
    "data-migration",
    "pricing-engine",
    "business-rules",
    "validation",
    "backwards-compatibility",
    "enterprise-systems",
  ],

  problem:
    "The existing trade rate system relied on legacy tables with excessive, poorly understood columns, making it difficult to maintain, extend, or reliably determine which fields were actively used in production.",

  goals: [
    "Replace legacy flat tables with a normalized, scalable schema",
    "Support vendor, corporate customer, and site-level pricing in a unified system",
    "Model trade-specific rates with multiple dimensions (expertise, time, travel, etc.)",
    "Allow flexible pricing structures including unit-based and arbitrary charges",
    "Support markup scales with validation to prevent overlapping ranges",
    "Ensure data consistency across all related tables during updates",
    "Provide a migration path for legacy data without breaking existing systems",
    "Expose simplified data structures for UI and reporting layers",
  ],

  users: [
    "Operations and pricing teams",
    "Internal administrators configuring rates",
    "Systems consuming pricing data for work orders and billing",
  ],

  features: [
    "Normalized schema supporting vendors, corporate customers, and site-level pricing",
    "Trade-based pricing tied to Trade IDs (e.g., HVAC, plumbing, electrical)",
    "Support for expertise levels such as journeyman and apprentice",
    "Time-based rate schedules (standard, overtime, emergency, holiday)",
    "Configurable travel policies including per-trip and per-mile pricing",
    "Support for arbitrary unit-based charges (e.g., per foot, per yard, per building)",
    "Customer-level and site-level overrides for negotiated pricing",
    "Markup scales with up to six configurable tiers per entity",
    "Validation logic to prevent overlapping markup ranges",
    "Reusable pricing structure applied consistently across vendors and customers",
    "Stored procedures handling multi-table inserts and updates as atomic operations",
    "Data migration scripts to normalize legacy data into the new schema",
    "Database views that flatten normalized data for UI consumption",
  ],

  challenges: [
    "Designing a schema flexible enough to support multiple entity types with different pricing rules",
    "Modeling time-based and expertise-based rate variations without introducing redundancy",
    "Supporting both structured and semi-arbitrary pricing models (e.g., unit-based charges)",
    "Ensuring markup scales were valid and non-overlapping",
    "Maintaining data consistency across many related tables during updates",
    "Migrating hundreds of thousands of legacy records into a new structure",
    "Ensuring backwards compatibility for systems expecting flatter data structures",
  ],

  solutions: [
    "Designed a normalized relational schema separating rates, time windows, travel policies, and markup scales",
    "Abstracted pricing logic into reusable structures shared across vendors and customers",
    "Implemented stored procedures to manage complex multi-table updates atomically",
    "Built validation logic to enforce non-overlapping markup scales and valid configurations",
    "Created migration scripts to transform legacy flat data into the new schema",
    "Developed database views to provide flattened representations for UI and reporting",
    "Unified pricing logic across entity types to reduce duplication and improve maintainability",
  ],

  learningOutcomes: [
    "Deepened my understanding of relational database normalization and schema design",
    "Learned how to model complex, real-world pricing systems in SQL",
    "Gained experience designing systems that balance flexibility with data integrity",
    "Improved my ability to migrate large datasets safely between incompatible schemas",
    "Learned how to maintain backwards compatibility during major architectural transitions",
  ],

  architecturalDecisions: [
    "Normalized pricing data into separate but related tables for rates, time windows, travel policies, and markup scales",
    "Used Trade ID and expertise level as core dimensions for rate definition",
    "Applied the same pricing model across vendors, customers, and site-level overrides",
    "Encapsulated multi-table updates within stored procedures to ensure atomicity",
    "Introduced validation layers within stored procedures to enforce business rules",
    "Created database views to bridge normalized storage with flat consumption patterns",
    "Implemented a one-time migration pipeline to convert legacy data into the new schema",
  ],

  tradeoffs: [
    "A highly normalized schema increased query complexity but improved long-term maintainability",
    "Stored procedure complexity increased due to multi-table coordination",
    "Migration effort was significant but necessary to eliminate legacy technical debt",
    "Flattened views simplified consumption but required careful synchronization with underlying schema changes",
  ],

  metrics: [
    {
      label: "Data scale",
      value: "Hundreds of thousands of legacy records migrated",
    },
    {
      label: "Schema improvement",
      value:
        "Transition from flat legacy tables to normalized relational model",
    },
    {
      label: "Flexibility",
      value: "Supports vendors, corporate customers, and site-level overrides",
    },
    {
      label: "Validation",
      value:
        "Enforced non-overlapping markup scales and consistent pricing rules",
    },
    {
      label: "Compatibility",
      value:
        "Flattened views enabled seamless integration with existing systems",
    },
  ],

  proprietaryDetails: {
    companyName: "Hero Facility Services",
    note: "This system served as the core pricing engine for vendor costs and customer billing across the organization.",
    codeUnavailableReason:
      "The schema, stored procedures, and migration scripts were developed within a private enterprise system and are not publicly accessible.",
    canDiscussHighLevelArchitecture: true,
    canShowScreenshots: false,
  },

  codeAvailability: {
    isSourcePublic: false,
    isDemoPublic: false,
    notes:
      "This project was developed for internal enterprise use and is not available publicly.",
  },
};
