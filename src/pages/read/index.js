import { countArticlesWithoutTag, listArticlesWithoutTag } from "@/lib/posts"
import config from "@/cms/site-settings.json"
import Layout from "@/components/layout/layout"
import BasicMeta from "@/components/meta/basicMeta"
import OpenGraphMeta from "@/components/meta/openGraphMeta"
import TwitterCardMeta from "@/components/meta/twitterCardMeta"
import ArticleList from "@/components/article/article-list"
import Meta from "@/components/meta/meta"

export default function ArticlesPage({ articles, pagination }) {
  const url = "/articles"
  const title = "Articles"
  return (
    <Layout>
      <Meta
        url={url}
        title={title}
        keywords={["article", "ya magazine", "ya emagazine"]}
        description={"All articles from Ya! Magazine"}
      />
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <ArticleList
        title={"Articles"}
        articles={articles}
        pagination={pagination}
        nav
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = listArticlesWithoutTag(1, config.posts_per_page)
  const pagination = {
    current: 1,
    pages: Math.ceil(countArticlesWithoutTag("art") / config.posts_per_page),
  }
  return {
    props: {
      articles: posts,
      pagination,
    },
  }
}
