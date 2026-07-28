"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionShell } from "@/components/ui/section-shell";
import { portfolio } from "@/data/portfolio";
import { getProjectCategories } from "@/data/projects";

export function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion();
  const { projects } = portfolio;
  const categories = useMemo(() => getProjectCategories(projects.items), [projects.items]);
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? "Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects.items
      : projects.items.filter((item) => item.category === activeCategory);

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
  };

  return (
    <SectionShell
      id="projects"
      eyebrow={projects.eyebrow}
      title={projects.title}
      description={projects.description}
    >
      <div className="space-y-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={[
                  "inline-flex min-h-11 items-center rounded-full border px-5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--focus-offset)]",
                  isActive
                    ? "border-[color:var(--accent-strong)] bg-[color:var(--accent-soft)] text-[color:var(--accent-foreground)] shadow-[0_20px_45px_-30px_rgba(34,211,238,0.32)]"
                    : "border-[color:var(--border-subtle)] bg-[color:var(--surface-card)] text-[color:var(--text-muted)] hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-card-strong)] hover:text-[color:var(--text-primary)]",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.08,
              },
            },
          }}
          className="grid gap-5 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: "easeOut" }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          layout
          initial={false}
          className="rounded-[28px] border border-[color:var(--border-subtle)] bg-[color:var(--surface-card)] px-5 py-4 text-sm text-[color:var(--text-muted)]"
        >
          <span className="font-semibold text-[color:var(--text-primary)]">
            {filteredProjects.length}
          </span>{" "}
          proyecto{filteredProjects.length === 1 ? "" : "s"} en la categoría{" "}
          <span className="font-semibold text-[color:var(--accent)]">{activeCategory}</span>.
        </motion.div>
      </div>
    </SectionShell>
  );
}
