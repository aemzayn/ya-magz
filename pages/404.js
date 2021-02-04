import Layout from '@/components/sections/layout'
import { InfoIcon } from '@chakra-ui/icons'
import { Heading, VStack } from '@chakra-ui/react'
import Head from 'next/head'

export default function NotFound() {
  return (
    <Layout>
      <Head>
        <title>Not Found</title>
      </Head>
      <VStack justifyContent='center' spacing={2} minH='75vh'>
        <Heading
          fontWeight='normal'
          size='2xl'
          mb='4'
          as='h1'
          fontFamily='Product Sans'
          fontWeight='bold'
        >
          404 Not Found 😭
        </Heading>
        <Heading
          fontWeight='normal'
          size='xl'
          as='h2'
          color='gray.500'
          fontFamily='Product Sans'
        >
          The things you are looking for is not available.
        </Heading>
      </VStack>
    </Layout>
  )
}
