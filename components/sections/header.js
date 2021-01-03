import { useState } from 'react'
import Link from 'next/link'
import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { SmallCloseIcon, HamburgerIcon } from '@chakra-ui/icons'

const Header = props => {
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(show => !show)

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      mx='auto'
      py={{ base: 6, lg: 8 }}
      px='10'
      bg='white'
      color='black'
      className='navbar'
      borderBottomWidth='1px'
      borderBottomColor='gray.200'
      borderBottomStyle='solid'
      {...props}
    >
      <Logo />

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <SmallCloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align='center'
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to='/'>Home</MenuItem>
          <MenuItem to='/read'>Read</MenuItem>
          <MenuItem to='/articles'>Blog</MenuItem>
          <MenuItem to='/collaboration' isLast>
            <Button
              variant='outline'
              fontWeight='normal'
              borderRadius='false'
              colorScheme='black'
            >
              Collaborate
            </Button>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  )
}

const Logo = () => (
  <Link href='/'>
    <a>
      <Flex direction='column' className='logo' color='black'>
        <Text>Ya!</Text>
        <Text>Magz</Text>
      </Flex>
    </a>
  </Link>
)

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display='block'
      color='gray.500'
      _hover={{
        color: 'black',
      }}
      {...rest}
    >
      <Link href={to}>
        <a>{children}</a>
      </Link>
    </Text>
  )
}

export default Header
