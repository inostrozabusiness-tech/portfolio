import { portfolio } from "./portfolio";

const FALLBACK_SITE_URL = "https://inostrozabusiness-tech.github.io/portfolio";

function normalizeUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

const siteUrl = normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL);
const socialImagePath = "/opengraph-image";
const twitterImagePath = "/twitter-image";

export const siteConfig = {
  url: siteUrl,
  name: portfolio.fullName,
  siteName: `Portafolio de ${portfolio.fullName}`,
  title: `${portfolio.fullName} | Desarrollador de software, automatización e IA aplicada`,
  description:
    "Portafolio de Benjamín Inostroza, desarrollador de software especializado en Next.js, React, TypeScript, automatización e IA aplicada. Explora proyectos, stack tecnológico y experiencia en soluciones digitales modernas.",
  locale: "es_CL",
  language: "es-CL",
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
  canonicalPath: "/",
  socialPreview: {
    url: socialImagePath,
    absoluteUrl: new URL(socialImagePath, siteUrl).toString(),
    width: 1200,
    height: 630,
    alt: "Portafolio profesional de Benjamín Inostroza con enfoque en desarrollo de software, automatización e IA aplicada.",
  },
  twitterPreview: {
    url: twitterImagePath,
    absoluteUrl: new URL(twitterImagePath, siteUrl).toString(),
  },
  links: {
    home: siteUrl,
    github: portfolio.github,
    linkedin: portfolio.linkedin,
    cv: new URL(portfolio.cv, siteUrl).toString(),
  },
} as const;
