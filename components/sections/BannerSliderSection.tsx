import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BannerSliderSection: React.FC = () => {
  const slides = [
    {
      title: "Driving Excellence Through Evolution and Trust",
      subtitle: "Recognized for Excellence",
      description: "Represents growth, expansion, and modern business solution present growth, expansion.",
      image: "/assets/images/hero/hero-img.webp",
      link: "/about"
    },
    {
      title: "Empowering Business with Innovation & Expertise",
      subtitle: "Award-Winning Solutions",
      description: "We stay ahead of the curve, leveraging cutting-edge technologies and strategies.",
      image: "/assets/images/hero/hero-img-2.webp",
      link: "/service"
    },
    {
      title: "Building Sustainable Success Together",
      subtitle: "Trusted Partnership",
      description: "Your trusted partner for sustainable business success and growth.",
      image: "/assets/images/hero/title-img.webp",
      link: "/contact"
    }
  ];

  return (
    <section className="tj-banner-slider-section">
      <div className="swiper banner-slider">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div key={index} className="swiper-slide">
              <div className="banner-slide">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                      <div className="banner-content">
                        <span className="sub-title wow fadeInDown" data-wow-delay=".2s">
                          <i className="tji-excellence"></i> {slide.subtitle}
                        </span>
                        <h1 className="banner-title title-anim">
                          {slide.title}
                        </h1>
                        <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                          <Link className="banner-link" href={slide.link}>
                            <span><i className="tji-arrow-right-big"></i></span>
                          </Link>
                          <div className="banner-desc">
                            {slide.description}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="banner-img">
                        <Image 
                          src={slide.image} 
                          alt="Banner" 
                          width={600}
                          height={600}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner-shape">
                  <Image 
                    src="/assets/images/shape/pattern-bg.webp" 
                    alt="Pattern" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
      <div className="circle-text-wrap wow fadeInUp" data-wow-delay="1s">
        <span className="circle-text"></span>
        <Link className="circle-icon" href="/service">
          <i className="tji-arrow-down-big"></i>
        </Link>
      </div>
    </section>
  );
};

export default BannerSliderSection;