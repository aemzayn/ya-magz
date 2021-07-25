import Link from "next/link"
import { Text } from "@chakra-ui/react"

export default function ArticleAuthor({ author }) {
  return (
    <Text
      color="yellow.500"
      transitionDuration="150ms"
      _hover={{ color: "yellow.300" }}
    >
      <Link href={`/authors/${author?.slug}`}>
        <a itemProp="author" name={author?.name}>
          {author?.name}
        </a>
      </Link>
    </Text>
  )
}
