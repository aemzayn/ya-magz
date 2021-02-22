import { Flex } from '@chakra-ui/react'

function HeroLayout({ children }) {
  return (
    <Flex
      className='hero'
      direction='column'
      align='center'
      w='100%'
      m='0 auto'
    >
      <Flex
        // align='center'
        justify={{ base: 'flex-end', xl: 'space-between' }}
        direction={{ base: 'column-reverse', xl: 'row' }}
        wrap='no-wrap'
        minH='70vh'
        bg='#F9F9F9'
        mb={16}
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default HeroLayout
