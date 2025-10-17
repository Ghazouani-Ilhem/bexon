# Next.js App

A modern Next.js application built with the App Router, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 📱 **Responsive Design** for all devices
- 🔧 **TypeScript** for type safety
- 📄 **Multiple Pages** (Home, About, Contact, Blog)
- 🎯 **SEO Optimized** with proper metadata
- 🚀 **Fast Performance** with built-in optimizations

## Pages

- **Home** (`/`) - Landing page with feature highlights
- **About** (`/about`) - Company information and mission
- **Contact** (`/contact`) - Contact form and information
- **Blog** (`/blog`) - Blog listing page
- **Blog Post** (`/blog/[id]`) - Dynamic blog post pages

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # App Router directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   │   └── [id]/         # Dynamic blog post pages
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── loading.tsx        # Loading component
│   ├── not-found.tsx      # 404 page
│   └── page.tsx           # Home page
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)