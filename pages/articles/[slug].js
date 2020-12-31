import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Heading, Text } from '@chakra-ui/react'
import { getAllArticlesSlug, getArticleBySlug } from '@/lib/api'
import ArticleBody from '@/components/article/article-body'
import ArticleAuthor from '@/components/article/article-author'
import ArticleTitle from '@/components/article/article-title'
import ArticleCoverImage from '@/components/article/article-cover-image'
import Layout from '@/components/article/layout'
import HomeButton from '@/components/article/home-button'

export default function ArticlePage({ article, paths }) {
  const [isValidPath, setIsValidPath] = useState(false)
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    if (paths.includes(slug)) {
      setIsValidPath(true)
    } else {
      setIsValidPath('404')
    }
  }, [paths, slug])

  return isValidPath === true ? (
    <Layout title={article?.title}>
      <ArticleAuthor
        name={article?.author?.name}
        slug={article?.author?.slug}
      />
      <ArticleTitle title={article?.title} />
      <ArticleCoverImage url={article?.cover_img?.url} />
      <ArticleBody body={article?.body} />
    </Layout>
  ) : isValidPath === '404' && !article.title ? (
    <Layout>
      <Heading fontWeight='normal' mb='4' as='h1' fontFamily='Product Sans'>
        We cannot find this article
      </Heading>
      <Box textAlign='center' mt='2'>
        <HomeButton />
      </Box>
    </Layout>
  ) : (
    <Layout>
      <Heading fontWeight='normal' mb='4' as='h1' fontFamily='Product Sans'>
        Loading...
      </Heading>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const { slug } = ctx.query
  const article = (await getArticleBySlug(slug)) || {}
  const data = (await getAllArticlesSlug()) || []
  const paths = data.map(article => article.slug)

  return {
    props: {
      article,
      paths,
    },
  }
}
