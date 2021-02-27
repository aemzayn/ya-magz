import { Box, Button, Divider, Flex, Heading } from '@chakra-ui/react'

const GridNav = ({ show, setShow, bulletins, magazines }) => {
  const routes = [
    {
      id: 1,
      to: '/read?s=magazines',
      name: 'Magazines',
      slug: 'magazines',
      file: magazines,
    },
    {
      id: 2,
      to: '/read?s=bulletins',
      name: 'Bulletins',
      slug: 'bulletins',
      file: bulletins,
    },
  ]

  return (
    <Flex
      flexDir={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'flex-start', md: 'flex-end' }}
      justifyContent='space-between'
      mx={{ base: 4, md: 8 }}
      mb='4'
      borderBottomWidth='1px'
      borderBottomColor='gray.200'
      borderBottomStyle='solid'
    >
      <Box mb={{ base: 4, md: 0 }}>
        <Heading className='page-title' as='h1' size='xl'>
          Magazines and Bulletins
        </Heading>
      </Box>
      <Flex>
        {routes.map(item => (
          <NavItem key={item.id} item={item} show={show} setShow={setShow} />
        ))}
      </Flex>
    </Flex>
  )
}

export default GridNav

const NavItem = ({ item, show, setShow }) => (
  <Button
    colorScheme='black'
    size='md'
    mr={{ base: 0, lg: 0 }}
    bg={show === item.file ? 'gray.200' : 'none'}
    fontSize={{ base: 'lg', xl: '2xl' }}
    color={show === item.file ? 'black' : 'gray.400'}
    fontWeight='normal'
    borderRadius='false'
    cursor='pointer'
    onClick={() => setShow(item.file)}
  >
    {item.name}
  </Button>
)
