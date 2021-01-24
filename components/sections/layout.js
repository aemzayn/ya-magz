import Head from 'next/head'
import Footer from './footer'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <div className='root'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='apple-touch-icon' href='/icon.png' />
        <meta name='theme-color' content='#fff' />
        <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
      </Head>
      <nav>
        <Header />
      </nav>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
