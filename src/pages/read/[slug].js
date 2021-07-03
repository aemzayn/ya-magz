import { useState, useEffect } from "react"
import config from "@/cms/site-settings.json"
import readingTime from "reading-time"

// Components
import ArticleAuthor from "@/components/article/article-author"
import ArticleBody from "@/components/article/article-body"
import ArticleCategory from "@/components/article/article-category"
import ArticleCoverImage from "@/components/article/article-cover-image"
import ArticleLayout from "@/components/article/article-layout"
import ArticleTitle from "@/components/article/article-title"
import Layout from "@/components/layout/layout"
import { getArticleBySlug } from "src/libs/posts"
import ArticleShare from "@/components/article/article-share"
import Meta from "@/components/meta/meta"

// Library Components
import { Avatar, Icon, Stack, Text } from "@chakra-ui/react"
import { FiUser } from "react-icons/fi"

// Libs
// import { getArticleBySlug, listPosts } from "src/libs/posts"
import { getAuthor } from "src/libs/authors"
import { getTag } from "src/libs/postTags"
import Comment from "@/components/article/comment/comment"
import markdownToHtml from "src/libs/markdownToHTML"

export default function Article({ article }) {
  const {
    title,
    slug,
    excerpt,
    date,
    tags,
    author,
    featuredimage,
    featuredimageurl,
    content,
  } = article

  const fullUrl = `${config.base_url}/read/${slug}`
  const readTime = readingTime(content)
  const datePublised = new Date(date)

  return (
    <Layout>
      <Meta
        url={`/read/${slug}`}
        title={title}
        keywords={tags.name}
        description={excerpt}
        date={datePublised}
        author={author.name}
        image={featuredimage || featuredimageurl}
      />

      <ArticleLayout>
        <meta itemProp="datePublished" content={datePublised} />
        <meta itemProp="image" content={featuredimage || featuredimageurl} />
        <meta itemProp="publisher" content="Ya! Magazine" />
        <section itemProp="articleBody">
          <header>
            <ArticleCategory tags={tags} />
            <ArticleTitle slug={slug} title={title} />
            <Stack
              direction="row"
              flexWrap="wrap"
              spacing={{ base: 1, md: 2 }}
              my="4"
              color="gray.600"
            >
              <Avatar
                size="xs"
                bgColor="gray.200"
                icon={<Icon as={FiUser} />}
              />
              <ArticleAuthor author={author} />
              <Text as="span" color="brand.gray">
                {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
                  datePublised
                )}
              </Text>
              <Text as="span" color="brand.gray">
                ·
              </Text>
              <Text as="span" color="brand.gray">
                {readTime?.text}
              </Text>
            </Stack>
            <ArticleCoverImage
              featuredImage={featuredimage || featuredimageurl}
              alt={title}
            />
          </header>
          <ArticleBody body={content} />
          {/* <Comment slug={slug} /> */}
          <ArticleShare url={fullUrl} />
        </section>
      </ArticleLayout>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const article = await getArticleBySlug(params.slug)
  const content = await markdownToHtml(article.content)
  return {
    props: {
      article: { ...article, content },
    },
  }
}
