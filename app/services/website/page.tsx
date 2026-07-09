import TemplateScripts from "@/components/TemplateScripts";
import ServiceHero from "@/components/ServiceHero";

export default function WebsiteDesignPage() {
  const testimonials = [
    {
      quote: 'Royal Park Dental uses Shopa Marketing and are pleased with their customer service and product. Thank you for your patience and being so accommodating to our needs. Highly recommend!',
      name: 'Royal Park Dental',
      bio: 'Dental Clinic, Melbourne',
      logo: '/assets/img/testimonials/royal-park-dental.png',
    },
    {
      quote: 'We really appreciate Shopa Marketing and their service. Their employees are reliable and quick to action anything you need.',
      name: 'First Step Fertility',
      bio: 'Fertility Clinic, Australia',
      logo: '/assets/img/testimonials/first-step-fertility.png',
    },
    {
      quote: 'I am so happy with the entire process and end product. Tom Richards from Shopa Marketing handled my digital advertising campaign and web design. Result is excellent.',
      name: 'Lmt Finance',
      bio: 'Mortgage Broker, Geelong',
      logo: '/assets/img/testimonials/lmt-finance.jpg',
    },
    {
      quote: 'They look after the people they work with, with very good deals.',
      name: 'Bargain Beds',
      bio: 'Small Family Business',
      logo: '/assets/img/testimonials/bargain-beds.png',
    },
    {
      quote: 'Very professional and very helpful with building a new business website and online marketing.',
      name: 'Independent Property Sales',
      bio: 'Real Estate, Geelong',
    },
    {
      quote: 'Easy well supported process with excellent communication along the way.',
      name: 'Coastal Skin & Beauty',
      bio: 'Beauty Clinic, Kapiti Coast',
      logo: '/assets/img/testimonials/coastal-skin-beauty.png',
    },
    {
      quote: "Lawrence's professional guidance was instrumental in crafting a compelling advertisement. Thrilled with the results and highly recommend his services.",
      name: 'Home Caring Tranmere',
      bio: 'NDIS & Home Care Provider, Adelaide',
      logo: '/assets/img/testimonials/home-caring-tranmere.webp',
    },
    {
      quote: 'The team were easy to communicate with which made the process smooth.',
      name: 'Hutt Dental Hub',
      bio: 'Dental Clinic',
      logo: '/assets/img/testimonials/hutt-dental-hub.png',
    },
    {
      quote: 'They were quick to respond and provided us with great quality artwork.',
      name: 'Fountain College',
      bio: 'Education',
      logo: '/assets/img/testimonials/fountain-college.png',
    },
    {
      quote: 'We (Bare) partnered with Shopa Marketing to execute our branded in-store print and digital signage across local supermarkets in Adelaide, and the results have been great. From initial discussions to final rollout, the team has been wonderful to work with - highly professional, responsive, and deeply attentive. They brought our vision to life, and the signage has significantly expanded our brand awareness in the local community.',
      name: 'Bare',
      bio: 'Brand, Adelaide',
      logo: '/assets/img/testimonials/bare.svg',
    },
  ];

  const underperformCards = [
    {
      num: '1',
      title: 'Attractive Design Without Strategic Intent',
      body: 'A modern-looking site can still underperform. When visual choices prioritise style over structure, messaging lacks hierarchy, and calls to action lack clarity. Good design attracts attention. Strategic design converts it.',
    },
    {
      num: '2',
      title: 'Weak First Impressions That Undermine Trust',
      body: 'Trust decisions happen in seconds. Outdated layouts, inconsistent branding, and generic templates quietly erode credibility before a single word is read. Your website should reflect the maturity of your business, not undermine it.',
    },
    {
      num: '3',
      title: 'Poor Performance Across Devices',
      body: 'Over half of web traffic now comes from mobile devices. Slow load speeds and unresponsive layouts create friction, drive visitors away, and signal low quality to search platforms. Performance is no longer optional. It is foundational.',
    },
    {
      num: '4',
      title: 'No Technical Structure for the AI Era',
      body: 'Websites are now evaluated by intelligent systems, not just users. Modern platforms assess speed, clarity, logical structure, content depth, and technical precision before determining visibility. Visibility today requires more than presence. It requires precision.',
    },
  ];

  const stats = [
    { num: '94%', label: 'of first impressions are influenced by website design and visual presentation.', long: false },
    { num: 'Up to 3 seconds', label: 'is enough for bounce probability to increase significantly as load time slows.', long: true },
    { num: '75%', label: 'of users assess a company\'s credibility based largely on its website experience.', long: false },
    { num: 'High-performance websites', label: 'consistently generate materially higher enquiry and conversion rates compared to poorly optimised sites.', long: true },
  ];

  const buildCards = [
    {
      icon: 'flaticon-web-designing',
      title: 'Custom Website Design',
      body: 'No templates. No recycled layouts. Every website is designed from the ground up around your brand positioning, target audience, and commercial objectives. Each element serves a purpose. Every detail supports conversion.',
    },
    {
      icon: 'flaticon-shopping-cart',
      title: 'eCommerce Websites',
      body: 'We develop high-converting eCommerce platforms on Shopify and WooCommerce, engineered for seamless transactions and measurable growth. Expect frictionless checkout experiences, strategically structured product pages, and secure payment infrastructure designed for scalable revenue.',
    },
    {
      icon: 'flaticon-mobile-development',
      title: 'Mobile-First & Responsive',
      body: 'Performance must be consistent across every device. From smartphones to desktops, your website adapts flawlessly to every screen size, ensuring a premium user experience at every touchpoint.',
    },
    {
      icon: 'flaticon-seo',
      title: 'SEO-Ready Development',
      body: 'Performance begins at the structural level. Every website we build is search-ready from the first line of code. Clean URL architecture, structured data, technical optimisation, and high-speed performance are embedded before launch — not added later.',
    },
    {
      icon: 'flaticon-statistics',
      title: 'High-Performance Builds',
      body: 'Speed influences visibility. Performance influences revenue. We engineer every site to meet Google\'s Core Web Vitals standards, with optimised assets, efficient code, and intelligent hosting configurations that support sub-two-second load times.',
    },
    {
      icon: 'flaticon-customer-service',
      title: 'Website Maintenance & Support',
      body: 'Launch is only the beginning. Every build includes 12 months of professional maintenance covering security monitoring, updates, backups, and technical support. We also provide a lifetime guarantee against technical faults, ensuring your website remains stable, secure, and commercially effective.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      body: 'We begin with clarity. We analyse your business model, audience behaviour, and commercial objectives. This strategic foundation informs the information architecture, messaging hierarchy, design direction, and technical framework that follow. Strong outcomes begin with strong thinking.',
    },
    {
      step: '02',
      title: 'Design & Experience',
      body: 'Design is more than visual appeal. It is structured persuasion. We translate strategy into bespoke layouts aligned with your brand positioning and user intent. You review and approve the direction before development begins, ensuring alignment at every stage.',
    },
    {
      step: '03',
      title: 'Build & Development',
      body: 'Precision execution follows approved design. We develop on industry-standard CMS platforms, engineering clean architecture, performance efficiency, and secure infrastructure built to scale with your business.',
    },
    {
      step: '04',
      title: 'Test, Refine & Launch',
      body: 'Before launch, every interaction is tested across devices, browsers, and user scenarios. Once live, you retain full ownership and begin your 12 months of professional maintenance and technical assurance immediately.',
    },
  ];

  const diffCards = [
    {
      icon: 'flaticon-guarantee',
      title: '12 Months of Professional Maintenance',
      body: 'Every website includes a full year of structured maintenance covering security monitoring, updates, backups, and technical oversight. We also provide a lifetime guarantee against technical faults, ensuring your investment remains protected long after launch.',
    },
    {
      icon: 'flaticon-digital-campaign',
      title: 'A Fully Integrated Marketing Partner',
      body: 'Your website is only the foundation. We deliver SEO, Google Ads, Social Media, and Graphic Design under one strategic direction, ensuring every channel works cohesively to drive measurable growth.',
    },
    {
      icon: 'flaticon-team',
      title: 'Dedicated Strategic Support',
      body: 'You work with a dedicated account manager who understands your business and objectives. No call centres. No ticket queues. Just direct communication, responsive support, and clear accountability.',
    },
    {
      icon: 'flaticon-price-tag',
      title: 'Transparent, Fixed Pricing',
      body: 'Clarity builds trust. Our pricing is defined upfront and fixed from the beginning. What is outlined in your proposal is exactly what you pay. No hidden fees. No unexpected additions.',
    },
  ];

  const serviceLinks = [
    { label: 'Done For You', href: '/services/done-for-you' },
    { label: 'OOH Advertising', href: '/services/ooh-advertising' },
    { label: 'SEO Services', href: '/services/seo-services' },
    { label: 'Social Media Ads', href: '/services/social-media' },
    { label: 'Website Design', href: '/services/website', active: true },
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
        headline="Websites Built To Convert, Not Just Look Good."
        subtext="High-converting sites designed around your customer's journey — fast, mobile-first, and built to turn visitors into leads."
      />

      {/* ── INTRO — editorial split, home "Solutions" rhythm ── */}
      <div className="wds-intro-area pt-120 pb-110 bg-default fix">
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-6 col-lg-6">
              <div className="wds-intro-content">
                <div className="section-title-wrap mb-35">
                  <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">
                    Websites Engineered for Sustainable Business Growth Across Australia
                  </h2>
                  <p className="chy-section-para-1 wow fadeInUp">
                    Your website is the only employee who never calls in sick, never clocks off, and never stops selling. It works continuously to attract attention, build confidence, and convert opportunity into revenue every hour of every day.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp" style={{ fontWeight: 700 }}>
                    That is exactly what we build at Shopa Marketing.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    We design and develop high-performance websites that do far more than simply exist online. They load instantly, are structurally prepared for modern search platforms, and are strategically engineered to transform visitors into loyal customers.
                  </p>
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

      {/* ── WHY UNDERPERFORM — sticky title + staggered numbered cards ── */}
      <section className="wds-under-section fix">
        {/* Scrolling background text — decorative */}
        <div className="shopa-floating-scrolltext" aria-hidden="true">
          <div className="shopa-floating-scrolltext__track">
            <span>Why Websites Underperform &nbsp;·&nbsp; Why Websites Underperform &nbsp;·&nbsp; Why Websites Underperform &nbsp;·&nbsp;</span>
            <span aria-hidden="true">Why Websites Underperform &nbsp;·&nbsp; Why Websites Underperform &nbsp;·&nbsp; Why Websites Underperform &nbsp;·&nbsp;</span>
          </div>
        </div>

        <div className="container chy-container-1">
          <div className="wds-under-layout">

            <div className="wds-under-sticky">
              <h2 className="chy-title-1">Why Many Australian Business Websites Underperform</h2>
              <p className="chy-section-para-1" style={{ marginTop: '16px' }}>
                A website should build credibility, generate enquiries, and support growth. Yet many Australian businesses invest in sites that look good but fail commercially. The reasons sit beneath the surface — and they&apos;re costing you leads every single day.
              </p>
            </div>

            <div className="wds-under-cards">
              {underperformCards.map((card, i) => (
                <div key={card.num} className={`wds-under-holder wds-under-holder--${i + 1} wow fadeInUp`} data-wow-delay={`${i * 0.1}s`}>
                  <div className="web-numbered-card">
                    <span className="web-numbered-card__num">{card.num}</span>
                    <h4 className="chy-heading-1 web-numbered-card__title">{card.title}</h4>
                    <p className="chy-para-1 web-numbered-card__body">{card.body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS — dark gradient band, split layout ── */}
      <div className="wds-stats-area pt-110 pb-110" data-navbar-dark="true" style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d1060 50%, #663dff 100%)' }}>
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-5 col-lg-5">
              <div className="wds-stats-content mb-30">
                <h2 className="chy-title-1 chy-split-in-right chy-split-text" style={{ color: '#fff' }}>
                  Why Your Website Is Make or Break for Business Growth
                </h2>
                <p className="chy-section-para-1 wow fadeInUp" style={{ marginTop: '18px', color: 'rgba(255,255,255,0.8)' }}>
                  Your website is no longer an online brochure. It is the most commercially influential asset your business owns. Research consistently highlights the impact of design, speed, and performance on business outcomes.
                </p>
              </div>
            </div>

            <div className="col-xl-7 col-lg-7">
              <div className="wds-stats-grid wow fadeInUp">
                {stats.map((stat, i) => (
                  <div key={i} className="wds-stat">
                    <div className="wds-stat__accent"></div>
                    <div className={`wds-stat__num${stat.long ? ' wds-stat__num--sm' : ''}`}>{stat.num}</div>
                    <p className="wds-stat__label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── WHAT WE BUILD — numbered accordion rows ── */}
      <div className="wds-build-area pt-110 pb-110" style={{ backgroundColor: '#f8f8fb' }}>
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h5 className="chy-subtitle-1 wow fadeInDown">what we build</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">What Shopa Marketing Builds</h2>
            <p className="chy-section-para-1 wow fadeInUp" style={{ fontWeight: 700, marginTop: '8px' }}>
              Engineered for Performance. Designed for Growth.
            </p>
            <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '720px', margin: '10px auto 0' }}>
              From new builds to full strategic redesigns, we deliver websites built for long-term performance. Beautifully executed. Technically robust. Structured to scale with your business.
            </p>
          </div>

          <div className="wds-build-rows">
            {buildCards.map((card, i) => (
              <div key={card.title} className="svc-accordion-row wow fadeInUp" data-wow-delay={`${i * 0.08}s`}>
                <div className="svc-accordion-header">
                  <span className="svc-accordion-num">{`0${i + 1}`}</span>
                  <span className="wds-build-row-icon"><i className={card.icon}></i></span>
                  <h4 className="chy-heading-1 svc-accordion-title">{card.title}</h4>
                  <span className="svc-accordion-arrow"><i className="far fa-plus"></i></span>
                </div>
                <div className="svc-accordion-body">
                  <p className="chy-para-1 wds-build-row-body">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HOW WE WORK — connected timeline ── */}
      <div className="wds-process-area pt-110 pb-110 bg-default" style={{ backgroundImage: "url('/assets/img/bg/body-bg-3.png')" }}>
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h5 className="chy-subtitle-1 wow fadeInDown">our process</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">How We Work</h2>
            <p className="chy-section-para-1 wow fadeInUp" style={{ fontWeight: 700, marginTop: '8px' }}>
              The Framework Behind Every High-Performance Website
            </p>
            <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '680px', margin: '10px auto 0' }}>
              A clear, structured process designed for efficiency and measurable outcomes. Every stage is intentional. Every decision supports performance.
            </p>
          </div>

          <div className="wds-timeline">
            {processSteps.map((step, i) => (
              <div key={step.step} className="wds-timeline-step wow fadeInUp" data-wow-delay={`${i * 0.15}s`}>
                <div className="wds-timeline-card">
                  <div className="wds-timeline-num">{step.step}</div>
                  <h4 className="chy-heading-1 wds-timeline-title">{step.title}</h4>
                  <p className="chy-para-1 wds-timeline-body">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── THE DIFFERENCE — image + icon rows split ── */}
      <div className="wds-diff-area pt-110 pb-110 bg-default fix">
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-5 col-lg-5">
              <div className="wds-diff-media mb-30 wow fadeInLeft" data-wow-duration="1.2s">
                <div className="wds-ph wds-ph--diff">
                  <span>Image Placeholder — 600 × 720</span>
                </div>
              </div>
            </div>

            <div className="col-xl-7 col-lg-7">
              <div className="wds-diff-content">
                <div className="section-title-wrap mb-35">
                  <h5 className="chy-subtitle-1 wow fadeInDown">why choose us</h5>
                  <h2 className="chy-title-1 chy-split-in-right chy-split-text">The Shopa Marketing Difference</h2>
                  <p className="chy-section-para-1 wow fadeInUp" style={{ fontWeight: 700, marginTop: '8px' }}>
                    Your Long-Term Digital Growth Partner
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp" style={{ marginTop: '10px' }}>
                    We exist to make strategic, performance-driven marketing accessible to ambitious small and medium businesses across Australia. Clear. Commercial. Always aligned with your growth.
                  </p>
                </div>

                <div className="wds-diff-list">
                  {diffCards.map((card, i) => (
                    <div key={card.title} className="wds-diff-row wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
                      <div className="wds-diff-row__icon">
                        <i className={card.icon}></i>
                      </div>
                      <div className="wds-diff-row__content">
                        <h4 className="chy-heading-1 wds-diff-row__title">{card.title}</h4>
                        <p className="chy-para-1 wds-diff-row__body">{card.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS — home-page slider treatment ── */}
      <div className="chy-team-slider-1-area pt-90 pb-90" style={{ backgroundColor: '#f8f8fb' }}>
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-40">
            <h5 className="chy-subtitle-1 wow fadeInDown">testimonials</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Trusted by Australian Business Owners</h2>
            <p className="chy-section-para-1 wow fadeInUp" style={{ fontWeight: 700, marginTop: '8px' }}>
              Real Results. Real Businesses.
            </p>
            <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '640px', margin: '10px auto 0' }}>
              Don&apos;t take our word for it. Here is what Australian business owners say about working with Shopa Marketing.
            </p>
          </div>
          <div className="chy-team-slider-1-wrap">
            <div className="swiper-container chy_team_slider_1_active fix">
              <div className="swiper-wrapper">
                {testimonials.map((t, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="chy-team-slider-1-item">
                      <div className={`main-img${t.logo ? ' has-client-logo' : ' no-logo'}`}>
                        {t.logo
                          ? <img src={t.logo} alt={t.name} loading="lazy" />
                          : <span className="testimonial-initials">{t.name.split(' ').slice(0, 2).map(w => w[0]).join('')}</span>
                        }
                      </div>
                      <div className="content-wrap">
                        <h4 className="chy-heading-1 title">What people are saying</h4>
                        <p className="chy-para-1 comment">{t.quote}</p>
                        <div className="person">
                          <h5 className="chy-heading-1 name">{t.name}</h5>
                          <span className="chy-para-1 bio">{t.bio}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="chy-team-slider-1-pagination"></div>
          </div>
        </div>
      </div>

      {/* ── SERVICES — pill links (relocated sidebar) ── */}
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
              <div className="accordion chy-sd-1-item wow fadeInUp" id="acc-web">

                <div className="accordion-item mb-15">
                  <h2 className="accordion-header" id="web-h1">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#web-c1" aria-expanded="true" aria-controls="web-c1">
                      <span className="icon-2"><i className="flaticon-arrow"></i></span>
                      <span className="title chy-heading-1">How long does a website project take?</span>
                      <span className="icon"><i className="far fa-plus"></i></span>
                    </button>
                  </h2>
                  <div id="web-c1" className="accordion-collapse collapse show" aria-labelledby="web-h1" data-bs-parent="#acc-web">
                    <div className="accordion-body">
                      <div className="disc chy-para-1">A typical business website takes 4–8 weeks from discovery to launch. Complex eCommerce platforms or custom web applications may take 10–16 weeks. Timelines depend on scope, the number of pages, and the speed of client feedback and content delivery.</div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-15">
                  <h2 className="accordion-header" id="web-h2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#web-c2" aria-expanded="false" aria-controls="web-c2">
                      <span className="icon-2"><i className="flaticon-arrow"></i></span>
                      <span className="title chy-heading-1">What platform do you build on?</span>
                      <span className="icon"><i className="far fa-plus"></i></span>
                    </button>
                  </h2>
                  <div id="web-c2" className="accordion-collapse collapse" aria-labelledby="web-h2" data-bs-parent="#acc-web">
                    <div className="accordion-body">
                      <div className="disc chy-para-1">We build primarily on WordPress, Shopify, and WooCommerce — industry-standard platforms that give you full ownership, flexibility, and long-term scalability. The right platform is selected based on your specific business needs and objectives.</div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-15">
                  <h2 className="accordion-header" id="web-h3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#web-c3" aria-expanded="false" aria-controls="web-c3">
                      <span className="icon-2"><i className="flaticon-arrow"></i></span>
                      <span className="title chy-heading-1">Do you provide ongoing website maintenance?</span>
                      <span className="icon"><i className="far fa-plus"></i></span>
                    </button>
                  </h2>
                  <div id="web-c3" className="accordion-collapse collapse" aria-labelledby="web-h3" data-bs-parent="#acc-web">
                    <div className="accordion-body">
                      <div className="disc chy-para-1">Yes. Every website build includes 12 months of professional maintenance covering security monitoring, updates, backups, and technical support. We also provide a lifetime guarantee against technical faults, ensuring your website remains stable, secure, and commercially effective long after launch.</div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="web-h4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#web-c4" aria-expanded="false" aria-controls="web-c4">
                      <span className="icon-2"><i className="flaticon-arrow"></i></span>
                      <span className="title chy-heading-1">Will my website be mobile-friendly?</span>
                      <span className="icon"><i className="far fa-plus"></i></span>
                    </button>
                  </h2>
                  <div id="web-c4" className="accordion-collapse collapse" aria-labelledby="web-h4" data-bs-parent="#acc-web">
                    <div className="accordion-body">
                      <div className="disc chy-para-1">Absolutely. Every website we build is developed mobile-first and tested across all major devices and browsers. With over half of web traffic coming from mobile, responsive performance is not optional — it is foundational to everything we deliver.</div>
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
