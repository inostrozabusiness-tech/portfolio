import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Tag } from "@/components/ui/tag";
import { projectStatusLabels, type ProjectItem, type ProjectStatus } from "@/data/projects";

type ProjectCardProps = {
  project: ProjectItem;
};

const statusClasses: Record<ProjectStatus, string> = {
  production:
    "border-[color:var(--status-success-border)] bg-[color:var(--status-success-background)] text-[color:var(--status-success-foreground)]",
  beta:
    "border-[color:var(--status-warning-border)] bg-[color:var(--status-warning-background)] text-[color:var(--status-warning-foreground)]",
  "in-progress":
    "border-[color:var(--status-info-border)] bg-[color:var(--status-info-background)] text-[color:var(--status-info-foreground)]",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[30px] border border-[color:var(--border-subtle)] bg-[color:var(--surface-card)] shadow-[var(--card-shadow)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent-strong)] hover:bg-[color:var(--surface-card-strong)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_38%)] opacity-90" />

      <div className="relative flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-[color:var(--border-subtle)]">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to top, var(--background), rgba(var(--background-rgb), 0.3), transparent)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
            <Tag className="border-[color:var(--accent-soft-strong)] bg-[color:var(--surface-panel)] text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">
              {project.category}
            </Tag>
            <Tag className={`text-xs font-semibold ${statusClasses[project.status]}`}>
              {projectStatusLabels[project.status]}
            </Tag>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text-primary)]">
              {project.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)] sm:text-base">
              {project.description}
            </p>
          </div>

          <div className="mt-6 space-y-5">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--text-soft)]">
                Tecnologías
              </p>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((technology) => (
                  <Tag
                    key={technology}
                    className="bg-[color:var(--surface-card-strong)] text-sm text-[color:var(--text-secondary)]"
                  >
                    {technology}
                  </Tag>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--text-soft)]">
                Etiquetas
              </p>
              <div className="flex flex-wrap gap-2.5">
                {project.tags.map((tag) => (
                  <Tag
                    key={tag}
                    className="border-[color:var(--border-subtle)] bg-[color:var(--surface-panel-soft)] text-sm text-[color:var(--text-muted)]"
                  >
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
      <div className="flex min-h-12 items-center justify-center rounded-full border border-dashed border-[color:var(--border-subtle)] bg-[color:var(--surface-panel-soft)] px-5 text-sm font-medium text-[color:var(--text-soft)]">
        <span>{label}:</span>
        <span className="ml-2 text-[color:var(--text-muted)]">{emptyLabel}</span>
      </div>
    );
  }

  return (
    <ButtonLink href={href} variant={variant} target="_blank" rel="noreferrer">
      {label}
    </ButtonLink>
  );
}
