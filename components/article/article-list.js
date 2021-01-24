import { Flex, Heading } from '@chakra-ui/react'
import ArticleCard from '@/components/home/article-card'
import Pagination from './pagination'

export default function ArticleList({ articles, tags, pagination }) {
  return (
    <Flex
      as='main'
      direction='column'
      alignItems='center'
      justifyContent='center'
      w='100%'
      px='8'
      pb='8'
    >
      <Heading className='page-title' my='8' size='3xl' display='block'>
        Articles
      </Heading>
      <Flex direction={{ base: 'column', lg: 'row' }} w='100%' flexWrap='wrap'>
        {articles.map((ar, i) => (
          <ArticleCard key={i} article={ar} />
        ))}
      </Flex>
      <Pagination
        current={pagination.current}
        pages={pagination.pages}
        link={{
          href: page => (page === 1 ? '/articles' : '/articles/page/[page]'),
          as: page => (page === 1 ? null : '/articles/page/' + page),
        }}
      />
    </Flex>
  )
}
