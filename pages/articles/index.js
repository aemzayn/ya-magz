import ArticleCard from '@/components/home/article-card'
import { getAllArticles } from '@/lib/api'
import { Flex, Heading } from '@chakra-ui/react'

export default function ArticlesPage({ articles }) {
  console.log(articles)
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
        {articles.length > 0 ? (
          articles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))
        ) : (
          <h4>Loading...</h4>
        )}
      </Flex>
    </Flex>
  )
}

export async function getServerSideProps() {
  const allArticles = (await getAllArticles()) || []

  return {
    props: {
      articles: allArticles,
    },
  }
}
