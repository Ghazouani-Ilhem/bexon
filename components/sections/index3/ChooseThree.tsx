import React from 'react';
import Link from 'next/link';

const ChooseThree: React.FC = () => {
  const items = [
    {
      icon: 'tji-innovative',
      title: 'Innovative Solutions',
      desc: 'We stay ahead of the leveraging cutting-edge technologies and strategies to keep.',
    },
    {
      icon: 'tji-award',
      title: 'Award-Winning Expertise',
      desc: 'Recognized by industry leaders, our award-winning team has a proven record.',
    },
    {
      icon: 'tji-support',
      title: 'Dedicated Support',
      desc: 'Our team is always available to address your concerns, providing quick and effective.',
    },
    {
      icon: 'tji-box',
      title: 'Strategic Growth',
      desc: 'Tailored strategies focused on long-term value and sustainable success.',
    },
  ];

  return (
    <section id="choose" className="tj-choose-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading style-3 text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box"></i>Choose the Best</span>
              <h2 className="sec-title title-anim">Empowering Business with Expertise.</h2>
            </div>
          </div>
        </div>
        <div className="row row-gap-4 rightSwipeWrap">
          {items.map((item, idx) => (
            <div className="col-xl-3 col-md-6" key={idx}>
              <div className="choose-box style-2 right-swipe">
                <div className="choose-content">
                  <div className="choose-icon"><i className={item.icon}></i></div>
                  <h4 className="title">{item.title}</h4>
                  <p className="desc">{item.desc}</p>
                  <Link className="text-btn" href="/about">
                    <span className="btn-text"><span>Read More</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseThree;
