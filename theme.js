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
    sm: '30em', // small phone
    md: '48em', // ipad
    lg: '62em', // ipad pro
    xl: '80em', // laptop
    xxl: '96em', // pc
  },
  styles: {
    global: {
      'html, body': {
        overflowX: 'hidden',
      },
    },
  },
})
