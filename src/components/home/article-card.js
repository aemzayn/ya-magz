import React from 'react'
import Link from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Heading,
  HStack,
  Image,
  Skeleton,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import { getAuthor } from '@/lib/authors'
import { getTag } from '@/lib/postTags'

const Article = ({ article }) => {
  const {
    title,
    slug,
    excerpt,
    featuredimage,
    featuredimageurl,
    author,
    tags,
  } = article

  const titleSize = 'xl'

  return (
    <Box
      w={{ base: '100%', md: '50%', lg: '33.3%' }}
      px={{ base: 0, md: '1rem' }}
      className='article'
      mb={{ base: 10, md: 8 }}
    >
      <Box
        w='100%'
        h={{ base: '15rem', md: '20rem', lg: '22rem' }}
        maxH={{ base: '30rem', lg: '35rem' }}
      >
        <Skeleton
          height='100%'
          width='100%'
          isLoaded={featuredimage || featuredimageurl ? true : false}
        >
          <Image
            h='100%'
            w='100%'
            objectFit='cover'
            src={featuredimage || featuredimageurl}
            loading='lazy'
          />
        </Skeleton>
      </Box>
      <VStack
        spacing={{ base: 2, md: 3 }}
        w='100%'
        mt='4'
        alignItems='flex-start'
      >
        <Heading
          className='article-title'
          as='h5'
          fontSize={titleSize}
          fontWeight='medium'
          maxW='90%'
          mr='auto'
        >
          <Link href={`/read/${slug}`}>
            <a>{title}</a>
          </Link>
        </Heading>
        {/* <HStack
          spacing={1}
          // textTransform='uppercase'
          color='gray.500'
          fontSize='xs'
          letterSpacing='1px'
        >
          <Text>{author && getAuthor(author).name}</Text>
          <span> - </span>
          <Text>{tags && getTag(tags[0]).name}</Text>
        </HStack> */}
        <Text
          color='gray.500'
          fontSize={{ base: '1rem', lg: '1rem' }}
          maxW='90%'
          mr='auto'
        >
          {excerpt}
        </Text>
        <Text color='blue.400' className='article-link'>
          <Link href={`/read/${slug}`}>
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
