import renderToString from 'next-mdx-remote/render-to-string'
import yaml from 'js-yaml'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'
import config from '@/cms/site-settings.json'

// Components
import ArticleAuthor from '@/components/article/article-author'
import ArticleBody from '@/components/article/article-body'
import ArticleCategory from '@/components/article/article-category'
import ArticleCoverImage from '@/components/article/article-cover-image'
import ArticleLayout from '@/components/article/article-layout'
import ArticleTitle from '@/components/article/article-title'
import Layout from '@/components/sections/layout'
import ArticleDate from '@/components/article/article-date'
import ArticleShare from '@/components/article/article-share'
import Meta from '@/components/article/meta/meta'

// Chakra Components
import { Flex } from '@chakra-ui/react'

// Libs
import { getPostContent, listPosts } from '@/lib/posts'
import { getAuthor } from '@/lib/authors'
import { getTag } from '@/lib/postTags'

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
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          mb='4'
          color='gray.400'
          justifyContent='space-between'
        >
          <ArticleAuthor slug={author} name={getAuthor(author).name} />
          <ArticleDate date={date} />
        </Flex>
        <ArticleTitle title={title} />
        <ArticleCategory tags={getTag(tags)} />
        <ArticleCoverImage
          featuredImage={featuredimage || featuredimageurl}
          alt={title}
          imgsource={article?.imgsource}
        />
        <ArticleBody body={content} />
        <ArticleShare url={fullUrl} />
      </ArticleLayout>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
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

export async function getStaticPaths() {
  const paths = listPosts(1, 65535).map(it => ({
    params: {
      slug: it.slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
