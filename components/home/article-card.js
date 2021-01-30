import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Heading, Image, Skeleton, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Article = ({ article }) => {
  return (
    <Box
      w={{ base: '100%', md: '50%', lg: '33.3%' }}
      px={{ base: 0, md: '1rem' }}
      className='article'
      mb={{ base: 8, md: 4 }}
    >
      <Box
        w='100%'
        h={{ base: '15rem', md: '20rem', lg: '22rem' }}
        maxH={{ base: '30rem', lg: '35rem' }}
      >
        <Skeleton
          height='100%'
          width='100%'
          isLoaded={article.featuredimage ? true : false}
        >
          <Image
            h='100%'
            w='100%'
            objectFit='cover'
            src={article.featuredimage}
          />
        </Skeleton>
      </Box>
      <VStack
        spacing={{ base: 3, md: 4 }}
        w='100%'
        mt='4'
        alignItems='flex-start'
      >
        <Heading
          className='article-title'
          as='h5'
          size='md'
          fontWeight='medium'
          maxW='90%'
          mr='auto'
        >
          {article?.title}
        </Heading>
        <Text
          color='gray.500'
          fontSize={{ base: '0.8rem', lg: '1rem' }}
          maxW='90%'
          mr='auto'
        >
          {article?.excerpt}
        </Text>
        <Text color='blue.400' className='article-link'>
          <Link href={`/articles/${article.slug}`}>
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
