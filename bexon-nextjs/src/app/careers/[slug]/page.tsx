'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/common/Breadcrumb';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CareerDetailsProps {
  params: {
    slug: string;
  };
}

const jobData: { [key: string]: {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  longDescription: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  skills: string[];
  postedDate: string;
  applicationDeadline: string;
} } = {
  'senior-frontend-developer': {
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'New York, NY',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '$90,000 - $120,000',
    description: 'We are looking for a talented Senior Frontend Developer to join our engineering team and help build amazing user experiences that delight our customers.',
    longDescription: 'As a Senior Frontend Developer at Bexon, you will be responsible for building and maintaining our web applications using modern frontend technologies. You will work closely with our design team to implement beautiful and responsive user interfaces, and collaborate with backend developers to integrate with our APIs.\n\nThis role offers the opportunity to work on exciting projects, mentor junior developers, and contribute to our technical architecture decisions. You will be part of a collaborative team that values code quality, user experience, and continuous learning.',
    requirements: [
      '3+ years of experience with React, Vue.js, or Angular',
      'Strong knowledge of HTML, CSS, and JavaScript (ES6+)',
      'Experience with modern build tools and workflows (Webpack, Vite, etc.)',
      'Familiarity with RESTful APIs and GraphQL',
      'Experience with version control systems (Git)',
      'Knowledge of responsive design principles',
      'Experience with testing frameworks (Jest, Cypress, etc.)',
      'Strong problem-solving and debugging skills',
      'Excellent communication and collaboration skills',
      'Bachelor\'s degree in Computer Science or related field preferred'
    ],
    responsibilities: [
      'Develop and maintain responsive web applications using React',
      'Collaborate with designers to implement pixel-perfect UI designs',
      'Work with backend developers to integrate frontend with APIs',
      'Write clean, maintainable, and well-tested code',
      'Participate in code reviews and technical discussions',
      'Mentor junior developers and share knowledge with the team',
      'Stay up-to-date with the latest frontend technologies and best practices',
      'Contribute to technical architecture and tooling decisions'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work arrangements and remote work options',
      'Professional development budget for courses and conferences',
      '401(k) with company matching',
      'Unlimited PTO and paid holidays',
      'Top-of-the-line equipment and home office setup',
      'Team building events and company retreats',
      'Stock options and performance bonuses',
      'Learning and development opportunities'
    ],
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Git', 'Testing', 'API Integration'],
    postedDate: 'March 15, 2024',
    applicationDeadline: 'April 15, 2024'
  },
  'ux-ui-designer': {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '$75,000 - $95,000',
    description: 'Join our design team to create beautiful and intuitive user experiences that delight our customers and drive business success.',
    longDescription: 'As a UX/UI Designer at Bexon, you will be responsible for designing user interfaces and experiences for our web and mobile applications. You will work closely with product managers, developers, and other stakeholders to create designs that are both beautiful and functional.\n\nThis role offers the opportunity to work on diverse projects, from initial concept to final implementation, and to contribute to our design system and brand guidelines. You will be part of a creative team that values user-centered design and continuous improvement.',
    requirements: [
      '2+ years of UX/UI design experience',
      'Proficiency in Figma, Sketch, or Adobe Creative Suite',
      'Strong portfolio demonstrating design thinking and user-centered design',
      'Experience with user research and usability testing',
      'Knowledge of design systems and component libraries',
      'Understanding of accessibility principles and WCAG guidelines',
      'Experience with responsive design and mobile-first approaches',
      'Strong visual design skills and attention to detail',
      'Excellent communication and presentation skills',
      'Bachelor\'s degree in Design or related field preferred'
    ],
    responsibilities: [
      'Design user interfaces for web and mobile applications',
      'Conduct user research and usability testing',
      'Create wireframes, prototypes, and high-fidelity designs',
      'Collaborate with developers to ensure design implementation',
      'Contribute to and maintain our design system',
      'Present design concepts to stakeholders and gather feedback',
      'Stay up-to-date with design trends and best practices',
      'Work with product managers to define user requirements'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work arrangements and remote work options',
      'Professional development budget for courses and conferences',
      '401(k) with company matching',
      'Unlimited PTO and paid holidays',
      'Top-of-the-line equipment and design tools',
      'Team building events and company retreats',
      'Stock options and performance bonuses',
      'Learning and development opportunities'
    ],
    skills: ['Figma', 'Sketch', 'Adobe Creative Suite', 'User Research', 'Prototyping', 'Design Systems'],
    postedDate: 'March 12, 2024',
    applicationDeadline: 'April 12, 2024'
  }
};

