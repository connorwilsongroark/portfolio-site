export function DiamondGridIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 160 160'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      aria-hidden='true'
    >
      <g stroke='currentColor' strokeWidth='3' strokeLinejoin='round'>
        <path d='M80 52L108 68L80 84L52 68L80 52Z' />
        <path d='M52 68L80 84L52 100L24 84L52 68Z' />
        <path d='M108 68L136 84L108 100L80 84L108 68Z' />
        <path d='M80 84L108 100L80 116L52 100L80 84Z' />
      </g>
    </svg>
  );
}
