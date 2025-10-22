import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ChooseSection from '@/components/sections/ChooseSection';
import AboutSection from '@/components/sections/AboutSection';
import ClientSection from '@/components/sections/ClientSection';
import ServiceGrid from '@/components/sections/ServiceGrid';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import TestimonialSection from '@/components/sections/TestimonialSection';
import TeamSection from '@/components/sections/TeamSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';
import BlogGrid from '@/components/sections/BlogGrid';
import CountupSection from '@/components/sections/CountupSection';
import CtaSection from '@/components/sections/CtaSection';

const HomePage: React.FC = () => {
  return (
    <Layout 
      title="Bexon - Corporate Business Template"
      description="Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion recognized by industry leaders."
    >
      <div className="space-for-header"></div>
      <HeroSection />
      <ChooseSection />
      <AboutSection />
      <ClientSection />
      <ServiceGrid />
      <PortfolioGrid />
      <CountupSection />
      <TestimonialSection />
      <TeamSection />
      <FaqSection />
      <ContactForm />
      <ContactInfo />
      <BlogGrid />
      <CtaSection />
    </Layout>
  );
};

export default HomePage;
