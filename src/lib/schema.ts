import { portfolio } from "@/data/portfolio";
import { siteConfig } from "@/data/site";

export function getPersonSchema() {
  const sameAs = [portfolio.github, portfolio.linkedin].filter(
    (value): value is string => Boolean(value),
  );
  const knowsAbout = portfolio.technologies.groups.flatMap((group) => group.items);
  const alumniOf = portfolio.education.items.map((item) => item.title);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: portfolio.fullName,
    url: siteConfig.url,
    description: siteConfig.description,
    jobTitle: portfolio.professionalTitle,
    image: siteConfig.socialPreview.absoluteUrl,
    sameAs,
    knowsAbout,
    alumniOf,
    mainEntityOfPage: siteConfig.links.home,
    inLanguage: siteConfig.language,
  };
}
