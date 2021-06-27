import { Flex, Text, Link } from "@chakra-ui/layout"
import NextLink from "next/link"

export default function Logo(props) {
  return (
    <Link as={NextLink} href="/">
      <Link>
        <Flex
          direction="column"
          color="black"
          fontSize="1.25rem"
          className="logo"
          {...props}
        >
          <Text
            m={0}
            lineHeight={1}
            pos="relative"
            fontWeight="500"
            fontStyle="italic"
          >
            Ya!
          </Text>
          <Text m={0} lineHeight={1} pos="relative" fontWeight="900">
            Magz
          </Text>
        </Flex>
      </Link>
    </Link>
  )
}
