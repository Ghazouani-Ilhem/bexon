export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Cross-browser Compatibility'],
      price: 'Starting at $2,500'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization'],
      price: 'Starting at $5,000'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      features: ['Payment Gateway Integration', 'Inventory Management', 'Order Processing', 'Analytics Dashboard'],
      price: 'Starting at $8,000'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that provide exceptional user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'Starting at $1,500'
    },
    {
      title: 'Consulting',
      description: 'Technical consulting and architecture guidance for your digital projects.',
      features: ['Technical Architecture', 'Code Reviews', 'Performance Audits', 'Best Practices'],
      price: '$150/hour'
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support to keep your applications running smoothly.',
      features: ['Bug Fixes', 'Security Updates', 'Performance Monitoring', '24/7 Support'],
      price: 'Starting at $500/month'
    }
  ]

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your business grow and succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {service.price}
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us today to discuss your requirements and get a custom quote for your project.
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </a>
            <a
              href="/portfolio"
              className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}