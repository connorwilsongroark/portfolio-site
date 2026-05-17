import type { Project } from "../../content/projects/types";
import { Badge } from "../../components/ui/Badge";
import { TechStackBlock, hasTechStackContent } from "./TechStackBlock";
import { Link } from "react-router-dom";

type ProjectDetailProps = {
  project: Project;
};

type DetailCardProps = {
  title: string;
  children: React.ReactNode;
};

type BulletListProps = {
  items: string[];
};

function DetailCard({ title, children }: DetailCardProps) {
  return (
    <section className='rounded-xl border border-border bg-surface p-5 shadow-sm sm:p-6'>
      <h2 className='mb-3 text-lg font-semibold text-text sm:text-xl'>
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}

function BulletList({ items }: BulletListProps) {
  return (
    <ul className='list-disc space-y-2 pl-5 text-sm text-text-muted sm:text-base'>
      {items.map((item) => (
        <li key={item} className='leading-7'>
          {item}
        </li>
      ))}
    </ul>
  );
}

function formatDateRange(startedAt?: string, completedAt?: string) {
  if (startedAt && completedAt) return `${startedAt} — ${completedAt}`;
  if (startedAt) return `${startedAt} — Present`;
  if (completedAt) return completedAt;
  return "Date unavailable";
}

function formatLabel(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const showTechStack = hasTechStackContent(project.techStack);

  return (
    <div className='mx-auto max-w-4xl space-y-6 px-4 py-8 sm:space-y-8'>
      <header className='space-y-5'>
        <div className='flex flex-wrap gap-2'>
          {project.domains?.map((domain) => (
            <Badge key={domain}>{formatLabel(domain)}</Badge>
          ))}
          {project.status && <Badge>{formatLabel(project.status)}</Badge>}
          {project.visibility && (
            <Badge>{formatLabel(project.visibility)}</Badge>
          )}
        </div>

        <div>
          <h1 className='text-3xl font-bold tracking-tight text-text sm:text-4xl'>
            {project.title}
          </h1>

          <p className='mt-3 text-base leading-7 text-text-muted sm:text-lg sm:leading-8'>
            {project.tagline}
          </p>
        </div>

        {project.links && project.links.length > 0 && (
          <div className='flex flex-wrap gap-3'>
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target='_blank'
                rel='noreferrer'
                className={
                  link.type === "live"
                    ? "inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                    : "inline-flex items-center justify-center rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition hover:bg-surface-alt"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <div className='grid gap-3 text-sm text-text-subtle sm:grid-cols-2'>
          <p>
            <span className='font-medium text-text'>Timeline:</span>{" "}
            {formatDateRange(
              project.dates?.startedAt,
              project.dates?.completedAt,
            )}
          </p>

          {project.role && project.role.length > 0 && (
            <p>
              <span className='font-medium text-text'>Role:</span>{" "}
              {project.role.map(formatLabel).join(", ")}
            </p>
          )}

          {project.presentation && (
            <p>
              <span className='font-medium text-text'>Presentation:</span>{" "}
              {formatLabel(project.presentation)}
            </p>
          )}

          {project.dates?.year && (
            <p>
              <span className='font-medium text-text'>Year:</span>{" "}
              {project.dates.year}
            </p>
          )}
        </div>
      </header>

      {project.summary && (
        <DetailCard title='Overview'>
          <p className='text-sm leading-7 text-text-muted sm:text-base'>
            {project.summary}
          </p>
        </DetailCard>
      )}

      {project.description && (
        <DetailCard title='Project description'>
          <p className='text-sm leading-7 text-text-muted sm:text-base'>
            {project.description}
          </p>
        </DetailCard>
      )}

      {project.metrics && project.metrics.length > 0 && (
        <DetailCard title='Project snapshot'>
          <dl className='grid gap-4 sm:grid-cols-2'>
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className='rounded-lg border border-border bg-surface-alt p-4'
              >
                <dt className='text-xs font-semibold uppercase tracking-wide text-text-subtle'>
                  {metric.label}
                </dt>
                <dd className='mt-1 text-sm leading-6 text-text-muted'>
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </DetailCard>
      )}

      {project.problem && (
        <DetailCard title='Problem'>
          <p className='text-sm leading-7 text-text-muted sm:text-base'>
            {project.problem}
          </p>
        </DetailCard>
      )}

      {project.goals && project.goals.length > 0 && (
        <DetailCard title='Goals'>
          <BulletList items={project.goals} />
        </DetailCard>
      )}

      {project.users && project.users.length > 0 && (
        <DetailCard title='Intended users'>
          <BulletList items={project.users} />
        </DetailCard>
      )}

      {project.features && project.features.length > 0 && (
        <DetailCard title='Key features'>
          <BulletList items={project.features} />
        </DetailCard>
      )}

      {(project.challenges?.length || project.solutions?.length) && (
        <div className='grid gap-5 sm:gap-6 md:grid-cols-2'>
          {project.challenges && project.challenges.length > 0 && (
            <DetailCard title='Challenges'>
              <BulletList items={project.challenges} />
            </DetailCard>
          )}

          {project.solutions && project.solutions.length > 0 && (
            <DetailCard title='Solutions'>
              <BulletList items={project.solutions} />
            </DetailCard>
          )}
        </div>
      )}

      {(project.architecturalDecisions?.length ||
        project.tradeoffs?.length) && (
        <div className='grid gap-5 sm:gap-6 md:grid-cols-2'>
          {project.architecturalDecisions &&
            project.architecturalDecisions.length > 0 && (
              <DetailCard title='Architectural decisions'>
                <BulletList items={project.architecturalDecisions} />
              </DetailCard>
            )}

          {project.tradeoffs && project.tradeoffs.length > 0 && (
            <DetailCard title='Tradeoffs'>
              <BulletList items={project.tradeoffs} />
            </DetailCard>
          )}
        </div>
      )}

      {project.learningOutcomes && project.learningOutcomes.length > 0 && (
        <DetailCard title='What I learned'>
          <BulletList items={project.learningOutcomes} />
        </DetailCard>
      )}

      {showTechStack && (
        <DetailCard title='Tech stack'>
          <TechStackBlock techStack={project.techStack} />
        </DetailCard>
      )}

      {project.tags && project.tags.length > 0 && (
        <DetailCard title='Tags'>
          <div className='flex flex-wrap gap-2'>
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </DetailCard>
      )}

      {project.codeAvailability && (
        <DetailCard title='Code availability'>
          <div className='space-y-3 text-sm leading-7 text-text-muted sm:text-base'>
            <p>
              <span className='font-medium text-text'>Source public:</span>{" "}
              {project.codeAvailability.isSourcePublic ? "Yes" : "No"}
            </p>

            <p>
              <span className='font-medium text-text'>Demo public:</span>{" "}
              {project.codeAvailability.isDemoPublic ? "Yes" : "No"}
            </p>

            {project.codeAvailability.notes && (
              <p>{project.codeAvailability.notes}</p>
            )}

            {project.codeAvailability.repositoryUrl && (
              <a
                href={project.codeAvailability.repositoryUrl}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center justify-center rounded-lg border border-border bg-surface-alt px-4 py-2 text-sm font-medium text-text transition hover:bg-surface'
              >
                View repository
              </a>
            )}
          </div>
        </DetailCard>
      )}
      <Link
        to='/projects'
        className='inline-flex items-center justify-center rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition hover:bg-surface-alt'
      >
        Back to Projects
      </Link>
    </div>
  );
}
