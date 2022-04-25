import Image from "next/image"
import { Flex } from "@chakra-ui/react"

export default function HeroImage({ url, alt }) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gridArea="image"
      height={{ base: "30vh", md: "40vh", lg: "78vh" }}
      position="relative"
      transitionProperty="opacity"
      transitionDuration="300ms"
      width={{ base: "full", md: "30vw", lg: "35vw" }}
    >
      <Image
        src={url}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={70}
      />
    </Flex>
  )
}
