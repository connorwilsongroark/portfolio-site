import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageContainer } from "../components/layout/PageContainer";
import { Badge } from "../components/ui/Badge";
import {
  listProjectsByCollection,
  sortProjectsByStartDateDesc,
  type ProjectCollection,
} from "../content/projects";
import type { Project } from "../content/projects/types";
import { cx } from "../lib/cx";

const collectionOptions: Array<{
  value: ProjectCollection;
  label: string;
}> = [
  { value: "all", label: "All" },
  { value: "engineering", label: "Engineering" },
  { value: "data", label: "Data" },
  { value: "ux", label: "UX" },
  { value: "archive", label: "Archive" },
];

function formatTimelineDate(project: Project) {
  const startedAt = project.dates?.startedAt;
  const completedAt = project.dates?.completedAt;

  if (startedAt && completedAt) {
    return `${startedAt} — ${completedAt}`;
  }

  if (startedAt) {
    return `${startedAt} — Present`;
  }

  if (project.dates?.year) {
    return String(project.dates.year);
  }

  return "Date unavailable";
}

function ProjectCollectionTabs({
  value,
  onChange,
}: {
  value: ProjectCollection;
  onChange: (value: ProjectCollection) => void;
}) {
  return (
    <div className='-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0'>
      <div className='flex min-w-max gap-2'>
        {collectionOptions.map((option) => {
          const isActive = option.value === value;

          return (
            <button
              key={option.value}
              type='button'
              onClick={() => onChange(option.value)}
              className={cx(
                "shrink-0 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                isActive
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border bg-surface text-text-subtle hover:bg-surface-alt hover:text-text",
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ProjectTimelineItem({
  project,
  isLast,
}: {
  project: Project;
  isLast: boolean;
}) {
  return (
    <article className='relative grid grid-cols-[20px_minmax(0,1fr)] gap-4 sm:grid-cols-[110px_24px_minmax(0,1fr)] sm:gap-5'>
      <div className='relative flex justify-center sm:order-2'>
        {!isLast && (
          <span className='absolute bottom-[-1.5rem] top-5 w-px bg-border' />
        )}
        <span className='relative mt-2 h-3 w-3 rounded-full border-2 border-background bg-primary shadow-sm' />
      </div>

      <div className='min-w-0 sm:order-3'>
        <Link
          to={`/projects/${project.slug}`}
          className='group block rounded-xl border border-border bg-surface p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-surface-alt/40 hover:shadow-md sm:p-6'
        >
          <p className='mb-3 text-xs font-medium uppercase tracking-[0.14em] text-text-subtle sm:hidden'>
            {formatTimelineDate(project)}
          </p>

          <div className='flex flex-wrap gap-2'>
            {project.domains.slice(0, 2).map((domain) => (
              <Badge key={domain}>{domain}</Badge>
            ))}
            {project.status && <Badge>{project.status}</Badge>}
          </div>

          <div className='mt-4'>
            <h2 className='text-lg font-semibold text-text transition-colors group-hover:text-primary sm:text-xl'>
              {project.title}
            </h2>
            <p className='mt-2 text-sm leading-7 text-text-muted sm:text-base'>
              {project.tagline}
            </p>
          </div>

          {project.summary && (
            <p className='mt-4 line-clamp-2 text-sm leading-7 text-text-muted sm:line-clamp-3 sm:text-base'>
              {project.summary}
            </p>
          )}

          <div className='mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-subtle'>
            {project.role?.length ? (
              <span>
                <span className='font-medium text-text'>Role:</span>{" "}
                {project.role.join(", ")}
              </span>
            ) : null}

            {project.visibility ? (
              <span>
                <span className='font-medium text-text'>Visibility:</span>{" "}
                {project.visibility}
              </span>
            ) : null}
          </div>
        </Link>
      </div>

      <div className='hidden pt-1 text-right sm:order-1 sm:block'>
        <p className='text-xs font-medium uppercase tracking-[0.14em] text-text-subtle sm:text-sm'>
          {formatTimelineDate(project)}
        </p>
      </div>
    </article>
  );
}

function ProjectTimeline({ projects }: { projects: Project[] }) {
  return (
    <div className='space-y-5 sm:space-y-8'>
      {projects.map((project, index) => (
        <ProjectTimelineItem
          key={project.slug}
          project={project}
          isLast={index === projects.length - 1}
        />
      ))}
    </div>
  );
}

export function ProjectsPage() {
  const [collection, setCollection] = useState<ProjectCollection>("all");

  const projects = useMemo(() => {
    return sortProjectsByStartDateDesc(listProjectsByCollection(collection));
  }, [collection]);

  return (
    <PageContainer>
      <div className='mx-auto max-w-5xl px-4 py-8 sm:py-10'>
        <header className='space-y-4'>
          <div>
            <h1 className='text-3xl font-bold tracking-tight text-text sm:text-4xl'>
              Projects
            </h1>
            <p className='mt-3 max-w-3xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8'>
              A timeline of software projects, systems work, and design-minded
              case studies. I care about architecture, maintainability, and
              performance, but also about clarity, usability, and how a product
              feels to use.
            </p>
          </div>

          <ProjectCollectionTabs value={collection} onChange={setCollection} />
        </header>

        <div className='mt-8 sm:mt-10'>
          {projects.length > 0 ? (
            <ProjectTimeline projects={projects} />
          ) : (
            <div className='rounded-xl border border-border bg-surface p-5 shadow-sm sm:p-6'>
              <p className='text-sm leading-7 text-text-muted sm:text-base'>
                No projects found in this collection yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
}
