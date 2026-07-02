import TemplateScripts from "@/components/TemplateScripts";
import ServiceHero from "@/components/ServiceHero";

export default function SocialMediaPage() {
  return (
    <>
      <TemplateScripts />

      {/* preloader-start */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>
      {/* preloader-end */}

      <ServiceHero
        headline="Social Ads That Actually Convert."
        subtext="Meta and Instagram campaigns built on real audience data — not boosted posts. Creative, targeting, and reporting that ties back to revenue."
      />

      {/* service-details-start */}
      <div className="service-details-area pt-120 pb-70">
        <div className="container chy-container-1">
          <div className="row">

            {/* left column */}
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="service-details-content mb-50">

                <div className="service-details-main-img img-cover">
                  <img src="/assets/img/services/sd-img-1.jpg" alt="Social Media Ads" />
                </div>

                <h2 className="chy-heading-1 service-details-title chy-split-in-right chy-split-text">Social Media Ads: Targeted Campaigns That Convert</h2>

                <p className="chy-para-1 inner-page-disc">
                  Social media advertising gives businesses unparalleled ability to reach precisely defined audiences with compelling creative at scale. Our social media ads service helps Australian businesses drive leads, sales, and brand awareness across Facebook, Instagram, TikTok, LinkedIn, and beyond.
                </p>
                <p className="chy-para-1 inner-page-disc">
                  We combine audience intelligence, creative strategy, and performance optimisation to deliver campaigns that go beyond impressions — we focus on outcomes that directly impact your bottom line.
                </p>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">What We Provide</h2>

                <p className="chy-para-1 inner-page-disc">
                  From campaign strategy and audience building to creative production and ongoing optimisation, we manage every element of your social media advertising for maximum ROI.
                </p>

                <div className="service-details-feature mb-30 mt-30">
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-target"></i></div>
                      <h4 className="chy-heading-1 title">Audience Targeting</h4>
                    </div>
                    <p className="chy-para-1 text">Build precise custom audiences using demographics, interests, behaviours, lookalikes, and retargeting to reach the right people at the right moment.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-megaphone"></i></div>
                      <h4 className="chy-heading-1 title">Ad Creative</h4>
                    </div>
                    <p className="chy-para-1 text">Scroll-stopping creative — static images, video, carousel, and stories — crafted to communicate your message and compel action.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-web-design-1"></i></div>
                      <h4 className="chy-heading-1 title">Campaign Management</h4>
                    </div>
                    <p className="chy-para-1 text">Ongoing campaign monitoring, A/B testing, bid optimisation, and budget management to continuously improve performance and reduce cost per result.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-web-design"></i></div>
                      <h4 className="chy-heading-1 title">Performance Reporting</h4>
                    </div>
                    <p className="chy-para-1 text">Clear, jargon-free reporting on reach, engagement, leads, conversions, and ROAS — with actionable insights each month.</p>
                  </div>
                </div>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">The Challenge</h2>

                <p className="chy-para-1 inner-page-disc">
                  Social media platforms constantly evolve their algorithms, ad formats, and targeting capabilities. Without specialist expertise and daily attention, ad budgets are easily wasted on campaigns that don&apos;t deliver. Our team stays ahead of platform changes to keep your campaigns profitable.
                </p>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Frequently Asked Questions</h2>

                <div className="accordion chy-sd-1-item wow fadeInUp" id="acc-social">

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="social-h1">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#social-c1" aria-expanded="true" aria-controls="social-c1">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">Which social platforms do you advertise on?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="social-c1" className="accordion-collapse collapse show" aria-labelledby="social-h1" data-bs-parent="#acc-social">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">We run campaigns across Facebook, Instagram, TikTok, LinkedIn, Pinterest, and YouTube. Platform selection is driven by your target audience and objectives — we&apos;ll recommend the right mix based on where your customers spend their time.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="social-h2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#social-c2" aria-expanded="false" aria-controls="social-c2">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">What ad budget do I need to get started?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="social-c2" className="accordion-collapse collapse" aria-labelledby="social-h2" data-bs-parent="#acc-social">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">We recommend a minimum ad spend of $1,500/month per platform to gather meaningful data and optimise effectively. Our management fee is charged separately. Lower budgets are possible for highly targeted local campaigns.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="social-h3">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#social-c3" aria-expanded="false" aria-controls="social-c3">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">Do you create the ad creative as well?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="social-c3" className="accordion-collapse collapse" aria-labelledby="social-h3" data-bs-parent="#acc-social">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">Yes. Our team handles copywriting, graphic design, and video editing for your ads. We can also work with your existing brand assets. Creative is developed, tested, and iterated based on performance data to continuously improve results.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="social-h4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#social-c4" aria-expanded="false" aria-controls="social-c4">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">How soon will I see results?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="social-c4" className="accordion-collapse collapse" aria-labelledby="social-h4" data-bs-parent="#acc-social">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">Social media ads can deliver results quickly — often within the first 2–4 weeks of launch. The first month is typically a learning phase where we test audiences and creative. Months 2–3 see significant performance improvements as we optimise based on data.</div>
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
