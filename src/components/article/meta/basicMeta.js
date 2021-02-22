import Head from 'next/head'
import config from '@/cms/site-settings.json'

const BasicMeta = ({ title, description, keywords, author, url }) => {
  return (
    <Head>
      <title>
        {title ? [title, config.site_title].join(' | ') : config.site_title}
      </title>
      <meta
        name='description'
        content={description ? description : config.site_description}
      />
      <meta
        name='keywords'
        content={
          keywords
            ? keywords
            : config.site_keywords.map(it => it.keyword).join(',')
        }
      />
      {author ? <meta name='author' content={author} /> : null}
      <link rel='canonical' href={config.base_url + url} />
    </Head>
  )
}

export default BasicMeta
