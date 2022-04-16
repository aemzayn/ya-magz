import Head from "next/head"
import { jsonLdScriptProps } from "react-schemaorg"
import config from "@/contents/site-settings.json"

export default function ArticleMeta({
  title,
  description,
  author,
  keywords,
  date,
  image,
  url,
}) {
  return (
    <Head>
      {author && <meta name="author" content={author} />}
      <meta itemProp="datePublished" content={date} />
      <meta itemProp="image" content={image} />
      <meta itemProp="publisher" content="Ya! Magazine" />
      <script
        {...jsonLdScriptProps({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: config.base_url + url,
          headline: title,
          keywords: Array.isArray(keywords)
            ? keywords.join(",")
            : keywords ?? undefined,
          datePublished: date,
          author: {
            "@type": "Person",
            name: author,
          },
          image,
          description,
        })}
      />
    </Head>
  )
}
