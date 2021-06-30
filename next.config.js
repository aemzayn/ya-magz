const withPlugins = require("next-compose-plugins")
const withPWA = require("next-pwa")
const optimizedImages = require("next-optimized-images")

const workboxConfig = require("./wb.config")

const nextConfig = {
  images: {
    deviceSizes: [420, 768, 1024, 1200],
    iconSizes: [],
    domains: ["res.cloudinary.com"],
    path: "/_next/image",
    loader: "default",
  },
  pwa: workboxConfig,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        webpack(config) {
          config.module.rules.push(
            ...[
              {
                test: /\.yml$/,
                type: "json",
                use: "yaml-loader",
              },
            ]
          )
          return config
        },
      },
    ],
    [
      optimizedImages,
      {
        handleImages: ["jpeg", "png", "svg"],
      },
    ],
  ],
  nextConfig
)
