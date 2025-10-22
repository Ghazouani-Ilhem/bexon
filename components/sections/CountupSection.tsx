import React, { useEffect, useState } from 'react';

const CountupSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('countup-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const countupItems = [
    {
      number: 93,
      suffix: '%',
      text: 'Projects Completed.'
    },
    {
      number: 20,
      suffix: 'M',
      text: 'Reach Worldwide'
    },
    {
      number: 8.5,
      suffix: 'X',
      text: 'Faster Growth'
    },
    {
      number: 100,
      suffix: '+',
      text: 'Awards Archived'
    }
  ];

  return (
    <div id="countup-section" className="tj-countup-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="countup-wrap">
              {countupItems.map((item, index) => (
                <div key={index} className="countup-item">
                  <div className="inline-content">
                    <span className="odometer countup-number" data-count={item.number}>
                      {isVisible ? item.number : 0}
                    </span>
                    <span className="count-plus">{item.suffix}</span>
                  </div>
                  <span className="count-text">{item.text}</span>
                  {index < countupItems.length - 1 && (
                    <span 
                      className="count-separator" 
                      data-bg-image="/assets/images/shape/separator.svg"
                    ></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountupSection;