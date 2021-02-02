import { listTags } from '@/lib/postTags'
import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ArticleCategoryNav = () => {
  const router = useRouter()
  const { slug } = router.query
  const tags = listTags()
  return (
    <Flex
      w='100%'
      d='flex'
      mt='4'
      mb='8'
      borderBottomWidth='1px'
      borderBottomColor='gray.200'
      borderBottomStyle='solid'
      d='flex'
      justifyContent='center'
      overflowX='auto'
      flexWrap='wrap'
    >
      {tags.map((tag, i) => (
        <Button
          key={i}
          borderRadius='false'
          outline='false'
          colorScheme='black'
          cursor='pointer'
          color={tag.slug === slug ? 'black' : 'gray.400'}
          bg={tag.slug === slug ? 'gray.200' : 'none'}
          fontWeight='normal'
        >
          <Link key={i} href={`/category/${tag.slug}`}>
            <a>{tag.name}</a>
          </Link>
        </Button>
      ))}
    </Flex>
  )
}

export default ArticleCategoryNav
