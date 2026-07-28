import { SectionShell } from "@/components/ui/section-shell";
import { portfolio } from "@/data/portfolio";

export function ProjectsSection() {
  const { projects } = portfolio;

  return (
    <SectionShell
      id="projects"
      eyebrow={projects.eyebrow}
      title={projects.title}
      description={projects.description}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.items.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            <h3 className="text-xl font-medium text-white">{item.title}</h3>
            {item.subtitle ? (
              <p className="mt-2 text-sm font-medium text-cyan-200">{item.subtitle}</p>
            ) : null}
            <p className="mt-4 text-base leading-7 text-slate-300">{item.description}</p>

            {item.bullets?.length ? (
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
