import { Box, Image } from "@chakra-ui/react"

export default function HeroImage({ url, alt }) {
  return (
    <Box
      gridArea="image"
      h={{ base: "30vh", md: "40vh", lg: "78vh" }}
      bgColor="hsl(255,6%,0%)"
    >
      <Image src={url} alt={alt} w="full" h="full" objectFit="contain" />
    </Box>
  )
}
