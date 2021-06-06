import { ThemeProvider, CSSReset } from "@chakra-ui/react"
import theme from "../theme"
import "@/styles/styles.scss"
import "@/styles/nprogress.scss"

import Router from "next/router"
import NProgress from "nprogress"
import * as gtag from "@/lib/gtag"

import "@fontsource/montserrat/500-italic.css"
import "@fontsource/montserrat/900.css"

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
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
