import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuItem } from '@/types';
import OffcanvasMenu from './OffcanvasMenu';
import SearchPopup from './SearchPopup';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  const homeMenuItems = [
    { title: 'Homepage - 01', href: '/', image: '/assets/images/header/demo/home-1.webp' },
    { title: 'Homepage - 02', href: '/home2', image: '/assets/images/header/demo/home-2.webp' },
    { title: 'Homepage - 03', href: '/home3', image: '/assets/images/header/demo/home-3.webp' },
    { title: 'Homepage - 04', href: '/home4', image: '/assets/images/header/demo/home-4.webp' },
    { title: 'Homepage - 05', href: '/home5', image: '/assets/images/header/demo/home-5.webp' },
    { title: 'Homepage - 06', href: '/home6', image: '/assets/images/header/demo/home-6.webp' },
    { title: 'Homepage - 07', href: '/home7', image: '/assets/images/header/demo/home-7.webp' },
    { title: 'Homepage - 08', href: '/home8', image: '/assets/images/header/demo/home-8.webp', badge: 'New' },
    { title: 'Homepage - 09', href: '/home9', image: '/assets/images/header/demo/home-9.webp', badge: 'New' },
    { title: 'Homepage - 10', href: '/home10', image: '/assets/images/header/demo/home-10.webp', badge: 'New' },
  ];

  const pagesMenuItems = {
    mainPages: [
      { title: 'About us', href: '/about' },
      { title: 'Our history', href: '/history', badge: 'HOT' },
      { title: 'Team', href: '/team' },
      { title: 'Team details', href: '/team-details' },
      { title: 'Careers', href: '/careers', badge: 'NEW' },
      { title: 'Careers details', href: '/careers-details' },
      { title: 'Pricing plan', href: '/pricing' },
      { title: 'Feedbacks', href: '/about#feedbacks' },
      { title: 'Faq', href: '/faq' },
      { title: 'Contact', href: '/contact' },
    ],
    otherPages: [
      { title: 'Services', href: '/service' },
      { title: 'Service details', href: '/service-details' },
      { title: 'Portfolio', href: '/portfolio' },
      { title: 'Portfolio details', href: '/portfolio-details' },
      { title: 'Error 404', href: '/404' },
      { title: 'Blog grid', href: '/blog-grid', badge: 'NEW' },
      { title: 'Blog standard', href: '/blog' },
      { title: 'Blog details', href: '/blog-details' },
      { title: 'Term & conditions', href: '/terms-and-conditions' },
      { title: 'Recognition', href: '/about#recognition', badge: 'NEW' },
    ],
    shopPages: [
      { title: 'Shop', href: '/shop', badge: 'HOT' },
      { title: 'Shop details', href: '/shop-details' },
      { title: 'Cart', href: '/cart' },
      { title: 'Checkout', href: '/checkout' },
      { title: 'Wishlist', href: '/wishlist', badge: 'NEW' },
      { title: 'Login', href: '/login' },
      { title: 'Tracking', href: '/tracking' },
      { title: 'Order confirm', href: '/order-confirm' },
      { title: 'Registration', href: '/login' },
      { title: 'Coming soon', href: '/coming-soon' },
    ]
  };

  const serviceMenuItems = [
    { title: 'Business Strategy Development', href: '/service-details', icon: 'tji-service-1' },
    { title: 'Customer Experience Solutions', href: '/service-details', icon: 'tji-service-2' },
    { title: 'Sustainability and ESG Consulting', href: '/service-details', icon: 'tji-service-3' },
    { title: 'Training and Development Programs', href: '/service-details', icon: 'tji-service-4' },
    { title: 'IT Support & Maintenance', href: '/service-details', icon: 'tji-service-5' },
    { title: 'Marketing Strategy & Campaigns', href: '/service-details', icon: 'tji-service-6' },
  ];

  const menuItems: MenuItem[] = [
    {
      title: 'Home',
      href: '/',
      children: homeMenuItems
    },
    {
      title: 'Pages',
      href: '/about',
      children: pagesMenuItems
    },
    {
      title: 'Services',
      href: '/service',
      children: serviceMenuItems
    },
    {
      title: 'Portfolio',
      href: '/portfolio',
      children: [
        { title: 'Portfolio', href: '/portfolio' },
        { title: 'Portfolio Details', href: '/portfolio-details' },
      ]
    },
    {
      title: 'Blog',
      href: '/blog',
      children: [
        { title: 'Blog', href: '/blog' },
        { title: 'Blog Grid', href: '/blog-grid' },
        { title: 'Blog Right Sidebar', href: '/blog-right-sidebar' },
        { title: 'Blog Details', href: '/blog-details' },
      ]
    },
    {
      title: 'Contact',
      href: '/contact'
    }
  ];

  return (
    <>
      <OffcanvasMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <SearchPopup isOpen={isSearchOpen} onClose={handleSearchClose} />
      
      {/* Desktop Header */}
      <header className="header-area header-1 header-absolute section-gap-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* Site Logo */}
                <div className="site_logo">
                  <Link href="/" className="logo">
                    <Image 
                      src="/assets/images/logos/logo.webp" 
                      alt="Bexon Logo" 
                      width={120}
                      height={40}
                      priority
                    />
                  </Link>
                </div>

                {/* Navigation */}
                <div className="menu-area d-none d-lg-inline-flex align-items-center">
                  <nav id="mobile-menu" className="mainmenu">
                    <ul>
                      {menuItems.map((item, index) => (
                        <li key={index} className={item.children ? 'has-dropdown' : ''}>
                          <Link href={item.href}>{item.title}</Link>
                          {item.children && (
                            <ul className={`sub-menu ${index === 0 ? 'header__mega-menu mega-menu' : index === 1 ? 'header__mega-menu mega-menu mega-menu-pages' : index === 2 ? 'mega-menu-service' : ''}`}>
                              <li>
                                {index === 0 ? (
                                  // Home mega menu
                                  <div className="mega-menu-wrapper">
                                    <div className="container-fluid gap-60-25">
                                      <div className="row">
                                        {homeMenuItems.map((child, childIndex) => (
                                          <div key={childIndex} className="col-xl-3 col-lg-3 col-12">
                                            <div className="tj-demo-thumb">
                                              <div className="image">
                                                <Image 
                                                  src={child.image} 
                                                  alt={child.title}
                                                  width={200}
                                                  height={150}
                                                />
                                                {child.badge && (
                                                  <h6 className="tj-demo-badge tj-zoom-in-out-anim">
                                                    {child.badge}
                                                  </h6>
                                                )}
                                                <div className="tj-demo-button">
                                                  <Link href={child.href} className="tj-primary-btn header_btn">
                                                    <span className="btn-text">
                                                      <span>View demo</span>
                                                    </span>
                                                    <span className="btn-icon">
                                                      <i className="tji-arrow-right-long"></i>
                                                    </span>
                                                  </Link>
                                                </div>
                                              </div>
                                              <h6 className="tj-demo-title">
                                                <Link href={child.href}>{child.title}</Link>
                                              </h6>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                ) : index === 1 ? (
                                  // Pages mega menu
                                  <div className="mega-menu-wrapper">
                                    <div className="mega-menu-pages-single">
                                      <div className="mega-menu-pages-single-inner">
                                        <h6 className="mega-menu-title">Main Pages</h6>
                                        <div className="mega-menu-list">
                                          {pagesMenuItems.mainPages.map((page, pageIndex) => (
                                            <Link key={pageIndex} href={page.href}>
                                              {page.title}
                                              {page.badge && (
                                                <span className={`mega-menu-badge tj-zoom-in-out-anim ${page.badge === 'HOT' ? 'mega-menu-badge-hot' : ''}`}>
                                                  {page.badge}
                                                </span>
                                              )}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mega-menu-pages-single">
                                      <div className="mega-menu-pages-single-inner">
                                        <h6 className="mega-menu-title">Other Pages</h6>
                                        <div className="mega-menu-list">
                                          {pagesMenuItems.otherPages.map((page, pageIndex) => (
                                            <Link key={pageIndex} href={page.href}>
                                              {page.title}
                                              {page.badge && (
                                                <span className="mega-menu-badge tj-zoom-in-out-anim">
                                                  {page.badge}
                                                </span>
                                              )}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mega-menu-pages-single">
                                      <div className="mega-menu-pages-single-inner">
                                        <h6 className="mega-menu-title">Shop Pages</h6>
                                        <div className="mega-menu-list">
                                          {pagesMenuItems.shopPages.map((page, pageIndex) => (
                                            <Link key={pageIndex} href={page.href}>
                                              {page.title}
                                              {page.badge && (
                                                <span className={`mega-menu-badge tj-zoom-in-out-anim ${page.badge === 'HOT' ? 'mega-menu-badge-hot' : ''}`}>
                                                  {page.badge}
                                                </span>
                                              )}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-12 col-lg-3 mega-menu-pages-single">
                                      <div className="mega-menu-pages-single-inner">
                                        <div className="feature-box">
                                          <div className="feature-content">
                                            <h2 className="title">Modern</h2>
                                            <span>Home Makeover</span>
                                            <Link className="read-more feature-contact" href="tel:8321890640">
                                              <i className="tji-phone-3"></i>
                                              <span>+8 (321) 890-640</span>
                                            </Link>
                                          </div>
                                          <div className="feature-images">
                                            <Image src="/assets/images/service/service-ad.webp" alt="Service" width={200} height={150} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : index === 2 ? (
                                  // Services mega menu
                                  <div>
                                    {serviceMenuItems.map((service, serviceIndex) => (
                                      <Link key={serviceIndex} className="mega-menu-service-single" href={service.href}>
                                        <span className="mega-menu-service-icon">
                                          <i className={service.icon}></i>
                                        </span>
                                        <span className="mega-menu-service-title">{service.title}</span>
                                        <span className="mega-menu-service-nav">
                                          <i className="tji-arrow-right-long"></i>
                                          <i className="tji-arrow-right-long"></i>
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                ) : (
                                  // Regular dropdown menus
                                  <div>
                                    {item.children.map((child, childIndex) => (
                                      <li key={childIndex}>
                                        <Link href={child.href}>{child.title}</Link>
                                      </li>
                                    ))}
                                  </div>
                                )}
                              </li>
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Header Right Items */}
                <div className="header-right-item d-none d-lg-inline-flex">
                  <div className="header-search">
                    <button 
                      className="search"
                      onClick={() => setIsSearchOpen(true)}
                    >
                      <i className="tji-search"></i>
                    </button>
                    <button 
                      type="button" 
                      className="search_close_btn"
                      onClick={handleSearchClose}
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  <div className="header-button">
                    <Link href="/contact" className="tj-primary-btn">
                      <span className="btn-text">
                        <span>Let&apos;s Talk</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long"></i>
                      </span>
                    </Link>
                  </div>
                  <div 
                    className="menu_bar menu_offcanvas d-none d-lg-inline-flex"
                    onClick={() => setIsMenuOpen(true)}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                {/* Mobile Menu Bar */}
                <div 
                  className="menu_bar mobile_menu_bar d-lg-none"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Header */}
      <header className="header-area header-1 header-duplicate header-sticky section-gap-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* Site Logo */}
                <div className="site_logo">
                  <Link href="/" className="logo">
                    <Image 
                      src="/assets/images/logos/logo.webp" 
                      alt="Bexon Logo" 
                      width={120}
                      height={40}
                      priority
                    />
                  </Link>
                </div>

                {/* Navigation */}
                <div className="menu-area d-none d-lg-inline-flex align-items-center">
                  <nav className="mainmenu">
                    <ul>
                      {menuItems.map((item, index) => (
                        <li key={index} className={item.children ? 'has-dropdown' : ''}>
                          <Link href={item.href}>{item.title}</Link>
                          {item.children && (
                            <ul className={`sub-menu ${index === 0 ? 'header__mega-menu mega-menu' : index === 1 ? 'header__mega-menu mega-menu mega-menu-pages' : index === 2 ? 'mega-menu-service' : ''}`}>
                              <li>
                                {index === 0 ? (
                                  // Home mega menu
                                  <div className="mega-menu-wrapper">
                                    <div className="container-fluid gap-60-25">
                                      <div className="row">
                                        {homeMenuItems.map((child, childIndex) => (
                                          <div key={childIndex} className="col-xl-3 col-lg-3 col-12">
                                            <div className="tj-demo-thumb">
                                              <div className="image">
                                                <Image 
                                                  src={child.image} 
                                                  alt={child.title}
                                                  width={200}
                                                  height={150}
                                                />
                                                {child.badge && (
                                                  <h6 className="tj-demo-badge tj-zoom-in-out-anim">
                                                    {child.badge}
                                                  </h6>
                                                )}
                                                <div className="tj-demo-button">
                                                  <Link href={child.href} className="tj-primary-btn header_btn">
                                                    <span className="btn-text">
                                                      <span>View demo</span>
                                                    </span>
                                                    <span className="btn-icon">
                                                      <i className="tji-arrow-right-long"></i>
                                                    </span>
                                                  </Link>
                                                </div>
                                              </div>
                                              <h6 className="tj-demo-title">
                                                <Link href={child.href}>{child.title}</Link>
                                              </h6>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                ) : index === 1 ? (
                                  // Pages mega menu
                                  <div className="mega-menu-wrapper">
                                    <div className="mega-menu-pages-single">
                                      <div className="mega-menu-pages-single-inner">
                                        <h6 className="mega-menu-title">Main Pages</h6>
                                        <div className="mega-menu-list">
                                          {pagesMenuItems.mainPages.map((page, pageIndex) => (
                                            <Link key={pageIndex} href={page.href}>
                                              {page.title}
                                              {page.badge && (
                                                <span className={`mega-menu-badge tj-zoom-in-out-anim ${page.badge === 'HOT' ? 'mega-menu-badge-hot' : ''}`}>
                                                  {page.badge}
                                                </span>
                                              )}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mega-menu-pages-single">
                                      <div className="mega-menu-pages-single-inner">
                                        <h6 className="mega-menu-title">Other Pages</h6>
                                        <div className="mega-menu-list">
                                          {pagesMenuItems.otherPages.map((page, pageIndex) => (
                                            <Link key={pageIndex} href={page.href}>
                                              {page.title}
                                              {page.badge && (
                                                <span className="mega-menu-badge tj-zoom-in-out-anim">
                                                  {page.badge}
                                                </span>
                                              )}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mega-menu-pages-single">
                                      <div className="mega-menu-pages-single-inner">
                                        <h6 className="mega-menu-title">Shop Pages</h6>
                                        <div className="mega-menu-list">
                                          {pagesMenuItems.shopPages.map((page, pageIndex) => (
                                            <Link key={pageIndex} href={page.href}>
                                              {page.title}
                                              {page.badge && (
                                                <span className={`mega-menu-badge tj-zoom-in-out-anim ${page.badge === 'HOT' ? 'mega-menu-badge-hot' : ''}`}>
                                                  {page.badge}
                                                </span>
                                              )}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-12 col-lg-3 mega-menu-pages-single">
                                      <div className="mega-menu-pages-single-inner">
                                        <div className="feature-box">
                                          <div className="feature-content">
                                            <h2 className="title">Modern</h2>
                                            <span>Home Makeover</span>
                                            <Link className="read-more feature-contact" href="tel:8321890640">
                                              <i className="tji-phone-3"></i>
                                              <span>+8 (321) 890-640</span>
                                            </Link>
                                          </div>
                                          <div className="feature-images">
                                            <Image src="/assets/images/service/service-ad.webp" alt="Service" width={200} height={150} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : index === 2 ? (
                                  // Services mega menu
                                  <div>
                                    {serviceMenuItems.map((service, serviceIndex) => (
                                      <Link key={serviceIndex} className="mega-menu-service-single" href={service.href}>
                                        <span className="mega-menu-service-icon">
                                          <i className={service.icon}></i>
                                        </span>
                                        <span className="mega-menu-service-title">{service.title}</span>
                                        <span className="mega-menu-service-nav">
                                          <i className="tji-arrow-right-long"></i>
                                          <i className="tji-arrow-right-long"></i>
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                ) : (
                                  // Regular dropdown menus
                                  <div>
                                    {item.children.map((child, childIndex) => (
                                      <li key={childIndex}>
                                        <Link href={child.href}>{child.title}</Link>
                                      </li>
                                    ))}
                                  </div>
                                )}
                              </li>
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Header Right Items */}
                <div className="header-right-item d-none d-lg-inline-flex">
                  <div className="header-search">
                    <button 
                      className="search"
                      onClick={() => setIsSearchOpen(true)}
                    >
                      <i className="tji-search"></i>
                    </button>
                    <button 
                      type="button" 
                      className="search_close_btn"
                      onClick={handleSearchClose}
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  <div className="header-button">
                    <Link href="/contact" className="tj-primary-btn">
                      <span className="btn-text">
                        <span>Let&apos;s Talk</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long"></i>
                      </span>
                    </Link>
                  </div>
                  <div 
                    className="menu_bar menu_offcanvas d-none d-lg-inline-flex"
                    onClick={() => setIsMenuOpen(true)}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                {/* Mobile Menu Bar */}
                <div 
                  className="menu_bar mobile_menu_bar d-lg-none"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
