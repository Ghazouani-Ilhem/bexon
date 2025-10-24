import React from 'react';

const CountupSection: React.FC = () => {
  const countupItems = [
    {
      number: '13+',
      label: 'Years Experience',
      icon: 'tji-award'
    },
    {
      number: '1000+',
      label: 'Project Complete',
      icon: 'tji-project'
    },
    {
      number: '500+',
      label: 'Happy Clients',
      icon: 'tji-support'
    },
    {
      number: '50+',
      label: 'Team Members',
      icon: 'tji-team'
    }
  ];

  return (
    <section className="tj-countup-section section-gap">
      <div className="container">
        <div className="row">
          {countupItems.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="countup-box text-center">
                <div className="countup-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="countup-number">
                  <span className="odometer" data-count={item.number.replace('+', '')}>
                    {item.number}
                  </span>
                </div>
                <h6 className="countup-label">{item.label}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountupSection;