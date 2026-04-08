import { Link } from "react-router-dom";
import { Button } from "./ui/Button";

type NotFoundSectionProps = {
  title?: string;
  description?: string;
  showActions?: boolean;
};

export function NotFoundSection({
  title = "Page not found",
  description = "The page you’re looking for doesn’t exist or may have been moved.",
  showActions = true,
}: NotFoundSectionProps) {
  return (
    <div className='mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-16 text-center'>
      <div className='space-y-6'>
        <p className='text-sm font-medium uppercase tracking-[0.18em] text-text-subtle'>
          404
        </p>

        <h1 className='text-3xl font-bold tracking-tight text-text sm:text-4xl'>
          {title}
        </h1>

        <p className='text-base leading-7 text-text-muted sm:text-lg'>
          {description}
        </p>
      </div>

      {showActions && (
        <div className='mt-8 flex flex-col items-center gap-3 sm:flex-row'>
          <Button to='/career' variant='primary' size='lg'>
            Go to Career
          </Button>

          <Button to='/projects' variant='secondary' size='lg'>
            View Projects
          </Button>
        </div>
      )}

      <div className='mt-6'>
        <Link
          to='/'
          className='text-sm font-medium text-primary hover:underline'
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
