import ArticleList from "@/components/article/article-list"
import Meta from "@/components/meta"
import FeaturedArticle from "@/components/home/featured"
import HomeMood from "@/components/home/mood"
import HomeTeam from "@/components/home/entertainment/home-mood"
import YaPodcast from "@/components/home/entertainment/ya-podcast"
import Layout from "@/components/layout"
import fetchApi from "@/libs/fetchApi"
import Hero from "@/components/home/hero/index"

export default function Home({ heroArticle, featuredArticle, articles }) {
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
  const { hero, featured, articles } = await fetchApi("/articles/home")
  return {
    props: {
      heroArticle: hero,
      featuredArticle: featured,
      articles: articles,
    },
  }
}
