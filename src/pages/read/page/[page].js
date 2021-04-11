import BasicMeta from '@/components/article/meta/basicMeta'
import OpenGraphMeta from '@/components/article/meta/openGraphMeta'
import TwitterCardMeta from '@/components/article/meta/twitterCardMeta'
import Layout from '@/components/sections/layout'
import { countPosts, listPosts } from '@/lib/posts'
import { listTags } from '@/lib/postTags'
import config from '@/cms/site-settings.json'
import ArticleList from '@/components/article/article-list'

export default function Page({ articles, tags, pagination, page }) {
  const url = `/articles/page/${page}`
  const title = 'All posts'
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <ArticleList
        nav
        title={'Articles'}
        articles={articles}
        pagination={pagination}
      />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const page = parseInt(params.page)
  const articles = listPosts(page, config.posts_per_page)
  const tags = listTags()
  const pagination = {
    current: page,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  }
  return {
    props: {
      page,
      articles,
      tags,
      pagination,
    },
  }
}

export async function getStaticPaths() {
  const pages = Math.ceil(countPosts() / config.posts_per_page)
  const paths = Array.from(Array(pages - 1).keys()).map(it => ({
    params: { page: (it + 2).toString() },
  }))
  return {
    paths: paths,
    fallback: false,
  }
}
