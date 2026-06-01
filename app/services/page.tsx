import TemplateScripts from "@/components/TemplateScripts";

export default function ServicesPage() {
  return (
    <>
      <TemplateScripts />

      {/* preloader-start */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>
      {/* preloader-end */}

      {/* breadcrumb-area-start */}
      <div
        className="breadcrumb-area bg-default has-breadcrumb-overlay"
        style={{ backgroundImage: "url('/assets/img/breadcrumb/breadcrumb-img-1.jpg')" }}
      >
        <div className="container h1-container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb-wrap text-center">
                <h2 className="breadcrumb-title chy-heading-1 chy-split-in-right chy-split-text">our services</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-duration="2s">
                  <a href="/">Home</a>
                  <span>services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb-area-end */}

      <div
        className="body-bg-1 bg-default"
        style={{ backgroundImage: "url('/assets/img/bg/body-bg-1.png')" }}
      >
        {/* services-start */}
        <div className="chy-services-1-area pt-120 pb-120 fix">
          <div className="container chy-container-1">
            <div className="section-title-wrap text-center mb-40">
              <h5 className="chy-subtitle-1 wow fadeInDown">consulting services</h5>
              <h2 className="chy-title-1 chy-split-in-right chy-split-text">consulting costing</h2>
            </div>

            {/* row 1 */}
            <div className="chy-services-1-wrap mb-30">

              <div className="chy-services-1-item asslideupcta">
                <div className="header">
                  <div className="icon">
                    <img src="/assets/img/services/s1-icon-1.png" alt="" />
                  </div>
                  <h4 className="chy-heading-1 title">web development</h4>
                  <p className="chy-para-1 disc">Every pleasure is to be welcomed and every pain avoided.</p>
                </div>
                <div className="body">
                  <ul className="chy-services-1-item-list">
                    <li><i className="flaticon-straight-right-arrow"></i> diversity business</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Risk Management</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Certificated Company</li>
                  </ul>
                  <a aria-label="service detail" href="/services" className="s1-btn">
                    <i className="flaticon-right-up"></i>
                  </a>
                </div>
              </div>

              <div className="chy-services-1-item">
                <div className="header">
                  <div className="icon">
                    <img src="/assets/img/services/s1-icon-2.png" alt="" />
                  </div>
                  <h4 className="chy-heading-1 title">Digital Marketing</h4>
                  <p className="chy-para-1 disc">Every pleasure is to be welcomed and every pain avoided.</p>
                </div>
                <div className="body">
                  <ul className="chy-services-1-item-list">
                    <li><i className="flaticon-straight-right-arrow"></i> Explore Pricing</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Risk Management</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Pixel &amp; Perfect Design</li>
                  </ul>
                  <a aria-label="service detail" href="/services" className="s1-btn">
                    <i className="flaticon-right-up"></i>
                  </a>
                </div>
              </div>

              <div className="chy-services-1-item asslideupcta">
                <div className="header">
                  <div className="icon">
                    <img src="/assets/img/services/s1-icon-3.png" alt="" />
                  </div>
                  <h4 className="chy-heading-1 title">Clock Fly Strategy</h4>
                  <p className="chy-para-1 disc">Every pleasure is to be welcomed and every pain avoided.</p>
                </div>
                <div className="body">
                  <ul className="chy-services-1-item-list">
                    <li><i className="flaticon-straight-right-arrow"></i> SEO Copywriting</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Plans &amp; Pricing</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Risk Management</li>
                  </ul>
                  <a aria-label="service detail" href="/services" className="s1-btn">
                    <i className="flaticon-right-up"></i>
                  </a>
                </div>
              </div>

            </div>

            {/* row 2 */}
            <div className="chy-services-1-wrap">

              <div className="chy-services-1-item asslideupcta">
                <div className="header">
                  <div className="icon">
                    <img src="/assets/img/services/s1-icon-4.png" alt="" />
                  </div>
                  <h4 className="chy-heading-1 title">Digital strategy</h4>
                  <p className="chy-para-1 disc">Every pleasure is to be welcomed and every pain avoided.</p>
                </div>
                <div className="body">
                  <ul className="chy-services-1-item-list">
                    <li><i className="flaticon-straight-right-arrow"></i> diversity business</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Risk Management</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Certificated Company</li>
                  </ul>
                  <a aria-label="service detail" href="/services" className="s1-btn">
                    <i className="flaticon-right-up"></i>
                  </a>
                </div>
              </div>

              <div className="chy-services-1-item">
                <div className="header">
                  <div className="icon">
                    <img src="/assets/img/services/s1-icon-5.png" alt="" />
                  </div>
                  <h4 className="chy-heading-1 title">Brand Design Identity</h4>
                  <p className="chy-para-1 disc">Every pleasure is to be welcomed and every pain avoided.</p>
                </div>
                <div className="body">
                  <ul className="chy-services-1-item-list">
                    <li><i className="flaticon-straight-right-arrow"></i> Explore Pricing</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Risk Management</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Pixel &amp; Perfect Design</li>
                  </ul>
                  <a aria-label="service detail" href="/services" className="s1-btn">
                    <i className="flaticon-right-up"></i>
                  </a>
                </div>
              </div>

              <div className="chy-services-1-item asslideupcta">
                <div className="header">
                  <div className="icon">
                    <img src="/assets/img/services/s1-icon-6.png" alt="" />
                  </div>
                  <h4 className="chy-heading-1 title">Email Marketing</h4>
                  <p className="chy-para-1 disc">Every pleasure is to be welcomed and every pain avoided.</p>
                </div>
                <div className="body">
                  <ul className="chy-services-1-item-list">
                    <li><i className="flaticon-straight-right-arrow"></i> SEO Copywriting</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Plans &amp; Pricing</li>
                    <li><i className="flaticon-straight-right-arrow"></i> Risk Management</li>
                  </ul>
                  <a aria-label="service detail" href="/services" className="s1-btn">
                    <i className="flaticon-right-up"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* services-end */}

      </div>

      {/* video-start */}
      <div className="chy-video-1-area img-cover" data-navbar-dark="true">
        <div className="content-wrap">
          <a
            aria-label="play video"
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
