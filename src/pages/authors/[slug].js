import Layout from "@/components/layout"
import ArticleList from "@/components/article/article-list"
import fetchApi from "@/libs/fetchApi"
import Meta from "@/components/meta"

export default function ArticlesByAuthor({ articles, author }) {
  const url = `/author/${author.slug}`
  const title = `Articles by ${author.name}`

  return (
    <Layout>
      <Meta url={url} title={title} />
      <main role="main">
        <article itemScope itemType="https://schema.org/Author">
          <ArticleList
            title="Articles by"
            subtitle={author.name}
            articles={articles}
            type="author"
          />
        </article>
      </main>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const data = await fetchApi(`/authors/${params.slug}`)
  return {
    props: {
      articles: data.articles,
      author: {
        name: data.name,
        slug: data.slug,
      },
    },
  }
}

export async function getStaticPaths() {
  const paths = (await fetchApi("/authors")).map(it => ({
    params: {
      slug: it.slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
