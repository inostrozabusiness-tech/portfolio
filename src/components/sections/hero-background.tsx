"use client";

import { motion, useReducedMotion } from "framer-motion";

const glowOrbs = [
  {
    className:
      "left-[8%] top-[16%] h-36 w-36 bg-cyan-400/20 sm:h-44 sm:w-44 lg:h-56 lg:w-56",
    duration: 14,
  },
  {
    className:
      "right-[10%] top-[18%] h-32 w-32 bg-fuchsia-400/14 sm:h-40 sm:w-40 lg:h-48 lg:w-48",
    duration: 18,
  },
  {
    className:
      "bottom-[14%] right-[24%] h-40 w-40 bg-sky-300/16 sm:h-48 sm:w-48 lg:h-64 lg:w-64",
    duration: 16,
  },
] as const;

const particles = [
  { left: "12%", top: "24%", delay: 0.2, duration: 6 },
  { left: "22%", top: "72%", delay: 0.8, duration: 7 },
  { left: "48%", top: "18%", delay: 0.5, duration: 6.5 },
  { left: "62%", top: "64%", delay: 1.1, duration: 7.2 },
  { left: "78%", top: "28%", delay: 0.4, duration: 5.8 },
  { left: "86%", top: "76%", delay: 1.4, duration: 6.8 },
] as const;

export function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.18),_transparent_26%),linear-gradient(180deg,_rgba(2,6,23,0.92)_0%,_rgba(2,6,23,1)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.18]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(2,6,23,0.12)_45%,_rgba(2,6,23,0.82)_100%)]" />

      {glowOrbs.map((orb) => (
        <motion.span
          key={orb.className}
          className={`absolute rounded-full blur-3xl ${orb.className}`}
          animate={
            shouldReduceMotion
              ? { opacity: [0.45, 0.7, 0.45] }
              : { y: [0, -18, 0], x: [0, 14, 0], opacity: [0.4, 0.72, 0.4] }
          }
          transition={{
            duration: orb.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-100/70 shadow-[0_0_14px_rgba(125,211,252,0.7)]"
          style={{ left: particle.left, top: particle.top }}
          animate={
            shouldReduceMotion
              ? { opacity: [0.35, 0.7, 0.35] }
              : { y: [0, -10, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.25, 1] }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
