import React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import Article from './article-card'
import Link from 'next/link'

const Articles = ({ articles }) => {
  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='center'
      w='100%'
      p='8'
    >
      <Flex direction={{ base: 'column', md: 'row' }} w='100%' flexWrap='wrap'>
        {articles.map(article => (
          <Article key={article.slug} article={article} />
        ))}
      </Flex>

      <Button
        py={{ base: '5', md: '7' }}
        px={{ base: '10', md: '12' }}
        lineHeight='1'
        size='lg'
        bg='teal.400'
        color='white'
        borderRadius='50px'
        fontWeight='normal'
        borderRadius='false'
        _hover={{
          bg: 'teal.500',
        }}
      >
        <Link href='/articles'>
          <a>More Articles</a>
        </Link>
      </Button>
    </Flex>
  )
}

export default Articles
