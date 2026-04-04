import type { Metadata } from "next";

import "./globals.css";

import { PortfolioAnalytics } from "@/components/analytics/portfolio-analytics";
import { siteConfig } from "@/content/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  keywords: [
    "Product Manager",
    "AI Product Manager",
    "Technical Product Manager",
    "Data Platforms",
    "APIs",
    "AWS",
    "Portfolio"
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="bg-ink font-sans text-white antialiased">
        <PortfolioAnalytics />
        {children}
      </body>
    </html>
  );
}
