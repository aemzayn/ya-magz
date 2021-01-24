import Link from 'next/link'
import { Text } from '@chakra-ui/react'

export default function ArticleAuthor({ name, slug }) {
  return (
    <Text d='flex'>
      Written by
      <Text ml='3px' color='gray.500' _hover={{ color: 'gray.600' }}>
        <Link href='/author/[slug]' as={`/author/${slug}`}>
          <a>{name}</a>
        </Link>
      </Text>
    </Text>
  )
}
