import { defaultCache } from "@serwist/next/worker"
import { Serwist } from "serwist"

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [
    ...defaultCache,
    {
      matcher: /\.(png|jpg|jpeg|webp|svg)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "assets",
        expiration: {
          maxEntries: 200,
        },
      },
    },
    {
      matcher: /\.(js|css)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "js-css",
        expiration: {
          maxEntries: 200,
        },
      },
    },
  ],
})

serwist.addEventListeners()
