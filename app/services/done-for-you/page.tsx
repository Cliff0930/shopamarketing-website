import TemplateScripts from "@/components/TemplateScripts";
import PricingSection from "@/components/PricingSection";
import ServiceHero from "@/components/ServiceHero";
import { testimonials } from "@/components/testimonialsData";

export default function DoneForYouPage() {
  const focusItems = [
    'Building the foundation',
    'Gathering campaign data',
    'Testing creatives and audiences',
    'Optimising performance',
    'Improving conversion rates',
    'Strengthening online visibility',
  ];

  const teamRoles = [
    'Marketing Strategist',
    'Designer',
    'SEO Specialist',
    'Ads Expert',
    'Content Creator',
    'Dedicated Account Manager',
  ];

  const faqs = [
    {
      q: 'What exactly is included in a Done For You package?',
      a: "Everything on the plan card, genuinely everything: website management, SEO, Google and Meta ads including the ad spend, creative design, brand videos, organic social posting, blogs, AI search visibility across ChatGPT and Gemini, plus a custom dashboard where you can watch it all work. One fee, no surprise extras, no 'that'll be additional' emails.",
    },
    {
      q: 'How is this different from hiring an in-house marketer?',
      a: "One good in-house marketer costs $80,000+ a year, and even the best can't be a strategist, designer, SEO specialist, ads expert and videographer at once. Nobody can! For a fraction of that, you get a whole team of specialists who do this all day, every day, with no leave, no notice periods and no birthday cake obligations.",
    },
    {
      q: 'Are there lock-in contracts?',
      a: "No. We keep clients with results, not paperwork. We do recommend giving your campaigns 3 to 4 months to build proper momentum, because that's honestly how long good marketing takes to compound. But you're free to leave any time, and if you do, we'll hand everything over cleanly.",
    },
    {
      q: 'When will I start seeing results?',
      a: "Paid ads start moving quickly, often within weeks. The full engine, SEO climbing, audiences dialled in, creative tested and conversion rates optimised, typically hits its stride at the 3 to 4 month mark. From there, it compounds. We'll never promise overnight miracles, because we'd rather keep you for years than impress you for a fortnight.",
    },
    {
      q: 'Which plan is right for my business?',
      a: "That's exactly what the free strategy call is for! Tell us your goals, your market and your appetite for growth, and we'll recommend the plan that fits, even if it's the cheaper one. You can move between plans as your business grows, and plenty of our clients do.",
    },
    {
      q: "What does 'guaranteed impressions' mean?",
      a: "Every plan guarantees a minimum number of times your brand is seen each month across ads and placements, from 100,000 on Starter to 500,000 on Dominate. It's our way of putting a floor under your visibility, so you always know the minimum your investment is delivering.",
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
    name: 'Done For You Marketing Packages',
    serviceType: 'Full-Service Marketing Management',
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
        headline="Your Entire Marketing Department. One Monthly Fee."
        subtext="Why juggle five agencies, three freelancers and a nephew who's 'good with computers'? Our Done For You packages hand your whole marketing operation to one senior team: strategy, execution and reporting, end to end, without the cost of hiring in-house."
      />

      {/* ── INTRO — editorial split ── */}
      <div className="wds-intro-area pt-120 pb-110 bg-default fix">
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-6 col-lg-6">
              <div className="wds-intro-content">
                <div className="section-title-wrap mb-35">
                  <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">
                    Built for Businesses That Want Growth, Not More Marketing Homework
                  </h2>
                  <p className="chy-section-para-1 wow fadeInUp">
                    Most marketing providers hand you a menu. SEO or social? Google Ads or content? It&apos;s like asking someone to assemble a car from the parts catalogue. We start with a better question: what are you actually trying to achieve? More enquiries? More customers? A name people recognise at the school gate and the footy club?
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    Then we build backwards from the answer. Our Done For You packages combine the channels that make sense for YOUR business: website, SEO, Google Ads, social media, creative, content and AI search visibility, and run them as one coordinated strategy with one team and one report that actually makes sense.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    After 5,000+ campaigns across Australia and New Zealand, we can tell you the worst-kept secret in marketing: the best results never come from a single channel. They come from channels working together, keeping your brand visible, trusted and top of mind wherever your customers look. That&apos;s exactly what these packages deliver!
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
                {/* Real image pending — alt: "Done for you marketing Australia: one team managing website, SEO, ads and social media for an Australian small business" */}
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
                  <h2 className="chy-title-1 chy-split-in-right chy-split-text">No Lock-In Contracts. Just Results Worth Staying For.</h2>
                  <p className="chy-section-para-1 wow fadeInUp">
                    We don&apos;t do handcuffs. No lengthy contracts, no exit fees, no fine print that needs a lawyer and a strong coffee. Our clients stay because the strategy, execution and results make sense, not because a document says they must.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    But let&apos;s be upfront about one thing, because honesty is cheaper than disappointment: real marketing momentum takes time. Building brand awareness, gathering campaign data, optimising performance and climbing SEO rankings typically takes 3 to 4 months before the consistent traction kicks in. Anyone who promises otherwise is selling you a lottery ticket, not a strategy.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    So while you&apos;re free to leave any time, we recommend giving the machine time to warm up properly. And if you ever decide to take things in-house or in another direction, we&apos;ll hand everything over smoothly, with a smile and zero drama.
                  </p>
                </div>
                <a href="/contact-us" className="chy-pr-btn-1 wow fadeInLeft">
                  <span className="text">Get a Quote</span>
                  <span className="icon"><i className="fa-solid fa-right-long"></i></span>
                </a>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="wds-momentum wow fadeInRight" data-wow-duration="1.2s">
                <h4 className="chy-heading-1 wds-momentum__title">The first few months are focused on:</h4>
                <div className="wds-momentum__track">
                  {focusItems.map((item, i) => (
                    <div key={item} className="wds-momentum__step wow fadeInUp" data-wow-delay={`${i * 0.08}s`}>
                      <span className="wds-momentum__node"><i className="flaticon-check"></i></span>
                      <span className="wds-momentum__num">{`0${i + 1}`}</span>
                      <span className="wds-momentum__label">{item}</span>
                    </div>
                  ))}
                  <div className="wds-momentum__finish wow fadeInUp" data-wow-delay=".5s">
                    <span className="wds-momentum__finish-badge">Months 3&ndash;4</span>
                    <span className="wds-momentum__finish-text">Consistent traction kicks in</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── YOUR ENTIRE MARKETING TEAM — gradient band ── */}
      <div className="wds-team-band pt-100 pb-100" data-navbar-dark="true" style={{ background: 'var(--chy-gd-1)' }}>
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-6 col-lg-6">
              <div className="mb-30">
                <h2 className="chy-title-1" style={{ color: '#fff' }}>A Full Marketing Team, Minus the Payroll</h2>
                <p className="chy-section-para-1 wow fadeInUp" style={{ marginTop: '18px', color: 'rgba(255,255,255,0.95)' }}>
                  Hiring a strategist, designer, SEO specialist, ads expert and content creator would cost you several salaries, a bigger office and a small mountain of HR paperwork. Or you could have all of them tomorrow, for one monthly fee. From brand awareness and lead generation through to AI search visibility and live reporting dashboards, Shopa Marketing runs the entire process end to end while you run your business.
                </p>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="wds-payroll wow fadeInRight" data-wow-duration="1.2s">
                <div className="wds-payroll__head">
                  <span className="wds-payroll__head-label">If you hired in-house</span>
                  <span className="wds-payroll__head-icon"><i className="flaticon-team"></i></span>
                </div>
                {teamRoles.map((role, i) => (
                  <div key={role} className="wds-payroll__row">
                    <span className="wds-payroll__role">
                      <span className="wds-payroll__role-num">{`0${i + 1}`}</span>
                      {role}
                    </span>
                    <span className="wds-payroll__salary">a full salary</span>
                  </div>
                ))}
                <div className="wds-payroll__total">
                  <span className="wds-payroll__total-label">Your entire team, all-inclusive</span>
                  <span className="wds-payroll__total-value">One monthly fee</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS — masonry review wall ── */}
      <div className="wds-reviews-area pt-110 pb-110">
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h5 className="chy-subtitle-1 wow fadeInDown">testimonials</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Results Australian Business Owners Rave About</h2>
            <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '640px', margin: '10px auto 0' }}>
              We&apos;d happily brag all day, but our clients tell it better. Here&apos;s what business owners across Australia and New Zealand say about working with us.
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
