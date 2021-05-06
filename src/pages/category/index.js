import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Category() {
  const { push } = useRouter()
  useEffect(() => {
    push('/read')
  }, [])
  return null
}
