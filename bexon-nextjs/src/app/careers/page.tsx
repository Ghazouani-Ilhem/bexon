'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, ArrowRight, Search } from 'lucide-react';
import Breadcrumb from '@/components/common/Breadcrumb';
import HeroSection from '@/components/sections/HeroSection';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function Careers() {
  const breadcrumbItems = [
    { label: 'Careers' }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', label: 'All Departments' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'design', label: 'Design' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'sales', label: 'Sales' },
    { id: 'operations', label: 'Operations' }
  ];

  const locations = [
    { id: 'all', label: 'All Locations' },
    { id: 'new-york', label: 'New York' },
    { id: 'san-francisco', label: 'San Francisco' },
    { id: 'remote', label: 'Remote' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'engineering',
      location: 'New York',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'We are looking for a talented Senior Frontend Developer to join our engineering team and help build amazing user experiences.',
      requirements: [
        '3+ years of experience with React, Vue.js, or Angular',
        'Strong knowledge of HTML, CSS, and JavaScript',
        'Experience with modern build tools and workflows',
        'Familiarity with RESTful APIs and GraphQL',
        'Experience with version control systems (Git)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      slug: 'senior-frontend-developer'
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'design',
      location: 'San Francisco',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Join our design team to create beautiful and intuitive user experiences that delight our customers.',
      requirements: [
        '2+ years of UX/UI design experience',
        'Proficiency in Figma, Sketch, or Adobe Creative Suite',
        'Strong portfolio demonstrating design thinking',
        'Experience with user research and testing',
        'Knowledge of design systems and accessibility'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      slug: 'ux-ui-designer'
    },
    {
      id: 3,
      title: 'Digital Marketing Manager',
      department: 'marketing',
      location: 'Remote',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Lead our digital marketing efforts and help grow our brand presence across multiple channels.',
      requirements: [
        '4+ years of digital marketing experience',
        'Expertise in SEO, SEM, and social media marketing',
        'Experience with marketing automation tools',
        'Strong analytical and reporting skills',
        'Bachelor\'s degree in Marketing or related field'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      slug: 'digital-marketing-manager'
    },
    {
      id: 4,
      title: 'Sales Development Representative',
      department: 'sales',
      location: 'New York',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Help us grow our business by identifying and qualifying new sales opportunities.',
      requirements: [
        '1+ years of sales or business development experience',
        'Excellent communication and interpersonal skills',
        'Experience with CRM systems (Salesforce preferred)',
        'Strong organizational and time management skills',
        'Bachelor\'s degree preferred'
      ],
      benefits: [
        'Competitive salary and commission',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      slug: 'sales-development-representative'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'San Francisco',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Help us build and maintain our cloud infrastructure and deployment pipelines.',
      requirements: [
        '3+ years of DevOps or infrastructure experience',
        'Experience with AWS, Azure, or Google Cloud',
        'Knowledge of containerization (Docker, Kubernetes)',
        'Experience with CI/CD pipelines',
        'Strong scripting skills (Python, Bash, etc.)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      slug: 'devops-engineer'
    },
    {
      id: 6,
      title: 'Product Manager',
      department: 'operations',
      location: 'Remote',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Lead product strategy and work with cross-functional teams to deliver exceptional products.',
      requirements: [
        '4+ years of product management experience',
        'Strong analytical and problem-solving skills',
        'Experience with agile development methodologies',
        'Excellent communication and leadership skills',
        'MBA or technical background preferred'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      slug: 'product-manager'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location.toLowerCase().replace(' ', '-') === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Great Team',
      description: 'Work with talented and passionate people who are committed to excellence.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and unlimited PTO to help you maintain a healthy balance.'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Remote Friendly',
      description: 'Work from anywhere with our fully remote and hybrid work options.'
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
        title="Join Our Team"
        subtitle="Build the Future with Us"
        description="We're looking for talented individuals who share our passion for excellence and innovation. Join us in building solutions that make a difference."
        buttonText="View Open Positions"
        buttonHref="#job-openings"
        background="white"
        className="py-20"
      />

      {/* Benefits Section */}
      <Section background="gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4" align="center">
              Why Work at Bexon?
            </Heading>
            <Text size="lg" color="secondary" align="center" className="max-w-2xl mx-auto">
              We offer more than just a job - we provide an environment where you can grow, learn, and make a real impact.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <Heading level={3} className="mb-3">
                  {benefit.title}
                </Heading>
                <Text color="secondary">
                  {benefit.description}
                </Text>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Job Openings */}
      <Section id="job-openings" background="white" padding="xl">
        <Container>
          <div className="text-center mb-12">
            <Heading level={2} className="mb-4" align="center">
              Open Positions
            </Heading>
            <Text size="lg" color="secondary" align="center" className="max-w-2xl mx-auto mb-8">
              Find the perfect role that matches your skills and career goals.
            </Text>
            
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.label}
                  </option>
                ))}
              </select>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Jobs List */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <Heading level={3} className="mb-2">
                      {job.title}
                    </Heading>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <Button
                    href={`/careers/${job.slug}`}
                    variant="outline"
                    size="md"
                    className="mt-4 md:mt-0"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                
                <Text color="secondary" className="mb-4">
                  {job.description}
                </Text>
                
                <div className="flex flex-wrap gap-2">
                  {job.requirements.slice(0, 3).map((req, reqIndex) => (
                    <span
                      key={reqIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {req}
                    </span>
                  ))}
                  {job.requirements.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      +{job.requirements.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Text size="lg" color="secondary">
                No job openings found matching your criteria.
              </Text>
            </div>
          )}
        </Container>
      </Section>

      {/* Culture Section */}
      <Section background="gray" padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="mb-6">
                Our Culture
              </Heading>
              <Text size="lg" color="secondary" className="mb-6">
                At Bexon, we believe that our people are our greatest asset. We foster a culture of collaboration, innovation, and continuous learning.
              </Text>
              <Text color="secondary" className="mb-8">
                We're committed to creating an inclusive environment where everyone can thrive and contribute their unique perspectives and talents.
              </Text>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <div>
                    <Text className="font-medium mb-1">Inclusive Environment</Text>
                    <Text size="sm" color="secondary">We value diversity and create an inclusive workplace for all</Text>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <div>
                    <Text className="font-medium mb-1">Continuous Learning</Text>
                    <Text size="sm" color="secondary">We invest in your growth with learning opportunities and development programs</Text>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <div>
                    <Text className="font-medium mb-1">Innovation Focus</Text>
                    <Text size="sm" color="secondary">We encourage creative thinking and support innovative ideas</Text>
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
              Don't See the Right Role?
            </Heading>
            <Text size="lg" color="white" className="mb-8 text-blue-100 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Send Resume
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