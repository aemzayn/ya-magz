import {
  Box,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import MasonryItem from './masonryItem'

const MasonryContainer = ({ images }) => {
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
        >
          Gallery
        </Heading>
        <Heading
          as='h2'
          size={subtitleSize}
          color='gray.700'
          fontWeight='normal'
          d='flex'
        >
          In collaboration with
          <Text
            as='a'
            href='https://www.instagram.com/indorsagraphy/'
            target='_blank'
            rel='author'
            ml={{ base: 1 }}
          >
            @Indorsagraphy
          </Text>
        </Heading>
      </VStack>
      <div className='masonry'>
        {images.length > 0 ? (
          images.map((im, i) => <MasonryItem image={im} key={i} />)
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

export default MasonryContainer
