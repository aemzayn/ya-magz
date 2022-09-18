import Layout from "@/components/layout"
import ArticleList from "@/components/article/ArticleList"
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

export async function getServerSideProps({ params }) {
  const articles = (await fetchAuthorArticles(params.slug)) || [
    { author: { name: "" } },
  ]
  const author =
    params.slug &&
    params.slug
      .split("-")
      .map(name => name[0].toUpperCase() + name.slice(1, name.length))

  if (!articles) {
    return {
      props: {
        articles: [],
      },
      author: {
        name: author,
        slug: params.slug,
      },
    }
  }

  return {
    props: {
      articles,
      author: {
        name: author,
        slug: params.slug,
      },
    },
  }
}
