import type { Project } from "../../content/projects/types";
import { Badge } from "../../components/ui/Badge";
import { TechStackBlock, hasTechStackContent } from "./TechStackBlock";

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

export function ProjectDetail({ project }: ProjectDetailProps) {
  const showTechStack = hasTechStackContent(project.techStack);

  return (
    <div className='mx-auto max-w-4xl space-y-6 px-4 py-8 sm:space-y-8'>
      <header className='space-y-4'>
        <div className='flex flex-wrap gap-2'>
          {project.domains?.map((domain) => (
            <Badge key={domain}>{domain}</Badge>
          ))}
          {project.status && <Badge>{project.status}</Badge>}
          {project.visibility && <Badge>{project.visibility}</Badge>}
        </div>

        <div>
          <h1 className='text-3xl font-bold tracking-tight text-text sm:text-4xl'>
            {project.title}
          </h1>
          <p className='mt-3 text-base leading-7 text-text-muted sm:text-lg sm:leading-8'>
            {project.tagline}
          </p>
        </div>

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
              {project.role.join(", ")}
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
    </div>
  );
}
