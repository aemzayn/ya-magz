import { getAuthor } from '@/lib/authors'
import { getTag } from '@/lib/postTags'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  VStack,
  Text,
  HStack,
  Heading,
  chakra,
  GridItem,
} from '@chakra-ui/react'
import Link from 'next/link'

const Item = ({ children }) => (
  <chakra.span
    fontWeight='normal'
    textTransform='uppercase'
    fontSize='0.75rem'
    color='gray.600'
    margin='0'
  >
    {children}
  </chakra.span>
)

export default function ShortArticleCard({ article }) {
  const { title, slug, author, tags } = article
  const titleSize = 'xl'
  return (
    <GridItem
      px={{ base: 4 }}
      py={{ base: 4 }}
      border='1px solid'
      borderColor='gray.200'
    >
      <VStack spacing={{ base: 2, md: 2 }} w='100%' alignItems='flex-start'>
        <HStack spacing={1}>
          {tags && <Item>{getTag(tags).name}</Item>}
          <Item>·</Item>
          {author && <Item>{getAuthor(author).name}</Item>}
        </HStack>
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
        <Text color='blue.400' className='article-link'>
          <Link href={`/read/${slug}`}>
            <a>
              read more
              <ChevronRightIcon />
            </a>
          </Link>
        </Text>
      </VStack>
    </GridItem>
  )
}
