import TemplateScripts from "@/components/TemplateScripts";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactUsPage() {
  return (
    <>
      <TemplateScripts />

      {/* preloader */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>

      {/* breadcrumb-area-start */}
      <div
        className="breadcrumb-area bg-default has-breadcrumb-overlay"
        style={{ backgroundImage: "url('/assets/img/breadcrumb/breadcrumb-img-1.jpg')" }}
      >
        <div className="container h1-container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb-wrap text-center">
                <h2 className="breadcrumb-title chy-heading-1 chy-split-in-right chy-split-text">Contact Us</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-duration="2s">
                  <a href="/">Home</a>
                  <span>Contact Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb-area-end */}

      {/* contact-page-start */}
      <div
        className="contact-page-area bg-default pt-120 pb-120"
        style={{ backgroundImage: "url('/assets/img/bg/body-bg-3.png')" }}
      >
        <div className="container chy-container-1">

          <div className="section-title-wrap mb-50 text-center">
            <h5 className="chy-subtitle-1 wow fadeInDown">get in touch</h5>
            <h2 className="chy-title-1 chy-split-in-right chy-split-text">Unleash Your Potential with Shopa Marketing</h2>
            <p className="chy-section-para-1 wow fadeInUp mt-20" style={{ maxWidth: '720px', margin: '20px auto 0' }}>
              If you&apos;re keen to break free from the norm and dive into a realm where creativity has no limits, you&apos;ve stumbled upon your ultimate marketing crew. Welcome to a spot where thinking &ldquo;outside the box&rdquo; is just a regular thing.
            </p>
            <div className="wow fadeInUp" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'nowrap', gap: '0 6px', marginTop: '16px' }}>
              <span style={{ color: '#663dff', fontWeight: 700, fontSize: '16px', whiteSpace: 'nowrap' }}>Easy stress free marketing options for SMEs</span>
              <span style={{ fontWeight: 400, color: '#141515', fontSize: '16px' }}>|</span>
              <span style={{ color: '#663dff', fontWeight: 700, fontSize: '16px', whiteSpace: 'nowrap' }}>All inclusive rates to avoid any nasty surprises</span>
              <span style={{ fontWeight: 400, color: '#141515', fontSize: '16px' }}>|</span>
              <span style={{ color: '#663dff', fontWeight: 700, fontSize: '16px', whiteSpace: 'nowrap' }}>Dedicated account manager</span>
            </div>
          </div>

          <div className="row">

            {/* left — contact form (client component with validation) */}
            <div className="col-lg-7">
              <ContactForm />
            </div>

            {/* right — map + contact info */}
            <div className="col-lg-5">
              <div className="contact-page-content">

                <div className="contact-page-map mb-40">
                  <iframe
                    src="https://maps.google.com/maps?q=Shopa+Marketing+Australia,+3+Albert+Coates+Lane,+Melbourne+VIC+3000,+Australia&output=embed"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="border-left">
                  <div className="contact-page-contact-list mb-50">

                    <div className="item">
                      <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                      <div className="content-wrap">
                        <h4 className="chy-heading-1 title">Shopa Marketing Australia</h4>
                        <p className="chy-para-1 text">3 Albert Coates Lane, Melbourne 3000</p>
                      </div>
                    </div>

                    <div className="item">
                      <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                      <div className="content-wrap">
                        <h4 className="chy-heading-1 title">Shopa Marketing NZ Office</h4>
                        <p className="chy-para-1 text">Level 4, 110 Carlton Gore, Auckland 1023</p>
                      </div>
                    </div>

                    <div className="item">
                      <div className="icon"><i className="fas fa-phone"></i></div>
                      <div className="content-wrap">
                        <h4 className="chy-heading-1 title">Contact Number Australia</h4>
                        <a href="tel:1800247034" aria-label="phone au" className="chy-para-1 text">1800 247 034</a>
                      </div>
                    </div>

                    <div className="item">
                      <div className="icon"><i className="fas fa-phone"></i></div>
                      <div className="content-wrap">
                        <h4 className="chy-heading-1 title">Contact Number New Zealand</h4>
                        <a href="tel:0800200076" aria-label="phone nz" className="chy-para-1 text">0800 200 076</a>
                      </div>
                    </div>

                  </div>

                  <ul className="contact-page-social-link">
                    <li>
                      <a aria-label="linkedin" href="https://www.linkedin.com/company/shopa-marketing/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a aria-label="facebook" href="https://www.facebook.com/profile.php?id=100083445816079" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a aria-label="instagram" href="https://www.instagram.com/shopa.marketing/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      {/* contact-page-end */}

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
