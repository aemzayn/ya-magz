import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Center,
  Grid as ChakraGrid,
  Image,
  Skeleton,
} from '@chakra-ui/react'

const Grid = ({ items }) => {
  const redirect = url => {
    if (url) {
      window.location.href = url
    }
  }
  return (
    <ChakraGrid
      w={{ base: '100%', lg: '85%' }}
      px={{ base: 1, xl: 8 }}
      templateColumns={{
        base: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        xl: 'repeat(4, 1fr)',
      }}
      gap={{ base: 2, xl: 4 }}
    >
      {items?.map(item => (
        <Box
          boxShadow={item.cover ? 'xl' : 'none'}
          key={item.edition}
          pos='relative'
          className='grid-item'
        >
          <Skeleton w='100%' isLoaded={item.cover ? true : false}>
            <Image
              src={item.cover}
              w='100%'
              objectFit='cover'
              objectPosition='center'
              _hover={{ zoom: '110%' }}
            />

            <Center
              className='grid-item-overlay'
              pos='absolute'
              top='0'
              left='0'
              right='0'
              bottom='0'
              bgColor='rgb(0, 0, 0, 0.2)'
            >
              <Button
                borderRadius='false'
                fontWeight='normal'
                onClick={() => redirect(item.link)}
              >
                Read <ExternalLinkIcon ml='2' />
              </Button>
            </Center>
          </Skeleton>
        </Box>
      ))}
    </ChakraGrid>
  )
}

export default Grid
