import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Logo from "./Logo"
import { CloseIcon, MenuIcon } from "@/assets/icons"
import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react"

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  const router = useRouter()
  return (
    <ListItem listStyleType="none">
      <Link href={to}>
        <Text
          as="a"
          display="block"
          color={router.pathname === to ? "black" : "gray.500"}
          cursor="pointer"
          _hover={{
            color: "black",
          }}
          fontFamily="body"
          {...rest}
          mb={{ base: isLast ? 0 : 8, sm: 0 }}
          mr={{ base: 0, sm: isLast ? 0 : 8 }}
        >
          {children}
        </Text>
      </Link>
    </ListItem>
  )
}

export default function Header() {
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(show => !show)

  const routes = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Read",
      to: "/read",
    },
    {
      name: "Magazine",
      to: "/magazine",
    },
    {
      name: "Gallery",
      to: "/gallery",
    },
  ]

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mx="auto"
      py={{ base: 6, lg: 8 }}
      px={{ base: 6, md: 10 }}
      bg="white"
      color="black"
      className="header"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      borderBottomStyle="solid"
      pos="relative"
      _after={{
        pos: "absolute",
        content: '""',
        display: "block",
        bottom: 0,
        left: 0,
        right: 0,
        borderBottom: "1px solid",
        borderBottomColor: "gray.50",
      }}
      id="header-nav"
    >
      <Logo />

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        transition="all 200ms ease-in-out"
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <UnorderedList
          d="flex"
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
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
        </UnorderedList>
      </Box>
    </Flex>
  )
}
