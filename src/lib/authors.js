import authors from "../../cms/authors.yml"

const authorMap = generateAuthorMap()

function generateAuthorMap() {
  let result = {}
  for (const author of authors.authors) {
    result[author.slug] = author
  }
  return result
}

export function getAuthor(slug) {
  return authorMap[slug]
}

export function listAuthor() {
  return authors.authors.sort((a, b) => a.name.localeCompare(b.name))
}
