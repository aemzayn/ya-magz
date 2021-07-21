import {
  Box,
  Heading,
  Link,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react"
import Layout from "@/components/layout"
import Meta from "@/components/meta"
import ImageMasonry from "./image-masonry"
import ImagePopup from "../image-popup"
import { useState } from "react"

export default function GalleryPage({ photos }) {
  const [selected, setSelected] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const titleSize = useBreakpointValue({ base: "4xl", xl: "5xl" })
  return (
    <Layout>
      <Meta
        title="Gallery"
        description="Galeri kolaborasi dengan Indorsagraphy"
        url={"/gallery"}
        keywords={[
          "indorsagraphy",
          "photography",
          "bursa photograph",
          "bursa",
          "ppi bursa",
        ]}
      />
      <Box
        py={8}
        px={{ base: 8, md: 2 }}
        textAlign="center"
        maxW={{ base: "full", md: "80%" }}
        mx="auto"
      >
        <Heading as="h1" fontSize={titleSize}>
          Gallery
        </Heading>
        <Text>
          In collaboration with
          <Link
            ml={1}
            referrerPolicy="no-referrer"
            href={`/redirect?url=https://www.instagram.com/ya.magz`}
          >
            @Indorsagraphy
          </Link>
        </Text>
        <ImageMasonry
          onOpen={onOpen}
          setSelected={setSelected}
          images={photos}
        />
      </Box>
      <ImagePopup
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        image={selected}
        setSelected={setSelected}
      />
    </Layout>
  )
}
