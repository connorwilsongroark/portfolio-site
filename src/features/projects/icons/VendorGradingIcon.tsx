export function VendorGradingIcon({ className }: { className?: string }) {
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
        {/* House / vendor */}
        <path d='M36 78L56 62L76 78' />
        <path d='M40 74V104H72V74' />
        <path d='M52 104V86H60V104' />

        {/* Steps */}
        <path d='M92 112H106V98H120V84H134' />
      </g>
    </svg>
  );
}
