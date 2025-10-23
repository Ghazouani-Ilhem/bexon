import React from 'react';
import Link from 'next/link';

const posts = [
  { img: 'blog-7.webp', cat: 'Business', author: 'Ralph Edwards', title: 'Navigating Market Shifts with Agility.' },
  { img: 'blog-8.webp', cat: 'Strategy', author: 'Guy Hawkins', title: 'Building Resilient Operations for Growth.' },
  { img: 'blog-9.webp', cat: 'Insights', author: 'Devon Lane', title: 'Data-Driven Decision Making at Scale.' },
];

const BlogThree: React.FC = () => {
  return (
    <section className="tj-blog-section-3 section-gap section-gap-x">
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
              <div className="blog-item-3 wow fadeInUp" data-wow-delay=".4s">
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

export default BlogThree;
