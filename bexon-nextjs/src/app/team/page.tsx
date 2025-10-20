'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import Breadcrumb from '@/components/common/Breadcrumb';
import HeroSection from '@/components/sections/HeroSection';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Team() {
  const breadcrumbItems = [
    { label: 'Our Team' }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO & Founder',
      bio: 'Visionary leader with over 15 years of experience in business strategy and digital transformation.',
      image: '/assets/images/team/team-1.webp',
      social: {
        linkedin: 'https://linkedin.com/in/johnsmith',
        twitter: 'https://twitter.com/johnsmith',
        email: 'john@bexon.com'
      },
      skills: ['Strategic Planning', 'Leadership', 'Digital Transformation'],
      slug: 'john-smith'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Chief Technology Officer',
      bio: 'Technology expert passionate about innovation and building scalable solutions that drive business growth.',
      image: '/assets/images/team/team-2.webp',
      social: {
        linkedin: 'https://linkedin.com/in/sarahjohnson',
        twitter: 'https://twitter.com/sarahjohnson',
        email: 'sarah@bexon.com'
      },
      skills: ['Technology Strategy', 'Software Architecture', 'Team Leadership'],
      slug: 'sarah-johnson'
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Head of Design',
      bio: 'Creative director focused on creating exceptional user experiences that combine aesthetics with functionality.',
      image: '/assets/images/team/team-3.webp',
      social: {
        linkedin: 'https://linkedin.com/in/michaelchen',
        twitter: 'https://twitter.com/michaelchen',
        email: 'michael@bexon.com'
      },
      skills: ['UI/UX Design', 'Brand Strategy', 'Creative Direction'],
      slug: 'michael-chen'
    },
    {
      id: 4,
      name: 'Emily Davis',
      position: 'Head of Marketing',
      bio: 'Marketing strategist with expertise in digital marketing, brand development, and customer engagement.',
      image: '/assets/images/team/team-4.webp',
      social: {
        linkedin: 'https://linkedin.com/in/emilydavis',
        twitter: 'https://twitter.com/emilydavis',
        email: 'emily@bexon.com'
      },
      skills: ['Digital Marketing', 'Brand Strategy', 'Content Marketing'],
      slug: 'emily-davis'
    },
    {
      id: 5,
      name: 'David Wilson',
      position: 'Lead Developer',
      bio: 'Full-stack developer with expertise in modern web technologies and cloud architecture.',
      image: '/assets/images/team/team-5.webp',
      social: {
        linkedin: 'https://linkedin.com/in/davidwilson',
        twitter: 'https://twitter.com/davidwilson',
        email: 'david@bexon.com'
      },
      skills: ['Full-Stack Development', 'Cloud Architecture', 'DevOps'],
      slug: 'david-wilson'
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      position: 'Project Manager',
      bio: 'Experienced project manager ensuring successful delivery of complex projects on time and within budget.',
      image: '/assets/images/team/team-6.webp',
      social: {
        linkedin: 'https://linkedin.com/in/lisaanderson',
        twitter: 'https://twitter.com/lisaanderson',
        email: 'lisa@bexon.com'
      },
      skills: ['Project Management', 'Agile Methodologies', 'Team Coordination'],
      slug: 'lisa-anderson'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '100+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' }
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
        title="Meet Our Team"
        subtitle="The People Behind Bexon"
        description="Our diverse team of experts brings together decades of experience across various industries, united by a shared passion for excellence and innovation."
        buttonText="Join Our Team"
        buttonHref="/careers"
        background="white"
        className="py-20"
      />

      {/* Team Stats */}
      <Section background="blue" padding="xl">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Members */}
      <Section background="gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4" align="center">
              Our Leadership Team
            </Heading>
            <Text size="lg" color="secondary" align="center" className="max-w-2xl mx-auto">
              Meet the talented individuals who lead our company and drive our success.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={400} 
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-3 bg-white rounded-full text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <Heading level={3} className="mb-2">
                    {member.name}
                  </Heading>
                  <Text className="text-blue-600 font-medium mb-3">
                    {member.position}
                  </Text>
                  <Text color="secondary" className="mb-4">
                    {member.bio}
                  </Text>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/team/${member.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Culture Section */}
      <Section background="white" padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="mb-6">
                Our Culture & Values
              </Heading>
              <Text size="lg" color="secondary" className="mb-6">
                At Bexon, we believe that our people are our greatest asset. We foster a culture of collaboration, innovation, and continuous learning.
              </Text>
              <Text color="secondary" className="mb-8">
                Our team is united by shared values that guide everything we do: excellence, integrity, innovation, and a commitment to our clients' success.
              </Text>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <div>
                    <Text className="font-medium mb-1">Excellence</Text>
                    <Text size="sm" color="secondary">We strive for the highest quality in everything we do</Text>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <div>
                    <Text className="font-medium mb-1">Innovation</Text>
                    <Text size="sm" color="secondary">We embrace new ideas and cutting-edge technologies</Text>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <div>
                    <Text className="font-medium mb-1">Collaboration</Text>
                    <Text size="sm" color="secondary">We work together to achieve common goals</Text>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <div>
                    <Text className="font-medium mb-1">Integrity</Text>
                    <Text size="sm" color="secondary">We conduct business with honesty and transparency</Text>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image 
                src="/assets/images/team/team-culture.webp" 
                alt="Team Culture" 
                width={600} 
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="text-center">
            <Heading level={2} className="mb-6 text-white">
              Join Our Team
            </Heading>
            <Text size="lg" color="white" className="mb-8 text-blue-100 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for excellence and innovation.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/careers"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                View Open Positions
              </Button>
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}