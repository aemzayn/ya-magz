import {
  AspectRatio,
  Box,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function Person({ person, showSocmed }) {
  const nameSize = useBreakpointValue({ base: 'sm', md: 'sm' })
  const roleTitleSize = useBreakpointValue({ base: '0.8rem' })
  return (
    <Box py={{ base: 2 }}>
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
            alt={`${person?.name} from ${person?.team}`}
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
      <Box pt={{ base: 1 }} pb={{ base: 4 }} textAlign='center'>
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
          {person?.team}
        </Text>
      </Box>
      {/* {showSocmed && (
        <Flex>
          {person?.social_media.map(s => (
            <Text key={s}>{s}</Text>
          ))}
        </Flex>
      )} */}
    </Box>
  )
}
