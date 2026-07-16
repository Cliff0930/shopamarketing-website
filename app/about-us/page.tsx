import TemplateScripts from "@/components/TemplateScripts";
import HeroCounters from "@/components/HeroCounters";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import ScrollScrubVideo from "@/components/ScrollScrubVideo";
import HoverRevealVideo from "@/components/HoverRevealVideo";

export default function AboutUsPage() {
  const clientLogos = [
    { src: '/assets/img/client/mcdonalds.webp',   alt: "McDonald's" },
    { src: '/assets/img/client/nike.webp',         alt: 'Nike' },
    { src: '/assets/img/client/kfc.webp',          alt: 'KFC' },
    { src: '/assets/img/client/bookingcom.webp',   alt: 'Booking.com' },
    { src: '/assets/img/client/raywhite.webp',     alt: 'Ray White' },
    { src: '/assets/img/client/pizzahut.webp',     alt: 'Pizza Hut' },
    { src: '/assets/img/client/redrooster.webp',   alt: 'Red Rooster' },
    { src: '/assets/img/client/adairs.webp',       alt: 'Adairs' },
    { src: '/assets/img/client/bridgestone.webp',  alt: 'Bridgestone' },
    { src: '/assets/img/client/oroton.webp',       alt: 'Oroton' },
    { src: '/assets/img/client/jbl.webp',          alt: 'JBL' },
    { src: '/assets/img/client/ops.webp',          alt: 'OPS' },
  ];

  const unleashPoints = [
    'Easy, stress-free marketing options for SMEs',
    'All inclusive rates to avoid any nasty surprises',
    'Dedicated account manager',
  ];

  return (
    <>
      <TemplateScripts />
      <HeroCounters />

      {/* preloader */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>

      {/* ── ABOUT HERO — finalised, unchanged ── */}
      <section className="about-hero">
        <div className="container chy-container-1">
          <div className="about-hero__inner">

            <h1 className="chy-title-1 about-hero__headline wow fadeInLeft" data-wow-duration="1.2s">
              The People Behind <br />Your Growth.
            </h1>

            <p className="about-hero__sub wow fadeInUp" data-wow-duration="2s">
              Shopa Marketing is a team of senior specialists — not a revolving door of juniors. For over a decade we&apos;ve helped SMEs grow with honest strategy and real results.
            </p>

            {/* Stats strip */}
            <div className="about-hero__stats about-hero__stats--animate">
              <div className="about-hero__stat">
                <span className="about-hero__stat-num"><span id="hero-counter-1">0</span>+</span>
                <span className="about-hero__stat-label">Years Combined Experience</span>
              </div>
              <div className="about-hero__stat-divider" />
              <div className="about-hero__stat">
                <span className="about-hero__stat-num"><span id="hero-counter-2">0</span>+</span>
                <span className="about-hero__stat-label">Campaigns Delivered</span>
              </div>
              <div className="about-hero__stat-divider" />
              <div className="about-hero__stat">
                <span className="about-hero__stat-num"><span id="hero-counter-3">0</span>+</span>
                <span className="about-hero__stat-label">Businesses Served</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHO WE ARE — editorial split, pinned while the video scrubs ── */}
      <div id="about-intro-pin" className="wds-pin-wrap">
      <div className="wds-intro-area pt-120 pb-110 bg-default fix wds-pin-panel">
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-6 col-lg-6">
              <div className="wds-intro-content">
                <div className="section-title-wrap mb-35">
                  <h5 className="chy-subtitle-1 wow fadeInDown">who we are</h5>
                  <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">Who We Are</h2>
                  <p className="chy-section-para-1 wow fadeInUp">
                    We&apos;re not your typical marketing agency; we&apos;re a group of marketing experts with a whopping 45 years of combined experience. Yes, you heard that right. We&apos;ve been around the marketing block more times than we can throw a boomerang.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    With a history of handling over 5000 campaigns for more than 700 clients each year, we&apos;ve learned a thing or two about what works in the marketing world.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    At Shopa Marketing, we&apos;ve built an amazing culture. Our team isn&apos;t just a group of employees; they&apos;re marketing enthusiasts who live and breathe all things marketing. In a world where changing jobs is as common as grabbing a sausage at a BBQ, we&apos;re proudly different. Over 90% of our top-notch team have been with us for over a decade. Yes, you heard it right—no revolving door of account managers here.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp" style={{ fontWeight: 700 }}>
                    With us, you get stability, expertise, and a team that&apos;s as committed to your success as they are to their morning cup of coffee. Welcome to a marketing agency where relationships aren&apos;t just a short-term thing; they&apos;re built to last.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="wds-intro-media wow fadeInRight" data-wow-duration="1.2s">
                <ScrollScrubVideo
                  src="/assets/img/services/about-scrub.mp4"
                  className="wds-intro-video wds-intro-video--full"
                  ariaLabel="The Shopa Marketing team of senior specialists working together for small businesses"
                  pinContainerId="about-intro-pin"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>{/* /wds-pin-wrap */}

      {/* ── VISION & MISSION — split manifesto panels ── */}
      <div className="pt-100 pb-100" style={{ backgroundColor: '#f8f8fb' }}>
        <div className="container chy-container-1">
          <div className="wds-vm-grid">

            <div className="wds-vm-panel wds-vm-panel--vision wow fadeInUp">
              <span className="wds-vm-panel__ghost" aria-hidden="true">Vision</span>
              <div className="wds-vm-panel__inner">
                <div className="wds-vm-panel__accent"></div>
                <span className="wds-vm-panel__num">01 — Where we&apos;re headed</span>
                <h3 className="wds-vm-panel__title">Our Vision</h3>
                <p className="wds-vm-panel__body">
                  To be the leading one-stop marketing agency for SMEs, revolutionizing their growth by providing innovative, comprehensive, and tailored marketing solutions that drive measurable success and lasting impact.
                </p>
              </div>
            </div>

            <div className="wds-vm-panel wds-vm-panel--mission wow fadeInUp" data-wow-delay=".15s">
              <span className="wds-vm-panel__ghost" aria-hidden="true">Mission</span>
              <div className="wds-vm-panel__inner">
                <div className="wds-vm-panel__accent"></div>
                <span className="wds-vm-panel__num">02 — How we get there</span>
                <h3 className="wds-vm-panel__title">Our Mission</h3>
                <p className="wds-vm-panel__body">
                  At Shopa Marketing, our mission is to empower small and medium-sized enterprises by delivering top-notch, data-driven marketing services across all channels. We strive to simplify the marketing process for our clients, offering everything from community board ads to advanced SEO, social media, and digital advertising, ensuring their goals are met with efficiency, creativity, and unparalleled expertise.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── MEET THE KENNEDY DUO ── */}
      <div className="pt-110 pb-110 bg-default" style={{ backgroundImage: "url('/assets/img/bg/body-bg-3.png')" }}>
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h5 className="chy-subtitle-1 wow fadeInDown">meet the kennedy duo</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">The Captains of Our Digital Ship</h2>
            <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '760px', margin: '16px auto 0' }}>
              Check out the awesome twosome steering the ship at Shopa Marketing! First up is Preeti Kennedy, our tech whiz with not one, not two, but a whopping four degrees – she is a digital genius. And then we&apos;ve got Ben Kennedy, a seasoned pro with decades of ad campaign know-how, redefining success left, right, and center.
            </p>
            <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '760px', margin: '12px auto 0' }}>
              Why do they do it? Simple – your success. They&apos;re the captains of our top-notch team, combining their skills to whip up marketing success that&apos;s not just about us patting ourselves on the back but, more importantly, about celebrating your wins.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-6 wow fadeInUp">
              <div className="wds-founder-card">
                <HoverRevealVideo
                  src="/assets/img/team/preeti-hover.mp4"
                  className="wds-founder-video"
                  ariaLabel="Preeti Kennedy, founder of Shopa Marketing"
                />
                <h4 className="chy-heading-1 wds-founder-card__name">Preeti Kennedy</h4>
                <span className="wds-founder-card__role">Founder</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 wow fadeInUp" data-wow-delay=".15s">
              <div className="wds-founder-card wds-founder-card--offset">
                <HoverRevealVideo
                  src="/assets/img/team/ben-hover.mp4"
                  className="wds-founder-video"
                  ariaLabel="Benjamin Kennedy, co-founder of Shopa Marketing"
                />
                <h4 className="chy-heading-1 wds-founder-card__name">Benjamin Kennedy</h4>
                <span className="wds-founder-card__role">Co-Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <ServiceTestimonials />

      {/* ── CLIENTS TICKER ── */}
      <div className="pt-90 pb-90 bg-default fix">
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Join the growing list of our satisfied customers</h2>
          </div>
        </div>
        <div className="clients-ticker-wrap">
          <div className="clients-ticker-track">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={i} className="clients-logo-card">
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── UNLEASH YOUR POTENTIAL — dark gradient CTA band ── */}
      <div className="pt-100 pb-100" data-navbar-dark="true" style={{ background: 'var(--chy-gd-1)' }}>
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-6 col-lg-6">
              <div className="mb-30">
                <div className="wds-stat__accent"></div>
                <h2 className="chy-title-1" style={{ color: '#fff' }}>Unleash Your Potential with Shopa Marketing</h2>
                <p className="chy-section-para-1 wow fadeInUp" style={{ marginTop: '18px', color: 'rgba(255,255,255,0.85)' }}>
                  If you&apos;re keen to break free from the norm and dive into a realm where creativity has no limits, you&apos;ve stumbled upon your ultimate marketing crew. Welcome to a spot where thinking &quot;outside the box&quot; is just a regular thing.
                </p>
                <div style={{ marginTop: '28px' }}>
                  <a href="/contact-us" className="chy-pr-btn-1 chy-pr-btn-1--white wow fadeInLeft">
                    <span className="text">Get A Quote</span>
                    <span className="icon"><i className="fa-solid fa-right-long"></i></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="wds-escape wow fadeInRight" data-wow-duration="1.2s">
                <div className="wds-escape__box"><span>The Norm</span></div>
                {unleashPoints.map((point, i) => (
                  <span key={point} className={`wds-escape__chip wds-escape__chip--${i + 1}`}>
                    <i className="flaticon-check"></i>
                    {point}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

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
