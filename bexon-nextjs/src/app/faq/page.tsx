'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Breadcrumb from '@/components/common/Breadcrumb';
import HeroSection from '@/components/sections/HeroSection';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';

export default function FAQ() {
  const breadcrumbItems = [
    { label: 'FAQ' }
  ];

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: 'General Questions',
      items: [
        {
          question: 'What services does Bexon offer?',
          answer: 'Bexon offers comprehensive business solutions including digital transformation, technology consulting, project management, team development, and quality assurance services. We help businesses of all sizes achieve their goals through innovative technology and exceptional service.'
        },
        {
          question: 'How long has Bexon been in business?',
          answer: 'Bexon was founded in 2010 and has been providing business solutions for over 14 years. We have successfully completed 1000+ projects and served 500+ clients worldwide.'
        },
        {
          question: 'What makes Bexon different from other consulting firms?',
          answer: 'Our unique approach combines industry expertise with cutting-edge technology. We focus on delivering measurable results, maintaining transparent communication, and building long-term partnerships with our clients. Our team of experts brings decades of experience across various industries.'
        },
        {
          question: 'Do you work with small businesses or only large enterprises?',
          answer: 'We work with businesses of all sizes, from startups to Fortune 500 companies. Our solutions are scalable and tailored to meet the specific needs and budget of each client, regardless of their size.'
        }
      ]
    },
    {
      title: 'Services & Solutions',
      items: [
        {
          question: 'What is digital transformation and why is it important?',
          answer: 'Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It\'s important because it helps businesses stay competitive, improve efficiency, and meet evolving customer expectations in today\'s digital world.'
        },
        {
          question: 'How long does a typical project take?',
          answer: 'Project duration varies depending on scope and complexity. Simple projects may take 2-4 weeks, while complex digital transformation initiatives can take 6-12 months. We provide detailed timelines during the planning phase and keep you updated throughout the project.'
        },
        {
          question: 'Do you provide ongoing support after project completion?',
          answer: 'Yes, we offer comprehensive post-project support including maintenance, updates, training, and optimization. Our support packages are designed to ensure your solutions continue to perform optimally and evolve with your business needs.'
        },
        {
          question: 'Can you help with legacy system integration?',
          answer: 'Absolutely. We specialize in integrating new technologies with existing legacy systems. Our team has extensive experience in creating seamless connections between old and new systems while minimizing disruption to your operations.'
        }
      ]
    },
    {
      title: 'Pricing & Payment',
      items: [
        {
          question: 'How do you price your services?',
          answer: 'Our pricing is based on project scope, complexity, and duration. We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. We provide detailed quotes after understanding your specific requirements.'
        },
        {
          question: 'Do you offer payment plans or financing options?',
          answer: 'Yes, we offer flexible payment options including milestone-based payments, monthly installments, and financing through our partner institutions. We work with you to find a payment structure that fits your budget.'
        },
        {
          question: 'Is there a minimum project size?',
          answer: 'We don\'t have a strict minimum project size. We work with clients on projects ranging from small consultations to large-scale transformations. Our goal is to provide value regardless of project size.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes, we offer free initial consultations to understand your needs and provide recommendations. This helps us both determine if we\'re a good fit and allows you to learn about our approach without any commitment.'
        }
      ]
    },
    {
      title: 'Technical Support',
      items: [
        {
          question: 'What technologies do you work with?',
          answer: 'We work with a wide range of technologies including cloud platforms (AWS, Azure, Google Cloud), programming languages (JavaScript, Python, Java, C#), frameworks (React, Angular, Vue.js, .NET), databases (SQL Server, MySQL, MongoDB), and many others. We stay current with the latest technologies and best practices.'
        },
        {
          question: 'Do you provide training for our team?',
          answer: 'Yes, we offer comprehensive training programs to help your team understand and effectively use the solutions we implement. Training can be conducted on-site, remotely, or through our online learning platform.'
        },
        {
          question: 'How do you ensure data security and compliance?',
          answer: 'We follow industry best practices for data security and compliance. Our team is certified in various security standards, and we implement robust security measures including encryption, access controls, and regular security audits. We also help ensure compliance with relevant regulations like GDPR, HIPAA, and SOX.'
        },
        {
          question: 'What happens if we encounter issues after implementation?',
          answer: 'We provide 24/7 support for critical issues and regular business hours support for non-critical matters. Our support team responds quickly and works to resolve issues efficiently. We also offer proactive monitoring to identify and address potential problems before they impact your business.'
        }
      ]
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
        title="Frequently Asked Questions"
        subtitle="Get Answers"
        description="Find answers to common questions about our services, processes, and how we can help your business succeed."
        buttonText="Contact Us"
        buttonHref="/contact"
        background="white"
        className="py-20"
      />

      {/* FAQ Section */}
      <Section background="gray" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <Heading level={2} className="mb-8 text-center">
                  {category.title}
                </Heading>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 10 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <Heading level={3} className="text-lg font-medium">
                            {item.question}
                          </Heading>
                          {isOpen ? (
                            <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          ) : (
                            <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          )}
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{ height: isOpen ? 'auto' : 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4">
                            <Text color="secondary">
                              {item.answer}
                            </Text>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="text-center">
            <Heading level={2} className="mb-6 text-white">
              Still Have Questions?
            </Heading>
            <Text size="lg" color="white" className="mb-8 text-blue-100 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help. Contact us for personalized assistance.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Contact Us
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
    </>
  );
}