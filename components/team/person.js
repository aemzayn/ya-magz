import getSocmed from '@/lib/socialMedia'
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function Person({ person, showSocmed }) {
  const nameSize = useBreakpointValue({ base: 'lg', md: 'sm' })
  return (
    <Box py={{ base: 2 }}>
      <AspectRatio ratio={2 / 2}>
        {person && person.photo ? (
          <Image
            loading='lazy'
            m='auto'
            borderRadius='full'
            w={{ base: '80%' }}
            h={{ base: '80%' }}
            objectFit='cover'
            src={person?.photo}
            alt={`${person?.name} from ${person?.team}`}
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
          maxW={{ base: '90%' }}
          mx='auto'
        >
          {person?.name}
        </Heading>
        <Text fontSize={{ base: '1.2rem', md: '1rem' }} color='gray.500'>
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
