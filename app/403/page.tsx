import Link from 'next/link'

export default function Forbidden() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-yellow-500">403</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Access Forbidden</h2>
          <p className="text-gray-600 mb-8">
            You don't have permission to access this resource. Please contact an administrator if you believe this is an error.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="block w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}