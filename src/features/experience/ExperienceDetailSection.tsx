import type { ReactNode } from "react";

export function ExperienceDetailSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className='rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6'>
      <div className='space-y-4'>
        <div>
          <h2 className='text-lg font-semibold tracking-tight text-text sm:text-xl'>
            {title}
          </h2>
        </div>

        {children}
      </div>
    </section>
  );
}
