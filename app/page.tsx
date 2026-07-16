import TemplateScripts from '@/components/TemplateScripts';
import { getPosts, featuredImage, formatDate, authorAvatar } from '@/lib/wordpress';
import ServicesTicker from '@/components/ServicesTicker';
import HeroVideoScrub from '@/components/HeroVideoScrub';
import StarAnimationTrigger from '@/components/StarAnimationTrigger';
import FloatingCardsGSAP from '@/components/FloatingCardsGSAP';
import ServiceTestimonials from '@/components/ServiceTestimonials';
import { homeServices } from '@/components/homeServicesData';
import { testimonials } from '@/components/testimonialsData';

export const revalidate = 3600;

export default async function HomePage() {
  const latestPosts = await getPosts(3);

  const whyItems = [
    { icon: 'flaticon-digital-campaign', title: 'One Strategy Across Every Channel', body: "Digital and physical, online and offline, all working from the same playbook. Because five channels running five different strategies isn't marketing, it's an expensive argument." },
    { icon: 'flaticon-team', title: 'A Real Person Who Knows Your Business', body: 'You work directly with a dedicated account manager who knows your goals, your market and your name. No call centres, no ticket queues, no retelling your story every time you ring.' },
    { icon: 'flaticon-price-tag', title: 'Transparent, All-Inclusive Pricing', body: "Everything defined upfront, in writing. What's in your proposal is exactly what you pay. No hidden fees, no sneaky extras, no nasty surprises. Ever." },
    { icon: 'flaticon-trophy', title: "Experience You Can't Fake", body: '45+ years of combined experience, 5,000+ campaigns delivered, 1,000+ businesses across Australia and New Zealand. That track record shows up in every campaign we run for you.' },
  ];

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Shopa Marketing',
    url: 'https://shopamarketing.com.au',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '319' },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      reviewBody: t.quote,
      author: { '@type': 'Organization', name: t.name },
    })),
  };

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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* preloader */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>

      {/* ── HERO SCROLL CONTAINER — tall so sticky panel scrubs the video ── */}
      <div id="hero-section" style={{ height: '250vh' }}>
        <div
          className="chy-hero-1-area chy-class-add fix"
          style={{ position: 'sticky', top: 0, height: '100vh', background: 'transparent', overflow: 'hidden', zIndex: 10 }}
        >
          {/* Video — scrubbed by scroll, not autoplay. src is set in JS (HeroVideoScrub)
              after the file is fully fetched as a blob, so this element never triggers
              its own network request — avoids downloading the file twice. */}
          <video
            id="hero-bg-video"
            muted
            playsInline
            preload="none"
            poster="/assets/img/hero/hero-poster-v2.webp"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'right center',
              zIndex: 0,
            }}
          />

          {/* Left fade — text readability */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '55%',
            height: '100%',
            background: 'linear-gradient(to right, #faf8ff 55%, transparent 100%)',
            zIndex: 1,
          }} />


          <div className="container chy-container-1" style={{ position: 'relative', zIndex: 2 }}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="chy-hero-1-content">
                  <h5 className="chy-subtitle-1 subtitle wow fadeInLeft" data-wow-duration="3s">Your Go-To Marketing Agency</h5>
                  <h1 className="chy-heading-1 title chy-split-in-hero-1 chy-split-text-2">You Run the Business. <br /> We&apos;ll Bring the&nbsp;Spotlight.</h1>
                  <p className="chy-para-1 disc wow fadeInLeft" data-wow-duration="3s">
                    Being brilliant is your job. Making you famous is ours. <br /> We take your business everywhere your customers look: search results, social feeds, grocery stores, medical centres and billboards nationwide. One dedicated team, one clear strategy, and a spotlight that stays on.
                  </p>
                  <div className="btn-wrap">
                    <a href="/contact-us" className="chy-pr-btn-1 wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="3s">
                      <span className="text">Get a Free Strategy Session</span>
                      <span className="icon"><i className="fa-solid fa-right-long"></i></span>
                    </a>
                  </div>

                  {/* ── AS FEATURED IN ── */}
                  <div className="featured-in-strip wow fadeInLeft" data-wow-delay=".7s" data-wow-duration="3s">
                    <span className="featured-in-label">As Featured In</span>
                    <div className="featured-in-logos">
                      <a
                        className="logo-pill"
                        href="https://ceoweekly.com/making-marketing-human-again-how-one-founder-is-reshaping-sme-advertising-across-australia-and-new-zealand/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Read the Shopa Marketing feature in CEO Weekly"
                      >
                        <img src="/assets/img/press/ceo-weekly.webp" alt="CEO Weekly" />
                      </a>
                      <a
                        className="featured-in-logo-slot"
                        href="https://markets.businessinsider.com/news/stocks/shopa-marketing-introduces-a-new-multi-platform-advertising-model-designed-exclusively-for-smes-across-australia-and-new-zealand-1035614816"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Read the Shopa Marketing feature on Business Insider"
                      >
                        <img src="/assets/img/press/business-insider.png" alt="Business Insider" />
                      </a>
                      <a
                        className="featured-in-logo-slot"
                        href="https://theguardian.com.au/recommended/partner-content/2026/03/06/growing-with-purpose-shopa-marketings-strengthened-position-in-new-zealand/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Read the Shopa Marketing feature in The Guardian"
                      >
                        <img src="/assets/img/press/the-guardian.webp" alt="The Guardian" />
                      </a>
                      <a
                        className="featured-in-logo-slot"
                        href="https://apnews.com/press-release/marketersmedia/shopa-marketing-strengthens-position-as-go-to-advertising-partner-for-smes-across-australia-and-new-zealand-86c3162d8575a96ebff6b5981d7fb529"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Read the Shopa Marketing press release on AP News"
                      >
                        <img src="/assets/img/press/ap.png" alt="Associated Press" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right col intentionally empty — character shows through video */}
              <div className="col-lg-6" />
            </div>
          </div>
        </div>
      </div>
      <HeroVideoScrub />
      <StarAnimationTrigger />

      {/* ── BODY BG 1 ── */}
      <div className="body-bg-1 bg-default">

        {/* ── TRUSTED ── */}
        <div className="chy-trusted-1-area" style={{ marginTop: '80px' }}>
          <div className="container chy-container-1">
            <div className="chy-trusted-1-wrap">

              <div className="chy-trusted-1-item">
                <h3 className="chy-trusted-1-title chy-heading-1">
                  Trusted by 1,000+ Businesses Across Australia and New Zealand
                </h3>
              </div>

              <div className="chy-trusted-1-item">
                <div className="chy-trusted-1-progress">
                  <h4 className="chy-heading-1 title">Combined Experience</h4>
                  <span className="line"></span>
                  <h3 className="chy-heading-1 number">45+ yrs</h3>
                  <div className="chy-trusted-1-progress-item chy-class-add active">
                    <h5 className="chy-heading-1 title">In the Industry</h5>
                    <div className="line"><span className="line-fill"></span></div>
                  </div>
                </div>
              </div>

              <div className="chy-trusted-1-item">
                <div className="chy-trusted-1-reating">
                  {/* Google branding row */}
                  <div className="google-review-brand">
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="google-review-label">Google Reviews</span>
                  </div>
                  {/* Animated stars */}
                  <div id="animated-stars" className="icon animated-stars">
                    <i className="fa-solid fa-star star-1"></i>
                    <i className="fa-solid fa-star star-2"></i>
                    <i className="fa-solid fa-star star-3"></i>
                    <i className="fa-solid fa-star star-4"></i>
                    <i className="fa-solid fa-star star-5"></i>
                  </div>
                  <span className="line"></span>
                  <h4 className="chy-heading-1 text">4.7 · 319 Verified Reviews</h4>
                </div>
              </div>

              <div className="chy-trusted-1-item">
                <div className="chy-trusted-1-progress">
                  <h4 className="chy-heading-1 title">Campaigns Managed</h4>
                  <span className="line"></span>
                  <h3 className="chy-heading-1 number">5,000+</h3>
                  <div className="chy-trusted-1-progress-item chy-class-add active">
                    <h5 className="chy-heading-1 title">Campaigns Per Year</h5>
                    <div className="line"><span className="line-fill"></span></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── SERVICES — Infinite Scroll Ticker ── */}
        <div className="svc-opt-section pt-120 pb-80 fix">
          <div className="container chy-container-1">
            <div className="section-title-wrap text-center mb-50">
              <h5 className="chy-subtitle-1">what we offer</h5>
              <h2 className="chy-title-1 chy-split-in-right chy-split-text">From Google to Grocery Stores. We&apos;ve Got You Covered.</h2>
              <p className="chy-section-para-1" style={{ maxWidth: '680px', margin: '16px auto 0' }}>
                Your customers don&apos;t live on one channel, so why would your marketing? Search engines, social feeds, shopping centre screens and everywhere in between: we cover every path your customers take, with no gaps, no guesswork and nothing left to chance.
              </p>
            </div>
          </div>
          <ServicesTicker services={homeServices} />
        </div>

        {/* ── SOLUTIONS ── */}
        <div className="chy-solutions-1-area pt-120 pb-120 fix" style={{ paddingTop: '80px', paddingBottom: '150px' }}>
          <div className="container chy-container-1">
            <div className="row align-items-center">

              <div className="col-xl-5 col-lg-6">
                <div className="chy-solutions-1-content">
                  <div className="section-title-wrap mb-35">
                    <h5 className="chy-subtitle-1 wow fadeInLeft">why choose us</h5>
                    <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">
                      Marketing That Works as Hard as You Do
                    </h2>
                    <p className="chy-section-para-1 wow fadeInLeft">
                      After 45 years of combined experience and 5,000+ campaigns, we&apos;ve learned what actually moves the needle for Australian businesses, and what just burns budget while looking busy. You get that hard-won knowledge applied to your business from day one, not learned at your expense.
                    </p>
                  </div>
                  <a href="/about-us" className="chy-pr-btn-1 wow fadeInLeft">
                    <span className="text">Meet the Team</span>
                    <span className="icon"><i className="fa-solid fa-right-long"></i></span>
                  </a>
                </div>
              </div>

              <div className="col-xl-7 col-lg-6">
                <div className="chy-solutions-1-img">
                  <div className="main-img rotatedscal">
                    <img src="/assets/img/solutions/SM_HOME_Whatwedo.webp" alt="" loading="lazy" />
                  </div>
                  <div className="chy-solutions-1-goals" style={{ left: '20px', bottom: '-60px' }}>
                    <h5 className="chy-heading-1 title">Results</h5>
                    <div className="chy-solutions-1-goals-item">
                      <div className="icon"><i className="flaticon-digital-campaign"></i></div>
                      <div className="content-wrap">
                        <h4 className="chy-heading-1 number">90%</h4>
                        <p className="chy-para-1 disc">Team Retention Rate</p>
                      </div>
                    </div>
                    <div className="chy-solutions-1-goals-item has-bg">
                      <div className="icon"><i className="flaticon-email"></i></div>
                      <div className="content-wrap">
                        <h4 className="chy-heading-1 number">5,000+</h4>
                        <p className="chy-para-1 disc">Campaigns Run</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>{/* /body-bg-1 */}

      {/* ── WHY SHOPA MARKETING — Floating 3D Cards ── */}
      <section className="shopa-floating-section">
        <FloatingCardsGSAP />

        {/* Scrolling background text */}
        <div className="shopa-floating-scrolltext" aria-hidden="true">
          <div className="shopa-floating-scrolltext__track">
            <span>Why Shopa Marketing &nbsp;·&nbsp; Why Shopa Marketing &nbsp;·&nbsp; Why Shopa Marketing &nbsp;·&nbsp; Why Shopa Marketing &nbsp;·&nbsp;</span>
            <span aria-hidden="true">Why Shopa Marketing &nbsp;·&nbsp; Why Shopa Marketing &nbsp;·&nbsp; Why Shopa Marketing &nbsp;·&nbsp; Why Shopa Marketing &nbsp;·&nbsp;</span>
          </div>
        </div>

        <div className="container chy-container-1">
          <div className="shopa-floating-layout">

            {/* Left: sticky section title */}
            <div className="shopa-floating-sticky-col">
              <h5 className="chy-subtitle-1">why shopa marketing</h5>
              <h2 className="chy-title-1" style={{ marginTop: '12px' }}>Built for Businesses That Are Serious About Growth</h2>
              <p className="chy-section-para-1" style={{ marginTop: '16px' }}>
                One dedicated team managing every channel your business needs, all pulling in the same direction. No fragmented agencies, no conflicting advice, no gaps where your leads quietly leak out.
              </p>
            </div>

            {/* Right: 4 floating 3D cards */}
            <div className="shopa-floating-cards-col">
              {whyItems.map((item, i) => (
                <div key={item.title} className={`shopa-floating-holder shopa-floating-holder--${i + 1}`}>
                  <div className="shopa-floating-card">
                    {/* Icon — fixed top-right */}
                    <div className="shopa-floating-card__icon">
                      <i className={item.icon}></i>
                    </div>
                    {/* Title — sits at card bottom, slides up on hover */}
                    <div className="shopa-floating-card__heading">
                      <h4 className="shopa-floating-card__title">{item.title}</h4>
                    </div>
                    {/* Body — slides in from below on hover */}
                    <div className="shopa-floating-card__body">
                      <p>{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ── BODY BG 2 ── */}
      <div className="body-bg-2 bg-default">

        {/* ── TESTIMONIALS — masonry review wall ── */}
        <ServiceTestimonials />

        {/* ── CLIENTS ── */}
        <div className="shopa-clients-area pt-60 pb-80 fix">
          <div className="container chy-container-1">
            <div className="section-title-wrap text-center mb-50">
              <h5 className="chy-subtitle-1 wow fadeInDown">our clients</h5>
              <h2 className="chy-title-1 chy-split-in-right chy-split-text">In Good Company</h2>
              <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '560px', margin: '14px auto 0' }}>
                From household names to ambitious local brands, they all chose Shopa. Your logo would look great in this line-up.
              </p>
            </div>
          </div>
          {/* infinite scroll ticker — doubled for seamless loop */}
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

      </div>{/* /body-bg-2 */}

      {/* ── VIDEO — HIDDEN ── */}
      {/* Suggestion: Brand video or client reel when available. */}

      {/* ── CTA — HIDDEN ── */}
      {/* Suggestion: "Book a Free Strategy Session" focused CTA once messaging confirmed. */}

      {/* ── BLOG ── */}
      <div className="chy-blog-1-area pt-110 pb-70 bg-default fix">
        <div className="container chy-container-1">
          <div className="section-title-wrap text-center mb-30">
            <h5 className="chy-subtitle-1 wow fadeInDown">our blog</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Fresh Thinking, Free of Charge</h2>
            <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '620px', margin: '14px auto 0' }}>
              Marketing moves fast. Here&apos;s what our team is seeing, testing and recommending right now.
            </p>
          </div>
          <div className="row">
            {latestPosts.map((post) => (
              <div key={post.id} className="col-xl-4 col-lg-6 col-md-6">
                <div className="chy-blog-1-item">
                  <div className="main-img img-cover">
                    <img src={featuredImage(post)} alt={post.title.rendered} loading="lazy" />
                  </div>
                  <span className="chy-para-1 date">{formatDate(post.date)}</span>
                  <h4 className="chy-heading-1 title">
                    <a href={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  </h4>
                  <p className="chy-para-1 disc"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 120) + '…' }}
                  />
                  <div className="author">
                    <div className="img img-cover">
                      <img src={authorAvatar(post)} alt="" loading="lazy" />
                    </div>
                    <span className="chy-heading-1 name">by {post._embedded?.author?.[0]?.name ?? 'Shopa Marketing'}</span>
                    <span className="line"></span>
                  </div>
                </div>
              </div>
            ))}
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
