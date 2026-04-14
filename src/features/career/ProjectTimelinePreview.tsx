import { Link } from "react-router-dom";
import type { ComponentType, SVGProps } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export function ProjectTimelinePreview({
  slug,
  title,
  tagline,
  icon: Icon,
}: {
  slug: string;
  title: string;
  tagline: string;
  icon?: IconType;
}) {
  return (
    <Link
      to={`/projects/${slug}`}
      className='group relative block overflow-hidden rounded-xl border border-border bg-surface-alt/40 p-4 transition-colors hover:bg-surface-alt'
    >
      {/* Background Icon */}
      {Icon && (
        <div className='pointer-events-none absolute inset-0 overflow-hidden'>
          <Icon className='absolute right-6 top-1/2 h-48 w-48 -translate-y-1/2 text-text transition-transform duration-500 opacity-5' />
        </div>
      )}

      {/* Content */}
      <div className='relative'>
        <p className='text-xs font-medium uppercase tracking-[0.14em] text-text-subtle'>
          Project
        </p>

        <h3 className='mt-2 text-sm font-semibold text-text transition-colors group-hover:text-primary sm:text-base'>
          {title}
        </h3>

        <p className='mt-1 text-sm leading-7 text-text-muted'>{tagline}</p>
      </div>
    </Link>
  );
}
