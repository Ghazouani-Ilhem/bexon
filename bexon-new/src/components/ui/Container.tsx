import React from 'react';
import { cn } from '@/lib/utils';
import { ContainerProps } from '@/types';

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className, 
  size = 'lg' 
}) => {
  const sizes = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };
  
  return (
    <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)}>
      {children}
    </div>
  );
};

export default Container;