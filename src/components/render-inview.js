import { useInView } from "react-intersection-observer"

export default function RenderInView({ children }) {
  const { ref, inView } = useInView({
    rootMargin: "50px 0px",
    triggerOnce: true,
  })
  return <>{children({ ref, inView })}</>
}
