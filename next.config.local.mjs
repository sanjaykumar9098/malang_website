/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Remove basePath and assetPrefix for local development
  // output: 'export',
  // trailingSlash: true,
  // basePath: '/malang_website',
  // assetPrefix: '/malang_website/',
}

export default nextConfig 