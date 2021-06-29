import { useState } from "react"
import { useInView } from "react-intersection-observer"

export default function RenderInView({ children, rootMargin }) {
  const [loaded, setLoaded] = useState(false)
  const setIsLoaded = () => setLoaded(true)
  const { ref, inView } = useInView({
    rootMargin: rootMargin ?? "50px 0px",
    triggerOnce: true,
  })
  return <>{children({ ref, inView, loaded, setLoaded, setIsLoaded })}</>
}
