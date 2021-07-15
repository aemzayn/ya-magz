import { Provider } from "next-auth/client"
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import theme from "../theme"

import Router from "next/router"
import NProgress from "nprogress"
import * as gtag from "src/libs/gtag"

import "@fontsource/montserrat/500-italic.css"
import "@fontsource/montserrat/900.css"

import "@fontsource/karla/400.css"
import "@fontsource/karla/600.css"
import "@fontsource/lora/400.css"
import "@fontsource/lora/500.css"
import "@fontsource/lora/600.css"
import "@fontsource/lora/700.css"

import Container from "@/components/layout/container"
import ContextProvider from "src/context"

NProgress.configure({ showSpinner: false })
Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = url => {
  NProgress.done()
  gtag.pageview(url)
}
Router.onRouteChangeError = () => {
  NProgress.done()
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <ContextProvider>
          <Container>
            <Component {...pageProps} />
          </Container>
        </ContextProvider>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
