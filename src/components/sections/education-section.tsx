import { SectionShell } from "@/components/ui/section-shell";
import { educationItems } from "@/data/portfolio";

export function EducationSection() {
  return (
    <SectionShell
      id="education"
      eyebrow="Formación"
      title="Educación"
      description="Base formativa presentada de forma clara para conectar trayectoria académica y dirección profesional."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {educationItems.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            <h3 className="text-xl font-medium text-white">{item.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-300">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
