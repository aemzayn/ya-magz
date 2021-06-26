import { Box } from "@chakra-ui/react"
import React from "react"

export default function ArticleDesc() {
  return (
    <Box
      fontWeight="normal"
      mb="14"
      fontStyle="italic"
      fontSize="xl"
      color="gray.600"
      pl="4"
      borderLeftWidth="5px"
      borderLeftStyle="solid"
      borderLeftColor="teal.200"
      letterSpacing="0.8px"
    />
  )
}
