import { GooglePodcastIcon, SpotifyIcon } from '@/assets/icons'
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

function YaPodcast() {
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
      <Flex flexDir={{ base: 'column', md: 'row' }} justify='center' w='100%'>
        <AspectRatio
          ratio={2 / 2}
          w='100%'
          maxW={{ base: null, md: '14rem', lg: '18rem' }}
          mb={{ base: 4, md: 0 }}
          mr={{ base: 0, md: 5, lg: 6, xl: 8 }}
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
            src='/images/ya-pod.jpg'
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
            <Badge h='fit-content' fontWeight='normal' colorScheme='purple'>
              Podcast
            </Badge>
            <Heading mt={{ base: 0, md: 2 }} as='h1' size={titleSize}>
              Ya!Pod
            </Heading>
          </Flex>
          <Text color='gray.500' fontSize={{ base: '0.8rem', lg: '1rem' }}>
            Ya!Pod is here! Masih belum dengerin episode Ya!Pod bareng
            @sahrultdg, @mdavine05_, dan @khalismrsyd? Yuk langsung aja klik
            link di bio kita buat streaming episode-episode Ya!Pod. Don’t
            forget, we are new every Monday!
          </Text>
          <Flex
            flexDir={{ base: 'column', md: 'row' }}
            textAlign='center'
            w={{ base: '100%', md: 'unset' }}
            align={{ base: 'center', md: 'flex-start' }}
          >
            <PodcastButton
              href='https://open.spotify.com/show/7mpdCpFNVp9U4BvUXYEoPz'
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
            <PodcastButton
              bgColor='#943BCB'
              href='https://podcasts.apple.com/tr/podcast/ya-pod/id1499375022'
              leftIcon={
                <Image
                  w={{ base: '1.5rem' }}
                  // h={iconSize}
                  src='https://syntax.fm/static/icons/itunes.jpg'
                  alt='Apple Podcast Logo'
                  borderRadius='full'
                  borderRadius='full'
                  boxShadow='md'
                />
              }
            >
              Apple Podcast
            </PodcastButton>
            <PodcastButton
              href='https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xM2RjZGIwYy9wb2RjYXN0L3Jzcw%3D%3D'
              bgColor='#F9A825'
              leftIcon={
                <GooglePodcastIcon
                  w={iconSize}
                  h={iconSize}
                  borderRadius='full'
                  boxShadow='md'
                  bgColor='white'
                />
              }
            >
              Google Podcast
            </PodcastButton>
          </Flex>
        </VStack>
      </Flex>
    </PageLayout>
  )
}

export default YaPodcast
