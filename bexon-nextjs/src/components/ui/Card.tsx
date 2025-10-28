'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  delay = 0,
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-lg overflow-hidden';
  const hoverClasses = hover ? 'hover:shadow-xl transition-shadow duration-300' : '';
  
  const cardClasses = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <div 
      className={cardClasses}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Card;