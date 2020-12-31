import { Flex } from '@chakra-ui/react'
import Meta from './meta'

export default function Layout({ children, title = 'Ya! Magazine' }) {
  return (
    <Flex w='100%' direction='column'>
      <Meta title={title} />
      <Flex
        as='article'
        direction='column'
        maxW='800px'
        mx='auto'
        py={{ base: 10, lg: 20 }}
        px={{ base: 8, lg: 0 }}
      >
        {children}
      </Flex>
    </Flex>
  )
}
