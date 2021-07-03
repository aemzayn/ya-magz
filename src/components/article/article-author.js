import Link from "next/link"
import { Text } from "@chakra-ui/react"

export default function ArticleAuthor({ author }) {
  return (
    <Text
      color="blue.400"
      transitionDuration="150ms"
      _hover={{ color: "blue.600" }}
    >
      <Link href={`/author/${author.slug}`}>
        <a itemProp="author" name={author.name}>
          {author.name}
        </a>
      </Link>
    </Text>
  )
}
