import type { Project } from "./types";

export const classicRockApiProject: Project = {
  slug: "classic-rock-api",

  title: "Classic Rock API",

  tagline:
    "A modern ASP.NET Core API and React admin platform for managing structured music metadata with authentication, authorization, and relational content modeling.",

  summary:
    "ClassicRockApi is a full-stack music catalog platform built with ASP.NET Core Minimal APIs, Entity Framework Core, SQL Server, React, and TypeScript. The project focuses on clean API architecture, relational modeling, role-based authorization, and maintainable front-end tooling while serving as both a production-style backend and an extensible admin application.",

  description:
    "I built ClassicRockApi as a modern full-stack architecture project centered around structured music metadata and API design. The backend uses ASP.NET Core Minimal APIs with Entity Framework Core and SQL Server to model albums, artists, genres, and tracks through explicit many-to-many relationships and typed DTOs. The frontend is a React and TypeScript admin dashboard secured with Auth0 authentication and permission-based authorization. The project emphasizes maintainability, scalability, clean API contracts, reusable frontend patterns, and a professional development workflow including OpenAPI generation, automated documentation, and deployment preparation.",

  featured: true,
  era: "featured",
  presentation: "case-study",

  dates: {
    startedAt: "2026-04",
    completedAt: "2026-05",
    year: 2026,
  },

  domains: ["backend", "frontend", "api", "architecture"],

  role: [
    "sole-developer",
    "backend-developer",
    "frontend-developer",
    "ui-designer",
  ],

  status: "completed",
  visibility: "public",

  tags: [
    "aspnet-core",
    "minimal-api",
    "entity-framework-core",
    "sql-server",
    "react",
    "typescript",
    "auth0",
    "rest-api",
    "openapi",
    "swagger",
    "tailwind",
    "full-stack",
    "relational-modeling",
    "api-design",
    "role-based-authorization",
  ],

  techStack: {
    languages: ["C#", "TypeScript", "SQL"],
    frameworks: ["ASP.NET Core", "React"],
    libraries: [
      "Entity Framework Core",
      "React Router",
      "React Query / TanStack Query",
      "Tailwind CSS",
      "Auth0 React SDK",
      "shadcn/ui",
      "Lucide React",
    ],
    tools: [
      "SQL Server",
      "SSMS",
      "Swagger",
      "OpenAPI",
      "Widdershins",
      "Vite",
      "GitHub Pages",
      "Azure App Services",
      "Azure SQL Database",
    ],
    platforms: ["Web"],
  },

  problem:
    "Many music-related applications expose simplistic or inconsistent APIs that do not model relationships cleanly, scale well architecturally, or demonstrate professional backend design practices. The project was designed to explore how a modern full-stack application can combine relational modeling, clean API contracts, authorization, and maintainable UI architecture in a cohesive system.",

  goals: [
    "Build a modern REST API using ASP.NET Core Minimal APIs",
    "Model complex many-to-many music relationships explicitly and cleanly",
    "Create a secure admin dashboard with Auth0 authentication and permission-based (claims-based) authorization",
    "Design reusable frontend architecture with scalable state and routing patterns",
    "Generate professional API documentation from OpenAPI specifications",
    "Create a project that demonstrates production-oriented architectural thinking",
  ],

  users: [
    "Developers learning modern ASP.NET Core API architecture",
    "Developers exploring full-stack TypeScript and C# integration",
    "Administrators managing structured music metadata",
    "Portfolio reviewers evaluating backend and API design skills",
  ],

  features: [
    "RESTful ASP.NET Core Minimal API architecture",
    "Albums, artists, genres, and tracks CRUD management",
    "Explicit many-to-many relationship modeling with join entities",
    "Track ordering and album association management",
    "Role- and permission-based authorization using Auth0",
    "Protected admin dashboard built with React and TypeScript",
    "Typed frontend API integration with React Query / TanStack Query",
    "Dashboard layout with reusable UI primitives",
    "OpenAPI and Swagger documentation generation",
    "Automated markdown API reference generation using Widdershins",
    "Environment-specific deployment configuration",
    "Structured DTOs and validation patterns for API consistency",
  ],

  challenges: [
    "Designing relational models that remain flexible while avoiding ambiguous ownership and cascade behavior",
    "Balancing frontend simplicity with strongly typed API integration",
    "Implementing authorization in a way that cleanly separates authentication from permissions",
    "Keeping API contracts consistent as endpoint complexity increased",
    "Designing reusable frontend mutation and query patterns without overengineering",
    "Ensuring the project structure could scale cleanly as new entities and features were added",
  ],

  solutions: [
    "Used explicit join entities such as AlbumArtist, AlbumGenre, and AlbumTrack to model relationships cleanly",
    "Structured the backend around feature-based endpoint organization and typed request/response DTOs",
    "Implemented Auth0 JWT authentication with permission-based authorization policies",
    "Centralized frontend API interactions through reusable hooks and typed query abstractions",
    "Used OpenAPI generation and markdown tooling to create maintainable API documentation",
    "Focused on reusable UI primitives and composable layouts for long-term frontend maintainability",
  ],

  learningOutcomes: [
    "Strengthened backend architecture skills through real-world API design and relational modeling",
    "Improved understanding of authentication, authorization, and JWT-based security flows",
    "Learned how to structure scalable Minimal API applications using feature-oriented organization",
    "Gained experience designing frontend systems around typed API contracts and query synchronization",
    "Developed stronger instincts around API usability, documentation, and long-term maintainability",
    "Improved full-stack integration skills across React, ASP.NET Core, SQL Server, and deployment tooling",
  ],

  architecturalDecisions: [
    "Used ASP.NET Core Minimal APIs instead of MVC controllers to keep routing and endpoint structure lightweight and explicit",
    "Modeled many-to-many relationships through dedicated join entities rather than implicit EF Core relationships",
    "Separated request and response DTOs from entity models to preserve API contract flexibility",
    "Organized backend code by feature area rather than technical layer",
    "Used TanStack Query to centralize asynchronous frontend data synchronization and caching",
    "Integrated Auth0 for authentication while enforcing fine-grained permissions at the API level",
  ],

  tradeoffs: [
    "Explicit relational modeling increases verbosity but provides much clearer ownership and scalability",
    "Typed DTOs and validation improve maintainability but require additional mapping and structure",
    "Role- and permission-based authorization adds complexity compared to simple authentication",
    "Feature-oriented architecture improves scalability but requires more upfront organizational discipline",
    "Maintaining generated documentation introduces extra workflow steps but improves long-term API usability",
  ],

  metrics: [
    {
      label: "Project type",
      value: "Full-stack API and admin platform",
    },
    {
      label: "Primary focus",
      value: "Modern API architecture and relational modeling",
    },
    {
      label: "Backend architecture",
      value:
        "ASP.NET Core Minimal APIs with EF Core and Azure SQL Database & App Services",
    },
    {
      label: "Frontend architecture",
      value: "React + TypeScript admin dashboard with typed API integration",
    },
  ],

  links: [
    {
      label: "Source Code",
      url: "https://github.com/connorwilsongroark/ClassicRockApi",
      type: "github",
    },
    {
      label: "Admin Dashboard",
      url: "https://connorwilsongroark.github.io/ClassicRockApi/",
      type: "live",
    },
  ],

  codeAvailability: {
    repositoryUrl: "https://github.com/connorwilsongroark/ClassicRockApi",
    isSourcePublic: true,
    isDemoPublic: false,
    notes:
      "Actively evolving with continued work on API design, authorization, documentation, and frontend tooling. Please note that the Azure services take some time to spin up from a cold start, so first-load may take a few seconds.",
  },
};
