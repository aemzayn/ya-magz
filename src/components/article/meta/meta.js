import { Fragment } from "react"
import BasicMeta from "./basicMeta"
import JsonLdMeta from "./jsonLdMeta"
import OpenGraphMeta from "./openGraphMeta"
import TwitterCardMeta from "./twitterCardMeta"

const Meta = ({ title, description, keywords, author, url, image, date }) => {
  let metaImage =
    image ||
    "https://res.cloudinary.com/yacloud/image/upload/v1622365446/articles%20pictures/ya-magz-white_utg80x.png"
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
        image={metaImage}
      />
      <OpenGraphMeta
        url={url}
        title={title}
        description={description}
        image={metaImage}
      />
      <TwitterCardMeta url={url} title={title} description={description} />
    </Fragment>
  )
}

export default Meta
