import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box w='100%' bgColor='#F9F9F9'>
      <Flex p={8} justifyContent='space-between'>
        <Text as='h1'>Ya! Magazine {new Date().getFullYear()}</Text>
        <Text as='h1' textAlign='right'>
          Website is under construction
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
