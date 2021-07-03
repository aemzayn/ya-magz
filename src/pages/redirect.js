import Head from "next/head"
import { useRouter } from "next/router"
import isUrl from "src/libs/isUrl"
import NotFound from "./404"
import redirect from "nextjs-redirect"

export default function Redirect() {
  const router = useRouter()
  const { url } = router.query
  const isValid = isUrl(url)

  if (!url && !isValid) {
    return <NotFound />
  }

  const Redirect = redirect(url)

  return (
    <Redirect>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <main>Redirecting...</main>
    </Redirect>
  )
}
