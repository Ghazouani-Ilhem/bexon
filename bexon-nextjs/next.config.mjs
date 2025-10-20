/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  // Ensure static assets are served properly
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Enable static file serving
  trailingSlash: false,
  // Disable strict mode for better compatibility with legacy CSS
  reactStrictMode: false,
};

export default nextConfig;
