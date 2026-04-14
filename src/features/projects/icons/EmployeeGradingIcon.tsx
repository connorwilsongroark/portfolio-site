export function EmployeeGradingIcon({ className }: { className?: string }) {
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
        {/* User (slightly lowered for vertical balance) */}
        <circle cx='54' cy='68' r='14' />
        <path d='M30 112C30 97 41 88 54 88C67 88 78 97 78 112' />

        {/* Steps (clean progression) */}
        <path d='M92 112H106V98H120V84H134' />
      </g>
    </svg>
  );
}
