'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, Tag } from 'lucide-react';
import Breadcrumb from '@/components/common/Breadcrumb';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogDetailsProps {
  params: {
    slug: string;
  };
}

const blogData: { [key: string]: any } = {
  'future-digital-transformation-2024': {
    title: 'The Future of Digital Transformation in 2024',
    excerpt: 'Explore the latest trends and technologies that are shaping the future of digital transformation and how businesses can adapt to stay competitive.',
    content: `
      <p>Digital transformation continues to evolve at a rapid pace, with new technologies and methodologies emerging regularly. In 2024, we're seeing a significant shift towards AI-driven solutions, cloud-native architectures, and data-driven decision making.</p>
      
      <p>The landscape of digital transformation is constantly changing, and businesses that want to stay competitive must adapt quickly. This year, we're witnessing several key trends that are reshaping how organizations approach their digital strategies.</p>
      
      <h3>Key Trends Shaping Digital Transformation</h3>
      
      <p>One of the most significant trends is the integration of artificial intelligence across all business processes. Companies are moving beyond simple automation to implement AI solutions that can learn, adapt, and make decisions autonomously.</p>
      
      <p>Another major trend is the shift towards cloud-native architectures. Organizations are recognizing that traditional on-premises solutions are no longer sufficient for the scale and agility required in today's market.</p>
      
      <h3>The Role of Data in Digital Transformation</h3>
      
      <p>Data has become the lifeblood of digital transformation. Companies that can effectively collect, analyze, and act on data insights are gaining significant competitive advantages. This requires not just the right technology, but also the right culture and processes.</p>
      
      <p>However, with great data comes great responsibility. Organizations must ensure they're handling data ethically and in compliance with increasingly strict regulations around data privacy and security.</p>
      
      <h3>Challenges and Opportunities</h3>
      
      <p>While digital transformation offers tremendous opportunities, it also presents significant challenges. One of the biggest challenges is change management - getting employees to embrace new technologies and ways of working.</p>
      
      <p>Another challenge is the rapid pace of technological change. What's cutting-edge today may be obsolete tomorrow, so organizations must build flexibility and adaptability into their digital strategies.</p>
      
      <h3>Looking Ahead</h3>
      
      <p>As we look to the future, it's clear that digital transformation will continue to accelerate. Organizations that can successfully navigate this landscape will be well-positioned for long-term success.</p>
      
      <p>The key is to start with a clear vision, invest in the right technologies, and most importantly, focus on creating a culture that embraces change and continuous learning.</p>
    `,
    image: '/assets/images/blog/blog-1.webp',
    category: 'Technology',
    author: 'John Smith',
    authorImage: '/assets/images/team/team-1.webp',
    authorBio: 'Senior Technology Consultant with over 10 years of experience in digital transformation and enterprise architecture.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    tags: ['Digital Transformation', 'AI', 'Cloud Computing', 'Technology Trends'],
    relatedPosts: [
      {
        title: 'Building a Successful Remote Team Culture',
        slug: 'building-successful-remote-team-culture',
        image: '/assets/images/blog/blog-2.webp',
        date: 'March 12, 2024'
      },
      {
        title: 'The Role of AI in Modern Business Operations',
        slug: 'role-ai-modern-business-operations',
        image: '/assets/images/blog/blog-5.webp',
        date: 'March 5, 2024'
      }
    ]
  },
  'building-successful-remote-team-culture': {
    title: 'Building a Successful Remote Team Culture',
    excerpt: 'Learn how to create and maintain a strong team culture in a remote work environment, including best practices and common pitfalls to avoid.',
    content: `
      <p>Remote work has become the new normal for many organizations, but building a strong team culture in a distributed environment requires intentional effort and the right strategies.</p>
      
      <p>Creating a successful remote team culture isn't just about having the right tools and technology. It's about fostering connections, maintaining clear communication, and ensuring that every team member feels valued and included.</p>
      
      <h3>The Foundation of Remote Culture</h3>
      
      <p>Trust is the foundation of any successful remote team culture. Without the ability to physically see what team members are doing, managers must learn to trust their employees to deliver results.</p>
      
      <p>This trust must be built through clear expectations, regular communication, and consistent follow-through. It's not something that happens overnight, but rather something that develops over time through positive interactions and successful project deliveries.</p>
      
      <h3>Communication is Key</h3>
      
      <p>In a remote environment, communication becomes even more critical than in traditional office settings. Without the ability to have impromptu conversations or read body language, teams must be more intentional about how they communicate.</p>
      
      <p>This means establishing clear communication protocols, using the right tools for different types of communication, and ensuring that everyone has access to the information they need to do their jobs effectively.</p>
      
      <h3>Building Connections</h3>
      
      <p>One of the biggest challenges of remote work is maintaining the personal connections that often form naturally in office environments. These connections are important for team cohesion and employee satisfaction.</p>
      
      <p>Organizations must be intentional about creating opportunities for team members to connect on a personal level, whether through virtual coffee chats, team building activities, or informal communication channels.</p>
      
      <h3>Best Practices for Remote Culture</h3>
      
      <p>There are several best practices that can help organizations build and maintain a strong remote team culture:</p>
      
      <ul>
        <li>Establish clear communication guidelines and expectations</li>
        <li>Use video calls for important meetings and discussions</li>
        <li>Create opportunities for informal interaction</li>
        <li>Provide regular feedback and recognition</li>
        <li>Invest in the right collaboration tools</li>
        <li>Encourage work-life balance</li>
      </ul>
      
      <h3>Common Pitfalls to Avoid</h3>
      
      <p>There are also several common pitfalls that organizations should avoid when building remote team culture:</p>
      
      <ul>
        <li>Over-communicating or micromanaging</li>
        <li>Ignoring time zone differences</li>
        <li>Not providing adequate technical support</li>
        <li>Failing to address conflicts promptly</li>
        <li>Not investing in team building activities</li>
      </ul>
      
      <h3>Measuring Success</h3>
      
      <p>Building a successful remote team culture is an ongoing process that requires regular assessment and adjustment. Organizations should regularly measure team satisfaction, productivity, and engagement to ensure their culture-building efforts are effective.</p>
      
      <p>This can be done through regular surveys, one-on-one meetings, and other feedback mechanisms that give team members a voice in shaping the culture.</p>
    `,
    image: '/assets/images/blog/blog-2.webp',
    category: 'Business',
    author: 'Sarah Johnson',
    authorImage: '/assets/images/team/team-2.webp',
    authorBio: 'HR Director and remote work expert with extensive experience in building distributed teams.',
    date: 'March 12, 2024',
    readTime: '7 min read',
    tags: ['Remote Work', 'Team Management', 'Culture', 'Leadership'],
    relatedPosts: [
      {
        title: 'Strategic Planning for Business Growth',
        slug: 'strategic-planning-business-growth',
        image: '/assets/images/blog/blog-3.webp',
        date: 'March 10, 2024'
      },
      {
        title: 'Innovation in Customer Experience',
        slug: 'innovation-customer-experience',
        image: '/assets/images/blog/blog-4.webp',
        date: 'March 8, 2024'
      }
    ]
  }
};

