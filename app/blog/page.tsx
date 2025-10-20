export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Next.js App Router',
      excerpt: 'Learn how to build modern React applications with the new App Router in Next.js 13+',
      date: '2024-01-15',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Building Responsive UIs with Tailwind CSS',
      excerpt: 'Create beautiful, responsive user interfaces using Tailwind CSS utility classes',
      date: '2024-01-10',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'TypeScript Best Practices for React',
      excerpt: 'Improve your React development experience with TypeScript best practices',
      date: '2024-01-05',
      readTime: '6 min read'
    }
  ]

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
          Blog
        </h1>
        
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <time className="text-sm text-gray-500" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}