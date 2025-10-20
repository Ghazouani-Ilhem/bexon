import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import ScriptLoader from "@/components/ScriptLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bexon - Corporate Business Template",
  description: "Bexon - Corporate Business HTML Template converted to Next.js",
  keywords: "corporate, business, template, nextjs, react",
  authors: [{ name: "Theme-Junction" }],
  viewport: "width=device-width, initial-scale=1",
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
      </head>
      <body className={`${inter.variable} antialiased`}>
        <div className="body-overlay"></div>
        <Layout>{children}</Layout>
        <ScriptLoader />
      </body>
    </html>
  );
}
