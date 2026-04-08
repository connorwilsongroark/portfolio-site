import { Link } from "react-router-dom";
import type { Experience } from "../../content/experience/types";
import type { Project } from "../../content/projects/types";
import { Badge } from "../../components/ui/Badge";
import { ExperienceDetailSection } from "./ExperienceDetailSection";
import { ExperienceProjectList } from "./ExperienceProjectList";

export function ExperienceDetail({
  experience,
  relatedProjects,
}: {
  experience: Experience;
  relatedProjects: Project[];
}) {
  const dateLabel = formatExperienceDateRange(experience);
  const metadata = [
    formatEmploymentType(experience.employmentType),
    experience.workplaceType
      ? formatWorkplaceType(experience.workplaceType)
      : undefined,
    experience.location,
  ].filter(Boolean);

  return (
    <div className='mx-auto max-w-5xl px-4 py-8 sm:py-10'>
      <header className='rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8'>
        <div className='flex flex-wrap items-center gap-2'>
          <Badge>Experience</Badge>

          {experience.status === "current" ? <Badge>Current</Badge> : null}

          {experience.visibility ? (
            <Badge>{formatVisibility(experience.visibility)}</Badge>
          ) : null}
        </div>

        <div className='mt-5'>
          <p className='text-sm font-medium uppercase tracking-[0.14em] text-text-subtle'>
            {dateLabel}
          </p>

          <h1 className='mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl'>
            {experience.title}
          </h1>

          <p className='mt-2 text-lg font-medium text-text-muted sm:text-xl'>
            {experience.company}
          </p>
        </div>

        {metadata.length > 0 ? (
          <div className='mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-text-subtle'>
            {metadata.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ) : null}

        {experience.tagline ? (
          <p className='mt-5 text-base leading-7 text-text sm:text-lg sm:leading-8'>
            {experience.tagline}
          </p>
        ) : null}

        <p className='mt-4 max-w-3xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8'>
          {experience.summary}
        </p>
      </header>

      <div className='mt-8 grid gap-6'>
        {experience.description ? (
          <ExperienceDetailSection title='Overview'>
            <p className='text-sm leading-7 text-text-muted sm:text-base'>
              {experience.description}
            </p>
          </ExperienceDetailSection>
        ) : null}

        {experience.responsibilities.length > 0 ? (
          <ExperienceDetailSection title='Responsibilities'>
            <BulletList items={experience.responsibilities} />
          </ExperienceDetailSection>
        ) : null}

        {experience.achievements?.length ? (
          <ExperienceDetailSection title='Achievements'>
            <BulletList items={experience.achievements} />
          </ExperienceDetailSection>
        ) : null}

        {experience.impact?.length ? (
          <ExperienceDetailSection title='Impact'>
            <BulletList items={experience.impact} />
          </ExperienceDetailSection>
        ) : null}

        {relatedProjects.length > 0 ? (
          <ExperienceDetailSection title='Related Projects'>
            <ExperienceProjectList projects={relatedProjects} />
          </ExperienceDetailSection>
        ) : null}

        {hasAnyTechStack(experience) ? (
          <ExperienceDetailSection title='Tech Stack'>
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
              <TechStackGroup
                label='Tools'
                items={experience.techStack?.tools}
              />
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
          </ExperienceDetailSection>
        ) : null}

        {hasContextSection(experience) ? (
          <ExperienceDetailSection title='Context & Architecture'>
            <div className='space-y-6'>
              {experience.businessContext ? (
                <ContentBlock
                  title='Business Context'
                  items={[experience.businessContext]}
                />
              ) : null}

              {experience.notableSystems?.length ? (
                <ContentBlock
                  title='Notable Systems'
                  items={experience.notableSystems}
                />
              ) : null}

              {experience.challenges?.length ? (
                <ContentBlock
                  title='Challenges'
                  items={experience.challenges}
                />
              ) : null}

              {experience.solutions?.length ? (
                <ContentBlock title='Solutions' items={experience.solutions} />
              ) : null}

              {experience.architecturalDecisions?.length ? (
                <ContentBlock
                  title='Architectural Decisions'
                  items={experience.architecturalDecisions}
                />
              ) : null}

              {experience.tradeoffs?.length ? (
                <ContentBlock title='Tradeoffs' items={experience.tradeoffs} />
              ) : null}
            </div>
          </ExperienceDetailSection>
        ) : null}

        {experience.learningOutcomes?.length || experience.reflection ? (
          <ExperienceDetailSection title='Reflection'>
            <div className='space-y-4'>
              {experience.learningOutcomes?.length ? (
                <ContentBlock
                  title='What I Learned'
                  items={experience.learningOutcomes}
                />
              ) : null}

              {experience.reflection ? (
                <p className='text-sm leading-7 text-text-muted sm:text-base'>
                  {experience.reflection}
                </p>
              ) : null}
            </div>
          </ExperienceDetailSection>
        ) : null}

        {experience.links?.length ? (
          <ExperienceDetailSection title='Links'>
            <div className='flex flex-wrap gap-3'>
              {experience.links.map((link) => (
                <a
                  key={`${link.type}-${link.url}`}
                  href={link.url}
                  target='_blank'
                  rel='noreferrer'
                  className='rounded-full border border-border bg-surface-alt px-3 py-1.5 text-sm font-medium text-text transition-colors hover:bg-surface-alt/70'
                >
                  {link.label}
                </a>
              ))}
            </div>
          </ExperienceDetailSection>
        ) : null}

        {experience.confidentiality ? (
          <ExperienceDetailSection title='Confidentiality'>
            <div className='space-y-3 text-sm leading-7 text-text-muted sm:text-base'>
              <p>{experience.confidentiality.note}</p>

              {experience.confidentiality.codeUnavailableReason ? (
                <p>
                  <span className='font-medium text-text'>
                    Code availability:
                  </span>{" "}
                  {experience.confidentiality.codeUnavailableReason}
                </p>
              ) : null}
            </div>
          </ExperienceDetailSection>
        ) : null}

        <div>
          <Link
            to='/career'
            className='text-sm font-medium text-primary transition-colors hover:underline'
          >
            Back to Career
          </Link>
        </div>
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className='space-y-3'>
      {items.map((item) => (
        <li
          key={item}
          className='rounded-xl border border-border bg-surface-alt/30 px-4 py-3 text-sm leading-7 text-text-muted sm:text-base'
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function ContentBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className='space-y-3'>
      <h3 className='text-sm font-semibold uppercase tracking-[0.14em] text-text-subtle'>
        {title}
      </h3>

      <ul className='space-y-3'>
        {items.map((item) => (
          <li
            key={item}
            className='text-sm leading-7 text-text-muted sm:text-base'
          >
            {item}
          </li>
        ))}
      </ul>
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

function formatVisibility(value: NonNullable<Experience["visibility"]>) {
  switch (value) {
    case "public":
      return "Public";
    case "private":
      return "Private";
    case "proprietary":
      return "Proprietary";
    default:
      return value;
  }
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

function hasContextSection(experience: Experience) {
  return Boolean(
    experience.businessContext ||
    experience.notableSystems?.length ||
    experience.challenges?.length ||
    experience.solutions?.length ||
    experience.architecturalDecisions?.length ||
    experience.tradeoffs?.length,
  );
}
