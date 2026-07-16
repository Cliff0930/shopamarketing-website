import TemplateScripts from "@/components/TemplateScripts";
import ServiceHero from "@/components/ServiceHero";
import { testimonials } from "@/components/testimonialsData";
import ScrollScrubVideo from "@/components/ScrollScrubVideo";

export default function WebsiteDesignPage() {
  const underperformCards: { num: string; short: string; title: string; body: string; image?: string }[] = [
    {
      num: '01',
      short: 'No Game Plan',
      image: '/assets/img/website/culprit-gameplan.webp',
      title: 'Pretty Face, No Game Plan',
      body: 'A website without strategy is like a billboard in the desert: technically impressive, seen by nobody who matters. When the layout wanders, the message mumbles and the buttons whisper instead of shout, visitors drift off and buy elsewhere. Strategic website design gives every page one job: turning lookers into bookers!',
    },
    {
      num: '02',
      short: 'Seven Seconds',
      image: '/assets/img/website/culprit-seconds.webp',
      title: 'Seven Seconds to Win or Lose',
      body: "That's roughly how long you have before a visitor decides whether you're the real deal. A tired layout or an obvious template can undo years of hard-earned reputation in a single glance. Your website should walk into the room the way your business does: sharp, confident and impossible to ignore.",
    },
    {
      num: '03',
      short: 'Mobile Walkouts',
      image: '/assets/img/website/culprit-mobile.webp',
      title: "Mobile Visitors Don't Wait, They Leave",
      body: "More than half your traffic arrives on a phone, usually between other things: the tram, the queue, the couch. If your site stutters or squishes on a small screen, they're gone before your logo loads, and Google files it all away. Responsive web design is the entry fee now, not a bonus feature.",
    },
    {
      num: '04',
      short: 'Invisible to AI',
      image: '/assets/img/website/culprit-ai.webp',
      title: 'Invisible to the Machines That Matter',
      body: "Here's the plot twist of modern marketing: your next customer might never see page one of Google, because an AI answered their question first. Search engines and AI tools now judge your site's speed, structure and substance before humans get a look in. Websites without SEO-friendly foundations aren't losing the race. They were never entered.",
    },
  ];

  const stats = [
    { value: '94', unit: '%', label: 'of first impressions are shaped by your website\'s design and presentation. Your site speaks before you do!' },
    { value: '3', unit: 'seconds', label: 'of loading is all it takes for visitors to start heading for the exits. Tough crowd, the internet.' },
    { value: '75', unit: '%', label: 'of people size up your credibility from your website alone. Before the phone call. Before the quote. Before hello.' },
    { value: '2x', unit: 'and more', label: 'High-performance websites turn the same traffic into double the enquiries, sometimes more. Identical visitors, very different results.' },
  ];

  const buildCards: { icon: string; title: string; body: React.ReactNode; image?: string }[] = [
    {
      icon: 'flaticon-web-designing',
      image: '/assets/img/website/console-custom.webp',
      title: 'One-of-a-Kind Custom Website Design',
      body: <>Templates are the fast fashion of the internet: everywhere, identical and instantly forgettable. We design from a blank canvas, shaping every page around your brand, your customers and your goals. If an element doesn&apos;t pull its weight, it doesn&apos;t make the cut!</>,
    },
    {
      icon: 'flaticon-shopping-cart',
      image: '/assets/img/website/console-ecommerce.webp',
      title: 'Checkout Champions: eCommerce Website Design',
      body: <>Shopify and WooCommerce stores where browsing turns into buying. Product pages that sell the sizzle, a checkout smoother than a flat white, and payments locked up tight. Every abandoned cart is money strolling out the door, so we build stores that close the deal.</>,
    },
    {
      icon: 'flaticon-mobile-development',
      image: '/assets/img/website/console-responsive.webp',
      title: 'Small-Screen Superstars: Responsive Web Design',
      body: <>Phone, tablet, laptop, or the giant monitor in reception: your website shows up dressed for the occasion on all of them. We design mobile-first, because that&apos;s where your customers live, then polish the experience for every other screen size going.</>,
    },
    {
      icon: 'flaticon-seo',
      image: '/assets/img/website/console-seo.webp',
      title: 'Born to Rank: SEO-Friendly Web Design',
      body: <>Plenty of agencies hand over a shiny new site, then charge extra to make Google notice it. We think that&apos;s backwards! Clean architecture, structured data and technical SEO go into the foundations of every build, so you launch ready to climb. Our <a href="/services/seo-services">SEO services</a> can then take you all the way to the summit.</>,
    },
    {
      icon: 'flaticon-statistics',
      image: '/assets/img/website/console-performance.webp',
      title: 'Lightning Loaders: High-Performance Builds',
      body: <>In web terms, slow is invisible. Every site we build meets Google&apos;s Core Web Vitals standards, with lean code, optimised assets and clever hosting aimed at load times under two seconds. Your customers get answers before they remember they were waiting.</>,
    },
    {
      icon: 'flaticon-customer-service',
      image: '/assets/img/website/console-maintenance.webp',
      title: 'Aftercare All-Stars: Maintenance and Support',
      body: <>Some agencies treat launch day like a farewell party. We treat it like opening night! Every website design package includes a sweet bonus: 12 months of complimentary maintenance covering security, updates, backups and real support, plus a lifetime guarantee against technical glitches.</>,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery and Strategy',
      body: 'First, we get nosy, in the most professional way possible. Your business, your customers, your competitors, and what a single lead is really worth to you. All of it feeds the blueprint: site structure, messaging and design direction, sorted before a single pixel moves.',
    },
    {
      step: '02',
      title: 'Design and Experience',
      body: 'Now the blueprint gets beautiful! We craft a design that captures your brand and gently ushers visitors towards the enquiry button, like a good waiter guiding you to the specials. You see it, you tweak it, you approve it before we build a thing.',
    },
    {
      step: '03',
      title: 'Build and Development',
      body: 'Our developers roll up their sleeves and bring the design to life: clean code, rapid load times and security done properly, on platforms trusted by millions of businesses. Built right the first time, because nobody dreams of paying for the same website twice.',
    },
    {
      step: '04',
      title: 'Test, Refine and Launch',
      body: "Before your site meets the public, it survives our gauntlet: every device, every browser, every 'what if someone clicks this twice?' scenario we can dream up. Then we go live, the site is fully yours, and your 12 months of complimentary maintenance starts on the spot.",
    },
  ];

  const diffCards = [
    {
      icon: 'flaticon-guarantee',
      title: 'A Full Year of Maintenance, On the House',
      body: <>Security monitoring, updates, backups and support for 12 months, plus a lifetime guarantee against technical glitches. Peace of mind shouldn&apos;t be sold separately, so we put it in every box.</>,
    },
    {
      icon: 'flaticon-digital-campaign',
      title: 'Every Marketing Channel, One Crew',
      body: <>Your website is the home ground. We also run your <a href="/services/seo-services">SEO</a>, <a href="/services/google-ads">Google Ads</a>, <a href="/services/social-media">social media advertising</a> and <a href="/services/graphic-design">graphic design</a> from the same playbook, so every channel is chasing the same goal instead of five agencies playing five different games.</>,
    },
    {
      icon: 'flaticon-team',
      title: 'One Name, One Number, One Person Who Gets It',
      body: <>Your dedicated account manager knows your business, your goals and your pet peeves. No call centres, no ticket numbers, no starting the story from scratch every time you call.</>,
    },
    {
      icon: 'flaticon-price-tag',
      title: 'Pricing With No Fine-Print Surprises',
      body: <>The quote we give you is the bill you get. No hidden fees, no creeping extras, no &apos;small additional cost&apos; emails in week five. All-inclusive rates to avoid any nasty surprises, agreed upfront and honoured to the end.</>,
    },
  ];

  const faqs = [
    {
      q: 'How much does website design cost?',
      a: "It depends on the size and scope of the build, but you'll know before we start, in writing, with everything included. No discovery-meeting marathon, no mood boards held hostage. Fixed all-inclusive pricing with 12 months of maintenance included. Get a quote and get a number!",
    },
    {
      q: 'How long does a website design project take?',
      a: 'Most business websites go from kickoff to launch in 4 to 8 weeks. Bigger eCommerce or custom builds usually run 10 to 16. The main variable is how quickly content and feedback flow back to us. We move fast, but we never cut corners on your reputation.',
    },
    {
      q: 'What platforms do you build websites on?',
      a: 'WordPress, Shopify and WooCommerce, chosen to fit your business rather than our convenience. All three are proven, flexible and fully yours. No lock-in contracts, and no drama if you ever decide to move on.',
    },
    {
      q: 'Do you provide ongoing website maintenance?',
      a: "Yes, and it's part of the deal, not a sneaky add-on. Every build includes 12 months of complimentary maintenance covering security monitoring, updates, backups and technical support, plus a lifetime guarantee against technical glitches.",
    },
    {
      q: 'Will my website be mobile-friendly and SEO-ready?',
      a: 'Both, from the very first line of code! Every site is designed mobile-first, tested across all major devices and browsers, and built with clean structure, fast load times and technical SEO in place. Most of your customers are on their phones. We make sure your website is too.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Design',
    serviceType: 'Web Design Services',
    provider: { '@type': 'Organization', name: 'Shopa Marketing' },
    areaServed: ['Australia', 'New Zealand'],
    review: testimonials.map((t) => ({
      '@type': 'Review',
      reviewBody: t.quote,
      author: { '@type': 'Organization', name: t.name },
    })),
  };

  return (
    <>
      <TemplateScripts />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* preloader */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>

      <ServiceHero
        headline="Web Design That Stops the Scroll and Starts the Sales"
        subtext="Why settle for a website that just sits there nodding politely? As the go-to web design agency for SMEs, we build fast, mobile-first websites that grab attention, hold it, and hand it back only after it's become a customer!"
        bgImage="/assets/img/breadcrumb/website-hero.webp"
      />

      {/* ── INTRO — editorial split, home "Solutions" rhythm ── */}
      <div id="website-intro-pin" className="wds-pin-wrap">
      <div className="wds-intro-area pt-120 pb-110 bg-default fix wds-pin-panel">
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-6 col-lg-6">
              <div className="wds-intro-content">
                <div className="section-title-wrap mb-35">
                  <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">
                    Custom Website Design That Works Around the Clock
                  </h2>
                  <p className="chy-section-para-1 wow fadeInUp">
                    Picture your best salesperson. Now imagine they never sleep, never take holidays, and can chat with a thousand customers at once without breaking a sweat. That&apos;s what your website should be! For most businesses though, it&apos;s more like a mannequin in the window: nicely dressed, completely silent.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    We&apos;re here to change that. Our website design services turn quiet websites into your loudest revenue channel: answering questions, building trust and collecting enquiries while you&apos;re at dinner, at footy practice, or fast asleep.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    Every custom website we build loads in a blink, looks brilliant on every screen, and is wired to be found by Google and the AI search tools your customers now use. And what&apos;s more? Every package includes a sweet bonus: 12 months of complimentary maintenance, plus a lifetime guarantee against technical glitches.
                  </p>
                </div>
                <a href="/contact-us" className="chy-pr-btn-1 wow fadeInLeft">
                  <span className="text">Get a Quote</span>
                  <span className="icon"><i className="fa-solid fa-right-long"></i></span>
                </a>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="wds-intro-media wow fadeInRight" data-wow-duration="1.2s">
                <ScrollScrubVideo
                  src="/assets/img/services/website-scrub.mp4"
                  className="wds-intro-video wds-intro-video--full"
                  ariaLabel="Custom website design on desktop and mobile by Shopa Marketing, web design agency"
                  pinContainerId="website-intro-pin"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>{/* /wds-pin-wrap */}

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
          <div className="wds-culprit-head">
            <h2 className="chy-title-1">Why Many Business Websites Underperform</h2>
            <p className="chy-section-para-1">
              Ever wondered why some websites pull in customers like a bakery pulls in morning commuters, while others just gather dust? It&apos;s rarely bad luck. The culprits hide under the bonnet, quietly costing you enquiries every single day. Let&apos;s pop the hood.
            </p>
          </div>

          <div className="wds-culprits wow fadeInUp">
            {underperformCards.map((card) => (
              <div key={card.num} className="wds-culprit" tabIndex={0}>
                <div className="wds-culprit__closed" aria-hidden="true">
                  <span className="wds-culprit__closed-num">{card.num}</span>
                  <span className="wds-culprit__closed-label">{card.short}</span>
                  <span className="wds-culprit__closed-tip"><i className="far fa-plus"></i></span>
                </div>
                <div className="wds-culprit__open">
                  {card.image && <img className="wds-culprit__img" src={card.image} alt={card.title} loading="lazy" />}
                  <span className="wds-culprit__ghost" aria-hidden="true">{card.num}</span>
                  <span className="wds-culprit__tag">Culprit {card.num}</span>
                  <h3 className="chy-heading-1 wds-culprit__title">{card.title}</h3>
                  <p className="chy-para-1 wds-culprit__body">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS — dark editorial ledger ── */}
      <div className="wds-ledger-area pt-110 pb-110" data-navbar-dark="true">
        <div className="container chy-container-1">

          <div className="wds-ledger-head">
            <h2 className="chy-title-1" style={{ color: '#fff' }}>
              Why Professional Website Design Is Make or Break for Business Growth
            </h2>
            <p className="chy-section-para-1 wow fadeInUp" style={{ color: 'rgba(255,255,255,0.95)' }}>
              Think of your website as prime real estate on the busiest street in the country. You can build a flagship store, or you can put up a shed. The numbers show exactly how much that choice matters.
            </p>
          </div>

          <div className="wds-ledger">
            {stats.map((stat, i) => (
              <div key={i} className="wds-ledger-row wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
                <span className="wds-ledger-row__index">{`0${i + 1}`}</span>
                <div className="wds-ledger-row__figure">
                  <span className="wds-ledger-row__value">{stat.value}</span>
                  <span className="wds-ledger-row__unit">{stat.unit}</span>
                </div>
                <p className="wds-ledger-row__label">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── WHAT WE BUILD — numbered accordion rows ── */}
      <div className="wds-build-area pt-110 pb-110">
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h5 className="chy-subtitle-1 wow fadeInDown">our website design services</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Website Design Services With Serious Firepower</h2>
            <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '720px', margin: '10px auto 0' }}>
              New builds, bold redesigns and full-scale rescues. Whatever shape your project takes, it gets the same treatment: crafted to perform for years, quick off the mark, and ready to grow the moment your business does.
            </p>
          </div>

          <div className="wds-svc-console wow fadeInUp">
            {buildCards.map((card, i) => (
              <div key={card.title} className="wds-svc-item" tabIndex={0}>
                <div className="wds-svc-item__row">
                  <span className="wds-svc-item__num">{`0${i + 1}`}</span>
                  <h3 className="chy-heading-1 wds-svc-item__title">{card.title}</h3>
                  <span className="wds-svc-item__arrow"><i className="fa-solid fa-right-long"></i></span>
                </div>
                <div className="wds-svc-item__panel">
                  <span className="wds-svc-item__ghost" aria-hidden="true">{`0${i + 1}`}</span>
                  {card.image
                    ? <img className="wds-svc-item__img" src={card.image} alt={card.title} loading="lazy" />
                    : <span className="wds-svc-item__icon"><i className={card.icon}></i></span>
                  }
                  <span className="wds-svc-item__panel-title">{card.title}</span>
                  <p className="chy-para-1 wds-svc-item__body">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HOW WE WORK — blueprint staircase ── */}
      <div className="wds-proc-area pt-110 pb-110 fix">
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h5 className="chy-subtitle-1 wow fadeInDown">our web design process</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Our Website Design Process, Minus the Mystery</h2>
            <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '680px', margin: '10px auto 0' }}>
              No smoke, no mirrors, no invoices that arrive with plot twists. Just four clear stages between where you are now and a website that earns its keep.
            </p>
          </div>

          <div className="wds-proc-steps">
            <span className="wds-proc-path" aria-hidden="true"></span>
            {processSteps.map((step, i) => (
              <div key={step.step} className={`wds-proc-card wds-proc-card--${i + 1} wow wds-rise-in`} data-wow-delay={`${i * 0.18}s`} data-wow-duration="0.7s">
                <span className="wds-proc-card__ghost" aria-hidden="true">{step.step}</span>
                <span className="wds-proc-card__tag">Phase {step.step}</span>
                <h3 className="chy-heading-1 wds-proc-card__title">{step.title}</h3>
                <p className="chy-para-1 wds-proc-card__body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY CHOOSE US — the deal bento ── */}
      <div className="wds-deal-area pt-110 pb-110 bg-default fix">
        <div className="container chy-container-1">

          <div className="wds-deal-head">
            <div>
              <h5 className="chy-subtitle-1 wow fadeInDown">why choose us</h5>
              <h2 className="chy-title-1">Why SMEs Pick Our Web Design Team</h2>
            </div>
            <p className="chy-section-para-1 wow fadeInUp">
              Because we bring the kind of marketing muscle usually reserved for companies with skyscrapers on their letterhead, and we bring it to SMEs at prices that don&apos;t require a board meeting.
            </p>
          </div>

          <div className="wds-deal-grid">
            {diffCards.map((card, i) => (
              <div key={card.title} className={`wds-deal-card wds-deal-card--${i + 1} wow fadeInUp`} data-wow-delay={`${i * 0.1}s`}>
                {i === 0 && <span className="wds-deal-card__ghost" aria-hidden="true">12</span>}
                <span className="wds-deal-card__icon"><i className={card.icon}></i></span>
                <h3 className="chy-heading-1 wds-deal-card__title">{card.title}</h3>
                <p className="chy-para-1 wds-deal-card__body">{card.body}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── TESTIMONIALS — masonry review wall ── */}
      <div className="wds-reviews-area pt-110 pb-110">
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h5 className="chy-subtitle-1 wow fadeInDown">testimonials</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Website Design Reviews from Business Owners</h2>
            <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '640px', margin: '10px auto 0' }}>
              We&apos;d happily brag all day, but our clients tell it better. Here&apos;s what business owners say about working with us.
            </p>
          </div>
          <div className="wds-reviews-wall">
            {testimonials.map((t, i) => (
              <div key={i} className="wds-review-holder wow wds-unfold-in" data-wow-delay={`${i * 0.12}s`} data-wow-duration="0.8s">
                <figure className="wds-review-card">
                  <span className="wds-review-card__mark" aria-hidden="true">&ldquo;</span>
                  <blockquote className="wds-review-card__quote">{t.quote}</blockquote>
                  <figcaption className="wds-review-card__person">
                    <span className="wds-review-card__avatar">
                      {t.logo
                        ? <img src={t.logo} alt={t.name} loading="lazy" />
                        : <span className="wds-review-card__initials">{t.name.split(' ').slice(0, 2).map(w => w[0]).join('')}</span>
                      }
                    </span>
                    <span className="wds-review-card__who">
                      <span className="wds-review-card__name">{t.name}</span>
                      <span className="wds-review-card__bio">{t.bio}</span>
                    </span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ — sticky title + accordion split ── */}
      <div className="wds-faq-area pt-110 pb-110 bg-default">
        <div className="container chy-container-1">
          <div className="row">

            <div className="col-xl-4 col-lg-4">
              <div className="wds-faq-sticky mb-40">
                <h2 className="chy-title-1">Frequently Asked Questions</h2>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8">
              <div className="wds-faq-rows wow fadeInUp">
                {faqs.map((faq, i) => (
                  <div key={i} className="svc-accordion-row" tabIndex={0}>
                    <div className="svc-accordion-header">
                      <span className="svc-accordion-num">{`0${i + 1}`}</span>
                      <h3 className="chy-heading-1 svc-accordion-title">{faq.q}</h3>
                      <span className="svc-accordion-arrow"><i className="far fa-plus"></i></span>
                    </div>
                    <div className="svc-accordion-body">
                      <p className="chy-para-1 wds-faq-answer">{faq.a}</p>
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
