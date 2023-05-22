import { useRouter } from "next/router"
import { useEffect } from "react"
import { READ_ROUTE } from "src/constanst/routes"

export default function Category() {
  const { push } = useRouter()
  useEffect(() => {
    push(READ_ROUTE)
  }, [push])
  return null
}
