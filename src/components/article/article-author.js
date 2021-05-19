import Link from 'next/link'
import { Text } from '@chakra-ui/react'

export default function ArticleAuthor({ name, slug }) {
  return (
    <Text d='flex'>
      <Text
        ml='3px'
        color='blue.400'
        transitionDuration='150ms'
        _hover={{ color: 'blue.600' }}
      >
        <Link href='/author/[slug]' as={`/author/${slug}`}>
          <a>{name}</a>
        </Link>
      </Text>
    </Text>
  )
}
