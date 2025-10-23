import React from 'react';

const ChooseSection: React.FC = () => {
  return (
    <section id="choose" className="tj-choose-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box"></i>Choose the Best</span>
              <h2 className="sec-title title-anim">Empowering Business with <span>Expertise.</span></h2>
            </div>
          </div>
        </div>
        <div className="row row-gap-4 rightSwipeWrap">
          {[
            { icon: 'tji-innovative', title: 'Innovative Solutions', desc: 'We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.' },
            { icon: 'tji-award', title: 'Award-Winning Expertise', desc: 'Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects.' },
            { icon: 'tji-support', title: 'Dedicated Support', desc: 'Our team is always available to address your concerns, providing quick and effective solution to keep your business.' }
          ].map((item, idx) => (
            <div className="col-lg-4" key={idx}>
              <div className="choose-box right-swipe">
                <div className="choose-content">
                  <div className="choose-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="title">{item.title}</h4>
                  <p className="desc">{item.desc}</p>
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
