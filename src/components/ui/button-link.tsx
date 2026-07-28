import type { ComponentPropsWithoutRef } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-[color:var(--button-primary-background)] text-[color:var(--button-primary-foreground)] shadow-[0_18px_45px_-24px_rgba(15,23,42,0.25)] hover:bg-[color:var(--button-primary-hover)]",
  secondary:
    "border border-[color:var(--border-strong)] bg-[color:var(--surface-pill)] text-[color:var(--text-primary)] backdrop-blur-xl hover:border-[color:var(--accent-strong)] hover:bg-[color:var(--surface-pill-hover)]",
  ghost:
    "border border-transparent bg-transparent text-[color:var(--text-secondary)] hover:border-[color:var(--border-subtle)] hover:bg-[color:var(--surface-ghost-hover)] hover:text-[color:var(--text-primary)]",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={[
        "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--focus-offset)]",
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </a>
  );
}
