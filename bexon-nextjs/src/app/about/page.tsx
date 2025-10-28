'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Target, Award } from 'lucide-react';
import Breadcrumb from '@/components/common/Breadcrumb';
import HeroSection from '@/components/sections/HeroSection';
import FeatureCard from '@/components/sections/FeatureCard';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Grid from '@/components/ui/Grid';
import Image from 'next/image';

export default function About() {
  const breadcrumbItems = [
    { label: 'About Us' }
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Our Mission',
      description: 'To empower businesses with innovative solutions that drive growth and success in the digital age.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Our Vision',
      description: 'To be the leading provider of business solutions that transform how companies operate and compete.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Our Values',
      description: 'Excellence, integrity, innovation, and customer satisfaction are the core values that guide everything we do.',
    },
  ];

  const stats = [
    { number: '1000+', label: 'Projects Completed' },
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '10+', label: 'Years Experience' },
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
        title="About Bexon"
        subtitle="Who We Are"
        description="We are a leading business solutions provider dedicated to helping companies achieve their goals through innovative technology and exceptional service."
        buttonText="Contact Us"
        buttonHref="/contact"
        background="white"
        className="py-20"
      />

      {/* About Content */}
      <Section background="white" padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="mb-6">
                We're Building the Future of Business
              </Heading>
              <Text size="lg" color="secondary" className="mb-6">
                At Bexon, we believe that every business has the potential to achieve extraordinary success. 
                Our mission is to unlock that potential through innovative solutions, cutting-edge technology, 
                and unwavering commitment to excellence.
              </Text>
              <Text color="secondary" className="mb-8">
                Since our founding, we've helped hundreds of companies transform their operations, 
                streamline their processes, and achieve unprecedented growth. Our team of experts 
                brings together decades of experience across various industries, ensuring that 
                every solution we deliver is tailored to your specific needs.
              </Text>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <Text>Proven track record of success</Text>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <Text>Industry-leading expertise</Text>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <Text>24/7 customer support</Text>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <Text>Cutting-edge technology</Text>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="/assets/images/about/about-img.webp" 
                alt="About Us" 
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
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4" align="center">
              Why Choose Bexon
            </Heading>
            <Text size="lg" color="secondary" align="center" className="max-w-2xl mx-auto">
              We combine industry expertise with innovative solutions to deliver exceptional results for our clients.
            </Text>
          </div>
          
          <Grid cols={3} gap="lg">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="blue" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4 text-white" align="center">
              Our Impact
            </Heading>
            <Text size="lg" color="white" align="center" className="max-w-2xl mx-auto">
              Numbers that speak to our success and commitment to excellence.
            </Text>
          </div>
          
          <Grid cols={4} gap="lg">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}