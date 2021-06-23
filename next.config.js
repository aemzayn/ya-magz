module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    // if (!isServer) {
    //   config.node = {
    //     fs: "empty",
    //   }
    // }
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
}
