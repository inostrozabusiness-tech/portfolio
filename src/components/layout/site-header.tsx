import { navigationItems } from "@/data/portfolio";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-6">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-[0.24em] text-white transition hover:text-cyan-300"
        >
          BENJAMÍN INOSTROZA
        </a>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-slate-300">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-white" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
