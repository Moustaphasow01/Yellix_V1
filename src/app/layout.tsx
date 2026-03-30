import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ShopProvider } from "@/components/shop/shop-provider";
import { siteNavigation } from "@/data/site";

const headingFont = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yellix.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Yellix | Solutions techniques et opérationnelles",
  description:
    "Site vitrine corporate de Yellix, entreprise multisectorielle spécialisée dans les télécommunications, l'énergie, l'agriculture et l'élevage.",
  applicationName: "Yellix",
  keywords: [
    "Yellix",
    "telecommunications",
    "energie",
    "agriculture",
    "elevage",
    "ingenierie",
    "maintenance",
    "audit",
  ],
  openGraph: {
    title: "Yellix | Solutions techniques et opérationnelles",
    description:
      "Yellix accompagne les entreprises, institutions et porteurs de projets avec des solutions techniques, opérationnelles et durables.",
    siteName: "Yellix",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Yellix",
    url: "https://www.yellix.com",
    description:
      "Entreprise multisectorielle spécialisée dans les télécommunications, l'énergie, l'agriculture et l'élevage.",
    knowsAbout: [
      "Audit",
      "Ingénierie",
      "Déploiement",
      "Maintenance",
      "Exploitation",
      "Support",
      "Conseil",
    ],
  };

  return (
    <html lang="fr">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[var(--color-midnight)] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Aller au contenu
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ShopProvider>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader items={siteNavigation} />
            <main id="contenu" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </ShopProvider>
      </body>
    </html>
  );
}
