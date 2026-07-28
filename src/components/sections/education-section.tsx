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
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            <h3 className="text-xl font-medium text-white">{item.title}</h3>
            {item.subtitle ? (
              <p className="mt-2 text-sm font-medium text-cyan-200">{item.subtitle}</p>
            ) : null}
            <p className="mt-3 text-base leading-7 text-slate-300">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
