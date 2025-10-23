import React from 'react';
import Link from 'next/link';

const HomeBanner: React.FC = () => {
  return (
    <section className="tj-banner-section section-gap-x">
      <div className="banner-area">
        <div className="banner-left-box">
          <div className="banner-content">
            <span className="sub-title wow fadeInDown" data-wow-delay=".2s">
              <i className="tji-excellence"></i> Recognized for Excellence
            </span>
            <h1 className="banner-title title-anim">
              Driving Excellence Through Evolution and <span>Trust.</span>
            </h1>
            <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
              <Link className="banner-link" href="/about">
                <span><i className="tji-arrow-right-big"></i></span>
              </Link>
              <div className="banner-desc">
                Represents growth, expansion, and modern business solution present growth, expansion.
              </div>
            </div>
          </div>
          <div className="banner-shape">
            <img src="/assets/images/shape/pattern-bg.webp" alt="" />
          </div>
        </div>
        <div className="banner-right-box">
          <div className="banner-img">
            <img data-speed="0.8" src="/assets/images/hero/hero-img.webp" alt="Hero" />
          </div>
          <div className="box-area">
            <div className="customers-box">
              <div className="customers">
                <ul>
                  <li className="wow fadeInLeft" data-wow-delay=".5s"><img src="/assets/images/testimonial/client-1.webp" alt="" /></li>
                  <li className="wow fadeInLeft" data-wow-delay=".6s"><img src="/assets/images/testimonial/client-2.webp" alt="" /></li>
                  <li className="wow fadeInLeft" data-wow-delay=".7s"><img src="/assets/images/testimonial/client-3.webp" alt="" /></li>
                  <li className="wow fadeInLeft" data-wow-delay=".8s"><span><i className="tji-plus"></i></span></li>
                </ul>
              </div>
              <div className="customers-number wow fadeInUp" data-wow-delay=".5s">30K</div>
              <h6 className="customers-text wow fadeInUp" data-wow-delay=".5s">Happy customer we have world-wide.</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-scroll wow fadeInDown" data-wow-delay="2s">
        <a href="#choose" className="scroll-down">
          <span><i className="tji-arrow-down-long"></i></span>
          Scroll Down
        </a>
      </div>
    </section>
  );
};

export default HomeBanner;
