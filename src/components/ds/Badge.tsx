import { ReactNode } from "react";

/** Badge — small label chip. "preco" is a signature: preço aberto is a
 *  brand differential, so it gets its own quiet outlined treatment. */
export function Badge({
  children,
  variant = "neutral",
  size = "md",
}: {
  children: ReactNode;
  variant?: "neutral" | "musgo" | "terra" | "preco" | "outline";
  size?: "sm" | "md";
}) {
  return <span className={`jc-badge jc-badge--${variant} jc-badge--${size}`}>{children}</span>;
}
