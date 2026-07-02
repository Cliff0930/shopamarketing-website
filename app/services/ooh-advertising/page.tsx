import TemplateScripts from "@/components/TemplateScripts";
import ServiceHero from "@/components/ServiceHero";

export default function OohAdvertisingPage() {
  return (
    <>
      <TemplateScripts />

      {/* preloader-start */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>
      {/* preloader-end */}

      <ServiceHero
        headline="Get Seen Where Your Customers Actually Are."
        subtext="Billboards, transit, and outdoor media planned and placed for maximum local reach — from concept to installation."
      />

      {/* service-details-start */}
      <div className="service-details-area pt-120 pb-70">
        <div className="container chy-container-1">
          <div className="row">

            {/* left column */}
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="service-details-content mb-50">

                <div className="service-details-main-img img-cover">
                  <img src="/assets/img/services/sd-img-1.jpg" alt="OOH Advertising" />
                </div>

                <h2 className="chy-heading-1 service-details-title chy-split-in-right chy-split-text">OOH Advertising: Make Your Brand Unmissable</h2>

                <p className="chy-para-1 inner-page-disc">
                  Out-of-Home advertising places your brand in front of audiences where they live, work, and play. From billboards and transit ads to digital screens and street furniture, our OOH advertising service helps Australian businesses command attention and drive brand recall at scale.
                </p>
                <p className="chy-para-1 inner-page-disc">
                  We handle everything from creative concept and production through to placement, scheduling, and performance reporting — ensuring your OOH campaign delivers maximum impact within your budget.
                </p>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">What We Provide</h2>

                <p className="chy-para-1 inner-page-disc">
                  Our OOH advertising service covers the full campaign lifecycle — strategy, creative, media buying, production, installation, and measurement — all under one roof.
                </p>

                <div className="service-details-feature mb-30 mt-30">
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-target"></i></div>
                      <h4 className="chy-heading-1 title">Strategic Planning</h4>
                    </div>
                    <p className="chy-para-1 text">Identify the right formats, locations, and timing to reach your target audience with precision and efficiency.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-megaphone"></i></div>
                      <h4 className="chy-heading-1 title">Creative Design</h4>
                    </div>
                    <p className="chy-para-1 text">Bold, impactful creative designed specifically for OOH formats — built to stop audiences in their tracks and leave a lasting impression.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-web-design-1"></i></div>
                      <h4 className="chy-heading-1 title">Media Buying</h4>
                    </div>
                    <p className="chy-para-1 text">Leverage our media relationships to secure prime placements at competitive rates, from premium billboards to transit networks.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-web-design"></i></div>
                      <h4 className="chy-heading-1 title">Campaign Reporting</h4>
                    </div>
                    <p className="chy-para-1 text">Measure reach, frequency, and brand lift with post-campaign analysis and audience data to inform future placements.</p>
                  </div>
                </div>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">The Challenge</h2>

                <p className="chy-para-1 inner-page-disc">
                  In an increasingly digital world, physical advertising cuts through the noise in ways screens can&apos;t. But OOH advertising requires specialist knowledge of formats, audiences, and media networks. Without the right strategy and creative, budget is easily wasted on placements that don&apos;t deliver. We bring the expertise to make every dollar count.
                </p>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Frequently Asked Questions</h2>

                <div className="accordion chy-sd-1-item wow fadeInUp" id="acc-ooh">

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="ooh-h1">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ooh-c1" aria-expanded="true" aria-controls="ooh-c1">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">What types of OOH advertising do you offer?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="ooh-c1" className="accordion-collapse collapse show" aria-labelledby="ooh-h1" data-bs-parent="#acc-ooh">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">We work across the full spectrum of OOH formats including billboards (static and digital), transit advertising (buses, trains, taxis), street furniture (bus shelters, kiosks), airport advertising, shopping centre displays, and large-format building wraps.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="ooh-h2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ooh-c2" aria-expanded="false" aria-controls="ooh-c2">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">What budget do I need for an OOH campaign?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="ooh-c2" className="accordion-collapse collapse" aria-labelledby="ooh-h2" data-bs-parent="#acc-ooh">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">We recommend a minimum of $5,000 for local campaigns and $20,000+ for city-wide or national campaigns. We&apos;ll work with your budget to maximise impact and coverage.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="ooh-h3">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ooh-c3" aria-expanded="false" aria-controls="ooh-c3">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">How do you measure OOH campaign effectiveness?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="ooh-c3" className="accordion-collapse collapse" aria-labelledby="ooh-h3" data-bs-parent="#acc-ooh">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">We measure OOH effectiveness using audience reach data, foot traffic analysis, brand lift studies, and integration with your digital campaigns to track uplift in online searches and website visits during the campaign period.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="ooh-h4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ooh-c4" aria-expanded="false" aria-controls="ooh-c4">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">How long does it take to launch an OOH campaign?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="ooh-c4" className="accordion-collapse collapse" aria-labelledby="ooh-h4" data-bs-parent="#acc-ooh">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">A typical OOH campaign takes 3–6 weeks from briefing to launch. Digital OOH formats can be deployed more quickly — sometimes within days of creative approval.</div>
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
