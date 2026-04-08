import { Mail } from "lucide-react";
import { PageContainer } from "../components/layout/PageContainer";
import { Button } from "../components/ui/Button";

export function ContactPage() {
  return (
    <PageContainer>
      <div className='mx-auto max-w-5xl px-4 py-8 sm:py-10'>
        <header className='space-y-4'>
          <h1 className='text-3xl font-bold tracking-light text-text sm:text-4xl'>
            Contact
          </h1>
          <p className='mt-3 max-w-3xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8'>
            I'm always open to thoughtful conversations about software
            engineering, system design, UX, or opportunities to build something
            meaningful together.
          </p>
        </header>
        <section className='mt-8'>
          <Button
            variant='primary'
            href='mailto:connorwg@gmail.com?subject=Portfolio Inquiry'
            size='lg'
            rightIcon={<Mail className='w-5 h-5' />}
          >
            Email Me
          </Button>
        </section>
      </div>
    </PageContainer>
  );
}
