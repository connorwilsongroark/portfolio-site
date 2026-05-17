import { useParams } from "react-router-dom";
import { PageContainer } from "../components/layout/PageContainer";
import { NotFoundSection } from "../components/NotFoundSection";
import { getExperienceBySlug } from "../content/experience";
import { getProjectBySlug } from "../content/projects";
import { ExperienceDetails } from "../features/experience/ExperienceDetails";
export function ExperienceDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const experience = slug ? getExperienceBySlug(slug) : undefined;

  if (!experience) {
    return (
      <PageContainer>
        <NotFoundSection
          title='Experience not found'
          description='This role could not be found. It may have been removed or is no longer available.'
        />
      </PageContainer>
    );
  }

  const relatedProjects =
    experience.relatedProjects
      ?.map((reference) => getProjectBySlug(reference.slug))
      .filter((project): project is NonNullable<typeof project> =>
        Boolean(project),
      ) ?? [];

  return (
    <PageContainer>
      <ExperienceDetails
        experience={experience}
        relatedProjects={relatedProjects}
      />
    </PageContainer>
  );
}
