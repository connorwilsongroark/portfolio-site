type ContentListProps = {
  items: string[];
};

export function ContentList({ items }: ContentListProps) {
  return (
    <ul className='space-y-3'>
      {items.map((item) => (
        <li key={item} className='flex gap-3'>
          <span className='mt-2 h-1.5 w-1.5 rounded-full bg-text-muted' />
          <span className='text-sm leading-7 text-text-muted sm:text-base'>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
