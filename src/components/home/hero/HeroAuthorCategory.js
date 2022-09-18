import Link from "next/link"
import { Flex, Text } from "@chakra-ui/react"

export default function HeroAuthorCategory({
  authors,
  category,
  textSize,
  ...rest
}) {
  return (
    <Flex mb="1.2" d="flex" alignItems="center" color="brand.gray" {...rest}>
      {authors &&
        authors.map((author, index) => (
          <Text
            key={author._id}
            as="span"
            px={1}
            d="inline-flex"
            overflowY="hidden"
            fontSize={textSize}
          >
            <Link href={`/authors/${author?.slug}`}>
              <a>
                {author?.name}
                {authors.length > 1 && index < authors.length - 1 && ", "}
              </a>
            </Link>
          </Text>
        ))}
      <Text w={10} mx={1} h={0.4} bgColor="gray.400" />
      <Text
        as="span"
        px={1}
        d="inline-flex"
        overflowY="hidden"
        fontSize={textSize}
      >
        <Link href={`/category/${category?.slug}`}>
          <a>{category?.name}</a>
        </Link>
      </Text>
    </Flex>
  )
}
