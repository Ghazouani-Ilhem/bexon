import React from 'react';
import LayoutThree from '@/components/LayoutThree';
import BannerThree from '@/components/sections/index3/BannerThree';
import ClientStripTwo from '@/components/sections/index3/ClientStripTwo';
import ChooseThree from '@/components/sections/index3/ChooseThree';
import AboutTwo from '@/components/sections/index3/AboutTwo';
import ServiceThree from '@/components/sections/index3/ServiceThree';
import ProjectThree from '@/components/sections/index3/ProjectThree';
import TestimonialThree from '@/components/sections/index3/TestimonialThree';
import Marquee from '@/components/sections/index3/Marquee';
import TeamTwo from '@/components/sections/index3/TeamTwo';
import BlogThree from '@/components/sections/index3/BlogThree';
import FaqTwo from '@/components/sections/index3/FaqTwo';

const IndexThreePage: React.FC = () => {
  return (
    <LayoutThree title="Bexon - Homepage 03">
      <BannerThree />
      <ClientStripTwo />
      <ChooseThree />
      <AboutTwo />
      <ServiceThree />
      <ProjectThree />
      <TestimonialThree />
      <Marquee />
      <TeamTwo />
      <BlogThree />
      <FaqTwo />
    </LayoutThree>
  );
};

export default IndexThreePage;
