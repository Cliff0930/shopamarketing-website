import TemplateScripts from "@/components/TemplateScripts";
import PricingSection from "@/components/PricingSection";

export default function DoneForYouPage() {
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
                <h2 className="breadcrumb-title chy-heading-1 chy-split-in-right chy-split-text">Done For You</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-duration="2s">
                  <a href="/">Home</a>
                  <a href="/services">Services</a>
                  <span>Done For You</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb-area-end */}

      {/* pricing-section-start */}
      <PricingSection />
      {/* pricing-section-end */}

      {/* service-details-start */}
      <div className="service-details-area pt-120 pb-70">
        <div className="container chy-container-1">
          <div className="row">

            {/* left column */}
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="service-details-content mb-50">

                <div className="service-details-main-img img-cover">
                  <img src="/assets/img/services/sd-img-1.jpg" alt="Done For You" />
                </div>

                <h2 className="chy-heading-1 service-details-title chy-split-in-right chy-split-text">Done For You: Strategic Marketing Leadership</h2>

                <p className="chy-para-1 inner-page-disc">
                  Access the strategic expertise of a Chief Marketing Officer without the full-time commitment. Our Done For You service provides your business with senior-level marketing leadership, helping you develop and execute comprehensive marketing strategies that drive growth and build brand equity.
                </p>
                <p className="chy-para-1 inner-page-disc">
                  Whether you&apos;re a growing startup needing marketing direction, an established business looking to scale, or a company in transition, our fractional CMO service delivers the strategic oversight and execution support you need to achieve your marketing goals.
                </p>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">What We Provide</h2>

                <p className="chy-para-1 inner-page-disc">
                  Our Done For You service encompasses the full spectrum of marketing leadership — from high-level strategy development to hands-on campaign execution oversight, team building, and performance measurement.
                </p>

                <div className="service-details-feature mb-30 mt-30">
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-target"></i></div>
                      <h4 className="chy-heading-1 title">Marketing Strategy</h4>
                    </div>
                    <p className="chy-para-1 text">Develop a comprehensive marketing strategy aligned with your business goals, target audience, and competitive landscape.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-megaphone"></i></div>
                      <h4 className="chy-heading-1 title">Brand Positioning</h4>
                    </div>
                    <p className="chy-para-1 text">Define and refine your brand&apos;s positioning in the market to differentiate from competitors and resonate with your ideal customers.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-web-design-1"></i></div>
                      <h4 className="chy-heading-1 title">Team Leadership</h4>
                    </div>
                    <p className="chy-para-1 text">Lead, mentor, and build your marketing team, ensuring the right talent and processes are in place to execute your strategy effectively.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-web-design"></i></div>
                      <h4 className="chy-heading-1 title">Performance Tracking</h4>
                    </div>
                    <p className="chy-para-1 text">Establish KPIs and reporting frameworks to measure marketing effectiveness and continuously optimise your investment.</p>
                  </div>
                </div>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">The Challenge</h2>

                <p className="chy-para-1 inner-page-disc">
                  Many businesses struggle with inconsistent marketing direction, siloed campaigns, and lack of strategic alignment. Without senior marketing leadership, budgets are often misallocated and opportunities missed. Our Done For You service bridges this gap, giving you experienced leadership that transforms your marketing from reactive to strategic.
                </p>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Frequently Asked Questions</h2>

                <div className="accordion chy-sd-1-item wow fadeInUp" id="acc-cmo">

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="cmo-h1">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#cmo-c1" aria-expanded="true" aria-controls="cmo-c1">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">What does a fractional CMO do?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="cmo-c1" className="accordion-collapse collapse show" aria-labelledby="cmo-h1" data-bs-parent="#acc-cmo">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">A fractional CMO provides part-time senior marketing leadership — typically 1–3 days per week — handling strategy, team oversight, vendor management, and executive reporting. You get C-suite expertise at a fraction of the cost of a full-time hire.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="cmo-h2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cmo-c2" aria-expanded="false" aria-controls="cmo-c2">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">How long does an engagement typically last?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="cmo-c2" className="accordion-collapse collapse" aria-labelledby="cmo-h2" data-bs-parent="#acc-cmo">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">Engagements typically run from 3 to 12 months, depending on your goals. We start with a discovery phase to understand your business, then move into strategy development and execution. Many clients continue on a retainer basis after the initial engagement.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="cmo-h3">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cmo-c3" aria-expanded="false" aria-controls="cmo-c3">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">Is a Done For You right for my business?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="cmo-c3" className="accordion-collapse collapse" aria-labelledby="cmo-h3" data-bs-parent="#acc-cmo">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">This service is ideal for businesses with $2M–$50M in revenue that need strategic marketing direction but aren&apos;t ready for a full-time CMO. It&apos;s also perfect for companies in transition — post-funding, post-acquisition, or undergoing rebrand.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="cmo-h4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cmo-c4" aria-expanded="false" aria-controls="cmo-c4">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">How do you measure success?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="cmo-c4" className="accordion-collapse collapse" aria-labelledby="cmo-h4" data-bs-parent="#acc-cmo">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">We establish clear KPIs at the start of every engagement — typically tied to revenue growth, lead generation, brand awareness, and marketing ROI. Monthly reporting and quarterly reviews keep all stakeholders aligned on progress.</div>
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
