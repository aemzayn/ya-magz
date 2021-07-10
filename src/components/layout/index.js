import Head from "next/head"
import { Box } from "@chakra-ui/react"
import Footer from "../sections/footer"
import Header from "../sections/header"

const Layout = ({ children }) => {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <Box marginTop={{ base: "65px", lg: "86px" }} id="__app" pos="relative">
        {children}
      </Box>
      <Footer />
    </div>
  )
}

export default Layout
