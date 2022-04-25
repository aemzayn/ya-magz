import React from "react"
import { InfoIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading } from "@chakra-ui/react"

export default function UnderConstructionPage() {
  return (
    <Flex
      flexDir="column"
      w="100%"
      h="50vh"
      alignItems="center"
      justifyContent="center"
    >
      <Box d="block">
        <InfoIcon fontSize="1.5rem" />
      </Box>
      <Heading fontWeight="normal" mt="4" as="h1">
        This page will be available in short time.
      </Heading>
    </Flex>
  )
}
