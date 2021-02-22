import ArticleCard from '@/components/home/article-card'
import { Flex, Heading } from '@chakra-ui/react'
import ArticleCategoryNav from './article-category-nav'
import PrimaryButton from './primary-button'
import Pagination from './pagination'

export default function ArticleList({
  articles = [],
  pagination,
  title = '',
  subtitle = '',
  moreBtn = false,
  moreBtnHref = '/',
  nav,
}) {
  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='center'
      w='100%'
      p='8'
    >
      <Flex
        flexDir={{ base: 'column', sm: 'row' }}
        alignItems={{ base: 'center', xl: 'flex-end' }}
        textAlign='center'
      >
        {title && (
          <Heading
            className='page-title'
            color={!subtitle ? 'black' : 'gray.400'}
            size='2xl'
            display='block'
            mr={subtitle ? 2 : 0}
            fontWeight='normal'
            textTransform='uppercase'
          >
            {title}
          </Heading>
        )}
        {subtitle && (
          <Heading
            className='page-title'
            size='2xl'
            display='block'
            textTransform='uppercase'
          >
            {subtitle}
          </Heading>
        )}
      </Flex>

      {nav && <ArticleCategoryNav />}

      <Flex
        w='100%'
        d='flex'
        direction={{ base: 'column', md: 'row' }}
        flexWrap='wrap'
      >
        {articles.map((ar, i) => (
          <ArticleCard key={i} article={ar} />
        ))}
      </Flex>

      {pagination && (
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: page => (page === 1 ? '/articles' : '/articles/page/[page]'),
            as: page => (page === 1 ? null : '/articles/page/' + page),
          }}
        />
      )}

      {moreBtn && (
        <PrimaryButton href={moreBtnHref}>More Articles</PrimaryButton>
      )}
    </Flex>
  )
}
