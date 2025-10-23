import React from 'react';
import LayoutThree from '@/components/LayoutThree';
import BannerThree from '@/components/sections/index3/BannerThree';
import ChooseSection from '@/components/sections/ChooseSection';
import ServiceThree from '@/components/sections/index3/ServiceThree';
import BlogThree from '@/components/sections/index3/BlogThree';

const IndexThreePage: React.FC = () => {
  return (
    <LayoutThree title="Bexon - Homepage 03">
      <BannerThree />
      <div className="tj-client-section-2 section-gap-x wow fadeInUp" data-wow-delay=".4s">
        {/* Leaving this strip minimal; slider initialized by global JS if present */}
      </div>
      <ChooseSection />
      {/* About section 2 could be added similarly if needed */}
      <ServiceThree />
      {/* ProjectThree, TestimonialThree, TeamTwo, FaqTwo can be added as needed */}
      <BlogThree />
    </LayoutThree>
  );
};

export default IndexThreePage;
