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
  BarChart3,
  Zap,
  Globe
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

export default function ServicePage() {
  const services = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Business Strategy',
      description: 'Comprehensive strategic planning to drive your business forward and achieve sustainable growth.',
      features: ['Market Analysis', 'Competitive Positioning', 'Growth Planning', 'Risk Assessment'],
      image: '/assets/images/services/business-strategy.webp',
      slug: 'business-strategy',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge digital solutions and innovative technology.',
      features: ['Technology Integration', 'Process Automation', 'Data Analytics', 'Cloud Migration'],
      image: '/assets/images/services/digital-transformation.webp',
      slug: 'digital-transformation',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Team Development',
      description: 'Build and nurture high-performing teams for sustainable success and organizational growth.',
      features: ['Leadership Training', 'Skill Development', 'Team Building', 'Performance Management'],
      image: '/assets/images/services/team-development.webp',
      slug: 'team-development',
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Technology Consulting',
      description: 'Expert guidance on technology decisions and implementation strategies for your business.',
      features: ['Tech Assessment', 'Architecture Design', 'Implementation Planning', 'Support & Maintenance'],
      image: '/assets/images/services/technology-consulting.webp',
      slug: 'technology-consulting',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Project Management',
      description: 'Efficient project delivery with proven methodologies and experienced project managers.',
      features: ['Agile Methodology', 'Resource Planning', 'Timeline Management', 'Quality Control'],
      image: '/assets/images/services/project-management.webp',
      slug: 'project-management',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Quality Assurance',
      description: 'Ensure the highest quality standards with our rigorous QA processes and methodologies.',
      features: ['Testing Strategies', 'Quality Metrics', 'Process Improvement', 'Compliance'],
      image: '/assets/images/services/quality-assurance.webp',
      slug: 'quality-assurance',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We start by understanding your business, challenges, and goals through comprehensive analysis.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Based on our findings, we develop a customized strategy tailored to your specific needs.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with precision and attention to detail.',
    },
    {
      step: '04',
      title: 'Monitoring & Optimization',
      description: 'We continuously monitor progress and optimize for maximum results and ROI.',
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="h-6 w-6" />,
      title: '15+ Years Experience',
      description: 'Over a decade of proven expertise in business transformation.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Expert Team',
      description: 'Certified professionals with deep industry knowledge.',
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Proven Results',
      description: '500+ successful projects and 99% client satisfaction.',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global Reach',
      description: 'Serving clients across 25+ countries worldwide.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="What We Offer"
        description="We provide comprehensive business solutions designed to help you achieve your goals and drive sustainable growth. Our expert team delivers results that matter."
        buttonText="Get Started"
        buttonHref="/contact"
      />

      {/* Services Grid */}
      <Section background="white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-6" align="center">
              Comprehensive Business Solutions
            </Heading>
            <Text size="lg" color="secondary" align="center" className="max-w-3xl mx-auto">
              From strategy to implementation, we offer end-to-end services that transform your business and drive measurable results.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <Heading level={3} className="mb-4">
                      {service.title}
                    </Heading>
                    <Text color="secondary" className="mb-6">
                      {service.description}
                    </Text>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <Text size="sm">{feature}</Text>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    href={`/service/${service.slug}`}
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section background="gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-6" align="center">
              Our Process
            </Heading>
            <Text size="lg" color="secondary" align="center" className="max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and maximum value for your business.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-300 transform translate-x-4"></div>
                  )}
                </div>
                <Heading level={4} className="mb-4">
                  {step.title}
                </Heading>
                <Text color="secondary">
                  {step.description}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section background="white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-6" align="center">
              Why Choose Bexon?
            </Heading>
            <Text size="lg" color="secondary" align="center" className="max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results for our clients.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-600 mb-4">
                  {item.icon}
                </div>
                <Heading level={4} className="mb-2">
                  {item.title}
                </Heading>
                <Text color="secondary" size="sm">
                  {item.description}
                </Text>
              </div>
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
              Let's discuss your needs and create a customized solution that drives real results for your business.
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