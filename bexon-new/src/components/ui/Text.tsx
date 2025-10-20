import React from 'react';
import { cn } from '@/lib/utils';
import { TextProps } from '@/types';

const Text: React.FC<TextProps> = ({ 
  children, 
  size = 'md', 
  color = 'primary', 
  className, 
  align = 'left' 
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  const colors = {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    muted: 'text-gray-500',
    white: 'text-white',
  };
  
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };
  
  return (
    <p className={cn(
      sizes[size], 
      colors[color], 
      alignments[align], 
      className
    )}>
      {children}
    </p>
  );
};

export default Text;