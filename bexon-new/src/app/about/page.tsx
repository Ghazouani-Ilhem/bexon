import React from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  CheckCircle,
  Users,
  Award,
  Clock,
  TrendingUp
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import FeatureCard from '@/components/sections/FeatureCard';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Mission',
      description: 'To empower businesses with innovative solutions that drive growth, efficiency, and sustainable success in the digital age.',
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Vision',
      description: 'To be the leading partner for businesses seeking transformation, recognized globally for our expertise and results.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Values',
      description: 'Integrity, innovation, collaboration, and excellence guide everything we do, ensuring the highest quality service.',
    },
  ];

  const achievements = [
    '500+ Successful Projects',
    '15+ Years of Experience',
    '99% Client Satisfaction Rate',
    '50+ Industry Awards',
    'Global Presence in 25+ Countries',
    '24/7 Customer Support',
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: <Users className="h-6 w-6" /> },
    { number: '1000+', label: 'Projects Completed', icon: <Award className="h-6 w-6" /> },
    { number: '15+', label: 'Years Experience', icon: <Clock className="h-6 w-6" /> },
    { number: '99%', label: 'Client Satisfaction', icon: <TrendingUp className="h-6 w-6" /> },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="About Bexon"
        subtitle="Our Story"
        description="We are a team of passionate professionals dedicated to helping businesses achieve their full potential through innovative solutions and exceptional service."
        backgroundImage="/assets/images/about/about-hero.webp"
      />

      {/* Mission, Vision, Values */}
      <Section background="white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-6" align="center">
              Our Foundation
            </Heading>
            <Text size="lg" color="secondary" align="center" className="max-w-3xl mx-auto">
              Built on strong principles and driven by a clear purpose, we help businesses navigate the complexities of the modern world.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <FeatureCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* About Content */}
      <Section background="gray" padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="mb-6">
                Who We Are
              </Heading>
              <Text size="lg" color="secondary" className="mb-6">
                Founded in 2010, Bexon has grown from a small consulting firm to a global leader in business transformation. Our journey has been marked by continuous innovation, client success, and a commitment to excellence.
              </Text>
              <Text color="secondary" className="mb-8">
                We believe that every business has untapped potential. Our mission is to unlock that potential through strategic planning, innovative technology, and expert guidance. With over 15 years of experience and 500+ successful projects, we have the expertise and track record to help your business thrive.
              </Text>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <Text>{achievement}</Text>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/assets/images/about/about-image.webp"
                alt="About Bexon"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-6 text-white" align="center">
              Our Impact
            </Heading>
            <Text size="lg" color="white" align="center" className="max-w-3xl mx-auto text-blue-100">
              Numbers that speak to our commitment to excellence and client success.
            </Text>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section background="white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-6" align="center">
              Meet Our Team
            </Heading>
            <Text size="lg" color="secondary" align="center" className="max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience across various industries and disciplines.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="p-6 text-center">
                <img
                  src={`/assets/images/team/team-${index}.webp`}
                  alt={`Team Member ${index}`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <Heading level={4} className="mb-2">
                  Team Member {index}
                </Heading>
                <Text color="secondary" className="mb-4">
                  Position Title
                </Text>
                <Text size="sm" color="secondary">
                  Brief description of the team member's expertise and background.
                </Text>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/team" variant="primary" size="lg">
              View All Team Members
            </Button>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gray" padding="xl">
        <Container>
          <div className="text-center">
            <Heading level={2} className="mb-6" align="center">
              Ready to Work With Us?
            </Heading>
            <Text size="lg" color="secondary" className="mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business and achieve your goals.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Get In Touch
              </Button>
              <Button href="/service" variant="outline" size="lg">
                Our Services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}