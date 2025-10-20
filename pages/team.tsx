import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import TeamSection from '@/components/sections/TeamSection';
import CtaSection from '@/components/sections/CtaSection';

const TeamPage: React.FC = () => {
  return (
    <Layout 
      title="Our Team - Bexon Corporate Business"
      description="Meet our experienced team of business consultants and experts who are dedicated to helping your business succeed."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Our Team"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Team', href: '/team' }
        ]}
      />
      <TeamSection />
      <CtaSection />
    </Layout>
  );
};

export default TeamPage;
