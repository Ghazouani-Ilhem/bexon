export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      category: 'Web Development',
      link: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      category: 'Mobile Development',
      link: '#'
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard for SaaS platform with real-time data visualization and reporting.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'D3.js', 'Python', 'Redis'],
      category: 'Web Development',
      link: '#'
    },
    {
      id: 4,
      title: 'Healthcare Management System',
      description: 'Comprehensive healthcare management system for clinics with patient records and scheduling.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
      category: 'Web Development',
      link: '#'
    },
    {
      id: 5,
      title: 'Food Delivery App',
      description: 'Cross-platform food delivery app with real-time tracking and payment integration.',
      image: '/api/placeholder/600/400',
      technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe'],
      category: 'Mobile Development',
      link: '#'
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'Online learning platform with video streaming, quizzes, and progress tracking.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel'],
      category: 'Web Development',
      link: '#'
    }
  ]

  const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design']

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Portfolio
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                category === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Project Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Project
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-600 mb-6">
            Let's work together to bring your ideas to life. Contact us to discuss your project requirements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  )
}