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
          className="rounded-[28px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl shadow-[0_24px_90px_-48px_rgba(56,189,248,0.45)]"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/90">
            {item.title}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
