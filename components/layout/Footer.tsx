import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}


const services = [
  { label: "Done For You", href: "/services/done-for-you" },
  { label: "OOH Advertising", href: "/services/ooh-advertising" },
  { label: "SEO Services", href: "/services/seo-services" },
  { label: "Social Media Ads", href: "/services/social-media" },
  { label: "Website Design", href: "/services/website" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Graphic Design", href: "/services/graphic-design" },
];

const company = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

const locations = [
  { name: "Australia", address: "3 Albert Coates Lane,\nMelbourne 3000" },
  { name: "New Zealand", address: "Level 4, 110 Carlton Gore,\nAuckland 1023" },
  { name: "USA", address: "28 Church Street, Ste 14 #4698\nWinchester, Massachusetts 01890" },
  { name: "UAE", address: "Shams Business Center, Sharjah\nMedia City Free Zone, Al Messaned" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/shopa-marketing/", icon: LinkedInIcon },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100083445816079", icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/shopa.marketing/", icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111118" }} data-navbar-dark="true">

      {/* ── TOP: Logo + Heading + CTA ── */}
      <div className="container-custom py-10 border-b-2 border-[#2a2a2a]">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">

          <Link href="/" className="flex-shrink-0">
            <Image src="/logo-main.webp" alt="Shopa Marketing" width={2560} height={1055}
              className="h-16 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)' }} />
          </Link>

          <h3 className="text-white lg:ml-auto"
            style={{ fontSize: "clamp(20px, 2.5vw, 27px)", fontWeight: 800, lineHeight: 1.5 }}>
            Let&apos;s build something great together.
          </h3>

          <Link href="/contact-us"
            className="footer-cta-btn flex-shrink-0 inline-flex items-center gap-3 text-white font-bold uppercase tracking-wide rounded-[30px] transition-all duration-300"
            style={{ fontSize: "14px", padding: "16px 28px", background: "linear-gradient(90deg, #663dff -2.17%, #aa00ff 100%)" }}>
            <span>Book Free Consultation</span>
            <ArrowRight size={14} />
          </Link>

        </div>
      </div>

      {/* ── MIDDLE: columns ── */}
      <div className="container-custom py-12 lg:py-16">
        <div className="footer-main-grid">

          {/* Services */}
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "22px", fontWeight: 800 }}>Services</h4>
            <ul className="footer-services-list">
              {services.map((s) => (
                <li key={s.href} style={{ marginBottom: '10px', breakInside: 'avoid' }}>
                  <Link href={s.href}
                    className="relative inline-block text-white capitalize transition-colors duration-300 hover:text-primary
                      after:absolute after:bottom-[-3px] after:left-auto after:right-0 after:h-px after:w-0
                      after:bg-gradient-to-r after:from-primary after:to-secondary after:opacity-80
                      after:transition-all after:duration-[400ms]
                      hover:after:w-full hover:after:left-0 hover:after:right-auto"
                    style={{ fontSize: "17px", fontWeight: 400 }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "22px", fontWeight: 800 }}>Company</h4>
            <ul className="space-y-[10px]">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href}
                    className="relative inline-block text-white capitalize transition-colors duration-300 hover:text-primary
                      after:absolute after:bottom-[-3px] after:left-auto after:right-0 after:h-px after:w-0
                      after:bg-gradient-to-r after:from-primary after:to-secondary after:opacity-80
                      after:transition-all after:duration-[400ms]
                      hover:after:w-full hover:after:left-0 hover:after:right-auto"
                    style={{ fontSize: "17px", fontWeight: 400 }}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "22px", fontWeight: 800 }}>Navigation</h4>
            <ul className="space-y-[10px]">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="relative inline-block text-white capitalize transition-colors duration-300 hover:text-primary
                      after:absolute after:bottom-[-3px] after:left-auto after:right-0 after:h-px after:w-0
                      after:bg-gradient-to-r after:from-primary after:to-secondary after:opacity-80
                      after:transition-all after:duration-[400ms]
                      hover:after:w-full hover:after:left-0 hover:after:right-auto"
                    style={{ fontSize: "17px", fontWeight: 400 }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: "22px", fontWeight: 800 }}>Locations</h4>
            <ul className="footer-locations-grid">
              {locations.map((loc) => (
                <li key={loc.name}>
                  <span className="text-white block" style={{ fontSize: '17px', fontWeight: 700, marginBottom: '2px' }}>
                    {loc.name}
                  </span>
                  <span className="text-white block" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                    {loc.address.split('\n').map((line, i) => (
                      <span key={i}>{line}{i === 0 && <br />}</span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── BOTTOM: Social + Copyright ── */}
      <div className="container-custom py-6 border-t-2 border-[#2a2a2a]">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">

          <ul className="flex items-center gap-[2px]">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-[42px] h-[42px] bg-white text-[#111118] flex items-center justify-center rounded-[5px] transition-all duration-300 hover:text-primary">
                  <Icon />
                </a>
              </li>
            ))}
          </ul>

          <p className="text-white" style={{ fontSize: "16px", fontWeight: 400 }}>
            &copy; {new Date().getFullYear()} Shopa Marketing{" "}
            <span style={{ color: "#aa00ff" }}>| all rights reserved</span>
          </p>

        </div>
      </div>

    </footer>
  );
}
