import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { portfolio } from "@/data/portfolio";
import { siteConfig } from "@/data/site";
import { getPersonSchema } from "@/lib/schema";
import "./globals.css";

const themeInitializerScript = `
(() => {
  const storageKey = "portfolio-theme";
  const root = document.documentElement;
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const storedTheme = window.localStorage.getItem(storageKey);
  const themeMode = storedTheme === "light" || storedTheme === "dark" || storedTheme === "system"
    ? storedTheme
    : "system";
  const resolvedTheme = themeMode === "system"
    ? (mediaQuery.matches ? "dark" : "light")
    : themeMode;

  root.dataset.themeMode = themeMode;
  root.dataset.theme = resolvedTheme;
  root.style.colorScheme = resolvedTheme;
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${portfolio.fullName}`,
  },
  description: siteConfig.description,
  applicationName: portfolio.fullName,
  keywords: [...siteConfig.keywords],
  authors: [{ name: portfolio.fullName, url: siteConfig.url }],
  creator: portfolio.fullName,
  publisher: portfolio.fullName,
  category: "technology",
  alternates: {
    canonical: siteConfig.canonicalPath,
  },
  manifest: "/manifest.webmanifest",
  referrer: "origin-when-cross-origin",
  appleWebApp: {
    capable: true,
    title: portfolio.fullName,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.links.home,
    siteName: siteConfig.siteName,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.socialPreview.absoluteUrl,
        width: siteConfig.socialPreview.width,
        height: siteConfig.socialPreview.height,
        alt: siteConfig.socialPreview.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.twitterPreview.absoluteUrl],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteConfig.themeColor,
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = getPersonSchema();

  return (
    <html
      lang={siteConfig.language}
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
      <body className="bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[color:var(--button-primary-background)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[color:var(--button-primary-foreground)]"
        >
          Saltar al contenido principal
        </a>
        <div className="theme-page relative min-h-screen">
          <div className="theme-grid-overlay absolute inset-0 bg-[size:80px_80px] opacity-20" />
          <div className="relative">
            <SiteHeader />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
