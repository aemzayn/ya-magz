import {
  Box,
  Heading,
  Text,
  Tooltip,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import GalleryItem from './gallery-item'

const GalleryContainer = ({ images }) => {
  const titleSize = useBreakpointValue({ base: '2xl' })
  const subtitleSize = useBreakpointValue({ base: 'md' })
  return (
    <Box as='main' minH='100vh'>
      <VStack textAlign='center' justifyContent='center' py={{ base: 6 }}>
        <Heading
          as='h1'
          className='page-title'
          color='black'
          size={titleSize}
          display='block'
          textAlign='center'
          userSelect='none'
          // fontWeight='normal'
          // textTransform='uppercase'
        >
          Gallery
        </Heading>
        <Heading
          as='h2'
          size={subtitleSize}
          color='gray.500'
          fontWeight='normal'
          d='flex'
        >
          In collaboration with
          <Tooltip
            label='@indorsagraphy on IG'
            aria-label='Visit Indorsagraphy Instagram'
            hasArrow
          >
            <Text
              as='a'
              href='https://www.instagram.com/indorsagraphy/'
              target='_blank'
              rel='author'
              ml={{ base: 1 }}
            >
              @Indorsagraphy
            </Text>
          </Tooltip>
        </Heading>
      </VStack>
      <div className='masonry'>
        {images.length > 0 ? (
          images.map((im, i) => <GalleryItem image={im} key={i} />)
        ) : (
          <>
            <Box
              d='inline-block'
              width='100%'
              height='250px'
              bgColor='gray.200'
            />
            <Box
              d='inline-block'
              width='100%'
              height='600px'
              bgColor='gray.200'
            />
            <Box
              d='inline-block'
              width='100%'
              height='400px'
              bgColor='gray.200'
            />
            <Box
              d='inline-block'
              width='100%'
              height='250px'
              bgColor='gray.200'
            />
            <Box
              d='inline-block'
              width='100%'
              height='500px'
              bgColor='gray.200'
            />
            <Box
              d='inline-block'
              width='100%'
              height='400px'
              bgColor='gray.200'
            />
            <Box
              d='inline-block'
              width='100%'
              height='620px'
              bgColor='gray.200'
            />
            <Box
              d='inline-block'
              width='100%'
              height='300px'
              bgColor='gray.200'
            />
          </>
        )}
      </div>
    </Box>
  )
}

export default GalleryContainer
