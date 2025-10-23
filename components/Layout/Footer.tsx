import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="tj-footer-section footer-1 section-gap-x">
      <div className="footer-main-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
                <div className="footer-logo">
                  <Link href="/">
                    <Image src="/assets/images/logos/logo.webp" alt="Logos" width={120} height={40} />
                  </Link>
                </div>
                <div className="footer-text">
                  <p>Developing personalze our customer journeys to increase satisfaction & loyalty of our expansion.
                  </p>
                </div>
                <div className="award-logo-area">
                  <div className="award-logo">
                    <Image src="/assets/images/footer/award-logo-1.webp" alt="" width={80} height={60} />
                  </div>
                  <div className="award-logo">
                    <Image src="/assets/images/footer/award-logo-2.webp" alt="" width={80} height={60} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget widget-nav-menu wow fadeInUp" data-wow-delay=".3s">
                <h5 className="title">Services</h5>
                <ul>
                  <li><a href="#customer-experience">Customer Experience</a></li>
                  <li><a href="#training-programs">Training Programs</a></li>
                  <li><a href="#business-strategy">Business Strategy</a></li>
                  <li><a href="#training-program">Training Program</a></li>
                  <li><a href="#esg-consulting">ESG Consulting</a></li>
                  <li><a href="#development-hub">Development Hub</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="footer-widget widget-nav-menu wow fadeInUp" data-wow-delay=".5s">
                <h5 className="title">Resources</h5>
                <ul>
                  <li><a href="#contact-us">Contact us</a></li>
                  <li><a href="#team-member">Team Member</a></li>
                  <li><a href="#recognitions">Recognitions</a></li>
                  <li><Link href="/careers">Careers <span className="badge">New</span></Link></li>
                  <li><a href="#news">News</a></li>
                  <li><a href="#feedback">Feedback</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="footer-widget widget-subscribe wow fadeInUp" data-wow-delay=".7s">
                <h3 className="title">Subscribe to Our Newsletter.</h3>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="email" name="email" placeholder="Enter email" />
                    <button type="submit"><i className="tji-plane"></i></button>
                    <label htmlFor="agree">
                      <input id="agree" type="checkbox" />Agree to our <a href="#terms">Terms &
                        Condition?</a>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tj-copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-content-area">
                <div className="footer-contact">
                  <ul>
                    <li>
                      <a href="tel:10095447818">
                        <span className="icon"><i className="tji-phone-2"></i></span>
                        <span className="text">+1 (009) 544-7818</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@bexon.com">
                        <span className="icon"><i className="tji-envelop-2"></i></span>
                        <span className="text">info@bexon.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="social-links">
                  <ul>
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    </li>
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    </li>
                    <li><a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    </li>
                    <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    </li>
                  </ul>
                </div>
                <div className="copyright-text">
                  <p>&copy; 2025 <a href="https://themeforest.net/user/theme-junction/portfolio"
                      target="_blank" rel="noopener noreferrer">Bexon</a>
                    All right reserved</p>
                </div>
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
    </footer>
  )
}

export default Footer