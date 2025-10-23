import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceItem {
  image: string
  icon: string
  title: string
  description: string
}

const ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      image: '/assets/images/service/service-1.webp',
      icon: 'tji-service-1',
      title: 'Business Strategy Development',
      description: 'Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.'
    },
    {
      image: '/assets/images/service/service-5.webp',
      icon: 'tji-service-2',
      title: 'Customer Experience Solutions',
      description: 'Developing personalized customer journeys to increase satisfaction and loyalty of our expansion to keep competitive.'
    },
    {
      image: '/assets/images/service/service-6.webp',
      icon: 'tji-service-3',
      title: 'Sustainability and ESG Consulting',
      description: 'Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors.'
    },
    {
      image: '/assets/images/service/service-7.webp',
      icon: 'tji-service-4',
      title: 'Training and Development Programs',
      description: 'Training and Development Programs are designed to empower employees with the skills, knowledge, and tools they need.'
    }
  ]

  return (
    <section className="tj-service-section overflow-hidden section-gap section-gap-x">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title text-white wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Our Solutions
              </span>
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
                  {services.map((service, index) => (
                    <div key={index} className="swiper-slide">
                      <div className="service-item style-1">
                        <div className="service-img">
                          <Image src={service.image} alt="" width={400} height={300} />
                        </div>
                        <div className="service-icon">
                          <i className={service.icon}></i>
                        </div>
                        <div className="service-content">
                          <h4 className="title">
                            <Link href="/service-details">{service.title}</Link>
                          </h4>
                          <p className="desc">{service.description}</p>
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
        <Image src="/assets/images/shape/pattern-2.svg" alt="" width={200} height={200} />
      </div>
      <div className="bg-shape-2">
        <Image src="/assets/images/shape/pattern-3.svg" alt="" width={200} height={200} />
      </div>
    </section>
  )
}

export default ServicesSection