let authorsCache = []

async function fetchAuthors() {
  if (authorsCache.length > 0) return authorsCache
  const authors = await (
    await fetch(`${process.env.SERVER_URL}/authors`)
  ).json()
  authorsCache = authors
  return authors
}

export async function getAuthor(slug) {
  return (await fetchAuthors()).find(author => author.slug === slug)
}

export async function listAuthor() {
  return (await fetchAuthors()).sort((a, b) => a.name.localeCompare(b.name))
}
