import TemplateScripts from "@/components/TemplateScripts";

export default function GraphicDesignPage() {
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
                <h2 className="breadcrumb-title chy-heading-1 chy-split-in-right chy-split-text">Graphic Design</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-duration="2s">
                  <a href="/">Home</a>
                  <a href="/services">Services</a>
                  <span>Graphic Design</span>
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
                  <img src="/assets/img/services/sd-img-1.jpg" alt="Graphic Design" />
                </div>

                <h2 className="chy-heading-1 service-details-title chy-split-in-right chy-split-text">Graphic Design: Visual Identity That Stands Out</h2>

                <p className="chy-para-1 inner-page-disc">
                  Great design communicates before a single word is read. Our graphic design service helps Australian businesses create compelling visual identities, marketing materials, and digital assets that make a powerful first impression and build long-term brand recognition.
                </p>
                <p className="chy-para-1 inner-page-disc">
                  From logo design and brand identity systems to social media graphics, print collateral, and advertising creative, our designers bring strategic thinking and aesthetic excellence to every project — ensuring your visual communication is always on-brand and on-point.
                </p>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">What We Provide</h2>

                <p className="chy-para-1 inner-page-disc">
                  Our graphic design service spans brand identity, marketing collateral, digital assets, and advertising creative — all aligned with your brand guidelines and business objectives.
                </p>

                <div className="service-details-feature mb-30 mt-30">
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-target"></i></div>
                      <h4 className="chy-heading-1 title">Brand Identity</h4>
                    </div>
                    <p className="chy-para-1 text">Logo design, typography, colour palettes, and brand guidelines that define a consistent, memorable visual identity across every touchpoint.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-megaphone"></i></div>
                      <h4 className="chy-heading-1 title">Marketing Collateral</h4>
                    </div>
                    <p className="chy-para-1 text">Brochures, flyers, business cards, presentations, and exhibition materials designed to communicate your value proposition clearly and professionally.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-web-design-1"></i></div>
                      <h4 className="chy-heading-1 title">Digital Assets</h4>
                    </div>
                    <p className="chy-para-1 text">Social media graphics, email templates, banner ads, and website graphics optimised for digital platforms and designed to drive engagement.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-web-design"></i></div>
                      <h4 className="chy-heading-1 title">Ad Creative</h4>
                    </div>
                    <p className="chy-para-1 text">Performance-focused advertising creative for Google Display, social media, OOH, and print — designed to stop audiences in their tracks and communicate your message instantly.</p>
                  </div>
                </div>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">The Challenge</h2>

                <p className="chy-para-1 inner-page-disc">
                  Inconsistent, low-quality design undermines trust and erodes brand equity. Businesses that invest in professional design consistently outperform competitors on conversion rates, customer retention, and premium pricing power. Our team ensures your visual communication reflects the quality of your product or service.
                </p>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Frequently Asked Questions</h2>

                <div className="accordion chy-sd-1-item wow fadeInUp" id="acc-gfx">

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="gfx-h1">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#gfx-c1" aria-expanded="true" aria-controls="gfx-c1">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">Do I need brand guidelines before starting?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="gfx-c1" className="accordion-collapse collapse show" aria-labelledby="gfx-h1" data-bs-parent="#acc-gfx">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">No. If you don&apos;t have brand guidelines, we can create them for you as part of a brand identity project. If you do have existing guidelines, we work within them to maintain consistency across all deliverables.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="gfx-h2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#gfx-c2" aria-expanded="false" aria-controls="gfx-c2">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">What file formats will I receive?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="gfx-c2" className="accordion-collapse collapse" aria-labelledby="gfx-h2" data-bs-parent="#acc-gfx">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">We deliver all final files in the formats you need — typically PNG, JPG, SVG, PDF, and editable source files (AI, EPS, or Figma). For print projects, we provide print-ready PDFs with correct colour profiles, bleed, and trim marks.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="gfx-h3">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#gfx-c3" aria-expanded="false" aria-controls="gfx-c3">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">How many revision rounds are included?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="gfx-c3" className="accordion-collapse collapse" aria-labelledby="gfx-h3" data-bs-parent="#acc-gfx">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">We include two rounds of revisions on all design projects, which covers the vast majority of client feedback. Additional revision rounds are available at an hourly rate. Thorough briefing upfront significantly reduces the need for extensive revisions.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="gfx-h4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#gfx-c4" aria-expanded="false" aria-controls="gfx-c4">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">Can you match our existing brand style?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="gfx-c4" className="accordion-collapse collapse" aria-labelledby="gfx-h4" data-bs-parent="#acc-gfx">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">Absolutely. Our designers are experienced at working within established brand styles and guidelines. Share your existing brand assets and we&apos;ll ensure every deliverable feels like a natural extension of your visual identity.</div>
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
                      <li className="wow fadeInUp"><a href="/services/cmo-for-hire"><span className="text">CMO for Hire</span><span className="icon-1"><i className="flaticon-next"></i></span></a></li>
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
