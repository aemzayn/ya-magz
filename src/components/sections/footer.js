import {
  Box,
  Button,
  Center,
  chakra,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
  useBreakpointValue,
  useToast,
  VStack,
} from "@chakra-ui/react"
import Link from "next/link"
import React from "react"
import { FiLink } from "react-icons/fi"
import { MdCopyright } from "react-icons/md"
import Logo from "./Logo"
import routes from "../../../routes"

function FooterLink({ children, path }) {
  return (
    <Link href={path}>
      <chakra.a
        cursor="pointer"
        fontSize={{ base: "sm", lg: "md" }}
        color="gray.500"
        _hover={{ color: "black" }}
      >
        {children}
      </chakra.a>
    </Link>
  )
}

function FooterTitle({ children }) {
  const footerTitleSize = useBreakpointValue({ base: "md", md: "sm" })
  return (
    <Heading size={footerTitleSize} letterSpacing="sm">
      {children}
    </Heading>
  )
}

function FooterForm({ handleSubmit }) {
  const placeholderFontSize = useBreakpointValue({ base: "sm", lg: "md" })
  const placeholderStyle = {
    color: "gray.300",
    fontSize: placeholderFontSize,
  }
  const inputStyle = {
    borderRadius: "0",
    borderColor: "gray.300",
    focusBorderColor: "brand.main",
    _placeholder: { ...placeholderStyle },
  }

  return (
    <VStack
      as="form"
      onSubmit={handleSubmit}
      align="flex-start"
      w={{ base: "full", md: "unset" }}
    >
      <Input type="email" placeholder="Your email" {...inputStyle} />
      <Input placeholder="Your name (optional)" type="text" {...inputStyle} />
      <Textarea placeholder="Message" resize="none" {...inputStyle}></Textarea>
      <Button
        type="submit"
        bgColor="black"
        colorScheme="black"
        borderRadius="false"
        w="full"
        fontWeight="normal"
      >
        Send
      </Button>
    </VStack>
  )
}

export default function Footer() {
  let footerRoutes = routes.filter(r => r.path !== "/")
  const toast = useToast()
  function handleSubmit(e) {
    e.preventDefault()
    toast({
      title: "Coming soon",
      description: "This feature is not available at the moment.",
      status: "info",
      variant: "left-accent",
      duration: 6000,
      isClosable: true,
    })
  }

  return (
    <Box
      w="100%"
      bgColor="white"
      borderTopWidth="1px"
      borderTopColor="gray.200"
      borderTopStyle="solid"
      pb={{ base: 0, xl: 10 }}
      pos="relative"
    >
      <Flex
        py={{ base: 8, md: 16 }}
        px={{ base: 6, md: 10, lg: 20 }}
        alignItems={{ base: "flex-start" }}
        flexDirection={{ base: "column-reverse", md: "row" }}
        w={{ base: "full", md: "unset" }}
        pos="relative"
      >
        <VStack
          w={{ base: "full", md: "unset" }}
          align="flex-start"
          spacing={{ base: 6 }}
          mt={{ base: 8, md: 0 }}
        >
          <Logo fontSize={{ base: "1.5rem", md: "1.25rem" }} />
          <HStack
            spacing={1}
            align={{ base: "center" }}
            color="gray.600"
            order={{ base: 1, md: 0 }}
            fontSize={{ base: "sm", lg: "md" }}
            wordBreak="break-word"
          >
            <Icon aria-label="copyright icon" as={MdCopyright} />
            <Text>
              Ya! Magazine {new Date().getFullYear()}. All rights reserved.
            </Text>
          </HStack>
          <HStack color="gray.700" spacing={{ base: 2, md: 3 }}>
            <Center p={{ base: 2 }} bgColor="brand.main" color="white">
              <Icon as={FiLink} size="md" aria-label="External links" />
            </Center>
            <chakra.a
              aria-label="Ya! Magazine Instagram"
              cursor="pointer"
              rel="external"
              href="https://www.instagram.com/ya.magz/"
              _hover={{
                textDecoration: "underline",
                color: "black",
              }}
            >
              IG
            </chakra.a>
            <chakra.a
              aria-label="PPI Bursa Website"
              cursor="pointer"
              rel="external"
              href="https://ppibursablog.wordpress.com/"
              _hover={{
                textDecoration: "underline",
                color: "black",
              }}
            >
              PPI BURSA
            </chakra.a>
          </HStack>
        </VStack>

        <Stack
          spacing={{ base: 10, md: 8, lg: 20, xl: 40 }}
          direction={{ base: "column", md: "row" }}
          ml={{ base: 0, md: "auto" }}
          w={{ base: "full", md: "unset" }}
          pos="relative"
        >
          <VStack align={{ base: "flex-start" }} spacing={{ base: 4 }}>
            <FooterTitle>READ</FooterTitle>
            {footerRoutes.slice(0, 3).map(route => (
              <FooterLink key={route.path} path={route.path}>
                {route.name}
              </FooterLink>
            ))}
          </VStack>

          <VStack align={{ base: "flex-start" }} spacing={{ base: 4 }}>
            <FooterTitle>ABOUT</FooterTitle>
            {footerRoutes.slice(3, footerRoutes.length).map(route => (
              <FooterLink key={route.path} path={route.path}>
                {route.name}
              </FooterLink>
            ))}
          </VStack>
          <VStack
            spacing={{ base: 4 }}
            w={{ base: "full", md: "unset" }}
            align="flex-start"
          >
            <FooterTitle>CONTACT US</FooterTitle>
            <FooterForm handleSubmit={handleSubmit} />
          </VStack>
        </Stack>
      </Flex>
    </Box>
  )
}
