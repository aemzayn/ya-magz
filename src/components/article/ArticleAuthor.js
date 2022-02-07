import Link from "next/link"
import { Text } from "@chakra-ui/react"

export default function ArticleAuthor({ authors }) {
  return authors.map((author, index) => (
    <Text
      color="yellow.500"
      transitionDuration="150ms"
      _hover={{ color: "yellow.300" }}
      key={author._id}
    >
      <Link href={`/authors/${author?.slug}`}>
        <a itemProp="author" name={author?.name}>
          {author?.name}
          {authors.length > 1 && index < authors.length - 1 && ", "}
        </a>
      </Link>
    </Text>
  ))
}
