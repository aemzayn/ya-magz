import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Article from '../../components/home/article'
import articles from '../../data/articlesData'

const ArticlesPage = () => {
  return (
    <Flex
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
        {articles.map(article => (
          <Article key={article.id} article={article} />
        ))}
      </Flex>
    </Flex>
  )
}

export default ArticlesPage
