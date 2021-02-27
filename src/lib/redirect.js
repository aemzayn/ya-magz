import { useRouter } from 'next/router'

export default function redirect(url) {
  const router = useRouter()
  return router.push(url)
}
