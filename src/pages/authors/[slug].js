import Layout from "@/components/layout"
import ArticleList from "@/components/article/article-list"
import Meta from "@/components/meta"
import { fetchAuthorArticles, fetchAuthorsSlug } from "@/libs/api"

export default function ArticlesByAuthor({ articles, author }) {
  const url = `/authors/${author.slug}`
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
  const articles = (await fetchAuthorArticles(params.slug)) || [
    { author: { name: "" } },
  ]

  if (!articles) {
    return {
      props: {
        articles: null,
      },
      author: {
        name: "",
        slug: "",
      },
    }
  }

  return {
    props: {
      articles,
      author: {
        name: articles[0].author.name,
        slug: params.slug,
      },
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const paths = (await fetchAuthorsSlug()).map(it => ({
    params: {
      slug: it.slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
