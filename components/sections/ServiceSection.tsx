import React from 'react';

const ServiceSection: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: 'tji-service-1',
      title: 'Business Strategy Development',
      description: 'Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.',
      bgImage: '/assets/images/service/service-2.webp',
      link: '/service-details'
    },
    {
      id: 2,
      icon: 'tji-service-2',
      title: 'Customer Experience Solutions',
      description: 'Customer Experience Solutions are designed to enhance every touchpoint of your customer journey, from first interaction.',
      bgImage: '/assets/images/service/service-3.webp',
      link: '/service-details'
    },
    {
      id: 3,
      icon: 'tji-service-3',
      title: 'Sustainability and ESG Consulting',
      description: 'Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors.',
      bgImage: '/assets/images/service/service-4.webp',
      link: '/service-details'
    },
    {
      id: 4,
      icon: 'tji-service-4',
      title: 'Training and Development Programs',
      description: 'Training and Development Programs are designed to empower employees with the skills, knowledge, and tools they need.',
      bgImage: '/assets/images/service/service-6.webp',
      link: '/service-details'
    }
  ];

  return (
    <section className="tj-service-section service-3 section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="sec-heading style-3 text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Our Solutions
              </span>
              <h2 className="sec-title title-anim">Tailor Business Solutions for Corporates.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-wrapper">
              {services.map((service) => (
                <div key={service.id} className="service-item style-3 wow fadeInUp" data-wow-delay=".3s">
                  <div className="service-content-wrap">
                    <div className="service-title">
                      <div className="service-icon">
                        <i className={service.icon}></i>
                      </div>
                      <h4 className="title">
                        <a href={service.link}>{service.title}</a>
                      </h4>
                    </div>
                    <div className="service-content">
                      <p className="desc">{service.description}</p>
                    </div>
                  </div>
                  <div 
                    className="service-reveal-bg" 
                    data-bg-image={service.bgImage}
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="service-btn-area text-center wow fadeInUp" data-wow-delay=".3s">
              <a className="tj-primary-btn" href="/service">
                <span className="btn-text"><span>More Services</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;