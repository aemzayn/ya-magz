import { Flex } from '@chakra-ui/react'

const GridContainer = ({ children }) => {
  return (
    <Flex
      py={{ base: 4, md: 6, lg: 8 }}
      flexDir={{ base: 'column', lg: 'row' }}
      minHeight='100vh'
    >
      {children}
    </Flex>
  )
}

export default GridContainer
