import type { Metadata } from "next";
import TemplateScripts from "@/components/TemplateScripts";
import ServiceHero from "@/components/ServiceHero";
import { testimonials } from "@/components/testimonialsData";

export const metadata: Metadata = {
  title: 'Social Media Advertising Australia | Ads That Convert | Shopa',
  description: 'Social media ads for Australian SMEs. Facebook, Instagram, TikTok and LinkedIn campaigns built on real data, tied to real revenue. Not just boosted posts!',
};

export default function SocialMediaPage() {
  const provideItems = [
    {
      title: 'Audience Targeting: Find Your People in the Crowd',
      body: "Spraying ads at everyone is the fastest way to pay for strangers who'll never buy. We build laser-precise audiences from demographics, interests, behaviours, lookalikes and retargeting, so your ads land in front of people already halfway to yes. Right person, right moment, no wastage!",
      icon: 'flaticon-target',
    },
    {
      title: 'Ad Creative: Made to Stop Thumbs',
      body: 'The average thumb scrolls metres of feed a day, and your ad has a fraction of a second to interrupt the journey. We craft scroll-stopping creative across static, video, carousel and stories: bold enough to earn the pause, sharp enough to earn the click.',
      icon: 'flaticon-web-design-1',
    },
    {
      title: 'Campaign Management: Never Set, Never Forget',
      body: "Launching a campaign and walking away is how budgets go to die. We monitor daily, A/B test constantly, tune bids and shift budget to whatever's winning. Your cost per result keeps dropping while your competitors wonder why theirs keeps climbing.",
      icon: 'flaticon-digital-campaign',
    },
    {
      title: 'Performance Reporting: Numbers That Speak Human',
      body: "No jargon avalanches, no vanity metrics dressed up as victory. Each month you get a clear view of reach, engagement, leads, conversions and ROAS, plus what we're doing next and why. You'll always know what your money did and what it's doing tomorrow.",
      icon: 'flaticon-statistics',
    },
  ];

  const faqs = [
    {
      q: 'Which social platforms do you advertise on?',
      a: "Facebook, Instagram, TikTok, LinkedIn, Pinterest and YouTube. But here's the important part: we don't put you everywhere just to send a bigger invoice. We recommend the mix based on where your customers actually spend their time, whether that's tradies on Facebook or Gen Z on TikTok.",
    },
    {
      q: "Why aren't my boosted posts working?",
      a: "Because boosting is the vending machine version of social advertising: convenient, but you get what you get. Proper campaigns use custom audiences, retargeting, conversion tracking, A/B testing and objective-based bidding that the boost button simply doesn't offer. Same platforms, completely different machine under the hood.",
    },
    {
      q: 'What ad budget do I need to get started?',
      a: "We recommend a minimum ad spend of $1,500 per month per platform. That's the level where the data gets meaningful and the optimisation gets sharp. Highly targeted local campaigns can work with less. Our management fee is separate and quoted upfront, because surprises belong at birthdays, not on invoices.",
    },
    {
      q: 'Do you create the ad creative as well?',
      a: "Yes, the whole kit! Copywriting, graphic design and video editing, all in-house, all built for the platform it's running on. Already have brand assets you love? We'll happily work with those too. Either way, creative gets tested and refined based on performance data, not opinions.",
    },
    {
      q: 'How soon will I see results?',
      a: 'Faster than SEO, slower than magic. Most campaigns show results within the first 2 to 4 weeks. Month one is the learning phase, where we test audiences and creative to see what bites. Months two and three are where things get exciting, as the data compounds and performance climbs.',
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
    name: 'Social Media Advertising',
    serviceType: 'Social Media Advertising Services',
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
        headline="Social Media Ads That Turn Scrollers Into Shoppers"
        subtext="Boosting posts and hoping for the best? That's not a strategy, that's a raffle ticket. As the social media advertising agency Australian SMEs trust, we build Meta, Instagram and TikTok campaigns on real audience data, and tie every dollar back to revenue."
      />

      {/* ── INTRO — editorial split ── */}
      <div className="wds-intro-area pt-120 pb-110 bg-default fix">
        <div className="container chy-container-1">
          <div className="row align-items-center">

            <div className="col-xl-6 col-lg-6">
              <div className="wds-intro-content">
                <div className="section-title-wrap mb-35">
                  <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">
                    Social Media Advertising That Pays Its Way
                  </h2>
                  <p className="chy-section-para-1 wow fadeInUp">
                    Scrolling is the new strolling, and the feed is the new main street. Your customers wander through it for hours every day, past thousands of shopfronts fighting for a glance. The brands that win aren&apos;t the loudest. They&apos;re the ones who know exactly who&apos;s walking past, and exactly what makes them stop.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    That&apos;s our home turf. Our social media advertising gets Australian businesses in front of precisely the right people on Facebook, Instagram, TikTok, LinkedIn and beyond, with creative they actually want to look at. Likes are lovely, but we&apos;re greedy about the things that matter: leads, sales and brand awareness you can measure.
                  </p>
                  <p className="chy-section-para-1 wow fadeInUp">
                    Audience intelligence, creative strategy and relentless optimisation, all pulling in one direction: your bottom line.
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
                {/* Real image pending — alt: "Social media advertising Australia: Facebook and Instagram ad campaign results for an Australian small business" */}
                <div className="wds-ph wds-ph--intro">
                  <span>Image Placeholder — 760 × 640</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── WHAT WE PROVIDE — service console with marquee ── */}
      <section className="wds-under-section fix">
        {/* Scrolling background text — decorative */}
        <div className="shopa-floating-scrolltext" aria-hidden="true">
          <div className="shopa-floating-scrolltext__track">
            <span>Social Media Ads &nbsp;·&nbsp; Social Media Ads &nbsp;·&nbsp; Social Media Ads &nbsp;·&nbsp; Social Media Ads &nbsp;·&nbsp;</span>
            <span aria-hidden="true">Social Media Ads &nbsp;·&nbsp; Social Media Ads &nbsp;·&nbsp; Social Media Ads &nbsp;·&nbsp; Social Media Ads &nbsp;·&nbsp;</span>
          </div>
        </div>

        <div className="container chy-container-1">
          <div className="wds-deal-head">
            <h2 className="chy-title-1">Social Media Ad Services That Sweat Every Dollar</h2>
            <p className="chy-section-para-1 wow fadeInUp">
              From strategy and audience building to creative production and daily fine-tuning, we run every element of your social media advertising, so your budget works harder than a barista on Monday morning.
            </p>
          </div>

          <div className="wds-svc-console wow fadeInUp">
            {provideItems.map((item, i) => (
              <div key={item.title} className="wds-svc-item" tabIndex={0}>
                <div className="wds-svc-item__row">
                  <span className="wds-svc-item__num">{`0${i + 1}`}</span>
                  <h3 className="chy-heading-1 wds-svc-item__title">{item.title}</h3>
                  <span className="wds-svc-item__arrow"><i className="fa-solid fa-right-long"></i></span>
                </div>
                <div className="wds-svc-item__panel">
                  <span className="wds-svc-item__ghost" aria-hidden="true">{`0${i + 1}`}</span>
                  <span className="wds-svc-item__icon"><i className={item.icon}></i></span>
                  <span className="wds-svc-item__panel-title">{item.title}</span>
                  <p className="chy-para-1 wds-svc-item__body">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE CHALLENGE — gradient statement band ── */}
      <div className="wds-ledger-area pt-110 pb-110" data-navbar-dark="true">
        <div className="container chy-container-1">
          <div className="wds-ledger-head" style={{ marginBottom: 0 }}>
            <h2 className="chy-title-1" style={{ color: '#fff' }}>
              The Algorithm Changed Again. Good Thing We Never Sleep.
            </h2>
            <div>
              <p className="chy-section-para-1 wow fadeInUp" style={{ color: 'rgba(255,255,255,0.95)' }}>
                Here&apos;s the uncomfortable truth about social media advertising: the platforms move the goalposts constantly. Algorithms shift, ad formats appear and vanish, targeting rules get rewritten overnight. What worked brilliantly in March can quietly burn money by June, and the platforms won&apos;t send you a memo about it.
              </p>
              <p className="chy-section-para-1 wow fadeInUp" style={{ color: 'rgba(255,255,255,0.95)', marginTop: '16px' }}>
                That&apos;s why DIY ads and set-and-forget agencies get expensive fast. Our team lives inside these platforms every day, spotting the changes early and adjusting your campaigns before performance dips. You stay profitable while everyone else is still reading the update notes!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS — masonry review wall ── */}
      <div className="wds-reviews-area pt-110 pb-110">
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-50">
            <h5 className="chy-subtitle-1 wow fadeInDown">testimonials</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Social Media Results Australian Business Owners Rave About</h2>
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
