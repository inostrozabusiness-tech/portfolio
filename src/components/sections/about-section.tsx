import { SectionShell } from "@/components/ui/section-shell";
import { portfolio } from "@/data/portfolio";

export function AboutSection() {
  const { about } = portfolio;

  return (
    <SectionShell
      id="about"
      eyebrow="Perfil"
      title={about.title}
      description={about.description}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <article className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-card)] p-8">
          <p className="text-lg leading-8 text-[color:var(--text-secondary)]">{about.intro}</p>
        </article>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {about.highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-panel)] p-6"
            >
              <h3 className="text-lg font-medium text-[color:var(--text-primary)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
