import Head from 'next/head'
import { Articles, Hero } from '../components/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ya! Magazine</title>
      </Head>
      <Hero />
      <Articles />
    </>
  )
}
