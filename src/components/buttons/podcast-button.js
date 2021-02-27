import redirect from '@/lib/redirect'
import { Button, useBreakpointValue } from '@chakra-ui/react'

const PodcastButton = ({ children, href, ...rest }) => {
  function handleClick() {
    redirect(href)
  }
  const buttonSize = useBreakpointValue({ base: 'md', md: 'sm', lg: 'md' })
  const mb = useBreakpointValue({ base: 2, md: 0 })
  const mr = useBreakpointValue({ base: 0, md: 2 })
  return (
    <Button
      onClick={handleClick}
      bgColor='#4CAF50'
      size={buttonSize}
      borderRadius='false'
      fontWeight='normal'
      color='black'
      w={{ base: '70%', md: 'unset' }}
      _notLast={{ mb, mr }}
      _hover={{
        opacity: 0.8,
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}
export default PodcastButton
