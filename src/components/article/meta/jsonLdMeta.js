import { jsonLdScriptProps } from "react-schemaorg"
import config from "@/cms/site-settings.json"
import Head from "next/head"

const JsonLdMeta = ({
  url,
  title,
  keywords,
  date,
  author,
  image,
  description,
}) => {
  return (
    <Head>
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
          image: image,
          description: description,
        })}
      />
    </Head>
  )
}

export default JsonLdMeta
