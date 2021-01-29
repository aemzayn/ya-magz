import { Fragment } from 'react'
import BasicMeta from './basicMeta'
import JsonLdMeta from './jsonLdMeta'
import OpenGraphMeta from './openGraphMeta'
import TwitterCardMeta from './twitterCardMeta'

const Meta = ({ title, description, keywords, author, url, image, date }) => {
  return (
    <Fragment>
      <BasicMeta
        title={title}
        description={description}
        keywords={keywords}
        author={author}
        url={url}
      />
      <JsonLdMeta
        title={title}
        description={description}
        keywords={keywords}
        author={author}
        url={url}
        date={date}
        image={image}
      />
      <OpenGraphMeta
        url={url}
        title={title}
        description={description}
        image={image}
      />
      <TwitterCardMeta url={url} title={title} description={description} />
    </Fragment>
  )
}

export default Meta
