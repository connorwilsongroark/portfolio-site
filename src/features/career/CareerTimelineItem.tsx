import type { ReactNode } from "react";

export function CareerTimelineItemRow({
  children,
  dateLabel,
  isLast,
}: {
  children: ReactNode;
  dateLabel: string;
  isLast: boolean;
}) {
  return (
    <article className='relative grid grid-cols-[20px_minmax(0,1fr)] gap-4 sm:grid-cols-[110px_24px_minmax(0,1fr)] sm:gap-5'>
      <div className='relative flex justify-center sm:order-2'>
        {!isLast && (
          <span className='absolute bottom-[-1.5rem] top-5 w-px bg-border' />
        )}

        <span className='relative mt-2 h-3 w-3 rounded-full border-2 border-background bg-primary shadow-sm' />
      </div>

      <div className='min-w-0 sm:order-3'>
        <p className='mb-3 text-xs font-medium uppercase tracking-[0.14em] text-text-subtle sm:hidden'>
          {dateLabel}
        </p>

        {children}
      </div>

      <div className='hidden pt-1 text-right sm:order-1 sm:block'>
        <p className='text-xs font-medium uppercase tracking-[0.14em] text-text-subtle sm:text-sm'>
          {dateLabel}
        </p>
      </div>
    </article>
  );
}
