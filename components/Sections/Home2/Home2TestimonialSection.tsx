import React from 'react'
import Image from 'next/image'

interface TestimonialItem {
  name: string
  designation: string
  image: string
  text: string
}

const Home2TestimonialSection: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      name: 'Guy Hawkins',
      designation: 'Co. Founder',
      image: '/assets/images/testimonial/client-1.webp',
      text: 'Working with Bexon has been a game-changer for our business. Their team\'s professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner. The results we\'ve seen after partnering.'
    },
    {
      name: 'Ralph Edwards',
      designation: 'Co. Founder',
      image: '/assets/images/testimonial/client-2.webp',
      text: 'The results we\'ve seen after partnering with Bexon are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level. Their expertise and commitment to success make them a trusted.'
    },
    {
      name: 'Devon Lane',
      designation: 'Co. Founder',
      image: '/assets/images/testimonial/client-3.webp',
      text: 'We\'ve been working with Bexonfor years, and they continue to deliver outstanding results. Their team is proactive, responsive, and always goes the extra mile to ensure our needs are met. They\'ve become a key contributor to our growth and success that really help us'
    }
  ]

  return (
    <section className="tj-testimonial-section-2 section-gap">
      <div className="container">
        <div className="row row-gap-3">
          <div className="col-lg-6">
            <div className="testimonial-img-area wow fadeInUp" data-wow-delay=".3s">
              <div className="testimonial-img">
                <Image data-speed=".8" src="/assets/images/testimonial/testimonial-img.webp" alt="" width={500} height={400} />
                <div className="sec-heading style-2">
                  <h2 className="sec-title text-anim">Hear from Our <span>Customer.</span></h2>
                </div>
              </div>
              <div className="box-area">
                <div className="rating-box wow fadeInUp" data-wow-delay=".3s">
                  <h2 className="title">4.9</h2>
                  <div className="rating-area">
                    <div className="star-ratings">
                      <div className="fill-ratings" style={{width: "100%"}}>
                        <span>★★★★★</span>
                      </div>
                      <div className="empty-ratings">
                        <span>★★★★★</span>
                      </div>
                    </div>
                  </div>
                  <span className="rating-text">(80+ Clients Reviews)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-wrapper wow fadeInUp" data-wow-delay=".5s">
              <div className="swiper testimonial-slider-2">
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
                <div className="swiper-pagination-area"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home2TestimonialSection