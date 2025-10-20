'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ExternalLink, Eye } from 'lucide-react';
import Breadcrumb from '@/components/common/Breadcrumb';
import HeroSection from '@/components/sections/HeroSection';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  const breadcrumbItems = [
    { label: 'Portfolio' }
  ];

  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'branding', label: 'Branding' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A comprehensive e-commerce solution with advanced features and modern design.',
      image: '/assets/images/project/project-1.webp',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '/portfolio/e-commerce-platform'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure and user-friendly mobile banking application with biometric authentication.',
      image: '/assets/images/project/project-2.webp',
      tags: ['React Native', 'Firebase', 'Security'],
      link: '/portfolio/mobile-banking-app'
    },
    {
      id: 3,
      title: 'Corporate Website',
      category: 'web',
      description: 'Modern corporate website with CMS and multi-language support.',
      image: '/assets/images/project/project-3.webp',
      tags: ['Next.js', 'Strapi', 'i18n'],
      link: '/portfolio/corporate-website'
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'design',
      description: 'Intuitive dashboard design for SaaS application with data visualization.',
      image: '/assets/images/project/project-4.webp',
      tags: ['Figma', 'Design System', 'Analytics'],
      link: '/portfolio/saas-dashboard'
    },
    {
      id: 5,
      title: 'Brand Identity',
      category: 'branding',
      description: 'Complete brand identity design including logo, guidelines, and marketing materials.',
      image: '/assets/images/project/project-5.webp',
      tags: ['Logo Design', 'Brand Guidelines', 'Print'],
      link: '/portfolio/brand-identity'
    },
    {
      id: 6,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'Food delivery mobile application with real-time tracking and payment integration.',
      image: '/assets/images/project/project-6.webp',
      tags: ['Flutter', 'Google Maps', 'Payment'],
      link: '/portfolio/food-delivery-app'
    },
    {
      id: 7,
      title: 'Healthcare Portal',
      category: 'web',
      description: 'Patient management portal with appointment booking and telemedicine features.',
      image: '/assets/images/project/project-7.webp',
      tags: ['Vue.js', 'Express.js', 'PostgreSQL'],
      link: '/portfolio/healthcare-portal'
    },
    {
      id: 8,
      title: 'Fitness Tracker',
      category: 'mobile',
      description: 'Comprehensive fitness tracking app with workout plans and progress monitoring.',
      image: '/assets/images/project/project-8.webp',
      tags: ['React Native', 'HealthKit', 'Charts'],
      link: '/portfolio/fitness-tracker'
    },
    {
      id: 9,
      title: 'E-Learning Platform',
      category: 'web',
      description: 'Online learning platform with video streaming and interactive assessments.',
      image: '/assets/images/project/project-9.webp',
      tags: ['Angular', 'Node.js', 'AWS'],
      link: '/portfolio/e-learning-platform'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
        title="Our Portfolio"
        subtitle="Recent Work"
        description="Explore our portfolio of successful projects and see how we've helped businesses achieve their goals through innovative solutions."
        buttonText="View Projects"
        buttonHref="#portfolio"
        background="white"
        className="py-20"
      />

      {/* Portfolio Section */}
      <Section id="portfolio" background="gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4" align="center">
              Featured Projects
            </Heading>
            <Text size="lg" color="secondary" align="center" className="max-w-2xl mx-auto mb-8">
              Discover our latest work and see how we've transformed ideas into successful digital solutions.
            </Text>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={400} 
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Link
                        href={project.link}
                        className="p-3 bg-white rounded-full text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                      </Link>
                      <button className="p-3 bg-white rounded-full text-blue-600 hover:bg-blue-50 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                      {filters.find(f => f.id === project.category)?.label}
                    </span>
                  </div>
                  
                  <Heading level={3} className="mb-3">
                    {project.title}
                  </Heading>
                  
                  <Text color="secondary" className="mb-4">
                    {project.description}
                  </Text>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
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
                href="/about"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}