export default function BlogDetails({ params }: BlogDetailsProps) {
  const post = blogData[params.slug];
  
  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: post.title }
  ];

  return (
    <>
      {/* Breadcrumb */}
      <Section background="gray" padding="sm">
        <Container>
          <Breadcrumb items={breadcrumbItems} />
        </Container>
      </Section>

      {/* Article Header */}
      <Section background="white" padding="xl">
        <Container>
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                {post.category}
              </span>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="mr-4">{post.date}</span>
                <Clock className="w-4 h-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <Heading level={1} className="mb-6">
              {post.title}
            </Heading>
            
            <Text size="lg" color="secondary" className="mb-8">
              {post.excerpt}
            </Text>
            
            <div className="flex items-center justify-between py-6 border-t border-b border-gray-200">
              <div className="flex items-center">
                <Image 
                  src={post.authorImage} 
                  alt={post.author} 
                  width={48} 
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <Text className="font-medium">{post.author}</Text>
                  <Text size="sm" color="secondary">{post.authorBio}</Text>
                </div>
              </div>
              
              <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Article Content */}
      <Section background="white" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <Image 
                src={post.image} 
                alt={post.title} 
                width={800} 
                height={400}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Author Bio */}
      <Section background="gray" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8">
              <div className="flex items-start">
                <Image 
                  src={post.authorImage} 
                  alt={post.author} 
                  width={80} 
                  height={80}
                  className="rounded-full mr-6"
                />
                <div>
                  <Heading level={3} className="mb-2">
                    About {post.author}
                  </Heading>
                  <Text color="secondary">
                    {post.authorBio}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      <Section background="white" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-8" align="center">
              Related Articles
            </Heading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {post.relatedPosts.map((relatedPost: any, index: number) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative">
                    <Image 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      width={400} 
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{relatedPost.date}</span>
                    </div>
                    
                    <Heading level={3} className="mb-3">
                      <Link 
                        href={`/blog/${relatedPost.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {relatedPost.title}
                      </Link>
                    </Heading>
                    
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="text-center">
            <Heading level={2} className="mb-6 text-white">
              Stay Updated
            </Heading>
            <Text size="lg" color="white" className="mb-8 text-blue-100 max-w-2xl mx-auto">
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