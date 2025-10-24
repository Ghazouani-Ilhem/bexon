import React from 'react';
import Image from 'next/image';

const ContactSection: React.FC = () => {
  return (
    <section className="tj-contact-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="contact-content-area">
              <div className="sec-heading">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>Get in Touch
                </span>
                <h2 className="sec-title title-anim">
                  Ready to Start Your <span>Project?</span>
                </h2>
              </div>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="tji-phone"></i>
                  </div>
                  <div className="contact-details">
                    <h6>Phone Number</h6>
                    <a href="tel:+10095447818">+1 (009) 544-7818</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="tji-email"></i>
                  </div>
                  <div className="contact-details">
                    <h6>Email Address</h6>
                    <a href="mailto:info@bexon.com">info@bexon.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="tji-location"></i>
                  </div>
                  <div className="contact-details">
                    <h6>Office Location</h6>
                    <span>993 Renner Burg, West Rond, MT 94251-030</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="contact-form-area">
              <form className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" name="name" placeholder="Your Name" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="tel" name="phone" placeholder="Your Phone" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <select name="subject" required>
                        <option value="">Select Subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Support</option>
                        <option value="sales">Sales</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <button type="submit" className="tj-btn">
                        Send Message <i className="tji-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;