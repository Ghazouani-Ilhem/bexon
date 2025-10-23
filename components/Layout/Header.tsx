import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
  isSticky?: boolean
}

const Header: React.FC<HeaderProps> = ({ isSticky = false }) => {
  const headerClasses = isSticky 
    ? "header-area header-1 header-duplicate header-sticky section-gap-x"
    : "header-area header-1 header-absolute section-gap-x"

  return (
    <header className={headerClasses}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="header-wrapper">
              {/* site logo */}
              <div className="site_logo">
                <Link className="logo" href="/">
                  <Image src="/assets/images/logos/logo.webp" alt="" width={120} height={40} />
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
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                  <div key={num} className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image 
                                          src={`/assets/images/header/demo/home-${num}.webp`} 
                                          alt="" 
                                          width={300} 
                                          height={200} 
                                        />
                                        <div className="tj-demo-button">
                                          <Link 
                                            href={num === 1 ? "/" : `/index-${num}`} 
                                            className="tj-primary-btn header_btn"
                                          >
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title">
                                        <Link href={num === 1 ? "/" : `/index-${num}`}>
                                          Homepage - {num.toString().padStart(2, '0')}
                                        </Link>
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
                    <li className="has-dropdown">
                      <a href="/about">Pages</a>
                      <ul className="sub-menu header__mega-menu mega-menu mega-menu-pages">
                        <li>
                          <div className="mega-menu-wrapper">
                            <div className="mega-menu-pages-single">
                              <div className="mega-menu-pages-single-inner">
                                <h6 className="mega-menu-title">Main Pages</h6>
                                <div className="mega-menu-list">
                                  <Link href="/about">About us</Link>
                                  <Link href="/history">Our history <span className="mega-menu-badge tj-zoom-in-out-anim mega-menu-badge-hot">HOT</span></Link>
                                  <Link href="/team">Team</Link>
                                  <Link href="/team-details">Team details</Link>
                                  <Link href="/careers">Careers <span className="mega-menu-badge tj-zoom-in-out-anim">NEW</span></Link>
                                  <Link href="/careers-details">Careers details</Link>
                                  <Link href="/pricing">Pricing plan</Link>
                                  <a href="#feedbacks">Feedbacks</a>
                                  <Link href="/faq">Faq</Link>
                                  <Link href="/contact">Contact</Link>
                                </div>
                              </div>
                            </div>
                            <div className="mega-menu-pages-single">
                              <div className="mega-menu-pages-single-inner">
                                <h6 className="mega-menu-title">Other Pages</h6>
                                <div className="mega-menu-list">
                                  <Link href="/service">Services</Link>
                                  <Link href="/service-details">Service details</Link>
                                  <Link href="/portfolio">Portfolio</Link>
                                  <Link href="/portfolio-details">Portfolio details</Link>
                                  <Link href="/error">Error 404</Link>
                                  <Link href="/blog-grid">Blog grid <span className="mega-menu-badge tj-zoom-in-out-anim">NEW</span></Link>
                                  <Link href="/blog">Blog standard</Link>
                                  <Link href="/blog-details">Blog details</Link>
                                  <Link href="/terms-and-conditions">Term & conditions</Link>
                                  <a href="#recognition">Recognition <span className="mega-menu-badge tj-zoom-in-out-anim">NEW</span></a>
                                </div>
                              </div>
                            </div>
                            <div className="mega-menu-pages-single">
                              <div className="mega-menu-pages-single-inner">
                                <h6 className="mega-menu-title">Shop Pages</h6>
                                <div className="mega-menu-list">
                                  <Link href="/shop">Shop <span className="mega-menu-badge tj-zoom-in-out-anim mega-menu-badge-hot">HOT</span></Link>
                                  <Link href="/shop-details">Shop details</Link>
                                  <Link href="/cart">Cart</Link>
                                  <Link href="/checkout">Checkout</Link>
                                  <Link href="/wishlist">Wishlist<span className="mega-menu-badge tj-zoom-in-out-anim">NEW</span></Link>
                                  <Link href="/login">Login</Link>
                                  <a href="#tracking">Tracking</a>
                                  <a href="#order-confirm">Order confirm</a>
                                  <Link href="/login">Registration</Link>
                                  <a href="#coming-soon">Coming soon</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-lg-3 mega-menu-pages-single">
                              <div className="mega-menu-pages-single-inner">
                                <div className="feature-box">
                                  <div className="feature-content">
                                    <h2 className="title">Modern</h2>
                                    <span>Home Makeover</span>
                                    <a className="read-more feature-contact" href="tel:8321890640">
                                      <i className="tji-phone-3"></i>
                                      <span>+8 (321) 890-640</span>
                                    </a>
                                  </div>
                                  <div className="feature-images">
                                    <Image src="/assets/images/service/service-ad.webp" alt="" width={200} height={150} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="/service">Services</a>
                      <ul className="sub-menu mega-menu-service">
                        {[
                          { icon: 'tji-service-1', title: 'Business Strategy Development' },
                          { icon: 'tji-service-2', title: 'Customer Experience Solutions' },
                          { icon: 'tji-service-3', title: 'Sustainability and ESG Consulting' },
                          { icon: 'tji-service-4', title: 'Training and Development Programs' },
                          { icon: 'tji-service-5', title: 'IT Support & Maintenance' },
                          { icon: 'tji-service-6', title: 'Marketing Strategy & Campaigns' }
                        ].map((service, index) => (
                          <li key={index}>
                            <a className="mega-menu-service-single" href="/service-details">
                              <span className="mega-menu-service-icon">
                                <i className={service.icon}></i>
                              </span>
                              <span className="mega-menu-service-title">{service.title}</span>
                              <span className="mega-menu-service-nav">
                                <i className="tji-arrow-right-long"></i>
                                <i className="tji-arrow-right-long"></i>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="/portfolio">Portfolio</a>
                      <ul className="sub-menu">
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/portfolio-details">Portfolio Details</Link></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="/blog">Blog</a>
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

              {/* header right info */}
              <div className="header-right-item d-none d-lg-inline-flex">
                <div className="header-search">
                  <button className="search">
                    <i className="tji-search"></i>
                  </button>
                  <button type="button" className="search_close_btn">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                <div className="header-button">
                  <Link className="tj-primary-btn" href="/contact">
                    <span className="btn-text"><span>Let's Talk</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                  </Link>
                </div>
                <div className="menu_bar menu_offcanvas d-none d-lg-inline-flex">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              {/* menu bar */}
              <div className="menu_bar mobile_menu_bar d-lg-none">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Popup */}
      <div className="search_popup">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="tj_search_wrapper">
                <div className="search_form">
                  <form action="#">
                    <div className="search_input">
                      <div className="search-box">
                        <input className="search-form-input" type="text" placeholder="Type Words and Hit Enter" required />
                        <button type="submit">
                          <i className="tji-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header