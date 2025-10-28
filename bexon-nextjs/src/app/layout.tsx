import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import ScriptLoader from "@/components/ScriptLoader";
import { generateSEO, structuredData } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = generateSEO({
  title: "Bexon - Corporate Business Solutions",
  description: "Leading provider of innovative business solutions, helping companies achieve growth through cutting-edge technology and exceptional service.",
  keywords: "business solutions, corporate services, technology consulting, digital transformation, business growth, innovation",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-js">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/images/fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.website),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <div className="body-overlay"></div>
        <Layout>{children}</Layout>
        <ScriptLoader />
      </body>
    </html>
  );
}