export default function CareerDetails({ params }: CareerDetailsProps) {
  const job = jobData[params.slug];
  
  if (!job) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Careers', href: '/careers' },
    { label: job.title }
  ];

  return (
    <>
      {/* Breadcrumb */}
      <Section background="gray" padding="sm">
        <Container>
          <Breadcrumb items={breadcrumbItems} />
        </Container>
      </Section>

      {/* Job Header */}
      <Section background="white" padding="xl">
        <Container>
          <div className="mb-8">
            <Link
              href="/careers"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Careers
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Heading level={1} className="mb-4">
              {job.title}
            </Heading>
            
            <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-500">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {job.location}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {job.type}
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {job.experience}
              </span>
            </div>
            
            <Text size="lg" color="secondary" className="mb-8">
              {job.description}
            </Text>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Text size="sm" color="secondary" className="mb-1">Department</Text>
                  <Text className="font-medium">{job.department}</Text>
                </div>
                <div>
                  <Text size="sm" color="secondary" className="mb-1">Salary Range</Text>
                  <Text className="font-medium">{job.salary}</Text>
                </div>
                <div>
                  <Text size="sm" color="secondary" className="mb-1">Posted</Text>
                  <Text className="font-medium">{job.postedDate}</Text>
                </div>
              </div>
            </div>
            
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="mb-8"
            >
              Apply for this Position
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Job Details */}
      <Section background="gray" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Heading level={2} className="mb-6">
                  About the Role
                </Heading>
                <div className="prose prose-lg max-w-none">
                  {job.longDescription.split('\n\n').map((paragraph: string, index: number) => (
                    <Text key={index} color="secondary" className="mb-4">
                      {paragraph}
                    </Text>
                  ))}
                </div>
                
                <Heading level={3} className="mb-6 mt-12">
                  Key Responsibilities
                </Heading>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <Text>{responsibility}</Text>
                    </motion.li>
                  ))}
                </ul>
                
                <Heading level={3} className="mb-6 mt-12">
                  Requirements
                </Heading>
                <ul className="space-y-3">
                  {job.requirements.map((requirement: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0 mt-2" />
                      <Text>{requirement}</Text>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="bg-white rounded-lg p-6 shadow-lg sticky top-8">
                  <Heading level={3} className="mb-6">
                    Job Details
                  </Heading>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <Text size="sm" color="secondary" className="mb-1">Department</Text>
                      <Text className="font-medium">{job.department}</Text>
                    </div>
                    <div>
                      <Text size="sm" color="secondary" className="mb-1">Location</Text>
                      <Text className="font-medium">{job.location}</Text>
                    </div>
                    <div>
                      <Text size="sm" color="secondary" className="mb-1">Type</Text>
                      <Text className="font-medium">{job.type}</Text>
                    </div>
                    <div>
                      <Text size="sm" color="secondary" className="mb-1">Experience</Text>
                      <Text className="font-medium">{job.experience}</Text>
                    </div>
                    <div>
                      <Text size="sm" color="secondary" className="mb-1">Salary</Text>
                      <Text className="font-medium">{job.salary}</Text>
                    </div>
                    <div>
                      <Text size="sm" color="secondary" className="mb-1">Posted</Text>
                      <Text className="font-medium">{job.postedDate}</Text>
                    </div>
                    <div>
                      <Text size="sm" color="secondary" className="mb-1">Application Deadline</Text>
                      <Text className="font-medium">{job.applicationDeadline}</Text>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Text size="sm" color="secondary" className="mb-2">Required Skills</Text>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section background="white" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-8" align="center">
              What We Offer
            </Heading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {job.benefits.map((benefit: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <Text>{benefit}</Text>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="text-center">
            <Heading level={2} className="mb-6 text-white">
              Ready to Apply?
            </Heading>
            <Text size="lg" color="white" className="mb-8 text-blue-100 max-w-2xl mx-auto">
              Join our team and help us build the future of business solutions. We're excited to hear from you!
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Apply for this Position
              </Button>
              <Button
                href="/careers"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                View All Positions
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}