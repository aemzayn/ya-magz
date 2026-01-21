const withSerwist = require("@serwist/next").default

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = withSerwist({
  swSrc: "src/sw.js",
  swDest: "public/service-worker.js",
  disable: process.env.NODE_ENV === "development",
})(nextConfig)
