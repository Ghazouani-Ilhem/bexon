import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bexon - Corporate Business HTML Template</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/fav.png" />
        
        {/* CSS Links */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-pro.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/bexon-icons.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/venobox.min.css" />
        <link rel="stylesheet" href="/assets/css/odometer-theme-default.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </Head>

      <div className="body-overlay"></div>

      {/* Preloader Start */}
      <div className="tj-preloader is-loading">
        <div className="tj-preloader-inner">
          <div className="tj-preloader-ball-wrap">
            <div className="tj-preloader-ball-inner-wrap">
              <div className="tj-preloader-ball-inner">
                <div className="tj-preloader-ball"></div>
              </div>
              <div className="tj-preloader-ball-shadow"></div>
            </div>
            <div id="tj-weave-anim" className="tj-preloader-text">Loading...</div>
          </div>
        </div>
        <div className="tj-preloader-overlay"></div>
      </div>
      {/* Preloader end */}

      {/* back to top start */}
      <div id="tj-back-to-top"><span id="tj-back-to-top-percentage"></span></div>
      {/* back to top end */}

      {/* start: Search Popup */}
      <div className="search-popup-overlay"></div>
      {/* end: Search Popup */}

      {/* start: Offcanvas Menu */}
      <div className="tj-offcanvas-area d-none d-lg-block">
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <Link href="/" className="mobile_logo">
                  <Image src="/assets/images/logos/logo-2.webp" alt="Logo" width={120} height={40} />
                </Link>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn"><i className="fa-thin fa-times"></i></button>
              </div>
            </div>
            <div className="offcanvas-text">
              <p>Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion
                recognized
                by industry leaders.</p>
            </div>
            <div className="hamburger-search-area">
              <h5 className="hamburger-title">Search Now!</h5>
              <div className="hamburger_search">
                <form method="get" action="/">
                  <button type="submit"><i className="tji-search"></i></button>
                  <input type="search" autoComplete="off" name="s" defaultValue="" placeholder="Search here..." />
                </form>
              </div>
            </div>
            <div className="hamburger-infos">
              <h5 className="hamburger-title">Contact Info</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="subtitle">Phone</span>
                  <a className="contact-link" href="tel:10095447818">+1 (009) 544-7818</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Email</span>
                  <a className="contact-link" href="mailto:info@bexon.com">info@bexon.com</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Location</span>
                  <span className="contact-link">993 Renner Burg, West Rond, MT 94251-030</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h5 className="hamburger-title">Follow Us</h5>
            <div className="social-links style-3">
              <ul>
                <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                </li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                </li>
                <li><a href="https://x.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end: Offcanvas Menu */}

      {/* start: Hamburger Menu */}
      <div className="hamburger-area d-lg-none">
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <Link href="/" className="mobile_logo">
                  <Image src="/assets/images/logos/logo-2.webp" alt="Logo" width={120} height={40} />
                </Link>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn"><i className="fa-thin fa-times"></i></button>
              </div>
            </div>
            <div className="hamburger_menu">
              <div className="mobile_menu"></div>
            </div>
            <div className="hamburger-infos">
              <h5 className="hamburger-title">Contact Info</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="subtitle">Phone</span>
                  <a className="contact-link" href="tel:8089091313">808-909-1313</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Email</span>
                  <a className="contact-link" href="mailto:info@bexon.com">info@bexon.com</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Location</span>
                  <span className="contact-link">993 Renner Burg, West Rond, MT 94251-030</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h5 className="hamburger-title">Follow Us</h5>
            <div className="social-links style-3">
              <ul>
                <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                </li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                </li>
                <li><a href="https://x.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end: Hamburger Menu */}

      {/* start: Header Area */}
      <header className="header-area header-1 header-absolute section-gap-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* site logo */}
                <div className="site_logo">
                  <Link className="logo" href="/"><Image src="/assets/images/logos/logo.webp" alt="" width={120} height={40} /></Link>
                </div>

                {/* navigation */}
                <div className="menu-area d-none d-lg-inline-flex align-items-center">
                  <nav id="mobile-menu" className="mainmenu">
                    <ul>
                      <li className="has-dropdown current-menu-ancestor"><a href="/">Home</a>
                        <ul className="sub-menu header__mega-menu mega-menu">
                          <li>
                            <div className="mega-menu-wrapper">
                              <div className="container-fluid gap-60-25">
                                <div className="row">
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-1.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/">Homepage - 01</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-2.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-2" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-2">Homepage - 02</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-3.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-3" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-3">Homepage - 03</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-4.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-4" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-4">Homepage - 04</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-5.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-5" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-5">Homepage - 05</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-6.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-6" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-6">Homepage - 06</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-7.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-7" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-7">Homepage - 07</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-8.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-8" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-8">Homepage - 08</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-9.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-9" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-9">Homepage - 09</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-10.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-10" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-10">Homepage - 10</Link></h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><a href="/about">Pages</a>
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
                      <li className="has-dropdown"><a href="/service">Services</a>
                        <ul className="sub-menu mega-menu-service">
                          <li>
                            <a className="mega-menu-service-single" href="/service-details">
                              <span className="mega-menu-service-icon">
                                <i className="tji-service-1"></i>
                              </span>
                              <span className="mega-menu-service-title">Business Strategy Development</span>
                              <span className="mega-menu-service-nav">
                                <i className="tji-arrow-right-long"></i>
                                <i className="tji-arrow-right-long"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="mega-menu-service-single" href="/service-details">
                              <span className="mega-menu-service-icon">
                                <i className="tji-service-2"></i>
                              </span>
                              <span className="mega-menu-service-title">Customer Experience Solutions</span>
                              <span className="mega-menu-service-nav">
                                <i className="tji-arrow-right-long"></i>
                                <i className="tji-arrow-right-long"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="mega-menu-service-single" href="/service-details">
                              <span className="mega-menu-service-icon">
                                <i className="tji-service-3"></i>
                              </span>
                              <span className="mega-menu-service-title">Sustainability and ESG Consulting</span>
                              <span className="mega-menu-service-nav">
                                <i className="tji-arrow-right-long"></i>
                                <i className="tji-arrow-right-long"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="mega-menu-service-single" href="/service-details">
                              <span className="mega-menu-service-icon">
                                <i className="tji-service-4"></i>
                              </span>
                              <span className="mega-menu-service-title">Training and Development Programs</span>
                              <span className="mega-menu-service-nav">
                                <i className="tji-arrow-right-long"></i>
                                <i className="tji-arrow-right-long"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="mega-menu-service-single" href="/service-details">
                              <span className="mega-menu-service-icon">
                                <i className="tji-service-5"></i>
                              </span>
                              <span className="mega-menu-service-title">IT Support & Maintenance</span>
                              <span className="mega-menu-service-nav">
                                <i className="tji-arrow-right-long"></i>
                                <i className="tji-arrow-right-long"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="mega-menu-service-single" href="/service-details">
                              <span className="mega-menu-service-icon">
                                <i className="tji-service-6"></i>
                              </span>
                              <span className="mega-menu-service-title">Marketing Strategy & Campaigns</span>
                              <span className="mega-menu-service-nav">
                                <i className="tji-arrow-right-long"></i>
                                <i className="tji-arrow-right-long"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><a href="/portfolio">Portfolio</a>
                        <ul className="sub-menu">
                          <li><Link href="/portfolio">Portfolio</Link></li>
                          <li><Link href="/portfolio-details">Portfolio Details</Link></li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><a href="/blog">Blog</a>
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
      {/* end: Header Area */}

      {/* start: Header Area - Sticky */}
      <header className="header-area header-1 header-duplicate header-sticky section-gap-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* site logo */}
                <div className="site_logo">
                  <Link className="logo" href="/"><Image src="/assets/images/logos/logo.webp" alt="" width={120} height={40} /></Link>
                </div>

                {/* navigation */}
                <div className="menu-area d-none d-lg-inline-flex align-items-center">
                  <nav className="mainmenu">
                    <ul>
                      <li className="has-dropdown current-menu-ancestor"><a href="/">Home</a>
                        <ul className="sub-menu header__mega-menu mega-menu">
                          <li>
                            <div className="mega-menu-wrapper">
                              <div className="container-fluid gap-60-25">
                                <div className="row">
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-1.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/">Homepage - 01</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-2.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-2" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-2">Homepage - 02</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-3.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-3" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-3">Homepage - 03</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-4.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-4" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-4">Homepage - 04</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-5.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-5" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-5">Homepage - 05</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-6.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-6" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-6">Homepage - 06</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-7.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-7" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-7">Homepage - 07</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-8.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-8" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-8">Homepage - 08</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-9.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-9" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-9">Homepage - 09</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <Image src="/assets/images/header/demo/home-10.webp" alt="" width={300} height={200} />
                                        <div className="tj-demo-button">
                                          <Link href="/index-10" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-10">Homepage - 10</Link></h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><a href="/about">Pages</a>
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
                      <li className="has-dropdown"><a href="/service">Services</a>
                        <ul className="sub-menu mega-menu-service">
                          <li>
                            <a className="mega-menu-service-single" href="/service-details">
                              <span className="mega-menu-service-icon">
                                <i className="tji-service-1"></i>
                              </span>
                              <span className="mega-menu-service-title">Business Strategy Development</span>
                              <span className="mega-menu-service-nav">
                                <i className="tji-arrow-right-long"></i>
                                <i className="tji-arrow-right-long"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="mega-menu-service-single" href="/service-details">
                              <span className="mega-menu-service-icon">
                                <i className="tji-service-2"></i>
                              </span>
                              <span className="mega-menu-service-title">Customer Experience Solutions</span>
                              <span className="mega-menu-service-nav">
                                <i className="tji-arrow-right-long"></i>
                                <i className="tji-arrow-right-long"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="mega-menu-service-single" href="/service-details">
                              <span className="mega-menu-service-icon">
                                <i className="tji-service-3"></i>
                              </span>
                              <span className="mega-menu-service-title">Sustainability and ESG Consulting</span>
                              <span className="mega-menu-service-nav">
                                <i className="tji-arrow-right-long"></i>
                                <i className="tji-arrow-right-long"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="mega-menu-service-single" href="/service-details">
                              <span className="mega-menu-service-icon">
                                <i className="tji-service-4"></i>
                              </span>
                              <span className="mega-menu-service-title">Training and Development Programs</span>
                              <span className="mega-menu-service-nav">
                                <i className="tji-arrow-right-long"></i>
                                <i className="tji-arrow-right-long"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="mega-menu-service-single" href="/service-details">
                              <span className="mega-menu-service-icon">
                                <i className="tji-service-5"></i>
                              </span>
                              <span className="mega-menu-service-title">IT Support & Maintenance</span>
                              <span className="mega-menu-service-nav">
                                <i className="tji-arrow-right-long"></i>
                                <i className="tji-arrow-right-long"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="mega-menu-service-single" href="/service-details">
                              <span className="mega-menu-service-icon">
                                <i className="tji-service-6"></i>
                              </span>
                              <span className="mega-menu-service-title">Marketing Strategy & Campaigns</span>
                              <span className="mega-menu-service-nav">
                                <i className="tji-arrow-right-long"></i>
                                <i className="tji-arrow-right-long"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><a href="/portfolio">Portfolio</a>
                        <ul className="sub-menu">
                          <li><Link href="/portfolio">Portfolio</Link></li>
                          <li><Link href="/portfolio-details">Portfolio Details</Link></li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><a href="/blog">Blog</a>
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
      {/* end: Header Area - Sticky */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="space-for-header"></div>
            
            {/* start: Banner Section */}
            <section className="tj-banner-section section-gap-x">
              <div className="banner-area">
                <div className="banner-left-box">
                  <div className="banner-content">
                    <span className="sub-title wow fadeInDown" data-wow-delay=".2s">
                      <i className="tji-excellence"></i> Recognized for Excellence
                    </span>
                    <h1 className="banner-title title-anim">Driving Excellence Through Evolution and
                      <span>Trust.</span>
                    </h1>
                    <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                      <a className="banner-link" href="/about">
                        <span><i className="tji-arrow-right-big"></i></span>
                      </a>
                      <div className="banner-desc">Represents growth, expansion, and modern
                        business solution present growth, expansion.
                      </div>
                    </div>
                  </div>
                  <div className="banner-shape">
                    <Image src="/assets/images/shape/pattern-bg.webp" alt="" width={400} height={300} />
                  </div>
                </div>
                <div className="banner-right-box">
                  <div className="banner-img">
                    <Image data-speed="0.8" src="/assets/images/hero/hero-img.webp" alt="" width={600} height={500} />
                  </div>
                  <div className="box-area">
                    <div className="customers-box">
                      <div className="customers">
                        <ul>
                          <li className="wow fadeInLeft" data-wow-delay=".5s">
                            <Image src="/assets/images/testimonial/client-1.webp" alt="" width={50} height={50} />
                          </li>
                          <li className="wow fadeInLeft" data-wow-delay=".6s">
                            <Image src="/assets/images/testimonial/client-2.webp" alt="" width={50} height={50} />
                          </li>
                          <li className="wow fadeInLeft" data-wow-delay=".7s">
                            <Image src="/assets/images/testimonial/client-3.webp" alt="" width={50} height={50} />
                          </li>
                          <li className="wow fadeInLeft" data-wow-delay=".8s">
                            <span><i className="tji-plus"></i></span>
                          </li>
                        </ul>
                      </div>
                      <div className="customers-number wow fadeInUp" data-wow-delay=".5s">30K</div>
                      <h6 className="customers-text wow fadeInUp" data-wow-delay=".5s">Happy customer we have world-wide.</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner-scroll wow fadeInDown" data-wow-delay="2s">
                <a href="#choose" className="scroll-down">
                  <span><i className="tji-arrow-down-long"></i></span>
                  Scroll Down
                </a>
              </div>
            </section>
            {/* end: Banner Section */}

            {/* start: Choose Section */}
            <section id="choose" className="tj-choose-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="tji-box"></i>Choose the Best
                      </span>
                      <h2 className="sec-title title-anim">Empowering Business with <span>Expertise.</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4 rightSwipeWrap">
                  <div className="col-lg-4">
                    <div className="choose-box right-swipe">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="tji-innovative"></i>
                        </div>
                        <h4 className="title">Innovative Solutions</h4>
                        <p className="desc">We stay ahead of the curve, leveraging cutting-edge technologies and strategies to
                          keep
                          you competitive in a marketplace.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="choose-box right-swipe">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="tji-award"></i>
                        </div>
                        <h4 className="title">Award-Winning Expertise</h4>
                        <p className="desc">Recognized by industry leaders, our award-winning team has a proven record of
                          delivering
                          excellence across projects.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="choose-box right-swipe">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="tji-support"></i>
                        </div>
                        <h4 className="title">Dedicated Support</h4>
                        <p className="desc">Our team is always available to address your concerns, providing quick and effective
                          solution to keep your business.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Choose Section */}

            {/* start: Client Section */}
            <section className="tj-client-section client-section-gap wow fadeInUp" data-wow-delay=".4s">
              <div className="container-fluid client-container">
                <div className="row">
                  <div className="col-12">
                    <div className="client-content">
                      <h5 className="sec-title">Join Over <span className="client-numbers">1000+</span> Companies with
                        <span className="client-text">Bexon</span> Here
                      </h5>
                    </div>
                    <div className="swiper client-slider client-slider-1">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <Image src="/assets/images/brands/brand-1.webp" alt="" width={150} height={80} />
                          </div>
                        </div>
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <Image src="/assets/images/brands/brand-2.webp" alt="" width={150} height={80} />
                          </div>
                        </div>
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <Image src="/assets/images/brands/brand-3.webp" alt="" width={150} height={80} />
                          </div>
                        </div>
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <Image src="/assets/images/brands/brand-4.webp" alt="" width={150} height={80} />
                          </div>
                        </div>
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <Image src="/assets/images/brands/brand-5.webp" alt="" width={150} height={80} />
                          </div>
                        </div>
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <Image src="/assets/images/brands/brand-6.webp" alt="" width={150} height={80} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Client Section */}

            {/* start: About Section */}
            <section className="tj-about-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
                    <div className="about-img-area wow fadeInLeft" data-wow-delay=".2s">
                      <div className="about-img">
                        <Image src="/assets/images/about/about-img.webp" alt="" width={600} height={500} />
                      </div>
                      <div className="about-shape">
                        <Image src="/assets/images/shape/about-shape.webp" alt="" width={200} height={200} />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
                    <div className="about-content-area">
                      <div className="sec-heading">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                          <i className="tji-about"></i>About Bexon
                        </span>
                        <h2 className="sec-title title-anim">We are a team of passionate professionals dedicated to
                          <span>excellence.</span>
                        </h2>
                        <p className="sec-desc">We are a team of passionate professionals dedicated to excellence. Our mission is to
                          provide innovative solutions that help businesses grow and succeed in today's competitive
                          marketplace.</p>
                      </div>
                      <div className="about-features">
                        <div className="feature-item wow fadeInUp" data-wow-delay=".4s">
                          <div className="feature-icon">
                            <i className="tji-check"></i>
                          </div>
                          <div className="feature-content">
                            <h5 className="title">Quality Assurance</h5>
                            <p className="desc">We ensure the highest quality standards in all our deliverables.</p>
                          </div>
                        </div>
                        <div className="feature-item wow fadeInUp" data-wow-delay=".5s">
                          <div className="feature-icon">
                            <i className="tji-check"></i>
                          </div>
                          <div className="feature-content">
                            <h5 className="title">24/7 Support</h5>
                            <p className="desc">Round-the-clock support to address your needs and concerns.</p>
                          </div>
                        </div>
                        <div className="feature-item wow fadeInUp" data-wow-delay=".6s">
                          <div className="feature-icon">
                            <i className="tji-check"></i>
                          </div>
                          <div className="feature-content">
                            <h5 className="title">Expert Team</h5>
                            <p className="desc">Our team consists of experienced professionals in their respective fields.</p>
                          </div>
                        </div>
                      </div>
                      <div className="about-btn-area wow fadeInUp" data-wow-delay=".7s">
                        <Link className="tj-primary-btn" href="/about">
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: About Section */}

            {/* start: About Section - Second */}
            <section className="tj-about-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
                    <div className="about-img-area wow fadeInLeft" data-wow-delay=".2s">
                      <div className="about-img overflow-hidden">
                        <Image data-speed="0.8" src="/assets/images/about/about-1.webp" alt="" width={600} height={500} />
                      </div>
                      <div className="box-area">
                        <div className="experience-box wow fadeInUp" data-wow-delay=".3s">
                          <span className="sub-title">Experiences</span>
                          <div className="customers-number">13+</div>
                          <h6 className="customers-text">Decades of Experience, Endless Innovation</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
                    <div className="about-content-area style-1 wow fadeInLeft" data-wow-delay=".2s">
                      <div className="sec-heading">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                          <i className="tji-box"></i>Get to Know Us
                        </span>
                        <h2 className="sec-title title-anim">Empowering Businesses with Innovation,
                          Expertise, and for <span>Success.</span>
                        </h2>
                      </div>
                      <div className="wow fadeInUp" data-wow-delay=".5s">
                        <Link className="text-btn" href="/about">
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                        </Link>
                      </div>
                    </div>
                    <div className="about-bottom-area">
                      <div className="client-review-cont wow fadeInUp" data-wow-delay=".7s">
                        <div className="rating-area">
                          <div className="star-ratings">
                            <div className="fill-ratings" style={{width: "100%"}}>
                              <span>★★★★★</span>
                            </div>
                            <div className="empty-ratings">
                              <span>★★★★★</span>
                            </div>
                          </div>
                        </div>
                        <p className="desc">We believe in building lasting relationships with our clients through trust,
                          innovation,
                          and
                          exceptional service.</p>
                        <div className="client-info-area">
                          <div className="client-info">
                            <h6 className="title">Esther Howard</h6>
                            <span className="designation">Co.Founder</span>
                          </div>
                          <span className="quote-icon"><i className="tji-quote"></i></span>
                        </div>
                      </div>
                      <div className="video-img wow fadeInUp" data-wow-delay=".9s">
                        <Image src="/assets/images/about/about-2.webp" alt="" width={400} height={300} />
                        <a className="video-btn video-popup" data-autoplay="true" data-vbtype="video" data-maxwidth="1200px"
                          href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados">
                          <span><i className="tji-play"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: About Section - Second */}

            {/* start: Service Section */}
            <section className="tj-service-section overflow-hidden section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center">
                      <span className="sub-title text-white wow fadeInUp" data-wow-delay=".3s">
                        <i className="tji-box"></i>Our Solutions
                      </span>
                      <h2 className="sec-title text-white title-anim">Solutions to Transform Your <span>Business.</span></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid p-0">
                <div className="row">
                  <div className="col-12">
                    <div className="service-wrapper wow fadeInUp" data-wow-delay=".4s">
                      <div className="swiper service-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="service-item style-1">
                              <div className="service-img">
                                <Image src="/assets/images/service/service-1.webp" alt="" width={400} height={300} />
                              </div>
                              <div className="service-icon">
                                <i className="tji-service-1"></i>
                              </div>
                              <div className="service-content">
                                <h4 className="title"><Link href="/service-details">Business Strategy Development</Link></h4>
                                <p className="desc">Through a combination of data-driven insights and innovative approaches, we
                                  work
                                  closely with you to develop customized.</p>
                                <Link className="text-btn" href="/service-details">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="service-item style-1">
                              <div className="service-img">
                                <Image src="/assets/images/service/service-5.webp" alt="" width={400} height={300} />
                              </div>
                              <div className="service-icon">
                                <i className="tji-service-2"></i>
                              </div>
                              <div className="service-content">
                                <h4 className="title"><Link href="/service-details">Customer Experience Solutions</Link></h4>
                                <p className="desc">Developing personalized customer journeys to increase satisfaction and
                                  loyalty
                                  of our expansion to keep competitive.</p>
                                <Link className="text-btn" href="/service-details">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="service-item style-1">
                              <div className="service-img">
                                <Image src="/assets/images/service/service-6.webp" alt="" width={400} height={300} />
                              </div>
                              <div className="service-icon">
                                <i className="tji-service-3"></i>
                              </div>
                              <div className="service-content">
                                <h4 className="title"><Link href="/service-details">Sustainability and ESG Consulting</Link></h4>
                                <p className="desc">Provide tailored strategies that not only drive long-term value but also
                                  build
                                  trust with stakeholders, investors.</p>
                                <Link className="text-btn" href="/service-details">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="service-item style-1">
                              <div className="service-img">
                                <Image src="/assets/images/service/service-7.webp" alt="" width={400} height={300} />
                              </div>
                              <div className="service-icon">
                                <i className="tji-service-4"></i>
                              </div>
                              <div className="service-content">
                                <h4 className="title"><Link href="/service-details">Training and Development Programs</Link></h4>
                                <p className="desc">Training and Development Programs are designed to empower employees with the
                                  skills, knowledge, and tools they need.</p>
                                <Link className="text-btn" href="/service-details">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-pagination-area white-pagination"></div>
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
            {/* end: Service Section */}

            {/* start: Project Section */}
            <section className="tj-project-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="tji-box"></i>Proud Projects
                      </span>
                      <div className="heading-wrap-content">
                        <div className="sec-heading">
                          <h2 className="sec-title title-anim">Breaking Boundaries, Building <span>Dreams.</span></h2>
                        </div>
                        <p className="desc wow fadeInUp" data-wow-delay=".5s">We work closely with our clients to understand
                          their
                          unique needs and craft tailored
                          solutions that address challenges.</p>
                        <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                          <Link className="tj-primary-btn" href="/portfolio">
                            <span className="btn-text"><span>More Projects</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="project-area tj-arrange-container">
                      <div className="project-item tj-arrange-item">
                        <div className="project-img" style={{backgroundImage: "url('/assets/images/project/project-1.webp')"}}></div>
                        <div className="project-content">
                          <span className="categories"><Link href="/portfolio-details">Connect</Link></span>
                          <div className="project-text">
                            <h4 className="title"><Link href="/portfolio-details">Event Management Platform</Link></h4>
                            <Link className="project-btn" href="/portfolio-details">
                              <i className="tji-arrow-right-long"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="project-item tj-arrange-item">
                        <div className="project-img" style={{backgroundImage: "url('/assets/images/project/project-2.webp')"}}></div>
                        <div className="project-content">
                          <span className="categories"><Link href="/portfolio-details">Empower</Link></span>
                          <div className="project-text">
                            <h4 className="title"><Link href="/portfolio-details">Digital Marketing Campaign</Link></h4>
                            <Link className="project-btn" href="/portfolio-details">
                              <i className="tji-arrow-right-long"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="project-item tj-arrange-item">
                        <div className="project-img" style={{backgroundImage: "url('/assets/images/project/project-3.webp')"}}></div>
                        <div className="project-content">
                          <span className="categories"><Link href="/portfolio-details">Support</Link></span>
                          <div className="project-text">
                            <h4 className="title"><Link href="/portfolio-details">Interactive Learning Platform</Link></h4>
                            <Link className="project-btn" href="/portfolio-details">
                              <i className="tji-arrow-right-long"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="project-item tj-arrange-item">
                        <div className="project-img" style={{backgroundImage: "url('/assets/images/project/project-4.webp')"}}></div>
                        <div className="project-content">
                          <span className="categories"><Link href="/portfolio-details">Business</Link></span>
                          <div className="project-text">
                            <h4 className="title"><Link href="/portfolio-details">Environmental Impact Dashboard</Link></h4>
                            <Link className="project-btn" href="/portfolio-details">
                              <i className="tji-arrow-right-long"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Project Section */}

            {/* start: Countup Section */}
            <div className="tj-countup-section">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="countup-wrap">
                      <div className="countup-item">
                        <div className="inline-content">
                          <span className="odometer countup-number" data-count="93"></span>
                          <span className="count-plus">%</span>
                        </div>
                        <span className="count-text">Projects Completed.</span>
                        <span className="count-separator" style={{backgroundImage: "url('/assets/images/shape/separator.svg')"}}></span>
                      </div>
                      <div className="countup-item">
                        <div className="inline-content">
                          <span className="odometer countup-number" data-count="20"></span>
                          <span className="count-plus">M</span>
                        </div>
                        <span className="count-text">Reach Worldwide</span>
                        <span className="count-separator" style={{backgroundImage: "url('/assets/images/shape/separator.svg')"}}></span>
                      </div>
                      <div className="countup-item">
                        <div className="inline-content">
                          <span className="odometer countup-number" data-count="8.5"></span>
                          <span className="count-plus">X</span>
                        </div>
                        <span className="count-text">Faster Growth</span>
                        <span className="count-separator" style={{backgroundImage: "url('/assets/images/shape/separator.svg')"}}></span>
                      </div>
                      <div className="countup-item">
                        <div className="inline-content">
                          <span className="odometer countup-number" data-count="100"></span>
                          <span className="count-plus">+</span>
                        </div>
                        <span className="count-text">Awards Archived</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end: Countup Section */}

            {/* start: Testimonial Section */}
            <section className="tj-testimonial-section section-gap section-gap-x">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-12">
                    <div className="sec-heading-wrap">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="tji-box"></i>Clients Feedback
                      </span>
                      <div className="heading-wrap-content">
                        <div className="sec-heading">
                          <h2 className="sec-title title-anim">Success <span>Stories</span> Fuel our Innovation.</h2>
                        </div>
                        <div className="slider-navigation d-inline-flex wow fadeInUp" data-wow-delay=".4s">
                          <div className="slider-prev">
                            <span className="anim-icon">
                              <i className="tji-arrow-left"></i>
                              <i className="tji-arrow-left"></i>
                            </span>
                          </div>
                          <div className="slider-next">
                            <span className="anim-icon">
                              <i className="tji-arrow-right"></i>
                              <i className="tji-arrow-right"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="testimonial-wrapper wow fadeInUp" data-wow-delay=".5s">
                      <div className="swiper swiper-container testimonial-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <span className="quote-icon"><i className="tji-quote"></i></span>
                              <div className="desc">
                                <p>Working with Bexon has been a game-changer for our business. Their team's
                                  professionalism,
                                  attention to detail, and innovative solutions have helped us streamline operations and
                                  achieve
                                  our goals faster than we imagined. We truly feel like a valued partner.</p>
                              </div>
                              <div className="testimonial-author">
                                <div className="author-inner">
                                  <div className="author-img">
                                    <Image src="/assets/images/testimonial/client-1.webp" alt="" width={60} height={60} />
                                  </div>
                                  <div className="author-header">
                                    <h4 className="title">Guy Hawkins</h4>
                                    <span className="designation">Co. Founder</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <span className="quote-icon"><i className="tji-quote"></i></span>
                              <div className="desc">
                                <p>The results we've seen after partnering with Bexon are beyond our expectations. They not
                                  only
                                  understood our vision but also brought new ideas to the table that have taken our business
                                  to
                                  the next level. Their expertise and commitment to success make them a trusted.
                                </p>
                              </div>
                              <div className="testimonial-author">
                                <div className="author-inner">
                                  <div className="author-img">
                                    <Image src="/assets/images/testimonial/client-2.webp" alt="" width={60} height={60} />
                                  </div>
                                  <div className="author-header">
                                    <h4 className="title">Ralph Edwards</h4>
                                    <span className="designation">Co. Founder</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <span className="quote-icon"><i className="tji-quote"></i></span>
                              <div className="desc">
                                <p>We've been working with Bexonfor years, and they continue to deliver outstanding results.
                                  Their team is proactive, responsive, and always goes the extra mile to ensure our needs
                                  are
                                  met. They've become a key contributor to our growth and success that really help us"
                                </p>
                              </div>
                              <div className="testimonial-author">
                                <div className="author-inner">
                                  <div className="author-img">
                                    <Image src="/assets/images/testimonial/client-3.webp" alt="" width={60} height={60} />
                                  </div>
                                  <div className="author-header">
                                    <h4 className="title">Esther Howard</h4>
                                    <span className="designation">Co. Founder</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Testimonial Section */}

            {/* start: Contact Section */}
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
            {/* end: Contact Section */}

            {/* start: Blog Section */}
            <section className="tj-blog-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="tji-box"></i>Insights & Ideas
                      </span>
                      <h2 className="sec-title title-anim">The Ultimate <span>Resource.</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4">
                  <div className="col-xl-4 col-md-6">
                    <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                      <div className="blog-thumb">
                        <Link href="/blog-details">
                          <Image src="/assets/images/blog/blog-1.webp" alt="" width={400} height={250} />
                        </Link>
                        <div className="blog-date">
                          <span className="date">28</span>
                          <span className="month">Feb</span>
                        </div>
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <span className="categories"><Link href="/blog-details">Business</Link></span>
                          <span>By <Link href="/blog-details">Ellinien Loma</Link></span>
                        </div>
                        <h4 className="title"><Link href="/blog-details">Innovative Solutions for every Business Success.</Link>
                        </h4>
                        <Link className="text-btn" href="/blog-details">
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                      <div className="blog-thumb">
                        <Link href="/blog-details">
                          <Image src="/assets/images/blog/blog-2.webp" alt="" width={400} height={250} />
                        </Link>
                        <div className="blog-date">
                          <span className="date">28</span>
                          <span className="month">Feb</span>
                        </div>
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <span className="categories"><Link href="/blog-details">Business</Link></span>
                          <span>By <Link href="/blog-details">Ellinien Loma</Link></span>
                        </div>
                        <h4 className="title"><Link href="/blog-details">Harnessing Digital Transform a Roadmap Businesses.</Link>
                        </h4>
                        <Link className="text-btn" href="/blog-details">
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                      <div className="blog-thumb">
                        <Link href="/blog-details">
                          <Image src="/assets/images/blog/blog-3.webp" alt="" width={400} height={250} />
                        </Link>
                        <div className="blog-date">
                          <span className="date">28</span>
                          <span className="month">Feb</span>
                        </div>
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <span className="categories"><Link href="/blog-details">Business</Link></span>
                          <span>By <Link href="/blog-details">Ellinien Loma</Link></span>
                        </div>
                        <h4 className="title"><Link href="/blog-details">Mastering Change Management Lessons for
                            Businesses.</Link>
                        </h4>
                        <Link className="text-btn" href="/blog-details">
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Blog Section */}

            {/* start: Cta Section */}
            <section className="tj-cta-section">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="cta-area">
                      <div className="cta-content">
                        <h2 className="title title-anim">Let's Build Future Together.</h2>
                        <div className="cta-btn wow fadeInUp" data-wow-delay=".6s">
                          <Link className="tj-primary-btn btn-dark" href="/contact">
                            <span className="btn-text"><span>Get Started Now</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                          </Link>
                        </div>
                      </div>
                      <div className="cta-img">
                        <Image src="/assets/images/cta/cta-bg.webp" alt="" width={600} height={400} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Cta Section */}
          </main>

          {/* start: Footer Section */}
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
          {/* end: Footer Section */}
        </div>
      </div>
    </>
  )
}