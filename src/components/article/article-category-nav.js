import { listTags } from '@/lib/postTags'
import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ArticleCategoryNav = () => {
  const router = useRouter()
  const {
    pathname,
    query: { slug },
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
      <Link href={`/read`}>
        <Button
          as='a'
          borderRadius='false'
          outline='false'
          colorScheme='black'
          cursor='pointer'
          color={pathname === '/read' ? 'black' : 'gray.400'}
          bg={pathname === '/read' ? 'gray.200' : 'none'}
          fontWeight='normal'
        >
          All
        </Button>
      </Link>
      {tags.map((tag, i) => (
        <Link key={i} href={`/category/${tag.slug}`}>
          <Button
            as='a'
            borderRadius='false'
            outline='false'
            colorScheme='black'
            cursor='pointer'
            color={tag.slug === slug ? 'black' : 'gray.400'}
            bg={tag.slug === slug ? 'gray.200' : 'none'}
            fontWeight='normal'
          >
            {tag.name}
          </Button>
        </Link>
      ))}
    </Flex>
  )
}

export default ArticleCategoryNav
