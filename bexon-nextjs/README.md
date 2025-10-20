# Bexon Next.js Application

A modern, high-performance Next.js application converted from HTML templates with enhanced performance optimizations and reusable components.

## 🚀 Features

### Core Features
- **Modern Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Responsive Design** for all devices
- **SEO Optimized** with meta tags and structured data
- **Performance Optimized** with lazy loading and code splitting

### Pages Converted
- ✅ Homepage with hero section and features
- ✅ About page with company information
- ✅ Service pages (list and details)
- ✅ Portfolio pages (gallery and project details)
- ✅ Blog pages (list and article details)
- ✅ Team pages (team members and individual profiles)
- ✅ Careers pages (job listings and job details)
- ✅ Contact page with form
- ✅ FAQ page with accordion
- ✅ Pricing page with plans

### Performance Optimizations
- **Image Optimization** with Next.js Image component
- **Lazy Loading** for components and images
- **Code Splitting** for better bundle management
- **Bundle Analysis** with webpack-bundle-analyzer
- **Caching Headers** for static assets
- **Performance Monitoring** in development mode

### SEO Features
- **Dynamic Sitemap** generation
- **Robots.txt** configuration
- **Meta Tags** for all pages
- **Open Graph** tags for social sharing
- **Structured Data** for search engines
- **Canonical URLs** for duplicate content prevention

## 🛠️ Technology Stack

### Frontend
- **Next.js 15.5.6** - React framework
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion 12.23.24** - Animations
- **Lucide React** - Icons

### Performance & SEO
- **Next.js Image** - Optimized images
- **Next.js Font** - Font optimization
- **Bundle Analyzer** - Bundle size analysis
- **Critters** - CSS inlining
- **Next SEO** - SEO utilities

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **PostCSS** - CSS processing

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   │   └── [slug]/        # Dynamic blog post pages
│   ├── careers/           # Careers pages
│   │   └── [slug]/        # Dynamic job pages
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── portfolio/         # Portfolio pages
│   │   └── [slug]/        # Dynamic project pages
│   ├── pricing/           # Pricing page
│   ├── service/           # Service pages
│   │   └── [slug]/        # Dynamic service pages
│   ├── team/              # Team pages
│   │   └── [slug]/        # Dynamic team member pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap generation
├── components/            # Reusable components
│   ├── common/           # Common components
│   │   ├── BackToTop.tsx
│   │   ├── Breadcrumb.tsx
│   │   ├── OffcanvasMenu.tsx
│   │   ├── PerformanceMonitor.tsx
│   │   ├── Preloader.tsx
│   │   └── SearchPopup.tsx
│   ├── layout/           # Layout components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   ├── sections/         # Page sections
│   │   ├── ClientLogo.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ContactInfo.tsx
│   │   ├── CTA.tsx
│   │   ├── FeatureCard.tsx
│   │   └── HeroSection.tsx
│   └── ui/               # UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── CodeSplit.tsx
│       ├── Container.tsx
│       ├── Grid.tsx
│       ├── Heading.tsx
│       ├── LazyLoad.tsx
│       ├── OptimizedImage.tsx
│       ├── Section.tsx
│       └── Text.tsx
├── lib/                  # Utility functions
│   ├── seo.ts           # SEO utilities
│   └── utils.ts         # General utilities
└── types/               # TypeScript type definitions
    └── global.d.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bexon-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📊 Performance Features

### Image Optimization
- Automatic WebP/AVIF format conversion
- Responsive image sizing
- Lazy loading with blur placeholders
- Optimized loading with Next.js Image component

### Code Splitting
- Automatic route-based code splitting
- Dynamic imports for heavy components
- Vendor chunk optimization
- Framer Motion lazy loading

### Caching
- Static asset caching (1 year)
- API response caching
- Image caching with CDN
- Service worker for offline support

### Bundle Optimization
- Tree shaking for unused code
- Minification and compression
- Bundle analysis tools
- Critical CSS inlining

## 🔍 SEO Features

### Meta Tags
- Dynamic title and description
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs

### Structured Data
- Organization schema
- Website schema
- Article schema for blog posts
- Person schema for team members

### Sitemap & Robots
- Dynamic sitemap generation
- Robots.txt configuration
- XML sitemap for search engines

## 🎨 Customization

### Styling
- Tailwind CSS configuration
- Custom color palette
- Responsive breakpoints
- Dark mode support (ready)

### Components
- Reusable UI components
- Customizable props
- TypeScript interfaces
- Animation variants

### Content
- Dynamic content loading
- CMS integration ready
- Markdown support
- Image optimization

## 📱 Responsive Design

- **Mobile First** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- **Touch-friendly** interface
- **Optimized images** for different screen sizes

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Use `npm run build` and deploy the `out` folder
- **AWS**: Use AWS Amplify or S3 + CloudFront
- **Docker**: Use the provided Dockerfile

## 📈 Performance Monitoring

### Development Mode
- Real-time performance metrics
- Core Web Vitals monitoring
- Bundle size analysis
- Performance debugging tools

### Production Monitoring
- Web Vitals tracking
- Error monitoring
- User experience metrics
- Performance budgets

## 🔧 Configuration

### Next.js Config
- Image optimization settings
- Bundle optimization
- Security headers
- Redirects and rewrites

### Tailwind Config
- Custom color palette
- Typography settings
- Animation configurations
- Plugin configurations

## 📚 Documentation

### Component Documentation
- Props interfaces
- Usage examples
- Animation variants
- Responsive behavior

### API Documentation
- Route handlers
- Data fetching
- Error handling
- Type definitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Original HTML template design
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- All contributors and supporters

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation
- Review the FAQ section

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**