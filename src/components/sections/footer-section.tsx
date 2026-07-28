import { Container } from "@/components/layout/container";
import { portfolio } from "@/data/portfolio";

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {portfolio.fullName}.</p>
        <p>{portfolio.footer.note}</p>
      </Container>
    </footer>
  );
}
