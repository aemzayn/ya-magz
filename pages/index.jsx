import { Articles, Hero } from '@/components/home'
import { getHeroArticle, getHomeArticles } from '@/lib/posts'
import BasicMeta from '@/components/article/meta/basicMeta'
import OpenGraphMeta from '@/components/article/meta/openGraphMeta'
import TwitterCardMeta from '@/components/article/meta/twitterCardMeta'
import Layout from '@/components/sections/layout'

export default function Home({ homeArticles, heroArticle }) {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />

      <Hero article={heroArticle} />
      <Articles articles={homeArticles} />
      {/* <Newsletter /> */}
    </Layout>
  )
}

export async function getStaticProps() {
  const heroArticle = getHeroArticle()
  const homeArticles = getHomeArticles()
  return {
    props: {
      heroArticle,
      homeArticles,
    },
  }
}
