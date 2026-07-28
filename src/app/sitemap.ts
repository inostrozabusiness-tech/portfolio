import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.links.home,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
