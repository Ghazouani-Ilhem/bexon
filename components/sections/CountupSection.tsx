import React from 'react';
import Image from 'next/image';

const CountupSection: React.FC = () => {
  const countupItems = [
    {
      id: '1',
      number: '93',
      suffix: '%',
      text: 'Projects Completed.'
    },
    {
      id: '2',
      number: '20',
      suffix: 'M',
      text: 'Reach Worldwide'
    },
    {
      id: '3',
      number: '8.5',
      suffix: 'X',
      text: 'Faster Growth'
    },
    {
      id: '4',
      number: '100',
      suffix: '+',
      text: 'Awards Archived'
    }
  ];

  return (
    <div className="tj-countup-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="countup-wrap">
              {countupItems.map((item, index) => (
                <div key={item.id} className="countup-item">
                  <div className="inline-content">
                    <span className="odometer countup-number" data-count={item.number}></span>
                    <span className="count-plus">{item.suffix}</span>
                  </div>
                  <span className="count-text">{item.text}</span>
                  {index < countupItems.length - 1 && (
                    <span 
                      className="count-separator" 
                      style={{ backgroundImage: 'url(/assets/images/shape/separator.svg)' }}
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