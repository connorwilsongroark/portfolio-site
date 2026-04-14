import type { Project } from "./types";

export const patternAtlasProject: Project = {
  slug: "pattern-atlas",
  title: "Pattern Atlas",
  tagline:
    "A modern design pattern reference that helps developers learn, compare, and apply patterns in a practical order.",
  summary:
    "Pattern Atlas is a React and TypeScript web application designed to make software design patterns easier to understand through structured content, guided learning, side-by-side comparison, and quiz-based recall. Instead of presenting patterns as a flat academic catalog, the project organizes them by practical importance, difficulty, and career stage so developers can build intuition around when and why a pattern is useful.",

  description:
    "I built Pattern Atlas as both a learning tool and a content-driven front-end project. The goal was to create a reference that feels more practical than many traditional design pattern resources by focusing on real-world distinctions, modern examples, and a guided user experience. The site includes pattern detail pages, comparison routes, a quiz experience, and a learning path that helps users move from foundational patterns into more architectural and distributed-system concepts.",

  featured: true,
  era: "featured",
  presentation: "case-study",

  dates: {
    startedAt: "2026-02",
    completedAt: "2026-04",
    year: 2026,
  },

  domains: ["frontend", "architecture", "ui"],
  role: ["sole-developer", "frontend-developer", "ui-designer"],
  status: "completed",
  visibility: "public",

  tags: [
    "design-patterns",
    "react",
    "typescript",
    "tailwind",
    "learning-tool",
    "content-modeling",
    "information-architecture",
    "frontend-architecture",
  ],

  techStack: {
    languages: ["TypeScript"],
    frameworks: ["React"],
    libraries: ["React Router", "Tailwind CSS", "Lucide React", "Motion"],
    tools: ["Vite"],
    platforms: ["Web"],
  },

  problem:
    "Many design pattern resources are either too abstract, too academically framed, or too disconnected from modern software development. Learners often struggle to tell which patterns matter most, when they should be used, and how similar patterns differ in practice.",

  goals: [
    "Create a design pattern reference that feels practical and approachable",
    "Organize patterns by importance, difficulty, and career stage",
    "Help users compare commonly confused patterns more clearly",
    "Use modern examples and UI design to reinforce learning",
    "Design the project so the pattern catalog can grow without the UI becoming difficult to maintain",
  ],

  users: [
    "Developers learning design patterns for the first time",
    "Early-career engineers building architectural intuition",
    "Intermediate developers who want to sharpen pattern recognition",
    "Anyone looking for a more practical and modern pattern reference",
  ],

  features: [
    "Pattern detail pages with structured explanations, examples, and code samples",
    "Categorization by must-know, good-to-know, and de-emphasized patterns",
    "Difficulty and career-stage metadata for each pattern",
    "Learning path page that organizes patterns in a useful study order",
    "Pattern comparison pages for commonly confused concepts",
    "Quiz experience for recognition and recall",
    "Responsive navigation and page layouts",
    "Reusable content-driven architecture for scaling the catalog",
    "Theme-aware UI built on shared design tokens and reusable components",
  ],

  challenges: [
    "Designing a content schema that could support many patterns consistently without becoming too rigid or too verbose",
    "Balancing educational depth with readability so pages remain useful rather than overwhelming",
    "Choosing which patterns to emphasize and how to group them in a way that reflects real software development",
    "Building comparison and learning-path features that provide real value instead of feeling decorative",
    "Keeping the UI cohesive as the number of pattern pages and routes grows",
  ],

  solutions: [
    "Defined a typed content model so each pattern can be rendered consistently across multiple views",
    "Separated content concerns from presentation concerns to make the site easier to extend",
    "Built dedicated comparison, quiz, and learning-path experiences rather than relying only on a flat list of entries",
    "Used shared UI primitives and centralized styling tokens for consistency",
    "Treated the site as a guided learning product, not just a static reference",
  ],

  learningOutcomes: [
    "Improved at designing typed content schemas for scalable front-end applications",
    "Strengthened front-end architecture skills through reusable views, route structure, and shared rendering patterns",
    "Learned how to translate abstract software concepts into accessible educational interfaces",
    "Developed stronger instincts around information architecture and progressive disclosure",
    "Refined the ability to balance editorial clarity, UX design, and technical structure in one system",
  ],

  architecturalDecisions: [
    "Used a typed content-driven architecture so pattern data remains independent from UI rendering",
    "Built multiple learning surfaces including pattern detail, comparison, quiz, and learning-path views",
    "Centralized design tokens and reusable UI components to keep the interface visually and structurally consistent",
    "Designed routing and lookup utilities to support future growth of the pattern catalog",
  ],

  tradeoffs: [
    "A richer content model improves scalability but increases the effort required to author each pattern well",
    "Treating the site as a learning product adds more design and content complexity than a simple reference site",
    "Careful curation improves usefulness but requires subjective decisions about which patterns deserve emphasis",
    "Building polished educational UX slows development compared to shipping a simpler catalog",
  ],

  metrics: [
    { label: "Project type", value: "Content-driven learning application" },
    { label: "Primary focus", value: "Pattern learning and comparison" },
    {
      label: "Architecture style",
      value: "Typed React frontend with reusable content views",
    },
  ],

  links: [
    {
      label: "Live site",
      url: "https://connorwilsongroark.github.io/pattern-atlas/",
      type: "live",
    },
    {
      label: "Source code",
      url: "https://github.com/connorwilsongroark/pattern-atlas",
      type: "github",
    },
  ],

  codeAvailability: {
    repositoryUrl: "https://github.com/connorwilsongroark/pattern-atlas",
    isSourcePublic: true,
    isDemoPublic: true,
    notes:
      "Actively evolving as the catalog, quiz, and learning features expand.",
  },
};
