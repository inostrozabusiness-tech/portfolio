import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: portfolioName(siteConfig.name),
    description: siteConfig.description,
    id: siteConfig.canonicalPath,
    start_url: siteConfig.canonicalPath,
    scope: siteConfig.canonicalPath,
    display: "standalone",
    background_color: siteConfig.backgroundColor,
    theme_color: siteConfig.themeColor,
    lang: siteConfig.language,
    categories: ["portfolio", "technology", "software development"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32",
        type: "image/x-icon",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

function portfolioName(name: string) {
  return name.length > 12 ? "Portfolio" : name;
}
