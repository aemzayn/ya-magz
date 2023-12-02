import Layout from "@/components/layout"
import ArticleList from "@/components/article/ArticleList"
import Meta from "@/components/meta"
import { fetchAuthorArticles, fetchAuthorsSlug, getAuthor } from "@/libs/api"
import { AUTHOR_ID_ROUTE } from "src/constanst/routes"

export default function ArticlesByAuthor({ articles, author }) {
  const url = AUTHOR_ID_ROUTE(author.slug)
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

  const authorList = await getAuthor(params.slug)

  const author = authorList.length > 0 ? authorList[0].name : ""

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
