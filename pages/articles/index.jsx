import { countPosts, listPosts } from '@/lib/posts'
import config from '@/cms/site-settings.json'
import Layout from '@/components/sections/layout'
import ArticleList from '@/components/article/article-list'
import BasicMeta from '@/components/article/meta/basicMeta'
import OpenGraphMeta from '@/components/article/meta/openGraphMeta'
import TwitterCardMeta from '@/components/article/meta/twitterCardMeta'

export default function ArticlesPage({ articles, pagination }) {
  const url = '/articles'
  const title = 'Articles'
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <ArticleList articles={articles} pagination={pagination} />
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = listPosts(1, config.posts_per_page)
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  }
  return {
    props: {
      articles: posts,
      pagination,
    },
  }
}
