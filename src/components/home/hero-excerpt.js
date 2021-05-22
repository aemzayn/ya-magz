import { forwardRef, Text, useMediaQuery } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'

const HeroExcerpt = ({ excerpt, ...rest }) => {
  const [isMobile] = useMediaQuery('(max-width: 760px)')
  const MotionText = motion.custom(
    forwardRef((props, ref) => {
      const chakraProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !isValidMotionProp(key))
      )
      return (
        <Text
          maxW={{ base: '80%', lg: '52%' }}
          textAlign='center'
          my='4'
          mb='6'
          color='gray.500'
          overflowY='hidden'
          ref={ref}
          opacity={0}
          {...chakraProps}
          {...rest}
        />
      )
    })
  )

  return (
    <MotionText
      variants={{
        hidden: {
          y: 30,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.5,
            ease: [0.6, 0.05, -0.01, 0.9],
            delay: isMobile ? 0 : 0.1,
          },
        },
      }}
      initial={isMobile ? 'visible' : 'hidden'}
      // initial='visible'
      animate='visible'
    >
      {excerpt}
    </MotionText>
  )
}

export default HeroExcerpt
