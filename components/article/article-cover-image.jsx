import { Box, Image } from '@chakra-ui/react'

export default function ArticleCoverImage({ featuredImage }) {
  return (
    <Box w='100%' mt='7' mb='10'>
      <Image
        w='100%'
        h='100%'
        objectFit='cover'
        objectPosition='bottom'
        src={featuredImage}
        alt='something'
      />
    </Box>
  )
}
