type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.03] p-8 sm:p-10">
      <div className="max-w-2xl space-y-3">
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <p className="text-base leading-7 text-slate-300">{description}</p>
      </div>
    </div>
  );
}
