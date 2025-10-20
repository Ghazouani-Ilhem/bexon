import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Our History', href: '/history' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
    services: [
      { label: 'Business Strategy', href: '/service/business-strategy' },
      { label: 'Digital Transformation', href: '/service/digital-transformation' },
      { label: 'Technology Consulting', href: '/service/technology-consulting' },
      { label: 'Team Development', href: '/service/team-development' },
      { label: 'Project Management', href: '/service/project-management' },
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'White Papers', href: '/white-papers' },
      { label: 'FAQ', href: '/faq' },
    ],
    support: [
      { label: 'Help Center', href: '/help' },
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' },
      { label: 'Status', href: '/status' },
      { label: 'Contact Support', href: '/contact' },
    ],
  };

  const socialLinks = [
    { platform: 'Facebook', href: '#', icon: <Facebook className="h-5 w-5" /> },
    { platform: 'Twitter', href: '#', icon: <Twitter className="h-5 w-5" /> },
    { platform: 'LinkedIn', href: '#', icon: <Linkedin className="h-5 w-5" /> },
    { platform: 'Instagram', href: '#', icon: <Instagram className="h-5 w-5" /> },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center mb-6">
                <img 
                  src="/assets/images/logos/logo-white.webp" 
                  alt="Bexon Logo" 
                  className="h-8 w-auto"
                />
              </Link>
              <Text color="white" className="mb-6 max-w-md">
                We are a leading provider of innovative business solutions, helping companies achieve growth through cutting-edge technology and exceptional service.
              </Text>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-blue-400" />
                  <Text color="white" size="sm">+1 (009) 544-7818</Text>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-blue-400" />
                  <Text color="white" size="sm">info@bexon.com</Text>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-blue-400" />
                  <Text color="white" size="sm">993 Renner Burg, West Rond, MT 94251-030</Text>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <Heading level={4} className="mb-6 text-white">
                Company
              </Heading>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <Heading level={4} className="mb-6 text-white">
                Services
              </Heading>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <Heading level={4} className="mb-6 text-white">
                Resources
              </Heading>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Heading level={3} className="mb-4 text-white">
                  Stay Updated
                </Heading>
                <Text color="white" className="mb-6">
                  Subscribe to our newsletter for the latest updates, insights, and business tips.
                </Text>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button variant="primary" size="md">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-950 py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Text color="white" size="sm">
              © {currentYear} Bexon. All rights reserved.
            </Text>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.platform}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;