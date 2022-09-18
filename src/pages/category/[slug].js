import Layout from "@/components/layout"
import ArticleList from "@/components/article/ArticleList"
import Meta from "@/components/meta"
import { fetchByCategory, fetchCategorySlug } from "@/libs/api"

export default function ArticlesByCategory({ articles, category }) {
  const url = `/category/${category.slug}`

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

export async function getServerSideProps({ params }) {
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
