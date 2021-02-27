import ApplePodcastBadge from '@/assets/icons/apple-podcast-badge'
import GooglePodcastBadge from '@/assets/icons/google-podcast-badge'
import SpotifyBadge from '@/assets/icons/spotify-badge'
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
import { isValidMotionProp, motion, useAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import { forwardRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import PageLayout from '../page-layout'

function YaPodcast() {
  const router = useRouter()
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

  const badgeStyle = {
    cursor: 'pointer',
    height: useBreakpointValue({ base: 'full' }),
    maxWidth: useBreakpointValue({ base: 'unset', md: '100px', xxl: '150px' }),
    _notLast: {
      mr: useBreakpointValue({ base: 0, md: 2 }),
      mb: useBreakpointValue({ base: 2, md: 0 }),
    },
  }

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
            src='https://res.cloudinary.com/yacloud/image/upload/v1614332851/ya-pod_gi1tmm.jpg'
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
            w={{ base: '100%', md: 'unset' }}
            align={{ base: 'center', md: 'center' }}
          >
            <SpotifyBadge
              {...badgeStyle}
              onClick={() =>
                router.push(
                  '/redirect?url=https://open.spotify.com/show/7mpdCpFNVp9U4BvUXYEoPz'
                )
              }
            />
            <ApplePodcastBadge
              {...badgeStyle}
              onClick={() =>
                router.push(
                  '/redirect?url=https://podcasts.apple.com/tr/podcast/ya-pod/id1499375022'
                )
              }
            />
            <GooglePodcastBadge
              {...badgeStyle}
              onClick={() =>
                router.push(
                  '/redirect?url=https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xM2RjZGIwYy9wb2RjYXN0L3Jzcw%3D%3D'
                )
              }
            />
          </Flex>
        </VStack>
      </Flex>
    </PageLayout>
  )
}

export default YaPodcast
