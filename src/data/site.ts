import { portfolio } from "./portfolio";

const FALLBACK_SITE_URL = "https://inostrozabusiness-tech.github.io/portfolio";

function normalizeUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

const siteUrl = normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL);

export const siteConfig = {
  url: siteUrl,
  name: portfolio.fullName,
  siteName: portfolio.fullName,
  title: `${portfolio.fullName} | Desarrollador de software, automatización e IA aplicada`,
  description:
    "Portafolio de Benjamín Inostroza, desarrollador de software con experiencia en Next.js, React, TypeScript, automatización y soluciones con IA aplicada. Descubre proyectos, stack tecnológico y enfoque profesional.",
  locale: "es_CL",
  keywords: [
    "Benjamín Inostroza",
    "portafolio desarrollador",
    "desarrollador frontend",
    "Next.js",
    "React",
    "TypeScript",
    "automatización",
    "robótica industrial",
    "IA aplicada",
    "desarrollo web",
  ],
  themeColor: "#020617",
  backgroundColor: "#020617",
  socialPreview: {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Portafolio profesional de Benjamín Inostroza con enfoque en desarrollo de software, automatización e IA aplicada.",
  },
  links: {
    github: portfolio.github,
    cv: new URL(portfolio.cv, siteUrl).toString(),
  },
} as const;
