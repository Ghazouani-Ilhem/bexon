import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const socialLinks = [
    { name: 'facebook', icon: 'fa-brands fa-facebook-f', url: 'https://www.facebook.com/' },
    { name: 'instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/' },
    { name: 'twitter', icon: 'fa-brands fa-x-twitter', url: 'https://x.com/' },
    { name: 'linkedin', icon: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/' }
  ];

  return (
    <header className="header-area header-3 header-absolute section-gap-x">
      <div className="header-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-top-content">
                <p className="topbar-text">
                  <i className="tji-excellence"></i>Recognized for Excellence 
                  <Link href="/contact">Join us Now</Link>
                </p>
                <div className="header-info">
                  <div className="info-item">
                    <span><i className="tji-location"></i></span>
                    <a href="#location">Find a Location!</a>
                  </div>
                  <div className="info-item">
                    <span><i className="tji-phone-3"></i></span>
                    <a href="tel:8089091313">808-909-1313</a>
                  </div>
                  <div className="info-item">
                    <div className="social-links style-2">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* site logo */}
                <div className="site_logo">
                  <Link className="logo" href="/">
                    <Image 
                      src="/assets/images/logos/logo.webp" 
                      alt="Bexon Logo"
                      width={150}
                      height={50}
                    />
                  </Link>
                </div>

                {/* navigation */}
                <div className="menu-area d-none d-lg-inline-flex align-items-center">
                  <nav id="mobile-menu" className="mainmenu">
                    <ul>
                      <li className="has-dropdown current-menu-ancestor">
                        <a href="/">Home</a>
                        <ul className="sub-menu header__mega-menu mega-menu">
                          <li>
                            <div className="mega-menu-wrapper">
                              <div className="container-fluid gap-60-25">
                                <div className="row">
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image 
                                          src="/assets/images/header/demo/home-1.webp" 
                                          alt="Homepage 1"
                                          width={200}
                                          height={150}
                                        />
                                        <div className="tj-demo-button">
                                          <Link href="/" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title">
                                        <Link href="/">Homepage - 01</Link>
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image 
                                          src="/assets/images/header/demo/home-2.webp" 
                                          alt="Homepage 2"
                                          width={200}
                                          height={150}
                                        />
                                        <div className="tj-demo-button">
                                          <Link href="/index-2" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title">
                                        <Link href="/index-2">Homepage - 02</Link>
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image 
                                          src="/assets/images/header/demo/home-3.webp" 
                                          alt="Homepage 3"
                                          width={200}
                                          height={150}
                                        />
                                        <div className="tj-demo-button">
                                          <Link href="/index-3" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title">
                                        <Link href="/index-3">Homepage - 03</Link>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li><Link href="/about">About</Link></li>
                      <li><Link href="/service">Services</Link></li>
                      <li><Link href="/portfolio">Portfolio</Link></li>
                      <li><Link href="/blog">Blog</Link></li>
                      <li><Link href="/contact">Contact</Link></li>
                    </ul>
                  </nav>
                </div>

                {/* header action */}
                <div className="header-action d-flex align-items-center">
                  <div className="search-btn d-none d-md-inline-flex">
                    <button className="search-toggle" type="button">
                      <i className="tji-search"></i>
                    </button>
                  </div>
                  <div className="header-btn d-none d-md-inline-flex">
                    <Link className="tj-primary-btn" href="/contact">
                      <span className="btn-text"><span>Get Started</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </Link>
                  </div>
                  <div className="hamburger d-lg-none">
                    <button className="hamburger-btn" type="button">
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;