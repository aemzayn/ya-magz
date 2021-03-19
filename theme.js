import { extendTheme, theme } from '@chakra-ui/react'

export default extendTheme({
  fonts: {
    heading: 'Product Sans',
    body: 'Product Sans',
  },
  colors: {
    brand: {
      main: theme.colors.teal[400],
    },
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    xxl: '96em',
  },
  styles: {
    global: {
      'html, body': {
        overflowX: 'hidden',
      },
    },
  },
})
