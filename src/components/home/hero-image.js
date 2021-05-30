import { Box, Image as ChakraImage } from "@chakra-ui/react"

export default function HeroImage({ url }) {
  return (
    <Box h={{ base: "unset", md: "30vh", lg: "unset" }}>
      <ChakraImage
        src={url}
        w={{ base: "full", lg: "unset" }}
        height={{ base: "full" }}
        width="full"
        objectFit="cover"
        objectPosition={{ base: "center", md: "bottom", lg: "center" }}
      />
    </Box>
  )
}
