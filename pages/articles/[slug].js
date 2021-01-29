import ArticleAuthor from '@/components/article/article-author'
import ArticleBody from '@/components/article/article-body'
import ArticleCategory from '@/components/article/article-category'
import ArticleCoverImage from '@/components/article/article-cover-image'
import ArticleLayout from '@/components/article/article-layout'
import ArticleTitle from '@/components/article/article-title'
import BasicMeta from '@/components/article/meta/basicMeta'
import JsonLdMeta from '@/components/article/meta/jsonLdMeta'
import OpenGraphMeta from '@/components/article/meta/openGraphMeta'
import TwitterCardMeta from '@/components/article/meta/twitterCardMeta'
import Layout from '@/components/sections/layout'
import { getPostContent, listPosts } from '@/lib/posts'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import yaml from 'js-yaml'
import hydrate from 'next-mdx-remote/hydrate'
import { getAuthor } from '@/lib/authors'
import { getTag } from '@/lib/postTags'
import { Flex } from '@chakra-ui/react'
import ArticleDate from '@/components/article/article-date'

export default function Article({ article, source }) {
  const content = hydrate(source, {})
  const { title, slug, date, tags, author, featuredimage, body } = article
  const keywords = tags.map(it => getTag(it).name)
  const authorName = getAuthor(author).name
  return (
    <Layout>
      <BasicMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        // description={description}
      />
      <TwitterCardMeta
        url={`/posts/${slug}`}
        title={title}
        // description={description}
      />
      <OpenGraphMeta
        url={`/posts/${slug}`}
        title={title}
        // description={description}
      />
      <JsonLdMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        author={authorName}
        // description={description}
      />

      <ArticleLayout>
        <Flex mb='4' color='gray.400' justifyContent='space-between'>
          <ArticleAuthor slug={author} name={getAuthor(author).name} />
          <ArticleDate date={date} />
        </Flex>
        <ArticleTitle title={title} />
        <ArticleCategory tags={tags.map(it => getTag(it))} />
        <ArticleCoverImage featuredImage={featuredimage} />
        <ArticleBody body={content} />
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

  // TODO map tags

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
