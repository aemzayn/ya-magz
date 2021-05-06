import { Text } from '@chakra-ui/react'

const ArticleDate = ({ date }) => {
  const time = new Date(date)
  return (
    <Text d='flex'>
      <Text ml={{ base: 0, md: '3px' }} color='gray.500'>
        {new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(time)}
      </Text>
    </Text>
  )
}

export default ArticleDate
