import tags from '@/cms/tags.json'

const tagMap = generateTagMap()

function generateTagMap() {
  let result = {}
  for (let tag of tags.tags) {
    result[tag.slug] = tag
  }
  return result
}

export function getTag(tag) {
  return tagMap[tag]
}

export function listTags() {
  return tags.tags
}
