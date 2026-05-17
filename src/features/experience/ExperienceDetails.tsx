import { Link } from "react-router-dom";
import type { Experience } from "../../content/experience/types";
import type { Project } from "../../content/projects/types";
import { Badge } from "../../components/ui/Badge";
import { ExperienceProjectList } from "./ExperienceProjectList";

export function ExperienceDetails({
  experience,
  relatedProjects,
}: {
  experience: Experience;
  relatedProjects: Project[];
}) {
  const dateLabel = formatExperienceDateRange(experience);
  const hasTech = hasAnyTechStack(experience);

  const metadata = [
    formatEmploymentType(experience.employmentType),
    experience.workplaceType
      ? formatWorkplaceType(experience.workplaceType)
      : undefined,
    experience.location,
    experience.teamSize ? `Team of ${experience.teamSize}` : undefined,
  ].filter(Boolean);

  return (
    <div className='mx-auto max-w-5xl space-y-6 px-4 py-8 sm:space-y-8'>
      <header className='space-y-5 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8'>
        <div className='flex flex-wrap gap-2'>
          <Badge>Experience</Badge>

          {experience.status === "current" && <Badge>Current</Badge>}

          {experience.visibility && (
            <Badge>{formatVisibility(experience.visibility)}</Badge>
          )}

          {experience.domains?.map((domain) => (
            <Badge key={domain}>{formatLabel(domain)}</Badge>
          ))}
        </div>

        <div>
          <p className='text-sm font-medium uppercase tracking-[0.14em] text-text-subtle'>
            {dateLabel}
          </p>

          <h1 className='mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl'>
            {experience.title}
          </h1>

          <p className='mt-2 text-lg font-medium text-text-muted sm:text-xl'>
            {experience.company}
          </p>

          {experience.tagline && (
            <p className='mt-4 text-base leading-7 text-text-muted sm:text-lg sm:leading-8'>
              {experience.tagline}
            </p>
          )}
        </div>

        {metadata.length > 0 && (
          <div className='flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-subtle'>
            {metadata.map((item, index) => (
              <div key={item} className='flex items-center gap-3'>
                {index > 0 && (
                  <span className='h-1 w-1 rounded-full bg-border' />
                )}

                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {experience.summary && (
          <p className='max-w-4xl text-sm leading-7 text-text-muted sm:text-base'>
            {experience.summary}
          </p>
        )}
      </header>

      {experience.description && (
        <DetailCard title='Overview'>
          <MultiParagraphText text={experience.description} />
        </DetailCard>
      )}

      {experience.businessContext && (
        <DetailCard title='Business context'>
          <p className='text-sm leading-7 text-text-muted sm:text-base'>
            {experience.businessContext}
          </p>
        </DetailCard>
      )}

      {(experience.responsibilities?.length ||
        experience.achievements?.length) && (
        <div className='grid gap-5 sm:gap-6 md:grid-cols-2'>
          {experience.responsibilities?.length > 0 && (
            <DetailCard title='Responsibilities'>
              <BulletList items={experience.responsibilities} />
            </DetailCard>
          )}

          {experience.achievements?.length ? (
            <DetailCard title='Achievements'>
              <BulletList items={experience.achievements} />
            </DetailCard>
          ) : null}
        </div>
      )}

      {experience.impact?.length ? (
        <DetailCard title='Impact'>
          <HighlightGrid items={experience.impact} />
        </DetailCard>
      ) : null}

      {experience.notableSystems?.length ? (
        <DetailCard title='Systems I worked on'>
          <HighlightGrid items={experience.notableSystems} />
        </DetailCard>
      ) : null}

      {(experience.challenges?.length || experience.solutions?.length) && (
        <div className='grid gap-5 sm:gap-6 md:grid-cols-2'>
          {experience.challenges?.length ? (
            <DetailCard title='Challenges'>
              <BulletList items={experience.challenges} />
            </DetailCard>
          ) : null}

          {experience.solutions?.length ? (
            <DetailCard title='Solutions'>
              <BulletList items={experience.solutions} />
            </DetailCard>
          ) : null}
        </div>
      )}

      {(experience.architecturalDecisions?.length ||
        experience.tradeoffs?.length) && (
        <div className='grid gap-5 sm:gap-6 md:grid-cols-2'>
          {experience.architecturalDecisions?.length ? (
            <DetailCard title='Architectural decisions'>
              <BulletList items={experience.architecturalDecisions} />
            </DetailCard>
          ) : null}

          {experience.tradeoffs?.length ? (
            <DetailCard title='Tradeoffs'>
              <BulletList items={experience.tradeoffs} />
            </DetailCard>
          ) : null}
        </div>
      )}

      {hasTech && (
        <DetailCard title='Tech stack'>
          <div className='grid gap-4 sm:grid-cols-2'>
            <TechStackGroup
              label='Languages'
              items={experience.techStack?.languages}
            />

            <TechStackGroup
              label='Frameworks'
              items={experience.techStack?.frameworks}
            />

            <TechStackGroup
              label='Libraries'
              items={experience.techStack?.libraries}
            />

            <TechStackGroup label='Tools' items={experience.techStack?.tools} />

            <TechStackGroup
              label='Databases'
              items={experience.techStack?.databases}
            />

            <TechStackGroup
              label='Platforms'
              items={experience.techStack?.platforms}
            />

            <TechStackGroup
              label='Infrastructure'
              items={experience.techStack?.infrastructure}
            />
          </div>
        </DetailCard>
      )}

      {(experience.learningOutcomes?.length || experience.reflection) && (
        <DetailCard title='Reflection'>
          <div className='space-y-5'>
            {experience.learningOutcomes?.length ? (
              <BulletList items={experience.learningOutcomes} />
            ) : null}

            {experience.reflection && (
              <p className='text-sm leading-7 text-text-muted sm:text-base'>
                {experience.reflection}
              </p>
            )}
          </div>
        </DetailCard>
      )}

      {relatedProjects.length > 0 && (
        <DetailCard title='Related projects'>
          <ExperienceProjectList projects={relatedProjects} />
        </DetailCard>
      )}

      {experience.links?.length ? (
        <DetailCard title='Links'>
          <div className='flex flex-wrap gap-3'>
            {experience.links.map((link) => (
              <a
                key={`${link.type}-${link.url}`}
                href={link.url}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center justify-center rounded-lg border border-border bg-surface-alt px-4 py-2 text-sm font-medium text-text transition hover:bg-surface'
              >
                {link.label}
              </a>
            ))}
          </div>
        </DetailCard>
      ) : null}

      {experience.confidentiality && (
        <DetailCard title='Confidentiality'>
          <div className='space-y-3 text-sm leading-7 text-text-muted sm:text-base'>
            <p>{experience.confidentiality.note}</p>

            {experience.confidentiality.codeUnavailableReason && (
              <p>
                <span className='font-medium text-text'>
                  Code availability:
                </span>{" "}
                {experience.confidentiality.codeUnavailableReason}
              </p>
            )}
          </div>
        </DetailCard>
      )}

      <Link
        to='/career'
        className='inline-flex items-center justify-center rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition hover:bg-surface-alt'
      >
        Back to Career
      </Link>
    </div>
  );
}

function DetailCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className='rounded-xl border border-border bg-surface p-5 shadow-sm sm:p-6'>
      <h2 className='mb-3 text-lg font-semibold text-text sm:text-xl'>
        {title}
      </h2>

      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
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

function HighlightGrid({ items }: { items: string[] }) {
  return (
    <ul className='grid gap-3 sm:grid-cols-2'>
      {items.map((item) => (
        <li
          key={item}
          className='rounded-xl border border-border/80 bg-surface-alt px-4 py-4 text-sm leading-7 text-text shadow-sm transition hover:border-primary/30 hover:shadow-md'
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function MultiParagraphText({ text }: { text: string }) {
  return (
    <div className='space-y-4'>
      {text.split("\n\n").map((paragraph) => (
        <p
          key={paragraph}
          className='text-sm leading-7 text-text-muted sm:text-base'
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function TechStackGroup({ label, items }: { label: string; items?: string[] }) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className='space-y-3'>
      <h3 className='text-sm font-semibold uppercase tracking-[0.14em] text-text-subtle'>
        {label}
      </h3>

      <div className='flex flex-wrap gap-2'>
        {items.map((item) => (
          <span
            key={item}
            className='rounded-full border border-border bg-surface-alt px-3 py-1 text-sm text-text-muted'
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function formatExperienceDateRange(experience: Experience) {
  const startedAt = experience.dates.startedAt;
  const endedAt = experience.dates.endedAt;
  const isCurrent = experience.dates.isCurrent;

  if (startedAt && endedAt) {
    return `${startedAt} — ${endedAt}`;
  }

  if (startedAt && (isCurrent || !endedAt)) {
    return `${startedAt} — Present`;
  }

  return experience.dates.year
    ? String(experience.dates.year)
    : "Date unavailable";
}

function formatLabel(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatEmploymentType(value: Experience["employmentType"]) {
  return formatLabel(value);
}

function formatWorkplaceType(value: NonNullable<Experience["workplaceType"]>) {
  return formatLabel(value);
}

function formatVisibility(value: NonNullable<Experience["visibility"]>) {
  return formatLabel(value);
}

function hasAnyTechStack(experience: Experience) {
  const stack = experience.techStack;

  if (!stack) {
    return false;
  }

  return Boolean(
    stack.languages?.length ||
    stack.frameworks?.length ||
    stack.libraries?.length ||
    stack.tools?.length ||
    stack.databases?.length ||
    stack.platforms?.length ||
    stack.infrastructure?.length,
  );
}
