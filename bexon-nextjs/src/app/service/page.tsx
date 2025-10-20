'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Target, Award, Lightbulb, Shield, Zap } from 'lucide-react';
import Breadcrumb from '@/components/common/Breadcrumb';
import HeroSection from '@/components/sections/HeroSection';
import FeatureCard from '@/components/sections/FeatureCard';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Grid from '@/components/ui/Grid';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function Service() {
  const breadcrumbItems = [
    { label: 'Services' }
  ];

  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Business Strategy',
      description: 'We help you develop comprehensive business strategies that drive growth and success.',
      features: ['Strategic Planning', 'Market Analysis', 'Competitive Intelligence', 'Growth Planning'],
      image: '/assets/images/service/service-1.webp'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'Transform your business with cutting-edge digital solutions and technologies.',
      features: ['Process Automation', 'Cloud Migration', 'Data Analytics', 'System Integration'],
      image: '/assets/images/service/service-2.webp'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Technology Consulting',
      description: 'Expert guidance on technology decisions that align with your business goals.',
      features: ['IT Strategy', 'Technology Assessment', 'Implementation Planning', 'Training & Support'],
      image: '/assets/images/service/service-3.webp'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Development',
      description: 'Build high-performing teams through targeted training and development programs.',
      features: ['Leadership Training', 'Skill Development', 'Team Building', 'Performance Management'],
      image: '/assets/images/service/service-4.webp'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Project Management',
      description: 'Deliver projects on time and within budget with our proven project management expertise.',
      features: ['Project Planning', 'Risk Management', 'Quality Assurance', 'Stakeholder Communication'],
      image: '/assets/images/service/service-5.webp'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Ensure the highest quality standards across all your business processes and deliverables.',
      features: ['Process Optimization', 'Quality Control', 'Compliance Management', 'Continuous Improvement'],
      image: '/assets/images/service/service-6.webp'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and challenges through detailed analysis.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Based on our findings, we develop a customized strategy tailored to your specific needs.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with precision and attention to detail.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'We continuously monitor and optimize the solution to ensure maximum performance.'
    }
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
      <HeroSection
        title="Our Services"
        subtitle="What We Offer"
        description="We provide comprehensive business solutions designed to help you achieve your goals and drive sustainable growth."
        buttonText="Get Started"
        buttonHref="/contact"
        background="white"
        className="py-20"
      />

      {/* Services Grid */}
      <Section background="gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4" align="center">
              Comprehensive Business Solutions
            </Heading>
            <Text size="lg" color="secondary" align="center" className="max-w-2xl mx-auto">
              From strategy to implementation, we offer end-to-end solutions that drive real business value.
            </Text>
          </div>
          
          <Grid cols={3} gap="lg">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <Heading level={3} className="mb-4">
                    {service.title}
                  </Heading>
                  <Text color="secondary" className="mb-6">
                    {service.description}
                  </Text>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <Text size="sm">{feature}</Text>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    href="/contact"
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Process Section */}
      <Section background="white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4" align="center">
              Our Process
            </Heading>
            <Text size="lg" color="secondary" align="center" className="max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <Heading level={4} className="mb-3">
                  {step.title}
                </Heading>
                <Text color="secondary">
                  {step.description}
                </Text>
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
              Ready to Transform Your Business?
            </Heading>
            <Text size="lg" color="white" className="mb-8 text-blue-100 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals and drive sustainable growth.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Get Free Consultation
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