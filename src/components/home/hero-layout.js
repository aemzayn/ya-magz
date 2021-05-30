import { Flex } from "@chakra-ui/react"

function HeroLayout({ children }) {
  return (
    <Flex
      flexDirection={{ base: "column-reverse", lg: "row" }}
      justifyContent="space-between"
      w="full"
      minH={{ base: "78vh", md: "80vh", lg: "78vh" }}
      pos="relative"
      bgColor="gray.50"
    >
      {children}
    </Flex>
  )
}

export default HeroLayout
