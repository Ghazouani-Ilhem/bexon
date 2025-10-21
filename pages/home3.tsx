import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ChooseSection from '@/components/sections/ChooseSection';
import AboutSection from '@/components/sections/AboutSection';
import ClientSection from '@/components/sections/ClientSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import TeamSection from '@/components/sections/TeamSection';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';

const Home3Page: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <ChooseSection />
      <AboutSection />
      <ClientSection />
      <TestimonialSection />
      <TeamSection />
      <FaqSection />
      <CtaSection />
    </Layout>
  );
};

export default Home3Page;
