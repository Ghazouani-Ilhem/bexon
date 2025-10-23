import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="header-area header-1 header-absolute section-gap-x">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="header-wrapper">
              {/* site logo */}
              <div className="site_logo">
                <Link className="logo" href="/">
                  <img src="/assets/images/logos/logo.webp" alt="Bexon" />
                </Link>
              </div>

              {/* navigation */}
              <div className="menu-area d-none d-lg-inline-flex align-items-center">
                <nav id="mobile-menu" className="mainmenu">
                  <ul>
                    <li className="has-dropdown current-menu-ancestor">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/service">Services</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* right area */}
              <div className="header-right">
                <div className="header-search">
                  <button className="search" aria-label="Open search">
                    <i className="tji-search" />
                  </button>
                </div>
                <button className="menu_offcanvas mobile_menu_bar" aria-label="Open menu">
                  <span className="bar" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-for-header" />
    </header>
  );
};

export default Header;
