"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, ArrowRight, Phone, X, Menu, Megaphone, MapPin, Search, Share2, Globe, Target, Palette, Calendar } from "lucide-react";
import { clsx } from "clsx";

const services = [
  {
    label: "CMO for Hire",
    href: "/services/cmo-for-hire",
    icon: Megaphone,
    desc: "Fractional marketing leadership for SMEs",
  },
  {
    label: "OOH Advertising",
    href: "/services/ooh-advertising",
    icon: MapPin,
    desc: "Billboards, transit & outdoor media",
  },
  {
    label: "SEO Services",
    href: "/services/seo-services",
    icon: Search,
    desc: "Rank higher and grow organic traffic",
  },
  {
    label: "Social Media Ads",
    href: "/services/social-media",
    icon: Share2,
    desc: "Meta & Instagram campaigns that convert",
  },
  {
    label: "Website Design",
    href: "/services/website",
    icon: Globe,
    desc: "High-converting websites built for growth",
  },
  {
    label: "Google Ads",
    href: "/services/google-ads",
    icon: Target,
    desc: "Pay-per-click campaigns with real ROI",
  },
  {
    label: "Graphic Design",
    href: "/services/graphic-design",
    icon: Palette,
    desc: "Brand identity, assets & creative design",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const NAV_BOTTOM = 120; // px — height of navbar area to check overlap against

    const checkTheme = () => {
      const darkSections = document.querySelectorAll(
        '.breadcrumb-area, [data-navbar-dark]'
      );
      let dark = false;
      darkSections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Overlaps with navbar if section top is above NAV_BOTTOM and bottom is still in view
        if (rect.top <= NAV_BOTTOM && rect.bottom > 0) dark = true;
      });
      setIsDark(dark);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      checkTheme();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const t = setTimeout(checkTheme, 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t);
    };
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <>
      {/* ════════════════════════════════════════════
          HEADER
          Layout: [Logo] ··· [Pill: Nav + CTA] ··· [Phone + Hamburger]
          justify-between keeps all 3 sections pinned correctly.
          The pill is NOT flex-1 — it's naturally sized to its content.
      ════════════════════════════════════════════ */}
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          /* Sticky scroll behaviour — commented out, re-enable when needed:
          scrolled ? "py-3" : "pt-[45px] pb-0"
          */
          "pt-[45px] pb-0"
        )}
      >
        {/* relative so the absolutely-centred pill uses this as its reference */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative flex items-center justify-between">

          {/* ── LOGO ─────────────────────────────────────────────
              Both logos are stacked in the same fixed-height container.
              We cross-fade with opacity — NOT hidden/block — so the
              container size never changes and there's no layout shift.
          ─────────────────────────────────────────────────────── */}
          {/* Container: fixed h-10/h-11, width is driven by the natural logo ratio (~2.3:1).
              At h-10 (40px) → ~92px wide. Use w-[140px] lg:w-[160px] for safe containment. */}
          <Link href="/" className="group relative w-[190px] sm:w-[200px] lg:w-[186px] h-11 sm:h-[46px] lg:h-[52px] block flex-shrink-0">
            {/* Single image — CSS filter switches between colour and white */}
            <Image
              src="/logo-main.webp"
              alt="Shopa Marketing"
              fill
              className="object-contain object-left"
              style={{
                filter: isDark ? 'brightness(0) invert(1)' : 'none',
                transition: 'filter 0.3s ease',
              }}
              priority
            />
          </Link>

          {/* ── PILL CAPSULE ── */}
          <div
            className={clsx(
              "hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center rounded-[52px] bg-white transition-all duration-500",
              scrolled
                ? "shadow-[0_4px_24px_rgba(0,0,0,0.10)]"
                : "shadow-[0_8px_48px_rgba(0,0,0,0.14)]"
            )}
            /* Template spec: pl-60px pr-7px gap-90px (nav→CTA).
               At lg (1024px) we reduce to fit: pl-30px gap-40px.
               At xl (1280px) we step up: pl-45px gap-60px.
               At 2xl (1536px) full spec: pl-60px gap-90px. */
            style={{
              paddingLeft: "clamp(20px, 2.2vw, 48px)",
              paddingRight: "7px",
              gap: "clamp(16px, 2.4vw, 56px)",
            }}
          >
            {/* Nav links
                Template: 18px / weight-500 / #252A4E / 28px vertical padding / 50px gap
                Scaled with clamp for fluid responsiveness */}
            <nav className="flex items-center" style={{ gap: "clamp(14px, 1.6vw, 36px)" }}>
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative flex-shrink-0"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={clsx(
                        "flex items-center gap-1.5 capitalize font-[700] leading-none transition-colors duration-200 whitespace-nowrap",
                        "text-[#252A4E] hover:text-primary",
                        pathname.startsWith("/services") && "text-primary"
                      )}
                      style={{
                        fontSize: "clamp(14px, 1.1vw, 18px)",
                        padding: "clamp(18px, 1.8vw, 28px) 0",
                        paddingRight: "15px",
                      }}
                    >
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={clsx(
                          "flex-shrink-0 transition-transform duration-200",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>

                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={clsx(
                      "flex-shrink-0 capitalize font-[700] leading-none transition-colors duration-200 whitespace-nowrap",
                      "text-[#252A4E] hover:text-primary",
                      pathname === link.href && "text-primary"
                    )}
                    style={{
                      fontSize: "clamp(14px, 1.1vw, 18px)",
                      padding: "clamp(18px, 1.8vw, 28px) 0",
                    }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA button — gradient pill inside the white pill */}
            <Link
              href="/contact-us"
              className="group relative overflow-hidden flex-shrink-0 inline-flex items-center gap-2.5 text-white font-[700] uppercase tracking-wide leading-none rounded-[30px] whitespace-nowrap transition-colors duration-300"
              style={{
                fontSize: "clamp(13px, 1vw, 16px)",
                padding: "clamp(16px, 1.5vw, 23px) clamp(20px, 2.5vw, 40px)",
                background: "linear-gradient(90deg, #663dff -2.17%, #aa00ff 100%)",
              }}
            >
              {/* Ripple circle expands on hover */}
              <span
                className="absolute rounded-full bg-white/25 group-hover:scale-[18] transition-transform duration-[400ms] ease-in-out pointer-events-none"
                style={{
                  width: "24px", height: "24px",
                  right: "34px", top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 0,
                }}
              />
              <span className="relative z-10">Get a Quote</span>
              <span className="relative z-10 flex-shrink-0">
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>{/* end pill */}

          {/* ── RIGHT CLUSTER ────────────────────────
              Phone: visible only at xl+ (enough room)
              Hamburger: visible only below lg (mobile)
          ─────────────────────────────────────────── */}
          <div className="lg:w-[220px] flex items-center justify-end gap-4 flex-shrink-0">

            {/* Phone — hidden below 1400px to give the pill enough room */}
            <div className="hidden [@media(min-width:1400px)]:flex items-center gap-3 flex-shrink-0">
              <div className={clsx(
                "w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300",
                isDark ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
              )}>
                <Phone size={17} />
              </div>
              <div className="flex flex-col leading-none gap-1 min-w-max">
                <span
                  className={clsx("whitespace-nowrap transition-colors duration-300", isDark ? "text-white/80" : "text-[#252A4E]")}
                  style={{ fontSize: "15px", fontWeight: 500 }}
                >
                  Give us a call
                </span>
                <a
                  href="tel:+61390000000"
                  className={clsx("whitespace-nowrap transition-colors duration-300 hover:text-primary", isDark ? "text-white" : "text-[#141515]")}
                  style={{ fontSize: "18px", fontWeight: 800, lineHeight: 1 }}
                >
                  +61 3 9000 0000
                </a>
              </div>
            </div>

            {/* Hamburger — mobile/tablet only (below lg) */}
            <button
              onClick={() => setMobileOpen(true)}
              className={clsx(
                "lg:hidden w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200",
                scrolled ? "bg-gray-100 text-[#141515]" : "bg-white/15 text-white"
              )}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

          </div>
        </div>

        {/* ── MEGA MENU — lives at header level to escape pill transform ── */}
        <div
          className={clsx(
            "absolute left-0 right-0 bg-white z-40 transition-all duration-300",
            servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
          )}
          style={{ top: "100%", marginTop: "8px", borderTop: "3px solid #663dff", boxShadow: "0 24px 60px rgba(0,0,0,0.10)" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full grid" style={{ gridTemplateColumns: "280px 1fr 300px" }}>

            {/* Col 1 — Intro */}
            <div style={{ padding: "40px 32px 40px 40px", borderRight: "1px solid #f0f0f0" }}>
              <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "2px", color: "#663dff", textTransform: "uppercase", marginBottom: 16 }}>
                Our Services
              </p>
              <h3 style={{ fontSize: 26, fontWeight: 800, color: "#141515", lineHeight: 1.25, marginBottom: 12 }}>
                Everything you need to grow
              </h3>
              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, marginBottom: 24 }}>
                Shopa Marketing helps SMEs across AU, NZ, USA &amp; UAE grow through smart, results-driven marketing.
              </p>
              <Link href="/services"
                className="inline-flex items-center gap-2 font-[700] text-primary hover:gap-3 transition-all duration-200"
                style={{ fontSize: 13 }}>
                Explore all services <ArrowRight size={13} />
              </Link>
            </div>

            {/* Col 2 — Service links */}
            <div style={{ padding: "40px 40px" }}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-0">
                {services.map((s) => {
                  const isActive = pathname === s.href;
                  return (
                    <Link key={s.href} href={s.href}
                      className="group flex flex-col py-3 transition-all duration-200"
                      style={{ borderBottom: "1px solid #f5f5f5" }}
                    >
                      <span style={{ fontSize: 15, fontWeight: 700, color: isActive ? "#663dff" : "#141515", lineHeight: 1.3, transition: "color 0.2s" }}
                        className="group-hover:text-primary">
                        {s.label}
                      </span>
                      <span style={{ fontSize: 12, color: "#999", marginTop: 2 }}>{s.desc}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Col 3 — CTA */}
            <div style={{ background: "linear-gradient(160deg, #663dff 0%, #aa00ff 100%)", padding: "40px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <Calendar size={18} className="text-white" />
                </div>
                <p style={{ fontSize: 20, fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: 10 }}>
                  Free Strategy Session
                </p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.65, marginBottom: 20 }}>
                  Book a free 30-min consultation with our marketing experts. No obligation.
                </p>
                {[
                  "700+ SME clients worldwide",
                  "5,000+ campaigns delivered",
                  "Offices in AU, NZ, USA & UAE",
                ].map(t => (
                  <div key={t} className="flex items-center gap-2 mb-2">
                    <span style={{ width: 16, height: 16, borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#fff", fontWeight: 800, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{t}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact-us"
                className="mt-6 flex items-center justify-center gap-2 bg-white text-primary font-[700] rounded-[30px] py-3 hover:bg-white/90 transition-all duration-200"
                style={{ fontSize: 13 }}>
                Book Free Consultation <ArrowRight size={13} />
              </Link>
            </div>

          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════════
          FULL-PAGE MOBILE MENU (below lg)
      ════════════════════════════════════════════ */}
      <div className={clsx(
        "fixed inset-0 z-[60] lg:hidden transition-opacity duration-400",
        mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0c0c14]/97 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel slides down */}
        <div className={clsx(
          "relative z-10 h-full flex flex-col transition-transform duration-500",
          mobileOpen ? "translate-y-0" : "-translate-y-4"
        )}>

          {/* Top bar */}
          <div className="flex items-center justify-between px-5 sm:px-8 pt-8 pb-5">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src="/logo-white.webp"
                alt="Shopa Marketing"
                width={1200}
                height={518}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <div className="h-px bg-white/10 mx-5 sm:mx-8" />

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 space-y-0.5">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between py-4 text-[20px] sm:text-[24px] font-[800] text-white/85 hover:text-white transition-colors capitalize"
                  >
                    {link.label}
                    <ChevronDown size={20} className={clsx(
                      "text-white/40 transition-transform duration-300 flex-shrink-0",
                      mobileServicesOpen && "rotate-180 text-primary"
                    )} />
                  </button>
                  <div className={clsx(
                    "overflow-hidden transition-all duration-300",
                    mobileServicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="pl-5 border-l-2 border-primary/30 pb-4 space-y-0.5">
                      <Link
                        href="/services"
                        className="block py-2 text-[12px] font-[800] text-primary uppercase tracking-widest hover:translate-x-1 transition-transform"
                        onClick={() => setMobileOpen(false)}
                      >
                        View All Services →
                      </Link>
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block py-2.5 text-[16px] font-[500] text-white/55 hover:text-white hover:translate-x-1 transition-all capitalize"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={clsx(
                    "block py-4 text-[20px] sm:text-[24px] font-[800] capitalize transition-colors",
                    pathname === link.href ? "text-primary" : "text-white/85 hover:text-white"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Bottom CTA */}
          <div className="px-5 sm:px-8 pb-10 pt-4 border-t border-white/10">
            <Link
              href="/contact-us"
              className="flex items-center justify-center gap-2 w-full text-white font-[700] uppercase tracking-wide gradient-bg shadow-xl shadow-primary/30 active:scale-[0.98] transition-transform rounded-[30px]"
              style={{ fontSize: "15px", padding: "18px 32px" }}
              onClick={() => setMobileOpen(false)}
            >
              Book a Free Consultation
              <ArrowRight size={14} />
            </Link>
            <div className="flex items-center justify-center gap-2 mt-5">
              <Phone size={13} className="text-white/30" />
              <a
                href="tel:+61390000000"
                className="text-[14px] font-[500] text-white/40 hover:text-white/70 transition-colors"
              >
                +61 3 9000 0000
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
