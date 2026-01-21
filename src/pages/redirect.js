import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import isUrl from "src/libs/isUrl"
import NotFound from "./404"

export default function Redirect() {
  const [isValidUrl, setIsValidUrl] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if (router.query.url) {
      const isValid = isUrl(router.query.url)
      setIsValidUrl(isValid)
      if (isValid) {
        // Perform client-side redirect
        window.location.href = router.query.url
      }
    }
  }, [router.query])

  if (isValidUrl === false) {
    return <NotFound />
  }

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <main>Redirecting...</main>
    </>
  )
}
