import ArticleList from "@/components/article/article-list"
import Meta from "@/components/meta/meta"
import FeaturedArticle from "@/components/home/featured-article"
import Hero from "@/components/home/hero"
import HomeMood from "@/components/home/home-mood"
import HomeTeam from "@/components/home/home-team"
import YaPodcast from "@/components/home/ya-podcast"
import Layout from "@/components/layout/layout"
import { getFeaturedArticles, getHomeArticles } from "@/lib/posts"

export default function Home({ articles, heroArticle, featuredArticle }) {
  const [featuredOne, featuredTwo] = featuredArticle
  return (
    <Layout>
      <Meta url="/" />
      <main>
        {heroArticle && <Hero article={heroArticle} />}
        <ArticleList articles={articles.slice(0, 6)} />
        {featuredOne && (
          <FeaturedArticle article={featuredArticle[0]} btnColor="orange.600" />
        )}
        <ArticleList articles={articles.slice(6, 12)} />
        {featuredTwo && (
          <FeaturedArticle
            article={featuredArticle[1]}
            btnColor="blue.600"
            reverse
          />
        )}
        <ArticleList
          articles={articles.slice(12, articles.length)}
          moreBtn
          moreBtnHref="/read"
        />
        <YaPodcast />
        <HomeMood />
        <HomeTeam />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const { heroArticle, articles } = getHomeArticles()
  const featuredArticle = getFeaturedArticles()
  return {
    props: {
      heroArticle,
      featuredArticle,
      articles,
    },
  }
}
