"use client";

import { motion, useReducedMotion } from "framer-motion";

type ScrollIndicatorProps = {
  href: string;
  label: string;
};

export function ScrollIndicator({ href, label }: ScrollIndicatorProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      aria-label={label}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
      className="group absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-slate-400 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <span>Scroll</span>
      <span className="flex h-14 w-8 items-start justify-center rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-md">
        <motion.span
          className="h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.8)]"
          animate={
            shouldReduceMotion
              ? { opacity: [0.7, 1, 0.7] }
              : { y: [0, 24, 0], opacity: [0.7, 1, 0.7] }
          }
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </span>
    </motion.a>
  );
}
