import { Heading } from '@chakra-ui/react'

export default function HeroTitle({ title }) {
  return (
    <Heading
      as='h1'
      size={'2xl'}
      fontWeight='bold'
      color='primary.800'
      textAlign='center'
      className='hero-title'
      lineHeight='1.2'
      maxW='80%'
      my='5'
    >
      {title}
    </Heading>
  )
}
