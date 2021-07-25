import config from "@/cms/site-settings.json"
import Layout from "@/components/layout"
import ArticleList from "@/components/article/article-list"
import Meta from "@/components/meta"
import { countArticles, fetchArticles } from "@/libs/api"

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
  const articles = (await fetchArticles()).slice(0, 9)
  const count = await countArticles()
  const pagination = {
    current: 1,
    pages: Math.ceil(count / config.posts_per_page),
  }
  return {
    props: {
      articles,
      pagination,
    },
  }
}
