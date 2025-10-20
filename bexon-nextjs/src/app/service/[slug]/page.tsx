'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Users, Clock, Award } from 'lucide-react';
import Breadcrumb from '@/components/common/Breadcrumb';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface ServiceDetailsProps {
  params: {
    slug: string;
  };
}

const serviceData: { [key: string]: {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  process: Array<{
    step: string;
    description: string;
  }>;
} } = {
  'business-strategy': {
    title: 'Business Strategy',
    description: 'We help you develop comprehensive business strategies that drive growth and success in today\'s competitive market.',
    image: '/assets/images/service/service-1.webp',
    features: [
      'Strategic Planning & Analysis',
      'Market Research & Intelligence',
      'Competitive Analysis',
      'Growth Strategy Development',
      'Risk Assessment & Mitigation',
      'Performance Metrics & KPIs'
    ],
    benefits: [
      'Clear direction and roadmap for growth',
      'Improved decision-making processes',
      'Better resource allocation',
      'Enhanced competitive positioning',
      'Increased profitability and efficiency'
    ],
    process: [
      {
        step: 'Analysis',
        description: 'We analyze your current business situation, market position, and competitive landscape.'
      },
      {
        step: 'Strategy Development',
        description: 'Based on our analysis, we develop a customized strategy tailored to your specific needs.'
      },
      {
        step: 'Implementation Planning',
        description: 'We create a detailed implementation plan with clear milestones and timelines.'
      },
      {
        step: 'Execution Support',
        description: 'Our team provides ongoing support to ensure successful strategy execution.'
      }
    ]
  },
  'digital-transformation': {
    title: 'Digital Transformation',
    description: 'Transform your business with cutting-edge digital solutions and technologies that improve efficiency and drive growth.',
    image: '/assets/images/service/service-2.webp',
    features: [
      'Process Automation',
      'Cloud Migration & Management',
      'Data Analytics & Insights',
      'System Integration',
      'Digital Workflow Optimization',
      'Technology Infrastructure Setup'
    ],
    benefits: [
      'Increased operational efficiency',
      'Reduced manual processes',
      'Better data-driven decisions',
      'Improved customer experience',
      'Scalable technology foundation'
    ],
    process: [
      {
        step: 'Assessment',
        description: 'We evaluate your current technology stack and identify transformation opportunities.'
      },
      {
        step: 'Planning',
        description: 'We develop a comprehensive digital transformation roadmap.'
      },
      {
        step: 'Implementation',
        description: 'Our experts implement the new technologies and processes.'
      },
      {
        step: 'Optimization',
        description: 'We continuously monitor and optimize the digital solutions.'
      }
    ]
  }
};

export default function ServiceDetails({ params }: ServiceDetailsProps) {
  const service = serviceData[params.slug];
  
  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Services', href: '/service' },
    { label: service.title }
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={1} className="mb-6">
                {service.title}
              </Heading>
              <Text size="lg" color="secondary" className="mb-8">
                {service.description}
              </Text>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                >
                  Get Started
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image 
                src={service.image} 
                alt={service.title} 
                width={600} 
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section background="gray" padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Heading level={2} className="mb-6">
                What We Offer
              </Heading>
              <Text color="secondary" className="mb-8">
                Our comprehensive approach ensures that every aspect of your business strategy is carefully planned and executed.
              </Text>
              <ul className="space-y-4">
                {service.features.map((feature: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <Text>{feature}</Text>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <Heading level={2} className="mb-6">
                Key Benefits
              </Heading>
              <Text color="secondary" className="mb-8">
                Experience the positive impact of our strategic approach on your business performance and growth.
              </Text>
              <ul className="space-y-4">
                {service.benefits.map((benefit: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <ArrowRight className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <Text>{benefit}</Text>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
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
              We follow a proven methodology to ensure successful project delivery and maximum value for your business.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step: { step: string; description: string }, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <Heading level={4} className="mb-3">
                  {step.step}
                </Heading>
                <Text color="secondary">
                  {step.description}
                </Text>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="blue" padding="xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <Users className="w-12 h-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Clock className="w-12 h-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Award className="w-12 h-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="text-center">
            <Heading level={2} className="mb-6 text-white">
              Ready to Get Started?
            </Heading>
            <Text size="lg" color="white" className="mb-8 text-blue-100 max-w-2xl mx-auto">
              Contact us today to discuss how our {service.title.toLowerCase()} services can help your business grow.
            </Text>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Contact Us Now
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}