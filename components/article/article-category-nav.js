import { listTags } from '@/lib/postTags'
import { Button, Flex, HStack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ArticleCategoryNav = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <HStack d='flex' mb='8'>
      {listTags().map((tag, i) => (
        <Link key={i} href={`/category/${tag.slug}`}>
          <Text
            as='a'
            position='relative'
            borderRadius='false'
            fontWeight='normal'
            cursor='pointer'
            color={tag.slug === slug ? 'black' : 'gray.500'}
            _after={{
              display: tag.slug === slug ? 'block' : 'none',
              content: "''",
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: '-2px',
              bg: 'black',
              height: '1.5px',
            }}
          >
            {tag.name}
          </Text>
        </Link>
      ))}
    </HStack>
  )
}

export default ArticleCategoryNav
