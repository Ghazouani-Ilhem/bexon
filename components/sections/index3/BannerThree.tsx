import React from 'react';
import Link from 'next/link';

const BannerThree: React.FC = () => {
  return (
    <section className="tj-banner-section-2 section-gap-x">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content-2">
              <span className="sub-title wow fadeInDown" data-wow-delay=".2s"><i className="tji-excellence"></i> Recognized for Excellence</span>
              <h1 className="banner-title title-anim">Driving Excellence Through <span>Evolution</span></h1>
              <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                <p className="banner-desc">Represents growth, expansion, and modern business solution present growth, expansion.</p>
                <Link className="tj-primary-btn" href="/contact">
                  <span className="btn-text"><span>Get Started</span></span>
                  <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-img-area wow fadeInUp" data-wow-delay=".3s">
              <div className="banner-img">
                <img src="/assets/images/hero/hero-img-2.webp" alt="" />
              </div>
              <div className="box-area">
                <div className="growth-box wow fadeInUp" data-wow-delay="1.0s">
                  <img src="/assets/images/hero/growth.webp" alt="" />
                </div>
                <div className="banner-author">
                  <div className="author-img">
                    <img src="/assets/images/testimonial/client-1.webp" alt="" />
                  </div>
                  <div className="author-content">
                    <h6 className="title">Esther Howard</h6>
                    <span className="designation">Co.Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-scroll wow fadeInDown" data-wow-delay="2.0s">
        <a href="#choose" className="scroll-down">
          <span><i className="tji-arrow-down-long"></i></span>
          Scroll Down
        </a>
      </div>
    </section>
  );
};

export default BannerThree;
