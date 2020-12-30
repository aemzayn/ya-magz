import Head from 'next/head'
import { Articles, Hero } from '../components/home'
import Newsletter from '../components/home/newsletter'
import Footer from '../components/sections/footer'

export default function Home({ data }) {
  console.log(data)
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

export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.API_URL}/articles`)
  const data = await res.json()
  if (data.errors) {
    console.error(data.errors)
    throw new Error('Failed to fetch API')
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  }
}
