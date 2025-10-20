'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '+1 (009) 544-7818',
      description: 'Mon-Fri 9am-6pm EST',
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'info@bexon.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      details: '993 Renner Burg, West Rond',
      description: 'MT 94251-030, United States',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      details: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM EST',
    },
  ];

  const subjects = [
    'General Inquiry',
    'Business Strategy',
    'Digital Transformation',
    'Technology Consulting',
    'Team Development',
    'Project Management',
    'Quality Assurance',
    'Other',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Get In Touch"
        subtitle="Contact Us"
        description="Ready to transform your business? We'd love to hear from you. Get in touch with our team to discuss your needs and how we can help."
        buttonText="Call Us Now"
        buttonHref="tel:+10095447818"
      />

      {/* Contact Info */}
      <Section background="white" padding="xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-600 mb-4">
                  {info.icon}
                </div>
                <Heading level={4} className="mb-2">
                  {info.title}
                </Heading>
                <Text className="mb-2 font-medium">
                  {info.details}
                </Text>
                <Text size="sm" color="secondary">
                  {info.description}
                </Text>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Form and Map */}
      <Section background="gray" padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Heading level={2} className="mb-6">
                Send Us a Message
              </Heading>
              <Text color="secondary" className="mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </Text>
              
              {isSubmitted ? (
                <Card className="p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <Heading level={3} className="mb-4 text-green-600">
                    Message Sent Successfully!
                  </Heading>
                  <Text color="secondary">
                    Thank you for your message. We'll get back to you within 24 hours.
                  </Text>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
            
            {/* Map */}
            <div>
              <Heading level={2} className="mb-6">
                Find Us
              </Heading>
              <Text color="secondary" className="mb-6">
                Visit our office or get directions to our location.
              </Text>
              
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <Text color="secondary">
                    Interactive Map
                  </Text>
                  <Text size="sm" color="secondary">
                    (Map integration would go here)
                  </Text>
                </div>
              </div>
              
              <div className="mt-6 p-6 bg-blue-50 rounded-lg">
                <Heading level={4} className="mb-4">
                  Office Information
                </Heading>
                <div className="space-y-2">
                  <Text size="sm">
                    <strong>Address:</strong> 993 Renner Burg, West Rond, MT 94251-030
                  </Text>
                  <Text size="sm">
                    <strong>Phone:</strong> +1 (009) 544-7818
                  </Text>
                  <Text size="sm">
                    <strong>Email:</strong> info@bexon.com
                  </Text>
                  <Text size="sm">
                    <strong>Hours:</strong> Mon-Fri 9am-6pm EST
                  </Text>
                </div>
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
              Ready to Get Started?
            </Heading>
            <Text size="lg" color="white" className="mb-8 text-blue-100 max-w-2xl mx-auto">
              Don't wait to transform your business. Contact us today and let's discuss how we can help you achieve your goals.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="tel:+10095447818"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Call Us Now
              </Button>
              <Button
                href="/service"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                View Our Services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}