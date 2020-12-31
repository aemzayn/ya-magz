import { Box, Image } from '@chakra-ui/react'

export default function HeroImage({ url }) {
  return (
    <Box
      w={{ base: '100%', xl: '33%' }}
      minH={{ base: 'unset', xl: '100%' }}
      h={{ base: '15rem', md: '20rem', lg: '25rem', xl: 'unset' }}
      mt='0'
    >
      <Image src={url} height='100%' width='100%' objectFit='cover' />
    </Box>
  )
}
