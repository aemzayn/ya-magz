import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import isUrl from "src/libs/isUrl"
import NotFound from "./404"
import redirect from "nextjs-redirect"

export default function Redirect() {
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [isValidUrl, setIsValidUrl] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if (router.query.url) {
      const isValid = isUrl(router.query.url)
      setIsRedirecting(isValid)
      if (!isValid) {
        setIsValidUrl(false)
      }
    }
  }, [router.query])

  if (!isRedirecting && isValidUrl === false) {
    return <NotFound />
  }

  if (!isRedirecting) {
    return "redirecting..."
  }

  const Redirect = redirect(router.query.url)

  return (
    <Redirect>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <main>Redirecting...</main>
    </Redirect>
  )
}
