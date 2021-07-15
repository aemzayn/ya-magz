import { Flex, Text } from "@chakra-ui/react"

export default function HeroAuthorCategory({
  author,
  category,
  textSize,
  ...rest
}) {
  return (
    <Flex mb="1.2" d="flex" alignItems="center" color="brand.gray" {...rest}>
      <Text
        as="span"
        px={{ base: 1 }}
        d="inline-flex"
        overflowY="hidden"
        fontSize={textSize}
      >
        {author?.name}
      </Text>
      <Text w={10} mx={1} h={0.4} bgColor="gray.400" />
      <Text
        as="span"
        px={{ base: 1 }}
        d="inline-flex"
        overflowY="hidden"
        fontSize={textSize}
      >
        {category?.name}
      </Text>
    </Flex>
  )
}
