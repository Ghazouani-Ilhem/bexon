'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, User, Tag, CheckCircle } from 'lucide-react';
import Breadcrumb from '@/components/common/Breadcrumb';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PortfolioDetailsProps {
  params: {
    slug: string;
  };
}

const projectData: { [key: string]: {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  client: string;
  date: string;
  duration: string;
  team: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  results: string[];
} } = {
  'e-commerce-platform': {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A comprehensive e-commerce solution built with modern technologies, featuring advanced product management, secure payment processing, and seamless user experience.',
    longDescription: 'This e-commerce platform was designed to handle high-volume transactions while providing an exceptional shopping experience. The project involved creating a scalable architecture that could support thousands of concurrent users and process millions of dollars in transactions.',
    image: '/assets/images/project/project-1.webp',
    gallery: [
      '/assets/images/project/project-1.webp',
      '/assets/images/project/project-2.webp',
      '/assets/images/project/project-3.webp'
    ],
    client: 'TechCorp Solutions',
    date: 'March 2024',
    duration: '6 months',
    team: '8 developers',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Docker'],
    features: [
      'Advanced product catalog with filtering and search',
      'Secure payment processing with multiple payment methods',
      'Real-time inventory management',
      'Customer account management and order tracking',
      'Admin dashboard for store management',
      'Mobile-responsive design',
      'SEO optimization',
      'Analytics and reporting'
    ],
    challenges: [
      'Handling high traffic during peak shopping seasons',
      'Ensuring PCI compliance for payment processing',
      'Optimizing database performance for large product catalogs',
      'Implementing real-time inventory updates'
    ],
    results: [
      '40% increase in conversion rate',
      '60% reduction in page load time',
      '99.9% uptime during peak traffic',
      '50% increase in average order value'
    ]
  },
  'mobile-banking-app': {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'A secure and user-friendly mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.',
    longDescription: 'This mobile banking app was developed to provide customers with a secure and convenient way to manage their finances on the go. The app includes advanced security features, real-time transaction processing, and an intuitive user interface.',
    image: '/assets/images/project/project-2.webp',
    gallery: [
      '/assets/images/project/project-2.webp',
      '/assets/images/project/project-1.webp',
      '/assets/images/project/project-3.webp'
    ],
    client: 'First National Bank',
    date: 'January 2024',
    duration: '8 months',
    team: '12 developers',
    technologies: ['React Native', 'Firebase', 'Node.js', 'PostgreSQL', 'Biometric Auth'],
    features: [
      'Biometric authentication (fingerprint and face ID)',
      'Real-time account balance and transaction history',
      'Money transfer and bill payment',
      'Investment tracking and management',
      'Push notifications for transactions',
      'ATM and branch locator',
      'Customer support chat',
      'Budget tracking and financial insights'
    ],
    challenges: [
      'Implementing bank-level security standards',
      'Ensuring cross-platform compatibility',
      'Handling sensitive financial data',
      'Integrating with legacy banking systems'
    ],
    results: [
      '95% user satisfaction rating',
      '70% increase in mobile transactions',
      'Zero security breaches',
      '4.8/5 app store rating'
    ]
  }
};

export default function PortfolioDetails({ params }: PortfolioDetailsProps) {
  const project = projectData[params.slug];
  
  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Portfolio', href: '/portfolio' },
    { label: project.title }
  ];

  return (
    <>
      {/* Breadcrumb */}
      <Section background="gray" padding="sm">
        <Container>
          <Breadcrumb items={breadcrumbItems} />
        </Container>
      </Section>

      {/* Hero Section */}
      <Section background="white" padding="xl">
        <Container>
          <div className="mb-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                  {project.category}
                </span>
                <span className="text-gray-500 text-sm">{project.date}</span>
              </div>
              
              <Heading level={1} className="mb-6">
                {project.title}
              </Heading>
              
              <Text size="lg" color="secondary" className="mb-8">
                {project.description}
              </Text>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <Text size="sm" color="secondary" className="mb-1">Client</Text>
                  <Text className="font-medium">{project.client}</Text>
                </div>
                <div>
                  <Text size="sm" color="secondary" className="mb-1">Duration</Text>
                  <Text className="font-medium">{project.duration}</Text>
                </div>
                <div>
                  <Text size="sm" color="secondary" className="mb-1">Team Size</Text>
                  <Text className="font-medium">{project.team}</Text>
                </div>
                <div>
                  <Text size="sm" color="secondary" className="mb-1">Category</Text>
                  <Text className="font-medium">{project.category}</Text>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Start Similar Project
              </Button>
            </div>
            
            <div className="relative">
              <Image 
                src={project.image} 
                alt={project.title} 
                width={600} 
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Details */}
      <Section background="gray" padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Heading level={2} className="mb-6">
                Project Overview
              </Heading>
              <Text color="secondary" className="mb-8">
                {project.longDescription}
              </Text>
              
              <Heading level={3} className="mb-6">
                Key Features
              </Heading>
              <ul className="space-y-3 mb-8">
                {project.features.map((feature: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <Text>{feature}</Text>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Heading level={3} className="mb-6">
                  Project Info
                </Heading>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <Text size="sm" color="secondary">Date</Text>
                      <Text className="font-medium">{project.date}</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <Text size="sm" color="secondary">Client</Text>
                      <Text className="font-medium">{project.client}</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Tag className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <Text size="sm" color="secondary">Category</Text>
                      <Text className="font-medium">{project.category}</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Challenges & Results */}
      <Section background="white" padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Heading level={2} className="mb-6">
                Challenges
              </Heading>
              <ul className="space-y-4">
                {project.challenges.map((challenge: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0 mt-2" />
                    <Text>{challenge}</Text>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <Heading level={2} className="mb-6">
                Results
              </Heading>
              <ul className="space-y-4">
                {project.results.map((result: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0 mt-2" />
                    <Text>{result}</Text>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="text-center">
            <Heading level={2} className="mb-6 text-white">
              Ready to Start Your Project?
            </Heading>
            <Text size="lg" color="white" className="mb-8 text-blue-100 max-w-2xl mx-auto">
              Let's discuss your project requirements and create something amazing together.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Start a Project
              </Button>
              <Button
                href="/portfolio"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                View More Projects
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}