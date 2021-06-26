import Head from "next/head"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link
          rel="preload"
          as="font"
          href="/fonts/product-sans/ProductSans-Regular.ttf"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/product-sans/ProductSans-Thin.ttf"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/product-sans/ProductSans-Medium.ttf"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/product-sans/ProductSans-Bold.ttf"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/product-sans/ProductSans-Black.ttf"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
