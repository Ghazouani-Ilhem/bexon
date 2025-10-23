import React from 'react'
import Image from 'next/image'

const Home2ClientSection: React.FC = () => {
  const clientLogos = [
    '/assets/images/brands/brand-1.webp',
    '/assets/images/brands/brand-2.webp',
    '/assets/images/brands/brand-3.webp',
    '/assets/images/brands/brand-4.webp',
    '/assets/images/brands/brand-5.webp',
    '/assets/images/brands/brand-6.webp'
  ]

  return (
    <section className="tj-client-section section-top-gap">
      <div className="container-fluid client-container">
        <div className="row">
          <div className="col-12">
            <div className="client-content style-2 wow fadeIn" data-wow-delay=".3s">
              <h5 className="sec-title">Join Over <span className="client-numbers">1000+</span> Companies with
                <span className="client-text">Bexon</span> Here
              </h5>
            </div>
            <div className="swiper client-slider client-slider-1 wow fadeIn" data-wow-delay=".5s">
              <div className="swiper-wrapper">
                {clientLogos.map((logo, index) => (
                  <div key={index} className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src={logo} alt="" width={150} height={80} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home2ClientSection