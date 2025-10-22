import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ChooseSection from '@/components/sections/ChooseSection';
import AboutSection from '@/components/sections/AboutSection';
import ClientSection from '@/components/sections/ClientSection';
import ServiceSection from '@/components/sections/ServiceSection';
import ProjectSection from '@/components/sections/ProjectSection';
import CountupSection from '@/components/sections/CountupSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import TeamSection from '@/components/sections/TeamSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';
import BlogSection from '@/components/sections/BlogSection';
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
      <ServiceSection />
      <ProjectSection />
      <CountupSection />
      <TestimonialSection />
      <TeamSection />
      <FaqSection />
      <ContactSection />
      <BlogSection />
      <CtaSection />
    </Layout>
  );
};

export default HomePage;
