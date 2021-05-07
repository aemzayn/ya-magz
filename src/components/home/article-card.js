import Link from 'next/link'
import { getAuthor } from '@/lib/authors'
import { getTag } from '@/lib/postTags'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  chakra,
  Flex,
  Heading,
  HStack,
  Image,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react'

const Item = ({ children }) => (
  <chakra.span
    fontWeight='normal'
    textTransform='uppercase'
    fontSize={{ base: '0.6rem', lg: '0.75rem' }}
    color='gray.600'
    margin='0'
    _notLast={{
      marginRight: 1,
    }}
  >
    {children}
  </chakra.span>
)

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
  const image = featuredimage || featuredimageurl

  return (
    <Box
      w={{ base: '100%', md: '33%', lg: '33.3%' }}
      px={{ base: 0, md: '0.5rem', xl: '1rem' }}
      className='article'
      mb={{ base: 10, md: 8, lg: 20 }}
    >
      {image && (
        <Box
          w='100%'
          h={{ base: '15rem', lg: '22rem' }}
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
      )}
      <VStack
        spacing={{ base: 2, lg: 3 }}
        w='100%'
        mt='4'
        alignItems='flex-start'
      >
        <Flex as='span' flexWrap='wrap'>
          {tags && <Item>{getTag(tags).name}</Item>}
          <Item>·</Item>
          {author && <Item>{getAuthor(author).name}</Item>}
        </Flex>
        <Heading
          className='article-title'
          as='h5'
          fontSize={titleSize}
          fontWeight='medium'
          maxW='90%'
          mr='auto'
          _hover={{
            color: 'gray.500',
          }}
        >
          <Link href={`/read/${slug}`}>
            <a>{title}</a>
          </Link>
        </Heading>
        <Text
          color='gray.500'
          fontSize={{ base: '0.8rem', lg: '1rem' }}
          mr='auto'
        >
          {excerpt}
        </Text>
        <Text
          color='blue.400'
          className='article-link'
          fontSize={{ base: '0.8rem', lg: '1rem' }}
        >
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
