import { useParams } from "react-router-dom";
import { PageContainer } from "../components/layout/PageContainer";
import { getProjectBySlug } from "../content/projects";
import { Button } from "../components/ui/Button";
import { ProjectDetail } from "../features/projects/ProjectDetail";
import { NotFoundSection } from "../components/NotFoundSection";

export function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <PageContainer>
        <NotFoundSection
          title='Project not found'
          description='This project could not be found. It may have been moved or is no longer available.'
        />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <ProjectDetail project={project} />
    </PageContainer>
  );
}
