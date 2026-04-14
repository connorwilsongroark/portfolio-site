export function OrgChartIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 160 160'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      aria-hidden='true'
    >
      <g
        stroke='currentColor'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='80' cy='42' r='10' />
        <circle cx='48' cy='108' r='10' />
        <circle cx='80' cy='108' r='10' />
        <circle cx='112' cy='108' r='10' />

        <path d='M80 52V74' />
        <path d='M48 74H112' />
        <path d='M48 74V98' />
        <path d='M80 74V98' />
        <path d='M112 74V98' />
      </g>
    </svg>
  );
}
