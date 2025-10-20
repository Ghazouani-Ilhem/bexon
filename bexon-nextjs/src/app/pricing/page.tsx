'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star } from 'lucide-react';
import Breadcrumb from '@/components/common/Breadcrumb';
import HeroSection from '@/components/sections/HeroSection';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Pricing() {
  const breadcrumbItems = [
    { label: 'Pricing' }
  ];

  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      monthlyPrice: 999,
      yearlyPrice: 9999,
      features: [
        'Up to 5 team members',
        'Basic project management',
        'Email support',
        'Standard templates',
        'Basic analytics',
        'Mobile app access'
      ],
      limitations: [
        'Limited integrations',
        'Basic reporting',
        'Standard security'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/contact'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      monthlyPrice: 1999,
      yearlyPrice: 19999,
      features: [
        'Up to 25 team members',
        'Advanced project management',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'API access',
        'Team collaboration tools',
        'Advanced security',
        'Custom integrations'
      ],
      limitations: [
        'Limited custom branding',
        'Standard training'
      ],
      popular: true,
      cta: 'Start Free Trial',
      href: '/contact'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      monthlyPrice: 4999,
      yearlyPrice: 49999,
      features: [
        'Unlimited team members',
        'Full project management suite',
        '24/7 dedicated support',
        'Custom development',
        'Advanced analytics & reporting',
        'Full API access',
        'Advanced collaboration tools',
        'Enterprise security',
        'Unlimited integrations',
        'Custom branding',
        'Dedicated account manager',
        'On-site training',
        'SLA guarantee'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact'
    }
  ];

  const addOns = [
    {
      name: 'Additional Team Members',
      description: 'Add more team members to your plan',
      price: 50,
      period: 'per user/month'
    },
    {
      name: 'Advanced Analytics',
      description: 'Get detailed insights and custom reports',
      price: 200,
      period: 'per month'
    },
    {
      name: 'Priority Support',
      description: 'Get faster response times and dedicated support',
      price: 150,
      period: 'per month'
    },
    {
      name: 'Custom Integrations',
      description: 'Connect with your existing tools and systems',
      price: 500,
      period: 'one-time setup'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay via invoice.'
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes, annual billing comes with a 17% discount compared to monthly billing, plus additional benefits.'
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
        title="Simple, Transparent Pricing"
        subtitle="Choose Your Plan"
        description="Select the perfect plan for your business needs. All plans include our core features with no hidden fees."
        buttonText="Start Free Trial"
        buttonHref="#pricing-plans"
        background="white"
        className="py-20"
      />

      {/* Billing Toggle */}
      <Section background="gray" padding="sm">
        <Container>
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Yearly
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing Plans */}
      <Section id="pricing-plans" background="gray" padding="xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <Card className={`h-full ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <Heading level={3} className="mb-2">
                        {plan.name}
                      </Heading>
                      <Text color="secondary" className="mb-4">
                        {plan.description}
                      </Text>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-blue-600">
                          ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                        </span>
                        <span className="text-gray-500 ml-2">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <Text size="sm" className="font-medium text-green-600">
                          Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                        </Text>
                      )}
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <Text size="sm">{feature}</Text>
                        </div>
                      ))}
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <div key={limitationIndex} className="flex items-center">
                          <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                          <Text size="sm" color="secondary">{limitation}</Text>
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      href={plan.href}
                      variant={plan.popular ? 'primary' : 'outline'}
                      size="lg"
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Add-ons */}
      <Section background="white" padding="xl">
        <Container>
          <div className="text-center mb-12">
            <Heading level={2} className="mb-4" align="center">
              Add-ons & Extensions
            </Heading>
            <Text size="lg" color="secondary" align="center" className="max-w-2xl mx-auto">
              Enhance your plan with additional features and services tailored to your needs.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="p-6 text-center">
                    <Heading level={4} className="mb-2">
                      {addon.name}
                    </Heading>
                    <Text color="secondary" className="mb-4 text-sm">
                      {addon.description}
                    </Text>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-blue-600">
                        ${addon.price}
                      </span>
                      <span className="text-gray-500 text-sm ml-1">
                        {addon.period}
                      </span>
                    </div>
                    <Button
                      href="/contact"
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      Add to Plan
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background="gray" padding="xl">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading level={2} className="mb-8 text-center">
              Pricing FAQ
            </Heading>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <Heading level={3} className="mb-3 text-lg">
                    {faq.question}
                  </Heading>
                  <Text color="secondary">
                    {faq.answer}
                  </Text>
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
              Ready to Get Started?
            </Heading>
            <Text size="lg" color="white" className="mb-8 text-blue-100 max-w-2xl mx-auto">
              Join thousands of businesses that trust Bexon to help them grow and succeed.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Start Free Trial
              </Button>
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}