import { Box, Text, Flex } from "@chakra-ui/react"
import Image from "next/image"

export default function ArticleCoverImage({ featuredImage, alt, imgsource }) {
  return featuredImage ? (
    <Flex
      flexDirection="column"
      width="100%"
      marginY={imgsource ? 2 : 5}
      position="relative"
    >
      <Box width="full" height="500px">
        <Image
          layout="fill"
          objectFit="contain"
          src={featuredImage}
          alt={alt}
        />
      </Box>
      {imgsource && (
        <Text textAlign="center" marginTop={10} color="brand.gray">
          {imgsource}
        </Text>
      )}
    </Flex>
  ) : null
}
