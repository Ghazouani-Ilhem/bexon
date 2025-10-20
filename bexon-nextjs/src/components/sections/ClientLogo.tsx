'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ClientLogoProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

const ClientLogo: React.FC<ClientLogoProps> = ({
  src,
  alt,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className={`flex items-center justify-center p-4 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={120}
        height={60}
        className="opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
      />
    </motion.div>
  );
};

export default ClientLogo;