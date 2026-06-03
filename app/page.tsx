import TemplateScripts from '@/components/TemplateScripts';
import { getPosts, featuredImage, formatDate, authorAvatar } from '@/lib/wordpress';
import PricingSection from '@/components/PricingSection';
import ServicesTicker from '@/components/ServicesTicker';

export const revalidate = 3600;

export default async function HomePage() {
  const latestPosts = await getPosts(3);

  const testimonials = [
    { quote: 'Royal Park Dental uses Shopa Marketing and are pleased with their customer service and product. Thank you for your patience and being so accommodating to our needs. Highly recommend!', name: 'Royal Park Dental', bio: 'Dental Clinic, Melbourne' },
    { quote: 'We really appreciate Shopa Marketing and their service. Their employees are reliable and quick to action anything you need.', name: 'First Step Fertility', bio: 'Fertility Clinic, Australia' },
    { quote: 'I am so happy with the entire process and end product. Tom Richards from Shopa Marketing handled my digital advertising campaign and web design. Result is excellent.', name: 'Lmt Finance', bio: 'Mortgage Broker, Geelong' },
    { quote: 'They look after the people they work with, with very good deals.', name: 'Bargain Beds', bio: 'Small Family Business' },
    { quote: 'Very professional and very helpful with building a new business website and online marketing.', name: 'Independent Property Sales', bio: 'Real Estate, Geelong' },
    { quote: 'Easy well supported process with excellent communication along the way.', name: 'Coastal Skin & Beauty', bio: 'Beauty Clinic, Kapiti Coast' },
    { quote: "Lawrence's professional guidance was instrumental in crafting a compelling advertisement. Thrilled with the results and highly recommend his services.", name: 'Home Caring Tranmere', bio: 'NDIS & Home Care Provider, Adelaide' },
    { quote: 'The team were easy to communicate with which made the process smooth.', name: 'Hutt Dental Hub', bio: 'Dental Clinic' },
    { quote: 'They were quick to respond and provided us with great quality artwork.', name: 'Fountain College', bio: 'Education' },
  ];

  const whyItems = [
    { icon: 'flaticon-digital-campaign', title: 'One Strategy Across Every Channel', body: 'Digital and physical. Online and offline. Every channel working together because disconnected marketing produces disconnected results.' },
    { icon: 'flaticon-team', title: 'Dedicated Account Manager', body: 'You work directly with a specialist who knows your business. No call centres. No ticket queues. Just clear communication and real accountability.' },
    { icon: 'flaticon-price-tag', title: 'Transparent Pricing', body: 'Everything defined upfront. What is outlined in your proposal is exactly what you pay. No hidden fees. No surprises. Ever.' },
    { icon: 'flaticon-trophy', title: '45+ Years Experience', body: 'Over 5,000 campaigns delivered for more than 1,000 businesses across Australia and New Zealand. That experience shows up in every campaign we run.' },
  ];

  const homeServices = [
    { title: 'CMO for Hire', desc: 'Senior marketing leadership. Fractional cost. A dedicated CMO embedded in your business, backed by a full execution team, without the full-time salary.', items: ['Marketing Strategy & Roadmap', 'Brand Positioning', 'Team Leadership'], link: '/services/cmo-for-hire' },
    { title: 'OOH Advertising', desc: 'Put your brand where your customers actually live. Grocery stores, medical centres, digital billboards and transit networks across Australia and New Zealand.', items: ['Grocery Store TV Screens', 'Digital Billboards', 'Transit & Outdoor Media'], link: '/services/ooh-advertising' },
    { title: 'AI SEO Services', desc: "If you're not on page one, you're invisible. We get your business ranking for the keywords your customers are actively searching — driving leads without ongoing ad spend.", items: ['Keyword Research', 'On-Page Optimisation', 'Search Rankings Boost'], link: '/services/seo-services' },
    { title: 'Social Media Ads', desc: "Your customers are scrolling right now. We run targeted Facebook, Instagram and TikTok campaigns that put your business in front of the right people at the right moment.", items: ['Facebook & Instagram Ads', 'TikTok Campaigns', 'Audience Targeting'], link: '/services/social-media' },
    { title: 'Website Design', desc: 'Your website should be converting visitors into customers around the clock. We build fast, mobile-first custom websites — with 12 months maintenance and a lifetime technical guarantee included.', items: ['Custom Web Design', 'Mobile Responsive', 'Conversion Optimised'], link: '/services/website' },
    { title: 'Google Ads', desc: 'Get in front of high-intent buyers the moment they search. Search, Display, Shopping and YouTube campaigns built around your revenue goals. Every dollar tracked.', items: ['Google Search Ads', 'Display & YouTube Ads', 'Real ROI Tracking'], link: '/services/google-ads' },
    { title: 'Graphic Design', desc: 'First impressions are everything. We produce logos, ad creatives, social assets and brand identity systems that make your business look as good as it performs.', items: ['Logo & Brand Identity', 'Marketing Collateral', 'Social Media Assets'], link: '/services/graphic-design' },
  ];

  return (
    <>
      <TemplateScripts />

      {/* preloader */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>

      {/* ── HERO ── */}
      <div
        className="chy-hero-1-area chy-class-add bg-default fix"
        style={{ backgroundImage: "url('/assets/img/hero/h1-bg-img-1.png')" }}
      >
        <div className="container chy-container-1">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="chy-hero-1-content">
                <div className="il-shape-1">
                  <img src="/assets/img/hero/h1-il-4.png" alt="" className="object main-shape" data-value="3" />
                </div>
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
              </div>
            </div>
            <div className="col-lg-6">
              <div className="chy-hero-1-img">
                <div className="main-img">
                  <img src="/assets/img/hero/h1-img-1.png" alt="" />
                </div>
                <div className="il-shape-1">
                  <img src="/assets/img/hero/h1-il-1.png" alt="" className="object" data-value="6" />
                </div>
                <div className="il-shape-3">
                  <img src="/assets/img/hero/h1-il-3.png" alt="" className="object" data-value="3" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/img/hero/h1-il-5.png" alt="" className="il-shape-4" />
      </div>

      {/* ── BODY BG 1 ── */}
      <div className="body-bg-1 bg-default" style={{ backgroundImage: "url('/assets/img/bg/body-bg-1.png')" }}>

        {/* ── TRUSTED ── */}
        <div className="chy-trusted-1-area">
          <div className="container chy-container-1">
            <div className="chy-trusted-1-wrap">

              <div className="chy-trusted-1-item">
                <h3 className="chy-trusted-1-title chy-heading-1">
                  Trusted by 1,000+ Businesses Across Australia &amp; New Zealand
                </h3>
              </div>

              <div className="chy-trusted-1-item">
                <div className="chy-trusted-1-progress">
                  <h4 className="chy-heading-1 title">combined experience</h4>
                  <span className="line"></span>
                  <h3 className="chy-heading-1 number">45+ yrs</h3>
                  <div className="chy-trusted-1-progress-item chy-class-add active">
                    <h5 className="chy-heading-1 title">in the industry</h5>
                    <div className="line"><span className="line-fill"></span></div>
                  </div>
                </div>
              </div>

              <div className="chy-trusted-1-item">
                <div className="chy-trusted-1-reating">
                  <div className="icon">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="line"></span>
                  <h4 className="chy-heading-1 text">Google Reviews · 4.7 / 319 Verified Reviews</h4>
                </div>
              </div>

              <div className="chy-trusted-1-item">
                <div className="chy-trusted-1-progress">
                  <h4 className="chy-heading-1 title">campaigns managed</h4>
                  <span className="line"></span>
                  <h3 className="chy-heading-1 number"><span className="counter">5000</span>+</h3>
                  <div className="chy-trusted-1-progress-item chy-class-add active">
                    <h5 className="chy-heading-1 title">campaigns per year</h5>
                    <div className="line"><span className="line-fill"></span></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── SERVICES — Infinite Scroll Ticker ── */}
        <div className="svc-opt-section pt-120 pb-80 fix" style={{ background: '#f8f8fb' }}>
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
        <div className="chy-solutions-1-area pt-120 pb-120 fix" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
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
                    <img src="/assets/img/solutions/s1-img-1png.png" alt="" />
                  </div>
                  <div className="chy-solutions-1-goals">
                    <h5 className="chy-heading-1 title">results</h5>
                    <div className="chy-solutions-1-goals-item">
                      <div className="icon"><i className="flaticon-digital-campaign"></i></div>
                      <div className="content-wrap">
                        <h4 className="chy-heading-1 number"><span className="counter">90</span>%</h4>
                        <p className="chy-para-1 disc">team retention rate</p>
                      </div>
                    </div>
                    <div className="chy-solutions-1-goals-item has-bg">
                      <div className="icon"><i className="flaticon-email"></i></div>
                      <div className="content-wrap">
                        <h4 className="chy-heading-1 number"><span className="counter">5000</span>+</h4>
                        <p className="chy-para-1 disc">campaigns run</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── WHY SHOPA MARKETING ── */}
        <div className="bg-default pt-0 pb-120">
          <div className="container chy-container-1">
            <div className="section-title-wrap text-center mb-50">
              <h5 className="chy-subtitle-1 wow fadeInDown">why shopa marketing</h5>
              <h2 className="chy-title-1 chy-split-in-right chy-split-text">Built For Businesses That Are Serious About Growth</h2>
              <p className="chy-section-para-1 wow fadeInUp" style={{ maxWidth: '680px', margin: '16px auto 0' }}>
                One dedicated team managing every channel your business needs to grow. No fragmented agencies, no conflicting advice, no gaps in execution.
              </p>
            </div>
            <div className="row g-4">
              {whyItems.map((item) => (
                <div key={item.title} className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp">
                  <div className="web-diff-card">
                    <div className="web-diff-card__icon">
                      <i className={item.icon}></i>
                    </div>
                    <h4 className="chy-heading-1 web-diff-card__title">{item.title}</h4>
                    <p className="chy-para-1 web-diff-card__body">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>{/* /body-bg-1 */}

      {/* ── RESEARCH — HIDDEN ── */}
      {/* Suggestion: "Our Approach" with real photography once available. */}

      {/* ── PRICE SWIPER — HIDDEN ── */}
      {/* Suggestion: Service spotlight / pricing tier showcase. */}

      {/* ── PROJECT SLIDER — HIDDEN ── */}
      {false && <div className="chy-project-1-area"></div>}

      {/* ── BODY BG 2 ── */}
      <div className="body-bg-2 bg-default" style={{ backgroundImage: "url('/assets/img/bg/body-bg-2.png')" }}>

        {/* ── PRICE CARDS ── */}
        <PricingSection />

        {/* ── TEAM — HIDDEN ── */}
        {false && <div className="chy-team-1-area"></div>}

        {/* ── TESTIMONIALS SLIDER ── */}
        <div className="chy-team-slider-1-area pt-80 pb-80">
          <div className="container chy-container-1">
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

        {/* ── CLIENTS ── */}
        <div className="chy-client-1-area pb-80 fix">
          <div className="container chy-container-1">
            <div className="chy-client-1-wrap">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="chy-client-1-content chy-slideinright">
                    <h3 className="chy-heading-1 title chy-split-in-right chy-split-text">Our Clients</h3>
                    <p className="chy-para-1 disc wow fadeInRight">
                      Join the growing list of satisfied <br /> businesses who trust Shopa Marketing.
                    </p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="chy-client-1-logo chy-slideinright">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <div key={n} className="logo-item">
                        <img className="logo-1" src={`/assets/img/client/logo-${n}.png`} alt="" />
                        <img className="logo-2" src={`/assets/img/client/logo-${n}.png`} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>{/* /body-bg-2 */}

      {/* ── VIDEO — HIDDEN ── */}
      {/* Suggestion: Brand video or client reel when available. */}

      {/* ── CTA — HIDDEN ── */}
      {/* Suggestion: "Book a Free Strategy Session" focused CTA once messaging confirmed. */}

      {/* ── BLOG ── */}
      <div className="chy-blog-1-area pt-110 pb-70 bg-default fix" style={{ backgroundImage: "url('/assets/img/blog/b1-bg-1.png')" }}>
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
                    <img src={featuredImage(post)} alt={post.title.rendered} />
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
                      <img src={authorAvatar(post)} alt="" />
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
