import { EmptyState } from "@/components/ui/empty-state";
import { SectionShell } from "@/components/ui/section-shell";
import { certificationItems } from "@/data/portfolio";

export function CertificationsSection() {
  return (
    <SectionShell
      id="certifications"
      eyebrow="Validación"
      title="Certificaciones"
      description="Preparado para destacar certificaciones relevantes con jerarquía visual y lectura rápida."
    >
      {certificationItems.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {certificationItems.map((item) => (
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
          title="Sección lista para credenciales y certificaciones"
          description="Añade aquí certificaciones técnicas, cursos relevantes o validaciones profesionales cuando quieras publicarlas."
        />
      )}
    </SectionShell>
  );
}
