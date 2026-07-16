import TemplateScripts from "@/components/TemplateScripts";
import ServiceHero from "@/components/ServiceHero";
import { testimonials, type Testimonial } from "@/components/testimonialsData";
import ScrollScrubVideo from "@/components/ScrollScrubVideo";

export default function OohAdvertisingPage() {
  const stages: { num: string; short: string; title: string; body: string; image?: string }[] = [
    {
      num: '01',
      short: 'Planning',
      image: '/assets/img/ooh/stage-planning.webp',
      title: 'Strategic Planning: The Right Corner at the Right Time',
      body: "A brilliant ad in the wrong spot is just expensive wallpaper. We match formats, locations and timing to your exact audience: where they shop, which routes they drive, when they're paying attention. Precision first, so every dollar lands where it counts.",
    },
    {
      num: '02',
      short: 'Creative',
      image: '/assets/img/ooh/stage-creative.webp',
      title: 'Creative Design: Ads That Stop Traffic (Politely)',
      body: 'Outdoor creative plays by different rules. Your audience is walking, driving or wrangling a trolley, so you get about three seconds to land the message. We design bold, punchy creative built specifically for OOH formats: readable at a distance, memorable at a glance, impossible to unsee.',
    },
    {
      num: '03',
      short: 'Media Buying',
      image: '/assets/img/ooh/stage-media-buying.webp',
      title: 'Media Buying: Prime Spots Without the Prime Mark-Up',
      body: 'The best locations usually go to whoever has the biggest budget or the best connections. We bring the connections! Our media relationships secure premium placements at genuinely competitive rates, from major billboards to local screen networks.',
    },
    {
      num: '04',
      short: 'Reporting',
      image: '/assets/img/ooh/stage-reporting.webp',
      title: 'Campaign Reporting: Proof, Not Promises',
      body: "Outdoor doesn't have to be a leap of faith. We report on reach, frequency, dwell time and impressions, run post-campaign analysis, and track the uplift in searches and website visits while your ads are up. You'll know exactly what worked, and where to double down next time.",
    },
  ];

  const spots: { title: string; body: string; image?: string }[] = [
    {
      title: 'Grocery Store Screens',
      body: 'High-definition digital screens in the heart of busy supermarkets, seen by thousands of shoppers every week, right at the point of purchase. Weekly grocery runs mean weekly exposure, and familiarity turns into sales.',
      image: '/assets/img/ooh/grocery-screens.webp',
    },
    {
      title: 'Community Boards',
      body: "Static boards at the entrances and exits of busy grocery stores, greeting the same local shoppers week after week. Repetition builds recognition, and recognition builds the kind of trust money can't rush.",
      image: '/assets/img/ooh/community-boards.webp',
    },
    {
      title: 'Medical Centre Screens',
      body: 'Waiting rooms mean captive audiences and serious dwell time, all in an environment people inherently trust. Perfect for NDIS providers, home care, dental and allied health businesses building long-term local recognition.',
      image: '/assets/img/ooh/medical-screens.webp',
    },
    {
      title: 'Shopping Centres',
      body: 'Turn foot traffic into brand traction! Shopping centre displays put your business front and centre in bustling retail hubs, ideal for fashion, beauty, retail and service brands chasing maximum visibility.',
      image: '/assets/img/ooh/shopping-centres.webp',
    },
    {
      title: 'Digital Billboards',
      body: 'Big, bold and impossible to miss. Digital billboards in high-traffic zones give you flexibility and scale: swap creative in days, run time-sensitive promotions, and make the kind of impression that gets talked about at dinner.',
      image: '/assets/img/ooh/digital-billboards.webp',
    },
  ];

  const featuredNames = ['Bare', 'Coastal Skin & Beauty'];
  const oohTestimonials = [
    ...featuredNames
      .map((n) => testimonials.find((t) => t.name === n))
      .filter((t): t is Testimonial => !!t),
    ...testimonials.filter((t) => !featuredNames.includes(t.name)),
  ];

  const faqs = [
    {
      q: 'What types of OOH advertising do you offer?',
      a: 'The formats that work hardest for local businesses! Digital billboards in high-traffic zones, shopping centre displays, plus our specialty networks: grocery store screens, community boards and medical centre screens.',
    },
    {
      q: "Isn't outdoor advertising only for big brands?",
      a: 'It used to be, and plenty of agencies would love you to keep believing it. Our network partnerships unlock premium OOH placements at rates designed for SMEs, and hyper-local formats like grocery and medical screens mean you only pay to reach your actual service area, not the whole city.',
    },
    {
      q: 'What budget do I need for an OOH campaign?',
      a: "Local campaigns start from around $5,000, while city-wide or national campaigns typically start at $20,000 and up. Tell us your number and we'll build the biggest possible impact around it. No judgement, no upselling, just honest maths.",
    },
    {
      q: 'How do you measure OOH campaign effectiveness?',
      a: 'With data, not gut feel. We use audience reach data, foot traffic analysis and brand lift studies, and we tie it back to your digital numbers: uplift in searches, website visits and enquiries while your campaign is live. Outdoor and online working together tell you the full story.',
    },
    {
      q: 'How long does it take to launch an OOH campaign?',
      a: 'A typical campaign goes from briefing to launch in 3 to 6 weeks, covering creative, production and placement. In a hurry? Digital OOH formats can go live within days of creative approval. Perfect for flash sales, launches and seasonal pushes!',
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
    name: 'OOH Advertising',
    serviceType: 'Out-of-Home Advertising Services',
    provider: { '@type': 'Organization', name: 'Shopa Marketing' },
    areaServed: ['Australia', 'New Zealand'],
    review: oohTestimonials.map((t) => ({
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
        headline="OOH Advertising Your Customers Can't Scroll Past"
        subtext="Ad blockers can't touch a billboard, and nobody skips a bus. As the OOH advertising specialists for SMEs, we put your brand where customers live, shop, wait and move, at rates that finally make outdoor affordable for the little guy!"
        bgImage="/assets/img/breadcrumb/ooh-hero.webp"
      />

      {/* ── INTRO — editorial split ── */}
      <div id="ooh-intro-pin" className="wds-pin-wrap">
      <div className="wds-intro-area pt-120 pb-110 bg-default fix wds-pin-panel">
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-6 col-lg-6">
              <div className="wds-intro-content">
                <div className="section-title-wrap mb-35">
                  <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">
                    Out-of-Home Advertising That Makes Your Brand a Local Landmark
                  </h2>
                  <p className="chy-section-para-1 wow fadeInUp">
                    There&apos;s something the internet still can&apos;t do: stand on a street corner. Out-of-home advertising builds the kind of trust that only comes from being seen in the real world, again and again, right where your customers live, shop, wait and commute. See a brand online once, you scroll past. See it at your grocery store every week, and suddenly it&apos;s a household name.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    Here&apos;s the part most SMEs don&apos;t know: outdoor advertising isn&apos;t just for the big end of town anymore. We&apos;ve partnered with OOH networks to unlock premium placements at rates built for small and medium businesses. Big-brand visibility, without the big-brand invoice!
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    And you won&apos;t lift a finger. From creative concept and production through to placement, scheduling and performance reporting, our team handles the entire campaign while you get on with running your business.
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
                  src="/assets/img/services/ooh-scrub.mp4"
                  className="wds-intro-video wds-intro-video--full"
                  ariaLabel="OOH advertising: digital billboard and grocery store screen campaign for a small business"
                  pinContainerId="ooh-intro-pin"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>{/* /wds-pin-wrap */}

      {/* ── WHAT WE PROVIDE — expanding stage columns with marquee ── */}
      <section className="wds-under-section fix">
        {/* Scrolling background text — decorative */}
        <div className="shopa-floating-scrolltext" aria-hidden="true">
          <div className="shopa-floating-scrolltext__track">
            <span>OOH Advertising &nbsp;·&nbsp; OOH Advertising &nbsp;·&nbsp; OOH Advertising &nbsp;·&nbsp; OOH Advertising &nbsp;·&nbsp;</span>
            <span aria-hidden="true">OOH Advertising &nbsp;·&nbsp; OOH Advertising &nbsp;·&nbsp; OOH Advertising &nbsp;·&nbsp; OOH Advertising &nbsp;·&nbsp;</span>
          </div>
        </div>

        <div className="container chy-container-1">
          <div className="wds-culprit-head">
            <h2 className="chy-title-1">OOH Advertising Services From First Sketch to Final Report</h2>
            <p className="chy-section-para-1">
              Strategy, creative, media buying, production, installation and measurement: the full campaign lifecycle under one roof. No juggling suppliers, no chasing installers, no mystery about what your money did.
            </p>
          </div>

          <div className="wds-culprits">
            {stages.map((card) => (
              <div key={card.num} className="wds-culprit" tabIndex={0}>
                <div className="wds-culprit__closed" aria-hidden="true">
                  <span className="wds-culprit__closed-num">{card.num}</span>
                  <span className="wds-culprit__closed-label">{card.short}</span>
                  <span className="wds-culprit__closed-tip"><i className="far fa-plus"></i></span>
                </div>
                <div className="wds-culprit__open">
                  {card.image && <img className="wds-culprit__img" src={card.image} alt={card.title} loading="lazy" />}
                  <span className="wds-culprit__ghost" aria-hidden="true">{card.num}</span>
                  <span className="wds-culprit__tag">Stage {card.num}</span>
                  <h3 className="chy-heading-1 wds-culprit__title">{card.title}</h3>
                  <p className="chy-para-1 wds-culprit__body">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHERE WE ADVERTISE — 8-format hover grid ── */}
      <div className="wds-spots-area pt-110 pb-110 bg-default fix">
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h5 className="chy-subtitle-1 wow fadeInDown">where we advertise</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Eight Ways to Be Everywhere Your Customers Go</h2>
          </div>

          <div className="wds-spot-grid">
            {spots.map((spot, i) => (
              <div key={spot.title} className="wds-spot wow fadeInUp" data-wow-delay={`${(i % 3) * 0.08}s`}>
                {spot.image && <img className="wds-spot__img" src={spot.image} alt={spot.title} loading="lazy" />}
                <span className="wds-spot__ghost" aria-hidden="true">{`0${i + 1}`}</span>
                <h3 className="chy-heading-1 wds-spot__title">{spot.title}</h3>
                <p className="chy-para-1 wds-spot__body">{spot.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── THE CHALLENGE — gradient band with mini billboard ── */}
      <div className="wds-ledger-area pt-110 pb-110" data-navbar-dark="true">
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-6 col-lg-6">
              <div className="mb-30">
                <h2 className="chy-title-1" style={{ color: '#fff' }}>
                  Real-World Attention Is Priceless. Wasted Placements Aren&apos;t.
                </h2>
                <p className="chy-section-para-1 wow fadeInUp" style={{ color: 'rgba(255,255,255,0.95)', marginTop: '18px' }}>
                  In a world drowning in digital ads, physical advertising cuts through in ways screens simply can&apos;t. No ad blockers, no skip buttons, no doom-scrolling past your message. But here&apos;s the catch: OOH advertising is a specialist&apos;s game. Formats, audience data, network relationships, creative rules, timing windows. Get one wrong and your budget quietly evaporates on placements nobody sees.
                </p>
                <p className="chy-section-para-1 wow fadeInUp" style={{ color: 'rgba(255,255,255,0.95)', marginTop: '16px' }}>
                  That&apos;s where we come in. With thousands of campaigns behind us and partnerships across our OOH networks, we know exactly which placements pull their weight and which ones just look good in a proposal. Every dollar works, or it doesn&apos;t go out the door.
                </p>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="wds-bill-wrap wow fadeInRight" data-wow-duration="1.2s">
                <div className="wds-billboard">
                  <div className="wds-billboard__screen">
                    <span className="wds-billboard__line">Seen.</span>
                    <span className="wds-billboard__line wds-billboard__line--dim">Not skipped.</span>
                  </div>
                  <div className="wds-billboard__legs"><span></span><span></span></div>
                </div>
                <div className="wds-bill-chips">
                  <span className="wds-bill-chips__label">Doesn&apos;t exist out here</span>
                  <div className="wds-bill-chips__row">
                    <span className="wds-bill-chip"><span className="wds-bill-chip__x">&times;</span>Ad blockers</span>
                    <span className="wds-bill-chip"><span className="wds-bill-chip__x">&times;</span>Skip buttons</span>
                    <span className="wds-bill-chip"><span className="wds-bill-chip__x">&times;</span>Doom-scrolling</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS — masonry review wall (OOH stories first) ── */}
      <div className="wds-reviews-area pt-110 pb-110">
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h5 className="chy-subtitle-1 wow fadeInDown">testimonials</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">OOH Results Business Owners Rave About</h2>
            <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '640px', margin: '10px auto 0' }}>
              We&apos;d happily brag all day, but our clients tell it better. Here&apos;s what business owners say about working with us.
            </p>
          </div>
          <div className="wds-reviews-wall">
            {oohTestimonials.map((t, i) => (
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
