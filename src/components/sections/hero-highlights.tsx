import type { HighlightItem } from "@/data/portfolio";

type HeroHighlightsProps = {
  items: HighlightItem[];
};

export function HeroHighlights({ items }: HeroHighlightsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-[28px] border border-[color:var(--border-subtle)] bg-[color:var(--surface-card-strong)] p-5 backdrop-blur-xl shadow-[var(--highlight-shadow)]"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">
            {item.title}
          </p>
          <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}
