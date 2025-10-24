import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import BannerSection from '@/components/sections/BannerSection';
import ClientSection from '@/components/sections/ClientSection';
import ChooseSection from '@/components/sections/ChooseSection';
import AboutSection from '@/components/sections/AboutSection';
import ServiceSection from '@/components/sections/ServiceSection';
import ProjectSection from '@/components/sections/ProjectSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import TeamSection from '@/components/sections/TeamSection';
import BlogSection from '@/components/sections/BlogSection';
import FaqSection from '@/components/sections/FaqSection';

const Index3Page: React.FC = () => {
  return (
    <Layout 
      title="Bexon - Corporate Business Template"
      description="Driving Excellence Through Evolution & Trust. Empowering Business with Expertise."
      keywords="corporate, business, consulting, services, excellence, evolution, trust"
    >
      <Head>
        <link rel="stylesheet" href="/assets/css/main.css" />
      </Head>
      
      <BannerSection />
      <ClientSection />
      <ChooseSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <TestimonialSection />
      <MarqueeSection />
      <TeamSection />
      <BlogSection />
      <FaqSection />
    </Layout>
  );
};

export default Index3Page;