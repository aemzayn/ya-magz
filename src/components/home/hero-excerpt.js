import { forwardRef, Text } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'

const HeroExcerpt = ({ excerpt }) => {
  const MotionText = motion.custom(
    forwardRef((props, ref) => {
      const chakraProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !isValidMotionProp(key))
      )
      return (
        <Text
          maxW={{ base: '80%', lg: '50%' }}
          textAlign='center'
          mb='6'
          mt='4'
          color='gray.500'
          overflowY='hidden'
          ref={ref}
          opacity={0}
          {...chakraProps}
        />
      )
    })
  )

  return (
    <MotionText
      initial={{
        y: 30,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
          ease: [0.6, 0.05, -0.01, 0.9],
          delay: 0.1,
        },
      }}
    >
      {excerpt}
    </MotionText>
  )
}

export default HeroExcerpt
