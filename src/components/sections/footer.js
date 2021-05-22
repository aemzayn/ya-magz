import { Box, Flex, HStack, Icon, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { MdCopyright } from 'react-icons/md'
const Footer = () => {
  return (
    <Box
      w='100%'
      bgColor='white'
      borderTopWidth='1px'
      borderTopColor='gray.200'
      borderTopStyle='solid'
    >
      <Flex py={8} px={{ base: 8, md: 20 }} justifyContent='space-between'>
        <HStack
          spacing={1}
          align='center'
          justifyContent='center'
          color='gray.600'
        >
          <Icon aria-label='copyright icon' as={MdCopyright} />
          <Text>
            Ya! Magazine {new Date().getFullYear()}. All rights reserved.
          </Text>
        </HStack>
        <IconButton
          aria-label='Ya! Magz Instagram'
          as='a'
          bgColor='white'
          cursor='pointer'
          href='https://www.instagram.com/ya.magz'
          target='_blank'
          borderRadius='false'
          icon={<Icon size='md' color='black' as={FiInstagram} />}
        />
      </Flex>
    </Box>
  )
}

export default Footer
