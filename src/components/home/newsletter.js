import { Button, Flex, Heading, Input, Text, useToast } from "@chakra-ui/react"
import React from "react"

const Newsletter = () => {
  const toast = useToast()
  return (
    <Flex
      direction="column"
      bgColor="#F9F9F9"
      px="9"
      py="20"
      alignItems={{ base: "flex", lg: "center" }}
      textAlign="center"
    >
      <Text textTransform="uppercase" color="brand.gray" letterSpacing="1px">
        Newsletter
      </Text>
      <Heading color="black">Get Notified for Upcoming Articles</Heading>
      <Flex mt="7" direction={{ base: "column", lg: "row" }}>
        <Input
          colorScheme="black"
          placeholder="Email Address"
          mr={{ base: 0, lg: 2 }}
          mb={{ base: 2, lg: 0 }}
          borderRadius="false"
          size="lg"
        />
        <Button
          borderRadius="false"
          color="white"
          bgColor="gray.900"
          variant="outline"
          px="8"
          letterSpacing="1px"
          fontWeight="normal"
          size="lg"
          _hover={{
            bgColor: "brand.gray",
          }}
          onClick={() =>
            toast({
              title: "Feature is not available",
              description: "yet",
              status: "warning",
              duration: 5000,
              isClosable: true,
              position: "top",
            })
          }
        >
          Subscribe
        </Button>
      </Flex>
    </Flex>
  )
}

export default Newsletter
