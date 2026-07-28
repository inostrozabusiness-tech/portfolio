type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={[
        "inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
