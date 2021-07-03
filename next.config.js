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
        webpack(config, { isServer }) {
          config.module.rules.push(
            ...[
              {
                test: /\.yml$/,
                type: "json",
                use: "yaml-loader",
              },
            ]
          )

          config.resolve.fallback = { fs: false }

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
