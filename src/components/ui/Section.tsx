import type { HTMLAttributes } from "react";
import { cx } from "../../lib/cx";

type SectionProps = HTMLAttributes<HTMLElement>;
type SectionInnerProps = HTMLAttributes<HTMLDivElement>;
type SectionHeaderProps = HTMLAttributes<HTMLDivElement>;
type SectionEyebrowProps = HTMLAttributes<HTMLParagraphElement>;
type SectionTitleProps = HTMLAttributes<HTMLHeadingElement>;
type SectionDescriptionProps = HTMLAttributes<HTMLParagraphElement>;
type SectionContentProps = HTMLAttributes<HTMLDivElement>;

export function Section({ className, ...props }: SectionProps) {
  return (
    <section className={cx("py-14 sm:py-18 lg:py-20", className)} {...props} />
  );
}

export function SectionInner({ className, ...props }: SectionInnerProps) {
  return (
    <div
      className={cx("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

export function SectionHeader({ className, ...props }: SectionHeaderProps) {
  return (
    <div
      className={cx("mb-8 max-w-3xl space-y-3 sm:mb-10", className)}
      {...props}
    />
  );
}

export function SectionEyebrow({ className, ...props }: SectionEyebrowProps) {
  return (
    <p
      className={cx(
        "text-xs font-semibold uppercase tracking-[0.18em] text-text-muted",
        className,
      )}
      {...props}
    />
  );
}

export function SectionTitle({ className, ...props }: SectionTitleProps) {
  return (
    <h2
      className={cx(
        "text-2xl font-semibold tracking-tight text-text sm:text-3xl lg:text-4xl",
        className,
      )}
      {...props}
    />
  );
}

export function SectionDescription({
  className,
  ...props
}: SectionDescriptionProps) {
  return (
    <p
      className={cx(
        "max-w-2xl text-sm leading-7 text-text-muted sm:text-base",
        className,
      )}
      {...props}
    />
  );
}

export function SectionContent({ className, ...props }: SectionContentProps) {
  return <div className={cx("mt-8", className)} {...props} />;
}
