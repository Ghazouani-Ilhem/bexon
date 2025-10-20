import { notFound } from 'next/navigation'

interface BlogPost {
  id: number
  title: string
  content: string
  date: string
  readTime: string
  author: string
}

// Mock data - in a real app, this would come from a CMS or database
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with Next.js App Router',
    content: `
      <p>The Next.js App Router is a new paradigm for building React applications that provides a more intuitive and powerful way to structure your application.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>File-based routing with nested layouts</li>
        <li>Server Components by default</li>
        <li>Streaming and Suspense support</li>
        <li>Built-in loading and error states</li>
        <li>Improved performance and SEO</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To get started with the App Router, you'll need to create an <code>app</code> directory in your Next.js project. This directory will contain all your pages and layouts.</p>
      
      <p>The App Router uses a new file convention where you create special files like <code>page.tsx</code>, <code>layout.tsx</code>, and <code>loading.tsx</code> to define different aspects of your application.</p>
      
      <h2>Conclusion</h2>
      <p>The App Router represents a significant step forward for Next.js, providing developers with more powerful tools to build modern web applications. Whether you're building a simple blog or a complex e-commerce platform, the App Router has the features you need to succeed.</p>
    `,
    date: '2024-01-15',
    readTime: '5 min read',
    author: 'John Doe'
  },
  {
    id: 2,
    title: 'Building Responsive UIs with Tailwind CSS',
    content: `
      <p>Tailwind CSS is a utility-first CSS framework that makes it easy to build responsive and modern user interfaces without writing custom CSS.</p>
      
      <h2>Why Tailwind CSS?</h2>
      <p>Tailwind CSS offers several advantages over traditional CSS frameworks:</p>
      <ul>
        <li>Utility-first approach for rapid development</li>
        <li>Consistent design system</li>
        <li>Responsive design utilities</li>
        <li>Small bundle size with purging</li>
        <li>Highly customizable</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To use Tailwind CSS in your Next.js project, you can install it via npm and configure it in your <code>tailwind.config.js</code> file.</p>
      
      <p>Once installed, you can start using utility classes directly in your JSX components to style your application.</p>
      
      <h2>Best Practices</h2>
      <p>When using Tailwind CSS, it's important to follow best practices to maintain clean and maintainable code:</p>
      <ul>
        <li>Use responsive prefixes for mobile-first design</li>
        <li>Extract common patterns into components</li>
        <li>Use the @apply directive for complex styles</li>
        <li>Leverage the configuration file for customization</li>
      </ul>
    `,
    date: '2024-01-10',
    readTime: '7 min read',
    author: 'Jane Smith'
  },
  {
    id: 3,
    title: 'TypeScript Best Practices for React',
    content: `
      <p>TypeScript brings static type checking to JavaScript, making React applications more robust and maintainable. Here are some best practices for using TypeScript with React.</p>
      
      <h2>Component Props</h2>
      <p>Always define interfaces for your component props to ensure type safety and better developer experience.</p>
      
      <h2>Event Handlers</h2>
      <p>Use proper typing for event handlers to catch errors at compile time and get better IntelliSense support.</p>
      
      <h2>State Management</h2>
      <p>When using useState or useReducer, provide proper type annotations to ensure type safety throughout your component.</p>
      
      <h2>Custom Hooks</h2>
      <p>Type your custom hooks properly to provide a great developer experience for consumers of your hooks.</p>
      
      <h2>API Responses</h2>
      <p>Define interfaces for API responses to ensure type safety when working with external data.</p>
      
      <h2>Conclusion</h2>
      <p>Following these TypeScript best practices will help you build more maintainable and robust React applications. The key is to be consistent and leverage TypeScript's type system to catch errors early in the development process.</p>
    `,
    date: '2024-01-05',
    readTime: '6 min read',
    author: 'Mike Johnson'
  }
]

interface PageProps {
  params: {
    id: string
  }
}

export default function BlogPost({ params }: PageProps) {
  const post = blogPosts.find(p => p.id === parseInt(params.id))
  
  if (!post) {
    notFound()
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <time className="text-sm text-gray-500" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span className="text-sm text-gray-500">{post.readTime}</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center mb-8">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{post.author}</p>
              </div>
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
        
        <div className="mt-8">
          <a
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </a>
        </div>
      </div>
    </div>
  )
}