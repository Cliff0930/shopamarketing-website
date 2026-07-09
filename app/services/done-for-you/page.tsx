import TemplateScripts from "@/components/TemplateScripts";
import PricingSection from "@/components/PricingSection";
import ServiceHero from "@/components/ServiceHero";
import ServiceTestimonials from "@/components/ServiceTestimonials";

export default function DoneForYouPage() {
  const focusItems = [
    'building the foundation',
    'gathering campaign data',
    'testing creatives and audiences',
    'optimizing performance',
    'improving conversion rates',
    'strengthening online visibility',
  ];

  const teamPoints = [
    'Easy stress free marketing options for SMEs',
    'All inclusive rates to avoid any nasty surprises',
    'Dedicated account manager',
  ];

  const serviceLinks = [
    { label: 'Done For You', href: '/services/done-for-you', active: true },
    { label: 'OOH Advertising', href: '/services/ooh-advertising' },
    { label: 'SEO Services', href: '/services/seo-services' },
    { label: 'Social Media Ads', href: '/services/social-media' },
    { label: 'Website Design', href: '/services/website' },
    { label: 'Google Ads', href: '/services/google-ads' },
    { label: 'Graphic Design', href: '/services/graphic-design' },
  ];

  return (
    <>
      <TemplateScripts />

      {/* preloader */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>

      <ServiceHero
        headline="Fractional Marketing Leadership For SMEs."
        subtext="A senior marketing team on demand — strategy, execution, and reporting handled end-to-end, without the cost of a full in-house department."
      />

      {/* ── INTRO — editorial split ── */}
      <div className="wds-intro-area pt-120 pb-110 bg-default fix">
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-6 col-lg-6">
              <div className="wds-intro-content">
                <div className="section-title-wrap mb-35">
                  <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">
                    Built for Businesses That Want Growth, Not More Marketing Tasks
                  </h2>
                  <p className="chy-section-para-1 wow fadeInUp">
                    Most marketing providers sell individual services. We take a different approach. Instead of asking whether you need SEO, social media, Google Ads, content, or design, we start with a more important question:
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp" style={{ fontWeight: 700 }}>
                    What are you trying to achieve? More enquiries? More customers? Stronger local visibility? Greater market share?
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    Our Done For You packages combine the channels that make the most sense for your business and manage them as one coordinated strategy.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    With over 5000 businesses supported across Australia and New Zealand, we&apos;ve seen firsthand that the best results rarely come from a single platform. They come from multiple channels working together to keep your brand visible, trusted, and top of mind.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp" style={{ fontWeight: 700 }}>
                    That&apos;s exactly what these packages are designed to do.
                  </p>
                </div>
                <a href="/contact-us" className="chy-pr-btn-1 wow fadeInLeft">
                  <span className="text">Get A Quote</span>
                  <span className="icon"><i className="fa-solid fa-right-long"></i></span>
                </a>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="wds-intro-media wow fadeInRight" data-wow-duration="1.2s">
                <div className="wds-ph wds-ph--intro">
                  <span>Image Placeholder — 760 × 640</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── PRICING — Simple, All-Inclusive Rates ── */}
      <PricingSection />

      {/* ── NO LOCK IN CONTRACTS — split with focus checklist ── */}
      <div className="wds-nolock-area pt-110 pb-110 bg-default fix">
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-6 col-lg-6">
              <div className="wds-nolock-content">
                <div className="section-title-wrap mb-35">
                  <h2 className="chy-title-1 chy-split-in-right chy-split-text">No Lock In Contracts</h2>
                  <p className="chy-section-para-1 wow fadeInUp">
                    We don&apos;t believe in locking businesses into lengthy contracts. Our clients stay with us because the strategy, execution and results make sense — not because they&apos;re tied into complicated agreements.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp" style={{ fontWeight: 700 }}>
                    That said, we also believe in being transparent from the beginning.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    Real marketing momentum takes time. Building brand awareness, collecting data, optimizing campaigns, improving SEO rankings and refining targeting strategies typically takes 3–4 months before businesses start seeing consistent traction and long-term performance improvements.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    While there are no long-term lock-in contracts, we recommend allowing enough time for the strategy and campaigns to properly optimize and deliver measurable results. If you ever decide to move internally or in another direction, we can also provide a smooth handover process for your business.
                  </p>
                </div>
                <a href="/contact-us" className="chy-pr-btn-1 wow fadeInLeft">
                  <span className="text">Get A Quote</span>
                  <span className="icon"><i className="fa-solid fa-right-long"></i></span>
                </a>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="wds-focus-card wow fadeInRight" data-wow-duration="1.2s">
                <h4 className="chy-heading-1 wds-focus-card__title">The first few months are focused on:</h4>
                <ul className="wds-focus-list">
                  {focusItems.map((item) => (
                    <li key={item}>
                      <i className="flaticon-check"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── YOUR ENTIRE MARKETING TEAM — dark gradient band ── */}
      <div className="wds-team-band pt-100 pb-100" data-navbar-dark="true" style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d1060 50%, #663dff 100%)' }}>
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-6 col-lg-6">
              <div className="mb-30">
                <div className="wds-stat__accent"></div>
                <h2 className="chy-title-1" style={{ color: '#fff' }}>Your Entire Marketing Team — Ready To Go</h2>
                <p className="chy-section-para-1 wow fadeInUp" style={{ marginTop: '18px', color: 'rgba(255,255,255,0.85)' }}>
                  Get access to strategists, designers, SEO specialists, paid ads experts and content creators — without the cost and complexity of hiring internally. From brand awareness and lead generation through to AI search visibility and reporting dashboards, Shopa Marketing manages the entire process end-to-end.
                </p>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="wds-glass-list">
                {teamPoints.map((point, i) => (
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

      {/* ── TESTIMONIALS ── */}
      <ServiceTestimonials />

      {/* ── SERVICES — pill links ── */}
      <div className="wds-explore-area pt-90 pb-90 bg-default fix">
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-40">
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Services</h2>
          </div>
          <div className="wds-explore-links wow fadeInUp">
            {serviceLinks.map((link) => (
              <a key={link.href} href={link.href} className={`wds-explore-pill${link.active ? ' wds-explore-pill--active' : ''}`}>
                <span className="text">{link.label}</span>
                <i className="flaticon-next"></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ — sticky title + accordion split ── */}
      <div className="wds-faq-area pt-110 pb-110 bg-default" style={{ backgroundImage: "url('/assets/img/bg/body-bg-3.png')" }}>
        <div className="container chy-container-1">
          <div className="row">

            <div className="col-xl-4 col-lg-4">
              <div className="wds-faq-sticky mb-40">
                <h2 className="chy-title-1">Frequently Asked Questions</h2>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8">
              <div className="accordion chy-sd-1-item wow fadeInUp" id="acc-cmo">

                <div className="accordion-item mb-15">
                  <h2 className="accordion-header" id="cmo-h1">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#cmo-c1" aria-expanded="true" aria-controls="cmo-c1">
                      <span className="icon-2"><i className="flaticon-arrow"></i></span>
                      <span className="title chy-heading-1">What does a fractional CMO do?</span>
                      <span className="icon"><i className="far fa-plus"></i></span>
                    </button>
                  </h2>
                  <div id="cmo-c1" className="accordion-collapse collapse show" aria-labelledby="cmo-h1" data-bs-parent="#acc-cmo">
                    <div className="accordion-body">
                      <div className="disc chy-para-1">A fractional CMO provides part-time senior marketing leadership — typically 1–3 days per week — handling strategy, team oversight, vendor management, and executive reporting. You get C-suite expertise at a fraction of the cost of a full-time hire.</div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-15">
                  <h2 className="accordion-header" id="cmo-h2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cmo-c2" aria-expanded="false" aria-controls="cmo-c2">
                      <span className="icon-2"><i className="flaticon-arrow"></i></span>
                      <span className="title chy-heading-1">How long does an engagement typically last?</span>
                      <span className="icon"><i className="far fa-plus"></i></span>
                    </button>
                  </h2>
                  <div id="cmo-c2" className="accordion-collapse collapse" aria-labelledby="cmo-h2" data-bs-parent="#acc-cmo">
                    <div className="accordion-body">
                      <div className="disc chy-para-1">Engagements typically run from 3 to 12 months, depending on your goals. We start with a discovery phase to understand your business, then move into strategy development and execution. Many clients continue on a retainer basis after the initial engagement.</div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-15">
                  <h2 className="accordion-header" id="cmo-h3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cmo-c3" aria-expanded="false" aria-controls="cmo-c3">
                      <span className="icon-2"><i className="flaticon-arrow"></i></span>
                      <span className="title chy-heading-1">Is a Done For You right for my business?</span>
                      <span className="icon"><i className="far fa-plus"></i></span>
                    </button>
                  </h2>
                  <div id="cmo-c3" className="accordion-collapse collapse" aria-labelledby="cmo-h3" data-bs-parent="#acc-cmo">
                    <div className="accordion-body">
                      <div className="disc chy-para-1">This service is ideal for businesses with $2M–$50M in revenue that need strategic marketing direction but aren&apos;t ready for a full-time CMO. It&apos;s also perfect for companies in transition — post-funding, post-acquisition, or undergoing rebrand.</div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="cmo-h4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cmo-c4" aria-expanded="false" aria-controls="cmo-c4">
                      <span className="icon-2"><i className="flaticon-arrow"></i></span>
                      <span className="title chy-heading-1">How do you measure success?</span>
                      <span className="icon"><i className="far fa-plus"></i></span>
                    </button>
                  </h2>
                  <div id="cmo-c4" className="accordion-collapse collapse" aria-labelledby="cmo-h4" data-bs-parent="#acc-cmo">
                    <div className="accordion-body">
                      <div className="disc chy-para-1">We establish clear KPIs at the start of every engagement — typically tied to revenue growth, lead generation, brand awareness, and marketing ROI. Monthly reporting and quarterly reviews keep all stakeholders aligned on progress.</div>
                    </div>
                  </div>
                </div>

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
