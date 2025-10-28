'use client';

import React from 'react';
import Breadcrumb from '@/components/common/Breadcrumb';
import HeroSection from '@/components/sections/HeroSection';
import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Grid from '@/components/ui/Grid';

export default function Contact() {
  const breadcrumbItems = [
    { label: 'Contact Us' }
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
        title="Get in Touch"
        subtitle="Contact Us"
        description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        buttonText="Send Message"
        buttonHref="#contact-form"
        background="white"
        className="py-20"
      />

      {/* Contact Section */}
      <Section id="contact-form" background="gray" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4" align="center">
              Let's Start a Conversation
            </Heading>
            <Text size="lg" color="secondary" align="center" className="max-w-2xl mx-auto">
              Ready to take your business to the next level? Get in touch with our team of experts today.
            </Text>
          </div>
          
          <Grid cols={2} gap="lg">
            <ContactInfo />
            <ContactForm />
          </Grid>
        </Container>
      </Section>

      {/* Map Section */}
      <Section background="white" padding="none">
        <div className="h-96 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368459418!3d40.71312997932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sus!4v1625097656929!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bexon Office Location"
          />
        </div>
      </Section>
    </>
  );
}