import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTop from "@/components/ScrollToTop";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Shopa Marketing — Your Go-To Marketing Company for SMEs",
  description:
    "Shopa Marketing is an award-winning digital marketing agency based in Melbourne, Australia, helping SMEs grow through SEO, Social Media, Google Ads, and more.",
  keywords: "digital marketing, SEO, social media, Google Ads, done for you marketing, Melbourne, Australia",
  // app/icon.png and app/apple-icon.png are auto-detected by Next.js App Router.
  // The explicit entry below ensures the PNG favicon also loads for older browsers.
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect hints — establish connections early for deferred font load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload the two variable-font files (latin) so the swap from the
            fallback font happens right after first paint — a late swap
            re-renders the hero text and drags LCP. URLs are version-pinned;
            if Google bumps v31/v18 these become no-ops, not errors. */}
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href="https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2" />
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href="https://fonts.gstatic.com/s/urbanist/v18/L0x-DF02iFML4hGCyMqlbS1miXK2.woff2" />
        {/* Critical CSS — blocks render but needed for above-fold styles + WOW.js keyframes */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        {/* all.min.css (Font Awesome), flaticon_choicy, swiper, odometer,
            magnific-popup and Google Fonts load non-blocking via DeferredStyles */}
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <DeferredStyles />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
