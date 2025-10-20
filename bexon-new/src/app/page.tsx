import React from 'react';
import { 
  Target, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  Award,
  CheckCircle,
  ArrowRight,
  Play
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

export default function HomePage() {
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Strategic Planning',
      description: 'We help you develop comprehensive business strategies that drive growth and success.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Team Development',
      description: 'Build high-performing teams with our proven development and training programs.',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Growth Solutions',
      description: 'Accelerate your business growth with our innovative solutions and methodologies.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Risk Management',
      description: 'Protect your business with comprehensive risk assessment and mitigation strategies.',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Efficiency Optimization',
      description: 'Streamline your operations and improve productivity with our optimization services.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality Assurance',
      description: 'Ensure the highest quality standards with our rigorous QA processes and methodologies.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  const services = [
    {
      title: 'Business Strategy',
      description: 'Comprehensive strategic planning to drive your business forward.',
      features: ['Market Analysis', 'Competitive Positioning', 'Growth Planning', 'Risk Assessment'],
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge digital solutions.',
      features: ['Technology Integration', 'Process Automation', 'Data Analytics', 'Cloud Migration'],
    },
    {
      title: 'Team Development',
      description: 'Build and nurture high-performing teams for sustainable success.',
      features: ['Leadership Training', 'Skill Development', 'Team Building', 'Performance Management'],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Transform Your Business with Expert Solutions"
        subtitle="Welcome to Bexon"
        description="We are a leading provider of innovative business solutions, helping companies achieve growth through cutting-edge technology and exceptional service. Let us help you transform your business and reach new heights of success."
        buttonText="Get Started"
        buttonHref="/contact"
        backgroundImage="/assets/images/hero/hero-bg.webp"
      />

      {/* Features Section */}
      <Section background="white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-6" align="center">
              Why Choose Bexon?
            </Heading>
            <Text size="lg" color="secondary" align="center" className="max-w-3xl mx-auto">
              We provide comprehensive business solutions that help you achieve your goals and drive sustainable growth.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
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

      {/* Services Section */}
      <Section background="gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-6" align="center">
              Our Services
            </Heading>
            <Text size="lg" color="secondary" align="center" className="max-w-3xl mx-auto">
              We offer a comprehensive range of services to help your business thrive in today's competitive landscape.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8">
                <Heading level={3} className="mb-4">
                  {service.title}
                </Heading>
                <Text color="secondary" className="mb-6">
                  {service.description}
                </Text>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <Text size="sm">{feature}</Text>
                    </li>
                  ))}
                </ul>
                <Button href="/service" variant="outline" size="sm">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="xl">
        <Container>
          <div className="bg-blue-600 rounded-2xl p-12 text-center">
            <Heading level={2} className="mb-6 text-white">
              Ready to Transform Your Business?
            </Heading>
            <Text size="lg" color="white" className="mb-8 max-w-2xl mx-auto text-blue-100">
              Let's work together to create innovative solutions that drive your business forward. Contact us today to get started.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Get Started
              </Button>
              <Button
                href="/portfolio"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}