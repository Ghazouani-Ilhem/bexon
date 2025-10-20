'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <>
      {/* Main Header */}
      <header className="header-area header-1 section-gap-x" style={{background: 'white', padding: '1rem 0', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* Site Logo */}
                <div className="site_logo">
                  <Link className="logo" href="/">
                    <Image src="/assets/images/logos/logo.webp" alt="Bexon Logo" width={150} height={50} />
                  </Link>
                </div>

                {/* Navigation */}
                <div className="menu-area d-none d-lg-inline-flex align-items-center">
                  <nav id="mobile-menu" className="mainmenu">
                    <ul style={{display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0}}>
                      <li className="has-dropdown">
                        <Link href="/" style={{textDecoration: 'none', color: '#333', fontWeight: '500'}}>Home</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/about" style={{textDecoration: 'none', color: '#333', fontWeight: '500'}}>Pages</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/service" style={{textDecoration: 'none', color: '#333', fontWeight: '500'}}>Services</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/portfolio" style={{textDecoration: 'none', color: '#333', fontWeight: '500'}}>Portfolio</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/blog" style={{textDecoration: 'none', color: '#333', fontWeight: '500'}}>Blog</Link>
                      </li>
                      <li><Link href="/contact" style={{textDecoration: 'none', color: '#333', fontWeight: '500'}}>Contact</Link></li>
                    </ul>
                  </nav>
                </div>

                {/* Header Right Items */}
                <div className="header-right-item d-none d-lg-inline-flex">
                  <div className="header-search">
                    <button className="search" onClick={toggleSearch}>
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="header-button">
                    <Link className="tj-primary-btn" href="/contact">
                      <span className="btn-text">Let's Talk</span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </Link>
                  </div>
                  <div className="menu_bar menu_offcanvas d-none d-lg-inline-flex" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                {/* Mobile Menu Bar */}
                <div className="menu_bar mobile_menu_bar d-lg-none" onClick={toggleMenu}>
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
