import { Container } from "@/components/layout/container";
import { heroContent } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)] lg:items-end">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
              {heroContent.eyebrow}
            </span>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {heroContent.title}
              </h1>
              <p className="max-w-3xl text-xl leading-8 text-slate-300 sm:text-2xl">
                {heroContent.subtitle}
              </p>
              <p className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                {heroContent.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={heroContent.primaryAction.href}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                {heroContent.primaryAction.label}
              </a>
              <a
                href={heroContent.secondaryAction.href}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                {heroContent.secondaryAction.label}
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {heroContent.highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_-40px_rgba(34,211,238,0.35)]"
              >
                <h2 className="text-lg font-medium text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
