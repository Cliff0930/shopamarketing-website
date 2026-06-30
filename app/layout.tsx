import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DeferredStyles from "@/components/DeferredStyles";

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
        {/* Critical CSS only — blocks render but needed for above-fold styles */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/flaticon_choicy.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        {/* animate.css, swiper.min.css, odometer.min.css, magnific-popup.css
            and Google Fonts are loaded non-blocking via DeferredStyles */}
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <DeferredStyles />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
