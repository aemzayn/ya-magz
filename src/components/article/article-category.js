import Link from "next/link"
import { Flex, Text } from "@chakra-ui/react"

export default function ArticleCategory({ tags }) {
  return (
    <Flex d="flex" alignItems="center" mb={{ base: 3 }}>
      <Text color="gray.600" mr="2">
        Category:{" "}
      </Text>
      <Text
        color="blue.800"
        mr="2"
        py="0.5"
        px="2"
        borderRadius="2px"
        backgroundColor="blue.100"
        transition="background-color 200ms ease-in-out"
        _hover={{
          backgroundColor: "blue.200",
        }}
      >
        <Link href="/category/[slug]" as={`/category/${tags.slug}`}>
          <a>{tags.name}</a>
        </Link>
      </Text>
    </Flex>
  )
}
