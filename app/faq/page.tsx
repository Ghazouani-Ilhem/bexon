'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      id: 1,
      question: 'What technologies do you use for web development?',
      answer: 'We use modern technologies including React, Next.js, TypeScript, Node.js, and various databases like PostgreSQL and MongoDB. We also work with cloud platforms like AWS, Vercel, and Netlify for deployment.'
    },
    {
      id: 2,
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during the initial consultation.'
    },
    {
      id: 3,
      question: 'Do you provide ongoing maintenance and support?',
      answer: 'Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements. We have different support tiers to fit your needs and budget.'
    },
    {
      id: 4,
      question: 'Can you help with SEO and digital marketing?',
      answer: 'Absolutely! We build SEO-friendly websites and can help with technical SEO optimization. We also partner with digital marketing specialists to provide comprehensive online marketing solutions.'
    },
    {
      id: 5,
      question: 'What is your pricing structure?',
      answer: 'Our pricing depends on project scope, complexity, and timeline. We offer both fixed-price projects and hourly rates. We provide detailed quotes after understanding your requirements and can work within your budget.'
    },
    {
      id: 6,
      question: 'Do you work with clients remotely?',
      answer: 'Yes, we work with clients worldwide. We use modern collaboration tools for communication, project management, and regular updates. We can accommodate different time zones and work schedules.'
    },
    {
      id: 7,
      question: 'What happens if I need changes after the project is complete?',
      answer: 'We include a revision period in all our projects. After that, we offer ongoing support packages for changes and updates. We also provide training so you can manage minor updates yourself.'
    },
    {
      id: 8,
      question: 'Do you provide hosting and domain services?',
      answer: 'We can help you set up hosting and domain services, or we can work with your existing providers. We recommend reliable hosting solutions and can manage the technical aspects for you.'
    }
  ]

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                    openItems.includes(faq.id) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openItems.includes(faq.id) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            If you didn't find the answer you were looking for, feel free to contact us directly.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}