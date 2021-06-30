import { extendTheme, theme } from "@chakra-ui/react"

export default extendTheme({
  fonts: {
    heading: "'Product Sans', sans-serif",
    body: "'Product Sans', sans-serif",
  },
  colors: {
    brand: {
      main: theme.colors.black,
      light: theme.colors.black,
      gray: "#57576B",
    },
  },
  breakpoints: {
    sm: "30em", // small phone
    md: "48em", // ipad
    lg: "62em", // ipad pro
    xl: "80em", // laptop
    xxl: "96em", // pc
  },
  styles: {
    global: {
      html: {
        scrollBehavour: "smooth",
      },
      "html, body": {
        overflowX: "hidden",
        backgroundColor: "white",
      },
    },
  },
})
