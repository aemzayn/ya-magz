import Head from 'next/head'
import { Articles, Hero } from '../components/home'
import Newsletter from '../components/home/newsletter'
import Footer from '../components/sections/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ya! Magazine</title>
      </Head>
      <Hero />
      <Articles />
      <Newsletter />
      <Footer />
    </>
  )
}
