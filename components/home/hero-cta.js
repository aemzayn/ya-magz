import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function HeroCTA({ url }) {
  return (
    <Link href={`/articles/${url}`}>
      <Button
        py={{ base: '5', md: '7' }}
        px={{ base: '10', md: '12' }}
        lineHeight='1'
        size='lg'
        bg='teal.400'
        color='white'
        borderRadius='50px'
        fontWeight='normal'
        borderRadius='false'
        _hover={{
          bg: 'teal.500',
        }}
      >
        Read Now
        <ArrowForwardIcon ml='2' />
      </Button>
    </Link>
  )
}
