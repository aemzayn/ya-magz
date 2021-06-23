import ArticleList from "@/components/article/article-list"
import Meta from "@/components/meta/meta"
import FeaturedArticle from "@/components/home/featured-article"
import Hero from "@/components/home/hero"
import HomeMood from "@/components/home/home-mood"
import HomeTeam from "@/components/home/home-team"
import YaPodcast from "@/components/home/ya-podcast"
import Layout from "@/components/sections/layout"
import { getHomeArticles } from "@/lib/posts"

export default function Home({ articles, heroArticle, featuredArticle }) {
  return (
    <Layout>
      <Meta url="/" />
      <main>
        <Hero article={heroArticle} />
        <ArticleList articles={articles.slice(0, 6)} />
        <FeaturedArticle article={featuredArticle[0]} colorScheme="orange" />
        <ArticleList articles={articles.slice(6, 12)} />
        <FeaturedArticle
          article={featuredArticle[1]}
          colorScheme="blue"
          reverse
        />
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
  const allArticles = getHomeArticles()
  const { heroArticle, featuredArticle, articles } = allArticles
  return {
    props: {
      heroArticle,
      featuredArticle,
      articles,
    },
  }
}
