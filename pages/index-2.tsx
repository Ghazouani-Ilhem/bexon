import Head from 'next/head'
import Home2Header from '@/components/Layout/Home2Header'
import Home2OffcanvasMenu from '@/components/Layout/Home2OffcanvasMenu'
import Preloader from '@/components/Layout/Preloader'
import BackToTop from '@/components/Layout/BackToTop'
import Footer from '@/components/Layout/Footer'

// Home2 specific components
import Home2BannerSlider from '@/components/Sections/Home2/Home2BannerSlider'
import Home2ClientSection from '@/components/Sections/Home2/Home2ClientSection'
import Home2AboutSection from '@/components/Sections/Home2/Home2AboutSection'
import Home2ServicesSection from '@/components/Sections/Home2/Home2ServicesSection'
import Home2ProjectsSection from '@/components/Sections/Home2/Home2ProjectsSection'
import Home2ProcessSection from '@/components/Sections/Home2/Home2ProcessSection'
import Home2TestimonialSection from '@/components/Sections/Home2/Home2TestimonialSection'
import Home2TeamSection from '@/components/Sections/Home2/Home2TeamSection'
import Home2PricingSection from '@/components/Sections/Home2/Home2PricingSection'
import Home2BlogSection from '@/components/Sections/Home2/Home2BlogSection'

export default function Home2() {
  return (
    <>
      <Head>
        <title>Bexon - Corporate Business HTML Template - Home 2</title>
        <meta name="description" content="Bexon Corporate Business Template - Homepage 2" />
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

      {/* Search Popup Overlay */}
      <div className="search-popup-overlay"></div>

      {/* Preloader */}
      <Preloader />

      {/* Back to top */}
      <BackToTop />

      {/* Offcanvas Menu */}
      <Home2OffcanvasMenu />

      {/* Header - Absolute */}
      <Home2Header isSticky={false} />

      {/* Header - Sticky */}
      <Home2Header isSticky={true} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="top-space-15"></div>
            
            {/* Home2 Banner Slider */}
            <Home2BannerSlider />

            {/* Home2 Client Section */}
            <Home2ClientSection />

            {/* Home2 About Section */}
            <Home2AboutSection />

            {/* Home2 Services Section */}
            <Home2ServicesSection />

            {/* Home2 Projects Section */}
            <Home2ProjectsSection />

            {/* Home2 Process Section */}
            <Home2ProcessSection />

            {/* Home2 Testimonial Section */}
            <Home2TestimonialSection />

            {/* Home2 Team Section */}
            <Home2TeamSection />

            {/* Home2 Pricing Section */}
            <Home2PricingSection />

            {/* Home2 Blog Section */}
            <Home2BlogSection />

          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  )
}