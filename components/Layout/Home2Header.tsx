import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Home2HeaderProps {
  isSticky?: boolean
}

const Home2Header: React.FC<Home2HeaderProps> = ({ isSticky = false }) => {
  const headerClasses = isSticky 
    ? "header-area header-2 header-duplicate header-sticky section-gap-x"
    : "header-area header-2 header-absolute section-gap-x"

  return (
    <header className={headerClasses}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="header-wrapper">
              {/* site logo */}
              <div className="site_logo">
                <Link className="logo" href="/">
                  <Image src="/assets/images/logos/logo-2.webp" alt="" width={120} height={40} />
                </Link>
              </div>

              {/* navigation */}
              <div className="menu-area d-none d-lg-inline-flex align-items-center">
                <nav id="mobile-menu" className="mainmenu">
                  <ul>
                    <li className="has-dropdown current-menu-ancestor">
                      <Link href="/">Home</Link>
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
                      <Link href="/about">About</Link>
                      <ul className="sub-menu">
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/team">Team</Link></li>
                        <li><Link href="/team-details">Team Details</Link></li>
                        <li><Link href="/history">History</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                        <li><Link href="/careers-details">Careers Details</Link></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link href="/service">Services</Link>
                      <ul className="sub-menu header__mega-menu mega-menu">
                        <li>
                          <div className="mega-menu-wrapper">
                            <div className="container-fluid gap-60-25">
                              <div className="row">
                                <div className="col-xl-6 col-lg-6 col-12">
                                  <div className="mega-menu-service">
                                    <h6 className="mega-menu-service-title">Our Services</h6>
                                    <ul className="mega-menu-service-list">
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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

      {/* Search Popup - Inside Header */}
      <div className="search_popup">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="tj_search_wrapper">
                <div className="search_form">
                  <form action="/index-2#">
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

export default Home2Header