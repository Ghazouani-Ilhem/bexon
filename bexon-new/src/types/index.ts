export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  onClick?: () => void;
}

export interface SectionProps {
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'gradient' | 'dark';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export interface TextProps {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'muted' | 'white';
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
  slug: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  slug: string;
  client: string;
  date: string;
  technologies: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  skills: string[];
  slug: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  skills: string[];
  slug: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}