type KeyValueItem = {
  label: string;
  value: string;
};

type KeyValueListProps = {
  items: KeyValueItem[];
};

export function KeyValueList({ items }: KeyValueListProps) {
  return (
    <dl className='space-y-4'>
      {items.map((item) => (
        <div
          key={item.label}
          className='grid gap-1 border-b border-border/70 pb-4 last:border-b-0 last:pb-0'
        >
          <dt className='text-xs font-semibold uppercase tracking-[0.16em] text-text-muted'>
            {item.label}
          </dt>
          <dd className='text-sm leading-6 text-text'>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
