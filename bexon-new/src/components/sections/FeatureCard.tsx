import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import { FeatureCardProps } from '@/types';

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="h-full p-8 text-center hover:shadow-xl transition-shadow duration-300">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full text-blue-600">
            {icon}
          </div>
        </div>
        
        <Heading level={3} className="mb-4">
          {title}
        </Heading>
        
        <Text color="secondary">
          {description}
        </Text>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;