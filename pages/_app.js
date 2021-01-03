import { ThemeProvider, theme, CSSReset } from '@chakra-ui/react'
import { GlobalProvider } from '../context/global'
import Header from '../components/sections/header'
import '../scss/styles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalProvider>
  )
}

export default MyApp
