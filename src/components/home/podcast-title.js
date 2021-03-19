import { Box, Heading } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { isValidMotionProp, motion, useAnimation } from 'framer-motion'
import { forwardRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function PodcastTitle({ title, ...rest }) {
  const titleSize = useBreakpointValue({ base: 'lg', md: 'lg' })
  const animation = useAnimation()
  const Container = motion.custom(
    forwardRef((props, ref) => {
      const chakraProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !isValidMotionProp(key))
      )
      return (
        <Box
          mt={{ base: 0, md: 2 }}
          size={titleSize}
          ref={ref}
          {...chakraProps}
        />
      )
    })
  )

  const TitleChar = motion.custom(
    forwardRef((props, ref) => {
      const chakraProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !isValidMotionProp(key))
      )
      return <Heading as='h1' ref={ref} {...chakraProps} {...rest} />
    })
  )

  const [featured, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-200px',
  })

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])

  return (
    <Container
      d='flex'
      overflowY='hidden'
      ref={featured}
      variants={{
        hidden: {
          y: 0,
        },
        visible: {
          y: 0,
          transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1,
          },
        },
      }}
      initial='hidden'
      animate='visible'
    >
      {title?.split((char, i) => (
        <TitleChar
          key={i}
          variants={{
            hidden: {
              opacity: 0,
              y: 200,
            },
            visible: i => ({
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: i * 0.02,
              },
            }),
          }}
          custom={i}
        >
          {char === ' ' ? '\u00A0' : char}
        </TitleChar>
      ))}
    </Container>
  )
}
