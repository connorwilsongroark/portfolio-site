import { FaLinkedin, FaGithub } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className='border-t border-border bg-surface'>
      <div className='mx-auto max-w-6xl px-4 py-6'>
        <div className='flex flex-col items-center justify-center gap-5 text-center'>
          {/* <p className='max-w-sn text-sm text-text-muted'>
            Feel free to reach out or explore more of my work.
          </p> */}
          <div className='flex items-center gap-3'>
            <a
              href='https://github.com/connorwilsongroark'
              target='_blank'
              rel='noreferrer'
              aria-label='GitHub'
              title='GitHub'
              className='text-primary hover:text-primary-hover transition-colors duration-200'
            >
              <FaGithub className='h-8 w-8' />
            </a>
            <a
              href='https://www.linkedin.com/in/connorwilsongroark/'
              target='_blank'
              rel='noreferrer'
              aria-label='LinkedIn'
              title='LinkedIn'
              className='text-primary hover:text-primary-hover transition-colors duration-200'
            >
              <FaLinkedin className='h-8 w-8' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
