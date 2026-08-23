import type { Metadata } from "next";
import "./globals.css";

/**
 * Font Configuration:
 * Roobert PRO / System geometric sans-serif stack defined in globals.css @theme & Tailwind
 */
export const metadata: Metadata = {
  title: "ShaniAI Agency",
  description: "Bespoke software & AI solutions engineered for your business - delivered with transparent one-time builds and dedicated ongoing support.",
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
