import TemplateScripts from "@/components/TemplateScripts";
import ServiceHero from "@/components/ServiceHero";
import { testimonials, Testimonial } from "@/components/testimonialsData";
import ScrollScrubVideo from "@/components/ScrollScrubVideo";

export default function GraphicDesignPage() {
  // Artwork/print-specific testimonials lead on this page
  const featuredNames = ['Fountain College', 'Hutt Dental Hub'];
  const gfxTestimonials = [
    ...featuredNames
      .map((n) => testimonials.find((t) => t.name === n))
      .filter((t): t is Testimonial => !!t),
    ...testimonials.filter((t) => !featuredNames.includes(t.name)),
  ];

  const provideItems: { title: string; body: string; icon: string; image?: string }[] = [
    {
      title: "Brand Identity: A Look That's Unmistakably Yours",
      body: "Your logo, typography, colour palette and brand guidelines, crafted into an identity that's recognisable at a glance and impossible to confuse with the shop down the road. One consistent look across every touchpoint, because customers trust what they recognise.",
      icon: 'flaticon-badge',
      image: '/assets/img/gfx/swatch-brand.webp',
    },
    {
      title: 'Marketing Collateral: Print That Pulls Its Weight',
      body: 'Brochures, flyers, business cards, presentations and exhibition materials that do more than fill a drawer. Each piece is designed to communicate your value clearly and professionally, so the thing you hand over keeps selling long after the handshake.',
      icon: 'flaticon-read',
      image: '/assets/img/gfx/swatch-collateral.webp',
    },
    {
      title: 'Digital Assets: Made for the Feed and the Inbox',
      body: 'Social media graphics, email templates, banner ads and website visuals, all optimised for the platform they live on. Designed to earn the pause, the click and the follow, in spaces where everyone is competing for the same eyeballs.',
      icon: 'flaticon-inbox',
      image: '/assets/img/gfx/swatch-digital.webp',
    },
    {
      title: 'Ad Creative: Designs That Sell, Not Just Sparkle',
      body: "Performance-focused creative for Google Display, social media, OOH and print. Beautiful, yes, but built with one eye permanently on the results: stopping your audience mid-scroll or mid-stride and landing your message in the seconds you've got.",
      icon: 'flaticon-bullhorn',
      image: '/assets/img/gfx/swatch-adcreative.webp',
    },
  ];

  const faqs = [
    {
      q: 'Do I need brand guidelines before starting?',
      a: "Not at all. If you don't have brand guidelines, we'll create them as part of a brand identity project, giving your business a rulebook every future designer will thank you for. Already have guidelines? We'll work within them faithfully, so everything new feels like it belongs.",
    },
    {
      q: 'What file formats will I receive?',
      a: "Everything you need, and everything is yours to keep: PNG, JPG, SVG, PDF and the editable source files (AI, EPS or Figma). Print projects come as print-ready PDFs with correct colour profiles, bleed and trim marks. No hostage files, no 'contact us for the original', no drama.",
    },
    {
      q: 'How many revision rounds are included?',
      a: "Two rounds on every project, which covers the vast majority of feedback. Need more? Additional rounds are available at an hourly rate. Our secret for keeping revisions low is a thorough brief upfront, because ten minutes of good questions saves three rounds of 'hmm, not quite'.",
    },
    {
      q: 'Can you match our existing brand style?',
      a: "Absolutely, it's one of our specialties. Share your existing brand assets and our designers will extend your visual identity so seamlessly that nobody will be able to tell where the old work ends and ours begins. Your brand stays your brand, just with more of it.",
    },
    {
      q: 'Do you handle one-off jobs, or only big projects?',
      a: 'Both, happily! Whether you need a single flyer for the weekend market or a complete brand identity with the lot, you get the same designers, the same quality and the same attention. Plenty of our biggest clients started with one small job that went well.',
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
    name: 'Graphic Design',
    serviceType: 'Graphic Design Services',
    provider: { '@type': 'Organization', name: 'Shopa Marketing' },
    areaServed: ['Australia', 'New Zealand'],
    review: gfxTestimonials.map((t) => ({
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
        headline="Graphic Design That Makes People Look Twice"
        subtext="Your brand gets about a heartbeat to make its first impression, and there are no do-overs. Our graphic design services give Australian SMEs logos, brand identities and creative that don't just get noticed, they get remembered!"
        bgImage="/assets/img/breadcrumb/gfx-hero.webp"
      />

      {/* ── INTRO — editorial split ── */}
      <div id="gfx-intro-pin" className="wds-pin-wrap">
      <div className="wds-intro-area pt-120 pb-110 bg-default fix wds-pin-panel">
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-6 col-lg-6">
              <div className="wds-intro-content">
                <div className="section-title-wrap mb-35">
                  <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">
                    Brand Identity and Design That Speaks Before You Do
                  </h2>
                  <p className="chy-section-para-1 wow fadeInUp">
                    Before anyone reads a word of your website, hears your pitch or meets your team, they&apos;ve already judged your design. Unfair? Completely. True? Ask yourself what you thought the last time you saw a business card printed on someone&apos;s home printer.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    We make sure that snap judgement lands in your favour. From logo design and full brand identity systems to social media graphics, print collateral and advertising creative, our designers pair strategic thinking with serious aesthetic firepower. Every colour, font and layout has a job to do: making your business look as good as it actually is.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    And because we&apos;re a full marketing agency rather than a design studio in a bubble, everything we create is built to perform where it lives: on the feed, on the shelf, on the billboard and everywhere in between.
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
                  src="/assets/img/services/gfx-scrub.mp4"
                  className="wds-intro-video wds-intro-video--full"
                  ariaLabel="Graphic design services Australia: brand identity, logo and marketing collateral for an Australian small business"
                  pinContainerId="gfx-intro-pin"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>{/* /wds-pin-wrap */}

      {/* ── WHAT WE PROVIDE — swatch cards with marquee ── */}
      <section className="wds-under-section fix">
        {/* Scrolling background text — decorative */}
        <div className="shopa-floating-scrolltext" aria-hidden="true">
          <div className="shopa-floating-scrolltext__track">
            <span>Graphic Design &nbsp;·&nbsp; Graphic Design &nbsp;·&nbsp; Graphic Design &nbsp;·&nbsp; Graphic Design &nbsp;·&nbsp;</span>
            <span aria-hidden="true">Graphic Design &nbsp;·&nbsp; Graphic Design &nbsp;·&nbsp; Graphic Design &nbsp;·&nbsp; Graphic Design &nbsp;·&nbsp;</span>
          </div>
        </div>

        <div className="container chy-container-1">
          <div className="wds-deal-head">
            <h2 className="chy-title-1">Graphic Design Services for Every Corner of Your Brand</h2>
            <p className="chy-section-para-1 wow fadeInUp">
              Brand identity, marketing collateral, digital assets and advertising creative: all designed under one roof, all singing from the same style guide. Consistency isn&apos;t glamorous, but it&apos;s what turns a business into a brand.
            </p>
          </div>

          <div className="wds-swatch-grid">
            {provideItems.map((item, i) => (
              <div key={item.title} className="wds-swatch wow fadeInUp" data-wow-delay={`${(i % 2) * 0.12}s`}>
                <span className="wds-swatch__ghost" aria-hidden="true">{`0${i + 1}`}</span>
                {item.image
                  ? <img className="wds-swatch__img" src={item.image} alt={item.title} loading="lazy" />
                  : <span className="wds-swatch__icon"><i className={item.icon}></i></span>
                }
                <h3 className="chy-heading-1 wds-swatch__title">{item.title}</h3>
                <p className="chy-para-1 wds-swatch__body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE CHALLENGE — gradient band with brand consistency panel ── */}
      <div className="wds-ledger-area pt-110 pb-110" data-navbar-dark="true">
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-6 col-lg-6">
              <div className="mb-30">
                <h2 className="chy-title-1" style={{ color: '#fff' }}>
                  Cheap Design Is the Most Expensive Thing You&apos;ll Ever Buy
                </h2>
                <p className="chy-section-para-1 wow fadeInUp" style={{ color: 'rgba(255,255,255,0.95)', marginTop: '18px' }}>
                  Here&apos;s what inconsistent, low-quality design actually costs: trust. When your logo looks different on every platform, your flyers clash with your website and your ads look homemade, customers quietly downgrade what they think of your product too. The design didn&apos;t just fail to help. It actively worked against you.
                </p>
                <p className="chy-section-para-1 wow fadeInUp" style={{ color: 'rgba(255,255,255,0.95)', marginTop: '16px' }}>
                  The flip side is well documented: businesses that invest in professional design consistently outperform competitors on conversion rates, customer loyalty and the prices they can charge. Good design pays for itself, then keeps paying. Our team makes sure every visual your business puts into the world reflects the quality of what you actually deliver!
                </p>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="wds-brandfix wow fadeInRight" data-wow-duration="1.2s">
                <div className="wds-brandfix__head">
                  <i className="fa-solid fa-palette"></i>
                  <span className="wds-brandfix__title">Your logo, out in the wild</span>
                </div>
                <div className="wds-brandfix__tiles">
                  <span className="wds-brandfix__tile">Your Logo</span>
                  <span className="wds-brandfix__tile">Your Logo</span>
                  <span className="wds-brandfix__tile">Your Logo</span>
                  <span className="wds-brandfix__tile">Your Logo</span>
                  <span className="wds-brandfix__tile">Your Logo</span>
                  <span className="wds-brandfix__tile">Your Logo</span>
                </div>
                <div className="wds-brandfix__foot">
                  <span className="wds-brandfix__foot-messy">Six platforms, six different logos. Customers notice.</span>
                  <span className="wds-brandfix__foot-fixed">One consistent look across every touchpoint.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS — masonry review wall (design stories first) ── */}
      <div className="wds-reviews-area pt-110 pb-110">
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h5 className="chy-subtitle-1 wow fadeInDown">testimonials</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Design Work Australian Business Owners Rave About</h2>
            <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '640px', margin: '10px auto 0' }}>
              We&apos;d happily brag all day, but our clients tell it better. Here&apos;s what business owners across Australia and New Zealand say about working with us.
            </p>
          </div>
          <div className="wds-reviews-wall">
            {gfxTestimonials.map((t, i) => (
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

      {/* ── FAQ — sticky title + hover accordion rows ── */}
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
