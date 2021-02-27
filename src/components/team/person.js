import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  TwitterIcon,
} from '@/assets/icons'
import {
  AspectRatio,
  Box,
  chakra,
  Heading,
  HStack,
  Image,
  Text,
  Tooltip,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function Person({ person, showSocmed }) {
  const nameSize = useBreakpointValue({ base: 'sm', md: 'sm' })
  const roleTitleSize = useBreakpointValue({ base: '0.8rem' })

  return (
    <Box py={{ base: 2 }} pb={{ base: 4 }}>
      <AspectRatio ratio={2 / 2}>
        {person && person.photo ? (
          <Image
            loading='lazy'
            m='auto'
            boxShadow='xs'
            borderRadius='full'
            w={{ base: '80%' }}
            h={{ base: '80%' }}
            objectFit='cover'
            src={person?.photo}
            alt={`${person?.name} from ${person?.role}`}
            userSelect='none'
          ></Image>
        ) : (
          <Box
            m='auto'
            borderRadius='full'
            w={{ base: '80%' }}
            h={{ base: '80%' }}
            bgColor='gray.200'
          />
        )}
      </AspectRatio>
      <Box pt={{ base: 1 }} pb={{ base: 2 }} textAlign='center'>
        <Heading
          fontWeight='normal'
          as='h3'
          size={nameSize}
          maxW={{ base: '100%', lg: '90%' }}
          mx='auto'
        >
          {person?.name}
        </Heading>
        <Text fontSize={roleTitleSize} color='gray.500'>
          {person?.role}
        </Text>
      </Box>
      {showSocmed && (
        <HStack spacing={{ base: 2, md: 4 }} justify='center' h='20px' w='full'>
          {person?.social_media.map(({ platform, identifier }) => (
            <Tooltip
              label={
                platform.trim().toLowerCase() === 'instagram' ||
                platform.trim().toLowerCase() === 'twitter'
                  ? `@${identifier}`
                  : identifier
              }
              aria-label={`${platform} Icon`}
              key={identifier}
              hasArrow
            >
              <chakra.a
                href={redirectSocmed(platform, identifier)}
                aria-label='Link to member social media'
                rel='noopener'
              >
                <SocmedIcon w='1.125rem' h='1.125rem' platform={platform} />
              </chakra.a>
            </Tooltip>
          ))}
        </HStack>
      )}
    </Box>
  )
}

const SocmedIcon = ({ platform, ...rest }) => {
  switch (platform.trim().toLowerCase()) {
    case 'instagram':
      return <InstagramIcon {...rest} />
    case 'twitter':
      return <TwitterIcon {...rest} />
    case 'facebook':
      return <FacebookIcon {...rest} />
    case 'mail':
      return <MailIcon {...rest} />
    default:
      throw new Error(`${platform} is a false argument`)
  }
}

const redirectSocmed = (platform, identifier) => {
  switch (platform.trim()) {
    case 'instagram':
      return `http://instagram.com/${identifier}`
    case 'facebook':
      return `https://www.facebook.com/search/top?q=${identifier
        .split(' ')
        .join('%20')}`
    case 'twitter':
      return `http://twitter.com/${identifier}`
    case 'mail':
      return `mailto:${identifier}`
    default:
      throw new Error(
        `Error @ redirectSocmed, platform: ${platform}, identifier: ${identifier}`
      )
  }
}
