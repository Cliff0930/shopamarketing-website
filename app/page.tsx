import TemplateScripts from '@/components/TemplateScripts';
import { getPosts, featuredImage, formatDate, authorAvatar } from '@/lib/wordpress';
import PricingSection from '@/components/PricingSection';

export const revalidate = 3600;

export default async function HomePage() {
  const latestPosts = await getPosts(3);
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

            {/* left */}
            <div className="col-lg-6">
              <div className="chy-hero-1-content">
                <div className="il-shape-1">
                  <img src="/assets/img/hero/h1-il-4.png" alt="" className="object main-shape" data-value="3" />
                </div>
                <h5 className="chy-subtitle-1 subtitle wow fadeInLeft" data-wow-duration="3s">Your Go-To Marketing Agency</h5>
                <h1 className="chy-heading-1 title chy-split-in-hero-1 chy-split-text-2">One Stop <br /> Marketing Shop</h1>
                <p className="chy-para-1 disc wow fadeInLeft" data-wow-duration="3s">
                  Why juggle multiple agencies when you can have one team handle it all? From SEO and social media ads to eye-catching web design, Google Ads, and beyond — Shopa Marketing gets your business noticed.
                </p>
                <div className="btn-wrap">
                  <a href="/about-us" className="chy-pr-btn-1 wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="3s">
                    <span className="text">explore more</span>
                    <span className="icon"><i className="fa-solid fa-right-long"></i></span>
                  </a>
                  <a className="chy-plybtn-1 popup-video wow fadeInLeft" data-wow-duration="3s"
                    href="https://www.youtube.com/watch?v=e1edxTqJnKk&list=RDQM4DsffdYoWlY&start_radio=1">
                    <span className="icon"><i className="fas fa-play"></i></span>
                    <span className="text chy-para-1">play video</span>
                  </a>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-lg-6">
              <div className="chy-hero-1-img">
                <div className="main-img">
                  <img src="/assets/img/hero/h1-img-1.png" alt="" />
                </div>
                <div className="il-shape-1">
                  <img src="/assets/img/hero/h1-il-1.png" alt="" className="object" data-value="6" />
                </div>
                <div className="il-shape-2">
                  <img src="/assets/img/hero/h1-il-2.png" alt="" className="object" data-value="4" />
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
      <div
        className="body-bg-1 bg-default"
        style={{ backgroundImage: "url('/assets/img/bg/body-bg-1.png')" }}
      >

        {/* ── TRUSTED ── */}
        <div className="chy-trusted-1-area">
          <div className="container chy-container-1">
            <div className="chy-trusted-1-wrap">

              <div className="chy-trusted-1-item">
                <h3 className="chy-trusted-1-title chy-heading-1">
                  Trusted by{' '}
                  <span className="icon-1"><img src="/assets/img/trusted/t1-world-1.png" alt="" /></span>
                  <span className="icon-2"><img src="/assets/img/trusted/t1-world-2.png" alt="" /></span>
                  {' '}1,000+ Businesses{' '}
                  <span className="icon-1"><img src="/assets/img/trusted/t1-world-3.png" alt="" /></span>
                  <span className="icon-2"><img src="/assets/img/trusted/t1-world-4.png" alt="" /></span>
                </h3>
              </div>

              <div className="chy-trusted-1-item img-cover">
                <div className="chy-trusted-1-video">
                  <img src="/assets/img/trusted/t1-video-img-1.png" alt="" />
                  <a className="chy-plybtn-1 popup-video"
                    href="https://www.youtube.com/watch?v=e1edxTqJnKk&list=RDQM4DsffdYoWlY&start_radio=1"
                    aria-label="play video">
                    <span className="icon"><i className="fas fa-play"></i></span>
                  </a>
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
                  <h4 className="chy-heading-1 text">Rated 4.9/5 from over 600 Reviews</h4>
                </div>
              </div>

              <div className="chy-trusted-1-item">
                <div className="chy-trusted-1-progress">
                  <h4 className="chy-heading-1 title">campaigns managed</h4>
                  <span className="line"></span>
                  <h3 className="chy-heading-1 number"><span className="counter">5000</span>+</h3>
                  <div className="chy-trusted-1-progress-item chy-class-add">
                    <h5 className="chy-heading-1 title">campaigns per year</h5>
                    <div className="line">
                      <span className="line-fill"></span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── SERVICES ── */}
        <div className="chy-services-1-area pt-140 fix">
          <div className="container chy-container-1">
            <div className="section-title-wrap text-center mb-40">
              <h5 className="chy-subtitle-1 wow fadeInDown">what we offer</h5>
              <h2 className="chy-title-1 chy-split-in-right chy-split-text">Our Game-Changing Services</h2>
            </div>
            {/* row 1 */}
            <div className="chy-services-1-wrap mb-30">

              <div className="chy-services-1-item asslideupcta">
                <div className="header">
                  <div className="icon"><img src="/assets/img/services/s1-icon-1.png" alt="" /></div>
                  <h4 className="chy-heading-1 title">CMO for Hire</h4>
                  <p className="chy-para-1 disc">Senior marketing leadership, fractional cost. Get a battle-tested CMO embedded in your business without the full-time salary.</p>
                </div>
                <div className="body">
                  <ul className="chy-services-1-item-list">
                    <li><i className="flaticon-straight-right-arrow"></i> Marketing Strategy</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Brand Positioning</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Team Leadership</li>
                  </ul>
                  <a href="/services/cmo-for-hire" className="s1-btn" aria-label="CMO for Hire">
                    <i className="flaticon-right-up"></i>
                  </a>
                </div>
              </div>

              <div className="chy-services-1-item">
                <div className="header">
                  <div className="icon"><img src="/assets/img/services/s1-icon-2.png" alt="" /></div>
                  <h4 className="chy-heading-1 title">OOH Advertising</h4>
                  <p className="chy-para-1 disc">Reach your local audience via grocery store screens, medical centres, and digital out-of-home placements.</p>
                </div>
                <div className="body">
                  <ul className="chy-services-1-item-list">
                    <li><i className="flaticon-straight-right-arrow"></i> Grocery Store TV Screens</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Digital Billboards</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Transit &amp; Outdoor Media</li>
                  </ul>
                  <a href="/services/ooh-advertising" className="s1-btn" aria-label="OOH Advertising">
                    <i className="flaticon-right-up"></i>
                  </a>
                </div>
              </div>

              <div className="chy-services-1-item asslideupcta">
                <div className="header">
                  <div className="icon"><img src="/assets/img/services/s1-icon-3.png" alt="" /></div>
                  <h4 className="chy-heading-1 title">SEO Services</h4>
                  <p className="chy-para-1 disc">Rank higher on search engines, attract organic traffic, and watch your sales climb with our proven SEO strategies.</p>
                </div>
                <div className="body">
                  <ul className="chy-services-1-item-list">
                    <li><i className="flaticon-straight-right-arrow"></i> Keyword Research</li>
                    <li><i className="flaticon-straight-right-arrow"></i> On-Page Optimisation</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Search Rankings Boost</li>
                  </ul>
                  <a href="/services/seo-services" className="s1-btn" aria-label="SEO Services">
                    <i className="flaticon-right-up"></i>
                  </a>
                </div>
              </div>

            </div>

            {/* row 2 */}
            <div className="chy-services-1-wrap">

              <div className="chy-services-1-item asslideupcta">
                <div className="header">
                  <div className="icon"><img src="/assets/img/services/s1-icon-4.png" alt="" /></div>
                  <h4 className="chy-heading-1 title">Social Media Ads</h4>
                  <p className="chy-para-1 disc">Meta &amp; Instagram campaigns that put your brand in front of the right audience at the right time.</p>
                </div>
                <div className="body">
                  <ul className="chy-services-1-item-list">
                    <li><i className="flaticon-straight-right-arrow"></i> Facebook &amp; Instagram Ads</li>
                    <li><i className="flaticon-straight-right-arrow"></i> TikTok Campaigns</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Audience Targeting</li>
                  </ul>
                  <a href="/services/social-media" className="s1-btn" aria-label="Social Media Ads">
                    <i className="flaticon-right-up"></i>
                  </a>
                </div>
              </div>

              <div className="chy-services-1-item">
                <div className="header">
                  <div className="icon"><img src="/assets/img/services/s1-icon-5.png" alt="" /></div>
                  <h4 className="chy-heading-1 title">Website Design</h4>
                  <p className="chy-para-1 disc">Stunning, high-converting websites built for growth — designed to grab attention and turn visitors into customers.</p>
                </div>
                <div className="body">
                  <ul className="chy-services-1-item-list">
                    <li><i className="flaticon-straight-right-arrow"></i> Custom Web Design</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Mobile Responsive</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Conversion Optimised</li>
                  </ul>
                  <a href="/services/website" className="s1-btn" aria-label="Website Design">
                    <i className="flaticon-right-up"></i>
                  </a>
                </div>
              </div>

              <div className="chy-services-1-item asslideupcta">
                <div className="header">
                  <div className="icon"><img src="/assets/img/services/s1-icon-6.png" alt="" /></div>
                  <h4 className="chy-heading-1 title">Google Ads</h4>
                  <p className="chy-para-1 disc">Get in front of high-intent buyers instantly with targeted Google Search and Display campaigns that convert.</p>
                </div>
                <div className="body">
                  <ul className="chy-services-1-item-list">
                    <li><i className="flaticon-straight-right-arrow"></i> Google Search Ads</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Display &amp; YouTube Ads</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Real ROI Tracking</li>
                  </ul>
                  <a href="/services/google-ads" className="s1-btn" aria-label="Google Ads">
                    <i className="flaticon-right-up"></i>
                  </a>
                </div>
              </div>

            </div>

            {/* row 3 — Graphic Design in centre column */}
            <div className="chy-services-1-wrap mt-30">

              <div className="chy-services-1-item" style={{ visibility: 'hidden', pointerEvents: 'none' }} aria-hidden="true"></div>

              <div className="chy-services-1-item">
                <div className="header">
                  <div className="icon"><img src="/assets/img/services/s1-icon-1.png" alt="" /></div>
                  <h4 className="chy-heading-1 title">Graphic Design</h4>
                  <p className="chy-para-1 disc">Brand identity, assets &amp; creative design that make your business look as good as it performs.</p>
                </div>
                <div className="body">
                  <ul className="chy-services-1-item-list">
                    <li><i className="flaticon-straight-right-arrow"></i> Logo &amp; Brand Identity</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Marketing Collateral</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Social Media Assets</li>
                  </ul>
                  <a href="/services/graphic-design" className="s1-btn" aria-label="Graphic Design">
                    <i className="flaticon-right-up"></i>
                  </a>
                </div>
              </div>

              <div className="chy-services-1-item" style={{ visibility: 'hidden', pointerEvents: 'none' }} aria-hidden="true"></div>

            </div>

            <div className="chy-services-1-counter">
              <div className="chy-services-1-counter-item">
                <h3 className="chy-heading-1 number"><span className="counter">1000</span>+</h3>
                <h3 className="chy-heading-1 disc">businesses <br /> helped</h3>
              </div>
              <div className="chy-services-1-counter-item">
                <h3 className="chy-heading-1 number"><span className="counter">700</span>+</h3>
                <h3 className="chy-heading-1 disc">clients per <br /> year</h3>
              </div>
              <div className="chy-services-1-counter-item justify-self-end">
                <h3 className="chy-heading-1 number"><span className="counter">45</span>yrs</h3>
                <h3 className="chy-heading-1 disc">combined <br /> experience</h3>
              </div>
            </div>

          </div>
        </div>

        {/* ── SOLUTIONS ── */}
        <div className="chy-solutions-1-area pt-80 pb-120 fix">
          <div className="container chy-container-1">
            <div className="row align-items-center">

              <div className="col-xl-5 col-lg-6">
                <div className="chy-solutions-1-content">
                  <div className="section-title-wrap mb-35">
                    <h5 className="chy-subtitle-1 wow fadeInLeft">why choose us</h5>
                    <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">
                      We Love What We Do
                    </h2>
                    <p className="chy-section-para-1 wow fadeInLeft">
                      Think of us as marketing ninjas who never lose sight of your target audience. We combine the power of SEO, paid search ads, social media, stunning visuals, and user-friendly content to create a symphony of success for your business.
                    </p>
                  </div>
                  <div className="inner-div mb-50">
                    <div className="inner-img img-cover wow zoomIn">
                      <img src="/assets/img/solutions/s1-img-2.png" alt="" />
                    </div>
                    <div className="inner-img wow zoomIn" data-wow-delay=".3s">
                      <img src="/assets/img/solutions/s1-img-3.png" alt="" />
                    </div>
                  </div>
                  <a href="/about-us" className="chy-pr-btn-1 wow fadeInLeft">
                    <span className="text">read more</span>
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

      </div>{/* /body-bg-1 */}

      {/* ── RESEARCH ── */}
      <div
        className="chy-research-1-area pt-105 pb-80 bg-default fix"
        data-navbar-dark="true"
        style={{ backgroundImage: "url('/assets/img/research/r1-bg-img-1.png')" }}
      >
        <div className="container chy-container-1">
          <div className="section-title-wrap mb-35 text-center">
            <h5 className="chy-subtitle-1 wow fadeInDown">data-driven strategies</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Our Core Services</h2>
            <p className="chy-section-para-1">
              At Shopa Marketing, we create custom marketing strategies powered by data, ensuring a clear ROI for you. Your goals and audience are our mission — no guesswork here.
            </p>
          </div>
          <div className="row">
            {[
              { img: 'r1-img-1.png', icon: 'r1-icon-1.png', title: 'SEO Services', desc: 'Climb search engine rankings, attract organic traffic, and turn searchers into customers with our AI-driven SEO strategies.', cls: 'chy-slideinleft' },
              { img: 'r1-img-2.png', icon: 'r1-icon-2.png', title: 'Google Ads', desc: 'Maximise reach with laser-focused Search and Display Ads, and convert clicks into loyal customers.', cls: 'chy-slideinup' },
              { img: 'r1-img-3.png', icon: 'r1-icon-3.png', title: 'Social Media', desc: 'Targeted Facebook and Instagram Ads that put your brand in front of the right audience at the right time.', cls: 'chy-slideinup' },
              { img: 'r1-img-4.png', icon: 'r1-icon-4.png', title: 'Web Design', desc: 'Stunning, user-friendly websites that grab attention and convert visitors into paying customers.', cls: 'chy-slideinright' },
            ].map((item) => (
              <div key={item.title} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className={`chy-research-1-item ${item.cls}`}>
                  <div className="main-img">
                    <img src={`/assets/img/research/${item.img}`} alt="" />
                    <div className="icon"><img src={`/assets/img/research/${item.icon}`} alt="" /></div>
                  </div>
                  <h5 className="chy-heading-1 title">{item.title}</h5>
                  <p className="chy-para-1 disc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PRICE (SWIPER SLIDER) ── */}
      <div
        className="chy-price-1-area bg-default pt-135 pb-105 chy-class-add fix"
        data-navbar-dark="true"
        style={{ backgroundImage: "url('/assets/img/price/p1-bg-img-1.png')" }}
      >
        <div className="container chy-contaienr-1">
          <div className="swiper chy-price-1-slider mb-95">
            <div className="swiper-container chy_price_1_active">
              <div className="swiper-wrapper">
                {[
                  { service: 'SEO Services', desc: 'Rank higher, drive organic traffic, and turn searchers into customers with our proven SEO packages.' },
                  { service: 'Google Ads', desc: 'Get in front of high-intent buyers instantly with targeted Google Search and Display campaigns.' },
                  { service: 'Social Media Ads', desc: 'Build brand awareness and generate leads through powerful Facebook and Instagram advertising.' },
                  { service: 'OOH Advertising', desc: 'Reach your local audience via grocery store screens, medical centres, and digital out-of-home placements.' },
                ].map((item, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="chy-price-1-slider-item">
                      <div className="left">
                        <div className="chy-price-1-slider-item-img">
                          <img src="/assets/img/price/p1-img-1.png" alt="" />
                          <div className="chy_price_1_next">
                            <i className="fas fa-arrows-alt-h"></i>
                          </div>
                        </div>
                      </div>
                      <div className="transform-orgn">
                        <div className="right">
                          <div className="section-title-wrap mb-25">
                            <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">
                              {item.service}
                            </h2>
                            <p className="chy-section-para-1">
                              {item.desc}
                            </p>
                          </div>
                          <div className="innter-div">
                            <div className="inner-div-left">
                              <div className="chy-price-1-pricing mb-40">
                                <h4 className="chy-heading-1 dollar">Custom</h4>
                                <p className="chy-para-1 monthly">tailored <br /> pricing</p>
                              </div>
                              <a href="/contact-us" className="chy-pr-btn-1">
                                <span className="text">get a quote</span>
                                <span className="icon"><i className="fa-solid fa-right-long"></i></span>
                              </a>
                            </div>
                            <div className="inner-div-right">
                              <img src="/assets/img/price/p1-img-2.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="chy-price-1-pagination"></div>
          </div>

          <div className="chy-price-1-animation-line mb-70">
            <img src="/assets/img/price/p1-il-1.png" className="icon" alt="" />
          </div>

          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-7">
              <div className="chy-price-1-content">
                <div className="section-title-wrap mb-30">
                  <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">
                    Enough Talk — <br /> Let&apos;s Make Things Happen
                  </h2>
                  <p className="chy-section-para-1 wow fadeInUp">
                    Ready to launch a hyper-local marketing campaign that spans grocery stores, social feeds, and Google searches? Connect with one of our experts today and discover how we can tailor a campaign specifically for your business.
                  </p>
                </div>
                <a href="/contact-us" className="chy-pr-btn-1 wow fadeInUp">
                  <span className="text">get a quote</span>
                  <span className="icon"><i className="fa-solid fa-right-long"></i></span>
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="chy-price-1-img img-cover">
                <span className="animation chy-zoomout"></span>
                <img src="/assets/img/price/p1-img-3.png" alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── PROJECT SLIDER ── */}
      <div
        className="chy-project-1-area bg-default pt-120 pb-90 fix"
        data-navbar-dark="true"
        style={{ backgroundImage: "url('/assets/img/project/p1-bg-img-1.png')" }}
      >
        <div className="container chy-container-1">
          <div className="section-title-wrap mb-30 text-center">
            <h5 className="chy-subtitle-1 wow fadeInDown">case studies</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Success Stories We&apos;ve Got In Spades</h2>
          </div>
        </div>
        <div className="chy-project-1-slider">
          <div className="swiper-container fix chy_project_1_active">
            <div className="swiper-wrapper">
              {[
                { img: 'p1-img-2.png', subtitle: 'Facebook Marketing', title: 'Keymer — Website & Facebook Strategy' },
                { img: 'p1-img-3.png', subtitle: 'TikTok Campaign', title: 'Specialist Medical Imaging — 183% Spend Increase' },
                { img: 'p1-img-4.png', subtitle: 'Search Engine Optimisation', title: 'Parkmore Family Dental — 153 Keywords in Top 3' },
                { img: 'p1-img-1.png', subtitle: 'Google Ads', title: 'Local SME — Clicks Converted to Customers' },
                { img: 'p1-img-3.png', subtitle: 'Social Media', title: 'Brand Awareness Campaign Success' },
                { img: 'p1-img-2.png', subtitle: 'OOH Advertising', title: 'Grocery Store Screens Campaign' },
              ].map((item, i) => (
                <div key={i} className="swiper-slide">
                  <div className="chy-project-1-item img-cover">
                    <img src={`/assets/img/project/${item.img}`} alt="" />
                    <div className="content-wrap">
                      <span className="chy-heading-1 subtitle">{item.subtitle}</span>
                      <h4 className="chy-heading-1 title">
                        <a href="/case-studies">{item.title}</a>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="chy-project-1-slider-btn">
            <div className="chy_project_1_prev"><i className="flaticon-left-arrow-1"></i></div>
            <div className="chy_project_1_next"><i className="flaticon-right-arrow"></i></div>
          </div>
        </div>
      </div>

      {/* ── BODY BG 2 ── */}
      <div
        className="body-bg-2 bg-default"
        style={{ backgroundImage: "url('/assets/img/bg/body-bg-2.png')" }}
      >

        {/* ── PRICE CARDS ── */}
        <PricingSection />

        {/* ── TEAM ── */}
        <div className="chy-team-1-area pt-70 pb-75 fix">
          <span className="bg-shape chyt1cc"></span>
          <div className="container chy-container-1">
            <div className="section-title-wrap mb-30 text-center">
              <h5 className="chy-subtitle-1 wow fadeInDown">meet the team</h5>
              <h2 className="chy-title-1 chy-split-in-right chy-split-text">
                The Captains of Our Digital Ship
              </h2>
            </div>
            <div className="chy-team-1-wrap">
              <img src="/assets/img/team/t1-facebook.png" className="il-img-2" alt="" />
              <img src="/assets/img/team/t1-instragram.png" className="il-img-3" alt="" />
              <div className="chy-team-1-member">
                <div className="main-img img-cover">
                  <img src="/assets/img/team/t1-img-1.png" alt="" />
                  <div className="content-wrap">
                    <h5 className="chy-heading-1 name"><a href="/about-us">Preeti Kennedy</a></h5>
                    <p className="chy-para-1 bio">Founder</p>
                  </div>
                </div>
                <img src="/assets/img/team/t1-il-text-1.png" className="text-img" alt="" />
              </div>
              <div className="chy-team-1-member has-style-2">
                <div className="main-img img-cover">
                  <img src="/assets/img/team/t1-img-2.png" alt="" />
                  <div className="content-wrap">
                    <h5 className="chy-heading-1 name"><a href="/about-us">Benjamin Kennedy</a></h5>
                    <p className="chy-para-1 bio">Co-Founder</p>
                  </div>
                </div>
                <img src="/assets/img/team/t1-il-text-2.png" className="text-img" alt="" />
              </div>
            </div>
            <div className="col-12 pt-20 text-center">
              <a href="/about-us" className="chy-pr-btn-1">
                <span className="text">meet the full team</span>
                <span className="icon"><i className="fa-solid fa-right-long"></i></span>
              </a>
            </div>
          </div>
        </div>

        {/* ── TESTIMONIALS SLIDER ── */}
        <div className="chy-team-slider-1-area pt-80 pb-80">
          <div className="container chy-container-1">
            <div className="chy-team-slider-1-wrap">
              <div className="swiper-container chy_team_slider_1_active fix">
                <div className="swiper-wrapper">
                  {[
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
                      quote: "I am so happy with the entire process and end product. Tom Richards from Shopa Marketing handled my digital advertising campaign and web design. Result is excellent.",
                      name: 'Lmt Finance',
                      bio: 'Mortgage Broker, Geelong',
                    },
                  ].map((t, i) => (
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

        {/* ── CLIENTS / INVESTORS ── */}
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

      {/* ── VIDEO ── */}
      <div className="chy-video-1-area img-cover" data-navbar-dark="true">
        <div className="content-wrap">
          <a className="chy-plybtn-2 popup-video chy-zoomout2"
            href="https://www.youtube.com/watch?v=fgWoGHgEN38&list=RDfgWoGHgEN38&start_radio=1"
            aria-label="play video">
            <i className="fas fa-play"></i>
            <img className="text-img" src="/assets/img/video/plybtn-text.png" alt="" />
          </a>
          <h4 className="chy-heading-1 title chy-split-in-right chy-split-text">
            We Help Your Business <br /> Skyrocket to Success
          </h4>
        </div>
        <img className="chy-zoomout2" src="/assets/img/video/v1-img-1.png" alt="" />
      </div>

      {/* ── CTA ── */}
      <div className="chy-cta-1-area chy-slideinup">
        <div className="container chy-container-1">
          <div className="chy-cta-1-wrap">
            <img src="/assets/img/cta/c1-img-1.png" className="bg-img chy-zoomout2" alt="" />
            <div className="chy-cta-1-content">
              <div className="section-title-wrap">
                <h5 className="chy-subtitle-1 wow fadeInDown">contact us</h5>
                <h2 className="chy-title-1 chy-split-in-right chy-split-text">
                  Ready to Say Goodbye <br /> to Marketing Headaches?
                </h2>
              </div>
              <a href="/contact-us" className="chy-pr-btn-1">
                <span className="text">let&apos;s get started</span>
                <span className="icon"><i className="fa-solid fa-right-long"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── BLOG ── */}
      <div
        className="chy-blog-1-area pt-110 pb-70 bg-default fix"
        style={{ backgroundImage: "url('/assets/img/blog/b1-bg-1.png')" }}
      >
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
