import { ThemeProvider, theme, CSSReset } from '@chakra-ui/react'
import Header from '../components/sections/Header'
import '../scss/styles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
