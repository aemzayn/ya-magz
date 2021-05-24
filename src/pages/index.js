import ArticleList from "@/components/article/article-list"
import BasicMeta from "@/components/article/meta/basicMeta"
import OpenGraphMeta from "@/components/article/meta/openGraphMeta"
import TwitterCardMeta from "@/components/article/meta/twitterCardMeta"
import FeaturedArticle from "@/components/home/featured-article"
import Hero from "@/components/home/hero"
import HomeCarouselCard from "@/components/home/home-carousel-card"
import HomeMood from "@/components/home/home-mood"
import HomeTeam from "@/components/home/home-team"
import YaPodcast from "@/components/home/ya-podcast"
import Layout from "@/components/sections/layout"
import { getHomeArticles } from "@/lib/posts"

export default function Home({
  articles,
  heroArticle,
  artArticles,
  featuredArticle,
}) {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />

      <Hero article={heroArticle} />

      {/* <HomeCarouselCard articles={artArticles} /> */}

      <ArticleList articles={articles.slice(0, 6)} />

      <FeaturedArticle article={featuredArticle[1]} btnColor="blue.400" />

      <ArticleList articles={articles.slice(6, 12)} />

      <FeaturedArticle
        article={featuredArticle[0]}
        btnColor="red.400"
        imgPos="center 38%"
        reverse
      />

      <ArticleList
        articles={articles.slice(12, articles.length)}
        moreBtn
        moreBtnHref="/read"
      />

      {/* <Newsletter /> */}

      <YaPodcast />
      <HomeMood />
      <HomeTeam />
    </Layout>
  )
}

export async function getStaticProps() {
  const allArticles = getHomeArticles()
  const { heroArticle, featuredArticle, articles, artArticles } = allArticles
  return {
    props: {
      heroArticle,
      featuredArticle,
      articles,
      artArticles,
    },
  }
}
