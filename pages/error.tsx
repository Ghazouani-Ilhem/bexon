import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import CtaSection from '@/components/sections/CtaSection';

const ErrorPage: React.FC = () => {
  return (
    <Layout 
      title="Error 404 - Bexon"
      description="Page not found"
    >
      <div className="space-for-header"></div>
      
      {/* Page Header Section */}
      <PageHeader 
        title="Error 404"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Error 404', href: '/error' }
        ]}
        backgroundImage="/assets/images/bg/pheader-bg.webp"
      />

      {/* Error Section */}
      <section className="tj-error-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tj-error-wrap text-center">
                <div className="tj-error-content">
                  <div className="error-img">
                    <img src="/assets/images/404/error.webp" alt="404 Error" />
                  </div>
                  <h2 className="error-title title-anim">Oooop! Page not found</h2>
                  <div className="error-desc">
                    You are here because you entered the address of a page that no longer exists or has been moved to a different address
                  </div>
                  <a className="tj-primary-btn error-btn" href="/">
                    <span className="btn-text"><span>Go to Home Page</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </Layout>
  );
};

export default ErrorPage;