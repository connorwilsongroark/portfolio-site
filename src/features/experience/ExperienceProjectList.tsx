import { Link } from "react-router-dom";
import type { Project } from "../../content/projects/types";

export function ExperienceProjectList({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <div className='space-y-3'>
      {projects.map((project) => (
        <Link
          key={project.slug}
          to={`/projects/${project.slug}`}
          className='group block rounded-xl border border-border bg-surface-alt/40 p-4 transition-colors hover:bg-surface-alt'
        >
          <p className='text-xs font-medium uppercase tracking-[0.14em] text-text-subtle'>
            Project
          </p>

          <h3 className='mt-2 text-base font-semibold text-text transition-colors group-hover:text-primary'>
            {project.title}
          </h3>

          <p className='mt-2 text-sm leading-7 text-text-muted'>
            {project.tagline}
          </p>
        </Link>
      ))}
    </div>
  );
}
