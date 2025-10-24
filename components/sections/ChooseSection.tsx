import React from 'react';

const ChooseSection: React.FC = () => {
  const chooseItems = [
    {
      id: 1,
      icon: 'tji-innovative',
      title: 'Innovative Solutions',
      description: 'We stay ahead of the leveraging cutting-edge technologies and strategies to keep.',
      link: '/about'
    },
    {
      id: 2,
      icon: 'tji-award',
      title: 'Award-Winning',
      description: 'Recognized by industry leaders, our award-winning team has a proven record.',
      link: '/about'
    },
    {
      id: 3,
      icon: 'tji-team',
      title: 'Expert Team',
      description: 'Our team is always available to address your concerns, providing quick and solution.',
      link: '/about'
    },
    {
      id: 4,
      icon: 'tji-support',
      title: 'Dedicated Support',
      description: 'Our team is always available to address your concerns, providing quick and effective.',
      link: '/about'
    }
  ];

  return (
    <section id="choose" className="tj-choose-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading style-3 text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Choose the Best
              </span>
              <h2 className="sec-title title-anim">Empowering Business with Expertise.</h2>
            </div>
          </div>
        </div>
        <div className="row row-gap-4 rightSwipeWrap">
          {chooseItems.map((item) => (
            <div key={item.id} className="col-xl-3 col-md-6">
              <div className="choose-box style-2 right-swipe">
                <div className="choose-content">
                  <div className="choose-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="title">{item.title}</h4>
                  <p className="desc">{item.description}</p>
                  <a className="text-btn" href={item.link}>
                    <span className="btn-text"><span>Read More</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;