import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bexon.com';
  const currentDate = new Date();
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ];

  // Service detail pages
  const servicePages = [
    'business-strategy',
    'digital-transformation',
    'technology-consulting',
    'team-development',
    'project-management',
    'quality-assurance'
  ].map(slug => ({
    url: `${baseUrl}/service/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  // Portfolio detail pages
  const portfolioPages = [
    'e-commerce-platform',
    'mobile-banking-app',
    'corporate-website',
    'saas-dashboard',
    'brand-identity',
    'food-delivery-app',
    'healthcare-portal',
    'fitness-tracker',
    'e-learning-platform'
  ].map(slug => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  // Blog detail pages
  const blogPages = [
    'future-digital-transformation-2024',
    'building-successful-remote-team-culture',
    'strategic-planning-business-growth',
    'innovation-customer-experience',
    'role-ai-modern-business-operations',
    'sustainable-business-practices-long-term-success'
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.4,
  }));

  // Team detail pages
  const teamPages = [
    'john-smith',
    'sarah-johnson',
    'michael-chen',
    'emily-davis',
    'david-wilson',
    'lisa-anderson'
  ].map(slug => ({
    url: `${baseUrl}/team/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }));

  // Career detail pages
  const careerPages = [
    'senior-frontend-developer',
    'ux-ui-designer',
    'digital-marketing-manager',
    'sales-development-representative',
    'devops-engineer',
    'product-manager'
  ].map(slug => ({
    url: `${baseUrl}/careers/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.4,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...portfolioPages,
    ...blogPages,
    ...teamPages,
    ...careerPages,
  ];
}