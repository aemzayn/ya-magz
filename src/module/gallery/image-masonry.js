import React from "react"
import { SimpleGrid } from "@chakra-ui/react"
import ImageItem from "./image-item"

function ImageMasonry({ images, setSelected, onOpen }) {
  return (
    <SimpleGrid
      mt={8}
      columns={{ base: 1, md: 3 }}
      gap={{ base: 4, md: 2, xl: 3 }}
    >
      {Array.isArray(images) &&
        images.map(image => (
          <ImageItem
            onOpen={onOpen}
            key={image._id}
            image={image}
            setSelected={setSelected}
          />
        ))}
    </SimpleGrid>
  )
}

export default React.memo(ImageMasonry)
