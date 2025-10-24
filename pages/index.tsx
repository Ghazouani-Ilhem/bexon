import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import BannerSection from '@/components/sections/BannerSection';
import ChooseSection from '@/components/sections/ChooseSection';
import ClientSection from '@/components/sections/ClientSection';
import AboutSection from '@/components/sections/AboutSection';
import ServiceSection from '@/components/sections/ServiceSection';
import ProjectSection from '@/components/sections/ProjectSection';
import CountupSection from '@/components/sections/CountupSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';
import BlogSection from '@/components/sections/BlogSection';
import CtaSection from '@/components/sections/CtaSection';

const IndexPage: React.FC = () => {
  return (
    <Layout 
      title="Bexon - Corporate Business HTML Template"
      description="Driving Excellence Through Evolution and Trust. Empowering Business with Expertise."
      keywords="corporate, business, consulting, services, excellence, evolution, trust"
    >
      <Head>
        <link rel="stylesheet" href="/assets/css/main.css" />
      </Head>
      
      <BannerSection />
      <ChooseSection />
      <ClientSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <CountupSection />
      <TestimonialSection />
      <FaqSection />
      <ContactSection />
      <BlogSection />
      <CtaSection />
    </Layout>
  );
};

export default IndexPage;