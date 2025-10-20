# Bexon Next.js Corporate Business Template

A modern, high-performance Next.js conversion of the Bexon corporate business HTML template with TypeScript support and optimized performance.

## Features

- ⚡ **Next.js 14** with App Router
- 🎯 **TypeScript** for type safety
- 🚀 **Performance Optimized** with Image optimization, lazy loading
- 📱 **Responsive Design** with Bootstrap 5
- 🎨 **Modern UI Components** with reusable sections
- 🔍 **SEO Optimized** with proper meta tags
- ♿ **Accessibility** features included
- 🎭 **Animations** with GSAP and WOW.js
- 📊 **Analytics Ready** for tracking

## Project Structure

```
├── components/           # Reusable React components
│   ├── sections/        # Page sections (Hero, About, etc.)
│   ├── Header.tsx       # Main header component
│   ├── Footer.tsx       # Footer component
│   ├── Layout.tsx       # Main layout wrapper
│   └── ...
├── pages/               # Next.js pages
│   ├── _app.tsx        # App configuration
│   ├── index.tsx       # Home page
│   ├── about.tsx       # About page
│   ├── contact.tsx     # Contact page
│   └── ...
├── public/             # Static assets
│   └── assets/         # CSS, JS, images
├── styles/             # Global styles
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Performance Features

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Code Splitting**: Automatic code splitting for better performance
- **Lazy Loading**: Images and components load when needed
- **Bundle Optimization**: Tree shaking and minification
- **Caching**: Optimized caching strategies
- **CDN Ready**: Static asset optimization

## Components

### Layout Components
- `Layout`: Main layout wrapper with SEO and performance optimizations
- `Header`: Responsive header with navigation and search
- `Footer`: Footer with links and contact information
- `PageHeader`: Reusable page header with breadcrumbs

### Section Components
- `HeroSection`: Homepage hero with CTA buttons
- `AboutSection`: About content with progress bars
- `ServiceGrid`: Services grid with icons and descriptions
- `TeamSection`: Team members with social links
- `TestimonialSection`: Customer testimonials carousel
- `ContactForm`: Contact form with validation
- `FaqSection`: FAQ accordion component

## Customization

### Adding New Pages

1. Create a new file in `pages/` directory
2. Import and use the `Layout` component
3. Add page-specific sections
4. Update navigation in `Header.tsx`

### Styling

- Global styles are in `styles/globals.css`
- Component-specific styles can be added as CSS modules
- Bootstrap classes are available throughout
- Custom CSS variables for theming

### Adding New Sections

1. Create component in `components/sections/`
2. Define TypeScript interfaces in `types/`
3. Import and use in pages
4. Add animations with WOW.js data attributes

## SEO Features

- Dynamic meta tags per page
- Open Graph support
- Twitter Card support
- Structured data ready
- Sitemap generation
- Robot.txt configuration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE 11+ (with polyfills)

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team.

## Changelog

### v1.0.0
- Initial Next.js conversion
- TypeScript implementation
- Performance optimizations
- Component architecture
- SEO improvements
