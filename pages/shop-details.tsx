import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import ShopDetails from '@/components/sections/ShopDetails';
import CtaSection from '@/components/sections/CtaSection';

const ShopDetailsPage: React.FC = () => {
  return (
    <Layout 
      title="Shop Details - Bexon Corporate Business"
      description="Learn more about our business consulting services and solutions to find the perfect fit for your organization."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Shop Details"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: 'Shop Details', href: '/shop-details' }
        ]}
      />
      <ShopDetails />
      <CtaSection />
    </Layout>
  );
};

export default ShopDetailsPage;
