import React, { useRef, useState } from "react"
import {
  Box,
  Button,
  Center,
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
  Link as ChakraLink,
  InputGroup,
  InputLeftElement,
  Link,
} from "@chakra-ui/react"

import { HiOutlineMail, HiOutlineUser, HiX } from "react-icons/hi"
import { FiLink } from "react-icons/fi"
import { AiFillCheckCircle } from "react-icons/ai"
import { MdCopyright } from "react-icons/md"

import { footerLinks } from "src/constanst/routes"
import Logo from "./Logo"
import CustomToast from "../toast"

function FooterLink({ children, path }) {
  return (
    <Link
      href={path}
      fontSize={{ base: "sm", lg: "md" }}
      color="brand.gray"
      _hover={{ color: "black" }}
    >
      {children}
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

function FooterForm({ form, setForm, handleSubmit, submitLoading }) {
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
      name="contact-form"
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.400"
          _groupFocus={{
            color: "gray.700",
          }}
        >
          <HiOutlineMail />
        </InputLeftElement>
        <Input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={e =>
            setForm(values => ({ ...values, [e.target.name]: e.target.value }))
          }
          {...inputStyle}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftElement pointerEvents="none" color="gray.400">
          <HiOutlineUser />
        </InputLeftElement>
        <Input
          placeholder="Your name (optional)"
          name="name"
          type="text"
          value={form.name}
          onChange={e =>
            setForm(values => ({ ...values, [e.target.name]: e.target.value }))
          }
          {...inputStyle}
        />
      </InputGroup>
      <Textarea
        placeholder="Message"
        name="message"
        resize="none"
        value={form.message}
        onChange={e =>
          setForm(values => ({ ...values, [e.target.name]: e.target.value }))
        }
        {...inputStyle}
      ></Textarea>
      <Button
        type="submit"
        bgColor="black"
        colorScheme="black"
        borderRadius="false"
        w="full"
        fontWeight="normal"
        isLoading={submitLoading}
      >
        Send
      </Button>
    </VStack>
  )
}

export default function Footer() {
  let footerRoutes = footerLinks.filter(r => r.path !== "/")
  const [form, setForm] = useState({ email: "", name: "", message: "" })
  const [submitLoading, setSubmitLoading] = useState(false)
  const toast = useToast()
  const toastRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitLoading(true)
    const SHEETS_URL =
      "https://script.google.com/macros/s/AKfycbyl-9Z3pcTM9LwsS3cRrjW4I5Fy_5oV7Nbk-KU81D5s9fbA5KJUs4Tprn-mX7XSLPlSgg/exec"

    const formData = new FormData(document.forms["contact-form"])

    fetch(SHEETS_URL, { method: "POST", body: formData })
      .then(res => res.json())
      .then(() => {
        toastRef.current = toast({
          duration: 6000,
          isClosable: true,
          render: () => (
            <CustomToast
              title="Success"
              body="Your message has been sent!"
              toast={toast}
              leftIcon={AiFillCheckCircle}
            />
          ),
        })
      })
      .catch(error => {
        toastRef.current = toast({
          duration: 6000,
          isClosable: true,
          render: () => (
            <CustomToast
              title="Error"
              body="An error has been occurred."
              variant="error"
              toast={toast}
              leftIcon={HiX}
            />
          ),
        })
      })
      .finally(() => {
        setSubmitLoading(false)
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
        alignItems="flex-start"
        flexDirection={{ base: "column-reverse", md: "row" }}
        w={{ base: "full", md: "unset" }}
        pos="relative"
      >
        <VStack
          w={{ base: "full", md: "unset" }}
          align="flex-start"
          spacing={6}
          mt={{ base: 8, md: 0 }}
        >
          <Logo fontSize={{ base: "1.5rem", md: "1.25rem" }} />
          <HStack
            spacing={1}
            align="center"
            color="brand.gray"
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
            <Center p={2} bgColor="brand.main" color="white">
              <Icon as={FiLink} boxSize="1em" aria-label="External links" />
            </Center>
            <ChakraLink
              href="/redirect?url=https://www.instagram.com/ya.magz/"
              aria-label="Ya! Magazine Instagram"
              isExternal
              rel="noopener"
              cursor="pointer"
              _hover={{
                textDecoration: "underline",
                color: "black",
              }}
            >
              INSTAGRAM
            </ChakraLink>
            <ChakraLink
              href="/redirect?url=https://ppibursablog.wordpress.com/"
              aria-label="PPI Bursa Website"
              cursor="pointer"
              rel="noopener"
              _hover={{
                textDecoration: "underline",
                color: "black",
              }}
            >
              PPI BURSA
            </ChakraLink>
          </HStack>
        </VStack>

        <Stack
          spacing={{ base: 10, md: 8, lg: 20, xl: 40 }}
          direction={{ base: "column", md: "row" }}
          ml={{ base: 0, md: "auto" }}
          w={{ base: "full", md: "unset" }}
          pos="relative"
        >
          <VStack align={{ base: "flex-start" }} spacing={4}>
            <FooterTitle>READ</FooterTitle>
            {footerRoutes.slice(0, 3).map(route => (
              <FooterLink key={route.path} path={route.path}>
                {route.name}
              </FooterLink>
            ))}
          </VStack>

          <VStack align={{ base: "flex-start" }} spacing={4}>
            <FooterTitle>ABOUT</FooterTitle>
            {footerRoutes.slice(3, footerRoutes.length).map(route => (
              <FooterLink key={route.path} path={route.path}>
                {route.name}
              </FooterLink>
            ))}
          </VStack>
          <VStack
            spacing={4}
            w={{ base: "full", md: "unset" }}
            align="flex-start"
          >
            <FooterTitle>CONTACT US</FooterTitle>
            <FooterForm
              form={form}
              setForm={setForm}
              handleSubmit={handleSubmit}
              submitLoading={submitLoading}
            />
          </VStack>
        </Stack>
      </Flex>
    </Box>
  )
}
