import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { Experience } from "../../content/experience/types";
import type { Project } from "../../content/projects/types";
import { ProjectTimelinePreview } from "./ProjectTimelinePreview";

const DEFAULT_VISIBLE_PROJECT_COUNT = 3;

function SectionHeading({ children }: { children: string }) {
  return (
    <p className='text-xs font-medium uppercase tracking-[0.14em] text-text-subtle'>
      {children}
    </p>
  );
}

export function ExperienceTimelineCard({
  experience,
  projects,
}: {
  experience: Experience;
  projects: Project[];
}) {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const hasProjectOverflow = projects.length > DEFAULT_VISIBLE_PROJECT_COUNT;

  const visibleProjects = useMemo(() => {
    if (showAllProjects || !hasProjectOverflow) {
      return projects;
    }

    return projects.slice(0, DEFAULT_VISIBLE_PROJECT_COUNT);
  }, [hasProjectOverflow, projects, showAllProjects]);

  const hiddenProjectCount = Math.max(
    0,
    projects.length - DEFAULT_VISIBLE_PROJECT_COUNT,
  );

  return (
    <article className='rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6'>
      <Link
        to={`/career/${experience.slug}`}
        className='group block rounded-xl outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary/40'
      >
        <div className='flex flex-wrap items-center gap-2'>
          <span className='rounded-full border border-border bg-surface-alt px-2.5 py-1 text-xs font-medium text-text-subtle'>
            Experience
          </span>

          <span className='text-sm text-text-subtle'>
            {formatEmploymentType(experience.employmentType)}
          </span>

          {experience.workplaceType ? (
            <span className='text-sm text-text-subtle'>
              • {formatWorkplaceType(experience.workplaceType)}
            </span>
          ) : null}
        </div>

        <div className='mt-4'>
          <h2 className='text-lg font-semibold text-text transition-colors group-hover:text-primary sm:text-xl'>
            {experience.title}
          </h2>

          <p className='mt-1 text-sm font-medium text-text-muted sm:text-base'>
            {experience.company}
          </p>
        </div>

        {experience.tagline ? (
          <p className='mt-3 text-sm leading-7 text-text sm:text-base'>
            {experience.tagline}
          </p>
        ) : null}

        <p className='mt-3 text-sm leading-7 text-text-muted sm:text-base'>
          {experience.summary}
        </p>
      </Link>

      {projects.length > 0 ? (
        <section className='mt-6 border-t border-border pt-5'>
          <div className='flex items-center justify-between gap-3'>
            <SectionHeading>
              {showAllProjects || !hasProjectOverflow
                ? "Projects"
                : "Selected Projects"}
            </SectionHeading>

            <span className='text-xs text-text-subtle'>
              {projects.length} total
            </span>
          </div>

          <div className='mt-3 space-y-3'>
            {visibleProjects.map((project) => (
              <ProjectTimelinePreview
                key={project.slug}
                slug={project.slug}
                title={project.title}
                tagline={project.tagline}
              />
            ))}
          </div>

          {hasProjectOverflow ? (
            <div className='mt-4'>
              <button
                type='button'
                onClick={() => setShowAllProjects((current) => !current)}
                className='rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text transition-colors hover:bg-surface-alt'
                aria-expanded={showAllProjects}
              >
                {showAllProjects
                  ? "Show fewer"
                  : `Show ${hiddenProjectCount} more project${
                      hiddenProjectCount === 1 ? "" : "s"
                    }`}
              </button>
            </div>
          ) : null}
        </section>
      ) : null}
    </article>
  );
}

function formatEmploymentType(value: Experience["employmentType"]) {
  switch (value) {
    case "full-time":
      return "Full-time";
    case "part-time":
      return "Part-time";
    case "contract":
      return "Contract";
    case "freelance":
      return "Freelance";
    case "internship":
      return "Internship";
    case "co-op":
      return "Co-op";
    case "apprenticeship":
      return "Apprenticeship";
    case "temporary":
      return "Temporary";
    default:
      return value;
  }
}

function formatWorkplaceType(value: NonNullable<Experience["workplaceType"]>) {
  switch (value) {
    case "on-site":
      return "On-site";
    case "hybrid":
      return "Hybrid";
    case "remote":
      return "Remote";
    default:
      return value;
  }
}
