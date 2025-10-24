import React from 'react';
import Image from 'next/image';

const MarqueeSection: React.FC = () => {
  const marqueeItems = [
    {
      id: 1,
      text: 'Growth',
      image: '/assets/images/marquee/marquee-1.webp'
    },
    {
      id: 2,
      text: 'Leadership',
      image: '/assets/images/marquee/marquee-2.webp'
    },
    {
      id: 3,
      text: 'Enterprise',
      image: '/assets/images/marquee/marquee-1.webp'
    },
    {
      id: 4,
      text: 'Leadership',
      image: '/assets/images/marquee/marquee-2.webp'
    },
    {
      id: 5,
      text: 'Enterprise',
      image: '/assets/images/marquee/marquee-1.webp'
    },
    {
      id: 6,
      text: 'Leadership',
      image: '/assets/images/marquee/marquee-2.webp'
    }
  ];

  return (
    <section className="tj-marquee-section section-gap-x">
      <div className="marquee-wrapper">
        <div className="swiper marquee-slider">
          <div className="swiper-wrapper">
            {marqueeItems.map((item) => (
              <div key={item.id} className="swiper-slide marquee-item">
                <h4 className="marquee-text">{item.text}</h4>
                <div className="marquee-img">
                  <Image 
                    src={item.image} 
                    alt={item.text}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;