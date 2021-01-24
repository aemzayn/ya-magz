import ArticleCard from '@/components/home/article-card'
import { useRouter } from 'next/router'
import { Flex, Heading } from '@chakra-ui/react'
import { countPosts, listPosts } from '@/lib/posts'
import config from '@/cms/site-settings.json'
import Layout from '@/components/sections/layout'
import { getTag, listTags } from '@/lib/postTags'
import BasicMeta from '@/components/article/meta/basicMeta'
import OpenGraphMeta from '@/components/article/meta/openGraphMeta'
import TwitterCardMeta from '@/components/article/meta/twitterCardMeta'

export default function ArticlesByCategory({ articles }) {
  const router = useRouter()
  const { slug } = router.query
  const category = getTag(slug).name || ''
  const url = `/category/${category}`
  const title = category

  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <Flex
        direction='column'
        alignItems='center'
        justifyContent='center'
        w='100%'
        px='8'
        pb='8'
      >
        <Flex
          d='flex'
          flexDir={{ base: 'column', sm: 'row' }}
          alignItems={{ base: 'center', xl: 'flex-end' }}
          textAlign='center'
          my='8'
        >
          <Heading
            className='page-title'
            color='gray.400'
            size='xl'
            display='block'
            mr='2'
          >
            Category:
          </Heading>
          <Heading className='page-title' size='2xl' display='block'>
            {category}
          </Heading>
        </Flex>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          w='100%'
          flexWrap='wrap'
        >
          {articles.map((ar, i) => (
            <ArticleCard key={i} article={ar} />
          ))}
        </Flex>
      </Flex>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const articles = listPosts(1, config.posts_per_page, params.slug) || []
  const pagination = {
    current: 1,
    total: Math.ceil(countPosts() / config.posts_per_page),
  }
  return {
    props: {
      articles,
      pagination,
    },
  }
}

export async function getStaticPaths() {
  const paths = listTags().map(it => ({
    params: {
      slug: it.slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
