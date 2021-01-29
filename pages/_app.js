import { ThemeProvider, theme, CSSReset } from '@chakra-ui/react'
import '../scss/styles.scss'

import Router from 'next/router'
import NProgress from 'nprogress'
import * as gtag from '@/lib/gtag'
import '@/scss/nprogress.css'

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
