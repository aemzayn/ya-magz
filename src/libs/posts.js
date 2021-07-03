import site from "@/config/site.js"
import fetchApi from "./fetchApi"

let postCache = []

async function scanDirectory() {
  if (postCache.length > 0) {
    return postCache
  }
  const articles = await fetchApi("/articles")
  postCache = articles
  return articles
}

export async function getHomeArticles() {
  const allPosts = await scanDirectory()
  const heroArticle = allPosts.find(post => post.featuredpost)
  const articles = allPosts
    .filter(it => !it.featuredPost && it.tags !== "art")
    .slice(0, site.posts_per_page * 2)

  return { heroArticle, articles }
}

export async function getHeroArticle() {
  return (await scanDirectory()).find(it => it.featuredpost)
}

export async function getFeaturedArticles() {
  return (await scanDirectory())
    .filter(it => it.featuredpost === true)
    .slice(1, 3)
}

export async function countPosts(tag) {
  return (await scanDirectory()).filter(
    it => !tag || (it.tags && it.tags.includes(tag))
  ).length
}

export async function listPosts(page = 0, limit = site.posts_per_page, tag) {
  const articles = await scanDirectory()
  return articles
    .filter(it => !tag || (it.tags && it.tags === tag))
    .slice((page - 1) * limit, page * limit)
}

export async function getArtPosts() {
  return (await scanDirectory()).filter(it => it.tags === "art").slice(0, 6)
}

export async function listArticlesWithoutTag(page, limit, tag) {
  return (await scanDirectory())
    .filter(({ tags }) => tags !== tag)
    .slice((page - 1) * limit, page * limit)
}

export async function countArticlesWithoutTag(tag) {
  return (await scanDirectory()).filter(({ tags }) => tags !== tag).length
}

export async function getPostByAuthor(page, limit, author) {
  return (await scanDirectory())
    .filter(it => !author || it.author === author)
    .slice((page - 1) * limit, page * limit)
}

export async function countPostByAuthor(author) {
  return (await scanDirectory()).filter(it => !author || it.author === author)
    .length
}

export async function getArticleBySlug(slug) {
  return (await scanDirectory()).filter(it => it.slug === slug)[0]
}

export async function checkSlug(slug) {
  return !!(await scanDirectory()).find(it => it.slug === slug)
}
