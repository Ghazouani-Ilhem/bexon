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

const BlogSection: React.FC = () => {
  const blogItems: BlogItem[] = [
    {
      image: '/assets/images/blog/blog-1.webp',
      date: '28',
      month: 'Feb',
      category: 'Business',
      author: 'Ellinien Loma',
      title: 'Innovative Solutions for every Business Success.'
    },
    {
      image: '/assets/images/blog/blog-2.webp',
      date: '28',
      month: 'Feb',
      category: 'Business',
      author: 'Ellinien Loma',
      title: 'Harnessing Digital Transform a Roadmap Businesses.'
    },
    {
      image: '/assets/images/blog/blog-3.webp',
      date: '28',
      month: 'Feb',
      category: 'Business',
      author: 'Ellinien Loma',
      title: 'Mastering Change Management Lessons for Businesses.'
    }
  ]

  return (
    <section className="tj-blog-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Insights & Ideas
              </span>
              <h2 className="sec-title title-anim">The Ultimate <span>Resource.</span></h2>
            </div>
          </div>
        </div>
        <div className="row row-gap-4">
          {blogItems.map((item, index) => (
            <div key={index} className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
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
                  <div className="blog-meta">
                    <span className="categories">
                      <Link href="/blog-details">{item.category}</Link>
                    </span>
                    <span>By <Link href="/blog-details">{item.author}</Link></span>
                  </div>
                  <h4 className="title">
                    <Link href="/blog-details">{item.title}</Link>
                  </h4>
                  <Link className="text-btn" href="/blog-details">
                    <span className="btn-text"><span>Read More</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection