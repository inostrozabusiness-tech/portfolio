import { portfolio } from "@/data/portfolio";
import { siteConfig } from "@/data/site";

export function getPersonSchema() {
  const sameAs = [portfolio.github, portfolio.linkedin].filter(
    (value): value is string => Boolean(value),
  );

  const knowsAbout = portfolio.technologies.groups.flatMap((group) => group.items);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.fullName,
    url: siteConfig.url,
    description: siteConfig.description,
    jobTitle: portfolio.professionalTitle,
    image: new URL(siteConfig.socialPreview.url, siteConfig.url).toString(),
    sameAs,
    knowsAbout,
  };
}
