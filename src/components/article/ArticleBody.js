import { Box } from "@chakra-ui/react"

export default function ArticleBody({ body }) {
  return (
    <Box
      lineHeight="30px"
      fontWeight="normal"
      className="markdown"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  )
}
