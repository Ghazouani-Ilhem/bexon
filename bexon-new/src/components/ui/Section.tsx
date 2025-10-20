import React from 'react';
import { cn } from '@/lib/utils';
import { SectionProps } from '@/types';

const Section: React.FC<SectionProps> = ({ 
  children, 
  background = 'white', 
  padding = 'lg', 
  className 
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-r from-blue-600 to-blue-800',
    dark: 'bg-gray-900',
  };
  
  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20',
  };
  
  return (
    <section className={cn(
      backgrounds[background],
      paddings[padding],
      className
    )}>
      {children}
    </section>
  );
};

export default Section;