import type { CSSProperties } from "react";
import { useId, useMemo } from "react";
import { cx } from "../../lib/cx";

type DynamicSignatureProps = {
  animate?: boolean;
  color?: string;
  strokeWidth?: number;
  duration?: number; // total animation duration in seconds
  delay?: number; // delay before the whole signature starts
  className?: string;
  preserveAspectRatio?: string;
};

const PATHS = [
  "m 28.060123,116.24908 c 0,0 5.921777,36.0773 27.786809,-11.57025 4.184563,-9.118859 8.841713,-17.361432 13.57454,-25.873615 6.853304,-12.325948 41.903708,-65.98201 37.443868,-25.326994 -1.23162,11.227226 -5.07321,26.322106 -6.34404,26.37652",
  "m 100.5213,79.854741 c -0.17609,0.0075 -0.30282,-0.273693 -0.36641,-0.894002 -8.233013,-80.309129 -74.820499,122.671931 -4.941451,21.792871 18.601731,-26.853911 -16.171607,51.02466 14.763341,1.00404 16.46213,-26.618643 -21.353987,54.77153 22.31996,-9.797044 0.84066,-1.242858 1.33305,-1.739686 1.52174,-1.602278",
  "m 133.81848,90.358328 c 1.762,1.283157 -22.96036,57.874262 -37.872088,78.733222 -1.563514,2.18709 -2.612055,1.40082 -1.94691,-1.25756 3.446705,-13.7754 58.579428,-79.862527 84.316368,-95.103286",
] as const;

const STROKE_WEIGHTS = [0.34, 0.38, 0.28] as const;
const DASH_LENGTH = 400;
const OVERLAP = 0.58;

export function DynamicSignature({
  animate = true,
  color = "currentColor",
  strokeWidth = 2,
  duration = 3.4,
  delay = 0,
  className,
  preserveAspectRatio = "xMidYMid meet",
}: DynamicSignatureProps) {
  const id = useId().replace(/:/g, "");
  const animationName = `draw-signature-${id}`;

  const strokeTimings = useMemo(() => {
    let elapsed = delay;

    return STROKE_WEIGHTS.map((weight) => {
      const strokeDuration = duration * weight;

      const strokeDelay = elapsed;

      elapsed += strokeDuration * (1 - OVERLAP);

      return {
        strokeDuration,
        strokeDelay,
      };
    });
  }, [delay, duration]);

  return (
    <svg
      //   viewBox='0 0 152.25572 133.84682'
      viewBox='-8 -8 168.25572 149.84682'
      preserveAspectRatio={preserveAspectRatio}
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      aria-label='Signature'
      className={cx("block", className)}
    >
      <style>
        {`
          @keyframes ${animationName} {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>

      <g transform='translate(-27.060123,-37.497138)'>
        {PATHS.map((d, index) => {
          const timing = strokeTimings[index];

          const style: CSSProperties | undefined = animate
            ? {
                strokeDasharray: DASH_LENGTH,
                strokeDashoffset: DASH_LENGTH,
                animationName,
                animationDuration: `${timing.strokeDuration}s`,
                animationDelay: `${timing.strokeDelay}s`,
                animationTimingFunction: "ease",
                animationFillMode: "forwards",
              }
            : undefined;

          return (
            <path
              key={index}
              d={d}
              fill='none'
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap='round'
              strokeLinejoin='round'
              style={style}
            />
          );
        })}
      </g>
    </svg>
  );
}
