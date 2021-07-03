import { Box } from "@chakra-ui/react"

export default function ArticleBody({ body }) {
  return (
    <Box
      lineHeight="30px"
      fontWeight="normal"
      fontFamily="Lato"
      className="markdown"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  )
}
