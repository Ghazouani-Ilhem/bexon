import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const homepageOptions = [
    { id: 1, title: 'Homepage - 01', url: '/', image: '/assets/images/header/demo/home-1.webp' },
    { id: 2, title: 'Homepage - 02', url: '/index-2', image: '/assets/images/header/demo/home-2.webp' },
    { id: 3, title: 'Homepage - 03', url: '/index-3', image: '/assets/images/header/demo/home-3.webp' },
    { id: 4, title: 'Homepage - 04', url: '/index-4', image: '/assets/images/header/demo/home-4.webp' },
    { id: 5, title: 'Homepage - 05', url: '/index-5', image: '/assets/images/header/demo/home-5.webp' },
    { id: 6, title: 'Homepage - 06', url: '/index-6', image: '/assets/images/header/demo/home-6.webp' },
    { id: 7, title: 'Homepage - 07', url: '/index-7', image: '/assets/images/header/demo/home-7.webp' },
    { id: 8, title: 'Homepage - 08', url: '/index-8', image: '/assets/images/header/demo/home-8.webp' },
    { id: 9, title: 'Homepage - 09', url: '/index-9', image: '/assets/images/header/demo/home-9.webp' },
    { id: 10, title: 'Homepage - 10', url: '/index-10', image: '/assets/images/header/demo/home-10.webp' }
  ];

  return (
    <header className="header-area header-1 header-absolute section-gap-x">
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
                                {homepageOptions.map((option) => (
                                  <div key={option.id} className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image 
                                          src={option.image} 
                                          alt={option.title}
                                          width={200}
                                          height={150}
                                        />
                                        <div className="tj-demo-button">
                                          <Link href={option.url} className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title">
                                        <Link href={option.url}>{option.title}</Link>
                                      </h6>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li><Link href="/about">About</Link></li>
                    <li className="has-dropdown">
                      <Link href="/service">Services</Link>
                      <ul className="sub-menu mega-menu-service">
                        <li>
                          <Link href="/service-details" className="mega-menu-service-single">
                            <span className="mega-menu-service-icon">
                              <i className="tji-service-1"></i>
                            </span>
                            <span className="mega-menu-service-title">Business Strategy Development</span>
                            <span className="mega-menu-service-nav">
                              <i className="tji-arrow-right-long"></i>
                              <i className="tji-arrow-right-long"></i>
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/service-details" className="mega-menu-service-single">
                            <span className="mega-menu-service-icon">
                              <i className="tji-service-2"></i>
                            </span>
                            <span className="mega-menu-service-title">Customer Experience Solutions</span>
                            <span className="mega-menu-service-nav">
                              <i className="tji-arrow-right-long"></i>
                              <i className="tji-arrow-right-long"></i>
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/service-details" className="mega-menu-service-single">
                            <span className="mega-menu-service-icon">
                              <i className="tji-service-3"></i>
                            </span>
                            <span className="mega-menu-service-title">Sustainability and ESG Consulting</span>
                            <span className="mega-menu-service-nav">
                              <i className="tji-arrow-right-long"></i>
                              <i className="tji-arrow-right-long"></i>
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/service-details" className="mega-menu-service-single">
                            <span className="mega-menu-service-icon">
                              <i className="tji-service-4"></i>
                            </span>
                            <span className="mega-menu-service-title">Training and Development Programs</span>
                            <span className="mega-menu-service-nav">
                              <i className="tji-arrow-right-long"></i>
                              <i className="tji-arrow-right-long"></i>
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/service-details" className="mega-menu-service-single">
                            <span className="mega-menu-service-icon">
                              <i className="tji-service-5"></i>
                            </span>
                            <span className="mega-menu-service-title">IT Support & Maintenance</span>
                            <span className="mega-menu-service-nav">
                              <i className="tji-arrow-right-long"></i>
                              <i className="tji-arrow-right-long"></i>
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/service-details" className="mega-menu-service-single">
                            <span className="mega-menu-service-icon">
                              <i className="tji-service-6"></i>
                            </span>
                            <span className="mega-menu-service-title">Marketing Strategy & Campaigns</span>
                            <span className="mega-menu-service-nav">
                              <i className="tji-arrow-right-long"></i>
                              <i className="tji-arrow-right-long"></i>
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link href="/portfolio">Portfolio</Link>
                      <ul className="sub-menu">
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/portfolio-details">Portfolio Details</Link></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link href="/blog">Blog</Link>
                      <ul className="sub-menu">
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/blog-grid">Blog Grid</Link></li>
                        <li><Link href="/blog-right-sidebar">Blog Right Sidebar</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                      </ul>
                    </li>
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
    </header>
  );
};

export default Header;