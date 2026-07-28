import { SectionShell } from "@/components/ui/section-shell";
import { portfolio } from "@/data/portfolio";

export function EducationSection() {
  const { education } = portfolio;

  return (
    <SectionShell
      id="education"
      eyebrow={education.eyebrow}
      title={education.title}
      description={education.description}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {education.items.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-card)] p-8"
          >
            <h3 className="text-xl font-medium text-[color:var(--text-primary)]">{item.title}</h3>
            <p className="mt-3 text-base leading-7 text-[color:var(--text-muted)]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
