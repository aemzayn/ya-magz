import { listTags } from '@/lib/postTags'
import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ArticleCategoryNav = () => {
  const router = useRouter()
  const {
    pathname,
    query: { slug },
    push,
  } = router
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
      <Button
        borderRadius='false'
        outline='false'
        colorScheme='black'
        cursor='pointer'
        color={pathname === '/read' ? 'black' : 'gray.400'}
        bg={pathname === '/read' ? 'gray.200' : 'none'}
        fontWeight='normal'
      >
        <Link href={`/read`}>
          <a>All</a>
        </Link>
      </Button>
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
          onClick={() => push(`/category/${tag.slug}`)}
        >
          {tag.name}
        </Button>
      ))}
    </Flex>
  )
}

export default ArticleCategoryNav
