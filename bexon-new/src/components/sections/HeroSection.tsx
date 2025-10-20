import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonHref,
  backgroundImage,
  className = '',
}) => {
  return (
    <section 
      className={`relative py-20 lg:py-32 ${className}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      )}
      
      <Container>
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {subtitle && (
              <Text 
                color={backgroundImage ? 'white' : 'secondary'} 
                className="mb-4 text-lg font-medium"
              >
                {subtitle}
              </Text>
            )}
            
            <Heading 
              level={1} 
              className={`mb-6 ${backgroundImage ? 'text-white' : ''}`}
            >
              {title}
            </Heading>
            
            <Text 
              color={backgroundImage ? 'white' : 'secondary'} 
              size="lg" 
              className="mb-8 max-w-3xl mx-auto"
            >
              {description}
            </Text>
            
            {buttonText && buttonHref && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Button
                  href={buttonHref}
                  variant="primary"
                  size="lg"
                  className={backgroundImage ? 'bg-white text-blue-600 hover:bg-gray-100' : ''}
                >
                  {buttonText}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;