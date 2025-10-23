import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface BlogItem {
  image: string
  date: string
  month: string
  category: string
  author: string
  title: string
}

const Home2BlogSection: React.FC = () => {
  const blogItems: BlogItem[] = [
    {
      image: '/assets/images/blog/blog-4.webp',
      date: '28',
      month: 'Feb',
      category: 'Business',
      author: 'Ellinien Loma',
      title: 'Harnessing Digital Transform a Roadmap Businesses.'
    },
    {
      image: '/assets/images/blog/blog-5.webp',
      date: '28',
      month: 'Feb',
      category: 'Business',
      author: 'Ellinien Loma',
      title: 'Mastering Change Management Lessons for Businesses.'
    }
  ]

  return (
    <section className="tj-blog-section-2 section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading-wrap">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Read Blogs</span>
              <div className="heading-wrap-content">
                <div className="sec-heading style-2">
                  <h2 className="sec-title text-anim">Strategies and <span>Insights.</span></h2>
                </div>
                <div className="wow fadeInUp" data-wow-delay=".5s">
                  <p className="desc">Developing personalized customer journeys to increase satisfaction and loyalty.</p>
                </div>
                <div className="slider-navigation d-none d-md-inline-flex wow fadeInUp" data-wow-delay=".7s">
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
            <div className="blog-wrapper wow fadeIn" data-wow-delay=".5s">
              <div className="swiper blog-slider">
                <div className="swiper-wrapper">
                  {blogItems.map((item, index) => (
                    <div key={index} className="swiper-slide">
                      <div className="blog-item style-2">
                        <div className="blog-thumb">
                          <Link href="/blog-details">
                            <Image src={item.image} alt="" width={400} height={250} />
                          </Link>
                          <div className="blog-date">
                            <span className="date">{item.date}</span>
                            <span className="month">{item.month}</span>
                          </div>
                        </div>
                        <div className="blog-content">
                          <div className="title-area">
                            <div className="blog-meta">
                              <span className="categories">
                                <Link href="/blog-details">{item.category}</Link>
                              </span>
                              <span>By <Link href="/blog-details">{item.author}</Link></span>
                            </div>
                            <h4 className="title">
                              <Link href="/blog-details">{item.title}</Link>
                            </h4>
                          </div>
                          <Link className="text-btn" href="/blog-details">
                            <span className="btn-text"><span>Read More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                          </Link>
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

export default Home2BlogSection