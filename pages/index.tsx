import React from 'react';
import Layout from '@/components/Layout';
import HomeBanner from '@/components/sections/HomeBanner';
import ChooseSection from '@/components/sections/ChooseSection';
import ClientStrip from '@/components/sections/ClientStrip';
import ServiceCarousel from '@/components/sections/ServiceCarousel';
import BlogSection from '@/components/sections/BlogSection';
import CTASection from '@/components/sections/CTASection';

const HomePage: React.FC = () => {
  return (
    <Layout title="Bexon - Corporate Business" description="Driving Excellence Through Evolution and Trust.">
      <HomeBanner />
      <ChooseSection />
      <ClientStrip />
      <ServiceCarousel />
      <BlogSection />
      <CTASection />
    </Layout>
  );
};

export default HomePage;
