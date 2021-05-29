import { Box, Image as ChakraImage } from "@chakra-ui/react"

export default function HeroImage({ url }) {
  return (
    <Box>
      <ChakraImage src={url} height="100%" width="full" objectFit="cover" />
    </Box>
  )
}
