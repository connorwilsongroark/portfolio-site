import type { Project } from "./types";
import { DiamondGridIcon } from "../../features/projects/icons/DiamondGridIcon";

export const tileBasedGameEngineProject: Project = {
  slug: "tile-based-game-engine",
  title: "Tile-Based Game Engine",
  tagline:
    "A custom TypeScript game engine exploring deterministic simulation, ECS patterns, and grid-based world systems.",
  summary:
    "Building a tile-based game engine from scratch in TypeScript using a deterministic tick-based simulation model. The project explores core engine architecture concepts including entity-component systems, event-driven design, pathfinding, input handling, and rendering pipelines. The focus is on understanding how real-time systems are structured by building core engine systems from first principles instead of relying on existing frameworks.",

  era: "featured",
  dates: {
    startedAt: "2026-02",
    completedAt: undefined,
    year: 2026,
  },
  featured: true,

  domains: ["frontend", "architecture", "game-dev"],
  role: ["sole-developer"],
  status: "in-progress",
  visibility: "public",

  techStack: {
    languages: ["TypeScript"],
    tools: ["Canvas API", "Vite"],
    platforms: ["Web"],
  },

  tags: [
    "game-engine",
    "ecs",
    "simulation",
    "pathfinding",
    "event-driven",
    "architecture",
    "typescript",
  ],

  problem:
    "Most game development is abstracted behind engines like Unity or Unreal, making it difficult to deeply understand how real-time systems, simulation loops, and rendering pipelines work under the hood.",
  goals: [
    "Build a game engine from first principles to understand core systems",
    "Implement a deterministic simulation loop with fixed ticks",
    "Explore entity-component-system architecture",
    "Design a flexible event-driven system for decoupled communication",
    "Create reusable systems for movement, input, and interaction",
  ],

  users: [
    "Primarily a learning and exploration project",
    "Potential future use as a foundation for simple games",
  ],

  features: [
    "Deterministic tick-based simulation loop",
    "Separation of simulation and rendering systems",
    "Event-driven architecture using a centralized event bus",
    "Entity-component system with sparse component storage",
    "Composable entity behaviors through modular components",
    "Tile-based world representation with occupancy tracking",
    "Pathfinding using A* with support for reachable fallback targets",
    "Movement planning and execution systems",
    "Pointer and wheel input systems for interaction",
    "Camera system with zoom anchoring and panning",
    "Canvas-based renderer with layered render passes",
    "Viewport scaling and zoom-aware rendering",
    "Intent-based interaction system translating user actions into world commands",
    "Basic interaction and action handling framework",
    "Early combat systems including targeting and attack resolution",
    "Clear separation of intent → command → simulation → outcome phases",
  ],

  challenges: [
    "Designing a system that remains flexible while multiple subsystems evolve simultaneously",
    "Keeping simulation deterministic while integrating user input and real-time rendering",
    "Managing complexity as features like movement, interaction, and combat intersect",
    "Building abstractions like ECS and event systems without overengineering or losing clarity",
  ],

  solutions: [
    "Separated intent, command, and outcome phases to structure simulation flow",
    "Used a fixed-timestep tick runner to maintain deterministic updates",
    "Decoupled systems using an event bus to reduce direct dependencies",
    "Built the engine incrementally, validating each subsystem before layering more complexity",
  ],

  learningOutcomes: [
    "Gained a deep understanding of how real-time systems and game loops operate",
    "Learned how ECS architecture enables flexible and scalable entity behavior",
    "Improved at designing event-driven systems for decoupled communication",
    "Developed stronger intuition for managing complexity in system design",
    "Learned how rendering, input, and simulation interact in a real-time environment",
  ],

  architecturalDecisions: [
    "Used a deterministic fixed-timestep simulation to ensure consistent behavior",
    "Separated simulation logic from rendering to maintain clarity and flexibility",
    "Adopted an ECS-inspired architecture for modular entity composition",
    "Implemented an event bus to decouple UI, input, and simulation systems",
  ],

  tradeoffs: [
    "Building from scratch provides deeper understanding but significantly increases development complexity",
    "ECS and event-driven systems improve flexibility but introduce additional abstraction overhead",
    "Focusing on architecture slows visible progress but results in a stronger foundation",
  ],

  metrics: [
    { label: "Architecture style", value: "ECS-inspired, event-driven" },
    { label: "Simulation model", value: "Deterministic fixed-timestep" },
    { label: "Rendering", value: "Canvas-based with layered passes" },
  ],

  codeAvailability: {
    isSourcePublic: true,
    isDemoPublic: false,
    notes: "Actively in development and evolving rapidly.",
  },
  projectIcon: DiamondGridIcon,
};
