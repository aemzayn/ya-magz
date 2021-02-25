import { extendTheme, theme } from '@chakra-ui/react'

const heading = `Product Sans, ${theme.fonts.heading}`
const body = `Product Sans, ${theme.fonts.body}`
const mono = `${theme.fonts.mono}`

export default extendTheme({
  fonts: {
    heading,
    body,
    mono,
  },
  colors: {
    brand: {},
  },
  sizes: {},
})
