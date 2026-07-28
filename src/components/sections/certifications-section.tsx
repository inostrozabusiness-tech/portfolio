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
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            <h3 className="text-xl font-medium text-white">{item.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
