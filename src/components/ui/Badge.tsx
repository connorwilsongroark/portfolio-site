import type { HTMLAttributes } from "react";
import { cx } from "../../lib/cx";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border border-border bg-surface-alt px-2.5 py-1 text-xs font-medium text-text-subtle",
        className,
      )}
      {...props}
    />
  );
}
