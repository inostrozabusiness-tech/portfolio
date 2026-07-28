import { EmptyState } from "@/components/ui/empty-state";
import { SectionShell } from "@/components/ui/section-shell";
import { projectItems } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Trabajo destacado"
      title="Proyectos"
      description="Espacio diseñado para exhibir proyectos con foco en contexto, solución, stack y resultados."
    >
      {projectItems.length > 0 ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {projectItems.map((item) => (
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
      ) : (
        <EmptyState
          title="Sección lista para incorporar casos de estudio"
          description="Cuando los proyectos estén definidos, esta grilla puede mostrar desafíos, decisiones técnicas y valor generado sin cambiar la estructura base."
        />
      )}
    </SectionShell>
  );
}
