import React from 'react';
import Link from 'next/link';

const posts = [
  { img: 'blog-1.webp', cat: 'Business', author: 'Ellinien Loma', title: 'Innovative Solutions for every Business Success.' },
  { img: 'blog-2.webp', cat: 'Business', author: 'Ellinien Loma', title: 'Harnessing Digital Transform a Roadmap Businesses.' },
  { img: 'blog-3.webp', cat: 'Business', author: 'Ellinien Loma', title: 'Mastering Change Management Lessons for Businesses.' },
];

const BlogSection: React.FC = () => {
  return (
    <section className="tj-blog-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box"></i>Insights & Ideas</span>
              <h2 className="sec-title title-anim">The Ultimate <span>Resource.</span></h2>
            </div>
          </div>
        </div>
        <div className="row row-gap-4">
          {posts.map((p, idx) => (
            <div className="col-xl-4 col-md-6" key={idx}>
              <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                <div className="blog-thumb">
                  <Link href="/blog-details"><img src={`/assets/images/blog/${p.img}`} alt="" /></Link>
                  <div className="blog-date">
                    <span className="date">28</span>
                    <span className="month">Feb</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="categories"><Link href="/blog-details">{p.cat}</Link></span>
                    <span>By <Link href="/blog-details">{p.author}</Link></span>
                  </div>
                  <h4 className="title"><Link href="/blog-details">{p.title}</Link></h4>
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
  );
};

export default BlogSection;
