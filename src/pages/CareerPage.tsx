import { PageContainer } from "../components/layout/PageContainer";
import { CareerTimeline } from "../features/career/CareerTimeline";
import { listCareerTimelineEntries } from "../content/career";

export function CareerPage() {
  const entries = listCareerTimelineEntries();

  return (
    <PageContainer>
      <div className='mx-auto max-w-5xl px-4 py-8 sm:py-10'>
        <header className='space-y-4'>
          <div>
            <h1 className='text-3xl font-bold tracking-tight text-text sm:text-4xl'>
              Career
            </h1>

            <p className='mt-3 max-w-3xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8'>
              A timeline of roles, projects, and continued learning that show
              how I've grown across software engineering, system design, and
              product-minded development.
            </p>
          </div>
        </header>

        <div className='mt-8 sm:mt-10'>
          <CareerTimeline entries={entries} />
        </div>
      </div>
    </PageContainer>
  );
}
