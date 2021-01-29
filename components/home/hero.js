import { Flex } from '@chakra-ui/react'
import HeroTitle from './hero-title'
import HeroCTA from './hero-cta'
import HeroImage from './hero-image'
import HeroLayout from './hero-layout'
import HeroExcerpt from './hero-excerpt'
import HeroAuthorCategory from './hero-author-category'

export default function Hero({ article }) {
  return (
    <HeroLayout>
      <Flex
        as='main'
        w={{ base: '100vw', xl: '66vw' }}
        d='flex'
        flexDir='column'
        alignItems='center'
        justifyContent='center'
        pl={{ base: '0', xl: '8' }}
        py={{ base: '2rem', lg: '10rem', xl: 0 }}
      >
        <HeroAuthorCategory
          author={article?.author}
          category={article?.tags[0]}
        />
        <HeroTitle title={article?.title} />
        <HeroExcerpt excerpt={article?.excerpt} />
        <HeroCTA url={article?.slug} />
      </Flex>
      <HeroImage url={article?.featuredimage} />
    </HeroLayout>
  )
}
