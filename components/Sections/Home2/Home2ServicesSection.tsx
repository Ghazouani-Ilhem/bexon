import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceItem {
  icon: string
  title: string
  description: string
  features: string[]
}

const Home2ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: 'tji-service-1',
      title: 'Business Strategy Development',
      description: 'Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.',
      features: ['Expansion Strategies', 'Operational Efficiency', 'Competitive Edge']
    },
    {
      icon: 'tji-service-2',
      title: 'Customer Experience Solutions',
      description: 'Developing personalized customer journeys to increase satisfaction and loyalty of our expansion to keep competitive.',
      features: ['Personalized Customer', 'Seamless Service', 'Proactive Support']
    },
    {
      icon: 'tji-service-3',
      title: 'Sustainability and ESG Consulting',
      description: 'Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors.',
      features: ['Strategy Development', 'Sustainable Business', 'Impactful Reporting']
    },
    {
      icon: 'tji-service-4',
      title: 'Training and Development Programs',
      description: 'Training and Development Programs are designed to empower employees with the skills, knowledge, and tools they need.',
      features: ['Leadership Development', 'Skill Enhancement', 'Employee Engagement']
    }
  ]

  return (
    <section className="tj-service-section service-2 section-gap section-gap-x slidebar-stickiy-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="content-wrap slidebar-stickiy">
              <div className="sec-heading style-2">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Our Solutions</span>
                <h2 className="sec-title text-white text-anim">Tailored Business Solutions for our
                  <span>Corporates.</span>
                </h2>
              </div>
              <div className="wow fadeInUp" data-wow-delay=".6s">
                <Link className="tj-primary-btn" href="/service">
                  <span className="btn-text"><span>More Services</span></span>
                  <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="service-wrapper-2">
              {services.map((service, index) => (
                <div key={index} className="service-item-wrapper tj-fadein-right-on-scroll">
                  <div className="service-item style-2">
                    <div className="title-area">
                      <div className="service-icon">
                        <i className={service.icon}></i>
                      </div>
                      <h4 className="title">
                        <Link href="/service-details">{service.title}</Link>
                      </h4>
                    </div>
                    <div className="service-content">
                      <p className="desc">{service.description}</p>
                      <ul className="list-items">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>
                            <i className="tji-list"></i>{feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
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
      <div className="bg-shape-3">
        <Image src="/assets/images/shape/shape-blur.svg" alt="" width={200} height={200} />
      </div>
    </section>
  )
}

export default Home2ServicesSection