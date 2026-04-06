import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { cx } from "../../lib/cx";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
};

type ButtonAsButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never;
    href?: never;
  };

type ButtonAsLinkProps = BaseButtonProps & {
  to: string;
  href?: never;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type ButtonAsAnchorProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    to?: never;
  };

export type ButtonProps =
  | ButtonAsButtonProps
  | ButtonAsLinkProps
  | ButtonAsAnchorProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover",
  secondary:
    "border border-border bg-surface text-text shadow-sm hover:bg-surface-alt",
  ghost:
    "border border-transparent bg-transparent text-text-muted hover:bg-surface-alt hover:text-text",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base",
};

function getButtonClasses({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: Pick<BaseButtonProps, "variant" | "size" | "fullWidth" | "className">) {
  return cx(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium whitespace-nowrap",
    "transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    fullWidth && "w-full",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

function ButtonContent({
  children,
  leftIcon,
  rightIcon,
}: Pick<BaseButtonProps, "children" | "leftIcon" | "rightIcon">) {
  return (
    <>
      {leftIcon ? (
        <span className='flex shrink-0 items-center justify-center'>
          {leftIcon}
        </span>
      ) : null}

      <span className='truncate'>{children}</span>

      {rightIcon ? (
        <span className='flex shrink-0 items-center justify-center'>
          {rightIcon}
        </span>
      ) : null}
    </>
  );
}

function isRouterLink(props: ButtonProps): props is ButtonAsLinkProps {
  return "to" in props && typeof props.to === "string";
}

function isAnchor(props: ButtonProps): props is ButtonAsAnchorProps {
  return "href" in props && typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    leftIcon,
    rightIcon,
    fullWidth = false,
    className,
  } = props;

  const classes = getButtonClasses({
    variant,
    size,
    fullWidth,
    className,
  });

  const content = (
    <ButtonContent
      children={children}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    />
  );

  if (isRouterLink(props)) {
    const {
      to,
      children: _children,
      variant: _variant,
      size: _size,
      leftIcon: _leftIcon,
      rightIcon: _rightIcon,
      fullWidth: _fullWidth,
      className: _className,
      ...restLinkProps
    } = props;

    return (
      <Link to={to} className={classes} {...restLinkProps}>
        {content}
      </Link>
    );
  }

  if (isAnchor(props)) {
    const {
      href,
      children: _children,
      variant: _variant,
      size: _size,
      leftIcon: _leftIcon,
      rightIcon: _rightIcon,
      fullWidth: _fullWidth,
      className: _className,
      ...restAnchorProps
    } = props;

    return (
      <a href={href} className={classes} {...restAnchorProps}>
        {content}
      </a>
    );
  }

  const {
    type = "button",
    children: _children,
    variant: _variant,
    size: _size,
    leftIcon: _leftIcon,
    rightIcon: _rightIcon,
    fullWidth: _fullWidth,
    className: _className,
    ...restButtonProps
  } = props;

  return (
    <button type={type} className={classes} {...restButtonProps}>
      {content}
    </button>
  );
}
