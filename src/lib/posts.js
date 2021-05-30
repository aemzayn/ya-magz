import fs from "fs"
import matter from "gray-matter"
import path from "path"
import yaml from "js-yaml"
import config from "@/cms/site-settings.json"

const postsDirectory = path.join(process.cwd(), "posts")

let postCache = []

function scanDirectory() {
  if (postCache.length > 0) {
    return postCache
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(it => it.endsWith(".mdx"))
    .map(fileName => {
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: s => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
        },
      })
      const matterData = matterResult.data
      const slug = fileName.replace(/\.mdx$/, "")

      // Validate slug string
      if (matterData.slug !== slug) {
        throw new Error(
          "slug field not match with the path of its content source"
        )
      }

      return matterData
    })
  // Sort posts by date
  postCache = allPostsData
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
    .filter(p => p.slug !== "prusa-dari-bursa-untuk-bangsa") // TODO: Remove this filter after featured image found
  return postCache
}

export function getHomeArticles() {
  let nslice = 2
  const allPosts = scanDirectory()
  const heroArticle = allPosts.find(post => post.featuredpost)
  const featuredArticle = allPosts.filter(post => post.featuredpost).slice(1, 3)
  const articles = allPosts
    .filter(
      it =>
        it.slug !== heroArticle.slug &&
        it.slug !== featuredArticle[0].slug &&
        it.slug !== featuredArticle[1].slug &&
        it.tags !== "art"
    )
    .slice(0, config.posts_per_page * nslice)
  const artArticles = allPosts
    .filter(it => it.tags === "art")
    .slice(0, config.posts_per_page)

  return { heroArticle, featuredArticle, articles, artArticles }
}

export function getHeroArticle() {
  return scanDirectory().find(it => it.featuredpost)
}

export function countPosts(tag) {
  return scanDirectory().filter(
    it => !tag || (it.tags && it.tags.includes(tag))
  ).length
}

export function listPosts(page = 0, limit = config.posts_per_page, tag) {
  return scanDirectory()
    .filter(it => !tag || (it.tags && it.tags === tag))
    .slice((page - 1) * limit, page * limit)
}

export function getArtPosts() {
  return scanDirectory()
    .filter(it => it.tags === "art")
    .slice(0, 6)
}

export function listArticlesWithoutTag(page, limit, tag) {
  return scanDirectory()
    .filter(({ tags }) => tags !== tag)
    .slice((page - 1) * limit, page * limit)
}

export function countArticlesWithoutTag(tag) {
  return scanDirectory().filter(({ tags }) => tags !== tag).length
}

export function getPostByAuthor(page, limit, author) {
  return scanDirectory()
    .filter(it => !author || it.author === author)
    .slice((page - 1) * limit, page * limit)
}

export function countPostByAuthor(author) {
  return scanDirectory().filter(it => !author || it.author === author).length
}

export function getPostContent(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const content = fs.readFileSync(fullPath, "utf8")
  return content
}
