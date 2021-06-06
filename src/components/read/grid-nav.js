import { Box, Button, Flex, Heading } from "@chakra-ui/react"

const NavItem = ({ item, show, setShow }) => (
  <Button
    colorScheme="black"
    size="md"
    mr={{ base: 0, lg: 0 }}
    bg={show === item.file ? "gray.200" : "none"}
    fontSize={{ base: "lg", xl: "2xl" }}
    color={show === item.file ? "black" : "gray.400"}
    borderRadius="false"
    cursor="pointer"
    onClick={() => setShow(item.file)}
    _after={{
      content: '""',
      pos: "absolute",
      display: "block",
      bottom: 0,
      left: 0,
      right: 0,
      height: 0,
      bgColor: "gray.100",
      zIndex: -1,
      transition: "all 100ms ease-in-out",
    }}
    _hover={{
      _after: {
        height: "full",
      },
    }}
  >
    {item.name}
  </Button>
)

const MagazineNav = ({ show, setShow, bulletins, magazines }) => {
  const routes = [
    {
      id: 1,
      to: "/read?s=magazines",
      name: "Magazines",
      slug: "magazines",
      file: magazines,
    },
    {
      id: 2,
      to: "/read?s=bulletins",
      name: "Bulletins",
      slug: "bulletins",
      file: bulletins,
    },
  ]

  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      alignItems={{ base: "flex-start", md: "flex-end" }}
      justifyContent="space-between"
      mx={{ base: 4, md: 8 }}
      mb={{ base: 4, md: 6 }}
      pos="relative"
      _after={{
        content: '""',
        d: "block",
        pos: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        h: "1px",
        bgColor: "gray.200",
        zIndex: -1,
      }}
    >
      <Box mb={{ base: 4, md: 0 }}>
        <Heading className="page-title" as="h1" size="xl">
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

export default MagazineNav
