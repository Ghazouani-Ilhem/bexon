export default function About() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          About Us
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          We are a team of passionate developers building modern web applications with Next.js.
        </p>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To create fast, scalable, and user-friendly web applications that provide exceptional user experiences.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Do</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Build modern React applications with Next.js</li>
            <li>Implement responsive designs with Tailwind CSS</li>
            <li>Optimize performance and SEO</li>
            <li>Create scalable backend solutions</li>
            <li>Provide ongoing maintenance and support</li>
          </ul>
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Get in Touch</h3>
          <p className="text-blue-700">
            Ready to start your next project? Contact us to discuss how we can help bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}