'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="tj-footer-section footer-1 section-gap-x">
      <div className="footer-main-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link href="/">
                    <Image src="/assets/images/logos/logo.webp" alt="Bexon Logo" width={150} height={50} />
                  </Link>
                </div>
                <div className="footer-text">
                  <p>Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget widget-nav-menu">
                <h5 className="title">Services</h5>
                <ul>
                  <li><Link href="#">Customer Experience</Link></li>
                  <li><Link href="#">Training Programs</Link></li>
                  <li><Link href="#">Business Strategy</Link></li>
                  <li><Link href="#">ESG Consulting</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="footer-widget widget-nav-menu">
                <h5 className="title">Resources</h5>
                <ul>
                  <li><Link href="/contact">Contact us</Link></li>
                  <li><Link href="/team">Team Member</Link></li>
                  <li><Link href="/careers">Careers</Link></li>
                  <li><Link href="#">News</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="footer-widget widget-subscribe">
                <h3 className="title">Subscribe to Our Newsletter.</h3>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="email" name="email" placeholder="Enter email" />
                    <button type="submit"><i className="tji-plane"></i></button>
                    <label htmlFor="agree">
                      <input id="agree" type="checkbox" />
                      Agree to our <Link href="#">Terms & Condition?</Link>
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
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://x.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
                <div className="copyright-text">
                  <p>&copy; 2025 <Link href="https://themeforest.net/user/theme-junction/portfolio" target="_blank">Bexon</Link> All right reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
