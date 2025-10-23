import React from 'react';

const TestimonialThree: React.FC = () => {
  return (
    <section className="tj-testimonial-section-3 section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="testimonial-wrapper-2 wow fadeInUp" data-wow-delay=".4s">
              <h5 className="sec-title">Our Clients Love <span>Feedback</span></h5>
              <div className="swiper client-thumb">
                <div className="swiper-wrapper">
                  {[1,2,3].map(n => (
                    <div className="swiper-slide thumb-item" key={n}>
                      <div className="thumb-img">
                        <img src={`/assets/images/testimonial/client-${n}.webp`} alt="Image" />
                      </div>
                      <div className="author-header">
                        <h4 className="title">Client {n}</h4>
                        <span className="designation">Co. Founder</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="testimonial-navigation d-none d-md-inline-flex">
                <div className="slider-prev">
                  <span className="anim-icon"><i className="tji-arrow-left"></i><i className="tji-arrow-left"></i></span>
                </div>
                <div className="slider-next">
                  <span className="anim-icon"><i className="tji-arrow-right"></i><i className="tji-arrow-right"></i></span>
                </div>
              </div>
              <div className="swiper testimonial-slider-3">
                <div className="swiper-wrapper">
                  {[1,2,3].map(n => (
                    <div className="swiper-slide" key={n}>
                      <div className="testimonial-item">
                        <div className="desc">
                          <p>Testimonial content {n}. Working with Bexon has been a game-changer for our business.</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination-area"></div>
              </div>
              <span className="quote-icon"><i className="tji-quote"></i></span>
              <div className="bg-shape-1"><img src="/assets/images/shape/pattern-2.svg" alt="" /></div>
              <div className="bg-shape-2"><img src="/assets/images/shape/pattern-3.svg" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialThree;
