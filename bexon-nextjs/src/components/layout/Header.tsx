'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <>
      {/* Main Header */}
      <header className="header-area header-1 section-gap-x">
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
                    <ul>
                      <li className="has-dropdown">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/about">Pages</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/service">Services</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/portfolio">Portfolio</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li><Link href="/contact">Contact</Link></li>
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
