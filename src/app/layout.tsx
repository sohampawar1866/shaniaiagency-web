import type { Metadata } from "next";
import "./globals.css";

/**
 * Global Metadata & SEO Configuration for ShaniAI Agency
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://shaniaiagency.tech"),
  title: {
    default: "ShaniAI Agency | Custom Software & AI Engineering Studio",
    template: "%s | ShaniAI Agency",
  },
  description:
    "Bespoke software & AI solutions engineered for your business — delivered with transparent one-time builds and dedicated ongoing support.",
  keywords: [
    "ShaniAI Agency",
    "ShaniAI",
    "Soham Pawar",
    "Custom Software Development",
    "AI Solutions",
    "Autonomous AI Agents",
    "Full-Stack Web Applications",
    "Enterprise Software",
    "AI Automation",
    "Bespoke Software Studio",
  ],
  authors: [{ name: "Soham Pawar", url: "https://shaniaiagency.tech" }],
  creator: "Soham Pawar",
  publisher: "ShaniAI Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ShaniAI Agency | Custom Software & AI Studio",
    description:
      "Bespoke software & AI solutions engineered for your business with transparent one-time builds and dedicated managed support.",
    url: "https://shaniaiagency.tech",
    siteName: "ShaniAI Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShaniAI Agency | Custom Software & AI Studio",
    description:
      "Bespoke software & AI solutions engineered for your business with transparent one-time builds.",
    creator: "@SohamPawar1866",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
