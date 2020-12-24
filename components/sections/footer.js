import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box w='100%' bgColor='#F9F9F9'>
      <Flex p={8} justifyContent='space-between'>
        <h1>Ya! Magazine {new Date().getFullYear()}</h1>
        <h1>Website is under construction</h1>
      </Flex>
    </Box>
  )
}

export default Footer
