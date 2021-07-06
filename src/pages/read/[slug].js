import { useEffect, useState } from "react"
import readingTime from "reading-time"
import { useInView } from "react-intersection-observer"

// Components
import ArticleAuthor from "@/components/article/article-author"
import ArticleBody from "@/components/article/article-body"
import ArticleCategory from "@/components/article/article-category"
import ArticleCoverImage from "@/components/article/article-cover-image"
import ArticleLayout from "@/components/article/article-layout"
import ArticleTitle from "@/components/article/article-title"
import Layout from "@/components/layout"
import ArticleShare from "@/components/article/article-share"
import Meta from "@/components/meta"

// Library Components
import { Avatar, Icon, Stack, Text } from "@chakra-ui/react"
import { FiUser } from "react-icons/fi"

// Libs
import Comment from "@/components/comment"
import markdownToHtml from "src/libs/markdownToHTML"
import ArticleMeta from "@/components/meta/article-meta"
import config from "@/cms/site-settings.json"
import fetchApi from "@/libs/fetchApi"

export default function Article({ article }) {
  const [comments, setComments] = useState([])
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

  const { ref, inView } = useInView({
    rootMargin: "50px 0px",
    triggerOnce: true,
  })

  useEffect(() => {
    if (slug && inView) {
      fetch(`/api/post/${slug}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.data && data.data.comments) {
            setComments(data.data.comments)
          }
        })
    }
  }, [slug, inView])

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
      <ArticleMeta
        title={title}
        description={excerpt}
        author={author.name}
        keywords={tags.title}
        date={datePublised}
        image={featuredimage || featuredimageurl}
        url={`/read/${slug}`}
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
          <div ref={ref}>
            {inView && (
              <Comment
                comments={comments}
                setComments={setComments}
                slug={slug}
              />
            )}
          </div>
          <ArticleShare url={fullUrl} />
        </section>
      </ArticleLayout>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const article = await fetchApi(`/articles/${params.slug}`)
  const content = await markdownToHtml(article.content)
  return {
    props: {
      article: { ...article, content },
    },
  }
}
