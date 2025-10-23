import React from 'react';
import Head from 'next/head';
import Preloader from './Preloader';
import BackToTop from './BackToTop';
import SearchPopup from './SearchPopup';
import OffcanvasMenu from './OffcanvasMenu';
import Header from './HeaderThree';
import Footer from './FooterThree';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const LayoutThree: React.FC<LayoutProps> = ({
  children,
  title = 'Bexon - Corporate Business Template',
  description = 'Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion recognized by industry leaders.',
  keywords = 'corporate, business, consulting, services',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <div className="body-overlay"></div>

      <Preloader />
      <BackToTop />
      <SearchPopup />
      <OffcanvasMenu />

      <Header />

      <main id="primary" className="site-main">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default LayoutThree;
