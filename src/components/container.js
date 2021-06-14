import { Box } from "@chakra-ui/react"

const Container = ({ children }) => {
  return (
    <Box maxW="1600px" mx="auto" boxShadow="xl">
      {children}
    </Box>
  )
}

export default Container
