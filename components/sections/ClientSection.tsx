import React from 'react';
import Image from 'next/image';

const ClientSection: React.FC = () => {
  const clients = [
    { id: 1, logo: '/assets/images/brands/brand-1-light.webp', alt: 'Brand 1' },
    { id: 2, logo: '/assets/images/brands/brand-2-light.webp', alt: 'Brand 2' },
    { id: 3, logo: '/assets/images/brands/brand-3-light.webp', alt: 'Brand 3' },
    { id: 4, logo: '/assets/images/brands/brand-4-light.webp', alt: 'Brand 4' },
    { id: 5, logo: '/assets/images/brands/brand-5-light.webp', alt: 'Brand 5' },
    { id: 6, logo: '/assets/images/brands/brand-6-light.webp', alt: 'Brand 6' },
  ];

  return (
    <div className="tj-client-section-2 section-gap-x wow fadeInUp" data-wow-delay=".4s">
      <div className="container-fluid client-container">
        <div className="row">
          <div className="col-12">
            <div className="swiper client-slider client-slider-2">
              <div className="swiper-wrapper">
                {clients.map((client) => (
                  <div key={client.id} className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image 
                        src={client.logo} 
                        alt={client.alt}
                        width={150}
                        height={80}
                      />
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

export default ClientSection;