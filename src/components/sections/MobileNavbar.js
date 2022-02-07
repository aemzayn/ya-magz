import {
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
} from "react-icons/ri"

import MobileNavItem from "./MobileNavItem"

export default function MobileNavbar({ isOpen, onClose }) {
  return (
    <Drawer
      placement="left"
      autoFocus={false}
      onClose={onClose}
      isOpen={isOpen}
      zIndex={12}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          py={5}
          borderBottomWidth="1px"
          borderBottomColor="gray.200"
        >
          <Flex alignItems="center">
            <Heading size="md" fontWeight="medium">
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
                to="/entertainment"
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
              pb={2}
              pt={3}
              color="brand.gray"
              display="flex"
              alignItems="center"
              borderTop="1px solid"
              borderTopColor="gray.300"
            >
              <Icon marginRight={4} boxSize="1.2em" as={AiOutlineInstagram} />
              <Link href="/redirect?url=https://instagram.com/ya.magz">
                Ya! Magazine
              </Link>
            </UnorderedList>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
