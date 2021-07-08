import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  Link,
  UnorderedList,
  VStack,
} from "@chakra-ui/react"

import MobileNavItem from "./mobile-nav-item"

import {
  AiFillHome,
  AiOutlineHome,
  AiFillRead,
  AiOutlineRead,
  AiOutlinePicture,
  AiFillPicture,
  AiOutlineInstagram,
} from "react-icons/ai"
import {
  RiBook2Line,
  RiBook2Fill,
  RiSpotifyLine,
  RiSpotifyFill,
  RiExternalLinkLine,
} from "react-icons/ri"

export default function MobileNavbar({ isOpen, onClose }) {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          py={4}
          borderBottomWidth="1px"
          borderBottomColor="gray.200"
        >
          <Flex alignItems="center">
            <Heading size="md" fontWeight="medium" fontFamily="lora">
              Ya! Magazine
            </Heading>
          </Flex>
        </DrawerHeader>
        <DrawerBody pt={0} px={0}>
          <VStack
            as="ul"
            w="full"
            spacing={0}
            justifyContent="space-between"
            height="full"
          >
            <div style={{ width: "100%" }}>
              <MobileNavItem
                to="/"
                icon={AiOutlineHome}
                activeIcon={AiFillHome}
              >
                Home
              </MobileNavItem>
              <MobileNavItem
                to="/read"
                icon={AiOutlineRead}
                activeIcon={AiFillRead}
              >
                Read
              </MobileNavItem>
              <MobileNavItem
                to="/magazine"
                icon={RiBook2Line}
                activeIcon={RiBook2Fill}
              >
                Magazine
              </MobileNavItem>
              <MobileNavItem
                to="/gallery"
                icon={AiOutlinePicture}
                activeIcon={AiFillPicture}
              >
                Gallery
              </MobileNavItem>
              <MobileNavItem
                to="/#ya-podcast"
                icon={RiSpotifyLine}
                activeIcon={RiSpotifyFill}
              >
                Entertainment
              </MobileNavItem>
            </div>

            <UnorderedList
              alignSelf="flex-end"
              w="full"
              px={6}
              py={2}
              color="brand.gray"
              display="flex"
              alignItems="center"
            >
              <Icon marginRight={4} boxSize="1.2em" as={AiOutlineInstagram} />
              <Link isExternal="https://www.instagram.com/ya.magz">
                Ya! Magazine
              </Link>
              <Icon marginLeft="auto" boxSize="1.2em" as={RiExternalLinkLine} />
            </UnorderedList>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
