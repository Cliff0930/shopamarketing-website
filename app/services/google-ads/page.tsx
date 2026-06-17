import TemplateScripts from "@/components/TemplateScripts";

export default function GoogleAdsPage() {
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
                <h2 className="breadcrumb-title chy-heading-1 chy-split-in-right chy-split-text">Google Ads</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-duration="2s">
                  <a href="/">Home</a>
                  <a href="/services">Services</a>
                  <span>Google Ads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb-area-end */}

      {/* service-details-start */}
      <div className="service-details-area pt-120 pb-70">
        <div className="container chy-container-1">
          <div className="row">

            {/* left column */}
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="service-details-content mb-50">

                <div className="service-details-main-img img-cover">
                  <img src="/assets/img/services/sd-img-1.jpg" alt="Google Ads" />
                </div>

                <h2 className="chy-heading-1 service-details-title chy-split-in-right chy-split-text">Google Ads: Get In Front of Ready-to-Buy Customers</h2>

                <p className="chy-para-1 inner-page-disc">
                  Google Ads puts your business in front of high-intent customers at the exact moment they&apos;re searching for what you offer. Our Google Ads management service helps Australian businesses capture demand, generate leads, and drive sales with precision-targeted campaigns that deliver measurable ROI.
                </p>
                <p className="chy-para-1 inner-page-disc">
                  We manage Search, Shopping, Display, YouTube, and Performance Max campaigns across Google&apos;s full network — always focused on the metrics that actually matter to your business, not just clicks and impressions.
                </p>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">What We Provide</h2>

                <p className="chy-para-1 inner-page-disc">
                  From account setup and keyword strategy to ongoing optimisation and reporting, we handle every aspect of your Google Ads campaigns to maximise return on ad spend.
                </p>

                <div className="service-details-feature mb-30 mt-30">
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-target"></i></div>
                      <h4 className="chy-heading-1 title">Campaign Strategy</h4>
                    </div>
                    <p className="chy-para-1 text">Comprehensive keyword research, competitor analysis, and campaign architecture designed to capture intent at every stage of the buyer journey.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-megaphone"></i></div>
                      <h4 className="chy-heading-1 title">Ad Copywriting</h4>
                    </div>
                    <p className="chy-para-1 text">Compelling ad copy crafted to maximise click-through rates and quality scores — reducing your cost per click while improving ad positions.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-web-design-1"></i></div>
                      <h4 className="chy-heading-1 title">Bid Management</h4>
                    </div>
                    <p className="chy-para-1 text">Smart bidding strategy and manual oversight to allocate budget where it delivers the highest return — continuously adjusted as market conditions change.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-web-design"></i></div>
                      <h4 className="chy-heading-1 title">Conversion Tracking</h4>
                    </div>
                    <p className="chy-para-1 text">Full conversion tracking setup — calls, form fills, purchases, and micro-conversions — so every optimisation decision is grounded in real revenue data.</p>
                  </div>
                </div>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">The Challenge</h2>

                <p className="chy-para-1 inner-page-disc">
                  Google Ads is increasingly complex — smart bidding, Performance Max campaigns, consent mode, and constant algorithm updates make it harder than ever to maintain profitability without specialist expertise. Poor account structure and wasted spend on irrelevant searches can quickly drain your budget. Our team actively manages your campaigns to eliminate waste and drive consistent results.
                </p>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Frequently Asked Questions</h2>

                <div className="accordion chy-sd-1-item wow fadeInUp" id="acc-gads">

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="gads-h1">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#gads-c1" aria-expanded="true" aria-controls="gads-c1">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">How much should I spend on Google Ads?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="gads-c1" className="accordion-collapse collapse show" aria-labelledby="gads-h1" data-bs-parent="#acc-gads">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">The right budget depends on your industry, competition, and goals. We typically recommend a minimum of $2,000/month in ad spend to compete effectively in most markets. We&apos;ll provide a budget recommendation based on keyword research for your specific industry.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="gads-h2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#gads-c2" aria-expanded="false" aria-controls="gads-c2">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">Do I own my Google Ads account?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="gads-c2" className="accordion-collapse collapse" aria-labelledby="gads-h2" data-bs-parent="#acc-gads">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">Yes, always. We work inside your own Google Ads account, which you own and retain full access to. We never lock clients into proprietary accounts. All your campaign data and history stays with you if you ever decide to manage campaigns in-house or switch agencies.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="gads-h3">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#gads-c3" aria-expanded="false" aria-controls="gads-c3">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">How quickly can Google Ads generate leads?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="gads-c3" className="accordion-collapse collapse" aria-labelledby="gads-h3" data-bs-parent="#acc-gads">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">Google Ads can start driving traffic within hours of campaign launch. The first 2–4 weeks is typically a learning phase. Most clients see strong lead flow by week 4–6 as smart bidding strategies mature.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="gads-h4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#gads-c4" aria-expanded="false" aria-controls="gads-c4">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">What types of Google Ads campaigns do you run?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="gads-c4" className="accordion-collapse collapse" aria-labelledby="gads-h4" data-bs-parent="#acc-gads">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">We manage Search, Shopping, Display, YouTube video, and Performance Max campaigns. We&apos;ll recommend the right campaign types based on your business objectives and budget.</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* sidebar */}
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="blog-2-page-sidebar mb-50">

                <div className="sidebar-box mb-30 wow fadeInUp">
                  <h4 className="sidebar-box-title chy-heading-1">Services</h4>
                  <div className="sidebar-box-wrap">
                    <ul className="sidebar-category">
                      <li className="wow fadeInUp"><a href="/services/done-for-you"><span className="text">Done For You</span><span className="icon-1"><i className="flaticon-next"></i></span></a></li>
                      <li className="wow fadeInUp"><a href="/services/ooh-advertising"><span className="text">OOH Advertising</span><span className="icon-1"><i className="flaticon-next"></i></span></a></li>
                      <li className="wow fadeInUp"><a href="/services/seo-services"><span className="text">SEO Services</span><span className="icon-1"><i className="flaticon-next"></i></span></a></li>
                      <li className="wow fadeInUp"><a href="/services/social-media"><span className="text">Social Media Ads</span><span className="icon-1"><i className="flaticon-next"></i></span></a></li>
                      <li className="wow fadeInUp"><a href="/services/website"><span className="text">Website Design</span><span className="icon-1"><i className="flaticon-next"></i></span></a></li>
                      <li className="wow fadeInUp"><a href="/services/google-ads"><span className="text">Google Ads</span><span className="icon-1"><i className="flaticon-next"></i></span></a></li>
                      <li className="wow fadeInUp"><a href="/services/graphic-design"><span className="text">Graphic Design</span><span className="icon-1"><i className="flaticon-next"></i></span></a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      {/* service-details-end */}

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
