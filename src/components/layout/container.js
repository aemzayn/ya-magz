import Head from "next/head"
import Script from "next/script"
import { Box } from "@chakra-ui/react"

const Container = ({ children }) => {
  return (
    <>
      <Head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8695710654350407"
          crossorigin="anonymous"
        />
      </Head>
      <Box maxW="1600px" mx="auto" boxShadow="xl">
        {children}
      </Box>
    </>
  )
}

export default Container
