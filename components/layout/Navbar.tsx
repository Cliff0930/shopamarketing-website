"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, ArrowRight, Phone, X, Menu, Megaphone, MapPin, Search, Share2, Globe, Target, Palette, Calendar } from "lucide-react";
import { clsx } from "clsx";

const services = [
  {
    label: "Done For You",
    href: "/services/done-for-you",
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  // Contact, Blog, About Us, and all Services pages have a light hero — use same dark-logo/dark-text as home
  const isLightBg = isHome || pathname === '/contact-us' || pathname === '/blog' || pathname === '/about-us' || pathname.startsWith('/services');
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Use html element (not body) — body overflow:hidden breaks position:fixed on iOS Safari
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
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
          "absolute top-0 left-0 right-0 z-50 bg-transparent transition-all duration-500",
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
                filter: isLightBg ? 'none' : 'brightness(0) invert(1)',
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
              className="group relative overflow-hidden flex-shrink-0 inline-flex items-center gap-2.5 text-white font-[700] uppercase tracking-wide leading-none rounded-[30px] whitespace-nowrap transition-colors duration-300 nav-cta-btn"
              style={{
                fontSize: "clamp(13px, 1vw, 16px)",
                padding: "clamp(16px, 1.5vw, 23px) clamp(20px, 2.5vw, 40px)",
                background: "linear-gradient(90deg, #663dff -2.17%, #aa00ff 100%)",
              }}
            >
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
                "w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0",
                isLightBg ? "bg-primary/10 text-primary" : "bg-white/20 text-white"
              )}>
                <Phone size={17} />
              </div>
              <div className="flex flex-col leading-none gap-1 min-w-max">
                <span
                  className={clsx("whitespace-nowrap", isLightBg ? "text-[#252A4E]" : "text-white/80")}
                  style={{ fontSize: "15px", fontWeight: 500 }}
                >
                  Give us a call
                </span>
                <a
                  href="tel:+611800247034"
                  className={clsx("whitespace-nowrap hover:text-primary", isLightBg ? "text-[#141515]" : "text-white")}
                  style={{ fontSize: "18px", fontWeight: 800, lineHeight: 1 }}
                >
                  1800 247 034
                </a>
              </div>
            </div>

            {/* Hamburger — mobile/tablet only (below lg) */}
            <button
              onClick={() => setMobileOpen(true)}
              className={clsx(
                "lg:hidden w-11 h-11 rounded-xl flex items-center justify-center text-white",
                !isLightBg && "bg-white/20"
              )}
              style={isLightBg ? { background: 'var(--chy-gd-1)' } : undefined}
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
        {/* Backdrop — brand gradient atmosphere */}
        <div className="absolute inset-0 mm-bg" onClick={() => setMobileOpen(false)} />
        <span className="mm-ghost" aria-hidden="true">Menu</span>

        {/* Panel */}
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
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:rotate-90 transition-all duration-300"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <div className="h-px bg-white/10 mx-5 sm:mx-8" />

          {/* Nav links — staggered cascade on open */}
          <nav className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 space-y-0.5">
            {navLinks.map((link, i) => (
              <div
                key={link.label}
                className={clsx(
                  "transition-all duration-500 ease-out",
                  mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: mobileOpen ? `${140 + i * 70}ms` : "0ms" }}
              >
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="mm-link-row w-full flex items-center gap-4 py-4 text-[22px] sm:text-[26px] font-[800] text-white/90 hover:text-white transition-colors capitalize"
                    >
                      <span className="mm-num">{`0${i + 1}`}</span>
                      {link.label}
                      <ChevronDown size={20} className={clsx(
                        "ml-auto text-white/40 transition-transform duration-300 flex-shrink-0",
                        mobileServicesOpen && "rotate-180 text-primary"
                      )} />
                    </button>
                    <div className={clsx(
                      "overflow-hidden transition-all duration-300",
                      mobileServicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <div className="ml-[30px] pl-5 border-l-2 border-white/20 pb-4 space-y-0.5">
                        <Link
                          href="/services"
                          className="block py-2 text-[12px] font-[800] text-[#a78bfa] uppercase tracking-widest hover:translate-x-1 transition-transform"
                          onClick={() => setMobileOpen(false)}
                        >
                          View All Services →
                        </Link>
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block py-2.5 text-[16px] font-[500] text-white/60 hover:text-white hover:translate-x-1 transition-all capitalize"
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
                    href={link.href}
                    className={clsx(
                      "mm-link-row flex items-center gap-4 py-4 text-[22px] sm:text-[26px] font-[800] capitalize transition-colors",
                      pathname === link.href ? "text-[#a78bfa]" : "text-white/90 hover:text-white"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="mm-num">{`0${i + 1}`}</span>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom zone — CTA lands last in the cascade */}
          <div
            className={clsx(
              "px-5 sm:px-8 pb-10 pt-5 border-t border-white/10 transition-all duration-500 ease-out",
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: mobileOpen ? `${140 + navLinks.length * 70 + 60}ms` : "0ms" }}
          >
            <Link
              href="/contact-us"
              className="flex items-center justify-center gap-2 w-full bg-white text-[#663dff] font-[800] uppercase tracking-widest shadow-xl shadow-black/30 active:scale-[0.98] transition-transform rounded-[30px] whitespace-nowrap"
              style={{ fontSize: "13px", padding: "16px 24px" }}
              onClick={() => setMobileOpen(false)}
            >
              Book a Free Consultation
              <ArrowRight size={14} className="flex-shrink-0" />
            </Link>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-white/70 flex-shrink-0" />
                <a
                  href="tel:+611800247034"
                  className="text-[15px] font-[600] text-white/80 hover:text-white transition-colors"
                >
                  1800 247 034
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/company/shopa-marketing/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100083445816079" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="https://www.instagram.com/shopa.marketing/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
