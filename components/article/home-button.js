import { Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function HomeButton() {
  return (
    <Link href='/'>
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
        Go to articles page
      </Button>
    </Link>
  )
}
