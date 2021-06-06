import { Heading } from "@chakra-ui/react"

export default function ArticleTitle({ title, slug }) {
  return (
    <Heading
      itemProp="name headline"
      id={slug}
      as="h1"
      fontWeight="900"
      size="2xl"
      lineHeight="1.2"
    >
      {title}
    </Heading>
  )
}
