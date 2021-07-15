import { extendTheme, theme as chakraTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "Lora, sans-serif",
    body: "Karla, sans-serif",
  },
  colors: {
    brand: {
      main: chakraTheme.colors.black,
      light: chakraTheme.colors.black,
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
      ".ya-logo": {
        p: {
          fontFamily: "'Montserrat', sans-serif",
        },
      },
      ".markdown": {
        "div.end-p": {
          marginBottom: 4,
        },
        a: {
          color: chakraTheme.colors.teal[500],
        },
        p: {
          lineHeight: 7,
          marginY: 6,
          fontSize: "lg",
        },
        "h1, h2, h3, h4, h5, h6": {
          fontFamily: "Lora",
          fontWeight: 700,
          marginTop: 6,
          marginBottom: 2,
          textOverflow: "ellipsis",
          lineHeight: "initial",
        },
        h1: {
          fontSize: "5xl",
        },
        h2: {
          fontSize: "4xl",
        },
        h3: {
          fontSize: "3xl",
        },
        h4: {
          fontSize: "2xl",
        },
        h5: {
          fontSize: "xl",
        },
        h6: {
          fontSize: "lg",
        },
        blockquote: {
          pl: 4,
          pos: "relative",
          _before: {
            content: "''",
            display: "block",
            pos: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: 1,
            bgColor: chakraTheme.colors.teal[400],
          },
        },
        table: {
          maxWidth: "full",
          borderSpacing: 0,
          mt: 6,
          thead: {
            background: chakraTheme.colors.gray[100],
          },
          th: {
            fontWeight: 500,
          },
          "th, td": {
            padding: "0.5em 1em",
            border: "1px double #eeeeee",
          },
          "ol, ul": {
            padding: 0,
            paddingRight: 6,
            li: {
              lineHeight: 6,
              "ol, ul": {
                margin: 0,
              },
            },
          },
          "abbr[title]": {
            textDecoration: "underline double",
          },
        },
      },
      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        background: chakraTheme.colors.yellow[500],
        pos: "fixed",
        zIndex: 99999,
        top: 0,
        left: 0,
        width: "full",
        height: 1,
      },
      ".nprogress-custom-parent": {
        overflow: "hidden",
        position: "absolute",
      },
    },
  },
})

export default theme
