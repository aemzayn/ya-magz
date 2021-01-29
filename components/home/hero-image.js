import { Box, Image, Skeleton } from '@chakra-ui/react'

export default function HeroImage({ url }) {
  return (
    <Box
      w={{ base: '100vw', xl: '33vw' }}
      minH={{ base: 'unset', xl: '100%' }}
      h={{ base: '15rem', md: '20rem', lg: '25rem', xl: 'unset' }}
      mt='0'
      maxH={{ base: 'unset', xl: '600px' }}
    >
      <Skeleton height='100%' width='100%' isLoaded={url ? true : false}>
        <Image src={url} height='100%' width='100%' objectFit='cover' />
      </Skeleton>
    </Box>
  )
}
