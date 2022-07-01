/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache')



module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com', 'assets.website-files.com', "*"]
  }
})

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['localhost', 'res.cloudinary.com','assets.website-files.com',"*"]
//   },
//   eslint:{
//     ignoreDuringBuilds: true
//   }
// }

// module.exports = nextConfig
