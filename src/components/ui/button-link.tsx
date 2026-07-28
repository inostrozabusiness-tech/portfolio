import type { ComponentPropsWithoutRef } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-white text-slate-950 shadow-[0_18px_45px_-24px_rgba(255,255,255,0.8)] hover:bg-cyan-100",
  secondary:
    "border border-white/15 bg-white/10 text-white backdrop-blur-xl hover:border-cyan-300/40 hover:bg-white/14",
  ghost:
    "border border-transparent bg-transparent text-slate-200 hover:border-white/15 hover:bg-white/8 hover:text-white",
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
        "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
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
