import { Text, Link } from "@chakra-ui/layout"

export default function Logo() {
  return (
    <Link
      href="/"
      display="flex"
      flexDirection="column"
      color="black"
      fontSize="1.25rem"
      _hover={{ color: "blue.900" }}
      fontFamily="montserrat, system-ui, open-sans, sans-serif"
      lineHeight={1}
      position="relative"
    >
      <Text as="span" fontWeight="500" fontStyle="italic">
        Ya!
      </Text>
      <Text as="span" fontWeight="900">
        Magz
      </Text>
    </Link>
  )
}
