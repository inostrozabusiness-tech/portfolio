"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type ThemeMode = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

const storageKey = "portfolio-theme";

const themeOptions: {
  value: ThemeMode;
  label: string;
  Icon: (props: { className?: string }) => React.JSX.Element;
}[] = [
  {
    value: "system",
    label: "Usar tema del sistema",
    Icon: DesktopIcon,
  },
  {
    value: "light",
    label: "Usar tema claro",
    Icon: SunIcon,
  },
  {
    value: "dark",
    label: "Usar tema oscuro",
    Icon: MoonIcon,
  },
];

export function ThemeToggle() {
  const shouldReduceMotion = useReducedMotion();
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");
  const themeModeRef = useRef<ThemeMode>("system");
  const animationTimeoutRef = useRef<number | null>(null);

  const applyTheme = useCallback(
    (
      mode: ThemeMode,
      options?: {
        animate?: boolean;
        persist?: boolean;
      },
    ) => {
      if (typeof window === "undefined") {
        return;
      }

      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const root = document.documentElement;
      const resolvedThemeValue: ResolvedTheme =
        mode === "system" ? (mediaQuery.matches ? "dark" : "light") : mode;

      themeModeRef.current = mode;
      setThemeMode(mode);
      setResolvedTheme(resolvedThemeValue);

      root.dataset.themeMode = mode;
      root.dataset.theme = resolvedThemeValue;
      root.style.colorScheme = resolvedThemeValue;

      if (options?.persist !== false) {
        window.localStorage.setItem(storageKey, mode);
      }

      if (!shouldReduceMotion && options?.animate !== false) {
        root.classList.add("theme-animating");
        if (animationTimeoutRef.current) {
          window.clearTimeout(animationTimeoutRef.current);
        }
        animationTimeoutRef.current = window.setTimeout(() => {
          root.classList.remove("theme-animating");
          animationTimeoutRef.current = null;
        }, 260);
      }
    },
    [shouldReduceMotion],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const root = document.documentElement;

    const storedTheme = window.localStorage.getItem(storageKey);
    const initialMode =
      storedTheme === "system" || storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : ((root.dataset.themeMode as ThemeMode | undefined) ?? "system");

    applyTheme(initialMode, { animate: false, persist: false });

    const handleSystemChange = () => {
      if (themeModeRef.current === "system") {
        applyTheme("system", { animate: true, persist: false });
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange);
      if (animationTimeoutRef.current) {
        window.clearTimeout(animationTimeoutRef.current);
        animationTimeoutRef.current = null;
      }
      root.classList.remove("theme-animating");
    };
  }, [applyTheme]);

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--surface-card)] p-1 shadow-[var(--card-shadow)] backdrop-blur-xl"
      role="group"
      aria-label="Cambiar tema"
    >
      {themeOptions.map(({ value, label, Icon }) => {
        const isActive = themeMode === value;
        const isResolved = resolvedTheme === value;

        return (
          <button
            key={value}
            type="button"
            aria-pressed={isActive}
            aria-label={label}
            title={label}
            onClick={() => applyTheme(value)}
            className={[
              "flex h-11 w-11 items-center justify-center rounded-full border text-[color:var(--text-muted)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--focus-offset)]",
              isActive
                ? "border-[color:var(--accent-strong)] bg-[color:var(--accent-soft)] text-[color:var(--accent-foreground)]"
                : "border-transparent bg-transparent hover:border-[color:var(--border-subtle)] hover:bg-[color:var(--surface-pill)] hover:text-[color:var(--text-primary)]",
            ].join(" ")}
          >
            <Icon className="h-5 w-5" />
            <span className="sr-only">
              {value === "system"
                ? `Tema automático ${isResolved ? `(${resolvedTheme})` : ""}`
                : label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.75V5.25M12 18.75V21.25M21.25 12H18.75M5.25 12H2.75M18.54 5.46L16.77 7.23M7.23 16.77L5.46 18.54M18.54 18.54L16.77 16.77M7.23 7.23L5.46 5.46"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M20.5 14.13A8.5 8.5 0 1 1 9.87 3.5a6.75 6.75 0 1 0 10.63 10.63Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function DesktopIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <rect
        x="3.25"
        y="4.25"
        width="17.5"
        height="11.5"
        rx="2.75"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.5 19.75H15.5M12 15.75V19.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
