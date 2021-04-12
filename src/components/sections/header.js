import { CloseIcon, MenuIcon } from '@/assets/icons'
import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons'
import { Box, chakra, Flex, Text } from '@chakra-ui/react'
import { AnimatePresence, isValidMotionProp, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { forwardRef, useState } from 'react'

const Logo = () => (
  <Link href='/'>
    <a>
      <Flex
        direction='column'
        color='black'
        fontFamily='montserrat'
        fontSize='1.25rem'
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

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  const router = useRouter()
  return (
    <Link href={to}>
      <chakra.a
        display='block'
        color={router.pathname === to ? 'black' : 'gray.500'}
        cursor='pointer'
        _hover={{
          color: 'black',
        }}
        {...rest}
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
      >
        {children}
      </chakra.a>
    </Link>
  )
}

export default function Header() {
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
      name: 'Magazine',
      to: '/magazine',
    },
    {
      name: 'Gallery',
      to: '/gallery',
    },
    // {
    //   name: 'Collaboration',
    //   to: '/collaboration',
    // },
  ]

  const NavList = motion.custom(
    forwardRef((props, ref) => {
      const chakraProps = Object.fromEntries(
        // do not pass framer props to DOM element
        Object.entries(props).filter(([key]) => !isValidMotionProp(key))
      )
      return (
        <Box
          ref={ref}
          {...chakraProps}
          // display={{ base: show ? 'block' : 'none', md: 'block' }}
          display={{ base: 'block', md: 'block' }}
          transition='all 200ms ease-in-out'
          transform={`translateY(${show ? 0 : '-300px'})`}
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
      )
    })
  )

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      mx='auto'
      py={{ base: 6, lg: 8 }}
      px={{ base: 6, md: 10 }}
      bg='white'
      color='black'
      className='header'
      borderBottomWidth='1px'
      borderBottomColor='gray.200'
      borderBottomStyle='solid'
      pos='relative'
      _after={{
        pos: 'absolute',
        content: '""',
        display: 'block',
        bottom: 0,
        left: 0,
        right: 0,
        borderBottom: '1px solid',
        borderBottomColor: 'gray.50',
      }}
    >
      <Logo />

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        transition='all 200ms ease-in-out'
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align='center'
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          py={[4, 4, 0, 0]}
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
