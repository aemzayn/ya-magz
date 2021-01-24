import tags from '@/cms/meta/post-tags.json'

const tagMap = generateTagMap()

function generateTagMap() {
  let result = {}
  for (const tag of tags.tags) {
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
