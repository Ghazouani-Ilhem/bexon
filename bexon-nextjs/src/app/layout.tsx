import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

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
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-pro.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/bexon-icons.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/venobox.min.css" />
        <link rel="stylesheet" href="/assets/css/odometer-theme-default.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <div className="body-overlay"></div>
        <Layout>{children}</Layout>
        
        {/* Scripts */}
        <script src="/assets/js/jquery.min.js"></script>
        <script src="/assets/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/gsap.min.js"></script>
        <script src="/assets/js/ScrollSmoother.js"></script>
        <script src="/assets/js/gsap-scroll-to-plugin.min.js"></script>
        <script src="/assets/js/gsap-scroll-trigger.min.js"></script>
        <script src="/assets/js/gsap-split-text.min.js"></script>
        <script src="/assets/js/jquery.nice-select.min.js"></script>
        <script src="/assets/js/swiper.min.js"></script>
        <script src="/assets/js/odometer.min.js"></script>
        <script src="/assets/js/venobox.min.js"></script>
        <script src="/assets/js/appear.min.js"></script>
        <script src="/assets/js/wow.min.js"></script>
        <script src="/assets/js/meanmenu.js"></script>
        <script src="/assets/js/main.js"></script>
      </body>
    </html>
  );
}
