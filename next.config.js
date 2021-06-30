const withPlugins = require("next-compose-plugins")
const withPWA = require("next-pwa")
const optimizedImages = require("next-optimized-images")

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
