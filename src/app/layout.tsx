import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: `${portfolio.fullName} | Portafolio`,
  description: portfolio.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-950"
        >
          Saltar al contenido principal
        </a>
        <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_38%),linear-gradient(180deg,_rgba(15,23,42,1)_0%,_rgba(2,6,23,1)_100%)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
          <div className="relative">
            <SiteHeader />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
