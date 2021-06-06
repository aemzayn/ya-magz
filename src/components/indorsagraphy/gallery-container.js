import {
  Box,
  Center,
  Heading,
  Text,
  Tooltip,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import GalleryItem from "./gallery-item"

const GalleryContainer = ({ images }) => {
  const titleSize = useBreakpointValue({ base: "2xl" })
  const subtitleSize = useBreakpointValue({ base: "md" })
  const columnCount = useBreakpointValue({ base: 2, md: 3, xl: 4 })
  return (
    <Box as="main" minH="70vh">
      <VStack textAlign="center" justifyContent="center" py={{ base: 6 }}>
        <Heading
          as="h1"
          className="page-title"
          color="black"
          size={titleSize}
          display="block"
          textAlign="center"
          userSelect="none"
        >
          Gallery
        </Heading>
        <Heading
          as="h2"
          size={subtitleSize}
          color="gray.500"
          fontWeight="normal"
          d="flex"
        >
          In collaboration with
          <Tooltip
            label="@indorsagraphy on IG"
            aria-label="Visit Indorsagraphy Instagram"
            hasArrow
          >
            <Text
              as="a"
              href="https://www.instagram.com/indorsagraphy/"
              target="_blank"
              rel="author"
              ml={{ base: 1 }}
            >
              @Indorsagraphy
            </Text>
          </Tooltip>
        </Heading>
      </VStack>
      {images.length > 0 ? (
        <Box css={{ columnCount: columnCount, columnGap: "10px" }}>
          {images.map((im, i) => (
            <GalleryItem image={im} key={i} />
          ))}
        </Box>
      ) : (
        <Center w="100%" minH="20vh">
          <Heading>Coming soon</Heading>
        </Center>
      )}
    </Box>
  )
}

export default GalleryContainer
