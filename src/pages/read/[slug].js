import { useState, useEffect } from "react"
import renderToString from "next-mdx-remote/render-to-string"
import yaml from "js-yaml"
import hydrate from "next-mdx-remote/hydrate"
import matter from "gray-matter"
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
import ArticleShare from "@/components/article/article-share"
import Meta from "@/components/meta/meta"

// Library Components
import { Avatar, Icon, Stack, Text } from "@chakra-ui/react"
import { FiUser } from "react-icons/fi"

// Libs
import { getPostContent } from "@/lib/posts"
import { getAuthor } from "@/lib/authors"
import { getTag } from "@/lib/postTags"
import Comment from "@/components/article/comment/comment"

export default function Article({ article, source }) {
  const content = hydrate(source, {})
  const {
    title,
    slug,
    excerpt,
    date,
    tags,
    author,
    featuredimage,
    featuredimageurl,
  } = article

  const keywords = getTag(tags)
  const authorName = getAuthor(author).name
  const url = `/read/${slug}`
  const fullUrl = config.base_url + url
  const readTime = readingTime(source.renderedOutput)
  const datePublised = new Date(date)

  return (
    <Layout>
      <Meta
        url={url}
        title={title}
        keywords={keywords}
        description={excerpt}
        date={date}
        author={authorName}
        image={featuredimage || featuredimageurl}
      />

      <ArticleLayout>
        <meta itemProp="datePublished" content={datePublised} />
        <meta itemProp="image" content={featuredimage || featuredimageurl} />
        <meta itemProp="publisher" content="Ya! Magazine" />
        <section itemProp="articleBody">
          <header>
            <ArticleCategory tags={getTag(tags)} />
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
              <ArticleAuthor slug={author} name={getAuthor(author).name} />
              <Text as="span" color="brand.gray">
                {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
                  new Date(date)
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
              imgsource={article?.imgsource}
            />
          </header>
          <ArticleBody body={content} />
          <Comment slug={slug} />
          <ArticleShare url={fullUrl} />
        </section>
      </ArticleLayout>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const postContent = getPostContent(params.slug)
  const { data, content } = matter(postContent, {
    engines: {
      yaml: s => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
    },
  })
  const mdxSource = await renderToString(content, {
    scope: {},
  })
  return {
    props: {
      source: mdxSource,
      article: data,
    },
  }
}
