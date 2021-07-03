import { useRouter } from "next/router"
import { listPosts } from "src/libs/posts"
import config from "@/cms/site-settings.json"
import Layout from "@/components/layout/layout"
import { getTag, listTags } from "src/libs/postTags"
import BasicMeta from "@/components/meta/basicMeta"
import OpenGraphMeta from "@/components/meta/openGraphMeta"
import TwitterCardMeta from "@/components/meta/twitterCardMeta"
import ArticleList from "@/components/article/article-list"

export default function ArticlesByCategory({ articles }) {
  const router = useRouter()
  const { slug } = router.query
  const category = getTag(slug).name || ""
  const url = `/category/${category}`
  const title = category

  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <ArticleList
        articles={articles}
        title="Category:"
        subtitle={category}
        nav
        url={slug}
      />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const articles = listPosts(1, config.posts_per_page, params.slug) || []
  return {
    props: {
      articles,
    },
  }
}

export async function getStaticPaths() {
  const paths = listTags().map(it => ({
    params: {
      slug: it.slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
