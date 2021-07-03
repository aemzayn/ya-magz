import { useRouter } from "next/router"
import Layout from "@/components/layout/layout"
import { getAuthor, listAuthor } from "src/libs/authors"
import { getPostByAuthor } from "src/libs/posts"
import config from "@/cms/site-settings.json"
import BasicMeta from "@/components/meta/basicMeta"
import OpenGraphMeta from "@/components/meta/openGraphMeta"
import TwitterCardMeta from "@/components/meta/twitterCardMeta"
import ArticleList from "@/components/article/article-list"

export default function ArticlesByAuthor({ articles }) {
  const router = useRouter()
  const { slug } = router.query
  const author = getAuthor(slug).name || ""
  const url = `/author/${author}`
  const title = `Articles by ${author}`

  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <main role="main">
        <article itemScope itemType="https://schema.org/Author">
          <ArticleList
            title="Articles by"
            subtitle={author}
            articles={articles}
            type="author"
          />
        </article>
      </main>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const articles = getPostByAuthor(1, config.posts_per_page, params.slug)
  return {
    props: {
      articles,
    },
  }
}

export async function getStaticPaths() {
  const paths = listAuthor().map(it => ({
    params: {
      slug: it.slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
