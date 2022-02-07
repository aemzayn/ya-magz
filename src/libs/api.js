export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}

export async function fetchArticles() {
  const articles = await fetchAPI("/articles?_sort=date:DESC,title:ASC")
  return articles
}

export async function fetchHomeArticles() {
  const articles = await fetchAPI(
    "/articles?_sort=date:DESC,title:ASC&featured=false"
  )
  return articles.slice(0, 18)
}

export async function fetchFeatured() {
  return await fetchAPI(
    "/articles?_sort=date:DESC,title:ASC&featured=true&_limit=2&_start=1"
  )
}

export async function fetchHero() {
  const data = await fetchAPI(
    "/articles?_sort=date:DESC,title:ASC&featured=true&_limit=1"
  )
  return data[0]
}

export async function fetchByCategory(slug) {
  if (!slug) return null
  return await fetchAPI(
    `/articles?category.slug=${slug}&_sort=date:DESC,title:ASC`
  )
}

export async function fetchPaginated(page = 1, category) {
  if (!category) {
    return await fetchAPI(
      `/articles?_sort=date:DESC,title:ASC&_start=${(page - 1) * 9}&_limit=9`
    )
  }
  const articles = await fetchAPI(
    `/categories/${category}?_sort=date:DESC,title:ASC&_start=${
      (page - 1) * 9
    }&_limit=9`
  )

  return articles
}

export async function fetchArticle(slug) {
  if (!slug) return {}
  return await fetchAPI(`/articles?slug=${slug}`)
}

export async function fetchArticleSlugs() {
  const articles = await fetchAPI("/articles?_sort=title:ASC")
  return articles.map(ar => ({ title: ar.title, slug: ar.slug }))
}

export async function countArticles() {
  return await fetchAPI("/articles/count")
}

export async function fetchCategorySlug() {
  const categories = await fetchAPI("/categories")
  return categories.map(cat => ({ name: cat.name, slug: cat.slug }))
}

export async function fetchAuthorsSlug() {
  const authors = await fetchAPI("/authors?_sort=slug")
  return authors.map(author => ({
    name: author.name,
    slug: author.slug,
    id: author._id,
  }))
}

export async function fetchAuthorArticles(slug) {
  if (!slug) return []
  return await fetchAPI(
    `/articles?authors.slug=${slug}&_sort=date:DESC,title:ASC`
  )
}

export async function checkSlug(slug) {
  try {
    const data = await fetchAPI(`/articles?slug=${slug}`)
    if (data) {
      return true
    }
  } catch (error) {
    return false
  }
}
