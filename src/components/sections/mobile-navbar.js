import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  VStack,
} from "@chakra-ui/react"
import { HiX as CloseIcon } from "react-icons/hi"

import { NAV_LINKS } from "src/constanst/routes"
import Logo from "./Logo"
import NavItem from "./nav-item"

const MobileNavbar = ({ isOpen, onClose }) => {
  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          py={6}
          borderBottomWidth="1px"
          borderBottomColor="gray.200"
        >
          <Flex justifyContent="space-between" alignItems="center">
            {isOpen && <Logo />}
            <Box
              cursor="pointer"
              display={{ base: "block", md: "none" }}
              onClick={onClose}
            >
              <Icon boxSize="1.5em" as={CloseIcon} />
            </Box>
          </Flex>
        </DrawerHeader>
        <DrawerBody py={6}>
          <VStack as="ul">
            {NAV_LINKS.map((item, idx) => (
              <NavItem
                key={idx}
                to={item.to}
                isLast={idx === NAV_LINKS.length - 1 ? true : false}
              >
                {item.name}
              </NavItem>
            ))}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileNavbar
