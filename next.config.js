const withPlugins = require("next-compose-plugins")
const withPWA = require("next-pwa")
const workboxConfig = require("./wb.config")

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  pwa: workboxConfig,
  eslint: {
    ignoreDuringBuilds: true,
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
}

module.exports = withPlugins([[withPWA]], nextConfig)
