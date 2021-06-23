import Document, { Html, Head, Main, NextScript } from "next/document"
import { GA_TRACKING_ID } from "@/lib/gtag.js"
import { Fragment } from "react"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const isProduction = process.env.NODE_ENV === "production"

    return {
      ...initialProps,
      isProduction,
    }
  }

  render() {
    const { isProduction } = this.props

    return (
      <Html lang="id">
        <Head>
          <link
            rel="shortcut icon"
            href="/meta/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="/meta/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/meta/apple-touch-icon.png" />
          {/* We only want to add the scripts if in production */}
          {isProduction && GA_TRACKING_ID && (
            <Fragment>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </Fragment>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
