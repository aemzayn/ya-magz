import Layout from "@/components/layout"
import { Heading, VStack } from "@chakra-ui/react"
import Head from "next/head"

export default function NotFound() {
  return (
    <Layout>
      <Head>
        <title>Not Found</title>
      </Head>
      <VStack
        justifyContent="center"
        textAlign="center"
        spacing={2}
        minH="75vh"
      >
        <Heading size="2xl" mb="4" as="h1" fontWeight="bold">
          Page not found
        </Heading>
        <Heading fontWeight="normal" size="xl" as="h2" color="brand.gray">
          The page you are looking for is not available.
        </Heading>
      </VStack>
    </Layout>
  )
}
