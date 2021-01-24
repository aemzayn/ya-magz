import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import yaml from 'js-yaml'

const postsDirectory = path.join(process.cwd(), 'data/posts')

let postCache = []

function scanDirectory() {
  if (postCache.length > 0) {
    return postCache
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(it => it.endsWith('.mdx'))
    .map(fileName => {
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: s => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
        },
      })
      const matterData = matterResult.data
      const slug = fileName.replace(/\.mdx$/, '')

      // Validate slug string
      if (matterData.slug !== slug) {
        throw new Error(
          'slug field not match with the path of its content source'
        )
      }

      return matterData
    })
  // Sort posts by date
  postCache = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  return postCache
}

export function getHomeArticles() {
  return scanDirectory()
    .filter(it => !it.featuredpost)
    .slice(0, 8)
}

export function getHeroArticle() {
  return scanDirectory().filter(it => it.featuredpost)[0]
}

export function countPosts(tag) {
  return scanDirectory().filter(
    it => !tag || (it.tags && it.tags.includes(tag))
  ).length
}

export function listPosts(page, limit, tag) {
  return scanDirectory()
    .filter(it => !tag || (it.tags && it.tags.includes(tag)))
    .slice((page - 1) * limit, page * limit)
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
  const content = fs.readFileSync(fullPath, 'utf8')
  return content
}
