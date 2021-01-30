import { forwardRef } from 'react'
import { Button, Flex, Heading } from '@chakra-ui/react'
import ArticleCard from '@/components/home/article-card'
import Pagination from './pagination'
import Link from 'next/link'
import { isValidMotionProp, motion } from 'framer-motion'
import ArticleCategoryNav from './article-category-nav'

export default function ArticleList({
  articles = [],
  pagination,
  title = '',
  subtitle = '',
  moreBtn = false,
  moreBtnHref = '/',
  nav,
}) {
  const MotionBox = motion.custom(
    forwardRef((props, ref) => {
      const chakraProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !isValidMotionProp(key))
      )
      return <Flex ref={ref} {...chakraProps} />
    })
  )

  return (
    <MotionBox
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
        mb='8'
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

      <Flex direction={{ base: 'column', md: 'row' }} w='100%' flexWrap='wrap'>
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
        <Button
          py={{ base: '5', md: '7' }}
          px={{ base: '10', md: '12' }}
          lineHeight='1'
          size='lg'
          bg='teal.400'
          color='white'
          borderRadius='50px'
          fontWeight='normal'
          borderRadius='false'
          _hover={{
            bg: 'teal.500',
          }}
        >
          <Link href={moreBtnHref}>
            <a>More Articles</a>
          </Link>
        </Button>
      )}
    </MotionBox>
  )
}
