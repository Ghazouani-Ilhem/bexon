import React from 'react';
import Link from 'next/link';

const services = [
  { img: 'service-1.webp', icon: 'tji-service-1', title: 'Business Strategy Development' },
  { img: 'service-5.webp', icon: 'tji-service-2', title: 'Customer Experience Solutions' },
  { img: 'service-6.webp', icon: 'tji-service-3', title: 'Sustainability and ESG Consulting' },
  { img: 'service-7.webp', icon: 'tji-service-4', title: 'Training and Development Programs' },
];

const ServiceCarousel: React.FC = () => {
  return (
    <section className="tj-service-section overflow-hidden section-gap section-gap-x">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title text-white wow fadeInUp" data-wow-delay=".3s"><i className="tji-box"></i>Our Solutions</span>
              <h2 className="sec-title text-white title-anim">Solutions to Transform Your <span>Business.</span></h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <div className="service-wrapper wow fadeInUp" data-wow-delay=".4s">
              <div className="swiper service-slider">
                <div className="swiper-wrapper">
                  {services.map((s, idx) => (
                    <div className="swiper-slide" key={idx}>
                      <div className="service-item style-1">
                        <div className="service-img">
                          <img src={`/assets/images/service/${s.img}`} alt="" />
                        </div>
                        <div className="service-icon">
                          <i className={s.icon}></i>
                        </div>
                        <div className="service-content">
                          <h4 className="title"><Link href="/service-details">{s.title}</Link></h4>
                          <p className="desc">Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.</p>
                          <Link className="text-btn" href="/service-details">
                            <span className="btn-text"><span>Learn More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination-area white-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape-1">
        <img src="/assets/images/shape/pattern-2.svg" alt="" />
      </div>
      <div className="bg-shape-2">
        <img src="/assets/images/shape/pattern-3.svg" alt="" />
      </div>
    </section>
  );
};

export default ServiceCarousel;
