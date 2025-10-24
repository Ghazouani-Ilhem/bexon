import React from 'react';
import Image from 'next/image';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      image: '/assets/images/blog/blog-6.webp',
      date: '28',
      month: 'Feb',
      category: 'Business',
      author: 'Ellinien Loma',
      title: 'Harnessing Digital Transform a Roadmap Businesses.',
      link: '/blog-details',
      delay: '.4s'
    },
    {
      id: 2,
      image: '/assets/images/blog/blog-7.webp',
      date: '28',
      month: 'Feb',
      category: 'Business',
      author: 'Ellinien Loma',
      title: 'Harnessing Digital Transform a Roadmap Businesses.',
      link: '/blog-details',
      delay: '.6s'
    },
    {
      id: 3,
      image: '/assets/images/blog/blog-8.webp',
      date: '28',
      month: 'Feb',
      category: 'Business',
      author: 'Ellinien Loma',
      title: 'Mastering Change Management Lessons for Businesses.',
      link: '/blog-details',
      delay: '.8s'
    }
  ];

  return (
    <section className="tj-blog-section-3 section-gap section-gap-x">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading style-3 text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Read Blogs
              </span>
              <h2 className="sec-title title-anim">Strategies and Insights.</h2>
            </div>
          </div>
        </div>
        <div className="row row-gap-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <div className="blog-item style-3 wow fadeInUp" data-wow-delay={post.delay}>
                <div className="blog-thumb">
                  <a href={post.link}>
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      width={400}
                      height={250}
                    />
                  </a>
                  <div className="blog-date">
                    <span className="date">{post.date}</span>
                    <span className="month">{post.month}</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="categories">
                      <a href={post.link}>{post.category}</a>
                    </span>
                    <span>By <a href={post.link}>{post.author}</a></span>
                  </div>
                  <h4 className="title">
                    <a href={post.link}>{post.title}</a>
                  </h4>
                  <a className="text-btn" href={post.link}>
                    <span className="btn-text"><span>Read More</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
    </section>
  );
};

export default BlogSection;