import { Flex } from "@chakra-ui/react"

function HeroLayout({ children }) {
  return (
    <Flex justifyContent="space-between" w="full" minH="78vh">
      {children}
    </Flex>
  )
}

export default HeroLayout
