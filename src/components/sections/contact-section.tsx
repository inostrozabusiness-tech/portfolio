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
        <article className="rounded-3xl border border-[color:var(--border-subtle)] bg-[linear-gradient(135deg,var(--accent-soft)_0%,var(--surface-card)_55%,transparent_100%)] p-8">
          <h3 className="text-2xl font-medium text-[color:var(--text-primary)]">
            Disponibilidad profesional
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--text-muted)]">
            {contact.availability}
          </p>
          {portfolio.socialLinks.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {portfolio.socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--surface-panel-soft)] px-4 py-2 text-sm text-[color:var(--text-secondary)] transition hover:border-[color:var(--accent-strong)] hover:text-[color:var(--text-primary)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}
        </article>

        <article className="rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-card)] p-8">
          <h3 className="text-lg font-medium text-[color:var(--text-primary)]">
            Canales disponibles
          </h3>
          <div className="mt-5 grid gap-4">
            {contact.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                download={link.download}
                className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-panel-soft)] px-5 py-4 transition hover:border-[color:var(--accent-strong)] hover:bg-[color:var(--surface-card-strong)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--text-soft)]">
                  {link.label}
                </p>
                <p className="mt-2 text-base text-[color:var(--text-primary)]">{link.value}</p>
              </a>
            ))}
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
