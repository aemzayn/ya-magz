import { getAuthor } from "@/lib/authors"
import { getTag } from "@/lib/postTags"
import { Text } from "@chakra-ui/react"

export default function HeroAuthorCategory({
  author,
  category,
  textSize,
  ...rest
}) {
  return (
    <Text mb="1.2" color="brand.gray" {...rest}>
      <Text
        as="span"
        px={{ base: 1 }}
        d="inline-flex"
        overflowY="hidden"
        fontSize={textSize}
      >
        {`${author && getAuthor(author)?.name} · ${
          category && getTag(category)?.name
        }`}
      </Text>
    </Text>
  )
}
