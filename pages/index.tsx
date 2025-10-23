import Head from 'next/head'
import Header from '@/components/Layout/Header'
import OffcanvasMenu from '@/components/Layout/OffcanvasMenu'
import Preloader from '@/components/Layout/Preloader'
import BackToTop from '@/components/Layout/BackToTop'
import Footer from '@/components/Layout/Footer'
import SearchPopup from '@/components/Layout/SearchPopup'

// Main sections
import HeroSection from '@/components/Sections/HeroSection'
import ChooseSection from '@/components/Sections/ChooseSection'
import ClientSection from '@/components/Sections/ClientSection'
import AboutSection from '@/components/Sections/AboutSection'
import ServicesSection from '@/components/Sections/ServicesSection'
import CountupSection from '@/components/Sections/CountupSection'
import ProjectsSection from '@/components/Sections/ProjectsSection'
import TestimonialsSection from '@/components/Sections/TestimonialsSection'
import FAQSection from '@/components/Sections/FAQSection'
import CTASection from '@/components/Sections/CTASection'
import BlogSection from '@/components/Sections/BlogSection'
import ContactSection from '@/components/Sections/ContactSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bexon - Corporate Business HTML Template</title>
        <meta name="description" content="Bexon Corporate Business Template - Modern and Professional" />
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
      <OffcanvasMenu />

      {/* Header - Absolute */}
      <Header isSticky={false} />

      {/* Header - Sticky */}
      <Header isSticky={true} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="top-space-15"></div>
            
            {/* Hero Section */}
            <HeroSection />

            {/* Choose Section */}
            <ChooseSection />

            {/* Client Section */}
            <ClientSection />

            {/* About Section */}
            <AboutSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Countup Section */}
            <CountupSection />

            {/* Projects Section */}
            <ProjectsSection />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* FAQ Section */}
            <FAQSection />

            {/* Contact Section */}
            <ContactSection />

            {/* Blog Section */}
            <BlogSection />

            {/* CTA Section */}
            <CTASection />

          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>

      {/* Search Popup */}
      <SearchPopup />
    </>
  )
}