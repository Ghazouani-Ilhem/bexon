import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hover = true, 
  delay = 0,
  onClick 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      onClick={onClick}
      className={cn(
        'bg-white rounded-lg shadow-lg overflow-hidden',
        hover && 'hover:shadow-xl transition-shadow duration-300',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;