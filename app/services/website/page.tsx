import TemplateScripts from "@/components/TemplateScripts";
import ServiceHero from "@/components/ServiceHero";

export default function WebsiteDesignPage() {
  const testimonials = [
    {
      quote: 'Royal Park Dental uses Shopa Marketing and are pleased with their customer service and product. Thank you for your patience and being so accommodating to our needs. Highly recommend!',
      name: 'Royal Park Dental',
      bio: 'Dental Clinic, Melbourne',
    },
    {
      quote: 'We really appreciate Shopa Marketing and their service. Their employees are reliable and quick to action anything you need.',
      name: 'First Step Fertility',
      bio: 'Fertility Clinic, Australia',
    },
    {
      quote: 'I am so happy with the entire process and end product. Tom Richards from Shopa Marketing handled my digital advertising campaign and web design. Result is excellent.',
      name: 'Lmt Finance',
      bio: 'Mortgage Broker, Geelong',
    },
    {
      quote: 'They look after the people they work with, with very good deals.',
      name: 'Bargain Beds',
      bio: 'Small Family Business',
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
    },
    {
      quote: "Lawrence's professional guidance was instrumental in crafting a compelling advertisement. Thrilled with the results and highly recommend his services.",
      name: 'Home Caring Tranmere',
      bio: 'NDIS & Home Care Provider, Adelaide',
    },
    {
      quote: 'The team were easy to communicate with which made the process smooth.',
      name: 'Hutt Dental Hub',
      bio: 'Dental Clinic',
    },
    {
      quote: 'They were quick to respond and provided us with great quality artwork.',
      name: 'Fountain College',
      bio: 'Education',
    },
    {
      quote: 'We (Bare) partnered with Shopa Marketing to execute our branded in-store print and digital signage across local supermarkets in Adelaide, and the results have been great. From initial discussions to final rollout, the team has been wonderful to work with - highly professional, responsive, and deeply attentive. They brought our vision to life, and the signage has significantly expanded our brand awareness in the local community.',
      name: 'Bare',
      bio: 'Brand, Adelaide',
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

      {/* intro section */}
      <div className="service-details-area pt-120 pb-70">
        <div className="container chy-container-1">
          <div className="row align-items-center">

            {/* left column */}
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="service-details-content mb-50">

                <h2 className="chy-heading-1 service-details-title chy-split-in-right chy-split-text">
                  Websites Engineered for Sustainable Business Growth Across Australia
                </h2>

                <p className="chy-para-1 inner-page-disc">
                  Your website is the only employee who never calls in sick, never clocks off, and never stops selling. It works continuously to attract attention, build confidence, and convert opportunity into revenue every hour of every day.
                </p>
                <p className="chy-para-1 inner-page-disc">
                  That is exactly what we build at Shopa Marketing.
                </p>
                <p className="chy-para-1 inner-page-disc">
                  We design and develop high-performance websites that do far more than simply exist online. They load instantly, are structurally prepared for modern search platforms, and are strategically engineered to transform visitors into loyal customers.
                </p>

                <div className="mt-35 wow fadeInUp">
                  <a href="/contact-us" className="chy-pr-btn-1">
                    <span className="text">Book An Appointment</span>
                    <span className="icon"><i className="fa-solid fa-right-long"></i></span>
                  </a>
                </div>

              </div>
            </div>

            {/* sidebar */}
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="blog-2-page-sidebar mb-50">
                <div className="sidebar-box mb-30 wow fadeInUp">
                  <h4 className="sidebar-box-title chy-heading-1">Services</h4>
                  <div className="sidebar-box-wrap">
                    <ul className="sidebar-category">
                      <li className="wow fadeInUp"><a href="/services/done-for-you"><span className="text">Done For You</span><span className="icon-1"><i className="flaticon-next"></i></span></a></li>
                      <li className="wow fadeInUp"><a href="/services/ooh-advertising"><span className="text">OOH Advertising</span><span className="icon-1"><i className="flaticon-next"></i></span></a></li>
                      <li className="wow fadeInUp"><a href="/services/seo-services"><span className="text">SEO Services</span><span className="icon-1"><i className="flaticon-next"></i></span></a></li>
                      <li className="wow fadeInUp"><a href="/services/social-media"><span className="text">Social Media Ads</span><span className="icon-1"><i className="flaticon-next"></i></span></a></li>
                      <li className="wow fadeInUp"><a href="/services/website"><span className="text">Website Design</span><span className="icon-1"><i className="flaticon-next"></i></span></a></li>
                      <li className="wow fadeInUp"><a href="/services/google-ads"><span className="text">Google Ads</span><span className="icon-1"><i className="flaticon-next"></i></span></a></li>
                      <li className="wow fadeInUp"><a href="/services/graphic-design"><span className="text">Graphic Design</span><span className="icon-1"><i className="flaticon-next"></i></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* why many australian business websites underperform */}
      <div className="bg-default pt-100 pb-80" style={{ backgroundColor: '#f8f8fb' }}>
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Why Many Australian Business Websites Underperform</h2>
            <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '780px', margin: '16px auto 0' }}>
              A website should build credibility, generate enquiries, and support growth. Yet many Australian businesses invest in sites that look good but fail commercially. The reasons sit beneath the surface — and they&apos;re costing you leads every single day.
            </p>
          </div>
          <div className="row g-4">
            {underperformCards.map((card) => (
              <div key={card.num} className="col-xl-6 col-lg-6 wow fadeInUp">
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

      {/* stats / impact section */}
      <div className="web-stats-area pt-90 pb-90" data-navbar-dark="true" style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d1060 50%, #663dff 100%)' }}>
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h2 className="chy-title-1 chy-split-in-right chy-split-text" style={{ color: '#fff' }}>
              Why Your Website Is Make or Break for Business Growth
            </h2>
            <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '700px', margin: '16px auto 0', color: 'rgba(255,255,255,0.8)' }}>
              Your website is no longer an online brochure. It is the most commercially influential asset your business owns. Research consistently highlights the impact of design, speed, and performance on business outcomes.
            </p>
          </div>
          <div className="web-stats-grid wow fadeInUp">
            {stats.map((stat, i) => (
              <div key={i} className="web-stat-item">
                <div className="web-stat-item__accent"></div>
                <div className="web-stat-item__num-wrap">
                  <div className={`web-stat-item__num${stat.long ? ' web-stat-item__num--sm' : ''}`}>{stat.num}</div>
                </div>
                <div className="web-stat-item__line"></div>
                <p className="web-stat-item__label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* what shopa marketing builds */}
      <div className="bg-default pt-100 pb-80" style={{ backgroundImage: "url('/assets/img/bg/body-bg-3.png')" }}>
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
          <div className="row g-4">
            {buildCards.map((card) => (
              <div key={card.title} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp">
                <div className="web-build-card">
                  <div className="web-build-card__icon">
                    <i className={card.icon}></i>
                  </div>
                  <h4 className="chy-heading-1 web-build-card__title">{card.title}</h4>
                  <p className="chy-para-1 web-build-card__body">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* how we work */}
      <div className="bg-default pt-100 pb-80" style={{ backgroundColor: '#f8f8fb' }}>
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
          <div className="row g-4">
            {processSteps.map((step) => (
              <div key={step.step} className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp">
                <div className="web-process-step">
                  <div className="web-process-step__num">{step.step}</div>
                  <h4 className="chy-heading-1 web-process-step__title">{step.title}</h4>
                  <p className="chy-para-1 web-process-step__body">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* the shopa marketing difference */}
      <div className="bg-default pt-100 pb-80" style={{ backgroundImage: "url('/assets/img/bg/body-bg-3.png')" }}>
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h5 className="chy-subtitle-1 wow fadeInDown">why choose us</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">The Shopa Marketing Difference</h2>
            <p className="chy-section-para-1 wow fadeInUp" style={{ fontWeight: 700, marginTop: '8px' }}>
              Your Long-Term Digital Growth Partner
            </p>
            <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '680px', margin: '10px auto 0' }}>
              We exist to make strategic, performance-driven marketing accessible to ambitious small and medium businesses across Australia. Clear. Commercial. Always aligned with your growth.
            </p>
          </div>
          <div className="row g-4">
            {diffCards.map((card) => (
              <div key={card.title} className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp">
                <div className="web-diff-card">
                  <div className="web-diff-card__icon">
                    <i className={card.icon}></i>
                  </div>
                  <h4 className="chy-heading-1 web-diff-card__title">{card.title}</h4>
                  <p className="chy-para-1 web-diff-card__body">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* testimonials */}
      <div className="chy-team-slider-1-area pt-80 pb-80" style={{ backgroundColor: '#f8f8fb' }}>
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
                      <div className="main-img">
                        <img src="/assets/img/team/t1-slider-img-1.png" alt="" />
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

      {/* faq */}
      <div className="bg-default pt-100 pb-100" style={{ backgroundImage: "url('/assets/img/bg/body-bg-3.png')" }}>
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Frequently Asked Questions</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-9 col-lg-10">
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
