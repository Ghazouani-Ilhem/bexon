import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Header />
        <main id="primary" className="site-main">
          <div className="space-for-header"></div>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
