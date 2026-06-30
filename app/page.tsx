import TemplateScripts from '@/components/TemplateScripts';
import { getPosts, featuredImage, formatDate, authorAvatar } from '@/lib/wordpress';
import ServicesTicker from '@/components/ServicesTicker';
import HeroVideoScrub from '@/components/HeroVideoScrub';
import StarAnimationTrigger from '@/components/StarAnimationTrigger';
import FloatingCardsGSAP from '@/components/FloatingCardsGSAP';

export const revalidate = 3600;

export default async function HomePage() {
  const latestPosts = await getPosts(3);

  const testimonials = [
    { quote: 'Royal Park Dental uses Shopa Marketing and are pleased with their customer service and product. Thank you for your patience and being so accommodating to our needs. Highly recommend!', name: 'Royal Park Dental', bio: 'Dental Clinic, Melbourne', logo: '/assets/img/testimonials/royal-park-dental.png' },
    { quote: 'We really appreciate Shopa Marketing and their service. Their employees are reliable and quick to action anything you need.', name: 'First Step Fertility', bio: 'Fertility Clinic, Australia', logo: '/assets/img/testimonials/first-step-fertility.png' },
    { quote: 'I am so happy with the entire process and end product. Tom Richards from Shopa Marketing handled my digital advertising campaign and web design. Result is excellent.', name: 'Lmt Finance', bio: 'Mortgage Broker, Geelong', logo: '/assets/img/testimonials/lmt-finance.jpg' },
    { quote: 'They look after the people they work with, with very good deals.', name: 'Bargain Beds', bio: 'Small Family Business', logo: '/assets/img/testimonials/bargain-beds.png' },
    { quote: 'Very professional and very helpful with building a new business website and online marketing.', name: 'Independent Property Sales', bio: 'Real Estate, Geelong' },
    { quote: 'Easy well supported process with excellent communication along the way.', name: 'Coastal Skin & Beauty', bio: 'Beauty Clinic, Kapiti Coast', logo: '/assets/img/testimonials/coastal-skin-beauty.png' },
    { quote: "Lawrence's professional guidance was instrumental in crafting a compelling advertisement. Thrilled with the results and highly recommend his services.", name: 'Home Caring Tranmere', bio: 'NDIS & Home Care Provider, Adelaide', logo: '/assets/img/testimonials/home-caring-tranmere.webp' },
    { quote: 'The team were easy to communicate with which made the process smooth.', name: 'Hutt Dental Hub', bio: 'Dental Clinic', logo: '/assets/img/testimonials/hutt-dental-hub.png' },
    { quote: 'They were quick to respond and provided us with great quality artwork.', name: 'Fountain College', bio: 'Education', logo: '/assets/img/testimonials/fountain-college.png' },
    { quote: 'We (Bare) partnered with Shopa Marketing to execute our branded in-store print and digital signage across local supermarkets in Adelaide, and the results have been great. From initial discussions to final rollout, the team has been wonderful to work with - highly professional, responsive, and deeply attentive. They brought our vision to life, and the signage has significantly expanded our brand awareness in the local community.', name: 'Bare', bio: 'Brand, Adelaide', logo: '/assets/img/testimonials/bare.svg' },
  ];

  const whyItems = [
    { icon: 'flaticon-digital-campaign', title: 'One Strategy Across Every Channel', body: 'Digital and physical. Online and offline. Every channel working together because disconnected marketing produces disconnected results.' },
    { icon: 'flaticon-team', title: 'Dedicated Account Manager', body: 'You work directly with a specialist who knows your business. No call centres. No ticket queues. Just clear communication and real accountability.' },
    { icon: 'flaticon-price-tag', title: 'Transparent Pricing', body: 'Everything defined upfront. What is outlined in your proposal is exactly what you pay. No hidden fees. No surprises. Ever.' },
    { icon: 'flaticon-trophy', title: '45+ Years Experience', body: 'Over 5,000 campaigns delivered for more than 1,000 businesses across Australia and New Zealand. That experience shows up in every campaign we run.' },
  ];

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

  const homeServices = [
    { title: 'Done For You', desc: 'Senior marketing leadership. Fractional cost. A dedicated CMO embedded in your business, backed by a full execution team, without the full-time salary.', items: ['Marketing Strategy & Roadmap', 'Brand Positioning', 'Team Leadership'], link: '/services/done-for-you', image: '/assets/img/services/DONWFORYOU.webp', video: '/assets/img/services/done-for-you.mp4' },
    { title: 'OOH Advertising', desc: 'Put your brand where your customers actually live. Grocery stores, medical centres, digital billboards and transit networks across Australia and New Zealand.', items: ['Grocery Store TV Screens', 'Digital Billboards', 'Transit & Outdoor Media'], link: '/services/ooh-advertising', image: '/assets/img/services/ooh.webp', video: '/assets/img/services/ooh.mp4' },
    { title: 'AI SEO Services', desc: "If you're not on page one, you're invisible. We get your business ranking for the keywords your customers are actively searching — driving leads without ongoing ad spend.", items: ['Keyword Research', 'On-Page Optimisation', 'Search Rankings Boost'], link: '/services/seo-services', image: '/assets/img/services/seoAI.webp', video: '/assets/img/services/ai-seo.mp4' },
    { title: 'Social Media Ads', desc: "Your customers are scrolling right now. We run targeted Facebook, Instagram and TikTok campaigns that put your business in front of the right people at the right moment.", items: ['Facebook & Instagram Ads', 'TikTok Campaigns', 'Audience Targeting'], link: '/services/social-media', image: '/assets/img/services/SocialMedia.webp', video: '/assets/img/services/social-media.mp4' },
    { title: 'Website Design', desc: "Your website should be converting visitors into customers around the clock. We build fast, mobile-first custom websites — with 12 months' maintenance and a lifetime technical guarantee included.", items: ['Custom Web Design', 'Mobile Responsive', 'Conversion Optimised'], link: '/services/website', image: '/assets/img/services/webdesign.webp', video: '/assets/img/services/website.mp4' },
    { title: 'Google Ads', desc: 'Get in front of high-intent buyers the moment they search. Search, Display, Shopping and YouTube campaigns built around your revenue goals. Every dollar tracked.', items: ['Google Search Ads', 'Display & YouTube Ads', 'Real ROI Tracking'], link: '/services/google-ads', image: '/assets/img/services/GAds.webp', video: '/assets/img/services/google-ads.mp4' },
    { title: 'Graphic Design', desc: 'First impressions are everything. We produce logos, ad creatives, social assets and brand identity systems that make your business look as good as it performs.', items: ['Logo & Brand Identity', 'Marketing Collateral', 'Social Media Assets'], link: '/services/graphic-design', image: '/assets/img/services/GraphicDes.webp', video: '/assets/img/services/graphic.mp4' },
  ];

  return (
    <>
      <TemplateScripts />

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
          {/* Video — scrubbed by scroll, not autoplay */}
          <video
            id="hero-bg-video"
            muted
            playsInline
            preload="metadata"
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
          >
            <source src="/assets/img/hero/v1-scrub.mp4" type="video/mp4" />
          </video>

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
                  <h1 className="chy-heading-1 title chy-split-in-hero-1 chy-split-text-2">You Run The Business. <br /> We&apos;ll Handle The Marketing.</h1>
                  <p className="chy-para-1 disc wow fadeInLeft" data-wow-duration="3s">
                    You focus on delivering for your customers. We focus on making sure more of them find you across Google, social media, digital billboards, and beyond. One dedicated team. One clear strategy. Zero agency runaround.
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
                      <div className="logo-pill">
                        <img src="/assets/img/press/ceo-weekly.webp" alt="CEO Weekly" />
                      </div>
                      <div className="featured-in-logo-slot">
                        <img src="/assets/img/press/business-insider.png" alt="Business Insider" />
                      </div>
                      <div className="featured-in-logo-slot">
                        <img src="/assets/img/press/the-guardian.webp" alt="The Guardian" />
                      </div>
                      <div className="featured-in-logo-slot">
                        <img src="/assets/img/press/ap.png" alt="Associated Press" />
                      </div>
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
                  Trusted by 1,000+ Businesses Across Australia &amp; New Zealand
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
                  <h3 className="chy-heading-1 number"><span className="counter">5000</span>+</h3>
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
                From search engines to shopping centre screens, we cover every channel your customers move through. No gaps. No guesswork. Just results.
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
                      Marketing That Works As Hard As You Do.
                    </h2>
                    <p className="chy-section-para-1 wow fadeInLeft">
                      With 45 years of combined experience and 5,000 campaigns delivered, we know what works for Australian businesses and we apply that knowledge to yours from day one.
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
                        <h4 className="chy-heading-1 number"><span className="counter">90</span>%</h4>
                        <p className="chy-para-1 disc">Team Retention Rate</p>
                      </div>
                    </div>
                    <div className="chy-solutions-1-goals-item has-bg">
                      <div className="icon"><i className="flaticon-email"></i></div>
                      <div className="content-wrap">
                        <h4 className="chy-heading-1 number"><span className="counter">5000</span>+</h4>
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
              <h2 className="chy-title-1" style={{ marginTop: '12px' }}>Built For Businesses That Are Serious About Growth</h2>
              <p className="chy-section-para-1" style={{ marginTop: '16px' }}>
                One dedicated team managing every channel your business needs to grow. No fragmented agencies, no conflicting advice, no gaps in execution.
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

        {/* ── TESTIMONIALS SLIDER ── */}
        <div className="chy-team-slider-1-area pt-80 pb-80">
          <div className="container chy-container-1">
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
                          <h4 className="chy-heading-1 title">What People Are Saying</h4>
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

        {/* ── CLIENTS ── */}
        <div className="shopa-clients-area pt-60 pb-80 fix">
          <div className="container chy-container-1">
            <div className="section-title-wrap text-center mb-50">
              <h5 className="chy-subtitle-1 wow fadeInDown">our clients</h5>
              <h2 className="chy-title-1 chy-split-in-right chy-split-text">Trusted By Australia&apos;s Best Brands</h2>
              <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '560px', margin: '14px auto 0' }}>
                From national franchises to ambitious growth brands — they all chose Shopa.
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
            <h5 className="chy-subtitle-1 wow fadeInDown">our blogs</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">The Latest News &amp; Blog</h2>
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
