import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import readingTime from "reading-time"
import { useInView } from "react-intersection-observer"

// Components
import ArticleAuthor from "@/components/article/ArticleAuthor"
import ArticleBody from "@/components/article/ArticleBody"
import ArticleCategory from "@/components/article/ArticleCategory"
import ArticleCoverImage from "@/components/article/ArticleCoverImage"
import ArticleLayout from "@/components/article/ArticleLayout"
import ArticleTitle from "@/components/article/ArticleTitle"
import Layout from "@/components/layout"
import ArticleShare from "@/components/article/ArticleShare"
import Meta from "@/components/meta"
const Comment = dynamic(() => import("@/components/comment"))

// Library Components
import { Avatar, Icon, Stack, Text } from "@chakra-ui/react"
import { FiUser } from "react-icons/fi"

// Libs
import ArticleMeta from "@/components/meta/ArticleMeta"
import config from "@/contents/site-settings.json"
import { fetchArticle, fetchArticleSlugs } from "@/libs/api"
import markdownToHtml from "@/libs/markdownToHTML"
import { formatDate } from "@/libs/date"

export default function Article({ article }) {
  const [comments, setComments] = useState([])
  const { title, slug, excerpt, date, category, authors, image_url, content } =
    article

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
  const readTime = content && readingTime(content)
  const datePublised = new Date(date)
  const authorsMeta = authors.reduce((all, author, index) => {
    let sep = index < authors.length - 1
    return all + author.name + (sep ? ", " : "")
  }, "")

  console.log(authorsMeta)
  return (
    <Layout>
      <Meta
        url={`/read/${slug}`}
        title={title}
        keywords={category?.name}
        description={excerpt}
        date={datePublised}
        author={authorsMeta}
        image={image_url}
      />
      <ArticleMeta
        title={title}
        description={excerpt}
        author={authorsMeta}
        keywords={category?.name}
        date={datePublised}
        image={image_url}
        url={`/read/${slug}`}
      />

      <ArticleLayout>
        <meta itemProp="datePublished" content={datePublised} />
        <meta itemProp="image" content={image_url} />
        <meta itemProp="publisher" content="Ya! Magazine" />
        <section itemProp="articleBody">
          <header>
            {category && <ArticleCategory category={category} />}
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
              {authors && <ArticleAuthor authors={authors} />}
              {date && (
                <Text as="span" color="brand.gray">
                  {formatDate(datePublised)}
                </Text>
              )}
              <Text as="span" color="brand.gray">
                ·
              </Text>
              <Text as="span" color="brand.gray">
                {readTime?.text}
              </Text>
            </Stack>
            <ArticleCoverImage featuredImage={image_url} alt={title} />
          </header>
          <ArticleBody body={content} />
          <ArticleShare url={fullUrl} />
          <div ref={ref}>
            {inView && (
              <Comment
                comments={comments}
                setComments={setComments}
                slug={slug}
              />
            )}
          </div>
        </section>
      </ArticleLayout>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const article = (await fetchArticle(params.slug))[0]
  const content = await markdownToHtml(article.content)
  return {
    props: {
      article: {
        ...article,
        content,
      },
    },
  }
}
