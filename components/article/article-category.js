import Link from 'next/link'
import { Flex, Text } from '@chakra-ui/react'

export default function ArticleCategory({ category }) {
  return (
    <Flex color='gray.400' d='flex' my='5'>
      <Text mr='1'>Category: </Text>
      <Text
        _hover={{
          color: 'gray.600',
        }}
      >
        <Link href={`/category/${category.slug}`}>
          <a>{category.name}</a>
        </Link>
      </Text>
    </Flex>
  )
}
