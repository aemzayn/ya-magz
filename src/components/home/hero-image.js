import { Box, Image as ChakraImage, Skeleton } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import { forwardRef } from 'react'

export default function HeroImage({ url }) {
  const MotionBox = motion.custom(
    forwardRef((props, ref) => {
      const chakraProps = Object.fromEntries(
        // do not pass framer props to DOM element
        Object.entries(props).filter(([key]) => !isValidMotionProp(key))
      )
      return (
        <Box
          w={{ base: '100vw', xl: '33vw' }}
          minH={{ base: 'unset', xl: '100%' }}
          h={{ base: '15rem', md: '20rem', lg: '25rem', xl: 'unset' }}
          mt='0'
          maxH={{ base: 'unset', xl: '600px' }}
          ref={ref}
          {...chakraProps}
        />
      )
    })
  )

  return (
    <MotionBox>
      <Skeleton height='100%' width='100%' isLoaded={url ? true : false}>
        <ChakraImage
          src={url}
          height='100%'
          width='100%'
          objectFit='cover'
          objectPosition={{ base: 'center 80%', md: 'center 75%' }}
        />
      </Skeleton>
    </MotionBox>
  )
}
