import Layout from "@/components/layout"
import ArticleList from "@/components/article/article-list"
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

export async function getStaticProps({ params }) {
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

export async function getStaticPaths() {
  const count = await countArticles()
  const pages = Math.ceil(count / 9)
  const paths = Array.from(Array(pages - 1).keys()).map(it => ({
    params: { page: (it + 2).toString() },
  }))
  return {
    paths: paths,
    fallback: false,
  }
}
