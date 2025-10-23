import React from 'react';

const logos = [1,2,3,4,5,6];

const ClientStrip: React.FC = () => {
  return (
    <section className="tj-client-section client-section-gap wow fadeInUp" data-wow-delay=".4s">
      <div className="container-fluid client-container">
        <div className="row">
          <div className="col-12">
            <div className="client-content">
              <h5 className="sec-title">Join Over <span className="client-numbers">1000+</span> Companies with <span className="client-text">Bexon</span> Here</h5>
            </div>
            <div className="swiper client-slider client-slider-1">
              <div className="swiper-wrapper">
                {logos.map(n => (
                  <div className="swiper-slide client-item" key={n}>
                    <div className="client-logo">
                      <img src={`/assets/images/brands/brand-${n}.webp`} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientStrip;
