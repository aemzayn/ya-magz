import { SpotifyIcon } from '@/assets/icons'
import {
  AspectRatio,
  Badge,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import { useAnimation, isValidMotionProp, motion } from 'framer-motion'
import { forwardRef, useEffect } from 'react'
import PodcastButton from '../buttons/podcast-button'
import PageLayout from '../page-layout'
import { useInView } from 'react-intersection-observer'

function HomeMood() {
  const animation = useAnimation()

  const titleSize = useBreakpointValue({ base: 'lg', md: 'lg' })
  const iconSize = useBreakpointValue({ base: '1.5rem', md: '1rem' })
  const imageOpacity = useBreakpointValue({ base: 1, md: 0 })
  const ChakraImage = motion.custom(
    forwardRef((props, ref) => {
      const chakraProps = Object.fromEntries(
        // do not pass framer props to DOM element
        Object.entries(props).filter(([key]) => !isValidMotionProp(key))
      )
      return <Image ref={ref} {...chakraProps} />
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
    <PageLayout id='home-podcast'>
      <Flex
        flexDir={{ base: 'column', md: 'row-reverse' }}
        justify='center'
        w='100%'
      >
        <AspectRatio
          ratio={2 / 2}
          w='100%'
          maxW={{ base: null, md: '14rem', lg: '18rem' }}
          mb={{ base: 4, md: 0 }}
          ml={{ base: 0, md: 5, lg: 6, xl: 8 }}
        >
          <ChakraImage
            ref={featured}
            animate={animation}
            initial='hidden'
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
              },
              hidden: { opacity: 0, y: 20 },
            }}
            opacity={imageOpacity}
            h='100%'
            w='100%'
            objectFit='cover'
            src='https://res.cloudinary.com/yacloud/image/upload/v1614332851/mood-1_wjumv8.jpg'
            loading='lazy'
            boxShadow='xl'
          />
        </AspectRatio>

        <VStack
          align='flex-start'
          justify={{ base: 'flex-start', md: 'center' }}
          spacing={{ base: 4, md: 3 }}
          maxW={{ base: '100%', md: '40%' }}
        >
          <Flex
            w='100%'
            flexDir={{ base: 'row-reverse', md: 'column' }}
            justifyContent={{ base: 'space-between', md: 'unset' }}
            align={{ base: 'center', md: 'flex-start' }}
          >
            <Badge h='fit-content' fontWeight='normal' colorScheme='pink'>
              Mood
            </Badge>
            <Heading mt={{ base: 0, md: 2 }} as='h1' size={titleSize}>
              Vol .04: Gifted
            </Heading>
          </Flex>
          <Text color='gray.500' fontSize={{ base: '0.8rem', lg: '1rem' }}>
            Saat musisi Indonesia mampu membuktikan kepada dunia bahwa musik
            Indonesia juga bisa ikut bertanding dikancah internasional
          </Text>
          <Flex
            flexDir={{ base: 'column', md: 'row' }}
            textAlign='center'
            w={{ base: '100%', md: 'unset' }}
            align={{ base: 'center', md: 'flex-start' }}
          >
            <PodcastButton
              href='https://open.spotify.com/playlist/3avCRGTIVyw3AL5rSnbWwW?si=fD5vhCYvS4CdA83z0t3Cnw'
              leftIcon={
                <SpotifyIcon
                  w={iconSize}
                  h={iconSize}
                  boxShadow='md'
                  borderRadius='full'
                />
              }
            >
              Spotify
            </PodcastButton>
          </Flex>
        </VStack>
      </Flex>
    </PageLayout>
  )
}

export default HomeMood
