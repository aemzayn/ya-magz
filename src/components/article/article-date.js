import { Text } from '@chakra-ui/react'
import { formatDistance, subDays, formatDistanceToNow } from 'date-fns'

const ArticleDate = ({ date }) => {
  const time = new Date(date)
  return (
    <Text d='flex'>
      <Text ml='3px' color='gray.500'>
        {new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(time)}
      </Text>
    </Text>
  )
}

export default ArticleDate
