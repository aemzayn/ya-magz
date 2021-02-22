import Head from 'next/head'
import config from '@/cms/site-settings.json'

const TwitterCardMeta = ({ url, title, description }) => {
  return (
    <Head>
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:site' content={config.twitter_account} />
      <meta property='twitter:url' content={config.base_url + url} />
      <meta
        property='twitter:title'
        content={title ? [title, config.site_title].join(' | ') : ''}
      />
      <meta
        property='twitter:description'
        content={description ? description : config.site_description}
      />
    </Head>
  )
}

export default TwitterCardMeta
