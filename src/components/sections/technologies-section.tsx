import { SectionShell } from "@/components/ui/section-shell";
import { Tag } from "@/components/ui/tag";
import { technologyGroups } from "@/data/portfolio";

export function TechnologiesSection() {
  return (
    <SectionShell
      id="technologies"
      eyebrow="Stack"
      title="Tecnologías"
      description="Organización por áreas para comunicar competencias y herramientas sin saturar la experiencia visual."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {technologyGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
          >
            <h3 className="text-lg font-medium text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
