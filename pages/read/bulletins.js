import Meta from '@/components/article/meta/meta'
import Layout from '@/components/sections/layout'
import { Flex } from '@chakra-ui/react'
import Nav from '@/components/read/nav'
import Grid from '@/components/read/grid'
import { bulletins } from '@/cms/bulletins.json'

export default function Bulletins() {
  return (
    <Layout>
      <Meta title='Read' url='/read' />
      <Flex
        py={{ base: 4, md: 6, lg: 8 }}
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <Nav />
        <Grid items={bulletins} />
      </Flex>
    </Layout>
  )
}
