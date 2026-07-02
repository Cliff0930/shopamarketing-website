import TemplateScripts from "@/components/TemplateScripts";
import HeroCounters from "@/components/HeroCounters";

export default function AboutUsPage() {
  return (
    <>
      <TemplateScripts />
      <HeroCounters />

      {/* preloader-start */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>
      {/* preloader-end */}

      {/* ── ABOUT HERO ── */}
      <section className="about-hero">
        <div className="container chy-container-1">
          <div className="about-hero__inner">

            <h1 className="chy-title-1 about-hero__headline wow fadeInLeft" data-wow-duration="1.2s">
              The People Behind <br />Your Growth.
            </h1>

            <p className="about-hero__sub wow fadeInUp" data-wow-duration="2s">
              Shopa Marketing is a team of senior specialists — not a revolving door of juniors. For over a decade we&apos;ve helped SMEs across Australia and New Zealand grow with honest strategy and real results.
            </p>

            {/* Stats strip */}
            <div className="about-hero__stats about-hero__stats--animate">
              <div className="about-hero__stat">
                <span className="about-hero__stat-num"><span id="hero-counter-1">0</span>+</span>
                <span className="about-hero__stat-label">Years Combined Experience</span>
              </div>
              <div className="about-hero__stat-divider" />
              <div className="about-hero__stat">
                <span className="about-hero__stat-num"><span id="hero-counter-2">0</span>+</span>
                <span className="about-hero__stat-label">Campaigns Delivered</span>
              </div>
              <div className="about-hero__stat-divider" />
              <div className="about-hero__stat">
                <span className="about-hero__stat-num"><span id="hero-counter-3">0</span>+</span>
                <span className="about-hero__stat-label">Businesses Served</span>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ── ABOUT HERO END ── */}

      <div
        className="body-bg-1 bg-default"
        style={{ backgroundImage: "url('/assets/img/bg/body-bg-1.png')" }}
      >
        {/* solutions-start */}
        <div className="chy-solutions-1-area pt-120 pb-140 fix">
          <div className="container chy-container-1">
            <div className="row align-items-center">

              {/* left-content */}
              <div className="col-xl-5 col-lg-6">
                <div className="chy-solutions-1-content">
                  <div className="section-title-wrap mb-35">
                    <h5 className="chy-subtitle-1 wow fadeInLeft">consulting solutions</h5>
                    <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">Skillset to improve Your Company Brand</h2>
                    <p className="chy-section-para-1 wow fadeInLeft">Every pleasure is to be welcomed and every pain avoided. certain circumstances and owing to the claims welcomed and every pain avoided certain circumstances</p>
                  </div>

                  <div className="inner-div mb-50">
                    <div className="inner-img img-cover wow zoomIn">
                      <img src="/assets/img/solutions/s1-img-2.png" alt="" />
                    </div>
                    <div className="inner-img wow zoomIn" data-wow-delay=".3s">
                      <img src="/assets/img/solutions/s1-img-3.png" alt="" />
                    </div>
                  </div>

                  <a className="chy-pr-btn-1 wow fadeInLeft">
                    <span className="text">explore more</span>
                    <span className="icon">
                      <i className="fa-solid fa-right-long"></i>
                    </span>
                  </a>
                </div>
              </div>

              {/* right-img */}
              <div className="col-xl-7 col-lg-6">
                <div className="chy-solutions-1-img">
                  <div className="main-img rotatedscal">
                    <img src="/assets/img/solutions/s1-img-1png.png" alt="" />
                  </div>
                  <div className="chy-solutions-1-goals">
                    <h5 className="chy-heading-1 title">goals</h5>
                    <div className="chy-solutions-1-goals-item">
                      <div className="icon">
                        <i className="flaticon-digital-campaign"></i>
                      </div>
                      <div className="content-wrap">
                        <h4 className="chy-heading-1 number"><span className="counter">64</span>%</h4>
                        <p className="chy-para-1 disc">cover marketing</p>
                      </div>
                    </div>
                    <div className="chy-solutions-1-goals-item has-bg">
                      <div className="icon">
                        <i className="flaticon-email"></i>
                      </div>
                      <div className="content-wrap">
                        <h4 className="chy-heading-1 number"><span className="counter">94</span>%</h4>
                        <p className="chy-para-1 disc">sms marketing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* solutions-end */}

        {/* research-start */}
        <div
          className="chy-research-1-area pt-115 pb-70 bg-default fix"
          data-navbar-dark="true"
          style={{ backgroundImage: "url('/assets/img/research/r1-bg-img-1.png')" }}
        >
          <div className="container chy-container-1">

            {/* section-title */}
            <div className="section-title-wrap mb-35 text-center">
              <h5 className="chy-subtitle-1 wow fadeInDown">consulting services</h5>
              <h2 className="chy-title-1 chy-split-in-right chy-split-text">potential research</h2>
              <p className="chy-section-para-1">Every pleasure is to be welcomed and every pain avoided. certain circumstances and owing to the claims</p>
            </div>

            <div className="row">

              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="chy-research-1-item chy-slideinleft">
                  <div className="main-img">
                    <img src="/assets/img/research/r1-img-1.png" alt="" />
                    <div className="icon">
                      <img src="/assets/img/research/r1-icon-1.png" alt="" />
                    </div>
                  </div>
                  <h5 className="chy-heading-1 title">Digital Marketing</h5>
                  <p className="chy-para-1 disc">Every pleasure is to be welcomed and every pain avoided.</p>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="chy-research-1-item chy-slideinup">
                  <div className="main-img">
                    <img src="/assets/img/research/r1-img-2.png" alt="" />
                    <div className="icon">
                      <img src="/assets/img/research/r1-icon-2.png" alt="" />
                    </div>
                  </div>
                  <h5 className="chy-heading-1 title">SEO Optimization</h5>
                  <p className="chy-para-1 disc">Every pleasure is to be welcomed and every pain avoided.</p>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="chy-research-1-item chy-slideinup">
                  <div className="main-img">
                    <img src="/assets/img/research/r1-img-3.png" alt="" />
                    <div className="icon">
                      <img src="/assets/img/research/r1-icon-3.png" alt="" />
                    </div>
                  </div>
                  <h5 className="chy-heading-1 title">Product Research</h5>
                  <p className="chy-para-1 disc">Every pleasure is to be welcomed and every pain avoided.</p>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="chy-research-1-item chy-slideinright">
                  <div className="main-img">
                    <img src="/assets/img/research/r1-img-4.png" alt="" />
                    <div className="icon">
                      <img src="/assets/img/research/r1-icon-4.png" alt="" />
                    </div>
                  </div>
                  <h5 className="chy-heading-1 title">Web Development</h5>
                  <p className="chy-para-1 disc">Every pleasure is to be welcomed and every pain avoided.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
        {/* research-end */}

      </div>

      <div
        className="body-bg-1 bg-default"
        style={{ backgroundImage: "url('/assets/img/bg/body-bg-1.png')" }}
      >
        {/* price-card-start */}
        <div className="chy-price-card-1-area pt-115 pb-90">
          <div className="container chy-container-1">

            <div className="section-title-wrap mb-30 text-center">
              <h5 className="chy-subtitle-1 wow fadeInDown">discount price</h5>
              <h2 className="chy-title-1 chy-split-in-right chy-split-text">make brand identities</h2>
            </div>

            <div className="row chy-price-card-1-hight">

              {/* single-card */}
              <div className="col-xl-4 col-lg-6 col-md-6 asslideupcta">
                <div className="chy-price-card-1-item">
                  <div className="icon-wrap">
                    <div className="icon">
                      <img src="/assets/img/price/pc-1-icon-1.png" alt="" />
                    </div>
                    <h3 className="chy-heading-1 price">$29/monthly</h3>
                  </div>
                  <h6 className="chy-heading-1 title">business</h6>
                  <p className="chy-para-1 disc">Every pleasure is to be welcomed and every pain avoided. is to be welcomed and every</p>
                  <a href="#" className="pc1-btn">get started</a>
                  <p className="chy-heading-1 date">14-day free trial - No credit card Required</p>
                  <ul className="chy-price-card-1-item-list">
                    <li><i className="flaticon-check"></i> setup &amp; onboarding</li>
                    <li><i className="flaticon-check"></i> onboarding &amp; setup</li>
                    <li><i className="flaticon-check"></i> awosame consulting</li>
                  </ul>
                  <img src="/assets/img/price/p1-il-2.png" alt="" className="style-icon" />
                </div>
              </div>

              {/* single-card */}
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="chy-price-card-1-item active">
                  <div className="icon-wrap">
                    <div className="icon">
                      <img src="/assets/img/price/pc-1-icon-2.png" alt="" />
                    </div>
                    <h3 className="chy-heading-1 price">$69/monthly</h3>
                  </div>
                  <h6 className="chy-heading-1 title">agency</h6>
                  <p className="chy-para-1 disc">Every pleasure is to be welcomed and every pain avoided. is to be welcomed and every</p>
                  <a href="#" className="pc1-btn">get started</a>
                  <p className="chy-heading-1 date">30-day free trial - No credit card Required</p>
                  <ul className="chy-price-card-1-item-list">
                    <li><i className="flaticon-check"></i> setup &amp; onboarding</li>
                    <li><i className="flaticon-check"></i> onboarding &amp; setup</li>
                    <li><i className="flaticon-check"></i> awosame consulting</li>
                  </ul>
                  <img src="/assets/img/price/p1-il-2.png" alt="" className="style-icon" />
                </div>
              </div>

              {/* single-card */}
              <div className="col-xl-4 col-lg-6 col-md-6 asslideupcta">
                <div className="chy-price-card-1-item">
                  <div className="icon-wrap">
                    <div className="icon">
                      <img src="/assets/img/price/pc-1-icon-3.png" alt="" />
                    </div>
                    <h3 className="chy-heading-1 price">$99/monthly</h3>
                  </div>
                  <h6 className="chy-heading-1 title">company</h6>
                  <p className="chy-para-1 disc">Every pleasure is to be welcomed and every pain avoided. is to be welcomed and every</p>
                  <a href="#" className="pc1-btn">get started</a>
                  <p className="chy-heading-1 date">60-day free trial - No credit card Required</p>
                  <ul className="chy-price-card-1-item-list">
                    <li><i className="flaticon-check"></i> setup &amp; onboarding</li>
                    <li><i className="flaticon-check"></i> onboarding &amp; setup</li>
                    <li><i className="flaticon-check"></i> awosame consulting</li>
                  </ul>
                  <img src="/assets/img/price/p1-il-2.png" alt="" className="style-icon" />
                </div>
              </div>

            </div>

          </div>
        </div>
        {/* price-card-end */}

      </div>

      {/* video-start */}
      <div className="chy-video-1-area img-cover" data-navbar-dark="true">
        <div className="content-wrap">
          <a
            className="chy-plybtn-2 popup-video chy-zoomout2"
            href="https://www.youtube.com/watch?v=fgWoGHgEN38&list=RDfgWoGHgEN38&start_radio=1"
          >
            <i className="fas fa-play"></i>
            <img className="text-img" src="/assets/img/video/plybtn-text.png" alt="" />
          </a>
          <h4 className="chy-heading-1 title chy-split-in-right chy-split-text">We Help Your Business <br /> To Become Stronger</h4>
        </div>
        <img className="chy-zoomout2" src="/assets/img/video/v1-img-1.png" alt="" />
      </div>
      {/* video-end */}

      <div
        className="body-bg-1 bg-default"
        style={{ backgroundImage: "url('/assets/img/bg/body-bg-1.png')" }}
      >
        {/* cta-start */}
        <div className="chy-cta-1-area chy-slideinup">
          <div className="container chy-container-1">
            <div className="chy-cta-1-wrap">
              <img src="/assets/img/cta/c1-img-1.png" className="bg-img chy-zoomout2" alt="" />
              <div className="chy-cta-1-content">
                <div className="section-title-wrap">
                  <h5 className="chy-subtitle-1 wow fadeInDown">contact us</h5>
                  <h2 className="chy-title-1 chy-split-in-right chy-split-text">Ready To Experience <br /> Upstage yourself?</h2>
                </div>
                <a className="chy-pr-btn-1">
                  <span className="text">let&apos;s get started</span>
                  <span className="icon">
                    <i className="fa-solid fa-right-long"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* cta-end */}

        {/* team-slider-start */}
        <div className="chy-team-slider-1-area pt-120 pb-80">
          <div className="container chy-container-1">
            <div className="chy-team-slider-1-wrap">
              <div className="swiper-container chy_team_slider_1_active fix">
                <div className="swiper-wrapper">

                  <div className="swiper-slide">
                    <div className="chy-team-slider-1-item">
                      <div className="main-img">
                        <img src="/assets/img/team/t1-slider-img-1.png" alt="" />
                      </div>
                      <div className="content-wrap">
                        <h4 className="chy-heading-1 title">a framework for scaling teams</h4>
                        <p className="chy-para-1 comment">Every pleasure is to be welcomed and every pain avoided. is to be welcomedt and every Every pleasure is to be welcomed and every pain avoided. is to be welcomed every Every pleasure is to be welcomed</p>
                        <div className="person">
                          <h5 className="chy-heading-1 name">logon d</h5>
                          <span className="chy-para-1 bio">Founder, Marketing agency</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="chy-team-slider-1-item">
                      <div className="main-img">
                        <img src="/assets/img/team/t1-slider-img-1.png" alt="" />
                      </div>
                      <div className="content-wrap">
                        <h4 className="chy-heading-1 title">a framework for scaling teams</h4>
                        <p className="chy-para-1 comment">Every pleasure is to be welcomed and every pain avoided. is to be welcomedt and every Every pleasure is to be welcomed and every pain avoided. is to be welcomed every Every pleasure is to be welcomed</p>
                        <div className="person">
                          <h5 className="chy-heading-1 name">logon d</h5>
                          <span className="chy-para-1 bio">Founder, Marketing agency</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="chy-team-slider-1-item">
                      <div className="main-img">
                        <img src="/assets/img/team/t1-slider-img-1.png" alt="" />
                      </div>
                      <div className="content-wrap">
                        <h4 className="chy-heading-1 title">a framework for scaling teams</h4>
                        <p className="chy-para-1 comment">Every pleasure is to be welcomed and every pain avoided. is to be welcomedt and every Every pleasure is to be welcomed and every pain avoided. is to be welcomed every Every pleasure is to be welcomed</p>
                        <div className="person">
                          <h5 className="chy-heading-1 name">logon d</h5>
                          <span className="chy-para-1 bio">Founder, Marketing agency</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="chy-team-slider-1-pagination"></div>
            </div>
          </div>
        </div>
        {/* team-slider-end */}

        {/* client-start */}
        <div className="chy-client-1-area pb-120 fix">
          <div className="container chy-container-1">
            <div className="chy-client-1-wrap">
              <div className="row align-items-center">

                <div className="col-lg-5">
                  <div className="chy-client-1-content chy-slideinright">
                    <h3 className="chy-heading-1 title chy-split-in-right chy-split-text">our investors</h3>
                    <p className="chy-para-1 disc wow fadeInRight">Every pleasure is to be welcomed and <br /> every pain avoided.certain circumstances</p>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="chy-client-1-logo chy-slideinright">
                    <div className="logo-item">
                      <img className="logo-1" src="/assets/img/client/logo-1.png" alt="" />
                      <img className="logo-2" src="/assets/img/client/logo-1.png" alt="" />
                    </div>
                    <div className="logo-item">
                      <img className="logo-1" src="/assets/img/client/logo-2.png" alt="" />
                      <img className="logo-2" src="/assets/img/client/logo-2.png" alt="" />
                    </div>
                    <div className="logo-item">
                      <img className="logo-1" src="/assets/img/client/logo-3.png" alt="" />
                      <img className="logo-2" src="/assets/img/client/logo-3.png" alt="" />
                    </div>
                    <div className="logo-item">
                      <img className="logo-1" src="/assets/img/client/logo-4.png" alt="" />
                      <img className="logo-2" src="/assets/img/client/logo-4.png" alt="" />
                    </div>
                    <div className="logo-item">
                      <img className="logo-1" src="/assets/img/client/logo-5.png" alt="" />
                      <img className="logo-2" src="/assets/img/client/logo-5.png" alt="" />
                    </div>
                    <div className="logo-item">
                      <img className="logo-1" src="/assets/img/client/logo-6.png" alt="" />
                      <img className="logo-2" src="/assets/img/client/logo-6.png" alt="" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* client-end */}

      </div>

      {/* back-to-top-button-start */}
      <div className="scroll-top has-home-1">
        <div className="scroll-top-wrap">
          <i className="icon-1 fal fa-long-arrow-up"></i>
        </div>
      </div>
      {/* back-to-top-button-end */}

      {/* overlay */}
      <div className="offcanvas-overlay"></div>
    </>
  );
}
