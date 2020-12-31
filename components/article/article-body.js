import { Box } from '@chakra-ui/react'
import marked from 'marked'

export default function ArticleBody({ body }) {
  return (
    <Box
      lineHeight='30px'
      fontWeight='normal'
      fontFamily='Lato'
      dangerouslySetInnerHTML={{ __html: body ? marked(body) : '' }}
    />
  )
}
