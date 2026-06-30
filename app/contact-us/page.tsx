import TemplateScripts from "@/components/TemplateScripts";
import ContactForm from "@/components/contact/ContactForm";
import StarAnimationTrigger from "@/components/StarAnimationTrigger";

export const metadata = {
  title: "Contact Us — Shopa Marketing",
  description: "Book a free strategy session with Shopa Marketing. Speak directly with a senior marketing specialist — no junior accounts, no sales pitch.",
};

export default function ContactUsPage() {
  return (
    <>
      <TemplateScripts />
      <StarAnimationTrigger />

      {/* preloader */}
      <div id="preloader"><div className="loader_line"></div></div>

      {/* ── CONTACT HERO ── */}
      <section className="contact-hero">

        {/* Scrolling bg text */}
        <div className="contact-hero__scrolltext" aria-hidden="true">
          <div className="contact-hero__scrolltext-track">
            <span>Let&apos;s Talk &nbsp;·&nbsp; Let&apos;s Talk &nbsp;·&nbsp; Let&apos;s Talk &nbsp;·&nbsp; Let&apos;s Talk &nbsp;·&nbsp; Let&apos;s Talk &nbsp;·&nbsp; </span>
            <span aria-hidden="true">Let&apos;s Talk &nbsp;·&nbsp; Let&apos;s Talk &nbsp;·&nbsp; Let&apos;s Talk &nbsp;·&nbsp; Let&apos;s Talk &nbsp;·&nbsp; Let&apos;s Talk &nbsp;·&nbsp; </span>
          </div>
        </div>

        {/* Decorative glow */}
        <div className="contact-hero__glow" aria-hidden="true" />

        <div className="container chy-container-1">
          <div className="contact-hero__inner">

            <h5 className="chy-subtitle-1 wow fadeInDown">get in touch</h5>

            <h1 className="chy-title-1 chy-split-in-right chy-split-text contact-hero__headline">
              Let&apos;s Build Something <br />That Actually Works.
            </h1>

            <p className="contact-hero__sub wow fadeInUp" data-wow-duration="2s">
              Book a free strategy session and speak directly with a senior marketing specialist — no junior account managers, no generic sales pitch. Just an honest conversation about your business.
            </p>

            {/* Google rating */}
            <div className="contact-hero__badge wow fadeInUp" data-wow-delay=".2s">
              <div className="google-review-brand">
                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="google-review-label contact-hero__google-label">Google Reviews</span>
              </div>
              <div id="animated-stars" className="icon animated-stars">
                <i className="fa-solid fa-star star-1"></i>
                <i className="fa-solid fa-star star-2"></i>
                <i className="fa-solid fa-star star-3"></i>
                <i className="fa-solid fa-star star-4"></i>
                <i className="fa-solid fa-star star-5"></i>
              </div>
              <span className="contact-hero__rating">4.7 · 319 Verified Reviews</span>
            </div>

            {/* Stats strip */}
            <div className="contact-hero__stats wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-hero__stat">
                <span className="contact-hero__stat-num">45+</span>
                <span className="contact-hero__stat-label">Years Experience</span>
              </div>
              <div className="contact-hero__stat-divider" />
              <div className="contact-hero__stat">
                <span className="contact-hero__stat-num">5,000+</span>
                <span className="contact-hero__stat-label">Campaigns Delivered</span>
              </div>
              <div className="contact-hero__stat-divider" />
              <div className="contact-hero__stat">
                <span className="contact-hero__stat-num">1,000+</span>
                <span className="contact-hero__stat-label">Businesses Served</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CONTACT CONTENT ── */}
      <section className="contact-panel-section bg-default">
        <div className="container chy-container-1">
          <div className="contact-panel-grid">

            {/* LEFT — Info card */}
            <div className="contact-info-card wow fadeInLeft" data-wow-duration="1.2s">

              <div className="contact-info-card__top">
                <h5 className="chy-subtitle-1" style={{ marginBottom: '14px' }}>why reach out</h5>
                <h3 className="contact-info-card__heading">
                  Real Specialists. Real Strategy. Zero Runaround.
                </h3>
                <p className="contact-info-card__body">
                  When you contact Shopa you speak with a senior marketing specialist — not a junior account manager. We&apos;ll give you honest feedback on what you need, not what&apos;s most expensive.
                </p>
              </div>

              <div className="contact-info-card__divider" />

              {/* Locations + contact */}
              <div className="contact-info-card__offices">
                <div className="contact-info-card__office">
                  <div className="contact-info-card__icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div>
                    <h6>Australia</h6>
                    <p>3 Albert Coates Lane, Melbourne 3000</p>
                  </div>
                </div>
                <div className="contact-info-card__office">
                  <div className="contact-info-card__icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div>
                    <h6>New Zealand</h6>
                    <p>Level 4, 110 Carlton Gore, Auckland 1023</p>
                  </div>
                </div>
                <div className="contact-info-card__office">
                  <div className="contact-info-card__icon"><i className="fas fa-phone"></i></div>
                  <div>
                    <h6>Call AU</h6>
                    <a href="tel:1800247034">1800 247 034</a>
                  </div>
                </div>
                <div className="contact-info-card__office">
                  <div className="contact-info-card__icon"><i className="fas fa-phone"></i></div>
                  <div>
                    <h6>Call NZ</h6>
                    <a href="tel:0800200076">0800 200 076</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-card__divider" />

              {/* 24hr promise */}
              <div className="contact-info-card__promise">
                <i className="fa-solid fa-bolt"></i>
                <span>We respond to all enquiries within <strong>24 hours</strong></span>
              </div>

              {/* Social */}
              <div className="contact-info-card__social">
                <a href="https://www.linkedin.com/company/shopa-marketing/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100083445816079" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/shopa.marketing/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>

            </div>

            {/* RIGHT — Form card */}
            <div className="contact-form-card wow fadeInRight" data-wow-duration="1.2s">
              <div className="contact-form-card__header">
                <h5 className="chy-subtitle-1" style={{ marginBottom: '10px' }}>free strategy session</h5>
                <h3 className="contact-form-card__heading">Tell Us About Your Business</h3>
                <p className="contact-form-card__sub">
                  We&apos;ll come back to you within 24 hours with a tailored strategy — no lock-in, no commitment required.
                </p>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* back to top */}
      <div className="scroll-top has-home-1">
        <div className="scroll-top-wrap">
          <i className="icon-1 fal fa-long-arrow-up"></i>
        </div>
      </div>

      {/* overlay */}
      <div className="offcanvas-overlay"></div>
    </>
  );
}
