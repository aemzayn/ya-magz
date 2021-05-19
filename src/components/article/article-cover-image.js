import { Box, Image, Text } from '@chakra-ui/react'

export default function ArticleCoverImage({ featuredImage, alt, imgsource }) {
  return featuredImage ? (
    <Box w='100%' mt={4} mb={imgsource ? 2 : 5} pos='relative'>
      <Image
        w='100%'
        maxH='700px'
        objectFit='contain'
        objectPosition='center'
        src={featuredImage ?? ''}
        alt={alt ?? 'cover'}
      />
      {imgsource && (
        <Text textAlign='center' mt={1} color='gray.600'>
          {imgsource}
        </Text>
      )}
    </Box>
  ) : null
}
