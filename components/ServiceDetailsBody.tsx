import ServiceTestimonials from "@/components/ServiceTestimonials";

type Feature = { icon: string; title: string; body: string };
type Faq = { q: string; a: string };

const serviceLinks = [
  { label: 'Done For You', href: '/services/done-for-you' },
  { label: 'OOH Advertising', href: '/services/ooh-advertising' },
  { label: 'SEO Services', href: '/services/seo-services' },
  { label: 'Social Media Ads', href: '/services/social-media' },
  { label: 'Website Design', href: '/services/website' },
  { label: 'Google Ads', href: '/services/google-ads' },
  { label: 'Graphic Design', href: '/services/graphic-design' },
];

export default function ServiceDetailsBody({
  introTitle,
  introParas,
  provideIntro,
  features,
  challenge,
  marquee,
  faqPrefix,
  faqs,
  currentPath,
}: {
  introTitle: string;
  introParas: string[];
  provideIntro: string;
  features: Feature[];
  challenge: string;
  marquee: string;
  faqPrefix: string;
  faqs: Faq[];
  currentPath: string;
}) {
  return (
    <>
      {/* ── INTRO — editorial split ── */}
      <div className="wds-intro-area pt-120 pb-110 bg-default fix">
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-6 col-lg-6">
              <div className="wds-intro-content">
                <div className="section-title-wrap mb-35">
                  <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">{introTitle}</h2>
                  {introParas.map((para, i) => (
                    <p key={i} className="chy-section-para-1 wow fadeInUp">{para}</p>
                  ))}
                </div>
                <a href="/contact-us" className="chy-pr-btn-1 wow fadeInLeft">
                  <span className="text">Book An Appointment</span>
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

      {/* ── WHAT WE PROVIDE — sticky title + staggered icon cards ── */}
      <section className="wds-under-section fix">
        {/* Scrolling background text — decorative */}
        <div className="shopa-floating-scrolltext" aria-hidden="true">
          <div className="shopa-floating-scrolltext__track">
            <span>{marquee} &nbsp;·&nbsp; {marquee} &nbsp;·&nbsp; {marquee} &nbsp;·&nbsp;</span>
            <span aria-hidden="true">{marquee} &nbsp;·&nbsp; {marquee} &nbsp;·&nbsp; {marquee} &nbsp;·&nbsp;</span>
          </div>
        </div>

        <div className="container chy-container-1">
          <div className="wds-under-layout">

            <div className="wds-under-sticky">
              <h2 className="chy-title-1">What We Provide</h2>
              <p className="chy-section-para-1" style={{ marginTop: '16px' }}>{provideIntro}</p>
            </div>

            <div className="wds-under-cards">
              {features.map((f, i) => (
                <div key={f.title} className={`wds-under-holder wds-under-holder--${i + 1} wow fadeInUp`} data-wow-delay={`${i * 0.1}s`}>
                  <div className="web-build-card">
                    <div className="web-build-card__icon">
                      <i className={f.icon}></i>
                    </div>
                    <h4 className="chy-heading-1 web-build-card__title">{f.title}</h4>
                    <p className="chy-para-1 web-build-card__body">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── THE CHALLENGE — dark gradient statement band ── */}
      <div className="wds-challenge-area pt-100 pb-100" data-navbar-dark="true" style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d1060 50%, #663dff 100%)' }}>
        <div className="container chy-container-1">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4">
              <div className="mb-30">
                <div className="wds-stat__accent"></div>
                <h2 className="chy-title-1" style={{ color: '#fff' }}>The Challenge</h2>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <p className="chy-section-para-1 wow fadeInUp" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.85, margin: 0 }}>
                {challenge}
              </p>
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
              <a key={link.href} href={link.href} className={`wds-explore-pill${link.href === currentPath ? ' wds-explore-pill--active' : ''}`}>
                <span className="text">{link.label}</span>
                <i className="flaticon-next"></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ — sticky title + accordion split ── */}
      <div className="wds-faq-area pt-110 pb-110 bg-default" style={{ backgroundImage: "url('/assets/img/bg/body-bg-3-v2.webp')" }}>
        <div className="container chy-container-1">
          <div className="row">

            <div className="col-xl-4 col-lg-4">
              <div className="wds-faq-sticky mb-40">
                <h2 className="chy-title-1">Frequently Asked Questions</h2>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8">
              <div className="accordion chy-sd-1-item wow fadeInUp" id={`acc-${faqPrefix}`}>
                {faqs.map((faq, i) => (
                  <div key={i} className={`accordion-item${i < faqs.length - 1 ? ' mb-15' : ''}`}>
                    <h2 className="accordion-header" id={`${faqPrefix}-h${i + 1}`}>
                      <button
                        className={`accordion-button${i > 0 ? ' collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${faqPrefix}-c${i + 1}`}
                        aria-expanded={i === 0 ? 'true' : 'false'}
                        aria-controls={`${faqPrefix}-c${i + 1}`}
                      >
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">{faq.q}</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div
                      id={`${faqPrefix}-c${i + 1}`}
                      className={`accordion-collapse collapse${i === 0 ? ' show' : ''}`}
                      aria-labelledby={`${faqPrefix}-h${i + 1}`}
                      data-bs-parent={`#acc-${faqPrefix}`}
                    >
                      <div className="accordion-body">
                        <div className="disc chy-para-1">{faq.a}</div>
                      </div>
                    </div>
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
