import Layout from "@/components/layout"
import ArticleList from "@/components/article/article-list"
import fetchApi from "@/libs/fetchApi"
import Meta from "@/components/meta"

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

export async function getStaticProps({ params }) {
  const data = await fetchApi(`/categories/${params.slug}`)
  return {
    props: {
      articles: data.articles,
      category: {
        name: data.name,
        slug: data.name,
      },
    },
  }
}

export async function getStaticPaths() {
  const paths = (await fetchApi("/categories")).map(it => ({
    params: {
      slug: it.slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
