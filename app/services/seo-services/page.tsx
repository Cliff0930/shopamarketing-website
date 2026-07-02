import TemplateScripts from "@/components/TemplateScripts";
import ServiceHero from "@/components/ServiceHero";

export default function SeoServicesPage() {
  return (
    <>
      <TemplateScripts />

      {/* preloader-start */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>
      {/* preloader-end */}

      <ServiceHero
        headline="Rank Higher. Grow Organic Traffic."
        subtext="Technical SEO, content, and link building that compounds — built for long-term organic growth, not quick wins that fade."
      />

      {/* service-details-start */}
      <div className="service-details-area pt-120 pb-70">
        <div className="container chy-container-1">
          <div className="row">

            {/* left column */}
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="service-details-content mb-50">

                <div className="service-details-main-img img-cover">
                  <img src="/assets/img/services/sd-img-1.jpg" alt="SEO Services" />
                </div>

                <h2 className="chy-heading-1 service-details-title chy-split-in-right chy-split-text">SEO Services: Rank Higher, Grow Faster</h2>

                <p className="chy-para-1 inner-page-disc">
                  Search engine optimisation is the foundation of sustainable online growth. Our SEO services help Australian businesses climb Google rankings, attract high-intent organic traffic, and convert visitors into customers — without relying solely on paid advertising.
                </p>
                <p className="chy-para-1 inner-page-disc">
                  We take a data-driven, holistic approach to SEO — combining technical excellence, compelling content, and strategic link building to deliver lasting results. Whether you&apos;re targeting local customers or competing nationally, our team builds strategies tailored to your market.
                </p>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">What We Provide</h2>

                <p className="chy-para-1 inner-page-disc">
                  Our SEO service covers every dimension of search optimisation — from site architecture and page speed to content strategy and authoritative backlinks.
                </p>

                <div className="service-details-feature mb-30 mt-30">
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-target"></i></div>
                      <h4 className="chy-heading-1 title">Technical SEO</h4>
                    </div>
                    <p className="chy-para-1 text">Audit and optimise your site&apos;s technical foundations — crawlability, indexability, Core Web Vitals, schema markup, and site speed — so search engines can rank your content.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-megaphone"></i></div>
                      <h4 className="chy-heading-1 title">Keyword Research</h4>
                    </div>
                    <p className="chy-para-1 text">Identify high-value keywords your target customers are searching for, mapping opportunities across the full funnel from awareness to purchase intent.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-web-design-1"></i></div>
                      <h4 className="chy-heading-1 title">Content Optimisation</h4>
                    </div>
                    <p className="chy-para-1 text">Create and optimise content that satisfies both search engines and users — from landing pages and blog posts to service pages and FAQs.</p>
                  </div>
                  <div className="service-details-feature-item">
                    <div className="heading-wrap">
                      <div className="icon"><i className="flaticon-web-design"></i></div>
                      <h4 className="chy-heading-1 title">Link Building</h4>
                    </div>
                    <p className="chy-para-1 text">Build your site&apos;s authority with high-quality, relevant backlinks from reputable Australian and international publications in your industry.</p>
                  </div>
                </div>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">The Challenge</h2>

                <p className="chy-para-1 inner-page-disc">
                  Google&apos;s algorithms reward expertise, authority, and trust — all of which take time and consistent effort to build. Many businesses see SEO as a set-and-forget exercise, only to find rankings slip as competitors invest. Our ongoing SEO service keeps you ahead of algorithm updates and competitive shifts with proactive strategy and execution.
                </p>

                <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Frequently Asked Questions</h2>

                <div className="accordion chy-sd-1-item wow fadeInUp" id="acc-seo">

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="seo-h1">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#seo-c1" aria-expanded="true" aria-controls="seo-c1">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">How long does SEO take to show results?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="seo-c1" className="accordion-collapse collapse show" aria-labelledby="seo-h1" data-bs-parent="#acc-seo">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">SEO is a long-term investment. Most clients see initial improvements in rankings within 3–4 months, with significant traffic growth typically appearing at the 6–12 month mark. Competitive industries may take longer, while local SEO often shows results faster.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="seo-h2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#seo-c2" aria-expanded="false" aria-controls="seo-c2">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">Do you offer local SEO for Australian businesses?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="seo-c2" className="accordion-collapse collapse" aria-labelledby="seo-h2" data-bs-parent="#acc-seo">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">Yes. Local SEO is one of our specialties. We optimise your Google Business Profile, build local citations, and create location-specific content to help you dominate local search results in your service area — whether that&apos;s a suburb, city, or state.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-15">
                    <h2 className="accordion-header" id="seo-h3">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#seo-c3" aria-expanded="false" aria-controls="seo-c3">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">What SEO reporting do you provide?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="seo-c3" className="accordion-collapse collapse" aria-labelledby="seo-h3" data-bs-parent="#acc-seo">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">We provide monthly reports covering keyword rankings, organic traffic, click-through rates, conversions, and backlink growth. We use Google Search Console, GA4, and SEMrush to give you a transparent view of progress against your goals.</div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="seo-h4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#seo-c4" aria-expanded="false" aria-controls="seo-c4">
                        <span className="icon-2"><i className="flaticon-arrow"></i></span>
                        <span className="title chy-heading-1">Do you use white-hat SEO techniques only?</span>
                        <span className="icon"><i className="far fa-plus"></i></span>
                      </button>
                    </h2>
                    <div id="seo-c4" className="accordion-collapse collapse" aria-labelledby="seo-h4" data-bs-parent="#acc-seo">
                      <div className="accordion-body">
                        <div className="disc chy-para-1">Absolutely. We only use ethical, white-hat SEO techniques that comply with Google&apos;s guidelines. Black-hat tactics may produce short-term gains but risk manual penalties that can devastate your rankings. Our approach builds sustainable, long-term organic growth.</div>
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
