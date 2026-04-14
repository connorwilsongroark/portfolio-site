export function RewardsUserStarIcon({ className }: { className?: string }) {
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
        {/* User (slightly lowered for better centering) */}
        <circle cx='60' cy='64' r='16' />
        <path d='M32 112C32 95 45 84 60 84C75 84 88 95 88 112' />

        {/* Star badge (slightly offset right) */}
        <path
          d='M108 78L111 86L119 89L111 92L108 100L105 92L97 89L105 86L108 78Z'
          opacity='0.85'
        />
      </g>
    </svg>
  );
}
