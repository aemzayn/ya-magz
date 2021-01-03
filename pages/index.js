import Head from 'next/head'
import { Articles, Hero } from '@/components/home'
import { getAllPostsForHome, getHeroPost } from '@/lib/api'
import Footer from '@/components/sections/footer'

export default function Home({ articles, heroArticle }) {
  return (
    <>
      <Head>
        <title>Ya! Magazine</title>
      </Head>
      {articles && heroArticle ? (
        <>
          {heroArticle && <Hero article={heroArticle} />}
          <Articles articles={articles} />
          {/* <Newsletter /> */}
          <Footer />
        </>
      ) : (
        <h4>Loading...</h4>
      )}
    </>
  )
}

export async function getServerSideProps() {
  const allArticles = (await getAllPostsForHome()) || []
  const heroArticle = (await getHeroPost()) || {}
  const homeArticle = allArticles.filter(art => art.id !== heroArticle.id)

  return {
    props: {
      articles: homeArticle,
      heroArticle,
    },
  }
}
