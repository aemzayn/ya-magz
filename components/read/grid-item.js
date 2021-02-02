import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Image, Skeleton } from '@chakra-ui/react'

const GridItem = ({ item, redirect }) => {
  return (
    <Box
      boxShadow={item.cover ? 'xl' : 'none'}
      pos='relative'
      className='grid-item'
    >
      {/* <Skeleton w='100%' isLoaded={item.cover ? true : false}> */}
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
      {/* </Skeleton> */}
    </Box>
  )
}

export default GridItem
