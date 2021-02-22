import { useRouter } from 'next/router'
import Layout from '@/components/sections/layout'
import { getAuthor, listAuthor } from '@/lib/authors'
import { getPostByAuthor } from '@/lib/posts'
import config from '@/cms/site-settings.json'
import BasicMeta from '@/components/article/meta/basicMeta'
import OpenGraphMeta from '@/components/article/meta/openGraphMeta'
import TwitterCardMeta from '@/components/article/meta/twitterCardMeta'
import ArticleList from '@/components/article/article-list'

export default function ArticlesByAuthor({ articles }) {
  const router = useRouter()
  const { slug } = router.query
  const author = getAuthor(slug).name || ''
  const url = `/author/${author}`
  const title = `Articles by ${author}`

  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <ArticleList title='Articles by' subtitle={author} articles={articles} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const articles = getPostByAuthor(1, config.posts_per_page, params.slug)
  return {
    props: {
      articles,
    },
  }
}

export async function getStaticPaths() {
  const paths = listAuthor().map(it => ({
    params: {
      slug: it.slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
