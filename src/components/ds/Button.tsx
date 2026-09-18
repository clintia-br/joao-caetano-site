import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
};

function classes({ variant = "primary", size = "md", fullWidth, className }: BaseProps) {
  return [
    "jc-btn",
    `jc-btn--${variant}`,
    `jc-btn--${size}`,
    fullWidth ? "jc-btn--full" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");
}

/**
 * Button — calm and architectural: tight corners, warm hover, a 1px press
 * nudge. It never scales and never bounces (manual §13).
 */
export function Button({
  children,
  variant,
  size,
  fullWidth,
  className,
  ...rest
}: BaseProps & ComponentProps<"button">) {
  return (
    <button className={classes({ children, variant, size, fullWidth, className })} {...rest}>
      <span className="jc-btn__label">{children}</span>
    </button>
  );
}

/** Same skin, for navigation. External links open in a new tab. */
export function ButtonLink({
  children,
  href,
  variant,
  size,
  fullWidth,
  className,
  ...rest
}: BaseProps & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  const cls = classes({ children, variant, size, fullWidth, className });
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
        <span className="jc-btn__label">{children}</span>
      </a>
    );
  }

  return (
    <Link className={cls} href={href} {...rest}>
      <span className="jc-btn__label">{children}</span>
    </Link>
  );
}
