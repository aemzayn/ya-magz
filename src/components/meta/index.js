import Head from "next/head"
import config from "@/cms/site-settings.json"

export default function Meta({ title, description, keywords, url, image }) {
  return (
    <Head>
      <title>
        {title ? [title, config.site_title].join(" | ") : config.site_title}
      </title>
      <meta
        name="description"
        content={description ? description : config.site_description}
      />
      <meta
        name="keywords"
        content={
          keywords
            ? keywords
            : config.site_keywords.map(it => it.keyword).join(",")
        }
      />

      <link rel="canonical" href={config.base_url + url} />

      {/* Open Graph Meta */}
      <meta property="og:site_name" content={config.site_title} />
      <meta property="og:url" content={config.base_url + url} />
      <meta
        property="og:title"
        content={title ? [title, config.site_title].join(" | ") : ""}
      />
      <meta
        property="og:description"
        content={description ? description : config.site_description}
      />
      <meta property="og:image" content={image ?? config.seo_image} />
      <meta property="og:type" content="article" />

      {/* Twitter Card */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={config.twitter_account} />
      <meta property="twitter:url" content={config.base_url + url} />
      <meta
        property="twitter:title"
        content={title ? [title, config.site_title].join(" | ") : ""}
      />
      <meta
        property="twitter:description"
        content={description ? description : config.site_description}
      />
    </Head>
  )
}
