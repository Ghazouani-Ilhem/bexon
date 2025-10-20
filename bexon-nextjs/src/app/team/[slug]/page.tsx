'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Twitter, Mail, Award } from 'lucide-react';
import Breadcrumb from '@/components/common/Breadcrumb';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface TeamDetailsProps {
  params: {
    slug: string;
  };
}

const teamData: { [key: string]: {
  name: string;
  position: string;
  bio: string;
  longBio: string;
  image: string;
  social: {
    linkedin: string;
    twitter: string;
    email: string;
  };
  skills: string[];
  experience: string;
  education: string;
  location: string;
  joinDate: string;
  achievements: string[];
  certifications: string[];
} } = {
  'john-smith': {
    name: 'John Smith',
    position: 'CEO & Founder',
    bio: 'Visionary leader with over 15 years of experience in business strategy and digital transformation. John founded Bexon with the mission to help businesses achieve their full potential through innovative solutions and exceptional service.',
    longBio: 'John Smith is a visionary leader and entrepreneur with over 15 years of experience in business strategy and digital transformation. He founded Bexon in 2010 with the mission to help businesses achieve their full potential through innovative solutions and exceptional service.\n\nBefore founding Bexon, John held senior leadership positions at several Fortune 500 companies, where he led digital transformation initiatives that resulted in significant cost savings and improved operational efficiency. His expertise spans across multiple industries, including technology, healthcare, and financial services.\n\nJohn holds an MBA from Harvard Business School and a Bachelor\'s degree in Computer Science from MIT. He is a frequent speaker at industry conferences and has been featured in numerous publications for his insights on digital transformation and business strategy.\n\nUnder John\'s leadership, Bexon has grown from a small startup to a leading business solutions provider, serving clients across the globe. His commitment to excellence and innovation continues to drive the company\'s success.',
    image: '/assets/images/team/team-1.webp',
    social: {
      linkedin: 'https://linkedin.com/in/johnsmith',
      twitter: 'https://twitter.com/johnsmith',
      email: 'john@bexon.com'
    },
    skills: ['Strategic Planning', 'Leadership', 'Digital Transformation', 'Business Development', 'Team Building'],
    experience: '15+ years',
    education: 'MBA, Harvard Business School',
    location: 'New York, NY',
    joinDate: '2010',
    achievements: [
      'Founded Bexon in 2010',
      'Led 100+ successful digital transformation projects',
      'Featured in Forbes 30 Under 30',
      'Speaker at 50+ industry conferences',
      'Author of "Digital Transformation Guide"'
    ],
    certifications: [
      'Certified Management Consultant (CMC)',
      'Project Management Professional (PMP)',
      'Certified Information Systems Auditor (CISA)'
    ]
  },
  'sarah-johnson': {
    name: 'Sarah Johnson',
    position: 'Chief Technology Officer',
    bio: 'Technology expert passionate about innovation and building scalable solutions that drive business growth. Sarah leads our technology strategy and oversees all technical initiatives.',
    longBio: 'Sarah Johnson is a technology expert with over 12 years of experience in software development and technology leadership. As CTO, she leads our technology strategy and oversees all technical initiatives, ensuring that our solutions are built on cutting-edge technologies and best practices.\n\nBefore joining Bexon, Sarah worked as a Senior Software Architect at Google, where she led the development of several high-scale applications serving millions of users. Her expertise includes cloud architecture, microservices, and modern web technologies.\n\nSarah holds a Master\'s degree in Computer Science from Stanford University and a Bachelor\'s degree in Software Engineering from UC Berkeley. She is passionate about mentoring developers and has helped build several successful engineering teams.\n\nUnder Sarah\'s technical leadership, Bexon has developed innovative solutions that have helped our clients achieve significant improvements in performance, scalability, and user experience.',
    image: '/assets/images/team/team-2.webp',
    social: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson',
      email: 'sarah@bexon.com'
    },
    skills: ['Technology Strategy', 'Software Architecture', 'Team Leadership', 'Cloud Computing', 'DevOps'],
    experience: '12+ years',
    education: 'MS Computer Science, Stanford University',
    location: 'San Francisco, CA',
    joinDate: '2015',
    achievements: [
      'Led development of 50+ enterprise applications',
      'Built and managed engineering teams of 100+ developers',
      'Patented 3 innovative software solutions',
      'Open source contributor with 10k+ GitHub stars',
      'TechCrunch Disrupt speaker'
    ],
    certifications: [
      'AWS Certified Solutions Architect',
      'Google Cloud Professional Architect',
      'Certified Kubernetes Administrator (CKA)'
    ]
  }
};

export default function TeamDetails({ params }: TeamDetailsProps) {
  const member = teamData[params.slug];
  
  if (!member) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Team', href: '/team' },
    { label: member.name }
  ];

  return (
    <>
      {/* Breadcrumb */}
      <Section background="gray" padding="sm">
        <Container>
          <Breadcrumb items={breadcrumbItems} />
        </Container>
      </Section>

      {/* Member Header */}
      <Section background="white" padding="xl">
        <Container>
          <div className="mb-8">
            <Link
              href="/team"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Team
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="relative mb-6">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={300} 
                  height={300}
                  className="w-full h-80 object-cover rounded-lg shadow-xl"
                />
              </div>
              
              <div className="flex justify-center space-x-4 mb-6">
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Contact {member.name.split(' ')[0]}
              </Button>
            </div>
            
            <div className="lg:col-span-2">
              <Heading level={1} className="mb-4">
                {member.name}
              </Heading>
              
              <Text className="text-blue-600 text-xl font-medium mb-6">
                {member.position}
              </Text>
              
              <Text size="lg" color="secondary" className="mb-8">
                {member.bio}
              </Text>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <Text size="sm" color="secondary" className="mb-1">Experience</Text>
                  <Text className="font-medium">{member.experience}</Text>
                </div>
                <div>
                  <Text size="sm" color="secondary" className="mb-1">Education</Text>
                  <Text className="font-medium">{member.education}</Text>
                </div>
                <div>
                  <Text size="sm" color="secondary" className="mb-1">Location</Text>
                  <Text className="font-medium">{member.location}</Text>
                </div>
                <div>
                  <Text size="sm" color="secondary" className="mb-1">Joined Bexon</Text>
                  <Text className="font-medium">{member.joinDate}</Text>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Detailed Bio */}
      <Section background="gray" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              About {member.name}
            </Heading>
            <div className="prose prose-lg max-w-none">
              {member.longBio.split('\n\n').map((paragraph: string, index: number) => (
                <Text key={index} color="secondary" className="mb-4">
                  {paragraph}
                </Text>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Achievements and Certifications */}
      <Section background="white" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <Heading level={3} className="mb-6">
                  Key Achievements
                </Heading>
                <ul className="space-y-4">
                  {member.achievements.map((achievement: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <Award className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <Text>{achievement}</Text>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <Heading level={3} className="mb-6">
                  Certifications
                </Heading>
                <ul className="space-y-4">
                  {member.certifications.map((certification: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0 mt-2" />
                      <Text>{certification}</Text>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="text-center">
            <Heading level={2} className="mb-6 text-white">
              Work with {member.name.split(' ')[0]}
            </Heading>
            <Text size="lg" color="white" className="mb-8 text-blue-100 max-w-2xl mx-auto">
              Ready to work with our team of experts? Contact us today to discuss your project requirements.
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
                href="/team"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Meet the Team
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}