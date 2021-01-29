import { useState } from 'react'
import Link from 'next/link'
import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { SmallCloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

const Header = () => {
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(show => !show)

  const routes = [
    {
      name: 'Home',
      to: '/',
    },
    {
      name: 'Read',
      to: '/read',
    },
    {
      name: 'Articles',
      to: '/articles',
    },
    {
      name: 'Indorsagraphy',
      to: '/indorsagraphy',
    },
    {
      name: 'Collaboration',
      to: '/collaboration',
    },
  ]

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
      className='header'
      borderBottomWidth='1px'
      borderBottomColor='gray.200'
      borderBottomStyle='solid'
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
          {routes.map((r, i) => (
            <MenuItem
              key={i}
              to={r.to}
              isLast={i === routes.length - 1 ? true : false}
            >
              {r.name}
            </MenuItem>
          ))}
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
  const router = useRouter()
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display='block'
      color={router.pathname === to ? 'black' : 'gray.500'}
      cursor='pointer'
      _hover={{
        color: 'black',
      }}
      {...rest}
    >
      <Link href={to}>
        <Text as='a'>{children}</Text>
      </Link>
    </Text>
  )
}

export default Header
