import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'facebook', icon: 'fa-brands fa-facebook-f', url: 'https://www.facebook.com/' },
    { name: 'instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/' },
    { name: 'twitter', icon: 'fa-brands fa-x-twitter', url: 'https://x.com/' },
    { name: 'linkedin', icon: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/' }
  ];

  const services = [
    { name: 'Customer Experience', url: '#' },
    { name: 'Training Programs', url: '#' },
    { name: 'Business Strategy', url: '#' },
    { name: 'Training Program', url: '#' },
    { name: 'ESG Consulting', url: '#' },
    { name: 'Development Hub', url: '#' }
  ];

  const resources = [
    { name: 'Contact us', url: '#' },
    { name: 'Team Member', url: '#' },
    { name: 'Recognitions', url: '#' },
    { name: 'Careers', url: '/careers', badge: 'New' },
    { name: 'News', url: '#' },
    { name: 'Feedback', url: '#' }
  ];

  return (
    <footer className="tj-footer-section footer-3 section-gap-x">
      <div className="footer-main-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-md-6">
              <div className="footer-widget footer-col-1 wow fadeInUp" data-wow-delay=".1s">
                <div className="footer-logo">
                  <Link href="/">
                    <Image 
                      src="/assets/images/logos/logo-2.webp" 
                      alt="Bexon Logo"
                      width={150}
                      height={50}
                    />
                  </Link>
                </div>
                <div className="footer-text">
                  <p>Developing personalze our customer journeys to increase satisfaction & loyalty of our expansion.</p>
                </div>
                <div className="social-links style-3">
                  <ul>
                    {socialLinks.map((social) => (
                      <li key={social.name}>
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          <i className={social.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="footer-widget footer-col-2 widget-nav-menu wow fadeInUp" data-wow-delay=".3s">
                <h5 className="title">Services</h5>
                <ul>
                  {services.map((service, index) => (
                    <li key={index}>
                      <a href={service.url}>{service.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="footer-widget footer-col-3 widget-nav-menu wow fadeInUp" data-wow-delay=".5s">
                <h5 className="title">Resources</h5>
                <ul>
                  {resources.map((resource, index) => (
                    <li key={index}>
                      <a href={resource.url}>
                        {resource.name}
                        {resource.badge && <span className="badge">{resource.badge}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="footer-widget widget-contact wow fadeInUp" data-wow-delay=".7s">
                <h5 className="title">Our Office</h5>
                <div className="footer-contact-info">
                  <div className="contact-item">
                    <span>993 Renner Burg, West Rond, MT 94251-030, USA.</span>
                  </div>
                  <div className="contact-item">
                    <a href="tel:10095447818">P: +1 (009) 544-7818</a>
                    <a href="mailto:support@bexon.com">M: support@bexon.com</a>
                  </div>
                  <div className="contact-item">
                    <span><i className="tji-clock"></i> Mon-Fri 10am-10pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-3">
              <div className="award-logo-area wow fadeInUp" data-wow-delay=".3s">
                <div className="award-logo">
                  <Image 
                    src="/assets/images/footer/award-logo-white-1.webp" 
                    alt="Award Logo 1"
                    width={80}
                    height={40}
                  />
                </div>
                <div className="award-logo">
                  <Image 
                    src="/assets/images/footer/award-logo-white-2.webp" 
                    alt="Award Logo 2"
                    width={80}
                    height={40}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="footer-widget widget-subscribe-2 wow fadeInUp" data-wow-delay=".5s">
                <h3 className="title">Subscribe to Our Newsletter.</h3>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="email" name="email" placeholder="Enter email" />
                    <button type="submit"><i className="tji-plane"></i></button>
                    <label htmlFor="agree">
                      <input id="agree" type="checkbox" />
                      Agree to our <a href="#">Terms & Condition?</a>
                    </label>
                  </form>
                </div>
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
                <div className="copyright-text">
                  <p>
                    &copy; 2025 <a href="https://themeforest.net/user/theme-junction/portfolio" target="_blank" rel="noopener noreferrer">Bexon</a> All right reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape-1">
        <Image 
          src="/assets/images/shape/pattern-2.svg" 
          alt="Background pattern"
          width={200}
          height={200}
        />
      </div>
      <div className="bg-shape-2">
        <Image 
          src="/assets/images/shape/pattern-3.svg" 
          alt="Background pattern"
          width={200}
          height={200}
        />
      </div>
    </footer>
  );
};

export default Footer;