/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["picsum.photos", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
