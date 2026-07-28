import { AboutSection } from "@/components/sections/about-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechnologiesSection } from "@/components/sections/technologies-section";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      {portfolio.experience.items.length > 0 ? <ExperienceSection /> : null}
      {portfolio.projects.items.length > 0 ? <ProjectsSection /> : null}
      {portfolio.technologies.groups.length > 0 ? <TechnologiesSection /> : null}
      {portfolio.certifications.items.length > 0 ? <CertificationsSection /> : null}
      {portfolio.education.items.length > 0 ? <EducationSection /> : null}
      {portfolio.contact.links.length > 0 ? <ContactSection /> : null}
      <FooterSection />
    </main>
  );
}
