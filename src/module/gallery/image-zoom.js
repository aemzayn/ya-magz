import { Box, Image } from "@chakra-ui/react"

export default function ImageZoom({ image }) {
  return (
    <Box bgColor="blackAlpha.500" pos="absolute" inset={0} zIndex={999}>
      <Image maxH="90vh" src={image.link} alt={image.photographer.name || ""} />
    </Box>
  )
}
