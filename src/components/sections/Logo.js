import { Flex, Text } from '@chakra-ui/layout'
import Link from 'next/link'

export default function Logo(props) {
  return (
    <Link href='/'>
      <a>
        <Flex
          direction='column'
          color='black'
          fontFamily='montserrat'
          fontSize='1.25rem'
          {...props}
        >
          <Text
            m={0}
            lineHeight={1}
            pos='relative'
            fontWeight='500'
            fontStyle='italic'
          >
            Ya!
          </Text>
          <Text m={0} lineHeight={1} pos='relative' fontWeight='900'>
            Magz
          </Text>
        </Flex>
      </a>
    </Link>
  )
}
