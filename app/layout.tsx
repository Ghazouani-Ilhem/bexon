import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'A modern Next.js application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <h1 className="text-xl font-semibold text-gray-900">
                    Next.js App
                  </h1>
                </div>
                <div className="flex items-center space-x-4">
                  <a href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </a>
                  <a href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </a>
                  <a href="/services" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Services
                  </a>
                  <a href="/portfolio" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Portfolio
                  </a>
                  <a href="/blog" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Blog
                  </a>
                  <a href="/faq" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    FAQ
                  </a>
                  <a href="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </a>
                  <a href="/auth/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
          
          <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
                    <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
                    <li><a href="/portfolio" className="text-gray-300 hover:text-white">Portfolio</a></li>
                    <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li><a href="/blog" className="text-gray-300 hover:text-white">Blog</a></li>
                    <li><a href="/faq" className="text-gray-300 hover:text-white">FAQ</a></li>
                    <li><a href="/sitemap" className="text-gray-300 hover:text-white">Sitemap</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Legal</h3>
                  <ul className="space-y-2">
                    <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                    <li><a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Account</h3>
                  <ul className="space-y-2">
                    <li><a href="/auth/login" className="text-gray-300 hover:text-white">Login</a></li>
                    <li><a href="/auth/register" className="text-gray-300 hover:text-white">Register</a></li>
                    <li><a href="/dashboard" className="text-gray-300 hover:text-white">Dashboard</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
                <p>&copy; 2024 Next.js App. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}