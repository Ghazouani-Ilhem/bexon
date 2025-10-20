import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import ShopSection from '@/components/sections/ShopSection';
import CtaSection from '@/components/sections/CtaSection';

const ShopPage: React.FC = () => {
  return (
    <Layout 
      title="Shop - Bexon Corporate Business"
      description="Browse our collection of business consulting services and solutions to find the perfect fit for your organization."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Our Shop"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' }
        ]}
      />
      <ShopSection />
      <CtaSection />
    </Layout>
  );
};

export default ShopPage;
