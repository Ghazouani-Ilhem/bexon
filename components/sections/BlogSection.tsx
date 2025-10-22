import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types';

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Innovative Solutions for every Business Success.',
      excerpt: 'Discover how innovative solutions can transform your business and drive success in today\'s competitive market.',
      content: '',
      image: '/assets/images/blog/blog-1.webp',
      author: 'Ellinien Loma',
      date: '2024-02-28',
      category: 'Business',
      slug: 'innovative-solutions-business-success'
    },
    {
      id: '2',
      title: 'Harnessing Digital Transform a Roadmap Businesses.',
      excerpt: 'Learn about the essential steps for digital transformation and how to create a roadmap for your business.',
      content: '',
      image: '/assets/images/blog/blog-2.webp',
      author: 'Ellinien Loma',
      date: '2024-02-28',
      category: 'Business',
      slug: 'harnessing-digital-transform-roadmap-businesses'
    },
    {
      id: '3',
      title: 'Mastering Change Management Lessons for Businesses.',
      excerpt: 'Explore key lessons in change management that can help your business navigate transitions successfully.',
      content: '',
      image: '/assets/images/blog/blog-3.webp',
      author: 'Ellinien Loma',
      date: '2024-02-28',
      category: 'Business',
      slug: 'mastering-change-management-lessons-businesses'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleString('default', { month: 'short' })
    };
  };

  return (
    <section className="tj-blog-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Insights & Ideas
              </span>
              <h2 className="sec-title title-anim">
                The Ultimate <span>Resource.</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row row-gap-4">
          {blogPosts.map((post) => {
            const { day, month } = formatDate(post.date);
            return (
              <div key={post.id} className="col-xl-4 col-md-6">
                <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                  <div className="blog-thumb">
                    <Link href={`/blog-details?slug=${post.slug}`}>
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        width={400}
                        height={250}
                      />
                    </Link>
                    <div className="blog-date">
                      <span className="date">{day}</span>
                      <span className="month">{month}</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="categories">
                        <Link href={`/blog-details?slug=${post.slug}`}>{post.category}</Link>
                      </span>
                      <span>By <Link href={`/blog-details?slug=${post.slug}`}>{post.author}</Link></span>
                    </div>
                    <h4 className="title">
                      <Link href={`/blog-details?slug=${post.slug}`}>{post.title}</Link>
                    </h4>
                    <Link className="text-btn" href={`/blog-details?slug=${post.slug}`}>
                      <span className="btn-text">
                        <span>Read More</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;