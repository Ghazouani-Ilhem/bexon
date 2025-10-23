import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CountupItem {
  icon: string
  step: string
  text: string
  number: string
  suffix: string
}

const Home2AboutSection: React.FC = () => {
  const countupItems: CountupItem[] = [
    {
      icon: 'tji-complete',
      step: '01.',
      text: 'Projects Completed.',
      number: '93',
      suffix: '%'
    },
    {
      icon: 'tji-global',
      step: '02.',
      text: 'Reach Worldwide',
      number: '20',
      suffix: 'M'
    },
    {
      icon: 'tji-growth',
      step: '03.',
      text: 'Faster Growth',
      number: '8.5',
      suffix: 'X'
    },
    {
      icon: 'tji-award',
      step: '04.',
      text: 'Awards Archived',
      number: '100',
      suffix: '+'
    }
  ]

  return (
    <section className="tj-about-section section-gap">
      <div className="container">
        <div className="row row-gap-4">
          <div className="col-lg-4 col-md-6 order-lg-1 order-3">
            {countupItems.map((item, index) => (
              <div key={index} className="countup-item style-2 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                <span className="count-icon"><i className={item.icon}></i></span>
                <span className="steps">{item.step}</span>
                <div className="count-inner">
                  <span className="count-text">{item.text}</span>
                  <div className="inline-content">
                    <span className="odometer countup-number" data-count={item.number}></span>
                    <span className="count-plus">{item.suffix}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-4 col-md-6 order-lg-2 order-1">
            <div className="about-img-area wow fadeInLeft" data-wow-delay=".2s">
              <div className="about-img">
                <Image src="/assets/images/about/about-img-2.webp" alt="" width={400} height={500} />
              </div>
              <div className="about-shape">
                <Image src="/assets/images/shape/about-shape-2.webp" alt="" width={200} height={200} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 order-lg-3 order-2">
            <div className="about-content-area wow fadeInRight" data-wow-delay=".3s">
              <div className="sec-heading">
                <span className="sub-title wow fadeInUp" data-wow-delay=".4s">
                  <i className="tji-about"></i>About Bexon
                </span>
                <h2 className="sec-title title-anim">We are a team of passionate professionals dedicated to
                  <span>excellence.</span>
                </h2>
                <p className="sec-desc">We are a team of passionate professionals dedicated to excellence. Our mission is to
                  provide innovative solutions that help businesses grow and succeed in today's competitive
                  marketplace.</p>
              </div>
              <div className="about-features">
                <div className="feature-item wow fadeInUp" data-wow-delay=".5s">
                  <div className="feature-icon">
                    <i className="tji-check"></i>
                  </div>
                  <div className="feature-content">
                    <h5 className="title">Quality Assurance</h5>
                    <p className="desc">We ensure the highest quality standards in all our deliverables.</p>
                  </div>
                </div>
                <div className="feature-item wow fadeInUp" data-wow-delay=".6s">
                  <div className="feature-icon">
                    <i className="tji-check"></i>
                  </div>
                  <div className="feature-content">
                    <h5 className="title">24/7 Support</h5>
                    <p className="desc">Round-the-clock support to address your needs and concerns.</p>
                  </div>
                </div>
                <div className="feature-item wow fadeInUp" data-wow-delay=".7s">
                  <div className="feature-icon">
                    <i className="tji-check"></i>
                  </div>
                  <div className="feature-content">
                    <h5 className="title">Expert Team</h5>
                    <p className="desc">Our team consists of experienced professionals in their respective fields.</p>
                  </div>
                </div>
              </div>
              <div className="about-btn-area wow fadeInUp" data-wow-delay=".8s">
                <Link className="tj-primary-btn" href="/about">
                  <span className="btn-text"><span>Learn More</span></span>
                  <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home2AboutSection