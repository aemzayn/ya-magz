import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box w='100%' bgColor='#F9F9F9'>
      <Flex p={8} justifyContent='space-between'>
        <Text as='h1'>Ya! Magazine {new Date().getFullYear()}</Text>
        <Text as='h1' textAlign='right' color='gray.500'>
          Instagram:{' '}
          <Text
            as='a'
            cursor='pointer'
            color='black'
            href='https://www.instagram.com/ya.magz'
            target='_blank'
          >
            @ya.magz
          </Text>
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
