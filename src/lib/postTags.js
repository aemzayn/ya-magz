import tags from '@/cms/post-tags.json'

const tagMap = generateTagMap()

function generateTagMap() {
  let result = {}
  for (let tag of tags.tags) {
    result[tag.slug] = tag
  }
  return result
}

export function getTag(slug) {
  return tagMap[slug]
}

export function listTags() {
  return tags.tags
}
