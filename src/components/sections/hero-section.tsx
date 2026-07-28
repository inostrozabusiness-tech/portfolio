"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { portfolio } from "@/data/portfolio";
import { HeroActions } from "./hero-actions";
import { HeroBackground } from "./hero-background";
import { HeroHighlights } from "./hero-highlights";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const { hero } = portfolio;

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative -mt-16 flex min-h-screen items-center overflow-hidden pt-24"
    >
      <HeroBackground />

      <Container className="relative z-10 flex w-full">
        <div className="grid min-h-[calc(100svh-6rem)] w-full items-center gap-8 py-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-10 lg:py-16">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.12, duration: 0.7, ease: "easeOut" }}
            className="rounded-[32px] border border-[color:var(--border-subtle)] bg-[color:var(--surface-card-strong)] p-6 shadow-[var(--hero-shadow)] backdrop-blur-2xl sm:p-8 lg:p-10"
          >
            <motion.div variants={fadeUp} className="space-y-6">
              <span className="inline-flex rounded-full border border-[color:var(--accent-soft-strong)] bg-[color:var(--accent-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--accent-foreground)]">
                {hero.eyebrow}
              </span>

              <div className="space-y-4">
                <h1
                  id="hero-title"
                  className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-[color:var(--text-primary)] sm:text-6xl lg:text-7xl"
                >
                  {hero.title}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-[color:var(--text-secondary)] sm:text-xl lg:text-2xl">
                  {portfolio.professionalTitle}
                </p>
                <p className="max-w-2xl text-base leading-7 text-[color:var(--text-muted)] sm:text-lg">
                  {hero.description}
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <HeroActions actions={hero.actions} />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid gap-3 text-sm text-[color:var(--text-muted)] sm:grid-cols-3"
            >
              {hero.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-panel-soft)] px-4 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--text-soft)]">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                    {metric.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="rounded-[32px] border border-[color:var(--border-subtle)] bg-[color:var(--surface-card)] p-6 backdrop-blur-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--accent)]">
                {hero.profileHeading}
              </p>
              <p className="mt-4 text-xl font-medium leading-8 text-[color:var(--text-primary)]">
                {hero.profileSummary}
              </p>
            </div>
            <HeroHighlights items={hero.highlights} />
          </motion.div>
        </div>
      </Container>

      <ScrollIndicator href="#about" label="Desplazarse hacia la sección Sobre mí" />
    </section>
  );
}
