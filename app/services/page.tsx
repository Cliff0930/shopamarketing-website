import TemplateScripts from "@/components/TemplateScripts";
import ServiceHero from "@/components/ServiceHero";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import ServicesDeck from "@/components/ServicesDeck";

export default function ServicesPage() {
  const services = [
    { title: 'Done For You', desc: 'Senior marketing leadership. Fractional cost. A dedicated CMO embedded in your business, backed by a full execution team, without the full-time salary.', items: ['Marketing Strategy & Roadmap', 'Brand Positioning', 'Team Leadership'], link: '/services/done-for-you', image: '/assets/img/services/DONWFORYOU.webp', video: '/assets/img/services/done-for-you.mp4' },
    { title: 'OOH Advertising', desc: 'Put your brand where your customers actually live. Grocery stores, medical centres, digital billboards and transit networks across Australia and New Zealand.', items: ['Grocery Store TV Screens', 'Digital Billboards', 'Transit & Outdoor Media'], link: '/services/ooh-advertising', image: '/assets/img/services/ooh.webp', video: '/assets/img/services/ooh.mp4' },
    { title: 'AI SEO Services', desc: "If you're not on page one, you're invisible. We get your business ranking for the keywords your customers are actively searching — driving leads without ongoing ad spend.", items: ['Keyword Research', 'On-Page Optimisation', 'Search Rankings Boost'], link: '/services/seo-services', image: '/assets/img/services/seoAI.webp', video: '/assets/img/services/ai-seo.mp4' },
    { title: 'Social Media Ads', desc: "Your customers are scrolling right now. We run targeted Facebook, Instagram and TikTok campaigns that put your business in front of the right people at the right moment.", items: ['Facebook & Instagram Ads', 'TikTok Campaigns', 'Audience Targeting'], link: '/services/social-media', image: '/assets/img/services/SocialMedia.webp', video: '/assets/img/services/social-media.mp4' },
    { title: 'Website Design', desc: "Your website should be converting visitors into customers around the clock. We build fast, mobile-first custom websites — with 12 months' maintenance and a lifetime technical guarantee included.", items: ['Custom Web Design', 'Mobile Responsive', 'Conversion Optimised'], link: '/services/website', image: '/assets/img/services/webdesign.webp', video: '/assets/img/services/website.mp4' },
    { title: 'Google Ads', desc: 'Get in front of high-intent buyers the moment they search. Search, Display, Shopping and YouTube campaigns built around your revenue goals. Every dollar tracked.', items: ['Google Search Ads', 'Display & YouTube Ads', 'Real ROI Tracking'], link: '/services/google-ads', image: '/assets/img/services/GAds.webp', video: '/assets/img/services/google-ads.mp4' },
    { title: 'Graphic Design', desc: 'First impressions are everything. We produce logos, ad creatives, social assets and brand identity systems that make your business look as good as it performs.', items: ['Logo & Brand Identity', 'Marketing Collateral', 'Social Media Assets'], link: '/services/graphic-design', image: '/assets/img/services/GraphicDes.webp', video: '/assets/img/services/graphic.mp4' },
  ];

  const channels = [
    { label: 'SEO', top: '14%', left: '28%' },
    { label: 'Google Ads', top: '8%', left: '62%' },
    { label: 'Social Media', top: '34%', left: '86%' },
    { label: 'Website', top: '72%', left: '82%' },
    { label: 'OOH', top: '90%', left: '55%' },
    { label: 'Design', top: '80%', left: '20%' },
    { label: 'Content', top: '40%', left: '8%' },
  ];

  const ctaPoints = [
    'Easy, stress-free marketing options for SMEs',
    'All-inclusive rates to avoid any nasty surprises',
    'Dedicated account manager',
  ];

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

  return (
    <>
      <TemplateScripts />

      {/* preloader */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>

      <ServiceHero
        headline="Every Service You Need To Grow, In One Team."
        subtext="From SEO to paid ads, web design to outdoor advertising — Shopa Marketing delivers full-funnel marketing built specifically for Australian and New Zealand SMEs."
      />

      {/* ── SERVICES DIRECTORY — expanding deck ── */}
      <div className="pt-110 pb-110 bg-default">
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h5 className="chy-subtitle-1 wow fadeInDown">our services</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Seven Ways We Grow Your Business</h2>
            <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '660px', margin: '10px auto 0' }}>
              Pick one, mix a few, or hand us the lot. Every service below is run by senior specialists and built to work harder when combined.
            </p>
          </div>

          <div className="wow fadeInUp">
            <ServicesDeck services={services} />
          </div>
        </div>
      </div>

      {/* ── ONE STRATEGY — gradient band with channel hub ── */}
      <div className="wds-ledger-area pt-110 pb-110" data-navbar-dark="true">
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-6 col-lg-6">
              <div className="mb-30">
                <h2 className="chy-title-1" style={{ color: '#fff' }}>
                  One Strategy Across Every Channel.
                </h2>
                <p className="chy-section-para-1 wow fadeInUp" style={{ color: 'rgba(255,255,255,0.95)', marginTop: '18px' }}>
                  Digital and physical. Online and offline. The best results never come from a single channel — they come from channels working together, keeping your brand visible, trusted and top of mind wherever your customers look.
                </p>
                <p className="chy-section-para-1 wow fadeInUp" style={{ color: 'rgba(255,255,255,0.95)', marginTop: '16px' }}>
                  That&apos;s why every Shopa service is built to combine: one coordinated strategy, one team, and one report that actually makes sense. Disconnected marketing produces disconnected results — so we never sell you pieces without the plan.
                </p>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="wds-hub wow fadeInRight" data-wow-duration="1.2s">
                <span className="wds-hub__core">One Strategy</span>
                {channels.map((c) => (
                  <span key={c.label} className="wds-hub__chip" style={{ top: c.top, left: c.left }}>{c.label}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS — masonry review wall ── */}
      <ServiceTestimonials />

      {/* ── CLIENTS TICKER ── */}
      <div className="pt-90 pb-90 bg-default fix">
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h5 className="chy-subtitle-1 wow fadeInDown">our clients</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Trusted By Australia&apos;s Best Brands</h2>
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

      {/* ── CTA — dark gradient closer ── */}
      <div className="pt-100 pb-100" data-navbar-dark="true" style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d1060 50%, #663dff 100%)' }}>
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-6 col-lg-6">
              <div className="mb-30">
                <div className="wds-stat__accent"></div>
                <h2 className="chy-title-1" style={{ color: '#fff' }}>Not Sure Where to Start? That&apos;s Our Job.</h2>
                <p className="chy-section-para-1 wow fadeInUp" style={{ marginTop: '18px', color: 'rgba(255,255,255,0.85)' }}>
                  Tell us what you&apos;re trying to achieve and we&apos;ll recommend the mix of services that gets you there — no jargon, no pressure, and no paying for channels you don&apos;t need.
                </p>
                <div style={{ marginTop: '28px' }}>
                  <a href="/contact-us" className="chy-pr-btn-1 wow fadeInLeft">
                    <span className="text">Get A Quote</span>
                    <span className="icon"><i className="fa-solid fa-right-long"></i></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="wds-glass-list">
                {ctaPoints.map((point, i) => (
                  <div key={point} className="wds-glass-row wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
                    <i className="flaticon-check"></i>
                    <span>{point}</span>
                  </div>
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
