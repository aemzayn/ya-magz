import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Logo from "./Logo"
import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  Icon,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react"
import { HiX as CloseIcon, HiMenu as MenuIcon } from "react-icons/hi"
import { NAV_LINKS } from "../../constanst/routes"
import { signIn, signOut, useSession } from "next-auth/client"

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
          mb={{ base: isLast ? 0 : 8, md: 0 }}
          mr={{ base: 0, md: isLast ? 0 : 8 }}
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
  // const [session] = useSession()
  const authButtonSize = useBreakpointValue({ base: "md", md: "sm" })

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
        {show ? (
          <Icon boxSize="1.5em" as={CloseIcon} />
        ) : (
          <Icon boxSize="1.5em" as={MenuIcon} />
        )}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        transition="all 200ms ease-in-out"
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <UnorderedList
          d="flex"
          alignItems="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          flexDir={["column", "row", "row", "row"]}
          py={[4, 4, 0, 0]}
        >
          {NAV_LINKS.map((r, i) => (
            <MenuItem
              key={i}
              to={r.to}
              isLast={i === NAV_LINKS.length - 1 ? true : false}
            >
              {r.name}
            </MenuItem>
          ))}
          {/* <Button
            size={authButtonSize}
            colorScheme="gray"
            borderRadius={false}
            mt={{ base: 6, md: 0 }}
            onClick={() => {
              session ? signOut() : signIn()
            }}
          >
            {session ? "Logout" : "Login"}
          </Button> */}
        </UnorderedList>
      </Box>
    </Flex>
  )
}
