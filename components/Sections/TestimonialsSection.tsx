import React from 'react'
import Image from 'next/image'

interface TestimonialItem {
  name: string
  designation: string
  image: string
  text: string
}

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      name: 'Guy Hawkins',
      designation: 'Co. Founder',
      image: '/assets/images/testimonial/client-1.webp',
      text: 'Working with Bexon has been a game-changer for our business. Their team\'s professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner.'
    },
    {
      name: 'Ralph Edwards',
      designation: 'Co. Founder',
      image: '/assets/images/testimonial/client-2.webp',
      text: 'The results we\'ve seen after partnering with Bexon are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level. Their expertise and commitment to success make them a trusted.'
    },
    {
      name: 'Esther Howard',
      designation: 'Co. Founder',
      image: '/assets/images/testimonial/client-3.webp',
      text: 'We\'ve been working with Bexonfor years, and they continue to deliver outstanding results. Their team is proactive, responsive, and always goes the extra mile to ensure our needs are met. They\'ve become a key contributor to our growth and success that really help us'
    }
  ]

  return (
    <section className="tj-testimonial-section section-gap section-gap-x">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12">
            <div className="sec-heading-wrap">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Clients Feedback
              </span>
              <div className="heading-wrap-content">
                <div className="sec-heading">
                  <h2 className="sec-title title-anim">Success <span>Stories</span> Fuel our Innovation.</h2>
                </div>
                <div className="slider-navigation d-inline-flex wow fadeInUp" data-wow-delay=".4s">
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
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="testimonial-wrapper wow fadeInUp" data-wow-delay=".5s">
              <div className="swiper swiper-container testimonial-slider">
                <div className="swiper-wrapper">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="swiper-slide">
                      <div className="testimonial-item">
                        <span className="quote-icon"><i className="tji-quote"></i></span>
                        <div className="desc">
                          <p>{testimonial.text}</p>
                        </div>
                        <div className="testimonial-author">
                          <div className="author-inner">
                            <div className="author-img">
                              <Image src={testimonial.image} alt="" width={60} height={60} />
                            </div>
                            <div className="author-header">
                              <h4 className="title">{testimonial.name}</h4>
                              <span className="designation">{testimonial.designation}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection