import { Heading, HStack } from "@chakra-ui/react"
import { motion } from "framer-motion"

export default function HeroTitle({ title, stack }) {
  const TitleChar = motion(Heading)

  if (!title) {
    return null
  }

  return (
    <HStack
      d="flex"
      flexWrap="wrap"
      maxW={{ base: "90%", md: "80%", xl: "55%" }}
      mt={{ base: 3, md: 0 }}
      justify="center"
      {...stack}
    >
      <Heading
        d="flex"
        flexWrap="wrap"
        textAlign="center"
        align="center"
        justifyContent="center"
        userSelect="none"
        d="flex"
        overflowY="hidden"
      >
        {title}
      </Heading>
    </HStack>
  )
}
