import { Grid as ChakraGrid } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import GridItem from './grid-item'

const Grid = ({ items }) => {
  const router = useRouter()
  const redirect = url => {
    if (url) {
      router.push(`/redirect?url=${url}`)
    }
  }

  return (
    <ChakraGrid
      px={{ base: 1, xl: 8 }}
      templateColumns={{
        base: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
        xl: 'repeat(5, 1fr)',
      }}
      gap={{ base: 2, xl: 4 }}
    >
      {items?.map(item => (
        <GridItem item={item} key={item.edition} redirect={redirect} />
      ))}
    </ChakraGrid>
  )
}

export default Grid
