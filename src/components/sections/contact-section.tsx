import { SectionShell } from "@/components/ui/section-shell";
import { portfolio } from "@/data/portfolio";

export function ContactSection() {
  const { contact } = portfolio;

  return (
    <SectionShell
      id="contact"
      eyebrow={contact.eyebrow}
      title={contact.title}
      description={contact.description}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
        <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/[0.04] to-white/[0.02] p-8">
          <h3 className="text-2xl font-medium text-white">Disponibilidad profesional</h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            {contact.availability}
          </p>
          {portfolio.socialLinks.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {portfolio.socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <h3 className="text-lg font-medium text-white">Canales disponibles</h3>
          <div className="mt-5 grid gap-4">
            {contact.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                download={link.download}
                className="rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 transition hover:border-cyan-300/40 hover:bg-white/[0.08]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  {link.label}
                </p>
                <p className="mt-2 text-base text-white">{link.value}</p>
              </a>
            ))}
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
