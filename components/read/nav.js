import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const routes = [
  {
    to: '/read?s=magazines',
    name: 'Magazines',
    slug: 'magazines',
  },
  {
    to: '/read?s=bulletins',
    name: 'Bulletins',
    slug: 'bulletins',
  },
]

const Nav = ({ show, setShow, bulletins, magazines }) => {
  const router = useRouter()
  return (
    <Flex
      flexDir={{ base: 'row', lg: 'column' }}
      alignItems={{ base: 'flex-start', lg: 'flex-end' }}
      // justifyContent={{ base: 'space-between', lg: 'unset' }}
      w={{ base: '100%', lg: '15%' }}
      bgColor='red'
      pl={{ base: 8 }}
      pr={{ base: 8, lg: 0 }}
      py={{ base: 5, lg: 0 }}
    >
      <Text
        mr={{ base: 2, lg: 0 }}
        fontSize={{ base: 'lg', xl: '2xl' }}
        textTransform='lowercase'
        color={show === magazines ? 'black' : 'gray.400'}
        cursor='pointer'
        onClick={() => setShow(magazines)}
      >
        magazines
      </Text>

      <Text
        mr={{ base: 0, lg: 0 }}
        fontSize={{ base: 'lg', xl: '2xl' }}
        textTransform='lowercase'
        color={show === bulletins ? 'black' : 'gray.400'}
        cursor='pointer'
        onClick={() => setShow(bulletins)}
      >
        bulletins
      </Text>
    </Flex>
  )
}

export default Nav

const NavItem = ({ children }) => (
  <Text
    key={i}
    mr={{ base: i === routes.length - 1 ? 0 : 2, lg: 0 }}
    fontSize={{ base: 'lg', xl: '2xl' }}
    textTransform='lowercase'
    color={router.query.s === r.slug ? 'black' : 'gray.400'}
    cursor='pointer'
  >
    <Link href={r.to}>
      <Text as='a'>{r.name}</Text>
    </Link>
  </Text>
)
