import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import BannerSliderSection from '@/components/sections/BannerSliderSection';
import ClientSection from '@/components/sections/ClientSection';
import AboutSection from '@/components/sections/AboutSection';
import ServiceSection from '@/components/sections/ServiceSection';
import ProjectSection from '@/components/sections/ProjectSection';
import WorkingProcessSection from '@/components/sections/WorkingProcessSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import TeamSection from '@/components/sections/TeamSection';
import PricingSection from '@/components/sections/PricingSection';
import BlogSection from '@/components/sections/BlogSection';

const Index2Page: React.FC = () => {
  return (
    <Layout 
      title="Bexon - Corporate Business HTML Template"
      description="Driving into Excellence & Innovation: Your Trusted Partner for Sustainable Business Success."
      keywords="corporate, business, consulting, services, excellence, innovation, success"
    >
      <Head>
        <link rel="stylesheet" href="/assets/css/main.css" />
      </Head>
      
      <BannerSliderSection />
      <ClientSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <WorkingProcessSection />
      <TestimonialSection />
      <TeamSection />
      <PricingSection />
      <BlogSection />
    </Layout>
  );
};

export default Index2Page;