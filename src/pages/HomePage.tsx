import { Link } from "react-router-dom";
import { PageContainer } from "../components/layout/PageContainer";
import { DynamicSignature } from "../components/branding/DynamicSignature";
import { Button } from "../components/ui/Button";
import { CodeXml, Contact } from "lucide-react";

export function HomePage() {
  return (
    <PageContainer>
      <section className='relative isolate overflow-hidden py-16 sm:py-24'>
        {/* Background Signature */}
        <DynamicSignature
          animate={true}
          strokeWidth={4}
          duration={5.5}
          delay={0.6}
          className='
            pointer-events-none
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            z-0
            w-[40rem] max-w-none
            -rotate-12
            text-text-muted
            opacity-10
          '
        />

        {/* Foreground Content */}
        <div className='relative z-10 max-w-3xl'>
          <p className='text-sm font-medium tracking-wide text-primary'>
            Software Developer
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-text sm:text-6xl'>
            Building thoughtful software with strong architecture and clean UI.
          </h1>

          <p className='mt-6 text-lg text-text-muted'>
            I design and build applications with a focus on performance,
            clarity, and user experience.
          </p>

          <div className='mt-8 flex gap-4'>
            <Button
              variant='primary'
              size='lg'
              to='/career'
              rightIcon={<CodeXml className='h-5 w-5' />}
            >
              View Career
            </Button>
            <Button
              variant='secondary'
              size='lg'
              to='/contact'
              rightIcon={<Contact className='h-5 w-5' />}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
