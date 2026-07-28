import { SectionShell } from "@/components/ui/section-shell";
import { portfolio } from "@/data/portfolio";

export function ExperienceSection() {
  const { experience } = portfolio;

  return (
    <SectionShell
      id="experience"
      eyebrow={experience.eyebrow}
      title={experience.title}
      description={experience.description}
    >
      <div className="grid gap-4">
        {experience.items.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                {item.subtitle ? (
                  <p className="mt-2 text-sm font-medium text-cyan-200">{item.subtitle}</p>
                ) : null}
              </div>
              {item.period ? (
                <p className="text-sm text-slate-400">{item.period}</p>
              ) : null}
            </div>

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
