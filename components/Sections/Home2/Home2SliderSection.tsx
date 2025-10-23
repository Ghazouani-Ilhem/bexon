import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SliderItem {
  backgroundImage: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

const Home2SliderSection: React.FC = () => {
  const sliderItems: SliderItem[] = [
    {
      backgroundImage: '/assets/images/hero/slider-1.webp',
      title: 'Leading Future for Business.',
      description: 'Committed to delivering innovative solutions that drive success. With a focus on quality.',
      buttonText: 'Get Started',
      buttonLink: '/contact'
    },
    {
      backgroundImage: '/assets/images/hero/slider-2.webp',
      title: 'Leading Future for Business.',
      description: 'Committed to delivering innovative solutions that drive success. With a focus on quality.',
      buttonText: 'Get Started',
      buttonLink: '/contact'
    },
    {
      backgroundImage: '/assets/images/hero/slider-3.webp',
      title: 'Leading Future for Business.',
      description: 'Committed to delivering innovative solutions that drive success. With a focus on quality.',
      buttonText: 'Get Started',
      buttonLink: '/contact'
    }
  ]

  const thumbnails = [
    '/assets/images/hero/slider-thumb-1.webp',
    '/assets/images/hero/slider-thumb-2.webp',
    '/assets/images/hero/slider-thumb-3.webp'
  ]

  return (
    <section className="tj-slider-section">
      <div className="swiper hero-slider">
        <div className="swiper-wrapper">
          {sliderItems.map((item, index) => (
            <div key={index} className="swiper-slide tj-slider-item">
              <div 
                className="slider-bg-image" 
                style={{backgroundImage: `url('${item.backgroundImage}')`}}
              ></div>
              <div className="container">
                <div className="slider-wrapper">
                  <div className="slider-content">
                    <h1 className="slider-title">{item.title}</h1>
                    <div className="slider-desc">{item.description}</div>
                    <div className="slider-btn">
                      <Link className="tj-primary-btn" href={item.buttonLink}>
                        <span className="btn-text"><span>{item.buttonText}</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hero-navigation d-inline-flex wow fadeIn" data-wow-delay="1.5s">
          <div className="slider-prev">
            <span className="anim-icon">
              <i className="tji-arrow-left"></i>
              <i className="tji-arrow-left"></i>
            </span>
          </div>
          <div className="slider-next">
            <span className="anim-icon">
              <i className="tji-arrow-right"></i>
              <i className="tji-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="swiper hero-thumb wow fadeIn" data-wow-delay="2s">
        <div className="swiper-wrapper">
          {thumbnails.map((thumb, index) => (
            <div key={index} className="swiper-slide thumb-item">
              <Image src={thumb} alt="Thumbnail" width={200} height={120} />
            </div>
          ))}
        </div>
      </div>
      <div className="circle-text-wrap wow fadeInUp" data-wow-delay="1s">
        <span 
          className="circle-text" 
          style={{backgroundImage: "url('/assets/images/hero/circle-text.webp')"}}
        ></span>
        <Link className="circle-icon" href="/service">
          <i className="tji-arrow-down-big"></i>
        </Link>
      </div>
    </section>
  )
}

export default Home2SliderSection