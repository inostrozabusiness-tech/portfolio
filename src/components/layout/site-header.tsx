import { navigationItems, portfolio } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border-subtle)] bg-[color:var(--surface-panel-soft)] backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-6">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-[0.24em] text-[color:var(--text-primary)] transition hover:text-[color:var(--accent)]"
        >
          {portfolio.fullName.toUpperCase()}
        </a>

        <div className="flex items-center gap-3">
          <nav aria-label="Navegación principal" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm text-[color:var(--text-secondary)]">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="transition hover:text-[color:var(--text-primary)]"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
