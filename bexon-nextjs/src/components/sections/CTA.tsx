'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import Text from '../ui/Text';
import Container from '../ui/Container';

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  background?: 'blue' | 'gradient' | 'white';
  className?: string;
}

const CTA: React.FC<CTAProps> = ({
  title,
  description,
  buttonText,
  buttonHref,
  background = 'blue',
  className = '',
}) => {
  const backgroundClasses = {
    blue: 'bg-blue-600',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600',
    white: 'bg-white',
  };

  const textColor = background === 'white' ? 'text-gray-900' : 'text-white';
  const descriptionColor = background === 'white' ? 'text-gray-600' : 'text-blue-100';

  return (
    <section className={`py-20 ${backgroundClasses[background]} ${className}`}>
      <Container>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              level={2}
              className={`mb-6 ${textColor}`}
             
            >
              {title}
            </Heading>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text
              size="lg"
              className={`mb-8 max-w-2xl mx-auto ${descriptionColor}`}
             
            >
              {description}
            </Text>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              href={buttonHref}
              size="lg"
              variant={background === 'white' ? 'primary' : 'outline'}
              className={background === 'white' ? '' : 'border-white text-white hover:bg-white hover:text-blue-600'}
             
            >
              {buttonText}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;