import { Box, Image, Skeleton } from '@chakra-ui/react'

export default function ArticleCoverImage({ featuredImage, alt }) {
  return featuredImage ? (
    <Box w='100%' my={5}>
      <Image
        w='100%'
        maxH='700px'
        objectFit='contain'
        objectPosition='center'
        src={featuredImage ?? ''}
        alt={alt ?? 'cover'}
      />
    </Box>
  ) : null
}
