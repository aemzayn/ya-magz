import { Heading } from '@chakra-ui/react'

export default function ArticleTitle({ title }) {
  return (
    <Heading as='h1' size='2xl' fontFamily='Product Sans' lineHeight='1.2'>
      {title}
    </Heading>
  )
}
