'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import Text from '../ui/Text';
import Container from '../ui/Container';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage?: string;
  background?: 'white' | 'gradient' | 'image';
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonHref,
  backgroundImage,
  background = 'gradient',
  className = '',
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gradient: 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800',
    image: 'bg-cover bg-center bg-no-repeat',
  };

  return (
    <section 
      className={`relative min-h-screen flex items-center ${backgroundClasses[background]} ${className}`}
      style={backgroundImage && background === 'image' ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {backgroundImage && background !== 'image' && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      )}
      
      <Container className="relative z-10">
        <div className="text-center">
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Text
                size="lg"
                color="white"
                className="mb-4 uppercase tracking-wider"
              >
                {subtitle}
              </Text>
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Heading
              level={1}
              className="mb-6 text-white"
             
            >
              {title}
            </Heading>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Text
              size="lg"
              color="white"
              className="mb-8 max-w-2xl mx-auto"
             
            >
              {description}
            </Text>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              href={buttonHref}
              size="lg"
              className="tj-primary-btn"
             
            >
              {buttonText}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;