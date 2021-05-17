import ArticleList from '@/components/article/article-list'
import BasicMeta from '@/components/article/meta/basicMeta'
import OpenGraphMeta from '@/components/article/meta/openGraphMeta'
import TwitterCardMeta from '@/components/article/meta/twitterCardMeta'
import Hero from '@/components/home/hero'
import HomeCarouselCard from '@/components/home/home-carousel-card'
import HomeMood from '@/components/home/home-mood'
import HomeTeam from '@/components/home/home-team'
import YaPodcast from '@/components/home/ya-podcast'
import Layout from '@/components/sections/layout'
import { getHomeArticles } from '@/lib/posts'

export default function Home({ articles, heroArticle, artArticles }) {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />

      <Hero article={heroArticle} />
      {/* <ArticleList
        articles={articles?.slice(0, Math.round(articles.length / 2))}
      /> */}
      {/* <HomeCarouselCard articles={artArticles} /> */}
      <ArticleList articles={articles} moreBtn={true} moreBtnHref={'/read'} />
      {/* <Newsletter /> */}
      <YaPodcast />
      <HomeMood />
      <HomeTeam />
    </Layout>
  )
}

export async function getStaticProps() {
  const allArticles = getHomeArticles()
  const { heroArticle, articles, artArticles } = allArticles
  // const heroArticle = getHeroArticle()
  // const artArticles = getArtPosts()
  return {
    props: {
      articles,
      heroArticle,
      artArticles,
    },
  }
}
