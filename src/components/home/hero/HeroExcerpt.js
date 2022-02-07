import { Text } from "@chakra-ui/react"

export default function HeroExcerpt({ excerpt, textSize, ...rest }) {
  return (
    <Text
      maxW={{ base: "80%", lg: "75%", xl: "52%" }}
      fontSize={textSize}
      textAlign="center"
      my="4"
      pb={6}
      color="brand.gray"
      overflowY="hidden"
      {...rest}
    >
      {excerpt}
    </Text>
  )
}
