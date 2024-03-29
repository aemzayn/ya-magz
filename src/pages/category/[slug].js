import Layout from "@/components/layout"
import ArticleList from "@/components/article/ArticleList"
import Meta from "@/components/meta"
import { fetchByCategory, fetchCategorySlug } from "@/libs/api"
import { CATEGORY_ID_ROUTE } from "src/constanst/routes"

export default function ArticlesByCategory({ articles, category }) {
  const url = CATEGORY_ID_ROUTE(category.slug)

  return (
    <Layout>
      <Meta title={category.name} url={url} />
      <ArticleList
        articles={articles}
        title="Category:"
        subtitle={category.name}
        nav
        url={category.slug}
      />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const articles = await fetchByCategory(params.slug)
  return {
    props: {
      articles,
      category: {
        name: articles?.[0]?.category.name,
        slug: params.slug,
      },
    },
  }
}

export async function getStaticPaths() {
  const paths = (await fetchCategorySlug()).map(it => ({
    params: {
      slug: it.slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
