import type { ReactNode } from "react";
import { cx } from "../../lib/cx";

export function TimelinePresence({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cx(className)}>{children}</div>;
}
