import { Container } from "@/components/layout/container";

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Benjamín Inostroza.</p>
        <p>Portafolio base en Next.js 15 listo para seguir desarrollándose.</p>
      </Container>
    </footer>
  );
}
