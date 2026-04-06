import { useParams } from "react-router-dom";
import { PageContainer } from "../components/layout/PageContainer";
import { getProjectBySlug } from "../content/projects";
import { Button } from "../components/ui/Button";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionInner,
} from "../components/ui/Section";
import { ProjectDetail } from "../features/projects/ProjectDetail";

export function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <PageContainer>
        <Section>
          <SectionInner>
            <SectionHeader>
              <SectionTitle>Project not found</SectionTitle>
              <SectionDescription>
                We couldn&apos;t find a project for:{" "}
                <span className='font-mono text-text wrap-break-word'>
                  {slug}
                </span>
                .
                <br />
                Please feel free to explore my other projects!
              </SectionDescription>
            </SectionHeader>
            <Button variant='primary' size='lg' to='/projects'>
              Back to Projects
            </Button>
          </SectionInner>
        </Section>
      </PageContainer>
    );
  }
  return (
    <PageContainer>
      <ProjectDetail project={project} />
    </PageContainer>
  );
}
