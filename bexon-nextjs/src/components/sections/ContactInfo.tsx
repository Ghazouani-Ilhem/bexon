'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Card from '../ui/Card';
import Heading from '../ui/Heading';
import Text from '../ui/Text';

interface ContactInfoProps {
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className = '' }) => {
  const contactItems = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+1 (009) 544-7818',
      href: 'tel:+10095447818',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'info@bexon.com',
      href: 'mailto:info@bexon.com',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      content: '993 Renner Burg, West Rond, MT 94251-030',
      href: null,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      href: null,
    },
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Heading level={3} className="mb-4">
          Get in Touch
        </Heading>
        <Text color="secondary" className="mb-8">
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </Text>
      </motion.div>

      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.content}</p>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;