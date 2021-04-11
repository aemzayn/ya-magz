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
      justifyContent='center'
      overflowX='auto'
      flexWrap='wrap'
      pos='relative'
      _after={{
        content: '""',
        display: 'block',
        pos: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '1px',
        backgroundColor: 'gray.200',
      }}
    >
      <Link href={`/read`}>
        <Button
          as='a'
          borderRadius='false'
          outline='false'
          colorScheme='black'
          cursor='pointer'
          color={pathname.indexOf('/read') !== -1 ? 'black' : 'gray.400'}
          bg={pathname.indexOf('/read') !== -1 ? 'gray.200' : 'none'}
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
