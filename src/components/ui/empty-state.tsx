type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-[color:var(--border-strong)] bg-[color:var(--surface-card)] p-8 sm:p-10">
      <div className="max-w-2xl space-y-3">
        <h3 className="text-xl font-medium text-[color:var(--text-primary)]">{title}</h3>
        <p className="text-base leading-7 text-[color:var(--text-muted)]">{description}</p>
      </div>
    </div>
  );
}
