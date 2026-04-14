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
  // { value: "archive", label: "Archive" },
];

function formatProjectDate(project: Project) {
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

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className='space-y-2'>
      {eyebrow ? (
        <p className='text-xs font-medium uppercase tracking-[0.14em] text-text-subtle'>
          {eyebrow}
        </p>
      ) : null}
      <h2 className='text-2xl font-semibold tracking-tight text-text sm:text-3xl'>
        {title}
      </h2>
      {description ? (
        <p className='max-w-3xl text-sm leading-7 text-text-muted sm:text-base'>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className='group block rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-alt/40 hover:shadow-md sm:p-6'
    >
      <div className='flex flex-wrap gap-2'>
        {project.domains.slice(0, 3).map((domain) => (
          <Badge key={domain}>{domain}</Badge>
        ))}
        {project.status ? <Badge>{project.status}</Badge> : null}
      </div>

      <div className='mt-4 space-y-3'>
        <div className='flex items-start justify-between gap-4'>
          <h3 className='text-xl font-semibold text-text transition-colors group-hover:text-primary sm:text-2xl'>
            {project.title}
          </h3>
          <span className='shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-text-subtle'>
            {formatProjectDate(project)}
          </span>
        </div>

        <p className='text-sm leading-7 text-text-muted sm:text-base'>
          {project.tagline}
        </p>

        {project.summary ? (
          <p className='line-clamp-3 text-sm leading-7 text-text-muted sm:text-base'>
            {project.summary}
          </p>
        ) : null}
      </div>

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

      <div className='mt-6'>
        <span className='inline-flex items-center text-sm font-medium text-primary'>
          View case study
          <span className='ml-1 transition-transform group-hover:translate-x-1'>
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className='group block h-full rounded-xl border border-border bg-surface p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-surface-alt/40 hover:shadow-md sm:p-5'
    >
      <div className='flex flex-wrap gap-2'>
        {project.domains.slice(0, 2).map((domain) => (
          <Badge key={domain}>{domain}</Badge>
        ))}
        {project.status ? <Badge>{project.status}</Badge> : null}
      </div>

      <div className='mt-4'>
        <div className='flex items-start justify-between gap-3'>
          <h3 className='text-lg font-semibold text-text transition-colors group-hover:text-primary'>
            {project.title}
          </h3>
          <span className='shrink-0 text-[11px] font-medium uppercase tracking-[0.12em] text-text-subtle'>
            {formatProjectDate(project)}
          </span>
        </div>

        <p className='mt-2 text-sm leading-7 text-text-muted'>
          {project.tagline}
        </p>

        {project.summary ? (
          <p className='mt-3 line-clamp-3 text-sm leading-7 text-text-muted'>
            {project.summary}
          </p>
        ) : null}
      </div>

      <div className='mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-subtle'>
        {project.role?.length ? (
          <span className='truncate'>
            <span className='font-medium text-text'>Role:</span>{" "}
            {project.role[0]}
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
  );
}

function FeaturedProjectsSection({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <section className='space-y-6'>
      <SectionHeading
        eyebrow='Highlights'
        title='Featured projects'
        description='A curated set of projects that best represent how I think about architecture, product quality, and maintainable systems.'
      />

      <div className='grid gap-4 md:grid-cols-2'>
        {projects.map((project) => (
          <FeaturedProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectsGridSection({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <div className='rounded-xl border border-border bg-surface p-5 shadow-sm sm:p-6'>
        <p className='text-sm leading-7 text-text-muted sm:text-base'>
          No projects found in this collection yet.
        </p>
      </div>
    );
  }

  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}

export function ProjectsPage() {
  const [collection, setCollection] = useState<ProjectCollection>("all");

  const allProjects = useMemo(() => {
    return sortProjectsByStartDateDesc(listProjectsByCollection("all"));
  }, []);

  const featuredProjects = useMemo(() => {
    return allProjects.filter((project) => project.featured === true);
  }, [allProjects]);

  const featuredProjectSlugs = useMemo(() => {
    return new Set(featuredProjects.map((project) => project.slug));
  }, [featuredProjects]);

  const visibleProjects = useMemo(() => {
    return sortProjectsByStartDateDesc(listProjectsByCollection(collection));
  }, [collection]);

  const filteredProjects = useMemo(() => {
    return visibleProjects.filter(
      (project) => !featuredProjectSlugs.has(project.slug),
    );
  }, [visibleProjects, featuredProjectSlugs]);

  return (
    <PageContainer>
      <div className='mx-auto max-w-6xl px-4 py-8 sm:py-10'>
        <header className='space-y-4'>
          <div>
            <h1 className='text-3xl font-bold tracking-tight text-text sm:text-4xl'>
              Projects
            </h1>
            <p className='mt-3 max-w-3xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8'>
              A curated view of my software, systems, data, and design work.
              Some projects are deep technical builds, others are product-minded
              case studies, but all of them reflect how I think about clarity,
              maintainability, and user experience.
            </p>
          </div>
        </header>

        {featuredProjects.length > 0 ? (
          <div className='mt-10'>
            <FeaturedProjectsSection projects={featuredProjects} />
          </div>
        ) : null}

        <section className='mt-12 space-y-6'>
          <SectionHeading
            eyebrow='Browse'
            title={
              collection === "all"
                ? "All projects"
                : `${collectionOptions.find((o) => o.value === collection)?.label ?? "Projects"}`
            }
            description='Explore projects by collection, organized for discovery rather than chronology.'
          />

          <ProjectCollectionTabs value={collection} onChange={setCollection} />

          <ProjectsGridSection projects={filteredProjects} />
        </section>
      </div>
    </PageContainer>
  );
}
