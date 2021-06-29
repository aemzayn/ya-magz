const withPWA = require("next-pwa")

const workboxConfig = require("./wb.config")

module.exports = withPWA({
  webpack: config => {
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
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    deviceSizes: [420, 768, 1024, 1200],
    iconSizes: [],
    domains: ["res.cloudinary.com"],
    path: "/_next/image",
    loader: "default",
  },
  pwa: workboxConfig,
})
