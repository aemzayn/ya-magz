import ArticleCard from '@/components/home/article-card'
import {
  Flex,
  Heading,
  Grid,
  chakra,
  Center,
  SimpleGrid,
} from '@chakra-ui/react'
import ArticleCategoryNav from './article-category-nav'
import PrimaryButton from './primary-button'
import Pagination from './pagination'
import PageLayout from '../page-layout'
import ShortArticleCard from './short-article-card'

export default function ArticleList({
  articles = [],
  pagination,
  title = '',
  subtitle = '',
  moreBtn = false,
  moreBtnHref = '/',
  nav,
  url,
}) {
  const isArtCategory = url === 'art'
  return (
    <PageLayout py={{ base: 8, md: 10 }} px={{ base: 4 }}>
      <Flex
        flexDir={{ base: 'column', sm: 'row' }}
        alignItems={{ base: 'center', xl: 'flex-end' }}
        textAlign='center'
        mb={{ base: 1 }}
      >
        {title && (
          <Heading
            className='page-title'
            color={!subtitle ? 'black' : 'gray.400'}
            size='2xl'
            display='block'
            mr={subtitle ? 2 : 0}
          >
            {title}
          </Heading>
        )}
        {subtitle && (
          <Heading className='page-title' size='2xl' display='block'>
            {subtitle}
          </Heading>
        )}
      </Flex>

      {nav && <ArticleCategoryNav />}

      <chakra.div as='main' minH='40vh'>
        {articles.length === 0 && (
          <Center minH='10vh'>
            <Heading textAlign='center'>No articles with this category</Heading>
          </Center>
        )}
        {isArtCategory ? (
          <SimpleGrid
            w='full'
            columns={{ base: 1, md: 3 }}
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
            spacing={{ base: 2, md: 4 }}
          >
            {articles.map((ar, i) => (
              <ShortArticleCard key={i} article={ar} />
            ))}
          </SimpleGrid>
        ) : (
          <SimpleGrid
            w='100%'
            columns={{ base: 1, md: 2, lg: 3 }}
            mt={nav ? 0 : 8}
          >
            {articles.map((ar, i) => (
              <ArticleCard key={i} article={ar} />
            ))}
          </SimpleGrid>
        )}
      </chakra.div>

      {pagination && (
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: page => (page === 1 ? '/read' : '/read/page/[page]'),
            as: page => (page === 1 ? null : '/read/page/' + page),
          }}
        />
      )}

      {moreBtn && (
        <PrimaryButton bgColor='gray.800' href={moreBtnHref}>
          Show More
        </PrimaryButton>
      )}
    </PageLayout>
  )
}
