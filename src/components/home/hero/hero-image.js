import Image from "next/image"
import { Flex } from "@chakra-ui/react"
import { useState } from "react"

export default function HeroImage({ url, alt }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gridArea="image"
      height={{ base: "30vh", md: "40vh", lg: "78vh" }}
      bgColor="gray.50"
      position="relative"
      opacity={loaded ? 1 : 0}
      transitionProperty="opacity"
      transitionDuration="300ms"
    >
      <Image
        src={url}
        alt={alt}
        onLoad={() => setLoaded(true)}
        layout="fill"
        objectFit="contain"
        objectPosition="center"
        quality={90}
      />
    </Flex>
  )
}
