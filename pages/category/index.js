import Layout from '@/components/article/layout'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Category() {
  const router = useRouter()
  useEffect(() => {
    router.push('/articles')
  }, [])
  return (
    <Layout>
      <h1>Redirecting to /articles ...</h1>
    </Layout>
  )
}
