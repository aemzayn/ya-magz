import { Box, Image, Skeleton } from '@chakra-ui/react'

export default function ArticleCoverImage({ featuredImage, alt }) {
  return (
    <Box w='100%' my={5}>
      <Skeleton w='100%' h='100%' isLoaded={featuredImage ? true : false}>
        <Image
          w='100%'
          maxH='700px'
          objectFit='contain'
          objectPosition='center'
          src={featuredImage ?? ''}
          alt={alt ?? 'cover'}
        />
      </Skeleton>
    </Box>
  )
}
