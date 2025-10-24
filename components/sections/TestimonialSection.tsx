import React from 'react';
import Image from 'next/image';

const TestimonialSection: React.FC = () => {
  const clients = [
    {
      id: 1,
      image: '/assets/images/testimonial/client-1.webp',
      name: 'Mevon Lane',
      designation: 'Co. Founder'
    },
    {
      id: 2,
      image: '/assets/images/testimonial/client-2.webp',
      name: 'Ralph Edwards',
      designation: 'Co. Founder'
    },
    {
      id: 3,
      image: '/assets/images/testimonial/client-3.webp',
      name: 'Guy Hawkins',
      designation: 'Co. Founder'
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: "Working with Bexon has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner. The results we've seen after partnering."
    },
    {
      id: 2,
      text: "The results we've seen after partnering with Bexon are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level. Their expertise and commitment to success make them a trusted."
    },
    {
      id: 3,
      text: "We've been working with Bexonfor years, and they continue to deliver outstanding results. Their team is proactive, responsive, and always goes the extra mile to ensure our needs are met. They've become a key contributor to our growth and success that really help us"
    }
  ];

  return (
    <section className="tj-testimonial-section-3 section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="testimonial-wrapper-2 wow fadeInUp" data-wow-delay=".4s">
              <h5 className="sec-title">Our Clients Love <span>Feedback</span></h5>
              <div className="swiper client-thumb">
                <div className="swiper-wrapper">
                  {clients.map((client) => (
                    <div key={client.id} className="swiper-slide thumb-item">
                      <div className="thumb-img">
                        <Image 
                          src={client.image} 
                          alt={client.name}
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="author-header">
                        <h4 className="title">{client.name}</h4>
                        <span className="designation">{client.designation}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="testimonial-navigation d-none d-md-inline-flex">
                <div className="slider-prev">
                  <span className="anim-icon">
                    <i className="tji-arrow-left"></i>
                    <i className="tji-arrow-left"></i>
                  </span>
                </div>
                <div className="slider-next">
                  <span className="anim-icon">
                    <i className="tji-arrow-right"></i>
                    <i className="tji-arrow-right"></i>
                  </span>
                </div>
              </div>
              <div className="swiper testimonial-slider-3">
                <div className="swiper-wrapper">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="desc">
                          <p>{testimonial.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination-area"></div>
              </div>
              <span className="quote-icon"><i className="tji-quote"></i></span>
              <div className="bg-shape-1">
                <Image 
                  src="/assets/images/shape/pattern-2.svg" 
                  alt="Background pattern"
                  width={200}
                  height={200}
                />
              </div>
              <div className="bg-shape-2">
                <Image 
                  src="/assets/images/shape/pattern-3.svg" 
                  alt="Background pattern"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;