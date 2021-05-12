import { Flex } from '@chakra-ui/react'

export default function ArticleLayout({ children }) {
  return (
    <Flex w='100%' direction='column'>
      <Flex
        as='article'
        direction='column'
        maxW='750px'
        w='full'
        mx='auto'
        py={10}
        px={{ base: 4, lg: 0 }}
      >
        {children}
      </Flex>
    </Flex>
  )
}
