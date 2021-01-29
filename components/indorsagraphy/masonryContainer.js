import { Box, Flex, Heading } from '@chakra-ui/react'
import MasonryItem from './masonryItem'

const MasonryContainer = ({ images }) => {
  return (
    <Box as='main' minH='100vh'>
      <Flex justifyContent='center' py='8'>
        <Heading
          className='page-title'
          color='black'
          size='2xl'
          display='block'
          textAlign='center'
          userSelect='none'
        >
          Indorsagraphy
        </Heading>
      </Flex>
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
