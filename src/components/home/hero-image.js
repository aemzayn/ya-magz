import Image from "next/image"
import { Flex } from "@chakra-ui/react"

export default function HeroImage({ url, alt }) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gridArea="image"
      height={{ base: "30vh", md: "40vh", lg: "78vh" }}
      bgColor="hsl(255,6%,0%)"
      position="relative"
    >
      <div>
        <Image
          src={url}
          alt={alt}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          quality={65}
        />
      </div>
    </Flex>
  )
}
