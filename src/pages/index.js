import ArticleList from "@/components/article/article-list"
import FeaturedArticle from "@/components/home/featured"
import Hero from "@/components/home/hero/index"
import HomeEntertainment from "src/module/entertainment/home"
import Layout from "@/components/layout"
import HomeTeam from "@/components/team/home-team"
import Meta from "@/components/meta"
import { fetchFeatured, fetchHero, fetchHomeArticles } from "@/libs/api"

export default function Home({ heroArticle, homeArticles, featuredArticles }) {
  return (
    <Layout>
      <Meta url="/" />
      <main>
        {heroArticle && <Hero article={heroArticle} />}
        {homeArticles.length > 6 && (
          <ArticleList articles={homeArticles.slice(0, 6)} />
        )}
        {featuredArticles?.[0] && (
          <FeaturedArticle
            article={featuredArticles[0]}
            btnColor="orange.600"
          />
        )}
        {homeArticles.length > 12 && (
          <ArticleList articles={homeArticles.slice(6, 12)} />
        )}
        {featuredArticles?.[1] && (
          <FeaturedArticle
            article={featuredArticles[1]}
            btnColor="blue.600"
            reverse
          />
        )}
        {homeArticles.length > 13 && (
          <ArticleList
            articles={homeArticles.slice(12, homeArticles.length)}
            moreBtn
            moreBtnHref="/read"
          />
        )}
        <HomeEntertainment />
        <HomeTeam />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const homeArticles = await fetchHomeArticles()
  const heroArticle = await fetchHero()
  const featuredArticles = await fetchFeatured()
  return {
    props: {
      homeArticles,
      heroArticle,
      featuredArticles,
    },
    revalidate: 60,
  }
}
