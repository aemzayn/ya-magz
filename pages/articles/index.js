import { countPosts, listPosts } from '@/lib/posts'
import config from '@/cms/site-settings.json'
import Layout from '@/components/sections/layout'
import BasicMeta from '@/components/article/meta/basicMeta'
import OpenGraphMeta from '@/components/article/meta/openGraphMeta'
import TwitterCardMeta from '@/components/article/meta/twitterCardMeta'
import ArticleList from '@/components/article/article-list'
import Meta from '@/components/article/meta/meta'

export default function ArticlesPage({ articles, pagination }) {
  const url = '/articles'
  const title = 'Articles'
  return (
    <Layout>
      <Meta
        url={url}
        title={title}
        keywords={['article', 'ya magazine', 'ya emagazine']}
        description={'All articles from Ya! Magazine'}
      />
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <ArticleList
        title={'All Articles'}
        articles={articles}
        pagination={pagination}
        nav
      />
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
