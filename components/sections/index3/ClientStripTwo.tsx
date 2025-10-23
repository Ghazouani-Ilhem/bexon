import React from 'react';

const lightLogos = [1,2,3,4,5,6];

const ClientStripTwo: React.FC = () => {
  return (
    <div className="tj-client-section-2 section-gap-x wow fadeInUp" data-wow-delay=".4s">
      <div className="container-fluid client-container">
        <div className="row">
          <div className="col-12">
            <div className="swiper client-slider client-slider-2">
              <div className="swiper-wrapper">
                {lightLogos.map(n => (
                  <div className="swiper-slide client-item" key={n}>
                    <div className="client-logo">
                      <img src={`/assets/images/brands/brand-${n}-light.webp`} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientStripTwo;
