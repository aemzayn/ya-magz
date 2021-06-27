import Logo from "./Logo"
import { Box, Flex, UnorderedList, Icon, useDisclosure } from "@chakra-ui/react"
import { HiX as CloseIcon, HiMenu as MenuIcon } from "react-icons/hi"
import { NAV_LINKS } from "../../constanst/routes"
import MobileNavbar from "./mobile-navbar"
import NavItem from "./nav-item"

const DesktopNavbar = () => {
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
          <NavItem
            key={i}
            to={r.to}
            isLast={i === NAV_LINKS.length - 1 ? true : false}
          >
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

      {/* Hamburger menu */}
      <Box
        cursor="pointer"
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
      >
        <Icon boxSize="1.5em" as={isOpen ? CloseIcon : MenuIcon} />
      </Box>

      <DesktopNavbar />

      <MobileNavbar isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}
