import { Link } from "react-router-dom";

export function ProjectTimelinePreview({
  slug,
  title,
  tagline,
}: {
  slug: string;
  title: string;
  tagline: string;
}) {
  return (
    <Link
      to={`/projects/${slug}`}
      className='group block rounded-xl border border-border bg-surface-alt/40 p-4 transition-colors hover:bg-surface-alt'
    >
      <p className='text-xs font-medium uppercase tracking-[0.14em] text-text-subtle'>
        Project
      </p>

      <h3 className='mt-2 text-sm font-semibold text-text transition-colors group-hover:text-primary sm:text-base'>
        {title}
      </h3>

      <p className='mt-1 text-sm leading-7 text-text-muted'>{tagline}</p>
    </Link>
  );
}
