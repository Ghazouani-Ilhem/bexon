import React from 'react';

const FooterThree: React.FC = () => {
  return (
    <footer className="tj-footer-section footer-3 section-gap-x">
      <div className="footer-main-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="footer-widget footer-col-1">
                <div className="footer-logo">
                  <a href="/">
                    <img src="/assets/images/logos/logo-3.webp" alt="Logos" />
                  </a>
                </div>
                <div className="footer-text">
                  <p>Developing personalze our customer journeys to increase satisfaction & loyalty of our expansion.</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="footer-widget footer-col-2 widget-nav-menu">
                <h5 className="title">Services</h5>
                <ul>
                  <li><a href="#">Customer Experience</a></li>
                  <li><a href="#">Training Programs</a></li>
                  <li><a href="#">Business Strategy</a></li>
                  <li><a href="#">ESG Consulting</a></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="footer-widget footer-col-3 widget-nav-menu">
                <h5 className="title">Resources</h5>
                <ul>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Team Member</a></li>
                  <li><a href="#">Recognitions</a></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="footer-widget widget-subscribe-2">
                <h3 className="title">Subscribe to Our Newsletter.</h3>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="email" name="email" placeholder="Enter email" />
                    <button type="submit"><i className="tji-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="award-logo-area">
                <img src="/assets/images/footer/award-logo-white-1.webp" alt="" />
                <img src="/assets/images/footer/award-logo-white-2.webp" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-social-area">
                <ul>
                  <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="https://x.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tj-copyright-area-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-content-area">
                <p>&copy; {new Date().getFullYear()} Bexon. All right reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
