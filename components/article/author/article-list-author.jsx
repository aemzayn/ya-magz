import { Flex, Heading } from '@chakra-ui/react'
import ArticleCard from '@/components/home/article-card'

export default function ArticleListAuthor({ articles, author }) {
  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='center'
      w='100%'
      px='8'
      pb='8'
    >
      <Flex
        d='flex'
        flexDir={{ base: 'column', xl: 'row' }}
        alignItems={{ base: 'center', xl: 'flex-end' }}
        textAlign='center'
        my='8'
      >
        <Heading
          className='page-title'
          color='gray.400'
          size='xl'
          display='block'
          mr='2'
        >
          Articles by:
        </Heading>
        <Heading className='page-title' size='2xl' display='block'>
          {author}
        </Heading>
      </Flex>
      <Flex direction={{ base: 'column', lg: 'row' }} w='100%' flexWrap='wrap'>
        {articles.map((ar, i) => (
          <ArticleCard key={i} article={ar} />
        ))}
      </Flex>
    </Flex>
  )
}
