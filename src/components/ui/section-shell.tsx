import { Container } from "@/components/layout/container";
import { SectionHeading } from "./section-heading";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className="scroll-mt-28 py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        {children}
      </Container>
    </section>
  );
}
