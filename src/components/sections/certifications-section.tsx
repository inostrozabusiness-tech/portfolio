import { SectionShell } from "@/components/ui/section-shell";
import { portfolio } from "@/data/portfolio";

export function CertificationsSection() {
  const { certifications } = portfolio;

  return (
    <SectionShell
      id="certifications"
      eyebrow={certifications.eyebrow}
      title={certifications.title}
      description={certifications.description}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.items.map((item) => (
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
