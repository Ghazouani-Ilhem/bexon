import React from 'react'
import Image from 'next/image'

const ContactSection: React.FC = () => {
  return (
    <section className="tj-contact-section section-gap section-gap-x">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Get in Touch
              </span>
              <h2 className="sec-title title-anim">Ready to Start Your <span>Project?</span></h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="contact-form-area wow fadeInUp" data-wow-delay=".4s">
              <div className="contact-form">
                <form action="#">
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
                        <input type="text" name="subject" placeholder="Subject" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <button type="submit" className="tj-primary-btn">
                          <span className="btn-text"><span>Send Message</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape-1">
        <Image src="/assets/images/shape/pattern-2.svg" alt="" width={200} height={200} />
      </div>
      <div className="bg-shape-2">
        <Image src="/assets/images/shape/pattern-3.svg" alt="" width={200} height={200} />
      </div>
    </section>
  )
}

export default ContactSection