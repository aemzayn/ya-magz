import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Article = ({ article }) => {
  return (
    <Box
      w={{ base: '100%', lg: '33.3%' }}
      px={{ base: 0, lg: '1rem' }}
      pb={{ base: '3rem' }}
      className='article'
    >
      <Box w='100%' h='50%'>
        <Image h='100%' w='100%' objectFit='cover' src={article.img} />
      </Box>
      <VStack spacing='4' w='100%' py='4' alignItems='flex-start'>
        <Heading as='h5' size='md' fontWeight='medium' maxW='90%' mr='auto'>
          {article.title}
        </Heading>
        <Text
          color='gray.500'
          fontSize={{ base: '0.8rem', lg: '1rem' }}
          maxW='90%'
          mr='auto'
        >
          {article.body}
        </Text>
        <Text color='blue.400' className='article-link'>
          <Link href='/'>
            <a>
              read more
              <ChevronRightIcon />
            </a>
          </Link>
        </Text>
      </VStack>
    </Box>
  )
}

export default Article
