import { Text } from '@chakra-ui/react'

const ArticleDate = ({ date }) => {
  return (
    <Text d='flex'>
      <Text ml='3px' color='gray.500'>
        {date}
      </Text>
    </Text>
  )
}

export default ArticleDate
