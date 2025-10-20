'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';
import Breadcrumb from '@/components/common/Breadcrumb';
import HeroSection from '@/components/sections/HeroSection';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  const breadcrumbItems = [
    { label: 'Blog' }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'business', label: 'Business' },
    { id: 'technology', label: 'Technology' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'innovation', label: 'Innovation' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Digital Transformation in 2024',
      excerpt: 'Explore the latest trends and technologies that are shaping the future of digital transformation and how businesses can adapt to stay competitive.',
      content: 'Digital transformation continues to evolve at a rapid pace, with new technologies and methodologies emerging regularly. In 2024, we\'re seeing a significant shift towards AI-driven solutions, cloud-native architectures, and data-driven decision making...',
      image: '/assets/images/blog/blog-1.webp',
      category: 'technology',
      author: 'John Smith',
      date: 'March 15, 2024',
      readTime: '5 min read',
      tags: ['Digital Transformation', 'AI', 'Cloud Computing'],
      slug: 'future-digital-transformation-2024'
    },
    {
      id: 2,
      title: 'Building a Successful Remote Team Culture',
      excerpt: 'Learn how to create and maintain a strong team culture in a remote work environment, including best practices and common pitfalls to avoid.',
      content: 'Remote work has become the new normal for many organizations, but building a strong team culture in a distributed environment requires intentional effort and the right strategies...',
      image: '/assets/images/blog/blog-2.webp',
      category: 'business',
      author: 'Sarah Johnson',
      date: 'March 12, 2024',
      readTime: '7 min read',
      tags: ['Remote Work', 'Team Management', 'Culture'],
      slug: 'building-successful-remote-team-culture'
    },
    {
      id: 3,
      title: 'Strategic Planning for Business Growth',
      excerpt: 'Discover the key elements of effective strategic planning and how to align your business goals with market opportunities for sustainable growth.',
      content: 'Strategic planning is the foundation of any successful business. It involves setting clear objectives, analyzing market conditions, and developing actionable plans to achieve your goals...',
      image: '/assets/images/blog/blog-3.webp',
      category: 'strategy',
      author: 'Michael Chen',
      date: 'March 10, 2024',
      readTime: '6 min read',
      tags: ['Strategic Planning', 'Business Growth', 'Leadership'],
      slug: 'strategic-planning-business-growth'
    },
    {
      id: 4,
      title: 'Innovation in Customer Experience',
      excerpt: 'How innovative approaches to customer experience can drive business success and create lasting competitive advantages in today\'s market.',
      content: 'Customer experience has become a key differentiator in today\'s competitive landscape. Companies that prioritize and innovate in this area often see significant improvements in customer satisfaction, retention, and revenue...',
      image: '/assets/images/blog/blog-4.webp',
      category: 'innovation',
      author: 'Emily Davis',
      date: 'March 8, 2024',
      readTime: '8 min read',
      tags: ['Customer Experience', 'Innovation', 'UX Design'],
      slug: 'innovation-customer-experience'
    },
    {
      id: 5,
      title: 'The Role of AI in Modern Business Operations',
      excerpt: 'Understanding how artificial intelligence is transforming business operations and the opportunities it presents for companies of all sizes.',
      content: 'Artificial intelligence is no longer a futuristic concept but a present reality that\'s reshaping how businesses operate. From automation to predictive analytics, AI offers numerous opportunities for improvement...',
      image: '/assets/images/blog/blog-5.webp',
      category: 'technology',
      author: 'David Wilson',
      date: 'March 5, 2024',
      readTime: '9 min read',
      tags: ['Artificial Intelligence', 'Automation', 'Business Operations'],
      slug: 'role-ai-modern-business-operations'
    },
    {
      id: 6,
      title: 'Sustainable Business Practices for Long-term Success',
      excerpt: 'Explore how sustainable business practices can drive long-term success while benefiting the environment and society.',
      content: 'Sustainability is no longer just a buzzword but a critical component of modern business strategy. Companies that embrace sustainable practices often see improved brand reputation, cost savings, and long-term viability...',
      image: '/assets/images/blog/blog-6.webp',
      category: 'business',
      author: 'Lisa Anderson',
      date: 'March 3, 2024',
      readTime: '6 min read',
      tags: ['Sustainability', 'ESG', 'Business Strategy'],
      slug: 'sustainable-business-practices-long-term-success'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Breadcrumb */}
      <Section background="gray" padding="sm">
        <Container>
          <Breadcrumb items={breadcrumbItems} />
        </Container>
      </Section>

      {/* Hero Section */}
      <HeroSection
        title="Our Blog"
        subtitle="Latest Insights"
        description="Stay updated with the latest trends, insights, and best practices in business, technology, and innovation."
        buttonText="Read Articles"
        buttonHref="#blog-posts"
        background="white"
        className="py-20"
      />

      {/* Blog Section */}
      <Section id="blog-posts" background="gray" padding="xl">
        <Container>
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-blue-50'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    width={400} 
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {categories.find(c => c.id === post.category)?.label}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  
                  <Heading level={3} className="mb-3 group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </Heading>
                  
                  <Text color="secondary" className="mb-4">
                    {post.excerpt}
                  </Text>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Text size="lg" color="secondary">
                No articles found matching your search criteria.
              </Text>
            </div>
          )}
        </Container>
      </Section>

      {/* Newsletter Section */}
      <Section background="white" padding="xl">
        <Container>
          <div className="bg-blue-600 rounded-lg p-8 text-center">
            <Heading level={2} className="mb-4 text-white">
              Stay Updated
            </Heading>
            <Text size="lg" color="white" className="mb-6 text-blue-100">
              Subscribe to our newsletter and never miss the latest insights and updates.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}