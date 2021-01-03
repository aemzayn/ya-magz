import ArticleCard from '@/components/home/article-card'
import { useRouter } from 'next/router'
import { Flex, Heading } from '@chakra-ui/react'
import { getArticlesByAuthor, getAuthorSlugs } from '@/lib/api'
import { slugToNormal } from '@/lib/slugToNormal'
import Layout from '@/components/article/layout'

export default function ArticlesByAuthor({ articles, isValidSlug }) {
  const router = useRouter()
  const { slug } = router.query
  const authorName = slugToNormal(slug)

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
          {authorName}
        </Heading>
      </Flex>
      <Flex direction={{ base: 'column', lg: 'row' }} w='100%' flexWrap='wrap'>
        {isValidSlug && articles.length > 0 ? (
          articles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))
        ) : !isValidSlug ? (
          <Layout>
            <Heading
              fontWeight='normal'
              mb='4'
              as='h1'
              fontFamily='Product Sans'
            >
              There are no articles by this author
            </Heading>
          </Layout>
        ) : (
          <Heading fontWeight='normal' mb='4' as='h1' fontFamily='Product Sans'>
            <h4>Loading...</h4>
          </Heading>
        )}
      </Flex>
    </Flex>
  )
}

export async function getServerSideProps({ query }) {
  let isValidSlug = false
  const { slug } = query
  const allAuthors = (await getAuthorSlugs()) || []
  const articles = (await getArticlesByAuthor(slug)) || []
  const slugs = allAuthors.map(a => a.slug)
  if (slugs.includes(slug)) {
    isValidSlug = true
  }

  return {
    props: {
      articles,
      isValidSlug,
    },
  }
}
