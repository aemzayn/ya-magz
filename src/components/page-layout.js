import { Box } from '@chakra-ui/react'

function PageLayout({ children, ...rest }) {
  return (
    <Box
      as='section'
      d='flex'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
      w='100%'
      p={8}
      py={10}
      {...rest}
    >
      {children}
    </Box>
  )
}

export default PageLayout
