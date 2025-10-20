import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      {/* Breadcrumb Section */}
      <section className="tj-page-header section-gap-x" data-bg-image="/assets/images/bg/pheader-bg.webp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tj-page-header-content text-center">
                <h1 className="tj-page-title">Contact Us</h1>
                <div className="tj-page-link">
                  <span><i className="tji-home"></i></span>
                  <span>
                    <Link href="/">Home</Link>
                  </span>
                  <span><i className="tji-arrow-right"></i></span>
                  <span>
                    <span>Contact Us</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-header-overlay" data-bg-image="/assets/images/shape/pheader-overlay.webp"></div>
      </section>

      {/* Contact Top Section */}
      <div className="tj-contact-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-heading text-center">
                <span className="sub-title wow fadeInUp" data-wow-delay=".1s">
                  <i className="tji-box"></i>Contact info
                </span>
                <h2 className="sec-title title-anim"><span>Reach</span> Out to Us</h2>
              </div>
            </div>
          </div>
          <div className="row row-gap-4">
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="contact-item style-2 wow fadeInUp" data-wow-delay=".3s">
                <div className="contact-icon">
                  <i className="tji-location-3"></i>
                </div>
                <h3 className="contact-title">Our Location</h3>
                <p>993 Renner Burg, West Rond, MT 94251-030</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="contact-item style-2 wow fadeInUp" data-wow-delay=".5s">
                <div className="contact-icon">
                  <i className="tji-envelop"></i>
                </div>
                <h3 className="contact-title">Email us</h3>
                <ul className="contact-list">
                  <li><a href="mailto:support@bexon.com">support@bexon.com</a></li>
                  <li><a href="mailto:info@bexon.com">info@bexon.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="contact-item style-2 wow fadeInUp" data-wow-delay=".7s">
                <div className="contact-icon">
                  <i className="tji-phone"></i>
                </div>
                <h3 className="contact-title">Call us</h3>
                <ul className="contact-list">
                  <li><a href="tel:10095447818">+1 (009) 544-7818</a></li>
                  <li><a href="tel:10098801810">+1 (009) 880-1810</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="contact-item style-2 wow fadeInUp" data-wow-delay=".9s">
                <div className="contact-icon">
                  <i className="tji-chat"></i>
                </div>
                <h3 className="contact-title">Live chat</h3>
                <ul className="contact-list">
                  <li><a href="mailto:livechat@bexon.com">livechat@bexon.com</a></li>
                  <li className="active"><Link href="/contact">Need help?</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="tj-contact-section-2 section-bottom-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form wow fadeInUp" data-wow-delay=".1s">
                <h3 className="title">Feel Free to Get in Touch or Visit our Location.</h3>
                <form id="contact-form">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-input">
                        <input type="text" name="cfName" />
                        <label className="cf-label">Full Name <span>*</span></label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-input">
                        <input type="email" name="cfEmail" />
                        <label className="cf-label">Email Address <span>*</span></label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-input">
                        <input type="tel" name="cfPhone" />
                        <label className="cf-label">Phone number <span>*</span></label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-input">
                        <div className="tj-nice-select-box">
                          <div className="tj-select">
                            <select name="cfSubject">
                              <option value="0">Chose a option</option>
                              <option value="1">Business Strategy</option>
                              <option value="2">Customer Experience</option>
                              <option value="3">Sustainability and ESG</option>
                              <option value="4">Training and Development</option>
                              <option value="5">IT Support & Maintenance</option>
                              <option value="6">Marketing Strategy</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-input message-input">
                        <textarea name="cfMessage" id="message"></textarea>
                        <label className="cf-label">Type message <span>*</span></label>
                      </div>
                    </div>
                    <div className="submit-btn">
                      <button className="tj-primary-btn" type="submit">
                        <span className="btn-text">Submit Now</span>
                        <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="map-area wow fadeInUp" data-wow-delay=".3s">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d316440.5712687838!2d-74.01091796224334!3d40.67186885683901!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1745918398047!5m2!1sen!2sbd"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tj-cta-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-area">
                <div className="cta-content">
                  <h2 className="title title-anim">Let's Build Future Together.</h2>
                  <div className="cta-btn wow fadeInUp" data-wow-delay=".6s">
                    <Link className="tj-primary-btn btn-dark" href="/contact">
                      <span className="btn-text">Get Started Now</span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </Link>
                  </div>
                </div>
                <div className="cta-img">
                  <Image src="/assets/images/cta/cta-bg.webp" alt="CTA Background" width={600} height={400} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
