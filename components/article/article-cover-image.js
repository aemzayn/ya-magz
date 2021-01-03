import { Box, Image } from '@chakra-ui/react'

export default function ArticleCoverImage({ url }) {
  return (
    <Box w='100%' mt='7' mb='10'>
      <Image
        w='100%'
        h='100%'
        objectFit='cover'
        objectPosition='bottom'
        src={url}
        alt='something'
      />
    </Box>
  )
}
