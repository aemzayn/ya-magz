import { getAuthor } from '@/lib/authors'
import { getTag } from '@/lib/postTags'
import { Text } from '@chakra-ui/react'
import Link from 'next/link'

const HeroAuthorCategory = ({ author, category }) => {
  return (
    <Text mb='1.2' color='gray.500'>
      <Link href='/category/[slug]' as={`/category/${getTag(category).slug}`}>
        <Text as='a' _hover={{ color: 'black' }} cursor='pointer'>
          {getTag(category).name}
        </Text>
      </Link>
      <Text as='span' mx='1'>
        -
      </Text>
      <Link href='/author/[slug]' as={`/author/${getAuthor(author).slug}`}>
        <Text as='a' _hover={{ color: 'black' }} cursor='pointer'>
          {getAuthor(author).name}
        </Text>
      </Link>
    </Text>
  )
}

export default HeroAuthorCategory
