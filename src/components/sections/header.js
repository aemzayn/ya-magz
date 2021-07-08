import {
  Box,
  Flex,
  UnorderedList,
  Icon,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react"
import { HiX as CloseIcon, HiMenu as MenuIcon } from "react-icons/hi"
import Logo from "./Logo"
import MobileNavbar from "./mobile-navbar"
import NavItem from "./nav-item"
import { NAV_LINKS } from "src/constanst/routes"
import AuthButton from "../auth/auth-button"

function DesktopNavbar() {
  return (
    <Box
      display={{ base: "none", md: "block" }}
      transition="all 200ms ease-in-out"
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <UnorderedList
        d="flex"
        alignItems="center"
        justify={{ md: "space-between", lg: "flex-end" }}
      >
        {NAV_LINKS.map((r, i) => (
          <NavItem key={i} to={r.to} isLast={i === NAV_LINKS.length - 1}>
            {r.name}
          </NavItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex
      as="nav"
      alignItems="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mx="auto"
      py={{ base: 3, lg: 8 }}
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
      {/* Hamburger menu */}

      <IconButton
        aria-label="Hamburger menu"
        display={{ base: "block", md: "none" }}
        marginRight={4}
        variant="ghost"
        onClick={onOpen}
        icon={<Icon boxSize="1.5em" as={isOpen ? CloseIcon : MenuIcon} />}
      />

      <Box
        position={{ base: "absolute", md: "static" }}
        left={{ base: "50%", md: "unset" }}
        transform={{ base: "translateX(-50%)", md: "unset" }}
      >
        <Logo />
      </Box>

      <MobileNavbar isOpen={isOpen} onClose={onClose} />

      <DesktopNavbar />

      <AuthButton />
    </Flex>
  )
}
