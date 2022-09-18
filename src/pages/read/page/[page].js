import Layout from "@/components/layout"
import ArticleList from "@/components/article/ArticleList"
import Meta from "@/components/meta"
import { countArticles, fetchArticles } from "@/libs/api"

export default function Page({ articles, pagination, page }) {
  const url = `/articles/page/${page}`
  const title = `All posts page ${page}`
  return (
    <Layout>
      <Meta url={url} title={title} />
      <ArticleList
        nav
        title={"Articles"}
        articles={articles}
        pagination={pagination}
      />
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const page = parseInt(params.page)
  const articles = (await fetchArticles()).slice(
    (params.page - 1) * 9,
    params.page * 9
  )
  const count = await countArticles()
  const pagination = {
    current: page,
    pages: Math.ceil(count / 9),
  }
  return {
    props: {
      articles,
      pagination,
      page,
    },
  }
}
