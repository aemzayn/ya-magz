let categoriesCache = []

async function fetchCategories() {
  if (categoriesCache.length > 0) return categoriesCache
  const categories = await (
    await fetch(`${process.env.SERVER_URL}/categories`)
  ).json()
  categoriesCache = categories
  return categories
}

export async function getCategory(slug) {
  return (await fetchCategories()).find(cat => cat.slug === slug)
}

export async function listCategories() {
  return await fetchCategories()
}

export function getTag(tag) {
  return tagMap[tag]
}

export function listTags() {
  return tags.tags
}
