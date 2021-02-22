import { Text } from '@chakra-ui/react'

const HeroExcerpt = ({ excerpt }) => {
  return (
    <Text
      maxW={{ base: '80%', lg: '50%' }}
      textAlign='center'
      mb='6'
      color='gray.500'
    >
      {excerpt}
    </Text>
  )
}

export default HeroExcerpt
