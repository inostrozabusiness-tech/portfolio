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
                  "inline-flex min-h-11 items-center rounded-full border px-5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                  isActive
                    ? "border-cyan-300/35 bg-cyan-300/15 text-cyan-50 shadow-[0_20px_45px_-30px_rgba(34,211,238,0.65)]"
                    : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white",
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
          className="rounded-[28px] border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-slate-300"
        >
          <span className="font-semibold text-white">{filteredProjects.length}</span>{" "}
          proyecto{filteredProjects.length === 1 ? "" : "s"} en la categoría{" "}
          <span className="font-semibold text-cyan-100">{activeCategory}</span>.
        </motion.div>
      </div>
    </SectionShell>
  );
}
