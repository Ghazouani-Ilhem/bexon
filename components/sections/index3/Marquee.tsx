import React from 'react';

const items = [
  { text: 'Growth', img: 'marquee-1.webp' },
  { text: 'Leadership', img: 'marquee-2.webp' },
  { text: 'Enterprise', img: 'marquee-1.webp' },
  { text: 'Leadership', img: 'marquee-2.webp' },
  { text: 'Enterprise', img: 'marquee-1.webp' },
  { text: 'Leadership', img: 'marquee-2.webp' },
];

const Marquee: React.FC = () => {
  return (
    <section className="tj-marquee-section section-gap-x">
      <div className="marquee-wrapper">
        <div className="swiper marquee-slider">
          <div className="swiper-wrapper">
            {items.map((it, idx) => (
              <div className="swiper-slide marquee-item" key={idx}>
                <h4 className="marquee-text">{it.text}</h4>
                <div className="marquee-img">
                  <img src={`/assets/images/marquee/${it.img}`} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
