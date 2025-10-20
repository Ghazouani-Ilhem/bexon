import React from 'react';
import { cn } from '@/lib/utils';
import { HeadingProps } from '@/types';

const Heading: React.FC<HeadingProps> = ({ 
  children, 
  level, 
  className, 
  align = 'left' 
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  const baseClasses = 'font-bold text-gray-900';
  const alignClass = alignments[align];
  
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const sizeClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl lg:text-4xl',
    4: 'text-xl md:text-2xl lg:text-3xl',
    5: 'text-lg md:text-xl lg:text-2xl',
    6: 'text-base md:text-lg lg:text-xl',
  };
  
  return (
    <Tag className={cn(baseClasses, sizeClasses[level], alignClass, className)}>
      {children}
    </Tag>
  );
};

export default Heading;