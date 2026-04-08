import { useParams } from "react-router-dom";
import { PageContainer } from "../components/layout/PageContainer";
import { Button } from "../components/ui/Button";
import { ExperienceDetail } from "../features/experience/ExperienceDetail";
import { getExperienceBySlug } from "../content/experience";

export function ExperienceDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const experience = slug ? getExperienceBySlug(slug) : undefined;

  if (!experience) {
    return (
      <PageContainer>
        <div className='mx-auto max-w-4xl px-4 py-8 sm:py-10'>
          <div className='rounded-xl border border-border bg-surface p-5 shadow-sm sm:p-6'>
            <div className='space-y-4'>
              <div>
                <h1 className='text-2xl font-semibold tracking-tight text-text sm:text-3xl'>
                  Experience not found
                </h1>
                <p className='mt-3 text-sm leading-7 text-text-muted sm:text-base'>
                  We couldn&apos;t find a record for{" "}
                  <span className='break-words font-mono text-text'>
                    {slug ?? "unknown slug"}
                  </span>
                  . Please feel free to explore the rest of my career
                  experience.
                </p>
              </div>

              <div>
                <Button variant='primary' to='/experience'>
                  Back to Experience
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <ExperienceDetail experience={experience} />
    </PageContainer>
  );
}
