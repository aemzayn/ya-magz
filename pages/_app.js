import Header from '../components/sections/header'
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/react'
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
