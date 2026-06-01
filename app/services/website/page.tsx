import TemplateScripts from "@/components/TemplateScripts";

export default function WebsiteDesignPage() {
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
                <h2 className="breadcrumb-title chy-heading-1 chy-split-in-right chy-split-text">Website Design</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-duration="2s">
                  <a href="/">Home</a>
                  <a href="/services">Services</a>
                  <span>Website Design</span>
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
                  <img src="/assets/img/services/sd-img-1.jpg" alt="Website Design" />
                </div>

                <h2 className="chy-heading-1 service-details-title chy-split-in-right chy-split-text">Website Design: Beautiful Sites That Convert</h2>

                <p className="chy-para-1 inner-page-disc">
                  Your website is your most important marketing asset. We design and build high-performance websites that combine stunning aesthetics with conversion-focused architecture — creating digital experiences that impress visitors and turn them into customers.
                </p>
                <p className="chy-para-1 inner-page-disc">
                  From brochure sites and landing pages to complex e-commerce platforms and custom web applications, our team delivers websites that work hard for your business — built on modern technology, optimised for search, and designed to scale.
                </p>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">What We Provide</h2>

                <p className="chy-para-1 inner-page-disc">
                  Our website design service covers everything from initial discovery and UX strategy through to design, development, content population, testing, and launch.
                </p>

                <div className="service-details-feature mb-30 mt-30">
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-target"></i></div>
                      <h4 className="chy-heading-1 title">UX &amp; Strategy</h4>
                    </div>
                    <p className="chy-para-1 text">User experience research, sitemap planning, and conversion architecture to ensure your website guides visitors toward the actions that matter most.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-megaphone"></i></div>
                      <h4 className="chy-heading-1 title">Visual Design</h4>
                    </div>
                    <p className="chy-para-1 text">Custom visual design that captures your brand identity — crafted with attention to typography, colour, imagery, and layout to create a distinctive online presence.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-web-design-1"></i></div>
                      <h4 className="chy-heading-1 title">Development</h4>
                    </div>
                    <p className="chy-para-1 text">Clean, performant code built on modern frameworks. Fast load times, mobile-first responsiveness, accessibility compliance, and seamless integrations.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-web-design"></i></div>
                      <h4 className="chy-heading-1 title">SEO &amp; Performance</h4>
                    </div>
                    <p className="chy-para-1 text">On-page SEO, Core Web Vitals optimisation, analytics setup, and conversion tracking built in from day one — not bolted on after launch.</p>
                  </div>
                </div>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">The Challenge</h2>

                <p className="chy-para-1 inner-page-disc">
                  Most websites are built to look good but fail to convert. They&apos;re slow, hard to navigate, and don&apos;t communicate value effectively. We approach every website project as a business problem — designing around your customer journey and optimising every element to generate leads, sales, and enquiries.
                </p>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Frequently Asked Questions</h2>

                <div className="accordion chy-sd-1-item wow fadeInUp" id="acc-web">

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="web-h1">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#web-c1" aria-expanded="true" aria-controls="web-c1">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">How long does a website project take?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="web-c1" className="accordion-collapse collapse show" aria-labelledby="web-h1" data-bs-parent="#acc-web">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">A typical business website takes 6–10 weeks from kickoff to launch. Complex e-commerce or custom web app projects take 12–20 weeks. Timelines depend on scope, the number of pages, and the speed of client feedback and content delivery.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="web-h2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#web-c2" aria-expanded="false" aria-controls="web-c2">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">What platform do you build on?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="web-c2" className="accordion-collapse collapse" aria-labelledby="web-h2" data-bs-parent="#acc-web">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">We build on the platform that best suits your needs — WordPress, Webflow, Shopify, Next.js, and custom builds. We&apos;ll recommend the right technology based on your content management needs, scalability requirements, and budget.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="web-h3">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#web-c3" aria-expanded="false" aria-controls="web-c3">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">Do you provide ongoing website maintenance?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="web-c3" className="accordion-collapse collapse" aria-labelledby="web-h3" data-bs-parent="#acc-web">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">Yes. We offer monthly maintenance plans covering security updates, plugin/dependency updates, backups, performance monitoring, and minor content updates. We also offer dedicated support hours for larger ongoing changes.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="web-h4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#web-c4" aria-expanded="false" aria-controls="web-c4">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">Will my website be mobile-friendly?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="web-c4" className="accordion-collapse collapse" aria-labelledby="web-h4" data-bs-parent="#acc-web">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">Every website we build is fully responsive and optimised for mobile devices. We design mobile-first, then scale up to tablet and desktop. With over 60% of web traffic coming from mobile, this is non-negotiable for both user experience and SEO.</div>
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
