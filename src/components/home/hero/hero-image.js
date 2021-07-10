import Image from "next/image"
import { Flex } from "@chakra-ui/react"
import { useState } from "react"

/**
 * TODO:
 * 1. Fix image change position on load
 * 2. Delete unused fonts and library
 * 3. ...
 */

export default function HeroImage({ url, alt }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gridArea="image"
      height={{ base: "30vh", md: "40vh", lg: "78vh" }}
      bgColor="hsl(255,6%,0%)"
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
        quality={65}
      />
    </Flex>
  )
}
