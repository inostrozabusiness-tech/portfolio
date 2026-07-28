import { SectionShell } from "@/components/ui/section-shell";
import { Tag } from "@/components/ui/tag";
import { contactContent } from "@/data/portfolio";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Conexión"
      title={contactContent.title}
      description={contactContent.description}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
        <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/[0.04] to-white/[0.02] p-8">
          <h3 className="text-2xl font-medium text-white">
            Estructura lista para publicar canales reales de contacto
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Puedes conectar esta sección con correo, perfil profesional o formularios sin tocar la jerarquía general del sitio.
          </p>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <h3 className="text-lg font-medium text-white">Canales sugeridos</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {contactContent.channels.map((channel) => (
              <Tag key={channel}>{channel}</Tag>
            ))}
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
