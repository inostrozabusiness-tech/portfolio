import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Tag } from "@/components/ui/tag";
import { projectStatusLabels, type ProjectItem, type ProjectStatus } from "@/data/projects";

type ProjectCardProps = {
  project: ProjectItem;
};

const statusClasses: Record<ProjectStatus, string> = {
  production: "border-emerald-400/25 bg-emerald-400/10 text-emerald-100",
  beta: "border-amber-300/25 bg-amber-300/10 text-amber-50",
  "in-progress": "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-[0_30px_90px_-48px_rgba(34,211,238,0.42)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_38%)] opacity-90" />

      <div className="relative flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
            <Tag className="border-cyan-300/25 bg-slate-950/75 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
              {project.category}
            </Tag>
            <Tag className={`text-xs font-semibold ${statusClasses[project.status]}`}>
              {projectStatusLabels[project.status]}
            </Tag>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
              {project.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              {project.description}
            </p>
          </div>

          <div className="mt-6 space-y-5">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                Tecnologías
              </p>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((technology) => (
                  <Tag key={technology} className="bg-white/[0.03] text-sm text-slate-100">
                    {technology}
                  </Tag>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                Etiquetas
              </p>
              <div className="flex flex-wrap gap-2.5">
                {project.tags.map((tag) => (
                  <Tag key={tag} className="border-white/8 bg-slate-900/70 text-sm text-slate-300">
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <ProjectLink
              href={project.github}
              label="GitHub"
              emptyLabel="Repositorio privado"
              variant="secondary"
            />
            <ProjectLink
              href={project.demo}
              label="Demo"
              emptyLabel="Próximamente"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

type ProjectLinkProps = {
  href?: string;
  label: string;
  emptyLabel: string;
  variant: "primary" | "secondary";
};

function ProjectLink({ href, label, emptyLabel, variant }: ProjectLinkProps) {
  if (!href) {
    return (
      <div className="flex min-h-12 items-center justify-center rounded-full border border-dashed border-white/10 bg-slate-950/50 px-5 text-sm font-medium text-slate-400">
        <span className="text-slate-500">{label}:</span>
        <span className="ml-2 text-slate-300">{emptyLabel}</span>
      </div>
    );
  }

  return (
    <ButtonLink href={href} variant={variant} target="_blank" rel="noreferrer">
      {label}
    </ButtonLink>
  );
}
