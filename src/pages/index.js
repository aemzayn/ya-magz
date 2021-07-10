import ArticleList from "@/components/article/article-list"
import FeaturedArticle from "@/components/home/featured"
import Hero from "@/components/home/hero/index"
import HomeEntertainment from "@/components/home/entertainment"
import Layout from "@/components/layout"
import HomeTeam from "@/components/team/home-team"
import Meta from "@/components/meta"
import fetchApi from "@/libs/fetchApi"

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
        <HomeEntertainment />
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
