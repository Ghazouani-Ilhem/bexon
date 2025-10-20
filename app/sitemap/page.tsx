export default function Sitemap() {
  const pages = [
    { url: '/', title: 'Home', description: 'Main landing page' },
    { url: '/about', title: 'About Us', description: 'Learn about our company and mission' },
    { url: '/services', title: 'Services', description: 'Our comprehensive service offerings' },
    { url: '/portfolio', title: 'Portfolio', description: 'View our recent projects and work' },
    { url: '/blog', title: 'Blog', description: 'Latest articles and insights' },
    { url: '/faq', title: 'FAQ', description: 'Frequently asked questions' },
    { url: '/contact', title: 'Contact', description: 'Get in touch with us' },
    { url: '/privacy', title: 'Privacy Policy', description: 'Our privacy policy and data handling' },
    { url: '/terms', title: 'Terms of Service', description: 'Terms and conditions of use' },
    { url: '/auth/login', title: 'Login', description: 'User login page' },
    { url: '/auth/register', title: 'Register', description: 'Create a new account' },
  ]

  const blogPosts = [
    { url: '/blog/1', title: 'Getting Started with Next.js App Router', description: 'Learn how to build modern React applications' },
    { url: '/blog/2', title: 'Building Responsive UIs with Tailwind CSS', description: 'Create beautiful, responsive user interfaces' },
    { url: '/blog/3', title: 'TypeScript Best Practices for React', description: 'Improve your React development experience' },
  ]

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-8">
          Sitemap
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Find all the pages and content available on our website.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Main Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pages.map((page, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                  <a 
                    href={page.url}
                    className="block group"
                  >
                    <h3 className="text-lg font-semibold text-blue-600 group-hover:text-blue-800 mb-2">
                      {page.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {page.description}
                    </p>
                    <span className="text-blue-500 text-sm font-medium">
                      {page.url}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                  <a 
                    href={post.url}
                    className="block group"
                  >
                    <h3 className="text-lg font-semibold text-blue-600 group-hover:text-blue-800 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {post.description}
                    </p>
                    <span className="text-blue-500 text-sm font-medium">
                      {post.url}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-600 mb-4">
              If you can't find the page you're looking for, try using our search function or contact us directly.
            </p>
            <div className="space-x-4">
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/faq"
                className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors"
              >
                View FAQ
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}