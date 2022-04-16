import "@fontsource/montserrat/500-italic.css"
import "@fontsource/montserrat/900.css"
import "@fontsource/karla/400.css"
import "@fontsource/karla/500.css"
import "@fontsource/karla/600.css"
import "@fontsource/lora/400.css"
import "@fontsource/lora/500.css"
import "@fontsource/lora/600.css"
import "@fontsource/lora/700.css"

import { useEffect } from "react"
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import theme from "../theme"

import { SessionProvider } from "next-auth/react"
import Router, { useRouter } from "next/router"
import NProgress from "nprogress"

import * as gtag from "src/libs/gtag"
import Container from "@/components/layout/container"
import ContextProvider from "src/context"
import { isProduction } from "src/constanst/development"
import Script from "next/script"

NProgress.configure({ showSpinner: false })
Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.done()
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      if (isProduction) {
        gtag.pageview(url)
      }
    }

    router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <ContextProvider>
          <Container>
            <Component {...pageProps} />
            <Script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8695710654350407"
              crossorigin="anonymous"
            />
          </Container>
        </ContextProvider>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
