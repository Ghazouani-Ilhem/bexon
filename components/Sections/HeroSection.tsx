import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection: React.FC = () => {
  return (
    <section className="tj-banner-section section-gap-x">
      <div className="banner-area">
        <div className="banner-left-box">
          <div className="banner-content">
            <span className="sub-title wow fadeInDown" data-wow-delay=".2s">
              <i className="tji-excellence"></i> Recognized for Excellence
            </span>
            <h1 className="banner-title title-anim">Driving Excellence Through Evolution and
              <span>Trust.</span>
            </h1>
            <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
              <Link className="banner-link" href="/about">
                <span><i className="tji-arrow-right-big"></i></span>
              </Link>
              <div className="banner-desc">Represents growth, expansion, and modern
                business solution present growth, expansion.
              </div>
            </div>
          </div>
          <div className="banner-shape">
            <Image src="/assets/images/shape/pattern-bg.webp" alt="" width={400} height={300} />
          </div>
        </div>
        <div className="banner-right-box">
          <div className="banner-img">
            <Image data-speed="0.8" src="/assets/images/hero/hero-img.webp" alt="" width={600} height={500} />
          </div>
          <div className="box-area">
            <div className="customers-box">
              <div className="customers">
                <ul>
                  <li className="wow fadeInLeft" data-wow-delay=".5s">
                    <Image src="/assets/images/testimonial/client-1.webp" alt="" width={50} height={50} />
                  </li>
                  <li className="wow fadeInLeft" data-wow-delay=".6s">
                    <Image src="/assets/images/testimonial/client-2.webp" alt="" width={50} height={50} />
                  </li>
                  <li className="wow fadeInLeft" data-wow-delay=".7s">
                    <Image src="/assets/images/testimonial/client-3.webp" alt="" width={50} height={50} />
                  </li>
                  <li className="wow fadeInLeft" data-wow-delay=".8s">
                    <span><i className="tji-plus"></i></span>
                  </li>
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
  )
}

export default HeroSection