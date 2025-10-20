'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Award, ArrowDown } from 'lucide-react';
import FeatureCard from '@/components/sections/FeatureCard';
import ClientLogo from '@/components/sections/ClientLogo';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Grid from '@/components/ui/Grid';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovative Solutions',
      description: 'We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Award-Winning Expertise',
      description: 'Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Dedicated Support',
      description: 'Our team is always available to address your concerns, providing quick and effective solution to keep your business.',
    },
  ];

  const clients = [
    { src: '/assets/images/brands/brand-1.webp', alt: 'Brand 1' },
    { src: '/assets/images/brands/brand-2.webp', alt: 'Brand 2' },
    { src: '/assets/images/brands/brand-3.webp', alt: 'Brand 3' },
    { src: '/assets/images/brands/brand-4.webp', alt: 'Brand 4' },
    { src: '/assets/images/brands/brand-5.webp', alt: 'Brand 5' },
    { src: '/assets/images/brands/brand-6.webp', alt: 'Brand 6' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/assets/images/shape/pattern-bg.webp" 
            alt="Pattern" 
            fill
            className="object-cover"
          />
        </div>
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4"
              >
                <span className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  Recognized for Excellence
                </span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Heading
                  level={1}
                  className="mb-6 text-white"
                >
                  Driving Excellence Through Evolution and <span className="text-yellow-400">Trust.</span>
                </Heading>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
              <Text
                size="lg"
                color="white"
                className="mb-8 text-blue-100"
              >
                  Represents growth, expansion, and modern business solution present growth, expansion.
                </Text>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center space-x-4"
              >
                <Button
                  href="/about"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Learn More
                </Button>
                <Link
                  href="#choose"
                  className="flex items-center text-white hover:text-yellow-400 transition-colors"
                >
                  <ArrowDown className="w-5 h-5 mr-2" />
                  Scroll Down
                </Link>
              </motion.div>
            </div>

            {/* Right Content */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <Image 
                  src="/assets/images/hero/hero-img.webp" 
                  alt="Hero Image" 
                  width={600} 
                  height={500}
                  className="rounded-lg shadow-2xl"
                  priority
                />
                
                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -bottom-8 -left-8 bg-white rounded-lg p-6 shadow-xl"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-2">
                      <Image src="/assets/images/testimonial/client-1.webp" alt="Client 1" width={40} height={40} className="rounded-full border-2 border-white" />
                      <Image src="/assets/images/testimonial/client-2.webp" alt="Client 2" width={40} height={40} className="rounded-full border-2 border-white" />
                      <Image src="/assets/images/testimonial/client-3.webp" alt="Client 3" width={40} height={40} className="rounded-full border-2 border-white" />
                      <div className="w-10 h-10 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center text-white font-bold">
                        +
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">30K</div>
                      <div className="text-sm text-gray-600">Happy customers worldwide</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <Section id="choose" background="gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Choose the Best
              </span>
            </motion.div>
            
            <Heading level={2} className="mb-4" align="center">
              Empowering Business with <span className="text-blue-600">Expertise.</span>
            </Heading>
            <Text size="lg" color="secondary" align="center" className="max-w-2xl mx-auto">
              We provide comprehensive solutions that help your business grow and succeed in today's competitive market.
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

      {/* Client Logos Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <Heading level={3} className="mb-4" align="center">
              Join Over <span className="text-blue-600">1000+</span> Companies with <span className="text-blue-600">Bexon</span> Here
            </Heading>
          </div>
          
          <Grid cols={6} gap="md">
            {clients.map((client, index) => (
              <ClientLogo
                key={index}
                src={client.src}
                alt={client.alt}
                delay={index * 0.1}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="mb-6 text-white">
                Let's Build Future Together.
              </Heading>
              <Text size="lg" color="white" className="mb-8 text-blue-100">
                Ready to take your business to the next level? Contact us today and let's discuss how we can help you achieve your goals.
              </Text>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Get Started Now
              </Button>
            </div>
            <div className="relative">
              <Image 
                src="/assets/images/cta/cta-bg.webp" 
                alt="CTA Background" 
                width={600} 
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}